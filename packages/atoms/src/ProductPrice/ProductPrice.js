import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import classnames from 'classnames';
import Typography from "@material-ui/core/Typography";
import colors from "@cxa-shop-ui/styles/src/colors";
import Badge from "../Badge/Badge"

const useStyles = makeStyles(theme => ({
    root: {
        fontSize:'18px'
    },
    special:{color:'#d12727', marginRight:'10px', fontWeight:'300'},
    regular:{color:'#333', fontWeight:'500'}
}));


const ProductPrice = ({ regular, special, specialFlag,oldFlag }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root} fontFamily="fontFamily">
        {oldFlag ? (
          <>
            <Badge classname={["colorSecondary"]} label={regular} />
            <Box component="span" className={classes.regular}>
              {special}
            </Box>
          </>
        ) : specialFlag && special ? (
          <>
            <Box component="del" className={classes.special}>
              {regular}
            </Box>
            <Badge classname={["colorWarning"]} label={special} />
          </>
        ) : !special ? (
          <>
            <Badge label={regular} />
          </>
        ) : (
          <>
            <Box component="del" className={classes.special}>
              {regular}
            </Box>
            <Box component="span" className={classes.regular}>
              {special}
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

ProductPrice.propTypes = {
  special: PropTypes.string,
  regular: PropTypes.string,
};

ProductPrice.default = {
  special: '$100.00',
  regular: '$200.00',
};

export default ProductPrice;
