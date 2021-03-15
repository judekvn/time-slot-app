import { GET_ALL_TIME_SLOT, CREATE_TIME_SLOT, DELETE_TIME_SLOT, TIME_SLOT_DETAIL } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getTimeSlots = () => async (dispatch) => {
  try {
    const { data } = await api.getTimeSlots();

    dispatch({ type: GET_ALL_TIME_SLOT, payload: data });

  } catch (err) {
    console.log(err.message);
  }
};

export const getTimeSlot = (time) => async (dispatch) => {
  try {
    const { data } = await api.getTimeSlot(time);

    dispatch({ type: TIME_SLOT_DETAIL, payload: data });

  } catch (err) {
    console.log(err.message);
  }
};

export const createTimeSlot = (timeSlot) => async (dispatch) => {
  try {
    const { data } = await api.createTimeSlot(timeSlot);

    dispatch({ type: CREATE_TIME_SLOT, payload: data });

  } catch (err) {
    console.log(err.message);
  }
};

export const updateTimeSlot = (time, timeSlot) => async (dispatch) => {
  try {
    const { data } = await api.updateTimeSlot(time, timeSlot);

    dispatch({ type: TIME_SLOT_DETAIL, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};


export const deleteTimeSlot = (time) => async (dispatch) => {
  try {
    await api.deleteTimeSlot(time);

    dispatch({ type: DELETE_TIME_SLOT, payload: time });

  } catch (err) {
    console.log(err.message);
  }
};
