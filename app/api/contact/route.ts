import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Log the contact form submission (in production, you'd save to database)
    console.log("📧 New Contact Form Submission:", {
      name,
      email,
      company: company || "Not provided",
      subject,
      message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // 1. Send an email notification to yourself
    // 2. Send a confirmation email to the user
    // 3. Save to database
    // 4. Integrate with CRM

    /* Example with Resend (uncomment and configure):
    
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    // Send notification to yourself
    await resend.emails.send({
      from: 'contact@sashipritam.com',
      to: 'sashipritam@gmail.com',
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    })
    
    // Send confirmation to user
    await resend.emails.send({
      from: 'noreply@sashipritam.com',
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Thanks for reaching out, ${name}!</h2>
          <p>I've received your message about "${subject}" and will get back to you within 24 hours.</p>
          <p>Best regards,<br>Sashi Pritam</p>
        </div>
      `,
    })
    */

    return NextResponse.json(
      {
        message: "Message sent successfully",
        data: {
          name,
          email,
          subject,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("❌ Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
