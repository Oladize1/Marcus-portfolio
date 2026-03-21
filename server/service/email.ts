import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMessage = async (
  email: string,
  name: string,
  subject: string,
  message: string,
) => {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New message from ${name}: ${subject}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });
};
