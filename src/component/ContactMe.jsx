import React, { useState } from "react";
import { Alert, Box, Grid, Snackbar, TextField } from "@mui/material";
import { ButtonStyle, PageHeadingText, ValidationText } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { clearForm, sendEmail, setFieldValue } from "../slice/ContactMe";
import {
  ContactMeHeadingText,
  ContactUsSnackBarMsg,
  EmailSubjectValidatioText,
  EmailValidatioText,
  FullNameValidatioText,
  MessageValidatioText,
  PhoneNumberValidatioText,
  Submit,
} from "../constants/Text";
import {
  emailRegex,
  firstNameRegex,
  messageRegex,
  phoneRegex,
} from "../constants/ValidationRegEx";
// import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const dispatch = useDispatch();
  const contactMeForm = useSelector(
    (state) => state.contactMeForm.contactMeData
  );

  const [isFullNameValid, setFullNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPhoneValid, setPhoneValid] = useState(true);
  const [isEmailAddressValid, setEmailAddressValid] = useState(true);
  const [isMessageValid, setMessageValid] = useState(true);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleInputChange = (field, value) => {
    dispatch(setFieldValue({ field, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullnameResult = firstNameRegex.exec(contactMeForm.fullName);
    if (contactMeForm.fullName && fullnameResult !== null) {
      setFullNameValid(true);
      setTimeout(() => {
        setFullNameValid(true);
      }, 5000);
    } else {
      setFullNameValid(false);
      setTimeout(() => {
        setFullNameValid(true);
      }, 5000);
    }
    const emailResult = emailRegex.exec(contactMeForm.emailAddress);
    if (contactMeForm.emailAddress && emailResult !== null) {
      setEmailValid(true);
      setTimeout(() => {
        setEmailValid(true);
      }, 5000);
    } else {
      setEmailValid(false);
      setTimeout(() => {
        setEmailValid(true);
      }, 5000);
    }
    const phoneResult = phoneRegex.exec(contactMeForm.phoneNumber);
    if (contactMeForm.phoneNumber && phoneResult !== null) {
      setPhoneValid(true);
      setTimeout(() => {
        setPhoneValid(true);
      }, 5000);
    } else {
      setPhoneValid(false);
      setTimeout(() => {
        setPhoneValid(true);
      }, 5000);
    }
    const emailsubjectResult = firstNameRegex.exec(contactMeForm.emailSubject);
    if (contactMeForm.emailAddress && emailsubjectResult !== null) {
      setEmailAddressValid(true);
      setTimeout(() => {
        setEmailAddressValid(true);
      }, 5000);
    } else {
      setEmailAddressValid(false);
      setTimeout(() => {
        setEmailAddressValid(true);
      }, 5000);
    }
    const messageResult = messageRegex.exec(contactMeForm.message);
    if (contactMeForm.emailAddress && messageResult !== null) {
      setMessageValid(true);
      setTimeout(() => {
        setMessageValid(true);
      }, 5000);
    } else {
      setMessageValid(false);
      setTimeout(() => {
        setMessageValid(true);
      }, 5000);
    }
    if (
      fullnameResult !== null &&
      emailResult !== null &&
      phoneResult !== null &&
      emailsubjectResult !== null &&
      messageResult !== null
    ) {
      // all validations are successful, clear the form
      setSnackbarOpen(true);
      // emailjs.sendForm('service_0in2dp9', 'template_4rb7bmk', '4v_iM7q6V2uFGq9nx')
      // .then((result) => {
      //   console.log(result.text);
      // }, (error) => {
      //   console.log(error.text);
      // });
      dispatch(sendEmail(contactMeForm));
      dispatch(clearForm());
    } else {
      // at least one validation failed, do not clear the form
      setFullNameValid(fullnameResult !== null);
      setEmailValid(emailResult !== null);
      setPhoneValid(phoneResult !== null);
      setEmailAddressValid(emailsubjectResult !== null);
      setMessageValid(messageResult !== null);
    }
  };

  return (
    <>
      <Box
        id="Contact"
        style={{
          marginBottom: "3rem",
        }}
      >
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
            width: "auto",
          }}
        >
          <Alert
            onClose={handleSnackbarClose}
            sx={{
              background: "#DDFFDE",
              color: "#37C977",
            }}
          >
            {ContactUsSnackBarMsg}
          </Alert>
        </Snackbar>
        <PageHeadingText sx={{ color: "#003C2F" }}>
          {ContactMeHeadingText}
        </PageHeadingText>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            rowGap: "20px",
            width: "auto",
            margin: {
              xs: "0rem 1rem 0rem 1rem",
              sm: "0rem",
              md: "0rem 8rem 0rem 8rem",
              lg: "0rem 18rem 0rem 18rem",
              xl: "0rem 22rem 0rem 22rem",
            }
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{
              display: !isFullNameValid ? "" : "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Enter Your Name"
              // label={
              //   <>
              //     Enter Your Name
              //     <Typography
              //       component="span"
              //       style={{
              //         color: "red",
              //         fontWeight: "400",
              //         transform: "translateY(-50px)",
              //         display: "inline-block",
              //       }}
              //     >
              //       *
              //     </Typography>
              //   </>
              // }
              name="fullName"
              value={contactMeForm.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              InputLabelProps={{
                style: {
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  width: "500px",
                  color: "#003c2f",
                },
              }}
              inputProps={{
                style: {
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#003c2f",
                },
                minLength: 3,
                maxLength: 40,
              }}
            />
            {!isFullNameValid && (
              <ValidationText>{FullNameValidatioText}</ValidationText>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{
              display: !isEmailValid ? "" : "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Enter Your Email"
              name="emailAddress"
              value={contactMeForm.emailAddress}
              onChange={(e) =>
                handleInputChange("emailAddress", e.target.value)
              }
              InputLabelProps={{
                style: {
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  width: "500px",
                  color: "#003c2f",
                },
              }}
              inputProps={{
                style: {
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#003c2f",
                },
                minLength: 3,
                maxLength: 40,
              }}
            />
            {!isEmailValid && (
              <ValidationText>{EmailValidatioText}</ValidationText>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{
              display: !isPhoneValid ? "" : "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Phone Number"
              name="phoneNumber"
              value={contactMeForm.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              InputLabelProps={{
                style: {
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  width: "500px",
                  color: "#003c2f",
                },
              }}
              inputProps={{
                style: {
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#003c2f",
                },
                minLength: 3,
                maxLength: 40,
              }}
            />
            {!isPhoneValid && (
              <ValidationText>{PhoneNumberValidatioText}</ValidationText>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{
              display: !isEmailAddressValid ? "" : "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Enter Subject"
              name="emailSubject"
              value={contactMeForm.emailSubject}
              onChange={(e) =>
                handleInputChange("emailSubject", e.target.value)
              }
              InputLabelProps={{
                style: {
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  width: "500px",
                  color: "#003c2f",
                },
              }}
              inputProps={{
                style: {
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#003c2f",
                },
                minLength: 3,
                maxLength: 40,
              }}
            />
            {!isEmailAddressValid && (
              <ValidationText>{EmailSubjectValidatioText}</ValidationText>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            style={{
              display: !isMessageValid ? "" : "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="message"
              size="small"
              required
              multiline
              placeholder="Your Message"
              minRows={3}
              maxRows={3}
              fullWidth
              name="message"
              value={contactMeForm.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              inputProps={{
                sx: {
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#003c2f",
                },
                maxLength: 400,
              }}
              InputLabelProps={{
                sx: {
                  fontFamily: "Poppins",
                },
              }}
            />
            {!isMessageValid && (
              <ValidationText>{MessageValidatioText}</ValidationText>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonStyle
              id="submit-button"
              sx={{
                height: "48px",
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: 500,
                width: "10rem",
              }}
              variant="contained"
              disableElevation
              type="submit"
              onClick={handleSubmit}
              disabled={
                !(
                  contactMeForm.fullName &&
                  contactMeForm.emailAddress &&
                  contactMeForm.phoneNumber &&
                  contactMeForm.emailSubject &&
                  contactMeForm.message
                ) > 0
              }
            >
              {Submit}
            </ButtonStyle>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
