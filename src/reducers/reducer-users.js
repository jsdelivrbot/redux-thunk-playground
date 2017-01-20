import { FETCH_USERS } from '../actions/index'

const UsersInitialState = {users: []};
export const UsersReducer = (state = UsersInitialState, action) => {
  console.log('UsersReducer', action);
  switch (action.type) {
    case FETCH_USERS:
      // UsersReducer is bound to global state's state.users:
      // reducer will update to state.users.all
      return {...state, all: action.payload};
    default:
      return state
  }
}