import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  makeStyles,
  Badge,
  CardContent,
  Typography,
  CardMedia
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import {colors} from "@cxa-shop-ui/styles";
import ProductPrice from "@cxa-shop-ui/atoms/src/ProductPrice/ProductPrice";
import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
  root: {
    color: colors.grey2,
  },
  iconHover: {
    backgroundColor: colors.primary,
  },
})(Rating);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  mediaHolder: { position: "relative", height: 175, overflow: 'hidden' },


  shapeCircle: {
    backgroundColor: colors.badge,
    width: 35,
    height: 35,
    padding: theme.spacing(1),
    position: "absolute",
    top: 10,
    right: 10,
    color: colors.white,
    borderRadius: "50%",
    display: "inline-block",
    textAlign: "center",
  },
  BadgeValue: { fontWeight: "600", fontSize: "14px" },
  BadgeOff: { fontSize: "10px" },
  payTag: {
    display: "inline-block",
    position: "absolute",
    top: 167,
    backgroundColor: colors.badge,
    width: "auto",
    padding: theme.spacing(1),
    borderRadius: 5,
    color: colors.white,
    fontFamily: "Raleway, Arial",
    fontSize: 12,
  },
  productTitle: { fontWeight: "600" },
  oldPrice: {
    display: "block",
    textDecoration: "line-through",
    marginTop: theme.spacing(2),
  },
  currentPrice: { display: "block", fontWeight: "700", fontSize: "18px" },
  ratingContainer: {
    width: 200,
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  ratingValue: {
    fontSize: 12,
    fontFamily: "Raleway, Arial",
    color: colors.grey2,
  },
}));

const ProductCard = ({
  src,
  title,
  discount,
  walletFlag,
  brand,
  rating,
  ratingCount,
  oldPrice,
  currentPrice,
  currency,
}) => {
  const classes = useStyles();
  const textWrapper = (msg, limit = 20) => {
    return msg.length > limit ? msg.slice(0, limit) + "..." : msg;
  };
  return (
    <Card className={classes.root}>
      <Box className={classes.mediaHolder}>
        {src ? <CardMedia component="img" image={src} title={title} /> : null}
        {discount ? (
          <Badge className={classes.shapeCircle}>
            <Typography component="p" className={classes.BadgeValue}>
              {discount}%
            </Typography>
            <Typography component="p" className={classes.BadgeOff}>
              OFF
            </Typography>
          </Badge>
        ) : null}
      </Box>
      <CardContent>
        {(walletFlag) ? <Box className={classes.payTag}>Pay By Wallet</Box> : null}

        {title ? (
          <Typography variant="h6" mt={10} className={classes.productTitle}>
            {textWrapper(title)}
          </Typography>
        ) : null}
        {brand ? (
          <Typography variant="body2" color="textSecondary">
            {textWrapper(brand)}
          </Typography>
        ) : null}
        <Box className={classes.ratingContainer}>
          <StyledRating name="size-small" value={rating} size="small" readOnly />
          {ratingCount ? (
            <Box ml={1} className={classes.ratingValue}>
              {ratingCount}
            </Box>
          ) : null}
        </Box>
        <ProductPrice
          oldPrice={oldPrice}
          currentPrice={currentPrice}
          currency={currency}
        />
      </CardContent>
    </Card>
  );
};
ProductCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  discount: PropTypes.number,
  walletFlag: PropTypes.bool,
  brand: PropTypes.string,
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
  oldPrice: PropTypes.number,
  currentPrice: PropTypes.number,
  currency: PropTypes.string,
};

ProductCard.default = {
  src:
    "https://img.etimg.com/thumb/width-400,height-300,msid-68734208,imgsize-326584/.jpg",
  title: "Paella dish",
  discount: 25,
  walletFlag: true,
  brand: "Eatology Limited",
  rating: 4,
  ratingCount: 25,
  oldPrice: 438,
  currentPrice: 328,
  currency: "HK $",
};

export default ProductCard;
