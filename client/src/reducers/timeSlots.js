import { GET_ALL_TIME_SLOT, CREATE_TIME_SLOT, DELETE_TIME_SLOT, TIME_SLOT_DETAIL } from '../constants/actionTypes';

const timeSlots = (state = {}, action) => {
  switch (action.type) {

    case GET_ALL_TIME_SLOT:
      return {
        ...state,
        slotDetails: action.payload
      }

    case CREATE_TIME_SLOT:
      return {
        ...state,
        slotDetails: [...state, action.payload]
      }

    case DELETE_TIME_SLOT:
      return {
        ...state,
        slotDetails: state.slotDetails.filter((data) => data.bookedTimeSlot !== action.payload)
      }

    case TIME_SLOT_DETAIL:
      return {
        ...state,
        selectedSlot: { ...action.payload }
      }

    default:
      return state;
  }
};

export default timeSlots;