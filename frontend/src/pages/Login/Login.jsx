import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import Loading from './Loading'
import bg from './bg.svg'
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const loginTms = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.post("http://localhost:8000/api/admin/login", { email, password });
            setLoading(false)
            navigate("/dashboard/app")
            localStorage.setItem("login", JSON.stringify(data))
        } catch (error) {
            setLoading(false)
            alert("Invalid Login Details")
        }

    }
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("login"))) {
            navigate("/dashboard/app");
        }
    }, [navigate]);
    return (
        <body>

            <div>
                <img class="wave" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png" alt='' />
                <div class="containerr">
                    <div class="img">
                        <img src={bg} alt='' />
                    </div>
                    <div class="login-content">
                        <form onSubmit={loginTms} className="loginForm">
                            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt='' className='m-auto' />
                            <h2 class="title">Welcome</h2>
                            <div class="input-div one">
                                <div class="i">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="div">
                                    <input type="text" class="input" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                                </div>
                            </div>
                            <div class="input-div pass">
                                <div class="i">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <div class="div">
                                    <input type="password" class="input" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                                </div>
                            </div>
                            <button type="submit" className="btnn " >
                                <span className='d-fex'>{loading && <Loading />}
                                    <span> Login</span>
                                </span>
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </body>

    )
}

export default Login