import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <div className="container about-page p-8">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-4">
            <h2 className="justify-content-center text-center">
              About the Developer
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mt-2">
            <p className="text-center">
              Hi, my name is Emericas! I am an avid fan of Path of Exile and a
              Web Developer based out of California. I have created
              PoE-Paperdoll as a pet project that consumes the Path of Exile
              API. If you like what you see and wish to contribute to this
              project, please feel free to fork the project{" "}
              <a
                href="https://github.com/d606n6k/poe-paperdoll"
                target="_blank"
                rel="noreferrer"
                className="text-red-400 hover:text-red-600"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
        {/* <div className="row justify-content-center">
          <div className="col-12-auto">
            <h2 className="justify-content-center">About the Developer</h2>
          </div>
          <div className="col-12-auto mt-2">
            <p className="">
              Hi, my name is Emericas! I am an avid fan of Path of Exile and a
              Web Developer based out of California. I have created
              PoE-Paperdoll as a pet project that consumes the Path of Exile
              API. If you like what you see and wish to contribute to this
              project, please feel free to fork the project{" "}
              <a
                href="https://github.com/d606n6k/poe-paperdoll"
                target="_blank"
                rel="noreferrer"
                className="text-red-400 hover:text-red-600"
              >
                here
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default About;
