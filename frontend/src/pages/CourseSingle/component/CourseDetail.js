import React from 'react'
import Curriculum from './Curriculum'
import ExtraInfo from './ExtraInfo'
import CourseRelated from './CourseRelated'
const CourseDetail = () => {
  return (
    <section className="pb-8">
        <div className="container">
            <div className='row'>
                <Curriculum />
                <ExtraInfo />
            </div>
            
            <CourseRelated />
        </div>
    </section>
  )
}

export default CourseDetail