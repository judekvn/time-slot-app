import express from 'express';

import { getTimeSlots, getTimeSlot, createTimeSlot, updateTimeSlot,  deleteTimeSlot } from '../controllers/timeSlots.js';

const router = express.Router();

router.get('/', getTimeSlots);
router.post('/', createTimeSlot);
router.get('/:time', getTimeSlot);
router.patch('/:time', updateTimeSlot);
router.delete('/:time', deleteTimeSlot);

export default router;