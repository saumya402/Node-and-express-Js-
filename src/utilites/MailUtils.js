const mailer = require("nodemailer");
require("dotenv").config()

const mailSend = async(to,Subject,text)=>{
    const transport = mailer.createTransport({
        service : "gmail",
        auth : {
            user : process.env.EMAIL,
            pass :  process.env.PASSWORD
        }
    })
    const mailOption =  {
        from : process.env.EMAIL,
        to : to,
        Subject : Subject,
        text : text,
    }
    console.log(mailOption)
     const mailresponse = await transport.sendMail(mailOption)
     console.log(mailresponse)

    
}
module.exports = mailSend;