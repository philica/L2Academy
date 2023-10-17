import React from 'react'

//images
import logo from '../assets/images/brand/logo/L2HomeLogo.png'


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid px-0">
                <div class="d-flex">
                    <a class="navbar-brand" href="../../index.html"><img src={logo} alt="" /></a>
                    <div class="dropdown d-none d-md-block">
                        <button class="btn btn-light-primary text-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fe fe-list me-2 align-middle "></i>Category
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li class="dropdown-submenu dropend">
                                <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                    Web Development
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Bootstrap</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            React
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            GraphQl</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Gatsby</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Grunt</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Svelte</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Meteor</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            HTML5</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Angular</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown-submenu dropend">
                                <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                    Design
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Graphic Design</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Illustrator
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            UX / UI Design</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Figma Design</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Adobe XD</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Sketch</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Icon Design</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="../../pages/course-category.html">
                                            Photoshop</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="../../pages/course-category.html" class="dropdown-item">
                                    Mobile App
                                </a>
                            </li>
                            <li>
                                <a href="../../pages/course-category.html" class="dropdown-item">
                                    IT Software
                                </a>
                            </li>
                            <li>
                                <a href="../../pages/course-category.html" class="dropdown-item">
                                    Marketing
                                </a>
                            </li>
                            <li>
                                <a href="../../pages/course-category.html" class="dropdown-item">
                                    Music
                                </a>
                            </li>
                            <li>
                                <a href="../../pages/course-category.html" class="dropdown-item">
                                    Life Style
                                </a>
                            </li>
                            <li>
                                <a href="../../pages/course-category.html" class="dropdown-item">
                                    Business
                                </a>
                            </li>
                            <li>
                                <a href="../../pages/course-category.html" class="dropdown-item">
                                    Photography
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="order-lg-3">
                    <div class="d-flex align-items-center">
                        <a href="#" class="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle me-2">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>

                        </a>
                        <a href="#" class="btn btn-icon btn-light rounded-circle"><i class="fe fe-shopping-cart text-muted align-middle"></i>
                        </a>
                        <a href="../../pages/sign-in.html" class="btn btn-outline-primary ms-2">Log in</a>
                        <a href="../../pages/sign-up.html" class="btn btn-primary ms-1  d-none d-lg-block">Sign up</a>
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
                            <a class="nav-link dropdown-toggle" href="#" id="navbarLanding" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Landings
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarLanding">
                                <li>
                                    <h4 class="dropdown-header">Landings</h4>
                                </li>
                                <li>
                                    <a href="../../pages/landings/landing-education.html" class="dropdown-item d-flex justify-content-between">
                                        Education <span class="badge bg-primary ms-1">New</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../../pages/landings/home-academy.html" class="dropdown-item d-flex justify-content-between">
                                        Home Academy
                                    </a>
                                </li>
                                <li>
                                    <a href="../../pages/landings/landing-courses.html" class="dropdown-item">
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="../../pages/landings/course-lead.html" class="dropdown-item">
                                        Lead Course
                                    </a>
                                </li>
                                <li>
                                    <a href="../../pages/landings/request-access.html" class="dropdown-item">
                                        Request Access
                                    </a>
                                </li>
                                <li>
                                    <a href="../../pages/landings/landing-sass.html" class="dropdown-item">
                                        SaaS
                                    </a>
                                </li>


                                <li>
                                    <a href="../../pages/landings/landing-job.html" class="dropdown-item d-flex justify-content-between">
                                        Job Listing
                                    </a>
                                </li>



                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarPages" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages
                            </a>
                            <ul class="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarPages">
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Courses
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="../../pages/course-single.html">
                                                Course Single
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/course-single-v2.html">
                                                Course Single v2
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/course-resume.html">
                                                Course Resume
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/course-category.html">
                                                Course Category
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/course-checkout.html">
                                                Course Checkout
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/course-filter-list.html">
                                                Course List/Grid
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/add-course.html">
                                                Add New Course
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Paths
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="../../pages/course-path.html" class="dropdown-item">
                                                Browse Path
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../../pages/course-path-single.html" class="dropdown-item">
                                                Path Single
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Blog
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="../../pages/blog.html">
                                                Listing</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/blog-single.html">
                                                Article
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/blog-category.html">
                                                Category</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/blog-sidebar.html">
                                                Sidebar</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Career
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="../../pages/career.html">
                                                Overview</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/career-list.html">
                                                Listing
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/career-single.html">
                                                Opening</a>
                                        </li>

                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Portfolio
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="../../pages/portfolio.html">
                                                List</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/portfolio-single.html">
                                                Single
                                            </a>
                                        </li>


                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Job
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="../../pages/landings/landing-job.html">
                                                Home</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/jobs/job-listing.html">
                                                List
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/jobs/job-grid.html">
                                                Grid
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/jobs/job-single.html">
                                                Single
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/jobs/company-list.html">
                                                Company List
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/jobs/company-about.html">
                                                Company Single
                                            </a>
                                        </li>


                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Specialty
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="../../pages/coming-soon.html">
                                                Coming Soon
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/404-error.html">
                                                Error 404
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/maintenance-mode.html">
                                                Maintenance Mode
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/terms-condition-page.html">
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <hr class="mx-3" />
                                </li>


                                <li>
                                    <a class="dropdown-item" href="../../pages/about.html">
                                        About
                                    </a>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Help Center
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="../../pages/help-center.html">
                                                Help Center
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/help-center-faq.html">
                                                FAQ's
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/help-center-guide.html">
                                                Guide
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/help-center-guide-single.html">
                                                Guide Single
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/help-center-support.html">
                                                Support
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/pricing.html">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/compare-plan.html">
                                        Compare Plan
                                    </a>
                                </li>

                                <li>
                                    <a class="dropdown-item" href="../../pages/contact.html">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Accounts
                            </a>
                            <ul class="dropdown-menu dropdown-menu-arrow">
                                <li>
                                    <h4 class="dropdown-header">Accounts</h4>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Instructor
                                    </a>
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
                                            <a class="dropdown-item" href="../../pages/dashboard-instructor.html">
                                                Dashboard</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/instructor-profile.html">
                                                Profile</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/instructor-courses.html">
                                                My Courses
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/instructor-order.html">
                                                Orders</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/instructor-reviews.html">
                                                Reviews</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/instructor-students.html">
                                                Students</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/instructor-payouts.html">
                                                Payouts</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/instructor-earning.html">
                                                Earning</a>
                                        </li>
                                        <li class="dropdown-submenu dropend">
                                            <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                                Quiz
                                                <span class="badge bg-primary ms-1"> New </span>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a class="dropdown-item" href="../../pages/instructor-quiz.html">
                                                        Quiz</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="../../pages/instructor-quiz-details.html">
                                                        Single</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="../../pages/instructor-quiz-result.html">
                                                        Result</a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Students
                                    </a>
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
                                            <a class="dropdown-item" href="../../pages/dashboard-student.html">
                                                Dashboard</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/student-subscriptions.html">
                                                Subscriptions
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/payment-method.html">
                                                Payments</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/billing-info.html">
                                                Billing Info</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/invoice.html">
                                                Invoice</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/invoice-details.html">
                                                Invoice Details</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/dashboard-student.html">
                                                Bookmarked</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="../../pages/dashboard-student.html">
                                                My Path</a>
                                        </li>
                                        <li class="dropdown-submenu dropend">
                                            <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                                Quiz
                                                <span class="badge bg-primary ms-1"> New </span>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a class="dropdown-item" href="../../pages/student-quiz.html">
                                                        Quiz</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="../../pages/student-quiz-attempt.html">
                                                        Attempt</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="../../pages/student-quiz-start.html">
                                                        Start</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="../../pages/student-quiz-result.html">
                                                        Result</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu dropend">
                                    <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                                        Admin
                                    </a>
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
                                            <a href="../../pages/dashboard/admin-dashboard.html" class="btn btn-sm btn-primary">Go to Dashboard</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    logi<hr class="mx-3" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/sign-in.html">
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/sign-up.html">
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/forget-password.html">
                                        Forgot Password
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/profile-edit.html">
                                        Edit Profile
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/security.html">
                                        Security
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/social-profile.html">
                                        Social Profiles
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/notifications.html">
                                        Notifications
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/profile-privacy.html">
                                        Privacy Settings
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/delete-profile.html">
                                        Delete Profile
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="../../pages/linked-accounts.html">
                                        Linked Accounts
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown dropdown-fullwidth">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mega Menu
                            </a>
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
                                                <a href="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/degree-1.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">University of Michigan</small>
                                                            <h6 class="mb-0">Master of Applied Data Science</h6>
                                                        </div>

                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/degree-2.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">A&amp;B College 1980</small>
                                                            <h6 class="mb-0">MBA in Business Analytics</h6>
                                                        </div>

                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/degree-3.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">Imperial College London</small>
                                                            <h6 class="mb-0">Master of Science in Machine</h6>
                                                        </div>

                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/degree-4.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">University of Colorado</small>
                                                            <h6 class="mb-0">Master of Computer Science</h6>
                                                        </div>

                                                    </div>
                                                </a>
                                                <div class="mt-4">
                                                    <a href="#" class="btn btn-outline-primary btn-sm">View all degree</a>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-4 col-12 mt-4 mt-lg-0">
                                            <div class="border-bottom pb-2 mb-3">
                                                <h5 class="mb-0">Certificate Programs</h5>
                                            </div>
                                            <div class="">
                                                <a href="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/google.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">No Prerequisites</small>
                                                            <h6 class="mb-0">Google Data Analytics</h6>
                                                        </div>

                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/IBM.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">No Prerequisites</small>
                                                            <h6 class="mb-0">IBM Data Science</h6>
                                                        </div>

                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/microsoft.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">Expert Feedback</small>
                                                            <h6 class="mb-0">Machine Leaning for Analytics</h6>
                                                        </div>

                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/tensorflow.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">Certification Prerequisites</small>
                                                            <h6 class="mb-0">TensorFlow Developer Certificate</h6>
                                                        </div>

                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="d-flex mb-3">
                                                        <img src="../../assets/images/png/meta.png" alt="" />
                                                        <div class="ms-2">
                                                            <small class="text-body">University of Colorado</small>
                                                            <h6 class="mb-0">Meta Marketing Analytics</h6>
                                                        </div>

                                                    </div>
                                                </a>
                                                <div class="mt-4">
                                                    <a href="#" class="btn btn-outline-primary btn-sm">View all Certificates</a>
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
                                                        <a href="#" class="nav-link">Python</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">SQL</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Microsoft Excel</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Machine Learning</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Data Science</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Data Analytics</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Power BI</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Artificial Intelligence</a>
                                                    </li>

                                                </ul>

                                                <div class="mt-4">
                                                    <a href="#" class="btn btn-outline-primary btn-sm">View all Skills</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fe fe-more-horizontal"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-md" aria-labelledby="navbarDropdown">
                                <div class="list-group">
                                    <a class="list-group-item list-group-item-action border-0" href="../../docs/index.html">
                                        <div class="d-flex align-items-center">
                                            <i class="fe fe-file-text fs-3 text-primary"></i>
                                            <div class="ms-3">
                                                <h5 class="mb-0">Documentations</h5>
                                                <p class="mb-0 fs-6">
                                                    Browse the all documentation
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="list-group-item list-group-item-action border-0" href="../../docs/bootstrap-5-snippets.html">
                                        <div class="d-flex align-items-center">
                                            <i class="bi bi-files fs-3 text-primary"></i>
                                            <div class="ms-3">
                                                <h5 class="mb-0">
                                                    Snippet
                                                </h5>
                                                <p class="mb-0 fs-6">Bunch of Snippet</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="list-group-item list-group-item-action border-0" href="../../docs/changelog.html">
                                        <div class="d-flex align-items-center">
                                            <i class="fe fe-layers fs-3 text-primary"></i>
                                            <div class="ms-3">
                                                <h5 class="mb-0">
                                                    Changelog <span class="text-primary ms-1" id="changelog">v3.1.0</span>
                                                </h5>
                                                <p class="mb-0 fs-6">See what's new</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="list-group-item list-group-item-action border-0" href="https://geeksui.codescandy.com/geeks-rtl/" target="_blank">
                                        <div class="d-flex align-items-center">
                                            <i class="fe fe-toggle-right fs-3 text-primary"></i>
                                            <div class="ms-3">
                                                <h5 class="mb-0">RTL demo</h5>
                                                <p class="mb-0 fs-6">
                                                    RTL Pages
                                                </p>
                                            </div>
                                        </div>
                                    </a>
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