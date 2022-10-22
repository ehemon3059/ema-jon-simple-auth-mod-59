import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Login.css'

const Login = () => {

    const {signinUser} = useContext(AuthContext);

    const navigate = useNavigate()


    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signinUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>login</h2>
            <form onSubmit={handelLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id=""  required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id=""  required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema john <Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;