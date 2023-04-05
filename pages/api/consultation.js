const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    let transporter = null;
    try {
        transporter = nodemailer.createTransport({
            port: 465,
            host: "jayteeojo.com",
            auth: {
                user: process.env.NEXT_PUBLIC_SMTP_USERNAME,
                pass: process.env.NEXT_PUBLIC_SMTP_PASS,
            },
            secure: true,
        });
    } catch (err) {
        return res.status(500).json({ message: `Error Occured Creating Transport`, status: "error", iError: err.message });
    }
    const fullname = req.body.fullname;
    const company = req.body.company;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    const body = `<div>
    <p><strong> Name: </strong> ${fullname} </p>
    <p><strong>Comapny:</strong> ${company ?? "-"} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Telephone:</strong> ${phone} </p>
    <p><strong>Message:</strong> ${message} </p> </div>`;

    const mailData = {
        from: 'info@jayteeojo.com',
        to: 'ayorinde@alluvium.net',
        subject: `New Consultation Request From ${req.body.fullname}`,
        text: body,
        html: body
    };
    await transporter.sendMail(mailData).then(info => {
        return res.status(250).json({ message: `Message Sent Successfully. You will be contacted soon`, status: "success" });
    }).catch(err => {
        return res.status(500).json({ message: `Failed: Unable to send mail, please try again. ${err}`, status: "error", iError: err.message });
    });
}