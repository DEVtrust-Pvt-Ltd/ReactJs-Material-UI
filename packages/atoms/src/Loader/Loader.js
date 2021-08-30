import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Box } from "@material-ui/core";

const Loader = ({ loading, size }) => {
  return (
    <>
      {loading && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress size={size} />
        </Box>
      )}
    </>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  size: PropTypes.number,
};

Loader.default = {
  loading: false,
  size: 30,
};

export default Loader;
