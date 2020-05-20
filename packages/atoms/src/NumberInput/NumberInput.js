import React from "react";
import * as PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { Box, TextField, Typography } from "@material-ui/core";

const PRECISION = 0;

const NumberFormatCustom = ({ inputRef, onChange, ...rest }) => {
  return (
    <NumberFormat
      getInputRef={inputRef}
      allowNegative={false}
      onValueChange={(values) => {
        onChange(values.value);
      }}
      {...rest}
    />
  );
};

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

/* eslint-disable react/jsx-no-duplicate-props */
const NumberInput = ({
  label,
  name,
  value,
  testId,
  helperText,
  endAdornment,
  maxLength,
  error,
  decimalScale,
  onChange,
}) => {
  const extraInputProps = {};
  if (endAdornment) {
    extraInputProps.endAdornment = (
      <Box mr={4}>
        <Typography variant="h6">{endAdornment}</Typography>
      </Box>
    );
  }

  return (
    <TextField
      fullWidth
      variant="outlined"
      name={name}
      label={label}
      value={value}
      data-testid={testId}
      helperText={helperText}
      error={error}
      onChange={onChange}
      InputProps={{
        inputComponent: NumberFormatCustom,
        ...extraInputProps,
      }}
      inputProps={{
        maxLength,
        decimalScale,
      }}
    />
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  testId: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  endAdornment: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  decimalScale: PropTypes.number,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

NumberInput.defaultProps = {
  endAdornment: "",
  decimalScale: PRECISION,
};

export default NumberInput;
