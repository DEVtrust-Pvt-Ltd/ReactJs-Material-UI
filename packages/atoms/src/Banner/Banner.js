import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, useTheme } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "auto",
    display: "block",
    overflow: "hidden",
    width: "100%",
    marginBottom: theme.spacing(8),
    paddingTop: theme.spacing(0),
    cursor: "pointer",
  },
  iconsPosition: {
    position: "relative",
  },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Banner = ({ banners, onBannerClick }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);
  const handleStepChange = useCallback((step) => setActiveStep(step), [
    activeStep,
  ]);

  return (
    <Box className={classes.iconsPosition}>
      <AutoPlaySwipeableViews
        data-testid="auto-play-swipeable-views"
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {banners.map((banner, index) => (
          <Box key={banner.id}>
            {Math.abs(activeStep - index) <= banners.length ? (
              <img
                className={classes.banner}
                src={banner.imageUrl}
                alt="Images"
                onClick={onBannerClick}
                role="presentation"
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

Banner.propTypes = {
  banners: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
  secureBaseMediaUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  onBannerClick: PropTypes.func.isRequired,
};

Banner.default = {
  banners: [],
  secureBaseMediaUrl: null,
};

export default Banner;
