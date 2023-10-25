import React from 'react'

import avatar from '../../../assets/images/avatar/avatar-1.jpg'
import checked from '../../../assets/images/svg/checked-mark.svg'

const CourseInstructor = () => {
  return (
    <div className="card">
    {/* Card body */}
    <div className="card-body">
      <div className="d-flex align-items-center">
        <div className="position-relative">
          <img src={avatar} alt="avatar" className="rounded-circle avatar-xl" />
          <a href="#" className="position-absolute mt-2 ms-n3" data-bs-toggle="tooltip" data-placement="top" aria-label="Verifed" data-bs-original-title="Verifed">
            <img src={checked} alt="checked-mark" height="30" width="30" />
          </a>
        </div>
        <div className="ms-4">
          <h4 className="mb-0">Jenny Wilson</h4>
          <p className="mb-1 fs-6">Front-end Developer, Designer</p>
          <p className="fs-6 mb-1 d-flex align-items-center">
            <span className="text-warning">4.5</span>
            <span className="mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
            </span>
            Instructor Rating
          </p>
        </div>
      </div>
      <div className="border-top row mt-3 border-bottom mb-3 g-0">
        <div className="col">
          <div className="pe-1 ps-2 py-3">
            <h5 className="mb-0">11,604</h5>
            <span>Students</span>
          </div>
        </div>
        <div className="col border-start">
          <div className="pe-1 ps-3 py-3">
            <h5 className="mb-0">32</h5>
            <span>Courses</span>
          </div>
        </div>
        <div className="col border-start">
          <div className="pe-1 ps-3 py-3">
            <h5 className="mb-0">12,230</h5>
            <span>Reviews</span>
          </div>
        </div>
      </div>
      <p>I am an Innovation designer focusing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.</p>
      <a href="instructor-profile.html" className="btn btn-outline-secondary btn-sm">View Details</a>
    </div>
  </div>
  )
}

export default CourseInstructor