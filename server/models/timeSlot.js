import mongoose from 'mongoose';

const timeSlot = mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    bookedTimeSlot: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var TimeSlot = mongoose.model('TimeSlot', timeSlot);

export default TimeSlot;