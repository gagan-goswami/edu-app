import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaCheckDouble } from "react-icons/fa";
import About1 from "../../assets/images/about-1.webp";
import About2 from "../../assets/images/about-2.webp";

function About() {
  useEffect(() => {
    const tabElements = document.querySelectorAll(
      'button[data-bs-toggle="tab"]'
    );

    tabElements.forEach((tab) => {
      tab.addEventListener("shown.bs.tab", function (event) {
        console.log(`Activated tab: ${event.target.id}`);
      });
    });

    return () => {
      tabElements.forEach((tab) => {
        tab.removeEventListener("shown.bs.tab", function () {});
      });
    };
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-content">
              <span>About Us</span>
              <h2>We Provide Best Education Services For You</h2>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About EduBlink
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Our Mission
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Our Vision
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <p>
                    Magna aliquaenim minim veniam quis nostrud exercitation
                    ullamco laborisLorem ipsum dolor sit amet consectetur
                    adipisicing elit sed do eius tempor incididunt labore.
                  </p>
                  <ul>
                    <li>
                      <FaCheckDouble /> Education award achived
                    </li>
                    <li>
                      <FaCheckDouble /> Available online courses
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p>
                    Magna aliquaenim minim veniam quis nostrud exercitation
                    ullamco laborisLorem ipsum dolor sit amet consectetur
                    adipisicing elit sed do eius tempor incididunt labore.
                  </p>
                  <ul>
                    <li>
                      <FaCheckDouble /> Education award achived
                    </li>
                    <li>
                      <FaCheckDouble /> Available online courses
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <p>
                    Magna aliquaenim minim veniam quis nostrud exercitation
                    ullamco laborisLorem ipsum dolor sit amet consectetur
                    adipisicing elit sed do eius tempor incididunt labore.
                  </p>
                  <ul>
                    <li>
                      <FaCheckDouble /> Education award achived
                    </li>
                    <li>
                      <FaCheckDouble /> Available online courses
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image">
              <img src={About1} alt="About Us" className="img-fluid" />
              <img
                src={About2}
                alt="About Us"
                className="about-image-2 img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
