import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  ) 
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <Ionicons name="settings-sharp" size={20} color="black" />
};

const styles = StyleSheet.create({});

export default AccountScreen;