import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type)
  {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    default: 
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      // make api request to sign up with email and password
      const response = await trackerApi.post('/signup', { email, password });
      
      // if successful -> update state to say that we are authenticated
      console.log(response.data);
    } catch (err) {
      // otherwise -> display error
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
      // console.log(err.message);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to sign in

    // if successful -> update state

    // otherwise -> show error message
  }
}

const signout = (dispatch) => {
  return () => {
    // sign user out
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signout, signup},
  { isSignedIn: false, errorMessage: '' }
);