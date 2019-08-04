import { CHECKNETSTATUS } from "./../Utils/ActionTypes";

const netstatus = status => ({
  type: CHECKNETSTATUS,
  status
});

export const updateNetstatus = status => dispatch => {
  dispatch(netstatus(status));
};
