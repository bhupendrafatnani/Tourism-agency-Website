import React from "react";
import ManReview from "../Assets/img/review/review-1.jpg";
import WomanReview from "../Assets/img/review/review-2.jpg";
import css from "../css/Testimonials.css";

const Testimonials = () => {
  return (
    <>
    <div className="testimonials-clean mt-5 pt-3">
      <div className="container">
        <div className="intro">
          <h2 className="text-center fw-bolder">Testimonials </h2>
          <p className="text-center">
            Our customers love us! Read what they have to say below. Aliquam sed
            justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
          </p>
        </div>
        <hr />
        <div className="row people">
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                finibus est.
              </p>
            </div>
            <div className="author">
              <img className="rounded-circle" src={ManReview} />
              <h5 className="name">Ben Johnson</h5>
              <p className="title">Front-end Developer</p>
              <div className="ms-5 ps-1">
              <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star"></i> </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                est, et interdum justo suscipit id.
              </p>
            </div>
            <div className="author">
              <img className="rounded-circle" src={WomanReview} />
              <h5 className="name">Karen Temple</h5>
              <p className="title">Full Stack Developer</p>
              <div className="ms-5 ps-1">
              <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Aliquam varius finibus est, et interdum justo suscipit.
                Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
                in tellus eu.
              </p>
            </div>
            <div className="author">
              <img className="rounded-circle" src={ManReview} />
              <h5 className="name">James Nelson</h5>
              <p className="title">Back-end Developer</p>
              <div className="ms-5 ps-1">
              <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-half"></i></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Testimonials;
