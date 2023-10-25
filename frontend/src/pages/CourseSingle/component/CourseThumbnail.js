import React from 'react'
import { Link } from 'react-router-dom'

import courseImage from '../../../assets/images/course/course-javascript.jpg'


const CourseThumbnail = () => {
  return (
    <div className="card mb-3 mb-4">
      <div className="p-1">
        <div className="d-flex justify-content-center align-items-center rounded border-white border rounded-3 bg-cover" style={{ backgroundImage: 'url(https://res.cloudinary.com/go1/image/upload/q_60,h_256/v1572422068/ocaln8elxhfwxljxhulu.png)', height: '210px' }}>
          <Link className="glightbox icon-shape rounded-circle btn-play icon-xl" href="https://www.youtube.com/watch?v=Nfzi7034Kbg">
            <i className="fe fe-play"></i>
          </Link>
        </div>
      </div>
      {/* Card body */}
      <div className="card-body">
        {/* Price single page */}
        <div className="mb-3">
          <span className="text-dark fw-bold h2">$600</span>
          <del className="fs-4">$750</del>
        </div>
        <div className="d-grid">
          <Link href="#" className="btn btn-primary mb-2">Start Free Month</Link>
          <Link href="pricing.html" className="btn btn-outline-primary">Get Full Access</Link>
        </div>
      </div>
    </div>
  )
}

export default CourseThumbnail