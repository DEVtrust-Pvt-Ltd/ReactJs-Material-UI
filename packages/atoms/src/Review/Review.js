import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { colors } from "@cxa-shop-ui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        borderBottom: `1px solid ${colors.veryLightGray}`,
        paddingTop: theme.spacing(1.25),
        paddingBottom: theme.spacing(1.25),
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
    },
    author: {
        textTransform: "capitalize",
        fontWeight: 600,
        fontSize: "16px",
        color: colors.mediumEmphasis,
        marginBottom: theme.spacing(0),
    },
    date: {
        fontWeight: 600,
        fontSize: "14px",
        color: colors.mediumEmphasis,
    },
    message: {
        fontWeight: 450,
        width: '100px',
        fontSize: "14px",
        color: colors.mediumEmphasis,
        marginBottom: theme.spacing(1.25),
        marginTop: theme.spacing(0),
    },
    read_more: {
        fontWeight: 600,
        fontSize: "16px",
        color: colors.mediumEmphasis,
    },
    rateWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: theme.spacing(0.7),
    },
    rating: {
        fontSize: '16px',
        color: colors.grey2,
        marginTop: theme.spacing(1.25),
        marginBottom: theme.spacing(1.25),
        marginRight: theme.spacing(0),
        marginLeft: theme.spacing(0),
    },
}));

const Review = ({
    author,
    date,
    message,
    charLimit,
    readMoreText,
    hideFullText,
    maxRating,
    rating,
    precision,
    disabled,
}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState(rating);

    useEffect(() => setValue(rating));

    const classes = useStyles();

    const finalMessage = () => {
        return message.length > charLimit && !open
            ? message.slice(0, charLimit) + "..."
            : message;
    };

    const showButton = () => {
        return message.length > charLimit;
    };

    const toggleMessage = () => {
        setOpen((state) => !state);
    };

    const buttonText = () => {
        let text = readMoreText;

        if (open) {
            text = hideFullText;
        }
        return text;
    };

    return (
        <Box className={classes.container}>
            <Box className={classes.rateWrap}>
                {author && <span className={classes.author}>{author}</span>}
                <span className={classes.date}>{date}</span>
            </Box>

            {rating > 0 && (
                <Box>
                    <Rating
                        name="review"
                        max={maxRating}
                        precision={precision}
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        disabled={disabled}
                        className={classes.rating}
                    />
                </Box>
            )}

            {message && (
                <Box>
                    <span className={classes.message}>
                        {finalMessage()} &nbsp;
                        {showButton() && (
                            <span onClick={toggleMessage} className={classes.read_more}>
                                {buttonText()}
                            </span>
                        )}
                    </span>
                </Box>
            )}
        </Box>
    );
};

Review.propTypes = {
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    author: PropTypes.string,
    date: PropTypes.string,
    disabled: PropTypes.bool,
    rating: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    maxRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    precision: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    charLimit: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    readMoreText: PropTypes.string,
    hideFullText: PropTypes.string,
};

Review.defaultProps = {
    /**
     * Author of the review
     */
    author: "",
    /**
     * Date of the review
     */
    date: "",
    /**
     * Message from the reviewer
     */
    message: "",
    /**
     * Rating from the reviewer
     */
    rating: false,

    /**
     * Rating from the reviewer
     */
    disabled: true,
    /**
     * Precision of the review
     */
    precision: 0.5,
    /**
     * Max rating for the review
     */
    maxRating: 5,
    /**
     * Char limit for the review
     */
    charLimit: 250,
    /**
     * Read more text for the review
     */
    readMoreText: "Read more",
    /**
     * Hide full text message for the review
     */
    hideFullText: "Read less",
};

export default Review;
