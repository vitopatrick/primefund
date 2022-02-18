import React, { useContext } from "react";
import { Typography, Box, Button } from "@mui/material";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { plans } from "../Plans/plans";

const Investment = () => {
  toast.configure();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const addInvestment = async (amount, plan) => {
    try {
      // get the user deposit
      const docRef = doc(store, "/users", `${user.email}`);
      const userDetails = await getDoc(docRef);
      const balanceAmount = userDetails.data().balance;
      const depositedAmount = userDetails.data().deposited;
      const totalPackages = userDetails.data().totalPackages;
      if ((amount > balanceAmount) | (amount > depositedAmount)) {
        toast.error("insufficent Fund", {
          theme: "colored",
          position: "bottom-center",
        });
        navigate("/deposit");
      } else {
        await updateDoc(docRef, {
          balance: depositedAmount - amount,
          totalPackages: totalPackages + 1,
          activePages: plan,
        });

        toast.info("Request Submitted", {
          theme: "colored",
          position: "top-center",
        });

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Typography variant="h6" component="div">
          Choose a plan to Invest In...
        </Typography>
      </Box>
      <Box>
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
                  <Button
                    onClick={() => addInvestment(plan.amt, plan.plan)}
                    className="start__cta"
                    variant="contained"
                  >
                    Open {plan.name} Account
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </>
  );
};

export default Investment;
