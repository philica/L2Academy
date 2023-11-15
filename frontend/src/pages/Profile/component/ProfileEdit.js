import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { useSelector } from "react-redux";

import avatar from '../../../assets/images/avatar/avatar-3.jpg'

const ProfileEdit = () => {

    const user = useSelector((state) => state.login.user);
    console.log(user)
    const [userData, setUserData] = useState({ state: '', dateValue: '' })


    const flatpickrRef = useRef(null);

    useEffect(() => {
        console.log("flapicker initialized")
        if (flatpickrRef.current) {
            Flatpickr(flatpickrRef.current);
        }

        //fetch and set user data from api to state
        if(user){
            console.log("user data fetched")
        }else{
            console.log("user data not fetched")
        }
        
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted")
        console.log(userData)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setUserData({
            ...userData,
            [name]: value,
        });
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value; // Extract the selected date from the input's value
        console.log(selectedDate)
        setUserData({
            ...userData,
            dateValue: selectedDate,
        });
    }

    return (
        <div className="col-lg-9 col-md-8 col-12">
            {/* Card */}
            <div className="card">
                {/* Card header */}
                <div className="card-header">
                    <h3 className="mb-0">Profile Details</h3>
                    <p className="mb-0">You have full control to manage your own account setting.</p>
                </div>
                {/* Card body */}
                <div className="card-body">
                    <div className="d-lg-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center mb-4 mb-lg-0">
                            <img
                                src={avatar}
                                id="img-uploaded"
                                className="avatar-xl rounded-circle"
                                alt="avatar"
                            />
                            <div className="ms-3">
                                <h4 className="mb-0">Your avatar</h4>
                                <p className="mb-0">PNG or JPG no bigger than 800px wide and tall.</p>
                            </div>
                        </div>
                        <div>
                            <Link href="#" className="btn btn-outline-secondary btn-sm m-2">
                                Update
                            </Link>
                            <Link href="#" className="btn btn-outline-danger btn-sm">
                                Delete
                            </Link>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div>
                        <h4 className="mb-0">Personal Details</h4>
                        <p className="mb-4">Edit your personal information and address.</p>
                        {/* Form */}
                        <form className="row gx-3 needs-validation" onSubmit={handleSubmit} noValidate>
                            {/* First name */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="fname">
                                    First Name
                                </label>
                                <input type="text" name="first_name" id="fname" className="form-control" placeholder="First Name" defaultValue={"Philica"} required onChange={handleInputChange} />
                                <div className="invalid-feedback">Please enter first name.</div>
                            </div>
                            {/* Last name */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="lname">
                                    Last Name
                                </label>
                                <input type="text" name="last_name" id="lname" className="form-control" placeholder="Last Name" required onChange={handleInputChange} />
                                <div className="invalid-feedback">Please enter last name.</div>
                            </div>
                            {/* Phone */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="phone">
                                    Phone
                                </label>
                                <input type="text" name="phone_number" id="phone" className="form-control" placeholder="Phone" required onChange={handleInputChange} />
                                <div className="invalid-feedback">Please enter phone number.</div>
                            </div>
                            {/* Birthday */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="birth">
                                    Birthday
                                </label>
                                <input
                                    className="form-control "
                                    type="text"
                                    placeholder="Birth of Date"
                                    id="birth"
                                    name="dateValue"
                                    ref={flatpickrRef}
                                    value={userData.dateValue}
                                    onChange={handleDateChange}
                                />
                                <div className="invalid-feedback">Please choose a date.</div>
                            </div>
                            {/* State */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="editState">
                                    State
                                </label>
                                <select name="state" className="form-select" id="editState" required onChange={handleInputChange}>
                                    <option value="">Select State</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                </select>
                                <div className="invalid-feedback">Please choose state.</div>
                            </div>
                            {/* Country */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="editCountry">
                                    Country
                                </label>
                                <select name="country" className="form-select" id="editCountry" required onChange={handleInputChange}>
                                    <option value="">Select Country</option>
                                    <option value="1">India</option>
                                    <option value="2">UK</option>
                                    <option value="3">USA</option>
                                </select>
                                <div className="invalid-feedback">Please choose country.</div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <button className="btn btn-primary" type="submit">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit