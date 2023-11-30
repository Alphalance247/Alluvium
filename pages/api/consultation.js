import { connectToDatabase } from '../../lib/mongo';
import { mailFrom, mailTo, nodemailerTransportHost } from '../../config/index';
import Consultation from 'models/consultation.model';
import nodemailer from 'nodemailer';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const fullname = req.body.fullname;
        const company = req.body.company;
        const email = req.body.email;
        const phone = req.body.phone;
        const message = req.body.message;
        let transporter = null;
        try {
            transporter = nodemailer.createTransport({
                port: 465,
                host: nodemailerTransportHost,
                auth: {
                    user: process.env.NEXT_PUBLIC_SMTP_USERNAME,
                    pass: process.env.NEXT_PUBLIC_SMTP_PASS,
                },
                secure: true,
                greetingTimeout: 50000,
                dnsTimeout: 5000
            });
        } catch (err) {
            console.log(err);
        }

        const body = `<div>
    <p><strong> Name: </strong> ${fullname} </p>
    <p><strong>Comapny:</strong> ${company ?? "-"} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Telephone:</strong> ${phone} </p>
    <p><strong>Message:</strong> ${message} </p> </div>`;

        const mailData = {
            from: mailFrom,
            to: mailTo,
            subject: `New Consultation Request From ${req.body.fullname}`,
            text: body,
            html: body
        };

        const newConsultationRequest = new Consultation({ fullname, company, phone, email, message });
        await newConsultationRequest.save().then(() => {
            transporter.sendMail(mailData);
            return res.status(201).json({
                message: 'Consultation Request Sent Successfully. You will be contacted soon',
                status: 'success'
            })
        }).catch(err => {
            return res.status(500).json({
                message: `Failed: Unable to save to DB. 
            ${err.message}`,
                status: "error"
            })
        })
    // } else if (req.method === 'GET') {
    //     await Consultation.find({}).sort({ createdAt: 'desc' })
    //         .then(consultationRequests => {
    //             return res.status(200).json({
    //                 message: 'Consultation Requests Fetched Successfully.',
    //                 status: 'success',
    //                 consultationRequests
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             return res.status(500).json({
    //                 message: `Failed: Unable to fetch Consultation Requests. ${err.message}`,
    //                 status: "error"
    //             })
    //         });
    } else {
        res.status(422).send({ message: 'req_method_not_supported', success: false });
    }
}

export default connectToDatabase(handler);
