import React from "react";

//library css
import '../../../assets/fonts/feather/feather.css';
import '../../../assets/libs/bootstrap-icons/font/bootstrap-icons.css';
import '../../../assets/libs/@mdi/font/css/materialdesignicons.min.css';
import '../../../assets/libs/simplebar/dist/simplebar.min.css';

//theme css
import '../../../assets/css/theme.min.css'

//images
import logo from '../../../assets/images/brand/logo/L2Logo.png'

const Login = () => {
  return (
    <main>
    <section className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center g-0 min-vh-100">
        <div className="col-lg-5 col-md-8 py-8 py-xl-0">
          {/* Card */}
          <div className="card shadow">
            {/* Card body */}
            <div className="card-body p-6">
              <div className="mb-4 text-center">
                <a href="../index.html"><img src={logo} className="mb-4" alt="logo-icon" /></a>
                <h1 className="mb-1 fw-bold">Sign in</h1>
                <span>Don’t have an account? <a href="sign-up.html" className="ms-1">Sign up</a></span>
              </div>
              {/* Form */}
              <form>
                {/* Username */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Username or email</label>
                  <input type="email" id="email" className="form-control" name="email" placeholder="Email address here" required />
                </div>
                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" id="password" className="form-control" name="password" placeholder="**************" required />
                </div>
                {/* Checkbox */}
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberme" />
                    <label className="form-check-label" htmlFor="rememberme">Remember me</label>
                  </div>
                  <div>
                    <a href="forget-password.html">Forgot your password?</a>
                  </div>
                </div>
                <div>
                  {/* Button */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Sign in</button>
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

export default Login