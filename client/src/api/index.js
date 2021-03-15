import axios from 'axios';

const url = 'http://localhost:5000/timeSlots';

export const getTimeSlots = () => axios.get(url);
export const getTimeSlot = (id) => axios.get(`${url}/${id}`);
export const createTimeSlot = (timeSlot) => axios.post(url, timeSlot);
export const updateTimeSlot = (id, updatedTimeSlot) => axios.patch(`${url}/${id}`, updatedTimeSlot);
export const deleteTimeSlot = (id) => axios.delete(`${url}/${id}`);
