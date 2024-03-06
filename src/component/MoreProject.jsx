import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Dialog, AppBar, Slide } from "@mui/material";
import { setOpenMoreModel } from "../slice/OpenModel";
import { DisplayFlexEnd } from "./styles";
import { moreProjects } from "../constants/data";
import ProjectCard from "./ProjectCard";

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
        <AppBar sx={{ position: "relative", zIndex: "1" }}>
          <DisplayFlexEnd>
            <Button color="inherit" onClick={handleClose}>
              Close
            </Button>
          </DisplayFlexEnd>
        </AppBar>
        {/* <DisplayFlexCenterCol sx={{ margin: "auto" }}>
          <PoppinsForteenText>Comeing soon...</PoppinsForteenText>
        </DisplayFlexCenterCol> */}

        <Box className="portfolio--section margin-auto">
          <Box className="portfolio--section--container">
            {moreProjects?.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
