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
        
        // html : `<html><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Royal Faculty - Mail</title> <style> * { margin: 0; padding: 0; box-sizing: border-box; } body { font-family: Arial, sans-serif; background-color: #f2f4f7; color: #333; } .header { background-color: #1e3a8a; color: white; padding: 20px 50px; display: flex; justify-content: space-between; align-items: center; } .header h1 { font-size: 28px; } .header p { font-size: 14px; } .container { width: 80%; max-width: 900px; margin: 40px auto; } .mail-box { background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); } .mail-box h2 { color: #1e3a8a; margin-bottom: 25px; } .form-group { margin-bottom: 20px; } .form-group label { display: block; font-weight: bold; margin-bottom: 8px; } .form-group input, .form-group textarea { width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; font-size: 15px; } .form-group textarea { height: 180px; resize: vertical; } .send-btn { background-color: #1e3a8a; color: white; border: none; padding: 12px 30px; border-radius: 6px; font-size: 16px; cursor: pointer; } .send-btn:hover { background-color: #162d6b; } .footer { text-align: center; margin-top: 30px; color: #777; font-size: 14px; } </style> </head> <body> <header class="header"> <div> <h1>Royal Faculty</h1> <p>Faculty Communication Portal</p> </div> <div> <p>Welcome, Faculty</p> </div> </header> <div class="container"> <div class="mail-box"> <h2>Compose Mail</h2> <form> <div class="form-group"> <label for="to">To</label> <input type="email" id="to" placeholder="Enter recipient email" > </div> <div class="form-group"> <label for="subject">Subject</label> <input type="text" id="subject" placeholder="Enter mail subject" > </div> <div class="form-group"> <label for="message">Message</label> <textarea id="message" placeholder="Write your message here..." ></textarea> </div> <button type="submit" class="send-btn"> Send Mail </button> </form> </div> <div class="footer"> <p>© 2026 Royal Faculty. All Rights Reserved.</p> </div> </div> </body> </html>`
        attachments : {
      filename: 'dittoLogo.png',
        path : './src/utilites/dittoLogo.png'
    }

    }
    
    console.log(mailOption)
     const mailresponse = await transport.sendMail(mailOption)
     console.log(mailresponse)

    
}
module.exports = mailSend;