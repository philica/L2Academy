import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

//images
import logo from '../assets/images/brand/logo/L2HomeLogo.png'
import userImage from '../assets/images/avatar/avatar-1.jpg'

const Navbar = () => {
    const user = useSelector(state => state.login.user);
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
                        {/* user not signed in*/}
                        {!user &&
                            <>
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
                            </>
                        }
                        { /* user signed in */}
                        {user &&
                            <>
                                <ul className="navbar-nav navbar-right-wrap mx-2 flex-row">
                                    <li className="dropdown d-inline-block stopevent position-static">
                                        <a
                                            className="btn btn-light btn-icon rounded-circle text-muted indicator indicator-primary"
                                            href="#"
                                            role="button"
                                            id="dropdownNotificationSecond"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fe fe-bell"> </i>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end dropdown-menu-lg position-absolute mx-3 my-5"
                                            aria-labelledby="dropdownNotificationSecond"
                                        >
                                            <div>
                                                <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                                                    <span className="h5 mb-0">Notifications</span>
                                                    <a href="# " className="text-muted">
                                                        <span className="align-middle">
                                                            <i className="fe fe-settings me-1"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                                <ul
                                                    className="list-group list-group-flush simplebar-scrollable-y"
                                                    style={{ height: '300px' }}
                                                    data-simplebar="init"
                                                >
                                                    <div className="simplebar-wrapper" style={{ margin: '0px' }}>
                                                        <div className="simplebar-height-auto-observer-wrapper">
                                                            <div className="simplebar-height-auto-observer"></div>
                                                        </div>
                                                        <div className="simplebar-mask">
                                                            <div
                                                                className="simplebar-offset"
                                                                style={{ right: '0px', bottom: '0px' }}
                                                            >
                                                                <div
                                                                    className="simplebar-content-wrapper"
                                                                    tabIndex="0"
                                                                    role="region"
                                                                    aria-label="scrollable content"
                                                                    style={{ height: '100%', overflow: 'hidden scroll' }}
                                                                >
                                                                    <div className="simplebar-content" style={{ padding: '0px' }}>
                                                                        <li className="list-group-item bg-light">
                                                                            <div className="row">
                                                                                <div className="col">
                                                                                    <a className="text-body" href="#">
                                                                                        <div className="d-flex">
                                                                                            <img
                                                                                                src={userImage}
                                                                                                alt=""
                                                                                                className="avatar-md rounded-circle"
                                                                                            />
                                                                                            <div className="ms-3">
                                                                                                <h5 className="fw-bold mb-1">Kristin Watson:</h5>
                                                                                                <p className="mb-3 text-body">
                                                                                                    Krisitn Watsan like your comment on course
                                                                                                    Javascript Introduction!
                                                                                                </p>
                                                                                                <span className="fs-6 text-muted">
                                                                                                    <span>
                                                                                                        <span className="fe fe-thumbs-up text-success me-1"></span>2
                                                                                                        hours ago,
                                                                                                    </span>
                                                                                                    <span className="ms-1">2:19 PM</span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="col-auto text-center me-2">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="badge-dot bg-info"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-placement="top"
                                                                                        aria-label="Mark as read"
                                                                                        data-bs-original-title="Mark as read"
                                                                                    ></a>
                                                                                    <div>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="bg-transparent"
                                                                                            data-bs-toggle="tooltip"
                                                                                            data-bs-placement="top"
                                                                                            aria-label="Remove"
                                                                                            data-bs-original-title="Remove"
                                                                                        >
                                                                                            <i className="fe fe-x text-muted"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            <div className="row">
                                                                                <div className="col">
                                                                                    <a className="text-body" href="#">
                                                                                        <div className="d-flex">
                                                                                            <img
                                                                                                src="../assets/images/avatar/avatar-2.jpg"
                                                                                                alt=""
                                                                                                className="avatar-md rounded-circle"
                                                                                            />
                                                                                            <div className="ms-3">
                                                                                                <h5 className="fw-bold mb-1">Brooklyn Simmons</h5>
                                                                                                <p className="mb-3 text-body">
                                                                                                    Just launched a new Courses React for Beginner.
                                                                                                </p>
                                                                                                <span className="fs-6 text-muted">
                                                                                                    <span>
                                                                                                        <span className="fe fe-thumbs-up text-success me-1"></span>Oct
                                                                                                        9,
                                                                                                    </span>
                                                                                                    <span className="ms-1">1:20 PM</span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="col-auto text-center me-2">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="badgedot bg-info"
                                                                                        data-bs-toggle="tooltip"
                                                                                        data-bs-placement="top"
                                                                                        aria-label="Mark as read"
                                                                                        data-bs-original-title="Mark as read"
                                                                                    ></a>
                                                                                    <div>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="bg-transparent"
                                                                                            data-bs-toggle="tooltip"
                                                                                            data-bs-placement="top"
                                                                                            aria-label="Remove"
                                                                                            data-bs-original-title="Remove"
                                                                                        >
                                                                                            <i className="fe fe-x text-muted"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="simplebar-placeholder" style={{ width: '234px', height: '807px' }}></div>
                                                    </div>
                                                    <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                                                        <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div>
                                                    </div>
                                                    <div className="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}>
                                                        <div className="simplebar-scrollbar" style={{ height: '139px', display: 'block', transform: 'translate3d(0px, 0px, 0px)' }}></div>
                                                    </div>
                                                </ul>
                                                <div className="border-top px-3 pt-3 pb-0">
                                                    <a href="#" className="text-center d-block">
                                                        <span>View all Notification</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown ms-2 d-inline-block position-static">
                                        <a
                                            className="rounded-circle"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            data-bs-display="static"
                                            aria-expanded="false"
                                        >
                                            <div className="avatar avatar-md avatar-indicators avatar-online">
                                                <img
                                                    alt="avatar"
                                                    src={userImage}
                                                    className="rounded-circle"
                                                />
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end position-absolute mx-3 my-5">
                                            <div className="dropdown-item">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-md avatar-indicators avatar-online">
                                                        <img
                                                            alt="avatar"
                                                            src={userImage}
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                    <div className="ms-3 lh-1">
                                                        <h5 className="mb-1">Annette Black</h5>
                                                        <p className="mb-0 text-muted">{user.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-divider"></div>
                                            <ul className="list-unstyled">
                                                <li className="dropdown-submenu dropstart-lg">
                                                    <a
                                                        className="dropdown-item dropdown-list-group-item dropdown-toggle"
                                                        href="#"
                                                    >
                                                        <i className="fe fe-circle me-2"></i>Status
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                <span className="badge-dot bg-success me-2"></span>Online
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                <span className="badge-dot bg-secondary me-2"></span>Offline
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                <span className="badge-dot bg-warning me-2"></span>Away
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                <span className="badge-dot bg-danger me-2"></span>Busy
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="../pages/profile-edit.html">
                                                        <i className="fe fe-user me-2"></i>Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="../pages/student-subscriptions.html">
                                                        <i className="fe fe-star me-2"></i>Subscription
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="fe fe-settings me-2"></i>Settings
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="dropdown-divider"></div>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a className="dropdown-item" href="../index.html">
                                                        <i className="fe fe-power me-2"></i>Sign Out
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </>}
                    </div>

                </div>

                {/* {Collapse } */}
                <div class="collapse navbar-collapse" id="navbar-default">

                    <ul class="navbar-nav mx-auto">
                        <form class="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center" style={{ marginRight: "20px" }}>
                            <span class="position-absolute ps-3 search-icon">
                                <i class="fe fe-search"></i>
                            </span>
                            <input type="search" class="form-control ps-6" placeholder="Search Courses" />
                        </form>
                        
                        
                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default Navbar