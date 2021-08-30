import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { colors } from "@cxa-shop-ui/styles";

const useStyles = makeStyles((theme) => ({
  back: {
    color: colors.grey2,
    fontSize: theme.spacing(3),
  },
  wrapper: {
    display: "flex",
    cursor: "pointer",
  },
  text: {
    fontStyle: "normal",
    fontWeight: "lighter",
    fontSize: theme.spacing(3),
    lineHeight: theme.spacing(0.13),
    letterSpacing: theme.spacing(0.05),
  },
}));

export const Back = ({ navigationHandler }) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper} onClick={navigationHandler}>
      <ArrowBackIosIcon className={classes.back} />
      <Typography className={classes.text}>Back</Typography>
    </Box>
  );
};

Back.propTypes = {
  navigationHandler: PropTypes.func.isRequired,
};

export default Back;
