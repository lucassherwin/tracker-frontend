import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        if (!granted) 
        {
          throw new Error('Location permission not granted');
        }
  
        subscriber = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation, // high accuracy
          timeInterval: 1000, // ever second
          distanceInterval: 10 // every 10 meters
        },
        callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    if(shouldTrack)
    {
      startWatching();
    }
    else
    {
      if(subscriber)
      {
        subscriber.remove();
      }
      subscriber = null;
    }

    // clean up function
    return () => {
      if(subscriber)
      {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]); // checks value of shouldTrack to see if it has changed

  return [err];
};