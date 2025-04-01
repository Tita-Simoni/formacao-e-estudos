import './SignUp.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import emailIcon from './images/mail.svg';
import lockIcon from './images/lock.svg';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

export default function SignIn () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    function HandleSignIp(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }  

    if (error) {
        return (
        <div>
            <p>Error: {error.message}</p>
            <Link to="/">Return</Link>
        </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        window.location.href = "http://localhost:5173/home";
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
                            type="text" 
                            className="inputEmail" 
                            placeholder='Email' 
                            onChange={(e) => setEmail(e.target.value)}
                        />                    
                    </div>
                    <div className="inputBox">
                        <img src={lockIcon} alt="Lock Icon" />
                        <input 
                            type="text" 
                            className="inputPassword" 
                            placeholder='Password' 
                            onChange={(e) => setPassword(e.target.value)}                            
                        />
                    </div>
                    <p className="text">Forgot Password</p>
                    <button onClick={HandleSignIp} className="defaultBtn">Sign In</button>
                    <p className="text" id="t2">Didn't have any account? 
                        <Link to="/SignUp"> Sign Up Here</Link></p>                
                </form>
            </div>
        </div>
        );
}
