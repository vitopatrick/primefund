import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: "url(/img/bg-img.jpg)",
          height: "70vh",
          position: "relative",
        }}
      >
        <div className="hero__overlay">
          <div className="container my-2 d-flex flex-column">
            <div className="mt-5 mb-3">
              <h1 className="text-white fw-bolder fs-1">
                TRADING MADE SMOOTHER
              </h1>
            </div>
            <div className="w-lg-50 mb-4 text-white">
              <p className="lh-lg text-center">
                We provide a secure, reliable and transparent environment to
                trade CFDs on Cryptocurrencies. Offering direct access to the
                financial markets with the benefits of competitive pricing,
                tight spreads, low commission and negative balance protection.
              </p>
            </div>
            <div className="mb-3">
              <Link
                to="/register"
                className="bg-main px-5 py-2 rounded fw-bolder"
              >
                Create Account Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
