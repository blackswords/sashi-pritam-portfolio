import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"

export async function GET() {
  try {
    // Path to the cover letter file in the public folder
    const filePath = join(process.cwd(), "public", "SashiPritam_Coverletter.pdf")

    // Read the file
    const fileBuffer = await readFile(filePath)

    // Log download for analytics
    console.log("📄 Cover letter downloaded at:", new Date().toISOString())

    // Return the file with proper headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Sashi_Pritam_Cover_Letter.pdf",
        "Content-Length": fileBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("Cover letter download error:", error)

    // If file doesn't exist, return a helpful error
    return NextResponse.json(
      {
        error: "Cover letter file not found. Please add 'cover-letter.pdf' to the public folder.",
        instructions: "Add your cover-letter.pdf file to the public/ directory in your project.",
      },
      { status: 404 },
    )
  }
}
