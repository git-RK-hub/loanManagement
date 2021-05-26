import * as actionTypes from "../actionTypes";

const initialState = {
  loans: [],
  myLoans: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOAN:
      return {
        ...state,
        loanId: action.payload,
      };
    case actionTypes.GET_LOAN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.GET_LOAN_SUCCESS:
      return {
        ...state,
        loading: false,
        loans: action.payload,
        error: null,
      };
    case actionTypes.GET_LOAN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_MYLOAN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.GET_MYLOAN_SUCCESS:
      return {
        ...state,
        loading: false,
        myLoans: action.payload,
        error: null,
      };
    case actionTypes.GET_MYLOAN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
