import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: "url(/img/animation1.gif)",
          height: "70vh",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero__overlay">
          <div className="my-2 d-flex flex-column">
            <div className="mt-5 mb-3">
              <h1 className="text-white fw-bolder fs-1 text-center">
                TRADING MADE SMOOTHER
              </h1>
            </div>
            <div className="w-75 mb-4 text-white mx-auto">
              <p className="text-center fs-6">
                We provide a secure, reliable and transparent environment to
                trade CFDs on Cryptocurrencies. Offering direct access to the
                financial markets with the benefits of competitive pricing,
                tight spreads, low commission and negative balance protection.
              </p>
            </div>
            <div className="buttons">
              <Link
                to="/register"
                className="bg-main px-5 py-2 rounded fw-bolder"
              >
                Create Account Now
              </Link>
              <Link
                to="/login"
                className="cta--2 px-5 py-2 rounded fw-bolder mts-2"
              >
                Login Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
