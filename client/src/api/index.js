import axios from 'axios';

const url = process.env.BACKEND_URL || 'http://localhost:4000';

export const getTimeSlots = () => axios.get(url + '/timeSlots');
export const getTimeSlot = (id) => axios.get(`${url}/timeSlots/${id}`);
export const createTimeSlot = (timeSlot) => axios.post(url + '/timeSlots', timeSlot);
export const updateTimeSlot = (id, updatedTimeSlot) => axios.patch(`${url}/timeSlots/${id}`, updatedTimeSlot);
export const deleteTimeSlot = (id) => axios.delete(`${url}/timeSlots/${id}`);
