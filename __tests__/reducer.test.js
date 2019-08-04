import CryptoReducer from "../src/Reducers/CryptoReducer";
import { initialState } from "../src/Reducers/CryptoReducer";
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
  API_CALL_RESTORE
} from "../src/Utils/ActionTypes";

describe("Crypto reducer", () => {
  it("should return the initial state", () => {
    expect(new CryptoReducer(undefined, initialState)).toMatchObject(
      initialState
    );
  });

  it("should return FETCHING_COIN_DATA", () => {
    expect(
      new CryptoReducer(initialState, { type: FETCHING_COIN_DATA })
    ).toMatchObject({
      ...initialState,
      isFetching: true,
      hasError: false,
      errorMessage: null,
      fromOffline: "coin"
    });
  });

  it("should return FETCHING_COIN_DATA_SUCCESS", () => {
    expect(
      new CryptoReducer(initialState, {
        type: FETCHING_COIN_DATA_SUCCESS,
        payload: []
      })
    ).toMatchObject({
      ...initialState,
      isFetching: false,
      data: [],
      hasError: false,
      errorMessage: null,
      time: Date.now(),
      fromOffline: "success"
    });
  });
  it("should return FETCHING_COIN_DATA_FAIL", () => {
    expect(
      new CryptoReducer(initialState, {
        type: FETCHING_COIN_DATA_FAIL,
        payload: []
      })
    ).toMatchObject({
      ...initialState,
      isFetching: false,
      hasError: true,
      fromOffline: "fail",
      errorMessage: []
    });
  });
  it("should return API_CALL_RESTORE", () => {
    expect(
      new CryptoReducer(initialState, {
        type: API_CALL_RESTORE
      })
    ).toMatchObject({
      ...initialState,
      isFetching: false,
      hasError: false,
      fromOffline: "true"
    });
  });
});
