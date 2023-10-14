import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signupUser } from '../slice/signupSlice';

//custom hooks 
// import { useLogout } from '../hooks/useLogout';

//library css
import '../../../assets/fonts/feather/feather.css';
import '../../../assets/libs/bootstrap-icons/font/bootstrap-icons.css';
import '../../../assets/libs/@mdi/font/css/materialdesignicons.min.css';
import '../../../assets/libs/simplebar/dist/simplebar.min.css';

//theme css
import '../../../assets/css/theme.min.css'

//images
import logo from '../../../assets/images/brand/logo/L2Logo.png'



const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signupUser({email,password}));
        


        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setAcceptTerms(false)
    }

    //handle logout
    // const { logout } = useLogout();
    // const handleLogout = () => {    
    //     logout();
    // }

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
                                    <a href="../index.html"><img src={logo} className="mb-4" alt="logo" /></a>
                                    <h1 className="mb-1 fw-bold">Sign up</h1>
                                    <span>Already have an account? <a href="sign-in.html" className="ms-1"  >Sign in</a></span>
                                </div>
                                {/* Form */}
                                <form onSubmit={handleSubmit} className='row' >
                                    {/* First Name */}
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="firstname" className="form-label">First Name</label>
                                        <input
                                            type="text" id="firstname"
                                            className="form-control"
                                            name="firstname"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required />
                                    </div>

                                    {/* Last Name */}
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="lastname" className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastname"
                                            className="form-control"
                                            name="lastname"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required />
                                    </div>

                                    {/* phone number */}
                                    <div className="mb-3 col-12 col-md-12">
                                        <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                                        <input
                                            type="text"
                                            id="phonenumber"
                                            className="form-control"
                                            name="phonenumber"
                                            placeholder="Phone Number"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                                                    I agree to the <a href="terms-condition-page.html">Terms of Service</a> and <a href="terms-condition-page.html">Privacy Policy.</a>
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