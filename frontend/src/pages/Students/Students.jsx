import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Accordion, Button, Card, Container, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Loading from '../../components/Loading'

const Students = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchBuses = async () => {
        setLoading(true)
        const { data } = await axios.get("http://localhost:8000/api/student/get")
        setStudents(data)
        console.log(data);
        setLoading(false)
    }
    const deleteHandler = (id) => {
        console.log(id);
        let delStudent = window.confirm("Are you sure?")
        if (delStudent) {
            axios.delete(`http://localhost:8000/api/student/delete/${id}`)
            setTimeout(() => {
                window.location.reload(false);
            }, 1000);
        }
    }
    useEffect(() => {
        fetchBuses()
    }, [])

    return (
        <>
            {loading ? <Loading /> :
                <div className='d-flex'>
                    <div className="right_section" style={{ width: "100vw" }}>
                        <div className="user_card">
                            <Container>
                                <NavLink to="/dashboard/student/add">
                                    <Button style={{ marginLeft: 0, marginBottom: 6, color: "" }} size="lg" className='submit_login'>
                                        Addd a new student
                                    </Button>
                                </NavLink>
                                {
                                    students.map((elm) => {
                                        return (
                                            <Accordion className='mb-2' key={elm.id}>
                                                <Card >
                                                    <Card.Header style={{ display: "flex" }}>
                                                        <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                                                            <div className='d-flex mr-2'>


                                                                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0" >
                                                                    <strong> <i class="fa-solid fa-user mr-1"></i> Name : </strong>
                                                                    {elm.name}</Accordion.Toggle>
                                                            </div>
                                                        </span>
                                                        <div >
                                                            <Button variant="danger" className="mx-2"
                                                                onClick={() => deleteHandler(elm.id)}
                                                            > Delete</Button>
                                                        </div>
                                                    </Card.Header>

                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body>
                                                            <div className="d-flex justify-content-between">
                                                                <p>Email : {elm.email}</p>
                                                                <p>RouteName : {elm.RouteName}</p>
                                                            </div>

                                                            <div className="d-flex justify-content-between">
                                                                <p>Name : {elm.name}  </p>
                                                                <p>Mobile : {elm.mobile}</p>
                                                            </div>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            </Accordion>
                                        )
                                    })}

                            </Container >
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Students