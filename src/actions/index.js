import axios from 'axios'

export const FETCH_USERS = 'FETCH_USERS'

export const fetchUsers = () => {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  return (dispatch) => {
    request
      .then( ({data}) =>{
        dispatch({ type: FETCH_USERS, payload: data });
      })
      .catch((err) => {
        console.error(err);
      });
    ;
  }
}
