import nodemailer from 'nodemailer';
import { user } from '../../../public/data';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message,subject } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    try {
      // Send email
      await transporter.sendMail({
        to: user.email,
        subject,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while sending the message.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
