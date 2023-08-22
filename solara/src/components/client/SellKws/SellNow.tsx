import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useParkContext } from "@/context/ParkContext";
import styles from "./SellNow.module.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const SellNow = () => {
  const { isOpen, setIsOpen } = useParkContext();
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const theme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: "#2c4e35",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogTitle id="dialog-title">
          <>
            <div className={styles.header}>
              Sell kWh now <span className={styles.line}></span>
            </div>
          </>
        </DialogTitle>
        <DialogContent>
          <>
            <div className={styles.span}>
              kWh Amount: <input></input>
            </div>
            <div className={styles.span}>
              kWh Price: $ <input></input>
            </div>
          </>
        </DialogContent>
        <DialogActions>
          <div className={styles.buttonActions}>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleClose}>Sell</Button>
          </div>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default SellNow;
