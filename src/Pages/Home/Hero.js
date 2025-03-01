import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Styles/Home.css";
import "../../Styles/Mediaquery.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from "../../assets/images/slider-1.webp";
import slide2 from "../../assets/images/slider-2.webp";
import slide3 from "../../assets/images/slider-3.webp";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="slider"
          style={{
            backgroundImage: `url(${slide1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            textAlign: "left",
            color: "#fff",
          }}
        >
          <div className="container">
            <div className="slider-content">
              <span>Welcome to EduBlink</span>
              <h2>World Best Program Best University</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit.
              </p>
              <div className="slider-btn">
                <a href="/" className="btn">
                  Find courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="slider"
          style={{
            backgroundImage: `url(${slide2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <div className="container">
            <div className="slider-content">
              <span>Welcome to EduBlink</span>
              <h2>World Best Program Best University</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit.
              </p>
              <div className="slider-btn">
                <a href="/" className="btn ">
                  Find courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          className="slider"
          style={{
            backgroundImage: `url(${slide3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <div className="container">
            <div className="slider-content">
              <span>Welcome to EduBlink</span>
              <h2>World Best Program Best University</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit.
              </p>
              <div className="slider-btn">
                <a href="/" className="btn ">
                  Find courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Autoplay Progress */}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
}
