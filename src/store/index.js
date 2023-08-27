import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slice/ContactMe';

const store = configureStore({
  reducer: {
    contactMeForm: formReducer,
  },
});

export default store;
