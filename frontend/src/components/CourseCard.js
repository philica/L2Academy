import React from 'react'
import {Link} from 'react-router-dom'


import courseThumbnail from '../assets/images/course/Learn.png'

const CourseCard = () => {
  return (
    <div className="col">
      {/* Card */}
      <div className="card card-hover">
        <Link to="../course-single.html" className="card-img-top">
          <img src={courseThumbnail} alt="course" className="rounded-top-md card-img-top" />
        </Link>
        {/* Card Body */}
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge bg-info-soft">Intermediate</span>
            <Link to="#" className="text-muted fs-5">
              <i className="fe fe-heart align-middle"></i>
            </Link>
          </div>
          <h4 className="mb-2 text-truncate-line-2">
            <Link to="../course-single.html" className="text-inherit">
              How to easily create a website with JavaScript
            </Link>
          </h4>
          <small>By: Claire Evans</small>
          <div className="lh-1 mt-3">
            <span>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning"></i>
            </span>
            <span className="text-warning">4.5</span>
            <span className="fs-6 text-muted">(9,300)</span>
          </div>
        </div>
        {/* Card Footer */}
        <div className="card-footer">
          <div className="row align-items-center g-0">
            <div className="col">
              <h5 className="mb-0">$39.00</h5>
            </div>
            <div className="col-auto">
              <Link to="#" className="text-inherit">
                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                Get Enrolled
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard