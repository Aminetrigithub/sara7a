import nodemailer from "nodemailer";
import { htmlCode } from "./html.js";
import  jwt from "jsonwebtoken";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aminetrigui.github@gmail.com",
      pass: "thstyotmnweennuf",
    },
    }
);


let token = jwt.sign(
  { email: options.email },
  process.env.JWT_KEY
);


  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"From Amine ⏰" <aminetrigui.github@gmail.com>', // sender address
    to: options.email,
    subject: "Hello ✔", // Subject line
    text: "Welcome?", // plain text body
    html: htmlCode(`http://localhost:3000/verify/${token}`), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};
