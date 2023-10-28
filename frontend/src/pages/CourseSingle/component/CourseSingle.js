import React from 'react'
import Navbar from '../../../components/Navbar'
import CourseDescription from './CourseDescription'
import CourseDetail from './CourseDetail'
import Footer from '../../../components/Footer'

const CourseSingle = () => {
    return (
        <>
            <Navbar />
            <main>
                <CourseDescription />
                <CourseDetail />
                <Footer />
            </main>
        </>
    )
}

export default CourseSingle