//import nodemailer library
const nodemailer = require('nodemailer');

//2.Configure email and send it.
async function sendMail(){

   //1.Create an email transpoter.
    //SMTP(Simple Mail Transfer Protocal)
    const transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anonymouskhan687@gmail.com',
            pass: 'vwdalbjfqjggjrsd',
        }
    });
    //2.Configure email content
    const mailOptions = {
        from: 'anonymouskhan687@gmail.com',
        to: 'sintoxalpha001@gmail.com',
        subject: 'This mail go throgh NodeJs',
        text: "This is an email writting through nodemailer in nodejs. so, don't warry notthing important.",
    };  
  //3. Send the email.
     try{
        
        const result = await transpoter.sendMail(mailOptions);
        console.log("Email sent successfully\n");
     } catch(err){
        console.log("Error sending email\n" +err);
     }
};

sendMail();