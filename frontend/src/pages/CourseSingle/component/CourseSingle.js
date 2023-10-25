import React from 'react'
import Navbar from '../../../components/Navbar'
import CourseDescription from './CourseDescription'
import CourseDetail from './CourseDetail'

const CourseSingle = () => {
    return (
        <>
            <Navbar />
            <main>
                <CourseDescription />
                <CourseDetail />
            </main>
        </>
    )
}

export default CourseSingle