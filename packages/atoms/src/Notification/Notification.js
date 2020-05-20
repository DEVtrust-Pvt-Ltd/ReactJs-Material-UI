import React from "react";
import { Box, IconButton, Snackbar, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import { colors } from "@cxa-shop-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: 0,
    height: "55px",
    backgroundColor: colors.mediumEmphasis,
    "& .MuiPaper-root": {
      width: "100%",
      backgroundColor: colors.mediumEmphasis,
      "& .MuiSnackbarContent-action": {
        width: "99%",
      },
    },
  },
  cartIcon: {
    padding: theme.spacing(0.5),
  },
  closeIcon: {
    marginLeft: "auto",
    marginRight: "20px",
  },
  messageContent: {
    marginLeft: "10px",
  },
}));

export const Notification = ({ openSnackbar, content, iconComponent }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: openSnackbar,
    vertical: "top",
    horizontal: "center",
  });

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const { vertical, horizontal, open } = state;

  return (
    <Snackbar
      classes={{ root: classes.root }}
      anchorOrigin={{ vertical, horizontal }}
      key={`${vertical},${horizontal}`}
      open={open}
      onClose={handleClose}
      action={
        <>
          <IconButton
            aria-label="close"
            color="inherit"
            className={classes.cartIcon}
          >
            {iconComponent}
          </IconButton>
          <Box className={classes.messageContent}>{content}</Box>
          <IconButton
            mx="auto"
            aria-label="close"
            color="inherit"
            className={classes.closeIcon}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </>
      }
    />
  );
};
Notification.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  iconComponent: PropTypes.node,
  openSnackbar: PropTypes.bool,
};

Notification.default = {
  content: "",
  iconComponent: <></>,
  openSnackbar: true,
};

export default Notification;
