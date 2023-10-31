import React from 'react'


import avatar from '../../../assets/images/avatar/avatar-3.jpg'

const ProfileEdit = () => {
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
                            <a href="#" className="btn btn-outline-secondary btn-sm m-2">
                                Update
                            </a>
                            <a href="#" className="btn btn-outline-danger btn-sm">
                                Delete
                            </a>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div>
                        <h4 className="mb-0">Personal Details</h4>
                        <p className="mb-4">Edit your personal information and address.</p>
                        {/* Form */}
                        <form className="row gx-3 needs-validation" noValidate>
                            {/* First name */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="fname">
                                    First Name
                                </label>
                                <input type="text" id="fname" className="form-control" placeholder="First Name" required />
                                <div className="invalid-feedback">Please enter first name.</div>
                            </div>
                            {/* Last name */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="lname">
                                    Last Name
                                </label>
                                <input type="text" id="lname" className="form-control" placeholder="Last Name" required />
                                <div className="invalid-feedback">Please enter last name.</div>
                            </div>
                            {/* Phone */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="phone">
                                    Phone
                                </label>
                                <input type="text" id="phone" className="form-control" placeholder="Phone" required />
                                <div className="invalid-feedback">Please enter phone number.</div>
                            </div>
                            {/* Birthday */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="birth">
                                    Birthday
                                </label>
                                <input
                                    className="form-control flatpickr flatpickr-input"
                                    type="text"
                                    placeholder="Birth of Date"
                                    id="birth"
                                    name="birth"
                                    readOnly
                                />
                                <div className="invalid-feedback">Please choose a date.</div>
                            </div>
                            {/* Address */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="address">
                                    Address Line 1
                                </label>
                                <input type="text" id="address" className="form-control" placeholder="Address" required />
                                <div className="invalid-feedback">Please enter address.</div>
                            </div>
                            {/* Address */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="address2">
                                    Address Line 2
                                </label>
                                <input type="text" id="address2" className="form-control" placeholder="Address" required />
                                <div className="invalid-feedback">Please enter address.</div>
                            </div>
                            {/* State */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="editState">
                                    State
                                </label>
                                <select className="form-select" id="editState" required>
                                    <option value="">Select State</option>
                                    <option value="1">Gujarat</option>
                                    <option value="2">Rajasthan</option>
                                    <option value="3">Maharashtra</option>
                                </select>
                                <div className="invalid-feedback">Please choose state.</div>
                            </div>
                            {/* Country */}
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label" htmlFor="editCountry">
                                    Country
                                </label>
                                <select className="form-select" id="editCountry" required>
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