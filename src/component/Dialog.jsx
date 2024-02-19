import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Dialog, IconButton } from "@mui/material";
import { CloseButton } from "../assets/icons/Icons";

const CustomizedDialog = styled(Dialog)`
  & .MuiPaper-root.MuiPaper-elevation {
    overflow: visible;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    width: auto;
  }
`;

const DialogWrapper = styled(Box)`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justifycontent: center;
  gap: 10px;
`;

const CustomDialogBox = ({
  childrens,
  open,
  setOpen,
  background,
  closeIconId,
  width,
  height,
  padding,
}) => {
  return (
    <CustomizedDialog
      maxWidth={"xl"}
      fullWidth={true}
      sx={{
        backdropFilter: "blur(1px)",
        width: width,
        height: height,
        background: background,
        margin:"auto",
      }}
      open={open}
    >
      <DialogWrapper
        sx={{
          background: background,
          width: width,
          height: height,
          padding: padding,
        }}
      >
        {/* close icon */}
        <IconButton
          id={closeIconId}
          onClick={() => setOpen(false)}
          size="small"
          disableRipple
          disableFocusRipple
          style={{
            borderRadius: "100%",
            display: "flex",
            position: "absolute",
            boxShadow: "none",
            top: -31,
            right: 4,
            zIndex: 50,
          }}
        >
          <CloseButton
            props={{
              width: "52px",
              height: "52px",
            }}
          />
        </IconButton>
        {childrens}
      </DialogWrapper>
    </CustomizedDialog>
  );
};

CustomDialogBox.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  childrens: PropTypes.node,
  background: PropTypes.string,
  closeIconId: PropTypes.string,
  width: PropTypes.shape({
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
  }),
  height: PropTypes.shape({
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
  }),
  padding: PropTypes.string,
};

export default CustomDialogBox;
