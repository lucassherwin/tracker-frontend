import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
  switch (action.type)
  {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {

};

const createTrack = dispatch => () => {};

export const { Provider, COontext } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);