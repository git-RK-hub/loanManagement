import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createApplication } from "../store/actions";

const LoanApplication = () => {
  let [token, setToken] = useState("");
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [contact, setContact] = useState("");
  let [amount, setAmount] = useState("");
  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");
  let [emi, setEMI] = useState("");
  let [fixed, setFixed] = useState(true);
  let [float, setFloat] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  const { loanId } = useSelector((state) => state.loans);
  let { error } = useSelector((state) => state.application);

  const { userInfo } = data;

  useEffect(() => {
    setToken(userInfo.token);
    setName(userInfo.name);
    setAddress(userInfo.address);
    setContact(userInfo.contact);
  }, [userInfo, loanId]);

  const loanApplicationHandler = (event, obj) => {
    event.preventDefault();
    dispatch(createApplication(obj));
  };

  return (
    <>
      <div className="loan-application__container">
        <p>Loan Application Form</p>
        {error && <div className="errorDiv">{error}</div>}
        <form
          onSubmit={(event) =>
            loanApplicationHandler(event, {
              token,
              loanId,
              amount,
              startDate,
              endDate,
              emi,
              fixed,
              float,
            })
          }
          className="loan-application__form"
        >
          <div className="input-box">
            <input
              type="text"
              name="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <div className="underline"></div>
            <label>Applicant Name</label>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></input>
            <div className="underline"></div>
            <label>Address</label>
          </div>
          <div className="input-box">
            <input
              type="phone"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            ></input>
            <div className="underline"></div>
            <label>Contact No.</label>
          </div>
          <div className="input-box">
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            ></input>
            <div className="underline"></div>
            <label>Loan Amount</label>
          </div>
          <div className="input-box__date">
            <label>Loan Start Date</label>
            <input
              type="date"
              name="loanStartDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            ></input>
          </div>
          <div className="input-box__date">
            <label>Loan Expiry Date</label>
            <input
              type="date"
              name="loanEndDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            ></input>
          </div>
          <div className="input-box">
            <input
              type="number"
              name="emis"
              value={emi}
              onChange={(e) => setEMI(e.target.value)}
              required
            ></input>
            <div className="underline"></div>
            <label>Monthly Installments</label>
          </div>
          <div className="checked-btn">
            <input
              type="radio"
              name="method"
              checked={fixed}
              onChange={(e) => {
                setFixed((fixed) => !fixed);
                setFloat((float) => !float);
              }}
              required
            ></input>
            <label>Fixed</label>

            <input
              type="radio"
              name="method"
              checked={float}
              onChange={(e) => {
                setFloat((float) => !float);
                setFixed((fixed) => !fixed);
              }}
              required
            ></input>
            <label>Floating</label>
          </div>
          <button className="button" id="loanFormSubmit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoanApplication;
