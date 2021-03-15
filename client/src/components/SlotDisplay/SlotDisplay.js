import React from 'react';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTimeSlot } from '../../actions/timeSlots';
import '../index.css';

const timeGrid1 = ['9', '10', '11'];
const timeGrid2 = ['12', '13', '14'];
const timeGrid3 = ['15', '16', '17'];

const filterTimeSlots = (time, slotData = []) => {
    let singleSlot = slotData && slotData.filter((item) => Number(time) === item.bookedTimeSlot)
    if (singleSlot && singleSlot.length > 0) {
        return singleSlot[0];
    } else {
        return false;
    }

}

const SlotDisplay = () => {

    const timeSlotsData = useSelector(state => state.timeSlots.slotDetails)
    const dispatch = useDispatch()

    return (
        <div>
            <div className={'cardSpacing respSpacing'}>
                <Row>
                    {timeGrid1.map((item) => {
                        const slotDetails = filterTimeSlots(item, timeSlotsData)
                        const bookingDetails = slotDetails ?
                            `Booked by ${slotDetails.firstName} ${slotDetails.lastName}, please contact on ${slotDetails.phoneNumber}.`
                            :
                            `Time slot is available for booking.`
                        return (
                            <Col xs={12} sm={12} md={4} lg={4} className='respSpacing'>
                                <Accordion>
                                    <Card border="dark">
                                        <Accordion.Toggle as={Card.Header} eventKey={item}>
                                            <strong>{item} AM</strong>
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={item}>
                                            <Card.Body>
                                                {bookingDetails} <br />
                                                {slotDetails && <Link to={'#'} className={'rightBtn'} onClick={() => dispatch(deleteTimeSlot(item))}>Delete</Link>}
                                                <Link to={`/timeslot/${item}`}>Book me!</Link>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        )
                    })}
                </Row>
            </div>
            <div className={'cardSpacing'}>
                <Row>
                    {timeGrid2.map((item) => {
                        const slotDetails = filterTimeSlots(item, timeSlotsData)
                        const bookingDetails = slotDetails ?
                            `Booked by ${slotDetails.firstName} ${slotDetails.lastName}, please contact on ${slotDetails.phoneNumber}.`
                            :
                            `Time slot is available for booking.`
                        return (
                            <Col xs={12} sm={12} md={4} lg={4} className='respSpacing'>
                                <Accordion>
                                    <Card border="dark">
                                        <Accordion.Toggle as={Card.Header} eventKey={item}>
                                        <strong>{item > 12 ? `${item - 12} PM` : `12 PM`}</strong>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={item}>
                                            <Card.Body>
                                                {bookingDetails} <br />
                                                {slotDetails && <Link to={'#'} className={'rightBtn'} onClick={() => dispatch(deleteTimeSlot(item))}>Delete</Link>}
                                                <Link to={`/timeslot/${item}`}>Book me!</Link>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        )
                    })}
                </Row>
            </div>
            <div className={'cardSpacing'}>
                <Row>
                    {timeGrid3.map((item) => {
                        const slotDetails = filterTimeSlots(item, timeSlotsData)
                        const bookingDetails = slotDetails ?
                            `Booked by ${slotDetails.firstName} ${slotDetails.lastName}, please contact on ${slotDetails.phoneNumber}.`
                            :
                            `Time slot is available for booking.`
                        return (
                            <Col xs={12} sm={12} md={4} lg={4} className='respSpacing'>
                                <Accordion>
                                    <Card border="dark">
                                        <Accordion.Toggle as={Card.Header} eventKey={item}>
                                            <strong>{item - 12} PM</strong>
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={item}>
                                            <Card.Body>
                                                {bookingDetails} <br /><br />
                                                {slotDetails && <Link to={'#'} className={'rightBtn'} onClick={() => dispatch(deleteTimeSlot(item))}>Delete</Link>}
                                                <Link to={`/timeslot/${item}`}>Book me!</Link>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default SlotDisplay;