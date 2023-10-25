import React from 'react'
import {Link} from 'react-router-dom'


import courseThumbnail from '../assets/images/course/Learn.png'

const CourseCard = (props) => {
  const {course} = props
  if (!course) {
    return null;
  }

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
            <span className="badge bg-info-soft">{course.course_level}</span>
            <Link to="#" className="text-muted fs-5">
              <i className="fe fe-heart align-middle"></i>
            </Link>
          </div>
          <h4 className="mb-2 text-truncate-line-2">
            <Link to="../course-single.html" className="text-inherit">
              {course.course_title}
            </Link>
          </h4>
          <small>By: Caalaa Olanni</small>
          <div className="lh-1 mt-3">
            <span>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning"></i>
            </span>
            <span className="text-warning">{course.rating}</span>
            <span className="fs-6 text-muted">({course.students_enrolled})</span>
          </div>
        </div>
        {/* Card Footer */}
        <div className="card-footer">
          <div className="row align-items-center g-0">
            <div className="col">
              <h5 className="mb-0">${course.price}</h5>
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