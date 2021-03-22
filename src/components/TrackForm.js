import React from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const TrackForm = () => {
  return (
    <>
      <Input placeholder='Enter track name' />
      <Button title='Start Recording' />
    </>
  );
};

export default TrackForm