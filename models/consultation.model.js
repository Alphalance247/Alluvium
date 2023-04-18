import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

const Consultation = mongoose.models.Consultation || mongoose.model('Consultation', consultationSchema);

export default Consultation;