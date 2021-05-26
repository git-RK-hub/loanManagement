import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getRegForm = () => {
  return {
    type: actionTypes.GET_REG_FORM,
  };
};

export const hideRegForm = () => {
  return {
    type: actionTypes.HIDE_REG_FORM,
  };
};

export const getLoans = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.GET_LOAN_REQUEST,
      });
      const { data } = await axios.get(
        "https://moneyloan.herokuapp.com/api/v1/loans"
      );
      dispatch({
        type: actionTypes.GET_LOAN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_LOAN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const setLoan = (loanId) => {
  return {
    type: actionTypes.SET_LOAN,
    payload: loanId,
  };
};

export const getMyLoans = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.GET_MYLOAN_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        "https://moneyloan.herokuapp.com/api/v1/loans/my-application",
        config
      );
      dispatch({
        type: actionTypes.GET_MYLOAN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_MYLOAN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const userLogin = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://moneyloan.herokuapp.com/api/v1/users/login",
        {
          email,
          password,
        },
        config
      );
      dispatch({
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: actionTypes.USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const userRegister = (obj) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.USER_REG_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://moneyloan.herokuapp.com/api/v1/users/",
        {
          name: obj.name,
          email: obj.email,
          password: obj.password,
          contact: obj.contact,
          address: obj.address,
        },
        config
      );
      dispatch({
        type: actionTypes.USER_REG_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: actionTypes.USER_REG_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const createApplication = (obj) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.CREATE_APPLICATION_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${obj.token}`,
        },
      };
      const { data } = await axios.post(
        "https://moneyloan.herokuapp.com/api/v1/loans/application",
        {
          loanId: obj.loanId,
          amount: obj.amount,
          startDate: obj.startDate,
          endDate: obj.endDate,
          emi: obj.emi,
          method: obj.fixed ? "fixed" : "floating",
        },
        config
      );
      dispatch({
        type: actionTypes.CREATE_APPLICATION_SUCCESS,
        payload: data,
      });
      dispatch(getMyLoans(obj.token));
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_APPLICATION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const applicationFormRequest = () => {
  return {
    type: actionTypes.APPLICATION_FORM_REQUEST,
  };
};

export const userLogout = () => {
  localStorage.getItem("userInfo") && localStorage.removeItem("userInfo");
  return {
    type: actionTypes.USER_LOGOUT,
  };
};
