const nodemailer = require("nodemailer");
const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const mailSend = async (to, subject, text) => {
    console.log(process.env.EMAIL)
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOption = {
        from: process.env.EMAIL,
        to: to,
        subject: subject, // lowercase
        text: text,

        attachments: [
            {
                filename: "dittoLogo.png",
                path: "./src/utilites/dittoLogo.png"
            }
        ]
    };

    console.log("Sending mail to:", to);

    const mailResponse = await transport.sendMail(mailOption);

    console.log("Mail sent:", mailResponse.messageId);

    return mailResponse;
};

module.exports = mailSend;
