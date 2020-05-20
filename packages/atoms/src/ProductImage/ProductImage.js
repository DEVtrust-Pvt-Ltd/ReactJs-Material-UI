import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import classnames from 'classnames';
import colors from "@cxa-shop-ui/styles/src/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: '226px',
    height: '350px',
    position: 'relative'
  },
  imageOverlay: {
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.6)',
      textIndent: '0',
    },
    position: 'absolute',
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    background: 'transparent',
    color: colors.white,
    fontWeight: '300',
    textIndent: '-999px',
    transition: '0.6s'
  }

}));


const ProductImage = ({ src, alt, width, height, lazy, pictureBreakpoint, rootMargin, threshold, overlayFlag, overlayText }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classnames(classes.root)} fontFamily="fontFamily">
        <picture>
          <source media={'(min-width:' + pictureBreakpoint + 'px)'} srcSet={src.desktop.url} />
          <source media={'(max-width:' + pictureBreakpoint + 'px)'} srcSet={src.mobile.url} />
          {(lazy)?<img src={src.desktop.url} alt={alt}
            width={width}
            height={height}
          />:null}
        </picture>
       {(overlayFlag)?<Box className={classes.imageOverlay}>{overlayText}</Box>:null} 
      </Box>
    </>
  );
};

ProductImage.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  lazy: PropTypes.boolen,
  pictureBreakpoint: PropTypes.number,
  rootMargin: PropTypes.string,
  threshold: PropTypes.number
};

ProductImage.default = {
  src: {
    "mobile": {
      "url": "/assets/storybook/SfImage/product-109x164.jpg"
    },
    "desktop": {
      "url": "/assets/storybook/SfImage/product-216x326.jpg"
    }
  },
  alt: 'Product image',
  width: 216,
  height: 326,
  lazy: true,
  pictureBreakpoint: 576,
  rootMargin: '',
  threshold: 0
};

export default ProductImage;
