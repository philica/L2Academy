import React from 'react'

import instructor from '../../../assets/images/instructor/instructor-img-5.png'
import dollar from '../../../assets/images/svg/dollor.svg'
import graph from '../../../assets/images/svg/graph.svg'

const Instructor = () => {
  return (
    <section className="my-lg-14 mb-8 pt-5">
      {/* container */}
      <div className="container bg-primary rounded-3">
        {/* row */}
        <div className="row align-items-center">
          {/* col */}
          <div className="col-lg-6 col-12 d-none d-lg-block">
            <div className="d-flex justify-content-center ">
              {/* img */}
              <div className="position-relative">
                <img src={instructor} alt="image" className="img-fluid mt-n13" />
                <div className="ms-n12 position-absolute bottom-0 start-0 mb-6">
                  <img src={dollar} alt="dollar" />
                </div>
                {/* img */}
                <div className="me-n4 position-absolute top-0 end-0">
                  <img src={graph} alt="graph" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="text-white p-5 p-lg-0">
              {/* text */}
              <h2 className="h1 text-white">Become an instructor today</h2>
              <p className="mb-0">
                Instructors from around the world teach millions of students on Geeks. We provide the tools and skills
                to teach what you love.
              </p>
              <a href="#" className="btn btn-white mt-4">
                Start Teaching Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instructor