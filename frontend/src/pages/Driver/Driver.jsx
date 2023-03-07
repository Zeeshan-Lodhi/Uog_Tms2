import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion, Card, Container, } from 'react-bootstrap'
import Loading from '../../components/Loading'

const Driver = () => {
    const [drivers, setDrivers] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchBuses = async () => {
        setLoading(true)
        const { data } = await axios.get("http://localhost:8000/api/drivers/get")
        setDrivers(data)
        setLoading(false)
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
                                <h2 className='text-center mb-3'><strong>  List of all drivers</strong></h2>
                                {drivers.map((elm) => {
                                    return (
                                        <Accordion className='mb-2' key={elm.id} >
                                            <Card >
                                                <Card.Header style={{ display: "flex" }}>
                                                    <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                                                        <div className='d-flex'>
                                                            <Accordion.Toggle as={Card.Text} variant="link" eventKey="0" >
                                                                <strong> <i class="fa-solid fa-user mr-2"></i>Name : </strong>
                                                                {elm.DriverName}</Accordion.Toggle>
                                                        </div>
                                                    </span>

                                                </Card.Header>

                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <div className="d-flex justify-content-between user_details">
                                                            <h6>Address : {elm.DriverAddress}</h6>
                                                            <h6>Number : {elm.DriverMobile}</h6>
                                                            <h6>Route Name : {elm.RouteName}</h6>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>

                                    )
                                })}
                            </Container>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default Driver