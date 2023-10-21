import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import vector from "./Homepage_vector.png";
import cube from "./Black cube 2-02 1.png";
import { Link } from "react-scroll";

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const newBlur = Math.min(window.scrollY / 100, 4);
      setBlurAmount(newBlur);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageUrl = screenWidth < 768 ? cube : vector;

  return (
    <>
      <div className="top-bar"></div>
      <div className="navbar-fixed">
        <nav
          class="navbar navbar-expand-md"
          style={{ backdropFilter: `blur(${blurAmount}px)` }}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <span className="title">DevCom</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  to="team"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Team
                </Link>
                <Link
                  className="nav-link"
                  activeClass="active-link"
                  to="connect"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="container Home-page-content">
        <p className="motto">Build Cool</p>
        <p className="motto">Stuff</p>
        <img className="Home-image" src={imageUrl} alt="keyboard image" />
      </div>
    </>
  );
}

export default Home;
