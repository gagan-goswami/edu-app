import React, { useEffect } from "react";
import "../Styles/Header.css";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/logo.png";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const stickyClass = "is-sticky-menu";
      const scrollTop = window.scrollY;
      const stickyElement = document.querySelector(".is-sticky-on");

      if (scrollTop >= 250) {
        stickyElement.classList.add(stickyClass);
      } else {
        stickyElement.classList.remove(stickyClass);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-section">
      <div className="menu-bar is-sticky-on">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              <FaBars />
            </button>
            <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav m-auto p-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/About">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Courses">
                      Courses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-btn">
              <a href="/Contact">Contact</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
