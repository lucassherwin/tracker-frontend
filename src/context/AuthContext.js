import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type)
  {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin': // we do the same thing for sign up and sign in
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default: 
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = (dispatch) => async ({ email, password }) => {
  try {
    // make api request to sign up with email and password
    const response = await trackerApi.post('/signup', { email, password });
    // if successful -> update state to say that we are authenticated
    // console.log(response.data.token);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token })

    // navigate to mainFlow
    navigate('TrackList');
  } catch (err) {
    // otherwise -> display error
    console.log(err.message)
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    // console.log(err.message);
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    // try to sign in
    const response = await trackerApi.post('/signin', { email, password });
    // if successful -> update state
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch(err) {
    // otherwise -> show error message
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    })
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token'); // see if there is a token in storage
  if(token) // if so sign the user in
  {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  }
  else
  {
    navigate('Signup');
  }
};


const signout = (dispatch) => async () => {
  // clear the token in state
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });

  // navigate back to login page
  navigate('loginFlow');
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);