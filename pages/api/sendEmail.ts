import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, number, email, subject, message, recipient } = req.body;

      // Create a Nodemailer transporter using your email service credentials
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // Replace with the email service you are using (e.g., Gmail, SendGrid)
        auth: {
          user: 'murktsg@gmail.com',
          pass: 'your-password',
        },
      });

      // Configure the email message
      const mailOptions = {
        from: email,
        to: recipient, // The recipient email address where you want to receive the messages
        subject: subject,
        text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\n\n${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(404).json({ message: 'Invalid request method' });
  }
}
