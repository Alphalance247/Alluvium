import { connectToDatabase } from '../../../../lib/mongo';
import FollowUp from 'models/followUp.model';
// import { password } from 'config';
// import CryptoJS from 'crypto-js';

const handler = async (req, res) => {
    // const tempPass = CryptoJS.AES.decrypt(req.headers.txt, process.env.NEXT_PUBLIC_MY_SECRET);
    // const pass = tempPass.toString(CryptoJS.enc.Utf8);
    // if (pass !== password) {
    //     return res.status(401).json({
    //         message: `Unauthorized!!`,
    //         success: false
    //     })
    // }
    if(req.headers["sec-fetch-site"] !== "same-origin" || req.headers["sec-fetch-site"] !== "same-site"){
        return res.status(401).json({
            message: `Unauthorized!!`,
            success: false
        })
    }
    if (req.method === 'POST') {
        const followUpUserData = new FollowUp({ ...req.body });
        console.log(followUpUserData);
        await followUpUserData.save().then(user => {
            return res.status(201).json({
                message: `Thank you ${user.firstName}!`,
                success: true
            })
        }).catch(err => {
            console.log(err);
            return res.status(400).json({ message: err.message, success: false })
        })
    } else if (req.method === 'GET') {
        // console.log(mongoose.connection.collections);
        const { eventType, modeOfAttendance } = req.query;
        await FollowUp.find({
            eventType, modeOfAttendance
        }).sort({ createdAt: 'desc' })
            .then(users => {
                const usersLength = users.length;
                return res.status(200).json({
                    message: `Users records fetched successfully`,
                    success: true,
                    usersLength
                })
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({
                    message: `Error: Users fetch unsuccessful. ${err.message}`,
                    success: false,
                    users: null
                })
            })

    }
    else {
        res.status(422).send({ message: 'req_method_not_supported', success: false });
    }
}

export default connectToDatabase(handler);