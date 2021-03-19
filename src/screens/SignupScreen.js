import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm headerText='Sign Up For Tracker' errorMessage={state.errorMessage} buttonTitle='Sign Up' onSubmit={signup} />
      <NavLink routeName='Signin' text='Aleady have an account? Click here to sign in!' />
    </View>
  ) 
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SignupScreen;


{/* <NavigationEvents onWillFocus={clearErrorMessage} */}