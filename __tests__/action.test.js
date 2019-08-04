import FetchCoinData, { aFetchCoinData } from "../src/Actions/FetchCoinData";
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
  API_CALL_RESTORE
} from "../src/Utils/ActionTypes";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe("select_actions", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  describe("selectAvatar", () => {
    test("Dispatches the correct action and payload", () => {
      store.dispatch(functionToTest());
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});

export const functionToTest = () => async dispatch => {
  dispatch(FetchCoinData());
};
