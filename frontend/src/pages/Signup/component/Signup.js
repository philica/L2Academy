import React from 'react'
import { useState } from 'react'

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

    const handleSubmit = (e) => {
        e.preventDefault();
        //Handle for submission logic
        const formData = {
            first_name:firstName,
            last_name:lastName,
            phone_number:phoneNumber,
            email,
            password,
            acceptTerms,
        };
        console.log(formData);

        //   fire signup hook here 
        fetch('http://localhost:4000/api/user/signup', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch(Error => {
            console.log(Error)
        })

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setAcceptTerms(false)
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
                                    <a href="../index.html"><img src={logo} className="mb-4" alt="logo" /></a>
                                    <h1 className="mb-1 fw-bold">Sign up</h1>
                                    <span>Already have an account? <a href="sign-in.html" className="ms-1">Sign in</a></span>
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
                                    <hr className="my-4" />
                                    <div className="mt-4 text-center">
                                        {/* Facebook */}
                                        <a href="#" className="btn-social btn-social-outline btn-facebook">
                                            <i className="mdi mdi-facebook fs-4"></i>
                                        </a>
                                        {/* Twitter */}
                                        <a href="#" className="btn-social btn-social-outline btn-twitter">
                                            <i className="mdi mdi-twitter fs-4"></i>
                                        </a>
                                        {/* LinkedIn */}
                                        <a href="#" className="btn-social btn-social-outline btn-linkedin">
                                            <i className="mdi mdi-linkedin"></i>
                                        </a>
                                        {/* GitHub */}
                                        <a href="#" className="btn-social btn-social-outline btn-github">
                                            <i className="mdi mdi-github"></i>
                                        </a>
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