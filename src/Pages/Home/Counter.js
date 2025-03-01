import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

function Counter() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".counter-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setStartCount(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="counter-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-3 col-md-6">
            <div className="counter-box">
              <h3>
                {startCount ? (
                  <CountUp end={29.3} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                K
              </h3>
              <p>STUDENT ENROLLED</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="counter-box">
              <h3>
                {startCount ? (
                  <CountUp end={32.4} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                K
              </h3>
              <p>Class Completed</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="counter-box">
              <h3>{startCount ? <CountUp end={100} duration={2} /> : "0"}%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="counter-box">
              <h3>{startCount ? <CountUp end={354} duration={2} /> : "0"}+</h3>
              <p>Top Instructors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
