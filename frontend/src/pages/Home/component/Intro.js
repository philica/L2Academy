import React from 'react'
import {Link} from 'react-router-dom'

import image from '../../../assets/images/background/acedamy-img/bg-thumb.png'
import girl from "../../../assets/images/background/acedamy-img/girl-image.png"
import frame1 from "../../../assets/images/background/acedamy-img/frame-1.png"
import frame2 from "../../../assets/images/background/acedamy-img/frame-2.png"
import target from "../../../assets/images/background/acedamy-img/target.png"
import sound from "../../../assets/images/background/acedamy-img/sound.png"
import trophy from "../../../assets/images/background/acedamy-img/trophy.png"

import { useSelector } from 'react-redux'

const Intro = () => {
  const user = useSelector(state => state.login.user)
  
  return (
    <>
<section className="py-lg-10 py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-6 mb-lg-0">
            <div>
              <h5 className="text-dark mb-4">
                <i className="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2"></i>
                Most trusted education platform
              </h5>
              <h1 className="display-3 fw-bold mb-3">
              Dandeettii kee guddifadhuu hojii <br/>  kee tarkaanfachiisi
              </h1>
              <p className="pe-lg-10 mb-5">
                Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
              </p>
              <Link to="/login" className="btn btn-primary" style={{marginRight:"10px"}} >Join Free Now</Link>
              <Link to="#" className="btn btn-yellow ">Are you instructure</Link>
              
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="position-relative">
              <img src={image} alt="img" className="" />
              <img src={girl} alt="girl" className="w-100 w-md-auto position-absolute end-0 bottom-0" />
              <img src={frame1} alt="frame" className="position-absolute top-0 ms-lg-n10 ms-n19" />
              <img src={frame2} alt="frame" className="position-absolute bottom-0 start-0 ms-lg-n14 ms-n6 mb-n7" />
              <img src={target} alt="target" className="position-absolute bottom-0 mb-10 ms-n10 ms-lg-n1" />
              <img src={sound} alt="sound" className="position-absolute top-0 start-0 mt-18 ms-lg-n19 ms-n8" />
              <img src={trophy} alt="trophy" className="position-absolute top-0 start-0 ms-lg-n14 ms-n5" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Intro