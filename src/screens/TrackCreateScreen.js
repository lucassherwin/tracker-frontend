import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import '../_mockLocation';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) 
      {
        throw new Error('Location permission not granted');
      }

      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation, // high accuracy
        timeInterval: 1000, // ever second
        distanceInterval: 10 // every 10 meters
      }, (location) => {
        console.log(location); // location comes from expo-location library
      })
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

