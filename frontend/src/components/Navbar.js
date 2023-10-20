import React from 'react'
import {Link} from 'react-router-dom'

//images
import logo from '../assets/images/brand/logo/L2HomeLogo.png'


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid px-0">
                <div class="d-flex">
                    <Link class="navbar-brand" to="../../index.html"><img src={logo} alt="" /></ Link>
                    <div class="dropdown d-none d-md-block">
                        <button class="btn btn-light-primary text-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fe fe-list me-2 align-middle "></i>Category
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li class="dropdown-submenu dropend">
                                <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                    Web Development
                                </ Link>
                                <ul class="dropdown-menu">
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Bootstrap</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            React
                                        </ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            GraphQl</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Gatsby</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Grunt</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Svelte</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Meteor</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            HTML5</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Angular</ Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown-submenu dropend">
                                <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                    Design
                                </ Link>
                                <ul class="dropdown-menu">
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Graphic Design</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Illustrator
                                        </ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            UX / UI Design</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Figma Design</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Adobe XD</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Sketch</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Icon Design</ Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="../../pages/course-category.html">
                                            Photoshop</ Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="../../pages/course-category.html" class="dropdown-item">
                                    Mobile App
                                </ Link>
                            </li>
                            <li>
                                <Link to="../../pages/course-category.html" class="dropdown-item">
                                    IT Software
                                </ Link>
                            </li>
                            <li>
                                <Link to="../../pages/course-category.html" class="dropdown-item">
                                    Marketing
                                </ Link>
                            </li>
                            <li>
                                <Link to="../../pages/course-category.html" class="dropdown-item">
                                    Music
                                </ Link>
                            </li>
                            <li>
                                <Link to="../../pages/course-category.html" class="dropdown-item">
                                    Life Style
                                </ Link>
                            </li>
                            <li>
                                <Link to="../../pages/course-category.html" class="dropdown-item">
                                    Business
                                </ Link>
                            </li>
                            <li>
                                <Link to="../../pages/course-category.html" class="dropdown-item">
                                    Photography
                                </ Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="order-lg-3">
                    <div class="d-flex align-items-center">
                        <Link to="#" class="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle me-2">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>

                        </ Link>
                        <Link to="#" class="btn btn-icon btn-light rounded-circle"><i class="fe fe-shopping-cart text-muted align-middle"></i>
                        </ Link>
                        <Link to="/login" class="btn btn-outline-primary ms-2">Log in</ Link>
                        <Link to="/signup" class="btn btn-primary ms-1  d-none d-lg-block">Sign up</ Link>
                        {/* { Button } */}
                        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar top-bar mt-0"></span>
                            <span class="icon-bar middle-bar"></span>
                            <span class="icon-bar bottom-bar"></span>
                        </button>
                    </div>

                </div>

                {/* {Collapse } */}
                <div class="collapse navbar-collapse" id="navbar-default">

                    <ul class="navbar-nav mx-auto">
                        <form class="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center" style={{marginRight: "20px"}}>
                            <span class="position-absolute ps-3 search-icon">
                                <i class="fe fe-search"></i>
                            </span>
                            <input type="search" class="form-control ps-6" placeholder="Search Courses" />
                        </form>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" id="navbarLanding" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Landings
                            </ Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarLanding">
                                <li>
                                    <h4 class="dropdown-header">Landings</h4>
                                </li>
                                <li>
                                    <Link to="../../pages/landings/landing-education.html" class="dropdown-item d-flex justify-content-between">
                                        Education <span class="badge bg-primary ms-1">New</span>
                                    </ Link>
                                </li>
                                <li>
                                    <Link to="../../pages/landings/home-academy.html" class="dropdown-item d-flex justify-content-between">
                                        Home Academy
                                    </ Link>
                                </li>
                                <li>
                                    <Link to="../../pages/landings/landing-courses.html" class="dropdown-item">
                                        Courses
                                    </ Link>
                                </li>
                                <li>
                                    <Link to="../../pages/landings/course-lead.html" class="dropdown-item">
                                        Lead Course
                                    </ Link>
                                </li>
                                <li>
                                    <Link to="../../pages/landings/request-access.html" class="dropdown-item">
                                        Request Access
                                    </ Link>
                                </li>
                                <li>
                                    <Link to="../../pages/landings/landing-sass.html" class="dropdown-item">
                                        SaaS
                                    </ Link>
                                </li>


                                <li>
                                    <Link to="../../pages/landings/landing-job.html" class="dropdown-item d-flex justify-content-between">
                                        Job Listing
                                    </ Link>
                                </li>



                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" id="navbarPages" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages
                            </ Link>
                            <ul class="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarPages">
                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Courses
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/course-single.html">
                                                Course Single
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/course-single-v2.html">
                                                Course Single v2
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/course-resume.html">
                                                Course Resume
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/course-category.html">
                                                Course Category
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/course-checkout.html">
                                                Course Checkout
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/course-filter-list.html">
                                                Course List/Grid
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/add-course.html">
                                                Add New Course
                                            </ Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Paths
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link to="../../pages/course-path.html" class="dropdown-item">
                                                Browse Path
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link to="../../pages/course-path-single.html" class="dropdown-item">
                                                Path Single
                                            </ Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Blog
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/blog.html">
                                                Listing</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/blog-single.html">
                                                Article
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/blog-category.html">
                                                Category</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/blog-sidebar.html">
                                                Sidebar</ Link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Career
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/career.html">
                                                Overview</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/career-list.html">
                                                Listing
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/career-single.html">
                                                Opening</ Link>
                                        </li>

                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Portfolio
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/portfolio.html">
                                                List</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/portfolio-single.html">
                                                Single
                                            </ Link>
                                        </li>


                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Job
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/landings/landing-job.html">
                                                Home</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/jobs/job-listing.html">
                                                List
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/jobs/job-grid.html">
                                                Grid
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/jobs/job-single.html">
                                                Single
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/jobs/company-list.html">
                                                Company List
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/jobs/company-about.html">
                                                Company Single
                                            </ Link>
                                        </li>


                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Specialty
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/coming-soon.html">
                                                Coming Soon
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/404-error.html">
                                                Error 404
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/maintenance-mode.html">
                                                Maintenance Mode
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/terms-condition-page.html">
                                                Terms &amp; Conditions
                                            </ Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <hr class="mx-3" />
                                </li>


                                <li>
                                    <Link class="dropdown-item" to="../../pages/about.html">
                                        About
                                    </ Link>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Help Center
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/help-center.html">
                                                Help Center
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/help-center-faq.html">
                                                FAQ's
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/help-center-guide.html">
                                                Guide
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/help-center-guide-single.html">
                                                Guide Single
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/help-center-support.html">
                                                Support
                                            </ Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/pricing.html">
                                        Pricing
                                    </ Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/compare-plan.html">
                                        Compare Plan
                                    </ Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to="../../pages/contact.html">
                                        Contact
                                    </ Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Accounts
                            </ Link>
                            <ul class="dropdown-menu dropdown-menu-arrow">
                                <li>
                                    <h4 class="dropdown-header">Accounts</h4>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Instructor
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li class="text-wrap">
                                            <h5 class="dropdown-header text-dark">Instructor</h5>
                                            <p class="dropdown-text mb-0">
                                                Instructor dashboard for manage courses and earning.
                                            </p>
                                        </li>
                                        <li>
                                            logi<hr class="mx-3" />
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/dashboard-instructor.html">
                                                Dashboard</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/instructor-profile.html">
                                                Profile</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/instructor-courses.html">
                                                My Courses
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/instructor-order.html">
                                                Orders</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/instructor-reviews.html">
                                                Reviews</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/instructor-students.html">
                                                Students</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/instructor-payouts.html">
                                                Payouts</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/instructor-earning.html">
                                                Earning</ Link>
                                        </li>
                                        <li class="dropdown-submenu dropend">
                                            <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                                Quiz
                                                <span class="badge bg-primary ms-1"> New </span>
                                            </ Link>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <Link class="dropdown-item" to="../../pages/instructor-quiz.html">
                                                        Quiz</ Link>
                                                </li>
                                                <li>
                                                    <Link class="dropdown-item" to="../../pages/instructor-quiz-details.html">
                                                        Single</ Link>
                                                </li>
                                                <li>
                                                    <Link class="dropdown-item" to="../../pages/instructor-quiz-result.html">
                                                        Result</ Link>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Students
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li class="text-wrap">
                                            <h5 class="dropdown-header text-dark">Students</h5>
                                            <p class="dropdown-text mb-0">
                                                Students dashboard to manage your courses and subscriptions.
                                            </p>
                                        </li>
                                        <li>
                                            logi<hr class="mx-3" />
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/dashboard-student.html">
                                                Dashboard</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/student-subscriptions.html">
                                                Subscriptions
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/payment-method.html">
                                                Payments</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/billing-info.html">
                                                Billing Info</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/invoice.html">
                                                Invoice</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/invoice-details.html">
                                                Invoice Details</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/dashboard-student.html">
                                                Bookmarked</ Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="../../pages/dashboard-student.html">
                                                My Path</ Link>
                                        </li>
                                        <li class="dropdown-submenu dropend">
                                            <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                                Quiz
                                                <span class="badge bg-primary ms-1"> New </span>
                                            </ Link>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <Link class="dropdown-item" to="../../pages/student-quiz.html">
                                                        Quiz</ Link>
                                                </li>
                                                <li>
                                                    <Link class="dropdown-item" to="../../pages/student-quiz-attempt.html">
                                                        Attempt</ Link>
                                                </li>
                                                <li>
                                                    <Link class="dropdown-item" to="../../pages/student-quiz-start.html">
                                                        Start</ Link>
                                                </li>
                                                <li>
                                                    <Link class="dropdown-item" to="../../pages/student-quiz-result.html">
                                                        Result</ Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <Link class="dropdown-item dropdown-list-group-item dropdown-toggle" to="#">
                                        Admin
                                    </ Link>
                                    <ul class="dropdown-menu">
                                        <li class="text-wrap">
                                            <h5 class="dropdown-header text-dark">Master Admin</h5>
                                            <p class="dropdown-text mb-0">
                                                Master admin dashboard to manage courses, user, site setting
                                                , and work with amazing apps.
                                            </p>
                                        </li>
                                        <li>
                                            logi<hr class="mx-3" />
                                        </li>
                                        <li class="px-3 d-grid">
                                            <Link to="../../pages/dashboard/admin-dashboard.html" class="btn btn-sm btn-primary">Go to Dashboard</ Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    logi<hr class="mx-3" />
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/sign-in.html">
                                        Sign In
                                    </ Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/sign-up.html">
                                        Sign Up
                                    </ Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/forget-password.html">
                                        Forgot Password
                                    </ Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/profile-edit.html">
                                        Edit Profile
                                    </ Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/security.html">
                                        Security
                                    </ Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/social-profile.html">
                                        Social Profiles
                                    </ Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/notifications.html">
                                        Notifications
                                    </ Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/profile-privacy.html">
                                        Privacy Settings
                                    </ Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/delete-profile.html">
                                        Delete Profile
                                    </ Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="../../pages/linked-accounts.html">
                                        Linked Accounts
                                    </ Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown dropdown-fullwidth">
                            <Link class="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mega Menu
                            </ Link>
                            <div class="dropdown-menu dropdown-menu-md">
                                <div class="px-4 pt-2 pb-2">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="lh-1 mb-5">
                                                <h3 class="mb-1">Earn a Degree</h3>
                                                <p>Breakthrough pricing on 100% online degrees designed to fit into your life.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-12">
                                            <div class="border-bottom pb-2 mb-3">
                                                <h5 class="mb-0">Degrees</h5>
                                            </div>
                                            <div class="">
                                                <Link to="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/degree-1.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">University of Michigan</small>
                                                            <h6 class="mb-0">Master of Applied Data Science</h6>
                                                        </div>

                                                    </div>
                                                </ Link>
                                                <Link to="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/degree-2.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">A&amp;B College 1980</small>
                                                            <h6 class="mb-0">MBA in Business Analytics</h6>
                                                        </div>

                                                    </div>
                                                </ Link>
                                                <Link to="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/degree-3.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">Imperial College London</small>
                                                            <h6 class="mb-0">Master of Science in Machine</h6>
                                                        </div>

                                                    </div>
                                                </ Link>
                                                <Link to="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/degree-4.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">University of Colorado</small>
                                                            <h6 class="mb-0">Master of Computer Science</h6>
                                                        </div>

                                                    </div>
                                                </ Link>
                                                <div class="mt-4">
                                                    <Link to="#" class="btn btn-outline-primary btn-sm">View all degree</ Link>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-4 col-12 mt-4 mt-lg-0">
                                            <div class="border-bottom pb-2 mb-3">
                                                <h5 class="mb-0">Certificate Programs</h5>
                                            </div>
                                            <div class="">
                                                <Link to="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/google.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">No Prerequisites</small>
                                                            <h6 class="mb-0">Google Data Analytics</h6>
                                                        </div>

                                                    </div>
                                                </ Link>
                                                <Link to="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/IBM.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">No Prerequisites</small>
                                                            <h6 class="mb-0">IBM Data Science</h6>
                                                        </div>

                                                    </div>
                                                </ Link>
                                                <Link to="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/microsoft.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">Expert Feedback</small>
                                                            <h6 class="mb-0">Machine Leaning for Analytics</h6>
                                                        </div>

                                                    </div>
                                                </ Link>
                                                <Link to="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/tensorflow.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">Certification Prerequisites</small>
                                                            <h6 class="mb-0">TensorFlow Developer Certificate</h6>
                                                        </div>

                                                    </div>
                                                </ Link>
                                                <Link to="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/meta.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">University of Colorado</small>
                                                            <h6 class="mb-0">Meta Marketing Analytics</h6>
                                                        </div>

                                                    </div>
                                                </ Link>
                                                <div class="mt-4">
                                                    <Link to="#" class="btn btn-outline-primary btn-sm">View all Certificates</ Link>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-4 col-12 mt-4 mt-lg-0">
                                            <div class="border-bottom pb-2 mb-3">
                                                <h5 class="mb-0">Popular Skills</h5>
                                            </div>
                                            <div class="">
                                                <ul class="nav flex-column">
                                                    <li class="nav-item">
                                                        <Link to="#" class="nav-link">Python</ Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link to="#" class="nav-link">SQL</ Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link to="#" class="nav-link">Microsoft Excel</ Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link to="#" class="nav-link">Machine Learning</ Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link to="#" class="nav-link">Data Science</ Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link to="#" class="nav-link">Data Analytics</ Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link to="#" class="nav-link">Power BI</ Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link to="#" class="nav-link">Artificial Intelligence</ Link>
                                                    </li>

                                                </ul>

                                                <div class="mt-4">
                                                    <Link to="#" class="btn btn-outline-primary btn-sm">View all Skills</ Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fe fe-more-horizontal"></i>
                            </ Link>
                            <div class="dropdown-menu dropdown-menu-md" aria-labelledby="navbarDropdown">
                                <div class="list-group">
                                    <Link class="list-group-item list-group-item-action border-0" to="../../docs/index.html">
                                        <div class="d-flex align-items-center">
                                            <i class="fe fe-file-text fs-3 text-primary"></i>
                                            <div class="ms-3">
                                                <h5 class="mb-0">Documentations</h5>
                                                <p class="mb-0 fs-6">
                                                    Browse the all documentation
                                                </p>
                                            </div>
                                        </div>
                                    </ Link>
                                    <Link class="list-group-item list-group-item-action border-0" to="../../docs/bootstrap-5-snippets.html">
                                        <div class="d-flex align-items-center">
                                            <i class="bi bi-files fs-3 text-primary"></i>
                                            <div class="ms-3">
                                                <h5 class="mb-0">
                                                    Snippet
                                                </h5>
                                                <p class="mb-0 fs-6">Bunch of Snippet</p>
                                            </div>
                                        </div>
                                    </ Link>
                                    <Link class="list-group-item list-group-item-action border-0" to="../../docs/changelog.html">
                                        <div class="d-flex align-items-center">
                                            <i class="fe fe-layers fs-3 text-primary"></i>
                                            <div class="ms-3">
                                                <h5 class="mb-0">
                                                    Changelog <span class="text-primary ms-1" id="changelog">v3.1.0</span>
                                                </h5>
                                                <p class="mb-0 fs-6">See what's new</p>
                                            </div>
                                        </div>
                                    </ Link>
                                    <Link class="list-group-item list-group-item-action border-0" to="https://geeksui.codescandy.com/geeks-rtl/" target="_blank">
                                        <div class="d-flex align-items-center">
                                            <i class="fe fe-toggle-right fs-3 text-primary"></i>
                                            <div class="ms-3">
                                                <h5 class="mb-0">RTL demo</h5>
                                                <p class="mb-0 fs-6">
                                                    RTL Pages
                                                </p>
                                            </div>
                                        </div>
                                    </ Link>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default Navbar