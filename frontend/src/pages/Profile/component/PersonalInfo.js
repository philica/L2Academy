import React from 'react'
import { Link } from 'react-router-dom'

import avatar from '../../../assets/images/avatar/avatar-3.jpg'


const PersonalInfo = () => {
    return (
        <div className="row align-items-center">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        {/* Background */}
        <div
          className="rounded-top"
          style={{
            background: 'url(https://www.solidbackgrounds.com/images/1600x900/1600x900-dark-green-solid-color-background.jpg) no-repeat',
            backgroundSize: 'cover',
            height: '100px',
          }}
        ></div>
        <div className="card px-4 pt-2 pb-4 shadow-sm rounded-top-0 rounded-bottom-0 rounded-bottom-md-2">
          <div className="d-flex align-items-end justify-content-between">
            <div className="d-flex align-items-center">
              <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                <img
                  src={avatar}
                  className="avatar-xl rounded-circle border border-4 border-white"
                  alt="avatar"
                />
              </div>
              <div className="lh-1">
                <h2 className="mb-0">
                  Deborah Getachew 
                  <a
                    href="#"
                    className=""
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    aria-label="Beginner"
                    data-bs-original-title="Beginner"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                      <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                      <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                    </svg>
                  </a>
                </h2>
                <p className="mb-0 d-block">@deborahgetachew</p>
              </div>
            </div>
            <div>
              <a href="profile-edit.html" className="btn btn-primary btn-sm d-none d-md-block">
                Account Setting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

       
    )
}

export default PersonalInfo