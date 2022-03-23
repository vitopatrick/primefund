/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Newsletter from "../components/Newsletter/Newsletter";
import Plan from "../components/Plans/Plan";
import Reason from "../components/Reason/Reason";
import Start from "../components/Start/Start";
import Work from "../components/Work/Work";
// import Ticker from "../components/Ticker/Ticker";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/wx2oo7kg6zqrdnmsl6utqwqhjpsqg20i.js";

    document.body.appendChild(script);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <About />
      <Start />
      <Work />
      <Reason />
      <Plan />
      <Testimonials />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
