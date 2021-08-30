import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import { Review } from "@cxa-shop-ui/atoms";

const useStyles = makeStyles((theme) => ({
  row: {
    flexDirection: "row",
    width: "100%",
  },
}));

const ProductReview = ({ reviews }) => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      {reviews.map((review, index) => (
        <Box key={index}>
          <Review
            author={review.author}
            date={review.date}
            message={review.message}
            disabled={review.disabled}
            rating={review.rating}
            maxRating={review.maxRating}
            precision={review.precision}
            charLimit={review.charLimit}
            readMoreText={review.readMoreText}
            hideFullText={review.hideFullText}
          />
        </Box>
      ))}
    </Box>
  );
};

ProductReview.propTypes = {
  reviews: PropTypes.array,
};

ProductReview.defaultProps = {
  reviews: [],
};

export default ProductReview;
