import mongoose from 'mongoose'

const followUpSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    eventType: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

const FollowUp = mongoose.models.FollowUp || mongoose.model('FollowUp', followUpSchema);

export default FollowUp;