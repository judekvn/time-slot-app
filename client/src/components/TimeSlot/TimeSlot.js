import React, { useEffect } from 'react';
import TimeSlotForm from '../TimeSlotForm';
import { useDispatch } from 'react-redux';
import { getTimeSlot } from '../../actions/timeSlots';
import { useParams } from 'react-router-dom';
import '../index.css';

const TimeSlot = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { history } = props;

    useEffect(() => {
        dispatch(getTimeSlot(id))
    }, [dispatch, id]);

    return (
        <div className={'root bgImg'}>
            <div className={'container'}>
                <TimeSlotForm history={history} />
            </div>
        </div>
    )
}

export default TimeSlot;