import * as Location from 'expo-location';

const tenMeteresWithDegrees = 0.0001; // 10 meters in long/lat

const getLocation = increment => {
  return {
    timestamp: 100000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 40.9987465 + increment * tenMeteresWithDegrees,
      latitude: -74.1829933 + increment * tenMeteresWithDegrees
    }
  };
};


// this fakes the users location
// once every second this emits an event saying that the users location has changed
let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000)