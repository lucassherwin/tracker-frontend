import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) 
      {
        throw new Error('Location permission not granted');
      }

      const sub = await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation, // high accuracy
        timeInterval: 1000, // ever second
        distanceInterval: 10 // every 10 meters
      },
      callback
      );
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if(shouldTrack)
    {
      startWatching();
    }
    else
    {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]); // checks value of shouldTrack to see if it has changed

  return [err];
};