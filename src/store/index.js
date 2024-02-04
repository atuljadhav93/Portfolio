import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slice/ContactMe';
import ViewResumeReducer from '../slice/ViewResume';

const store = configureStore({
  reducer: {
    contactMeForm: formReducer,
    ViewResume: ViewResumeReducer
  },
});

export default store;
