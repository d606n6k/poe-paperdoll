import React from "react";
import "./homestyles.css";
// import PaperDoll from "../../components/Paperdoll/PaperDoll";

function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="home-control-style mt-3 grid grid-cols-1">
          <div>
            <h2 className="flex items-center justify-center">
              Welcome to PoE Paperdoll!
            </h2>
            <br />
          </div>
          <div>
            <p className="poe-text">
              Welcome to the beta version of PoE Paperdoll. The online character window for the video game <a href="https://www.pathofexile.com" target="_blank" className="text-red-400 hover:text-red-600" rel="noreferrer">Path of Exile</a>.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
