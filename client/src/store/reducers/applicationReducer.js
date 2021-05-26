import * as actionTypes from "../actionTypes";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APPLICATION_FORM_REQUEST:
      return {
        ...state,
        error: null,
      };
    case actionTypes.CREATE_APPLICATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.CREATE_APPLICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null,
      };
    case actionTypes.CREATE_APPLICATION_FAIL:
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
