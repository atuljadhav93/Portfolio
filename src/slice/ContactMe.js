import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  contactMeData: {
    fullName: '',
    emailAddress: '',
    phoneNumber: '', 
    emailSubject: '',
    message: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // setFullName: (state, action) => {
    //   state.fullName = action.payload.value;
    // },
    // setEmailAddress: (state, action) => {
    //   state.emailAddress = action.payload;
    // },
    // setPhoneNumber: (state, action) => {
    //   state.phoneNumber = action.payload;
    // },
    // setEmailSubject: (state, action) => {
    //   state.emailSubject = action.payload;
    // },
    // setMessage: (state, action) => {
    //   state.message = action.payload;
    // },
    setFieldValue: (state, action) => {
      state.contactMeData[action.payload.field] = action.payload.value;
    },
    clearForm: (state) => {
      state.contactMeData = {...initialState.contactMeData};
    }
  },
});

export const {
  // setFullName,
  // setEmailAddress,
  // setPhoneNumber,
  // setEmailSubject,
  // setMessage,
  clearForm,
  setFieldValue
} = formSlice.actions;
export default formSlice.reducer;