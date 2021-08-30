import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { colors } from "@cxa-shop-ui/styles";

const useStyles = makeStyles((theme) => ({
    content: {
        marginBottom: theme.spacing(1.25),
        fontSize: '14px',
        fontWeight: '300',
        color: colors.mediumEmphasis
    }
}));

const MoreProductDetails = ({
    question,
    topical,
    content
}) => {
    const classes = useStyles();
    return (
        <Box>
            <Box>
                <Typography className={classes.content}>{question}</Typography>
            </Box>
            <Box><Typography className={classes.content}>{topical}:</Typography>
            </Box>
            <Box>
                <Typography className={classes.content}>{content}</Typography>
            </Box>
        </Box>
    );
};

MoreProductDetails.propTypes = {
    question: PropTypes.string,
    topical: PropTypes.string,
    content: PropTypes.string,
};

MoreProductDetails.defaultProps = {
    question: "",
    topical: "",
    content: "",
};

export default MoreProductDetails;
