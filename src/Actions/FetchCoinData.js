import { apiBaseURL } from "./../Utils/Constants";
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from "./../Utils/ActionTypes";
const options = {
  method: "GET",
  uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  qs: {
    start: "1",
    limit: "1",
    convert: "USD,BTC"
  },
  headers: {
    "X-CMC_PRO_API_KEY": "2ba1058f-b5dc-4ddb-8e5c-0e1de7c820ab"
  },
  json: true,
  gzip: true
};

export const FetchCoinData = () => dispatch => {
  dispatch({ type: FETCHING_COIN_DATA });

  return fetch(apiBaseURL, options)
    .then(res => res.json())

    .then(x => {
      return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: x.data });
    })
    .catch(err => {
      return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
    });
};

export function testing() {
  console.warn("testing");
}
