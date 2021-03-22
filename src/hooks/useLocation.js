import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (callback) => {
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
      },
      callback
      )
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};