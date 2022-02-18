import React from "react";
import { Link } from "react-router-dom";
import { plans } from "./plans";

const Plan = () => {
  return (
    <>
      <div className="plan">
        <div className="plan__container">
          <div className="plan__title">
            <h1 className="fw-bolder text-main text-center">
              Choose your Prefered Plan
            </h1>
            <p className="text-muted text-center">
              Choose your plans and increase your mining speed and make more
              coins!
            </p>
          </div>
          <div className="row my-5">
            {plans.map((plan) => (
              <div className="col-sm-12 col-md-6 col-lg-4 my-sm-4">
                <div className="d-flex flex-column align-items-center">
                  <div className="my-4">
                    <h3 className="fw-bolder text-uppercase">{plan.name}</h3>
                  </div>
                  <div className="mb-3">
                    <h1 className="text-muted fs-1 fw-bolder">{`$${plan.amt}`}</h1>
                  </div>
                  <div className="mb-3 text-center w-50 mx-auto">
                    <h5>Account for:</h5>
                    <p className="mt-2">{plan.about}</p>
                  </div>
                  <div>
                    <Link to="/register" className="start__cta">
                      Open {plan.name} Account
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
