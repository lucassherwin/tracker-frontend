import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type)
  {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default: 
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    // make api request to sign up with email and password
    const response = await trackerApi.post('/signup', { email, password });
    // if successful -> update state to say that we are authenticated
    // console.log(response.data.token);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token })

    // navigate to mainFlow
    navigate('TrackList');
  } catch (err) {
    // otherwise -> display error
    console.log(err.message)
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    // console.log(err.message);
  }
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
  { signin, signout, signup },
  { token: null, errorMessage: '' }
);