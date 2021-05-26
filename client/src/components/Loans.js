import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import { getMyLoans, getLoans } from "../store/actions";
import Loader from "./Loader";

export const MyLoans = ({ token }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loans);
  const { loading, error, myLoans } = data;

  useEffect(() => {
    dispatch(getMyLoans(token));
  }, [dispatch, token]);

  return (
    <div className="myloans-container">
      <h3>My Application</h3>
      {error && <div className="errorDiv">{error}</div>}

      {loading ? (
        <Loader />
      ) : myLoans.length > 0 ? (
        <div className="myLoans">
          {myLoans.map((e) => (
            <Card
              key={e._id}
              type="application"
              head={e.loan.category}
              amount={e.amount}
              emi={e.emi}
              method={e.method}
              startDate={e.startDate}
              endDate={e.endDate}
              clickMethod={false}
            />
          ))}
        </div>
      ) : (
        <div className="myLoans">No loan applications</div>
      )}
    </div>
  );
};

const Loans = (props) => {
  const dispatch = useDispatch();
  const availableLoans = useSelector((state) => state.loans);
  const { loading, error, loans } = availableLoans;
  useEffect(() => {
    dispatch(getLoans());
  }, [dispatch]);
  return (
    <div className="loans-container">
      <h3>Available Loans</h3>
      {error && <div className="errorDiv">{error}</div>}
      {loading ? (
        <Loader />
      ) : loans.length > 0 ? (
        <div className="loans">
          {loans.map((e) => (
            <Card
              key={e._id}
              loanId={e._id}
              head={e.category}
              startAmount={e.amount.start}
              endAmount={e.amount.end}
              rate={e.interestRate}
              startTenure={e.tenure.start}
              endTenure={e.tenure.end}
              clickMethod={true}
            />
          ))}
        </div>
      ) : (
        <div className="loans">No loans here to show</div>
      )}
    </div>
  );
};

export default Loans;
