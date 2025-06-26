import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to company
    const companyEmailOptions = {
      from: process.env.SMTP_FROM || 'noreply@schaeffertank.com',
      to: process.env.CONTACT_EMAIL || 'info@schaeffertank.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from the Schaeffer's Tank & Truck Service website contact form.</em></p>
      `,
    };

    // Auto-reply to customer
    const customerEmailOptions = {
      from: process.env.SMTP_FROM || 'noreply@schaeffertank.com',
      to: email,
      subject: "Thank you for contacting Schaeffer's Tank & Truck Service",
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting Schaeffer's Tank & Truck Service. We have received your message and will respond within 24 hours.</p>
        
        <h3>Your Message:</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #FFD100;">
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
        
        <p>If you need immediate assistance, please call us at <strong>(330) 296-7519</strong>.</p>
        
        <p>Best regards,<br>
        The Schaeffer's Team</p>
        
        <hr>
        <p style="font-size: 12px; color: #666;">
          Schaeffer's Tank & Truck Service<br>
          123 Industrial Drive, Wooster, OH 44691<br>
          Phone: (330) 296-7519<br>
          Email: info@schaeffertank.com
        </p>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(companyEmailOptions),
      transporter.sendMail(customerEmailOptions),
    ]);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
