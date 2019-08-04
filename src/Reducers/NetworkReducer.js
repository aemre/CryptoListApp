import { CHECKNETSTATUS } from "../Utils/ActionTypes";
const initialState = {
  connection: true
};
export default (netStatus = (state, action) => {
  switch (action.type) {
    case CHECKNETSTATUS:
      return Object.assign({}, state, {
        ...initialState,
        connection: action.status
      });
    default:
      return initialState;
  }
});
