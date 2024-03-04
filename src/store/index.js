import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slice/ContactMe';
import ViewResumeReducer from '../slice/ViewResume';
import OpenModel from '../slice/OpenModel';

const store = configureStore({
  reducer: {
    contactMeForm: formReducer,
    ViewResume: ViewResumeReducer,
    openModel: OpenModel
  },
});

export default store;
