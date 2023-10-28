import React from 'react'

import CourseThumbnail from '../../../../assets/images/course/Learn.png'
import avatar from '../../../../assets/images/avatar/avatar-6.jpg'
import pathImage from '../../../../assets/images/svg/path-img.svg'

const Education = () => {
    return (
        <section className="pb-5 py-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* Side Navbar */}
                        <ul className="nav nav-lb-tab mb-6" id="tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="currentlyLearning-tab" data-bs-toggle="pill" href="#currentlyLearning" role="tab" aria-controls="currentlyLearning" aria-selected="false" tabIndex="-1">
                                    Learning
                                </a>
                            </li>
                            <li className="nav-item ms-0" role="presentation">
                                <a className="nav-link " id="bookmarked-tab" data-bs-toggle="pill" href="#bookmarked" role="tab" aria-controls="bookmarked" aria-selected="true">
                                    Bookmarked
                                </a>
                            </li>

                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="path-tab" data-bs-toggle="pill" href="#path" role="tab" aria-controls="path" aria-selected="false" tabIndex="-1">
                                    Path
                                </a>
                            </li>
                        </ul>
                        {/* Tab content */}
                        <div className="tab-content" id="tabContent">

                            {/* Currently Learning */}
                            <div className="tab-pane fade active show" id="currentlyLearning" role="tabpanel" aria-labelledby="currentlyLearning-tab">
                                <div className="row">
                                    {/* Card */}
                                    <div className="col-lg-3 col-md-6 col-12">
                                        {/* Card */}
                                        <div className="card mb-4 card-hover">
                                            <a href="#">
                                                <img src={CourseThumbnail} alt="course" className="card-img-top" />
                                            </a>
                                            {/* Card body */}
                                            <div className="card-body">
                                                <h3 className="h4 mb-2 text-truncate-line-2">
                                                    <a href="#" className="text-inherit">How to easily create a website with React</a>
                                                </h3>
                                                {/* List inline */}
                                                <ul className="mb-3 list-inline">
                                                    <li className="list-inline-item">
                                                        <span className="align-middle">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>3h 56m</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                        </svg>
                                                        Beginner
                                                    </li>
                                                </ul>
                                                <div className="mt-3 d-flex align-baseline lh-1">
                                                <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                        </span>
                                                    <span className="text-warning mx-1">4.5</span>
                                                    <span className="fs-6">(6,300)</span>
                                                </div>
                                            </div>
                                            {/* Card footer */}
                                            <div className="card-footer">
                                                <div className="row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <img src={avatar} className="rounded-circle avatar-xs" alt="avatar" />
                                                    </div>
                                                    <div className="col ms-2">
                                                        <span>Morris Mccoy</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="removeBookmark">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="progress mt-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        {/* Card */}
                                        <div className="card mb-4 card-hover">
                                            <a href="#">
                                                <img src={CourseThumbnail} alt="course" className="card-img-top" />
                                            </a>
                                            {/* Card body */}
                                            <div className="card-body">
                                                <h3 className="h4 mb-2 text-truncate-line-2">
                                                    <a href="#" className="text-inherit">How to easily create a website with React</a>
                                                </h3>
                                                {/* List inline */}
                                                <ul className="mb-3 list-inline">
                                                    <li className="list-inline-item">
                                                        <span className="align-middle">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>3h 56m</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                        </svg>
                                                        Beginner
                                                    </li>
                                                </ul>
                                                <div className="mt-3 d-flex align-baseline lh-1">
                                                <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                        </span>
                                                    <span className="text-warning mx-1">4.5</span>
                                                    <span className="fs-6">(6,300)</span>
                                                </div>
                                            </div>
                                            {/* Card footer */}
                                            <div className="card-footer">
                                                <div className="row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <img src={avatar} className="rounded-circle avatar-xs" alt="avatar" />
                                                    </div>
                                                    <div className="col ms-2">
                                                        <span>Morris Mccoy</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="removeBookmark">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="progress mt-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        {/* Card */}
                                        <div className="card mb-4 card-hover">
                                            <a href="#">
                                                <img src={CourseThumbnail} alt="course" className="card-img-top" />
                                            </a>
                                            {/* Card body */}
                                            <div className="card-body">
                                                <h3 className="h4 mb-2 text-truncate-line-2">
                                                    <a href="#" className="text-inherit">How to easily create a website with React</a>
                                                </h3>
                                                {/* List inline */}
                                                <ul className="mb-3 list-inline">
                                                    <li className="list-inline-item">
                                                        <span className="align-middle">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>3h 56m</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                        </svg>
                                                        Beginner
                                                    </li>
                                                </ul>
                                                <div className="mt-3 d-flex align-baseline lh-1">
                                                <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                        </span>
                                                    <span className="text-warning mx-1">4.5</span>
                                                    <span className="fs-6">(6,300)</span>
                                                </div>
                                            </div>
                                            {/* Card footer */}
                                            <div className="card-footer">
                                                <div className="row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <img src={avatar} className="rounded-circle avatar-xs" alt="avatar" />
                                                    </div>
                                                    <div className="col ms-2">
                                                        <span>Morris Mccoy</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="removeBookmark">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="progress mt-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bookmarked */}
                            <div className="tab-pane fade " id="bookmarked" role="tabpanel" aria-labelledby="bookmarked-tab">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-12">
                                        {/* Card */}
                                        <div className="card mb-4 card-hover">
                                            <a href="#"><img src={CourseThumbnail} alt="course" className="card-img-top" /></a>
                                            {/* Card body */}
                                            <div className="card-body">
                                                <h3 className="h4 mb-2 text-truncate-line-2"><a href="#" className="text-inherit">How to easily create a website with React</a></h3>
                                                {/* List inline */}
                                                <ul className="mb-3 list-inline">
                                                    <li className="list-inline-item">
                                                        <span className="align-middle">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>3h 56m</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                        </svg>
                                                        Beginner
                                                    </li>
                                                </ul>
                                                <div className="mt-3 d-flex align-baseline lh-1">
                                                <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                        </span>
                                                    <span className="text-warning mx-1">4.5</span>
                                                    <span className="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* Card footer */}
                                            <div className="card-footer">
                                                <div className="row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <img src="../assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="avatar" />
                                                    </div>
                                                    <div className="col ms-2">
                                                        <span>Morris Mccoy</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="removeBookmark">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        {/* Card */}
                                        <div className="card mb-4 card-hover">
                                            <a href="#"><img src={CourseThumbnail} alt="course" className="card-img-top" /></a>
                                            {/* Card body */}
                                            <div className="card-body">
                                                <h3 className="h4 mb-2 text-truncate-line-2"><a href="#" className="text-inherit">How to easily create a website with React</a></h3>
                                                {/* List inline */}
                                                <ul className="mb-3 list-inline">
                                                    <li className="list-inline-item">
                                                        <span className="align-middle">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>3h 56m</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                        </svg>
                                                        Beginner
                                                    </li>
                                                </ul>
                                                <div className="mt-3 d-flex align-baseline lh-1">
                                                <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                        </span>
                                                    <span className="text-warning mx-1">4.5</span>
                                                    <span className="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* Card footer */}
                                            <div className="card-footer">
                                                <div className="row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <img src="../assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="avatar" />
                                                    </div>
                                                    <div className="col ms-2">
                                                        <span>Morris Mccoy</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="removeBookmark">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        {/* Card */}
                                        <div className="card mb-4 card-hover">
                                            <a href="#"><img src={CourseThumbnail} alt="course" className="card-img-top" /></a>
                                            {/* Card body */}
                                            <div className="card-body">
                                                <h3 className="h4 mb-2 text-truncate-line-2"><a href="#" className="text-inherit">How to easily create a website with React</a></h3>
                                                {/* List inline */}
                                                <ul className="mb-3 list-inline">
                                                    <li className="list-inline-item">
                                                        <span className="align-middle">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>3h 56m</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                        </svg>
                                                        Beginner
                                                    </li>
                                                </ul>
                                                <div className="mt-3 d-flex align-baseline lh-1">
                                                <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                        </span>
                                                    <span className="text-warning mx-1">4.5</span>
                                                    <span className="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* Card footer */}
                                            <div className="card-footer">
                                                <div className="row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <img src="../assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="avatar" />
                                                    </div>
                                                    <div className="col ms-2">
                                                        <span>Morris Mccoy</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="removeBookmark">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        {/* Card */}
                                        <div className="card mb-4 card-hover">
                                            <a href="#"><img src={CourseThumbnail} alt="course" className="card-img-top" /></a>
                                            {/* Card body */}
                                            <div className="card-body">
                                                <h3 className="h4 mb-2 text-truncate-line-2"><a href="#" className="text-inherit">How to easily create a website with React</a></h3>
                                                {/* List inline */}
                                                <ul className="mb-3 list-inline">
                                                    <li className="list-inline-item">
                                                        <span className="align-middle">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>3h 56m</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                        </svg>
                                                        Beginner
                                                    </li>
                                                </ul>
                                                <div className="mt-3 d-flex align-baseline lh-1">
                                                <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                            </path></svg>
                                                        </span>
                                                    <span className="text-warning mx-1">4.5</span>
                                                    <span className="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* Card footer */}
                                            <div className="card-footer">
                                                <div className="row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <img src="../assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="avatar" />
                                                    </div>
                                                    <div className="col ms-2">
                                                        <span>Morris Mccoy</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="removeBookmark">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Path */}
                            <div className="tab-pane fade" id="path" role="tabpanel" aria-labelledby="path-tab">
                                <div className="row d-flex justify-content-center text-center">
                                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                                        <div>
                                            <img src={pathImage} alt="path" className="img-fluid" />
                                            <div className="mt-4">
                                                <h2 className="display-4 fw-bold">Coming Soon</h2>
                                                <p className="mb-5">The designer working on our design so for now we schedule it to come soon. we release it soon for you. Thank you for watching.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education