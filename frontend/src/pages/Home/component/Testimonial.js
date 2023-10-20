import React from 'react'
import {Link} from 'react-router-dom'
import Slider from './Slider'

const Testimonial = () => {
  return (
    <section class=" bg-gray-200 pt-lg-14 pb-lg-16 pt-5 pb-13">
      <div class="container">
        {/* {<!-- row -->} */}
        <div class="row mb-lg-10 mb-5">
          <div class="offset-lg-1 col-lg-10 col-12">
            <div class="row align-items-center">
              {/*<!-- col -->*/}
              <div class="col-lg-6 col-md-8">
                {/* {{/* <!-- rating -->*/}
                <div class="">
                  <div class="mb-3"><span class="text-dark fw-semibold">4.5/5.0</span> <span>
                    <i class="mdi mdi-star text-warning me-n1"></i>
                    <i class="mdi mdi-star text-warning me-n1"></i>
                    <i class="mdi mdi-star text-warning me-n1"></i>
                    <i class="mdi mdi-star text-warning me-n1"></i>
                    <i class="mdi mdi-star text-warning"></i>
                  </span>
                    <span class="text-warning">5</span><span class="ms-2">(Based on 3265 ratings)</span>
                  </div>
                  {/* {<!-- heading -->} */}
                  <h2 class="h1">What our customers say</h2>
                  <p class="mb-0"> Hear from <span class="text-dark">teachers</span>, <span class="text-dark">trainers</span>, and <span class="text-dark">leaders</span> in the learning
                    space
                    about how Geeks empowers them to provide
                    quality online learning experiences.</p>

                </div>
              </div>
              <div class="col-lg-6 col-md-4 text-md-end mt-4 mt-md-0">
                {/* {<!-- btn -->} */}
                <Link to="#" class="btn btn-primary">View Reviews</Link>
              </div>
            </div>

          </div>

        </div>

        {/* {<!-- Slider row -->} */}
        <div class="row">
          <div className='col-md-12'>
            <div className='position-relative'>
              <Slider />  
            </div>
          </div>

        </div>


      </div>


    </section>
  )
}

export default Testimonial