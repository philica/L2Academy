import React from 'react'

//course Thumbnail
import CourseThumbnail from './CourseThumbnail'
//course Includes
import CourseIncludes from './CourseIncludes'
//Course Instructor
import CourseInstructor from './CourseInstructor'

const ExtraInfo = () => {
  return (
    <>
         <div className='col-lg-4 col-md-12 col-12 mt-lg-n8'>
            <CourseThumbnail />
            <CourseIncludes />  
            <CourseInstructor />
         </div>
    </>
  )
}

export default ExtraInfo