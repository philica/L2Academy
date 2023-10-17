import React from 'react'

const Numbers = () => {
  return (
    <section className="pb-14 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 border-top-md border-bottom border-end-md">
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-award fs-2 text-info"></i>
              </div>
              <div className="lh-1">
                <h2 className="mb-1">316,000+</h2>
                <span>Qualified Instructor</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 border-top-md border-bottom border-end-lg">
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-users fs-2 text-warning"></i>
              </div>
              <div className="lh-1">
                <h2 className="mb-1">1.8 Billion+</h2>
                <span>Course enrolments</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 border-top-lg border-bottom border-end-md">
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-tv fs-2 text-primary"></i>
              </div>
              <div className="lh-1">
                <h2 className="mb-1">41,000+</h2>
                <span>Courses in 42 languages</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 border-top-lg border-bottom">
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-film fs-2 text-success"></i>
              </div>
              <div className="lh-1">
                <h2 className="mb-1">179,000+</h2>
                <span>Online Videos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers