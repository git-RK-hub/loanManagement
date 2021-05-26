import React, { useState } from "react";

const Calculator = () => {
  let [amount, setAmount] = useState(1000);
  let [rate, setRate] = useState(10);
  let [tenure, setTenure] = useState(20);
  let [emi, setEmi] = useState(54.306);
  let [totalInterest, setTotalInterest] = useState(86.119);
  let [totalPayable, setTotalPayable] = useState(1086.119);

  const calculateEMI = () => {
    /* n=no. of monhts */
    /* EMI = (P*r*pow((1+r),n))/(pow(1+r,n) -1)  */
    /* total payable =  EMI*n */
    /* total interest payable = totalPay - P */
    const _rr = (rate / 12 / 100).toFixed(3);
    const _emi =
      amount *
      Number(_rr) *
      parseFloat(
        Math.pow(1 + Number(_rr), Number(tenure)) /
          (Math.pow(1 + Number(_rr), Number(tenure)) - 1)
      );
    setEmi(Number(_emi).toFixed(3));
    const _totalPayable = _emi * tenure;
    const _totalInterest = _totalPayable - amount;
    setTotalPayable(Number(_totalPayable).toFixed(3));
    setTotalInterest(Number(_totalInterest).toFixed(3));
  };
  return (
    <section className="calci-container" id="calci">
      <h2>EMI Calculator</h2>
      <div className="calci">
        <div className="calci-cal">
          <div className="input-box">
            <input
              type="number"
              name="amount"
              value={amount}
              required
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="underline"></div>
            <label>Loan Amount (₹)</label>
          </div>
          <div className="input-box">
            <input
              type="number"
              name="interest"
              value={rate}
              required
              onChange={(e) => setRate(e.target.value)}
            />
            <div className="underline"></div>

            <label>Interest Rate (%)</label>
          </div>
          <div className="input-box">
            <input
              type="number"
              name="tenure"
              value={tenure}
              required
              onChange={(e) => setTenure(e.target.value)}
            />
            <div className="underline"></div>
            <label>Loan Tenure (Months)</label>
          </div>
          <button className="button" id="calBtn" onClick={calculateEMI}>
            Calculate
          </button>
        </div>
        <div className="calci-res">
          <p>Loan EMI</p>
          <h4>₹ {emi}</h4>
          <p>Total Interest Payable</p>
          <h4>₹ {totalInterest}</h4>
          <p>Total Payment (Principal + Interest)</p>
          <h4>₹ {totalPayable}</h4>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
