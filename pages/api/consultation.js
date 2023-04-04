export default function (req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "jayteeojo.com",
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASS,
        },
        secure: true,
    });
    const fullname = req.body.fullname;
    const company = req.body.company;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    console.log('userName: ', process.env.SMTP_USERNAME);
    
    const body = `<div>
    <p><strong> Name: </strong> ${fullname} </p>
    <p><strong>Comapny:</strong> ${company ?? "-"} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Telephone:</strong> ${phone} </p>
    <p><strong>Message:</strong> ${message} </p> </div>`

    const mailData = {
        from: 'info@jayteeojo.com',
        to: 'ayorinde@alluvium.net',
        subject: `New Consultation Request From ${req.body.fullname}`,
        text: body,
        html: body
    }

    try{
        console.log('userName2: ', process.env.SMTP_USERNAME);
        transporter.sendMail(mailData, function (err, info) {
            console.log('mailData: ', mailData);
            console.log('mailInfo: ', info);
            if(err)
                res.status(500).json({ message: `Failed: Try Again ${err}`, status: "error"})
            else
                res.status(250).json({ message: `Message Sent Successfully. You will be contacted soon`, status: "success" })
        })
    }catch(err) {
        res.status(500).json({ message: `Error Occured: ${err}`, status: "error"})
    }
}
