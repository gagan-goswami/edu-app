import React from "react";
import { FaUserGraduate, FaBook, FaMedal } from "react-icons/fa";

function Function() {
  return (
    <section className="function-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="d-flex function-box">
              <div class="flex-shrink-0">
                <FaUserGraduate />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3>Scholarship Facility</h3>
                <p>Lorem ipsum dolor sit amet cont adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="d-flex function-box">
              <div class="flex-shrink-0">
                <FaBook />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3>Skilled Lecturers</h3>
                <p>Lorem ipsum dolor sit amet cont adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="d-flex function-box">
              <div class="flex-shrink-0">
                <FaMedal />
              </div>
              <div class="flex-grow-1 ms-3">
                <h3>Book Library & Store</h3>
                <p>Lorem ipsum dolor sit amet cont adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Function;
