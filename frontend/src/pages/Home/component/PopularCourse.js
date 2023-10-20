import React from 'react'
import {Link} from 'react-router-dom'



import CourseCard from '../../../components/CourseCard'

const PopularCourse = () => {
    return (
        <section class="pb-lg-14 pb-8 bg-white">
            {/* {<!-- row -->} */}
            <div class="container">
                <div class="row">
                    {/* {<!-- col -->} */}
                    <div class="col-12">
                        <div class="mb-6">
                            <h2 class="mb-1 h1">Most Popular Courses</h2>
                            <p>These are the most popular courses among Geeks Courses learners worldwide in year 2022</p>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-12">
                        {/* {<!-- Nav tab -->} */}
                        <ul class="nav nav-lb-tab mb-6 bg-gray-200 px-5 rounded-3 " id="pills-tab" role="tablist">
                            {/*<!-- nav item -->*/}
                            <li class="nav-item ms-0" role="presentation">
                                <Link class="nav-link active" id="pills-development-tab" data-bs-toggle="pill" to="#pills-development" role="tab" aria-controls="pills-development" aria-selected="true">Development </Link>
                            </li>
                            {/*<!-- nav item -->*/}
                            <li class="nav-item" role="presentation">
                                <Link class="nav-link" id="pills-design-tab" data-bs-toggle="pill" to="#pills-design" role="tab" aria-controls="pills-design" aria-selected="false" tabindex="-1">Design</Link>
                            </li>
                            {/*<!-- nav item -->*/}
                            <li class="nav-item" role="presentation">
                                <Link class="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" to="#pills-marketing" role="tab" aria-controls="pills-marketing" aria-selected="false" tabindex="-1">Marketing</Link>
                            </li>
                            {/*<!-- nav item -->*/}
                            <li class="nav-item" role="presentation">
                                <Link class="nav-link" id="pills-business-tab" data-bs-toggle="pill" to="#pills-business" role="tab" aria-controls="pills-business" aria-selected="false" tabindex="-1">Business</Link>
                            </li>
                            {/*<!-- nav item -->*/}
                            <li class="nav-item" role="presentation">
                                <Link class="nav-link" id="pills-health-tab" data-bs-toggle="pill" to="#pills-health" role="tab" aria-controls="pills-health" aria-selected="false" tabindex="-1">Health</Link>
                            </li>
                        </ul>
                        {/* {<!-- Tab content -->} */}
                        <div class="tab-content" id="pills-tabContent">
                            {/* {<!-- tab content -->} */}
                            <div class="tab-pane fade active show" id="pills-development" role="tabpanel" aria-labelledby="pills-development-tab">

                                {/* { <!-- row -->} */}


                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    {/* enter course card  here */}
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                </div>
                            </div>
                            {/* {<!-- tab content -->} */}
                            <div class="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">

                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />

                                </div>
                            </div>
                            {/* {<!-- Tab Pane -->} */}
                            <div class="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-health" role="tabpanel" aria-labelledby="pills-health-tab">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                    <CourseCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularCourse