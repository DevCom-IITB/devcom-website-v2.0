import React from "react";
import "./Projectreso.css";

function Projectreso() {
  return (
    <>
      <div className="top-bar"></div>
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            DevCom
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
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                About
              </a>
              <a class="nav-link" href="#">
                Projects
              </a>
              <a class="nav-link" href="#">
                Team
              </a>
              <a class="nav-link" href="#">
                Connect
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="project-box">
        <div className="project-box-head">
          <div className="project-logo">
            <div className="project-image"></div>
            <div className="project-name">
              <p>Resobin</p>
            </div>
          </div>
          <div className="project-link">
            <div className="website-link">
              <a href="#">Website</a>
            </div>
            <div className="github-link">
              <a href="#">Github</a>
            </div>
          </div>
        </div>
        <div className="project-box-body">
          <p>
            ResoBin is a one-stop solution for all your academic needs at IIT
            Bombay. You can search and filter courses, view reviews and past
            resources, and create your own personalized timetable. ResoBin uses
            IITB SSO for the authentication of users and authorization of form
            responses access.
          </p>
          <p>
            Here are some of the features of Resobin:
            <ul>
              <li>
                Course search: You can search for courses by name, code, or
                instructor.
              </li>
              <li>
                Reviews and resources: You can read reviews of courses and find
                past resources, such as lecture notes, assignments, and exams.
              </li>
              <li>
                Personalized timetable: You can create your own personalized
                timetable based on your classes, exams, and other commitments.
              </li>
              <li>
                IITB SSO: ResoBin uses IITB SSO for the authentication of users
                and authorization of form responses access. This means that you
                only need to log in once to access ResoBin, and you will be able
                to see all of your courses and resources.
              </li>
            </ul>
          </p>
          <p>
            ResoBin is a great way to stay organized and on top of your studies.
            It is a valuable resource for all IIT Bombay students.
          </p>
        </div>
      </div>
    </>
  );
}

export default Projectreso;
