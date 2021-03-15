import express from 'express';

import TimeSlot from '../models/timeSlot.js';

const router = express.Router();

export const getTimeSlots = async (req, res) => {
    try {
        const timeSlots = await TimeSlot.find();

        res.status(200).json(timeSlots);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const getTimeSlot = async (req, res) => {

    try {
        const { time } = req.params;

        const timeSlot = await TimeSlot.findOne({
            bookedTimeSlot: time
        });

        res.status(200).json(timeSlot);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const createTimeSlot = async (req, res) => {

    try {
        const { firstName, lastName, phoneNumber, bookedTimeSlot } = req.body;

        const newTimeSlot = new TimeSlot({ firstName, lastName, phoneNumber, bookedTimeSlot });

        await newTimeSlot.save();

        res.status(200).json(newTimeSlot);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const updateTimeSlot = async (req, res) => {

    try {
        const { time } = req.params;
        const { firstName, lastName, phoneNumber } = req.body;

        const updatedTimeSlot = { firstName, lastName, phoneNumber };

        await TimeSlot.findOneAndUpdate({ bookedTimeSlot: time }, updatedTimeSlot, { new: true });;

        res.json(updatedTimeSlot);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const deleteTimeSlot = async (req, res) => {

    try {
        const { time } = req.params;

        await TimeSlot.findOneAndDelete({ bookedTimeSlot: time });

        res.json({ message: "Time slot deleted successfully." });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}


export default router;