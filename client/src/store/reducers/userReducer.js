import * as actionTypes from "../actionTypes";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HIDE_REG_FORM:
      return {
        ...state,
        showRegForm: false,
      };
    case actionTypes.GET_REG_FORM:
      return {
        ...state,
        showRegForm: true,
      };
    case actionTypes.USER_REG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.USER_REG_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: null,
      };
    case actionTypes.USER_REG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: null,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.USER_LOGOUT:
      return {
        loading: false,
        userInfo: null,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
