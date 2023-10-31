import React from 'react'

const ProfileSidebar = () => {
  return (
    <div className="col-lg-3 col-md-4 col-12">
      {/* Side navbar */}
      <nav className="navbar navbar-expand-md shadow-sm mb-4 mb-lg-0 sidenav">
        {/* Menu */}
        <a className="d-xl-none d-lg-none d-md-none text-inherit fw-bold" href="#">
          Menu
        </a>
        {/* Button */}
        <button
          className="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidenav"
          aria-controls="sidenav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fe fe-menu"></span>
        </button>
        {/* Collapse navbar */}
        <div className="collapse navbar-collapse" id="sidenav">
          <div className="navbar-nav flex-column">
            <span className="navbar-header">Subscription</span>
            {/* List */}
            <ul className="list-unstyled ms-n2 mb-4">
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="student-subscriptions.html">
                  <i className="fe fe-calendar nav-icon"></i>
                  My Subscriptions
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="billing-info.html">
                  <i className="fe fe-credit-card nav-icon"></i>
                  Billing Info
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="payment-method.html">
                  <i className="fe fe-credit-card nav-icon"></i>
                  Payment
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="invoice.html">
                  <i className="fe fe-clipboard nav-icon"></i>
                  Invoice
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="student-quiz.html">
                  <i className="fe fe-help-circle nav-icon"></i>
                  My Quiz Attempt
                </a>
              </li>
            </ul>
            <span className="navbar-header">Account Settings</span>
            {/* List */}
            <ul className="list-unstyled ms-n2 mb-0">
              {/* Nav item */}
              <li className="nav-item active">
                <a className="nav-link" href="profile-edit.html">
                  <i className="fe fe-settings nav-icon"></i>
                  Edit Profile
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="security.html">
                  <i className="fe fe-user nav-icon"></i>
                  Security
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="social-profile.html">
                  <i className="fe fe-refresh-cw nav-icon"></i>
                  Social Profiles
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="delete-profile.html">
                  <i className="fe fe-trash nav-icon"></i>
                  Delete Profile
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="../index.html">
                  <i className="fe fe-power nav-icon"></i>
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ProfileSidebar