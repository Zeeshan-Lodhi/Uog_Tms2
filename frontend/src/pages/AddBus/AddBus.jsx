import axios from 'axios'
import React, { useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AddBus = () => {
    const [BusNo, setBusNo] = useState("")
    const [PickUpTime, setPickUpTime] = useState("")
    const [DropTime, setDropTime] = useState("")
    const [BusType, setBusType] = useState("")
    const navigate = useNavigate()

    const resetHandler = () => {
        setBusNo("");
        setDropTime("");
        setPickUpTime("");
        setDropTime("");
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/bus/add', { BusNo, PickUpTime, DropTime, BusType })
        setTimeout(() => {
            navigate("/dashboard/buses")
        }, 1000);
    };
    return (
        <>
            <div className='d-flex'>
                <div className="right_section" style={{ width: "100vw" }}>
                    <div className="user_card">
                        <Container >

                            <Card>
                                <Card.Header>Add a new bus</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group controlId="title">
                                            <Form.Label>Bus No</Form.Label>
                                            <Form.Control
                                                type="title"
                                                value={BusNo}
                                                required
                                                placeholder="Enter Bus No"
                                                onChange={(e) => setBusNo(e.target.value)}
                                            />
                                        </Form.Group>


                                        <Form.Group controlId="content">
                                            <Form.Label>Drop Time</Form.Label>
                                            <Form.Control
                                                type="content"
                                                value={DropTime}
                                                placeholder="Enter Driver Name"
                                                onChange={(e) => setDropTime(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="content">
                                            <Form.Label>PickUp Time</Form.Label>
                                            <Form.Control
                                                type="content"
                                                value={PickUpTime}
                                                placeholder="Enter Driver Number"
                                                onChange={(e) => setPickUpTime(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="content">
                                            <Form.Label>Bus Type</Form.Label>
                                            <Form.Control
                                                type="content"
                                                value={BusType}
                                                placeholder="Enter Driver Name"
                                                onChange={(e) => setBusType(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        {/* {loading && <Loading size={50} />} */}
                                        <Button type="submit" variant="primary" className=" submit_login">
                                            Add Bus
                                        </Button>
                                        <Button className="mx-2" onClick={resetHandler} variant="danger">
                                            Reset Feilds
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBus