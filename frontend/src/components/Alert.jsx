import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import React from "react";
import Iconify from "./Iconify";
// import CloseIcon from '@mui/icons-material/Close';

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleToClose = (event, reason) => {
    if ("clickaway" == reason) return;
    setOpen(false);
  };

  const handleClickEvent = () => {
    setOpen(true);
  };

  return (
    <div >
      {/* <Button onClick={handleClickEvent}>
        Open Snackbar
      </Button> */}
      <Snackbar anchorOrigin={{ horizontal: "center", vertical: "top", }}
        style={{ marginTop: "100px" }}
        open={open}
        autoHideDuration={5000}
        message="Job Added To Favorite"
        onClose={handleToClose}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="success"
              onClick={handleToClose}
            >
              <Iconify icon="eva:close-fill" />
            </IconButton>
          </React.Fragment>
        }
      >

        <Alert severity="success" onClose={handleToClose}>This is a success alert — check it out!
        </Alert>
      </Snackbar>

    </div>
  );
}