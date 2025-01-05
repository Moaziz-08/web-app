import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email
    let info = await transporter.sendMail({
      from: '"Deutsch-Französische Einheit" <noreply@deutsch-franzosische-einheit.com>',
      to: "abdulazizmoaz15@gmail.com",
      subject: "Neue Kontaktanfrage",
      text: `Name: ${data.name}\nEmail: ${data.email}\nNachricht: ${data.message}`,
      html: `<p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Nachricht:</strong> ${data.message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ message: 'Nachricht erfolgreich gesendet' })
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: 'Fehler beim Senden der Nachricht' }, { status: 500 })
  }
}

