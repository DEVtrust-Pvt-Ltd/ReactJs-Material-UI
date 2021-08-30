import React from 'react';
import { Typography, Box, TextField, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ClearIcon from '@material-ui/icons/Clear';
import * as PropTypes from 'prop-types';
import { Back, ButtonComponent } from '@cxa-shop-ui/atoms'
import { colors } from '@cxa-shop-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2.5),
        display: "flex",
        cursor: "pointer",
        height: "100%",
        flexDirection: "column"
    },
    text: {
        display: 'block',
        marginTop: '2%',
        "& .MuiFormLabel-root": {
            "&.Mui-focused": {
                color: colors.mediumEmphasis,
            }
        },
        "& .Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
                border: `solid 1px ${colors.veryLightGray}`,
            }
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2.5),
        },
    },
    textarea: {
        display: 'block',
        marginTop: '2%',
        "& .MuiFormLabel-root": {
            "&.Mui-focused": {
                color: 'grey',
            }
        },
        "& .Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
                border: `solid 1px ${colors.veryLightGray}`,
            }
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
        },
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        fontWeight: '300',
        fontSize: '30px',
        lineHeight: '36px',
        color: colors.mediumEmphasis,
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            top: '45px',
            right: '35%',
            fontSize: '22px',
        },
    },
    subTitle: {
        marginBottom: theme.spacing(1.25),
        fontSize: '30px',
        fontWeight: '300',
        lineHeight: '27px',
        color: colors.grey3,
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(2),
            color: colors.grey3,
            marginTop: theme.spacing(3.25),
            fontWeight: '600',
            fontSize: '22px'
        },
    },
    titleDetails: {
        fontWeight: '300',
        fontSize: '19px',
        lineHeight: '27px',
        paddingBottom: theme.spacing(8),
        color: theme.grey3,
        [theme.breakpoints.down('sm')]: {
            paddingBottom: theme.spacing(5),
        },
    },
    ratingTitle: {
        fontWeight: 'bold',
        lineHeight: '20px',
        marginBottom: theme.spacing(1.25),
        [theme.breakpoints.down('sm')]: {
            fontWeight: '500',
            color: colors.mediumEmphasis
        },
    },
    leaveBtn: {
        textAlign: 'end',
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(2.5),
        marginLeft: '10%',
        marginRight: '10%',
    },
    clearicon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            marginTop: theme.spacing(7.5),
        },
    },
    rating: {
        color: colors.grey2,
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1.25),
        },
    },
    backbtn: {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    iconwrap: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            borderBottom: `1px solid ${colors.platinum}`,
            width: '100%',
            paddingBottom: theme.spacing(2.5),
        },
    },
    subbtn: {
        borderRadius: '0px',
        width: '100px',
        backgroundColor: colors.primary,
        color: colors.white,
        "&:hover": {
            backgroundColor: colors.primary,
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    textboxhide: {
        display: 'none',
        "& .MuiFormLabel-root": {
            "&.Mui-focused": {
                color: colors.mediumEmphasis,
            }
        },
        "& .Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
                border: `solid 1px ${colors.veryLightGray}`,
            }
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            marginTop: theme.spacing(2.5)
        },
    },
    ratingWrap: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
    }
}));

export const LeaveReview = ({
    onHandleNavigate,
    onHandleSubmit,
    onChange,
    value,
    title,
    heading,
    subHeading,
    maxRating,
    rating,
    precision,
}) => {
    const classes = useStyles();
    const [ratingValue, setRatingValue] = React.useState(rating);

    return (
        <Box className={classes.root}>
            <Box className={classes.backbtn}>
                <Back navigationHandler={onHandleNavigate} />
            </Box>
            <Box className={classes.iconwrap}>
                <ClearIcon className={classes.clearicon} onClick={onHandleNavigate} />
            </Box>
            <Typography className={classes.title}>
                {title}
            </Typography>
            <Typography type="style-1" className={classes.subTitle}>
                {heading}
            </Typography>
            <Typography type="style-2" className={classes.titleDetails}>
                {subHeading}
            </Typography>
            <Box className={classes.ratingWrap}>
                <Typography className={classes.ratingTitle} component="legend">Rating</Typography>
                <Rating
                    name="rating"
                    max={maxRating}
                    precision={precision}
                    value={ratingValue}
                    onChange={(event, newValue) => {
                        setRatingValue(newValue);
                    }}
                    className={classes.rating}
                />
            </Box>
            <Box>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" className={classes.textboxhide} fullWidth='true' label="Name"
                        variant="outlined"
                        onChange={onChange}
                        name='Name'
                        value={value}
                    />
                    <TextField id="outlined-basic" className={classes.text} fullWidth='true' label="HeadLine"
                        variant="outlined"
                        onChange={onChange}
                        name='HeadLine'
                        value={value}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Write your review"
                        multiline
                        rows="5"
                        variant="outlined"
                        fullWidth='true'
                        className={classes.textarea}
                        onChange={onChange}
                        name='Review'
                        value={value}
                    />
                    <Box className={classes.leaveBtn}>
                        <ButtonComponent customClass={classes.subbtn} onClick={onHandleSubmit}>
                            Submit
                        </ButtonComponent>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

LeaveReview.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    subHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    rating: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    maxRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    precision: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onHandleNavigate: PropTypes.func,
    onHandleSubmit: PropTypes.func,
};

LeaveReview.defaultProps = {
    title: '',
    heading: '',
    subHeading: '',
    value: '',
    rating: false,
    precision: 0.5,
    maxRating: 5,
    onChange: () => { },
    onHandleNavigate: () => { },
    onHandleSubmit: () => { }
}

export default LeaveReview;
