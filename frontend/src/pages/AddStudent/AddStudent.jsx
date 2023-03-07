import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com'

const AddStudent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [RouteName, setRouteName] = useState("")
    const [mobile, setMobile] = useState("")
    const navigate = useNavigate()

    const resetHandler = () => {
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setRouteName("");
    };
    const formRef = useRef()
    const submitHandler = async (e) => {
        e.preventDefault()

        emailjs.sendForm('service_vp8wkp9', 'template_ex7iigi', formRef.current, '2FNwtA1ahticn1IVH')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });


        await axios.post('http://localhost:8000/api/student/add', { name, email, password, mobile, RouteName })
        navigate("/dashboard/students")
    };
    return (
        <>
            <div className='d-flex'>
                <div className="right_section" style={{ width: "100vw" }}>
                    <div className="user_card">
                        <Container >

                            <Card>
                                <Card.Header>Add a new student</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={submitHandler} ref={formRef}>
                                        <Form.Group controlId="title">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="title"
                                                value={name}
                                                required
                                                placeholder="Enter Name"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="Route Name">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                name="email"
                                                required
                                                type='email'
                                                value={email}
                                                placeholder="Enter Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="content">
                                            <Form.Label>Passsword</Form.Label>
                                            <Form.Control
                                                minLength={6}
                                                type="content"
                                                value={password}
                                                placeholder="Enter Password"
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="content">
                                            <Form.Label>Mobile</Form.Label>
                                            <Form.Control
                                                type="content"
                                                value={mobile}
                                                placeholder="Enter Mobile No"
                                                onChange={(e) => setMobile(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="content">
                                            <Form.Label>Route Name</Form.Label>
                                            <Form.Control
                                                name="RouteName"
                                                type="content"
                                                value={RouteName}
                                                placeholder="Enter Route Name"
                                                onChange={(e) => setRouteName(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        {/* {loading && <Loading size={50} />} */}
                                        <Button type="submit" variant="primary" className=" submit_login">
                                            Add Student
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

export default AddStudent