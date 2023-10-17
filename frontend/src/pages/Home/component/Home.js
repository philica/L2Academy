import React from 'react'
import Navbar from '../../../components/Navbar'
import Intro from './Intro'
import Numbers from './Numbers'
import PopularCourse from './PopularCourse'
import Instructor from './Instructor'
import Testimonial from './Testimonial'
import Footer from '../../../components/Footer'


const Home = () => {
  return (
    <>
    <Navbar />
    <main>
        <Intro />
        <Numbers /> 
        <PopularCourse />
        <Instructor />
        <Testimonial />
        <Footer />
    </main>
    </>
    
    
  )
}

export default Home