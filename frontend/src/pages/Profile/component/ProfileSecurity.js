import React from 'react'

const ProfileSecurity = () => {
  return (
    <div className="col-lg-9 col-md-8 col-12">
      {/* Card */}
      <div className="card">
        {/* Card header */}
        <div className="card-header">
          <h3 className="mb-0">Security</h3>
          <p className="mb-0">Edit your account settings and change your password here.</p>
        </div>
        {/* Card body */}
        <div className="card-body">
          <h4 className="mb-0">Email Address</h4>
          <p>
            Your current email address is <span className="text-success">stellaflores@gmail.com</span>
          </p>
          <form className="row needs-validation" noValidate>
            <div className="mb-3 col-lg-6 col-md-12 col-12">
              <label className="form-label" htmlFor="email">
                New email address
              </label>
              <input id="email" type="email" name="email" className="form-control" placeholder="" required />
              <div className="invalid-feedback">Please Enter email address</div>
              <button type="submit" className="btn btn-primary mt-2">
                Update Details
              </button>
            </div>
          </form>
          <hr className="my-5" />
          <div>
            <h4 className="mb-0">Change Password</h4>
            <p>We will email you a confirmation when changing your password, so please expect that email after submitting.</p>
            {/* Form */}
            <form className="row needs-validation" noValidate>
              <div className="col-lg-6 col-md-12 col-12">
                {/* Current password */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="currentpassword">
                    Current password
                  </label>
                  <input id="currentpassword" type="password" name="currentpassword" className="form-control" placeholder="" required />
                  <div className="invalid-feedback">Please enter current password.</div>
                </div>
                {/* New password */}
                <div className="mb-3 password-field">
                  <label className="form-label" htmlFor="newpassword">
                    New password
                  </label>
                  <input id="newpassword" type="password" name="newpassword" className="form-control mb-2" placeholder="" required />
                  <div className="invalid-feedback">Please enter new password.</div>
                  <div className="row align-items-center g-0">
                    <div className="col-6">
                      <span data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Test it by typing a password in the field below. To reach full strength, use at least 6 characters, a capital letter and a digit, e.g. 'Test01'">
                        Password strength <i className="fe fe-help-circle ms-1"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  {/* Confirm new password */}
                  <label className="form-label" htmlFor="confirmpassword">
                    Confirm New Password
                  </label>
                  <input id="confirmpassword" type="password" name="confirmpassword" className="form-control mb-2" placeholder="" required />
                  <div className="invalid-feedback">Please enter confirm new password.</div>
                </div>
                {/* Button */}
                <button type="submit" className="btn btn-primary">
                  Save Password
                </button>
                <div className="col-6"></div>
              </div>
              <div className="col-12 mt-4">
                <p className="mb-0">
                  Can't remember your current password? <a href="#">Reset your password via email</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSecurity