import React from "react";
import { useSelector } from "react-redux";
import Loans, { MyLoans } from "../components/Loans";

const LoanScreen = () => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  return (
    <>
      {userInfo && <MyLoans token={userInfo.token} />}
      <Loans />
    </>
  );
};

export default LoanScreen;
