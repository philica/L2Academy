import React from 'react'

// import navbar component
import Navbar from '../../../../components/Navbar'

// import personal info component
import PersonalInfo from './PersonalInfo'

// import course component
import Education from './Education'

//import footer component
import Footer from '../../../../components/Footer'

const StudentDashboard = () => {
  return (
    <>
      <Navbar />  
      <main>  
        <PersonalInfo />
        <Education />
      </main>
      <Footer />
    </>
  )
}

export default StudentDashboard