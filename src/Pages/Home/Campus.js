import React from "react";
import Campus1 from "../../assets/images/campus-01.webp";
import { FaClock, FaPaintbrush, FaDumbbell } from "react-icons/fa6";

function Campus() {
  return (
    <section className="campus-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="campus-box">
              <img src={Campus1} alt="campus" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="campus-box">
              <span>Campus</span>
              <h2>Campus Life</h2>

              <div class="d-flex">
                <div class="flex-shrink-0">
                  <FaClock />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h5 class="mt-0">Student Life</h5>
                  <p>
                    Nostrud exer ciation laboris nis aliqup comodo perspiatix
                    omnis iste natus.
                  </p>
                </div>
              </div>

              <div class="d-flex">
                <div class="flex-shrink-0">
                  <FaPaintbrush />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h5 class="mt-0">Arts & Clubs</h5>
                  <p>
                    Omnis iste natus error sit voluptatem accusan tium doloreque
                    laudantum.
                  </p>
                </div>
              </div>

              <div class="d-flex">
                <div class="flex-shrink-0">
                  <FaDumbbell />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h5 class="mt-0">Sports & Fitness</h5>
                  <p>
                    Tempor incididunt ut labore et dolore magna aliqua enim
                    minim veniam quis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campus;
