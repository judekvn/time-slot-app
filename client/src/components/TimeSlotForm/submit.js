import { createTimeSlot, updateTimeSlot } from '../../actions/timeSlots';

const submit = async (values, dispatch, props) => {
    try {
        const { history } = props;

        let timeSlot = {}
        timeSlot['firstName'] = values.firstName;
        timeSlot['lastName'] = values.lastName;
        timeSlot['phoneNumber'] = values.phoneNumber;
        timeSlot['bookedTimeSlot'] = values.bookedTimeSlot;

        if (values && values._id) {
            await dispatch(updateTimeSlot(values.bookedTimeSlot, timeSlot));
        } else {
            await dispatch(createTimeSlot(timeSlot));
        }

        history.push('/')

    } catch (err) {
        console.log(err);
    }

}

export default submit;