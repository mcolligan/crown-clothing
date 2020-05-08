import directoryData from '../../components/directory/directoryData';

const INITIAL_STATE = {
  sections: directoryData,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
