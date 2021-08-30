import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import ClearIcon from '@material-ui/icons/Clear';
import * as PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core'
import { Back, ButtonComponent } from '@cxa-shop-ui/atoms'
import { ProductReview } from '@cxa-shop-ui/molecules'
import { colors } from "@cxa-shop-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        fontsStyle: 'normal',
        fontWeight: '300',
        padding: theme.spacing(2.5),
    },
    header: {
        color: theme.mediumEmphasis,
        fontSize: '30px',
        lineHeight: '36px',
    },
    reviewsWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(3.75),
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0),
            borderBottom: `1px solid ${colors.platinum}`,
        },
    },
    rating: {
        fontSize: '16px',
        color: colors.grey2,
        paddingLeft: theme.spacing(3.75),
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    ratingMobile: {
        fontSize: '16px',
        color: colors.grey2,
        paddingLeft: theme.spacing(0),
        marginBottom: theme.spacing(5),
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'inline-flex',
            marginBottom: theme.spacing(2.5)
        },
    },
    leaveBtn: {
        backgroundColor: colors.primary,
        color: colors.white,
        borderRadius: '0px',
        width: '240px',
        display: 'block',
        '&:hover': {
            opacity: 0.9,
            boxShadow: 'none',
            backgroundColor: colors.primary,
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(1.25),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        fontWeight: '300',
        fontSize: '30px',
        lineHeight: '36px',
        color: colors.mediumEmphasis,
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(1.9),
        },
    },
    subTitle: {
        marginBottom: theme.spacing(2),
        fontSize: '19px',
        fontWeight: '300',
        lineHeight: '27px',
        color: colors.grey3,
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(2),
            color: colors.grey3,
        },
    },
    iconWrap: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            width: '100%',
            paddingBottom: theme.spacing(2.5),
        },
    },
    clearIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            marginTop: theme.spacing(7.5),
            cursor: 'pointer',
        },
    },
    backBtn: {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    reviewsSm: {
        display: 'block',
        fontSize: '30px',
        fontWeight: 'lighter',
        color: colors.mediumEmphasis,
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            top: '55px',
            left: '34%',
            fontSize: '18px',
            color: theme.mediumEmphasis,
        },
    },
    leaveBtnSm: {
        display: 'none',
        color: colors.white,
        borderRadius: '0px',
        marginTop: theme.spacing(1.25),
        marginBottom: theme.spacing(1.25),
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '92%',
        '&:hover': {
            opacity: 0.9,
            boxShadow: 'none',
            backgroundColor: colors.primary,
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            backgroundColor: colors.primary,
        },
    },
    reviewRate: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const ReviewListing = ({
    onHandleNavigate,
    onBtnClick,
    buttonText,
    reviewsCount,
    heading,
    subHeading,
    reviewDetails
}) => {

    const classes = useStyles();
    return (
        <Box classes={{ root: classes.root }}>
            <Box className={classes.backBtn}>
                <Back navigationHandler={onHandleNavigate} />
            </Box>
            <Box className={classes.header}>
                <Box className={classes.reviewsWrap}>
                    <Box className={classes.reviewRate}>
                        <Box className={classes.iconWrap}>
                            <ClearIcon className={classes.clearIcon} />
                        </Box>
                        <Typography className={classes.reviewsSm}>
                            {`Reviews (${reviewsCount})`}
                        </Typography>
                        <Rating value={5} readOnly className={classes.rating} />
                    </Box>
                    <ButtonComponent color='primary' customClass={classes.leaveBtn} onClick={onBtnClick}>
                        {buttonText}
                    </ButtonComponent>
                </Box>
            </Box>
            <Box className={classes.wrapper}>
                <Typography type="style-1" className={classes.title}>
                    {heading}
                </Typography>
                <Typography type="style-3" className={classes.subTitle}>
                    {subHeading}
                </Typography>
                <Rating value={5} readOnly className={classes.ratingMobile} />
            </Box>
            <ProductReview reviews={reviewDetails} />
            <ButtonComponent customClass={classes.leaveBtnSm} onClick={onBtnClick}>
                {buttonText}
            </ButtonComponent>
        </Box>
    );
};

ReviewListing.propTypes = {
    buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    subHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    reviewDetails: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    reviewsCount: PropTypes.number,
    onBtnClick: PropTypes.func,
    onHandleNavigate: PropTypes.func,
};

ReviewListing.defaultProps = {
    buttonText: '',
    heading: '',
    subHeading: '',
    reviewsCount: 25,
    reviewsCount: [],
    onBtnClick: () => { },
    onHandleNavigate: () => { },
}

export default ReviewListing;
