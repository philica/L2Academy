import React from 'react'
import Navbar from '../../../components/Navbar'
import Intro from './Intro'
import Numbers from './Numbers'
import PopularCourse from './PopularCourse'
import Instructor from './Instructor'
import Testimonial from './Testimonial'
import Footer from '../../../components/Footer'

import { UseSelector, useSelector } from 'react-redux'



const Home = () => {


  const user = useSelector(state => state.login.user)
  return (
    <>
    <Navbar />
    <main>
        <Intro />
       {!user && <Numbers /> }
        <PopularCourse />
       {!user && <Instructor />}
        <Testimonial />
        <Footer />
    </main>
    </>
    
    
  )
}

export default Home