import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { setOpenMoreModel } from "../slice/OpenModel";
import {
  DisplayFlexCenterCol,
  DisplayFlexEnd,
  PoppinsForteenText,
} from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MoreProject() {
  const dispatch = useDispatch();
  const openMoreModel = useSelector((state) => state.openModel.openMoreModel);

  const handleClose = () => {
    dispatch(setOpenMoreModel(false));
  };
  return (
    <>
      <Dialog
        fullScreen
        open={openMoreModel}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <DisplayFlexEnd>
            <Button color="inherit" onClick={handleClose}>
              Close
            </Button>
          </DisplayFlexEnd>
        </AppBar>
        <DisplayFlexCenterCol sx={{ margin: "auto" }}>
          <PoppinsForteenText>Comeing soon...</PoppinsForteenText>
        </DisplayFlexCenterCol>
      </Dialog>
    </>
  );
}
