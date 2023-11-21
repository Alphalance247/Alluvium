import mongoose from 'mongoose'
import { databaseURI } from '../config/index.js';
// import {User} from '../models/user.model.js'

export const connectToDatabase = handler => async (req, res) => {
    if (!databaseURI) {
        return res.status(500).json({
            message: `Error: DB connection string error.`,
            success: false,
            // users: null
        })
    }
    
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }

    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(databaseURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        }, (err, db) => {
            if (err) {
                return res.status(500).json({
                    message: `Error: Failed to connect to database`,
                    success: false
                });
            }
        });
        return handler(req, res);
    } catch (err) {
        return res.status(500).json({
            message: `Error: ${err.message}`,
            success: false
        })

    }

}

export const connectToDatabaseOnly = () => {
    if (!databaseURI) {
        return ({
            message: `Error: DB connection string error, Please contact support`,
            success: false
        })
    }
    
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return ({
            message: `Success via existing connection`,
            success: true
        });
    }

    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(databaseURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        }, (err, db) => {
            if (err) {
                return ({
                    message: `Error: Failed to connect to database, Please contact support`,
                    success: false
                });
            }
        });
        return({
            message: `Success via new connection`,
            success: true
        });
    } catch (err) {
        return ({
            message: `DB Connection Error: Please contact support`,
            success: false
        })

    }
}


export const saveToDB = async (data) => {
    const userData = { ...data };
    await userData.save().then(user => {
        return {
            message: `User ${user.fullname} saved successfully`,
            success: true
        }
    }).catch(err => ({ message: err.message, success: false }))
}