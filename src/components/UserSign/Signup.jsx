import React from 'react'
import registerimg from './imgs/Register.png'
import './signin.css'
import { Link } from 'react-router-dom'
// import axios from 'axios';

export default function Signup() {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const history = useHistory();
    // const toLoginPage = () => history.push('/signin');

    // const postUser = async (e) => {
    //     e.preventDefault();
    //     await axios.post("http://localhost:5034/api/users", {
    //         name,
    //         email,
    //         password
    //     })
    //         .then((response) => {
    //             toLoginPage();
    //         })
    //         .catch((error) => {

    //         })
    // }

    // type="text" onChange={(e) => setName(e.target.value)}
    // ype="email" onChange={(e) => setEmail(e.target.value)}
    // type="password" onChange={(e) => setPassword(e.target.value)}
    // onSubmit={postUser}

    return (
        <div>
            <div className='containerr'>
                <div className='info-img'>
                    <img src={registerimg} alt='register' />
                </div>
                <form >
                    <h2>SIGN UP</h2>
                    <input  placeholder="Enter Your Name.." class="input-info"></input>
                    <input t placeholder="Enter Your Email.." class="input-info"></input>
                    {/* <input type="text" placeholder="+923" class="input-info"></input> */}
                    <input  placeholder="Enter Your Password.." class="input-info"></input>
                    <button class="submit">Sign Up</button><br />
                    <Link to='#' className='link'>Forgot Password?</Link> <br />
                    <Link to='/Signin' className='link'> Already have an account?</Link>
                </form>
            </div>
        </div>
    )
}
