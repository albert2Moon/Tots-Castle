import React from 'react'
import Navbar from "../partials/Navbar";
import Slider from "react-slick";


const AboutPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
      <Navbar />

      {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4">About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Header End --> */}

        {/* <!-- About Start --> */}
        <div className="container-fluid py-5 about bg-light">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                        <div className="video border">
                            <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
                        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">About Us</h4>
                        <h1 className="text-dark mb-4 display-5">We Learn Smart Way To Build Bright Futute For Your Children</h1>
                        <p className="text-dark mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2"></i>Sport Activites</h6>
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-primary"></i>Outdoor Games</h6>
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-secondary"></i>Nutritious Foods</h6>
                            </div>
                            <div className="col-lg-6">
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2"></i>Highly Secured</h6>
                                <h6 className="mb-3"><i className="fas fa-check-circle me-2 text-primary"></i>Friendly Environment</h6>
                                <h6><i className="fas fa-check-circle me-2 text-secondary"></i>Qualified Teacher</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal Video --> */}
        <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                        <div className="ratio ratio-16x9">
                            <iframe className="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* Team Start*/}
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Our Team
            </h4>
            <h1 className="mb-5 display-3">Meet With Our Expert Teacher</h1>
          </div>
          <div className="row g-5 justify-content-center">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="team-item border border-primary img-border-radius overflow-hidden">
                <img src="img/team-1.jpg" className="img-fluid w-100" alt="" />
                <div className="team-icon d-flex align-items-center justify-content-center">
                  <a
                    className="share btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="team-content text-center py-3">
                  <h4 className="text-primary">Linda Carlson</h4>
                  <p className="text-muted mb-2">English Teacher</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="team-item border border-primary img-border-radius overflow-hidden">
                <img src="img/team-2.jpg" className="img-fluid w-100" alt="" />
                <div className="team-icon d-flex align-items-center justify-content-center">
                  <a
                    className="share btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="team-content text-center py-3">
                  <h4 className="text-primary">Linda Carlson</h4>
                  <p className="text-muted mb-2">English Teacher</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="team-item border border-primary img-border-radius overflow-hidden">
                <img src="img/team-3.jpg" className="img-fluid w-100" alt="" />
                <div className="team-icon d-flex align-items-center justify-content-center">
                  <a
                    className="share btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="team-content text-center py-3">
                  <h4 className="text-primary">Linda Carlson</h4>
                  <p className="text-muted mb-2">English Teacher</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
              data-wow-delay="0.7s"
            >
              <div className="team-item border border-primary img-border-radius overflow-hidden">
                <img src="img/team-4.jpg" className="img-fluid w-100" alt="" />
                <div className="team-icon d-flex align-items-center justify-content-center">
                  <a
                    className="share btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="share-link btn btn-primary btn-md-square text-white rounded-circle"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="team-content text-center py-3">
                  <h4 className="text-primary">Linda Carlson</h4>
                  <p className="text-muted mb-2">English Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End*/}


      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Our Testimonials
            </h4>
            <h1 className="mb-5 display-3">Parents Say About Us</h1>
          </div>
          <Slider {...settings}>
            <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
              <div className="p-4 position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-primary position-absolute"
                  style={{ top: "15px", right: "15px" }}
                ></i>
                <div className="d-flex align-items-center">
                  <div className="border border-primary bg-white rounded-circle">
                    <img
                      src="img/testimonial-2.jpg"
                      className="rounded-circle p-2"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderStyle: "dotted",
                        borderColor: "var(--bs-primary)",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="border-top border-primary mt-4 pt-3">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
              <div className="p-4 position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-primary position-absolute"
                  style={{ top: "15px", right: "15px" }}
                ></i>
                <div className="d-flex align-items-center">
                  <div className="border border-primary bg-white rounded-circle">
                    <img
                      src="img/testimonial-2.jpg"
                      className="rounded-circle p-2"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderStyle: "dotted",
                        borderColor: "var(--bs-primary)",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="border-top border-primary mt-4 pt-3">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
              <div className="p-4 position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-primary position-absolute"
                  style={{ top: "15px", right: "15px" }}
                ></i>
                <div className="d-flex align-items-center">
                  <div className="border border-primary bg-white rounded-circle">
                    <img
                      src="img/testimonial-2.jpg"
                      className="rounded-circle p-2"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderStyle: "dotted",
                        borderColor: "var(--bs-primary)",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="border-top border-primary mt-4 pt-3">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* Testimonial End */}

    </>
  )
}

export default AboutPage