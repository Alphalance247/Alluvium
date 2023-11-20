import { connectToDatabase } from '../../../../lib/mongo';
import FollowUp from 'models/followUp.model';
import mongoose from 'mongoose';
import { password } from 'config';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const followUpUserData = new FollowUp({ ...req.body });
        console.log(followUpUserData);
        await followUpUserData.save().then(user => {
            return res.status(201).json({
                message: `Thank you ${user.firstName}!`,
                success: true
            })
        }).catch(err =>{ 
            console.log(err);
            return res.status(400).json({ message: err.message, success: false })
    })
    } else if (req.method === 'GET') {
        // console.log(mongoose.connection.collections);
        const {eventType, modeOfAttendance} = req.query;
        console.log(modeOfAttendance);
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