import React from 'react'
import {Link} from 'react-router-dom'


import logo from '../assets/images/brand/logo/L2HomeLogo.png'
import playstore from '../assets/images/svg/playstore.svg'
import appstore from '../assets/images/svg/appstore.svg'


const Footer = () => {
  return (
    <footer className="pt-lg-10 pt-5 footer bg-white">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          {/* about company */}
          <div className="mb-4">
            <img src={logo} alt="" className="logo-inverse" />
            <div className="mt-4">
              <p>
                Geek is feature-rich components and beautifully Bootstrap UIKit for developers, built with bootstrap
                responsive framework.
              </p>
              {/* social media */}
              <div className="fs-4 mt-4">
                <Link to="#" className="mdi mdi-facebook fs-4 text-muted me-2"></Link>
                <Link to="#" className="mdi mdi-twitter text-muted me-2"></Link>
                <Link to="#" className="mdi mdi-instagram text-muted "></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="offset-lg-1 col-lg-2 col-md-3 col-6">
          <div className="mb-4">
            {/* list */}
            <h3 className="fw-bold mb-3">Company</h3>
            <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
              <li>
                <Link to="#" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-6">
          <div className="mb-4">
            {/* list */}
            <h3 className="fw-bold mb-3">Support</h3>
            <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
              <li>
                <Link to="#" className="nav-link">
                  Help and Support
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  Become Instructor
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  Get the app
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  FAQ’s
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  Tutorial
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-12">
          {/* contact info */}
          <div className="mb-4">
            <h3 className="fw-bold mb-3">Get in touch</h3>
            <p>339 McDermott Points Hettingerhaven, NV 15283</p>
            <p className="mb-1">
              Email: <Link to="#">support@geeksui.com</Link>
            </p>
            <p>
              Phone: <span className="text-dark fw-semibold">(000) 123 456 789</span>
            </p>
            <div className="d-flex">
              <Link to="#">
                <img src={appstore} alt="" className="img-fluid" />
              </Link>
              <Link to="#" className="ms-2">
                <img src={playstore} alt="" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center g-0 border-top py-2 mt-6">
        {/* Desc */}
        <div className="col-md-10 col-12">
          <div className="d-lg-flex align-items-center">
            <div className="me-4">
              <span>
                ©{' '}
                <span id="copyright5">
                  <script>
                    {`document.getElementById('copyright5').appendChild(document.createTextNode(new Date().getFullYear()))`}
                  </script>
                  2023
                </span>{' '}
                Geeks-UI
              </span>
            </div>
            <div>
              <nav className="nav nav-footer">
                <Link className="nav-link ps-0" to="#">
                  Privacy Policy
                </Link>
                <Link className="nav-link" to="#">
                  Terms of Service
                </Link>
                <Link className="nav-link" to="#">
                  Licenses
                </Link>
                <Link className="nav-link" to="#">
                  Sitemap
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-12">
          {/* scroll top */}
          <div className="text-end">
            <Link to="#" className="btn btn-icon btn-pills btn-primary">
              <i className="uil uil-arrow-up"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer