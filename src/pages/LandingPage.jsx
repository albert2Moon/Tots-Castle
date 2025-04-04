import React from "react";
import Navbar from "../partials/Navbar";
const LandingPage = () => {
  

  return (
    <>
      <Navbar />

      {/* Hero Start */}
      <div
        className="container-fluid py-5 hero-header wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7 col-md-12">
              <h1 className="mb-3 text-primary">We Care Your Baby</h1>
              <h1 className="mb-5 display-1 text-white">
                The Best Play Area For Your Kids
              </h1>
              <a
                href=""
                className="btn btn-primary px-4 py-3 px-md-5  me-4 btn-border-radius"
              >
                Get Started
              </a>
              <a
                href=""
                className="btn btn-primary px-4 py-3 px-md-5 btn-border-radius"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* About Start */}
      <div className="container-fluid py-5 about bg-light">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="video border">
                <button
                  type="button"
                  className="btn btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                About Us
              </h4>
              <h1 className="text-dark mb-4 display-5">
                We Learn Smart Way To Build Bright Futute For Your Children
              </h1>
              <p className="text-dark mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
              </p>
              <div className="row mb-4">
                <div className="col-lg-6">
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle me-2"></i>Sport Activites
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    Outdoor Games
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle me-2 text-secondary"></i>
                    Nutritious Foods
                  </h6>
                </div>
                <div className="col-lg-6">
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle me-2"></i>Highly Secured
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    Friendly Environment
                  </h6>
                  <h6>
                    <i className="fas fa-check-circle me-2 text-secondary"></i>
                    Qualified Teacher
                  </h6>
                </div>
              </div>
              <a
                href=""
                className="btn btn-primary px-5 py-3 btn-border-radius"
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Video */}
      <div
        className="modal fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowfullscreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWwidth: "700px" }}
          >
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              What We Do
            </h4>
            <h1 className="mb-5 display-3">
              Thanks To Get Started With Our School
            </h1>
          </div>
          <div className="row g-5">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="text-center border-primary border bg-white service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-inner">
                    <div className="p-4">
                      <i className="fas fa-gamepad fa-6x text-primary"></i>
                    </div>
                    <a href="#" className="h4">
                      Study & Game
                    </a>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Natus, culpa qui officiis animi Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="text-center border-primary border bg-white service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-inner">
                    <div className="p-4">
                      <i className="fas fa-sort-alpha-down fa-6x text-primary"></i>
                    </div>
                    <a href="#" className="h4">
                      A to Z Programs
                    </a>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Natus, culpa qui officiis animi Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="text-center border-primary border bg-white service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-inner">
                    <div className="p-4">
                      <i className="fas fa-users fa-6x text-primary"></i>
                    </div>
                    <a href="#" className="h4">
                      Expert Teacher
                    </a>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Natus, culpa qui officiis animi Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
              data-wow-delay="0.7s"
            >
              <div className="text-center border-primary border bg-white service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-inner">
                    <div className="p-4">
                      <i className="fas fa-user-nurse fa-6x text-primary"></i>
                    </div>
                    <a href="#" className="h4">
                      Mental Health
                    </a>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Natus, culpa qui officiis animi Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Programs Start */}
      <div className="container-fluid program  py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Our Programs
            </h4>
            <h1 className="mb-5 display-3">
              We Offer An Exclusive Program For Kids
            </h1>
          </div>
          <div className="row g-5 justify-content-center">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="program-item rounded">
                <div className="program-img position-relative">
                  <div className="overflow-hidden img-border-radius">
                    <img
                      src="img/program-1.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="px-4 py-2 bg-primary text-white program-rate">
                    $60.99
                  </div>
                </div>
                <div className="program-text bg-white px-4 pb-3">
                  <div className="program-text-inner">
                    <a href="#" className="h4">
                      English For Today
                    </a>
                    <p className="mt-3 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed purus consectetur,
                    </p>
                  </div>
                </div>
                <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                  <img
                    src="img/program-teacher.jpg"
                    className="img-fluid rounded-circle p-2 border border-primary bg-white"
                    alt="Image"
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0 text-primary">Mary Mordern</h6>
                    <small>Arts Designer</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                  <small className="text-white">
                    <i className="fas fa-wheelchair me-1"></i> 30 Sits
                  </small>
                  <small className="text-white">
                    <i className="fas fa-book me-1"></i> 11 Lessons
                  </small>
                  <small className="text-white">
                    <i className="fas fa-clock me-1"></i> 60 Hours
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="program-item rounded">
                <div className="program-img position-relative">
                  <div className="overflow-hidden img-border-radius">
                    <img
                      src="img/program-2.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="px-4 py-2 bg-primary text-white program-rate">
                    $60.99
                  </div>
                </div>
                <div className="program-text bg-white px-4 pb-3">
                  <div className="program-text-inner">
                    <a href="#" className="h4">
                      Graphics Arts
                    </a>
                    <p className="mt-3 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed purus consectetur,
                    </p>
                  </div>
                </div>
                <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                  <img
                    src="img/program-teacher.jpg"
                    className="img-fluid rounded-circle p-2 border border-primary bg-white"
                    alt=""
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0 text-primary">Mary Mordern</h6>
                    <small>Arts Designer</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                  <small className="text-white">
                    <i className="fas fa-wheelchair me-1"></i> 30 Sits
                  </small>
                  <small className="text-white">
                    <i className="fas fa-book me-1"></i> 11 Lessons
                  </small>
                  <small className="text-white">
                    <i className="fas fa-clock me-1"></i> 60 Hours
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="program-item rounded">
                <div className="program-img position-relative">
                  <div className="overflow-hidden img-border-radius">
                    <img
                      src="img/program-3.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="px-4 py-2 bg-primary text-white program-rate">
                    $60.99
                  </div>
                </div>
                <div className="program-text bg-white px-4 pb-3">
                  <div className="program-text-inner">
                    <a href="#" className="h4">
                      General Science
                    </a>
                    <p className="mt-3 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed purus consectetur,
                    </p>
                  </div>
                </div>
                <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                  <img
                    src="img/program-teacher.jpg"
                    className="img-fluid rounded-circle p-2 border border-primary bg-white"
                    alt=""
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0 text-primary">Mary Mordern</h6>
                    <small>Arts Designer</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                  <small className="text-white">
                    <i className="fas fa-wheelchair me-1"></i> 30 Sits
                  </small>
                  <small className="text-white">
                    <i className="fas fa-book me-1"></i> 11 Lessons
                  </small>
                  <small className="text-white">
                    <i className="fas fa-clock me-1"></i> 60 Hours
                  </small>
                </div>
              </div>
            </div>
            <div
              className="d-inline-block text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <a
                href="#"
                className="btn btn-primary px-5 py-3 text-white btn-border-radius"
              >
                Vew All Programs
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Program End */}

      {/* Events Start */}
      <div className="container-fluid events py-5 bg-light">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Our Events
            </h4>
            <h1 className="mb-5 display-3">Our Upcoming Events</h1>
          </div>
          <div className="row g-5 justify-content-center">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="events-item bg-primary rounded">
                <div className="events-inner position-relative">
                  <div className="events-img overflow-hidden rounded-circle position-relative">
                    <img
                      src="img/event-1.jpg"
                      className="img-fluid w-100 rounded-circle"
                      alt="Image"
                    />
                    <div className="event-overlay">
                      <a href="img/event-1.jpg" data-lightbox="event-1">
                        <i className="fas fa-search-plus text-white fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
                    29 Nov
                  </div>
                  <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
                    <small className="text-white">
                      <i className="fas fa-calendar me-1 text-primary"></i>{" "}
                      10:00am - 12:00pm
                    </small>
                    <small className="text-white">
                      <i className="fas fa-map-marker-alt me-1 text-primary"></i>{" "}
                      New York
                    </small>
                  </div>
                </div>
                <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                  <a href="#" className="h4">
                    Music & drawing workshop
                  </a>
                  <p className="mb-0 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur,
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="events-item bg-primary rounded">
                <div className="events-inner position-relative">
                  <div className="events-img overflow-hidden rounded-circle position-relative">
                    <img
                      src="img/event-2.jpg"
                      className="img-fluid w-100 rounded-circle"
                      alt="Image"
                    />
                    <div className="event-overlay">
                      <a href="img/event-3.jpg" data-lightbox="event-1">
                        <i className="fas fa-search-plus text-white fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
                    29 Nov
                  </div>
                  <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
                    <small className="text-white">
                      <i className="fas fa-calendar me-1 text-primary"></i>{" "}
                      10:00am - 12:00pm
                    </small>
                    <small className="text-white">
                      <i className="fas fa-map-marker-alt me-1 text-primary"></i>{" "}
                      New York
                    </small>
                  </div>
                </div>
                <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                  <a href="#" className="h4">
                    Why need study
                  </a>
                  <p className="mb-0 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur,
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="events-item bg-primary rounded">
                <div className="events-inner position-relative">
                  <div className="events-img overflow-hidden rounded-circle position-relative">
                    <img
                      src="img/event-3.jpg"
                      className="img-fluid w-100 rounded-circle"
                      alt="Image"
                    />
                    <div className="event-overlay">
                      <a href="img/event-3.jpg" data-lightbox="event-1">
                        <i className="fas fa-search-plus text-white fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
                    29 Nov
                  </div>
                  <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
                    <small className="text-white">
                      <i className="fas fa-calendar me-1 text-primary"></i>{" "}
                      10:00am - 12:00pm
                    </small>
                    <small className="text-white">
                      <i className="fas fa-map-marker-alt me-1 text-primary"></i>{" "}
                      New York
                    </small>
                  </div>
                </div>
                <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                  <a href="#" className="h4">
                    Child health consciousness
                  </a>
                  <p className="mb-0 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Events End*/}

      {/* Blog Start*/}
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Latest News & Blog
            </h4>
            <h1 className="mb-5 display-3">Read Our Latest News & Blog</h1>
          </div>
          <div className="row g-5 justify-content-center">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="blog-item rounded-bottom">
                <div className="blog-img overflow-hidden position-relative img-border-radius">
                  <img
                    src="img/blog-1.jpg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                  <small className="text-dark">
                    <i className="fas fa-calendar me-1 text-dark"></i> 29 Nov
                    2023
                  </small>
                  <small className="text-dark">
                    <i className="fas fa-comment-alt me-1 text-dark"></i>{" "}
                    Comments (15)
                  </small>
                </div>
                <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
                  <div className="overflow-hidden rounded-circle rounded-top border border-primary">
                    <img
                      src="img/program-teacher.jpg"
                      className="img-fluid rounded-circle p-2 rounded-top"
                      alt="Image"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderSstyle: "dotted",
                        borderColor: "var(--bs-primary) !important",
                      }}
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="text-primary">Mary Mordern</h6>
                    <p className="text-muted">Baby Care</p>
                  </div>
                </div>
                <div className="px-4 pb-4 bg-light rounded-bottom">
                  <div className="blog-text-inner">
                    <a href="#" className="h4">
                      How to pay attention to your child?
                    </a>
                    <p className="mt-3 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed purus
                    </p>
                  </div>
                  <div className="text-center">
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="blog-item rounded-bottom">
                <div className="blog-img overflow-hidden position-relative img-border-radius">
                  <img
                    src="img/blog-2.jpg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                  <small className="text-dark">
                    <i className="fas fa-calendar me-1 text-dark"></i> 29 Nov
                    2023
                  </small>
                  <small className="text-dark">
                    <i className="fas fa-comment-alt me-1 text-dark"></i>{" "}
                    Comments (15)
                  </small>
                </div>
                <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
                  <div className="overflow-hidden rounded-circle rounded-top border border-primary">
                    <img
                      src="img/program-teacher.jpg"
                      className="img-fluid rounded-circle p-2 rounded-top"
                      alt=""
                      style={{
                        width: "70px",
                        height: "70px",
                        borderStyle: "dotted",
                        borderColor: "var(--bs-primary) !important",
                      }}
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="text-primary">Mary Mordern</h6>
                    <p className="text-muted">Baby Care</p>
                  </div>
                </div>
                <div className="px-4 pb-4 bg-light rounded-bottom">
                  <div className="blog-text-inner">
                    <a href="#" className="h4">
                      Play outdoor sports with your child
                    </a>
                    <p className="mt-3 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed purus
                    </p>
                  </div>
                  <div className="text-center">
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="blog-item rounded-bottom">
                <div className="blog-img overflow-hidden position-relative img-border-radius">
                  <img
                    src="img/blog-3.jpg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                  <small className="text-dark">
                    <i className="fas fa-calendar me-1 text-dark"></i> 29 Nov
                    2023
                  </small>
                  <small className="text-dark">
                    <i className="fas fa-comment-alt me-1 text-dark"></i>{" "}
                    Comments (15)
                  </small>
                </div>
                <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
                  <div className="overflow-hidden rounded-circle rounded-top border border-primary">
                    <img
                      src="img/program-teacher.jpg"
                      className="img-fluid rounded-circle p-2 rounded-top"
                      alt=""
                      style={{
                        width: "70px",
                        height: "70px",
                        borderStyle: "dotted",
                        borderColor: "var(--bs-primary) !important",
                      }}
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="text-primary">Mary Mordern</h6>
                    <p className="text-muted">Baby Care</p>
                  </div>
                </div>
                <div className="px-4 pb-4 bg-light rounded-bottom">
                  <div className="blog-text-inner">
                    <a href="#" className="h4">
                      How to make time for your kids?
                    </a>
                    <p className="mt-3 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sed purus
                    </p>
                  </div>
                  <div className="text-center">
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End*/}



      
    </>
  );
};

export default LandingPage;
