import React from 'react'
import { Link } from 'react-router-dom'
import Uiimg from './imgs/login.png'
import './signin.css'
// import axios from 'axios';

export default function SignIn() {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const history = useHistory();
    // const toHomePage = () => history.push('/');

    // const loginUser = async (e) => {
    //     e.preventDefault();
    //     await axios.post("http://localhost:5034/api/auth", {
    //         email,
    //         password
    //     })
    //         .then((response) => {
    //             localStorage.setItem('x-auth-token', response.data);
    //             toHomePage();
    //         })
    //         .catch((error) => {

    //         })
    // }type="password" onChange={(e) => setPassword(e.target.value)}
    // type="email" onChange={(e) => setEmail(e.target.value)

    // onSubmit={loginUser
    return (
        <div>
            <div className='containerr'>
                <form >
                    <h2>SIGN IN</h2>
                    <input  placeholder="Enter Email" class="input-info"></input>
                    <input  placeholder="Enter Password" class="input-info"></input>
                    <input type="submit" placeholder="" class="submit"></input><br />
                    <Link to='#' className='link'>Forgot Password?</Link> <br />
                    <Link to='/signup' className='link'> Dont have an account? </Link>
                </form>
                <div className='info-img'>
                    <img src={Uiimg} alt="" />
                </div>
            </div>

        </div>
    )
}
