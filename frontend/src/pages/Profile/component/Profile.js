import React from 'react'
import { Route, Routes, Link, Outlet } from 'react-router-dom'

//import navbar
import Navbar from '../../../components/Navbar'
// import personal info 
import PersonalInfo from './PersonalInfo'
// import profile detail
// import ProfileDetail from './ProfileDetail'

//import sidebar component
import ProfileSidebar from './ProfileSidebar'

import Footer from '../../../components/Footer'
const Profile = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="pt-5 pb-5">
                    <div className="container">
                        {/* User info */}
                        <PersonalInfo />
                        {/* Content */}
                        <div className='row mt-0 mt-md-4'>
                            {/* Sidebar */}
                            <ProfileSidebar />
                            {/* Outlet */}
                            <Outlet />
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Profile