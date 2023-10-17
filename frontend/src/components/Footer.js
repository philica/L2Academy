import React from 'react'

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
                <a href="#" className="mdi mdi-facebook fs-4 text-muted me-2"></a>
                <a href="#" className="mdi mdi-twitter text-muted me-2"></a>
                <a href="#" className="mdi mdi-instagram text-muted "></a>
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
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Contact
                </a>
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
                <a href="#" className="nav-link">
                  Help and Support
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Become Instructor
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Get the app
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  FAQ’s
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Tutorial
                </a>
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
              Email: <a href="#">support@geeksui.com</a>
            </p>
            <p>
              Phone: <span className="text-dark fw-semibold">(000) 123 456 789</span>
            </p>
            <div className="d-flex">
              <a href="#">
                <img src={appstore} alt="" className="img-fluid" />
              </a>
              <a href="#" className="ms-2">
                <img src={playstore} alt="" className="img-fluid" />
              </a>
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
                <a className="nav-link ps-0" href="#">
                  Privacy Policy
                </a>
                <a className="nav-link" href="#">
                  Terms of Service
                </a>
                <a className="nav-link" href="#">
                  Licenses
                </a>
                <a className="nav-link" href="#">
                  Sitemap
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-12">
          {/* scroll top */}
          <div className="text-end">
            <a href="#" className="btn btn-icon btn-pills btn-primary">
              <i className="uil uil-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer