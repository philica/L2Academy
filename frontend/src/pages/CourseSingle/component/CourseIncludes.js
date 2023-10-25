import React from 'react'

const CourseIncludes = () => {
  return (
    <div className="card mb-4">
    <div>
      {/* Card header */}
      <div className="card-header">
        <h4 className="mb-0">What’s included</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-transparent">
          <i className="fe fe-play-circle align-middle me-2 text-primary"></i>
          12 hours video
        </li>
        <li className="list-group-item bg-transparent">
          <i className="fe fe-award me-2 align-middle text-success"></i>
          Certificate
        </li>
        <li className="list-group-item bg-transparent">
          <i className="fe fe-calendar align-middle me-2 text-info"></i>
          12 Article
        </li>
        <li className="list-group-item bg-transparent">
          <i className="fe fe-video align-middle me-2 text-secondary"></i>
          Watch Offline
        </li>
        <li className="list-group-item bg-transparent border-bottom-0">
          <i className="fe fe-clock align-middle me-2 text-warning"></i>
          Lifetime access
        </li>
      </ul>
    </div>
  </div>
  )
}

export default CourseIncludes