import React, { useEffect } from 'react';
import { Card, Button, Col, Row, Container, FormGroup, FormControl, FormLabel, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import submit from './submit';
import validate from './validate';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css'

const renderField = ({ input, label, type, meta: { touched, error }, placeholder }) => {
    return (
        <FormGroup>
            <FormLabel>{label}</FormLabel>
            <FormControl {...input} placeholder={placeholder} type={type} />
            {touched && error && <span className={'errorColor'} >{error}</span>}
        </FormGroup>
    )
}

let TimeSlotForm = (props) => {
    const { id } = useParams();
    const history = useHistory();
    const { handleSubmit, change, initialize } = props;

    const dispatch = useDispatch();
    const selectedSlot = useSelector(state => state.timeSlots.selectedSlot);

    useEffect(() => {
        dispatch(change('bookedTimeSlot', id))
    }, [dispatch, change, id]);

    useEffect(() => {
        dispatch(initialize(selectedSlot))
    }, [selectedSlot, dispatch, initialize]);

    return (
        <div>
            <Container fluid>
                <Card>
                    <Card.Header as="h5">Time Slot Form</Card.Header>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Card.Body>
                            <Field
                                name="firstName"
                                type='text'
                                component={renderField}
                                placeholder={'Jane Doe'}
                                label={'First Name'}
                            />
                            <Field
                                name="lastName"
                                type='text'
                                component={renderField}
                                placeholder={'Jane Doe'}
                                label={'Last Name'}
                            />
                            <Field
                                name="phoneNumber"
                                type='text'
                                component={renderField}
                                placeholder={'9000000000'}
                                label={'Phone Number'}
                            />
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col xs={6} sm={6} md={4} lg={10}><Button variant="primary" onClick={() => history.push('/')}>Cancel</Button></Col>
                                <Col xs={6} sm={6} md={4} lg={2}><Button variant="primary" type='submit'>Submit</Button></Col>
                            </Row>
                            </Card.Footer>
                    </Form>
                </Card>
            </Container>
        </div>
    )
}

TimeSlotForm = reduxForm({
    form: 'timeSlot',
    validate
})(TimeSlotForm);

export default TimeSlotForm;