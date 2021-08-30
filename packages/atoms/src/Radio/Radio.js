import React from "react";
import PropTypes from "prop-types";
import { Radio, FormControlLabel, withStyles } from "@material-ui/core";
import { colors } from "@cxa-shop-ui/styles";

const styles = (theme) => ({
  radio: {
    "&$checked": {
      color: colors.success,
    },
  },
  checked: {},
  labelColor: {
    color: colors.mediumEmphasis,
    fontSize: '14px',
    lineHeight: '20px'
  },
});

export const RadioComponent = (props) => {
  const { value, label, checked, classes } = props;
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          classes={{ root: classes.radio, checked: classes.checked }}
          checked={checked}
        />
      }
      classes={{ label: classes.labelColor }}
      label={label}
      labelPlacement="end"
    />
  );
};

RadioComponent.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.any),
};

RadioComponent.defaultProps = {
  checked: false,
  classes: {},
};

export default withStyles(styles)(RadioComponent);
