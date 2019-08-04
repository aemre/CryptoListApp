import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import NetworkReducer from "./NetworkReducer"

export default combineReducers({
    crypto: CryptoReducer,network: NetworkReducer
});