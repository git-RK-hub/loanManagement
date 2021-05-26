import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoan, applicationFormRequest } from "../store/actions";
import LoanApplication from "./LoanApplication";

const Card = (props) => {
  let [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const loadApplicationForm = (loanId) => {
    dispatch(applicationFormRequest());
    dispatch(setLoan(loanId));
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const form = (
    <>
      <div className="backdrop" onClick={() => closeForm()}></div>
      {!userInfo ? <Redirect to="/" /> : <LoanApplication />}
    </>
  );

  return (
    <>
      {showForm ? form : null}
      <div
        className="loan-card"
        onClick={
          props.clickMethod ? () => loadApplicationForm(props.loanId) : null
        }
      >
        <div className="loan-card__img">
          <i className="fas fa-user-check"></i>
        </div>
        {props.type === "application" ? (
          <div className="loan-application__card">
            <div className="loan-card__category">{props.head}</div>
            <div className="loan-card__amount">
              Loan Amount: {props.amount} ₹
            </div>
            <div className="loan-card__startDate">
              Start: {new Date(props.startDate).toDateString()}
            </div>
            <div className="loan-card__endDate">
              End: {new Date(props.endDate).toDateString()}
            </div>
            <div className="loan-card__emi">EMI: {props.emi} ₹</div>
            <div className="loan-card__method">Method: {props.method}</div>
          </div>
        ) : (
          <>
            <div className="loan-card__amount">
              {props.endAmount
                ? `${props.startAmount}₹ - ${props.endAmount}₹`
                : `${props.startAmount}₹`}
            </div>
            <div className="loan-card__tenure">
              Tenure(yrs){" "}
              {props.endTenure
                ? `${props.startTenure} - ${props.endTenure}`
                : props.startTenure}
            </div>
            <div className="loan-card__interest">On {props.rate}% Interest</div>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
