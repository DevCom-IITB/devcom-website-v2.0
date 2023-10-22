import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import vector from "./Homepage_vector.png";
import cube from "./Black cube 2-02 1.png";
import { Link } from "react-scroll";
// import DevComLogo from "./DC 3.svg";

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [blurAmount, setBlurAmount] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

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
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.79997 28.0001L-3.05176e-05 25.2001L11.2 14.0001L-3.05176e-05 2.80006L2.79997 6.10352e-05L14 11.2001L25.2 6.10352e-05L28 2.80006L16.8 14.0001L28 25.2001L25.2 28.0001L14 16.8001L2.79997 28.0001Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_825_211)">
                    <path
                      d="M6 9.97949H42V13.9712H6V9.97949ZM6 21.9548H42V25.9465H6V21.9548ZM6 33.93H42V37.9218H6V33.93Z"
                      fill="#F2F2F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_825_211">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarNavAltMarkup"
              style={{
                height: screenWidth < 768 && isNavOpen ? "100vh" : "auto",
              }}
            >
              <div
                style={{
                  backgroundColor:
                    screenWidth < 768 && isNavOpen ? "black" : "transparent",
                  height: screenWidth < 768 ? "100vh" : "",
                  width: "100%",
                }}
              >
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
                {/* <div className="devcom-svg-container">
                  <img src={DevComLogo} alt="Devcom Logo" />
                </div> */}
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
