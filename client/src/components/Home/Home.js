import React, { useEffect } from 'react';
import SlotDisplay from '../SlotDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { getTimeSlots } from '../../actions/timeSlots';
import '../index.css';

const Home = () => {
    const dispatch = useDispatch()
    const slotDetails = useSelector(state => state.timeSlots.slotDetails)

    useEffect(() => {
        dispatch(getTimeSlots())
    }, [dispatch, slotDetails])

    return (
        <div className={'rootHome bgImg'}>
            <div className={'containerHome'}>
                <div className={'titleText'}>
                    <h3>Pick Your Favourite Time Slot</h3>
                </div>
                <SlotDisplay />
            </div>
        </div>
    )
}

export default Home;