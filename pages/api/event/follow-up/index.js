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
    if(req.headers["sec-fetch-site"] !== "same-origin" && req.headers["sec-fetch-site"] !== "same-site"){
        return res.status(401).json({
            message: `Unauthorized!!`,
            success: false
        })
    }
    if (req.method === 'POST') {
        let message = "Sorry, We are no longer accepting registerations for this event has the event is over.", status = 400;
        let success = false;
        // const followUpUserData = new FollowUp({ ...req.body });
        // console.log(followUpUserData);
        // await followUpUserData.save().then(user => {
        //     message = `Thank you ${user.firstName}!`;
        //     success = true;
        //     status = 200;
        // }).catch(err => {
        //     console.log(err);
        //     message = err.message;
        //     success = false;
        //     status = 400;
        // })
        return res.status(status).json({
            message,
            success
        })
    } else if (req.method === 'GET') {
        // const { eventType, modeOfAttendance } = req.query;
        let message = "Sorry, We are no longer accepting registerations for this event has the event is over.", status = 400;
        let success = false;
        try{
            // const resp = await getUsersCount(eventType, modeOfAttendance);
            // if (resp !== undefined) {
                // const { status, ...rest } = resp;
                return res.status(status).json({success, message});
            // }
        } catch(err){
            console.log("err: ", err);
            return res.status(500).json({success: false, message: err.message});
        };
    }
    else {
        res.status(422).send({ message: 'req_method_not_supported', success: false });
    }
}

export default connectToDatabase(handler);

export const getUsersCount = (eventType, modeOfAttendance) => {
    return FollowUp.find({
        eventType, modeOfAttendance
    }).then(users => {
        const usersLength = users.length;
        return ({
            message: `Users records fetched successfully`,
            success: true,
            usersLength,
            status: 200
        })
    }).catch(err => {
            console.log(err);
            return ({
                message: `Error: Users fetch unsuccessful. ${err.message}`,
                success: false,
                usersLength: null,
                status: 500
            })
        })
};

export const extractUsers = (eventType) => {
    return FollowUp.find({
        eventType
    }).sort({ createdAt: 'desc' })
        .then(users => {
            return ({
                status: 200,
                message: `Users records fetched successfully`,
                success: true,
                users
            })
        })
        .catch(err => {
            console.log(err);
            return ({
                status: 500,
                message: `Error: Users fetch unsuccessful. ${err.message}`,
                success: false,
                users: null
            })
        })
};