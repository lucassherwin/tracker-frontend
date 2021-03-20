import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, [])

  return null;
};

export default ResolveAuthScreen;
/*
 * this screen will not return anything
 * its only purpose will be to authenticate the user
 * this gets rid of the bug where the sign up screen flashes for a split second while checking if the user has a token already 
 */

