import React from "react";
import Courses1 from "../../assets/images/course-1.jpg";
import Courses2 from "../../assets/images/course-2.jpg";
import Courses3 from "../../assets/images/course-3.jpg";
import { FaStar } from "react-icons/fa6";

function Courses() {
  return (
    <section className="courses-section">
      <div className="container">
        <div className="section-title">
          <span>Popular Courses</span>
          <h2>Academic Programs</h2>
        </div>
        <ul class="nav nav-pills" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Undergraduate Program
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Graduate Program
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Online Program
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row">
              <div className="col-md-4">
                <div className="courses-box ">
                  <div className="courses-image">
                    <img src={Courses1} alt="Course" className="img-fluid" />
                    <span>Online + Onsite</span>
                  </div>
                  <div className="courses-content">
                    <span>Management</span>
                    <h3>Public Administration</h3>
                    <p>
                      Boost your digital marketing skills and grow your business
                      online.
                    </p>
                    <div className="star-rating">
                      <ul>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="courses-box ">
                  <div className="courses-image">
                    <img src={Courses2} alt="Course" className="img-fluid" />
                    <span>Online + Onsite</span>
                  </div>
                  <div className="courses-content">
                    <span>Economics</span>
                    <h3>Major in Economics</h3>
                    <p>
                      Boost your digital marketing skills and grow your business
                      online.
                    </p>
                    <div className="star-rating">
                      <ul>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="courses-box ">
                  <div className="courses-image">
                    <img src={Courses3} alt="Course" className="img-fluid" />
                    <span>Online</span>
                  </div>
                  <div className="courses-content">
                    <span>Business</span>
                    <h3>Business Studies</h3>
                    <p>
                      Boost your digital marketing skills and grow your business
                      online.
                    </p>
                    <div className="star-rating">
                      <ul>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row">
              <div className="col-md-4">
                <div className="courses-box ">
                  <div className="courses-image">
                    <img src={Courses1} alt="Course" className="img-fluid" />
                    <span>Online + Onsite</span>
                  </div>
                  <div className="courses-content">
                    <h3>Digital Marketing</h3>
                    <p>
                      Boost your digital marketing skills and grow your business
                      online.
                    </p>
                    <div className="star-rating">
                      <ul>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="courses-box">
                  <div className="courses-image">
                    <img src={Courses2} alt="Course" className="img-fluid" />
                    <span>Online + Onsite</span>
                  </div>
                  <div className="courses-content">
                    <h3>Digital Marketing</h3>
                    <p>
                      Boost your digital marketing skills and grow your business
                      online.
                    </p>
                    <div className="star-rating">
                      <ul>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="row">
              <div className="col-md-4">
                <div className="courses-box ">
                  <div className="courses-image">
                    <img src={Courses3} alt="Course" className="img-fluid" />
                    <span>Onsite</span>
                  </div>
                  <div className="courses-content">
                    <h3>Digital Marketing</h3>
                    <p>
                      Boost your digital marketing skills and grow your business
                      online.
                    </p>
                    <div className="star-rating">
                      <ul>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
