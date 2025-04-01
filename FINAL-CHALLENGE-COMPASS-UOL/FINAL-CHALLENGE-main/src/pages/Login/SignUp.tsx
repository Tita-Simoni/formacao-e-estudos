import './SignUp.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import emailIcon from './images/mail.svg';
import lockIcon from './images/lock.svg';
import apple from './images/apple.svg';
import facebook from './images/facebook.svg';
import google from './images/google.svg';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

export default function SignUp () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error,] = 
        useCreateUserWithEmailAndPassword(auth);

    function HandleSignUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }    
        
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
            <Link to="/SignUp">Return</Link>
          </div>
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        return (
            window.location.href = "http://localhost:5173/home"
        );
    }

    return (
        <div className="imageBackground">        
            <div className="containerLogin">
                <section className="title">
                    <h1>Audio</h1>
                    <p className="subtitle">It's modular and design to last</p>
                </section>
                <form className="containerForm">
                    <div className="inputBox">
                        <img src={emailIcon} alt="Email Icon" />                
                        <input 
                            type="email" 
                            className="inputEmail" 
                            placeholder='Email' 
                            onChange={(e) => setEmail(e.target.value)}
                        />                    
                    </div>
                    <div className="inputBox">
                        <img src={lockIcon} alt="Lock Icon" />
                        <input 
                            type="password" 
                            className="inputPassword" 
                            placeholder='Password' 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* <p className="text">Forgot Password</p> */}
                    <button onClick={HandleSignUp} className="defaultBtn">Sign Up</button>
                    <div className="icons">
                        <button className="btIcon">
                            <img src={apple} className="icon" alt="Apple Icon" />
                        </button>
                        <button className="btIcon">
                            <img src={facebook} className="icon" alt="Facebook Icon" />
                        </button>
                        <button className="btIcon">
                            <img src={google} className="icon" alt="Google Icon" />
                        </button>
                    </div>
                    <p className="text" id="t2">Didn't have any account? 
                        <Link to="/"> Sign In Here</Link></p>                
                </form>
            </div>
        </div>

    );
}
