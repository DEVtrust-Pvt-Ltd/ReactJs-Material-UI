import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { colors } from "@cxa-shop-ui/styles";
import { ButtonComponent } from "@cxa-shop-ui/atoms";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& .MuiBox-root': {
            width: '100%',
        }
    },
    heading: {
        fontWeight: 300,
        fontSize: '30px',
        lineHeight: '36px',
        marginBottom: theme.spacing(2.5),
        letterSpacing: '-1.5px',
        color: colors.highEmphasis,
    },
    secondaryHeading: {
        fontSize: '19px',
        color: colors.mediumEmphasis,
        fontWeight: '300',
        lineHeight: '27px',
    },
    hideBorder: {
        padding: theme.spacing(0),
        '&.MuiExpansionPanel-root': {
            boxShadow: 'none',
            borderBottom: `1px solid ${colors.grey1}`,
            '&:before': {
                content: 'none'
            }
        },
        '& .MuiExpansionPanelSummary-root': {
            padding: theme.spacing(0)
        }
    },
    rating: {
        fontSize: '16px',
        color: colors.highEmphasis,
        paddingLeft: theme.spacing(1),
        paddingTop: theme.spacing(1)
    },
    reviewCount: {
        fontSize: '19px',
        color: colors.mediumEmphasis,
        fontWeight: '300',
        lineHeight: '27px',
        paddingLeft: theme.spacing(1.25)
    },
    btn: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '20px',
        borderRadius: 0,
        marginBottom: theme.spacing(3.75),
        textAlign: 'center',
        color: colors.highEmphasis,
        flex: 'none',
        order: '0',
        alignSelf: 'center',
        margin: '8px 0px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    row: {
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(0),
    }
}));

const Accordion = ({
    review,
    productDetail,
    selfContent,
    reviewCount,
    moreDetailContent,
    moreProductDetails,
    selfCollectionDetails,
    Reviews,
    onClick
}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box className={classes.root}>
            <Typography className={classes.heading}>{moreDetailContent}</Typography>
            <ExpansionPanel className={classes.hideBorder} expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.secondaryHeading}>{moreProductDetails}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {productDetail}
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.hideBorder} expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.secondaryHeading}>{selfCollectionDetails}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {selfContent}
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.hideBorder} expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.secondaryHeading}>{Reviews} </Typography>
                    <Typography className={classes.reviewCount}>{`(${reviewCount})`} </Typography>
                    <Typography>
                        <Rating
                            name="review"
                            max={5}
                            value={5}
                            disabled={true}
                            className={classes.rating}
                        />
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.row}>
                    <Box>
                        {review}
                    </Box>
                </ExpansionPanelDetails>
                <ButtonComponent customClass={classes.btn} onClick={onClick}>See all Reviews</ButtonComponent>
            </ExpansionPanel>
        </Box>
    );
};

Accordion.propTypes = {
    reviewCount: PropTypes.number,
    review: PropTypes.node,
    productDetail: PropTypes.node,
    selfContent: PropTypes.node,
    moreDetailContent: PropTypes.node,
    MoreProductDetails: PropTypes.node,
    SelfCollectionDetails: PropTypes.node,
    Reviews: PropTypes.node,
    onClick: PropTypes.func,
};

Accordion.defaultProps = {
    reviewCount: 25,
    review: <></>,
    productDetail: <></>,
    selfContent: <></>,
    moreDetailContent: <></>,
    moreProductDetails: <></>,
    selfCollectionDetails: <></>,
    Reviews: <></>,
    onClick: () => { }
};

export default Accordion;
