import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules';
import avatar from '../../../assets/images/avatar/avatar-3.jpg'

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation,Autoplay]}
      navigation={false}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="card">
          <div className="card-body text-center p-6">
            {/* img */}
            <img src={avatar} alt="avatar" className="avatar avatar-lg rounded-circle" />
            <p className="mb-0 mt-3">“Praesent aliquet diam a ligula imperdiet commodo. Donec eleifend, orci et accumsan interdum, ipsum leo porta velit, a placerat neque ex id est.”</p>
            {/* rating */}
            <div className="lh-1 mb-3 mt-4">
              <span>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning"></i>
              </span>
              <span className="text-warning">4.0</span>
            </div>
            {/* text */}
            <h3 className="mb-0 h4">Leigh F. Keller</h3>
            <span>Marketing Manager at EaseTemplate</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="card-body text-center p-6">
            {/* img */}
            <img src={avatar} alt="avatar" className="avatar avatar-lg rounded-circle" />
            <p className="mb-0 mt-3">“Praesent aliquet diam a ligula imperdiet commodo. Donec eleifend, orci et accumsan interdum, ipsum leo porta velit, a placerat neque ex id est.”</p>
            {/* rating */}
            <div className="lh-1 mb-3 mt-4">
              <span>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning"></i>
              </span>
              <span className="text-warning">4.0</span>
            </div>
            {/* text */}
            <h3 className="mb-0 h4">Leigh F. Keller</h3>
            <span>Marketing Manager at EaseTemplate</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="card">
        <div className="card-body text-center p-6">
          {/* img */}
          <img src={avatar} alt="avatar" className="avatar avatar-lg rounded-circle" />
          <p className="mb-0 mt-3">“Praesent aliquet diam a ligula imperdiet commodo. Donec eleifend, orci et accumsan interdum, ipsum leo porta velit, a placerat neque ex id est.”</p>
          {/* rating */}
          <div className="lh-1 mb-3 mt-4">
            <span>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning"></i>
            </span>
            <span className="text-warning">4.0</span>
          </div>
          {/* text */}
          <h3 className="mb-0 h4">Leigh F. Keller</h3>
          <span>Marketing Manager at EaseTemplate</span>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide><div className="card">
        <div className="card-body text-center p-6">
          {/* img */}
          <img src={avatar} alt="avatar" className="avatar avatar-lg rounded-circle" />
          <p className="mb-0 mt-3">“Praesent aliquet diam a ligula imperdiet commodo. Donec eleifend, orci et accumsan interdum, ipsum leo porta velit, a placerat neque ex id est.”</p>
          {/* rating */}
          <div className="lh-1 mb-3 mt-4">
            <span>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning me-n1"></i>
              <i className="mdi mdi-star text-warning"></i>
            </span>
            <span className="text-warning">4.0</span>
          </div>
          {/* text */}
          <h3 className="mb-0 h4">Leigh F. Keller</h3>
          <span>Marketing Manager at EaseTemplate</span>
        </div>
      </div></SwiperSlide>
    </Swiper>
  )
}

export default Slider