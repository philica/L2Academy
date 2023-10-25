import React from 'react'
import CourseCardRelated from './CourseCardRelated'

const CourseRelated = () => {
    return (
        <div className="pt-8 pb-3">
            <div class="row d-md-flex align-items-center mb-4">
                <div class="col-12">
                    <h2 class="mb-0">Related Courses</h2>
                </div>
                <div className="row">
                    <CourseCardRelated />
                    <CourseCardRelated />
                    <CourseCardRelated />
                    <CourseCardRelated />
                </div>
            </div>
        </div>
    )
}

export default CourseRelated