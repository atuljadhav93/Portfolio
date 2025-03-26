import {
  createSlice
} from '@reduxjs/toolkit';
import emailjs from '@emailjs/browser';
import {
  serviceId,
  templateId,
  userId
} from '../constants/const';

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
      state.contactMeData = {
        ...initialState.contactMeData
      };
    }
  },
});

export const sendEmail = (data) => async (dispatch) => {
  try {
    const templateParams = {
      emailSubject: data.emailSubject,
      fullName: data.fullName,
      emailAddress: data.emailAddress,
      phoneNumber: data.phoneNumber,
      message: data.message,
    };
    // Send email using Email.js
    await emailjs.send(serviceId, templateId, templateParams, userId);

    // Dispatch a success action if needed
    dispatch({
      type: 'SEND_EMAIL_SUCCESS'
    });
  } catch (error) {
    // Dispatch an error action if needed
    dispatch({
      type: 'SEND_EMAIL_ERROR',
      payload: error.message
    });
  }
};

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