import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../slice/signupSlice';

//custom hooks 
import { useLogout } from '../hooks/useLogout';


//images
import logo from '../../../assets/images/brand/logo/L2Logo.png'



const Signup = () => {
    const signedUp = useSelector(state => state.signup);
    const navigate = useNavigate();
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [phone_number, setphone_number] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {first_name,last_name, email, password, phone_number}
        try {
            const resultAction = await dispatch(signupUser(userData));
            if (signupUser.fulfilled.match(resultAction)) {
              navigate('/'); // Redirect to the home page
            } else {
              console.log('Failed to sign up');
            }
          } catch (error) {
            console.log('Error signing up:', error.message);
          }
        setfirst_name('')
        setlast_name('')
        setEmail('')
        setPassword('')
        setAcceptTerms(false)
    }

    // handle logout
    const { logoutFunction } = useLogout();
    const handleLogout = () => {    
        logoutFunction();
    }

    return (
        <main>
            <section className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center g-0 min-vh-100">
                    <div className="col-lg-5 col-md-8 py-8 py-xl-0 my-4">
                        {/* Card */}
                        <div className="card shadow">
                            {/* Card body */}
                            <div className="card-body p-6">
                                <div className="mb-4 text-center">
                                    <Link to="../index.html"><img src={logo} className="mb-4" alt="logo" /></Link>
                                    <h1 className="mb-1 fw-bold">Sign up</h1>
                                    <span>Already have an account? <Link to="/login" className="ms-1">Sign in</Link></span>
                                </div>
                                {/* Form */}
                                <form onSubmit={handleSubmit} className='row' >
                                    {/* First Name */}
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="first_name" className="form-label">First Name</label>
                                        <input
                                            type="text" id="first_name"
                                            className="form-control"
                                            name="first_name"
                                            placeholder="First Name"
                                            value={first_name}
                                            onChange={(e) => setfirst_name(e.target.value)}
                                            required />
                                    </div>

                                    {/* Last Name */}
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="last_name" className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            id="last_name"
                                            className="form-control"
                                            name="last_name"
                                            placeholder="Last Name"
                                            value={last_name}
                                            onChange={(e) => setlast_name(e.target.value)}
                                            required />
                                    </div>

                                    {/* phone number */}
                                    <div className="mb-3 col-12 col-md-12">
                                        <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                        <input
                                            type="text"
                                            id="phone_number"
                                            className="form-control"
                                            name="phone_number"
                                            placeholder="Phone Number"
                                            value={phone_number}
                                            onChange={(e) => setphone_number(e.target.value)}
                                            required />
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3 col-12 col-md-12">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3 col-12 col-md-12">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="**************"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />
                                    </div>
                                    {/* Checkbox */}
                                    <div className="mb-3 col-12">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="agreeCheck"
                                                checked={acceptTerms}
                                                onChange={(e) => setAcceptTerms(!acceptTerms)}
                                            />

                                            <label className="form-check-label" htmlFor="agreeCheck">
                                                <span>
                                                    I agree to the <Link to="terms-condition-page.html">Terms of Service</Link> and <Link to="terms-condition-page.html">Privacy Policy.</Link>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        {/* Button */}
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">
                                                Create Free Account
                                            </button>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Signup