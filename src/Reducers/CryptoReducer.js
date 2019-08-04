import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
  API_CALL_RESTORE
} from "./../Utils/ActionTypes";

export const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
  fromOffline: null,
  time: null
};

export default function(state = initialState, action) {
  console.log("action.type from crypto reducer" + action.type);
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
        fromOffline: "coin"
      });

    case FETCHING_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
        time: Date.now(),
        fromOffline: "success"
      });

    case FETCHING_COIN_DATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        fromOffline: "fail",
        errorMessage: action.payload
      });
    case API_CALL_RESTORE:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        fromOffline: "true"
      };
    default:
      return state;
  }
}
