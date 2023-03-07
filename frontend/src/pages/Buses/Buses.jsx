import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Accordion, Button, Card, Container, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Loading from '../../components/Loading'
import logo2 from './logo3.png'
// import Header from '../Dashboard/Header/Header'
// import SideBar from '../Dashboard/Sidebar/SideBar'

const Buses = () => {
    const [buses, setbuses] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    const fetchBuses = async () => {
        setLoading(true)
        const { data } = await axios.get("http://localhost:8000/api/bus/get")
        setbuses(data)
        console.log(data);
        setLoading(false)
    }
    const deleteHandler = (BusNo) => {
        let busDel = window.confirm("Are you sure?")
        if (busDel) {
            axios.delete(`http://localhost:8000/api/bus/delete/${BusNo}`)
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

                    {/* <SideBar /> */}
                    <div className="right_section" style={{ width: "100vw" }}>
                        {/* {loading && <Loading />} */}
                        <div className="user_card">
                            <Container>
                                <div className='d-flex justify-content-between'>
                                    <NavLink to="/dashboard/bus/add">
                                        <Button style={{ marginLeft: 0, marginBottom: 6, color: "" }} size="lg" className='submit_login'>
                                            Addd a new bus <i class="fa-solid fa-plus"></i>
                                        </Button>
                                    </NavLink>
                                    <div >
                                        <input type="text" placeholder='Search Bus' value={search} onChange={(e) => setSearch(e.target.value)}
                                            style={{
                                                textAlign: "center",
                                                height: "36px",
                                                borderRadius: "18px",
                                                background: "#e3e0e0ba",
                                                border: "none",
                                                outline: "none"
                                            }} />
                                    </div>
                                </div>
                                {
                                    buses?.
                                        filter((filterBus) => {
                                            return filterBus.BusNo.toString().includes(search)
                                        })

                                        .map((elm) => {
                                            return (
                                                <Accordion className='mb-2' key={elm.busNo}>
                                                    <Card >
                                                        <Card.Header style={{ display: "flex" }}>
                                                            <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                                                                <div className='d-flex'>
                                                                    <img src={logo2} alt="" width="45px" className='mr-3' />
                                                                    <Accordion.Toggle as={Card.Text} variant="link" eventKey="0" className='mt-2' >
                                                                        <strong > Bus No :</strong>  {elm.BusNo}</Accordion.Toggle>
                                                                </div>
                                                            </span>
                                                            <div >
                                                                <NavLink to={`/dashboard/bus/update/${elm.BusNo}`} >
                                                                    <Button className='submit_login'>Update <i class="fa-solid fa-pen-to-square"> </i>
                                                                    </Button>
                                                                </NavLink>

                                                                <Button variant="danger" className="mx-2" onClick={() => deleteHandler(elm.BusNo)}
                                                                > Delete <i class="fa-solid fa-trash"></i></Button>
                                                            </div>
                                                        </Card.Header>

                                                        <Accordion.Collapse eventKey="0">
                                                            <Card.Body >
                                                                <div className="d-flex justify-content-between" style={{ color: "#000000cf" }}>
                                                                    <p>Bus Type : {elm.BusType}</p>
                                                                    <p>PickUp Time : {elm.PickUpTime}</p>
                                                                    <p>Drop Time : {elm.DropTime}</p>
                                                                </div>

                                                                <div style={{ color: "#000000cf" }}>
                                                                    <p >Route Name : {elm.RouteName}</p>

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
export default Buses