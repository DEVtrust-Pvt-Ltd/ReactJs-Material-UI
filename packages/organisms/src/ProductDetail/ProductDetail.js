import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { colors } from "@cxa-shop-ui/styles";
import { Back, Gallery, ProductQuantity, DeliveryOptions, RadioComponent, MoreProductDetail, SelfCollectionDetail, ButtonComponent } from "@cxa-shop-ui/atoms"
import { ProductReview } from '@cxa-shop-ui/molecules'
import { Accordion } from '@cxa-shop-ui/organisms'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2.5),
        display: "flex",
        cursor: "pointer",
        height: "100%",
        flexDirection: "column"
    },
    subTitle: {
        marginBottom: theme.spacing(1),
        fontSize: '30px',
        fontWeight: '300',
        lineHeight: '36px',
        fontStyle: 'normal',
        color: colors.highEmphasis,
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(2),
            color: colors.grey3,
            marginTop: theme.spacing(3.25),
            fontWeight: '600',
            fontSize: '22px'
        },
    },
    titleDetails: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '19px',
        lineHeight: '27px',
        paddingBottom: theme.spacing(3),
        color: colors.grey3,
        [theme.breakpoints.down('sm')]: {
            paddingBottom: theme.spacing(5),
        },
    },
    offPrice: {
        display: 'flex',
        alignItems: 'center'
    },
    oldRate: {
        color: colors.mediumEmphasis,
        paddingRight: theme.spacing(1)
    },
    newPrice: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '23px',
        lineHeight: '32px',
        marginBottom: theme.spacing(4),
        color: colors.highEmphasis,
    },
    btnAddToCart: {
        textAlign: 'end',
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(2.5),
        marginLeft: theme.spacing(1.25),
        marginRight: theme.spacing(1.25),
    },
    backbtn: {
        display: 'block',
        marginBottom: theme.spacing(5),
    },
    productWrap: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    galleryWrap: {
        flex: '0 0 50%',
        maxWidth: '50%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        },
    },
    orderWrap: {
        flex: '0 0 50%',
        maxWidth: '50%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        },
    },
    orderWrapMain: {
        padding: theme.spacing(1.25),
        marginTop: theme.spacing(1.75),
        marginBottom: theme.spacing(1.75),
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05)',
        borderRadius: '4px',
    },
    customizeOrderTitle: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '23px',
        lineHeight: '32px',
        marginBottom: theme.spacing(3.5),
    },
    btn: {
        marginTop: theme.spacing(7.5),
        backgroundColor: colors.primary,
        color: colors.white,
        minHeight: '40px',
        borderRadius: 0,
        '&:hover': {
            backgroundColor: colors.primary,
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    productDetails: {
        padding: '30px 0',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '20px',
        color: colors.mediumEmphasis,
        borderBottom: `1px solid ${colors.grey1}`,
        letterSpacing: '0.25px'
    },
    accordion: {
        flex: '0 0 50%',
        maxWidth: '50%',
        marginBottom: theme.spacing(3.75),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        marginTop: theme.spacing(3.75),
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        },
    },
    btnsm: {
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
}));


const ProductDetail = ({
    heading,
    subHeading,
    oldPrice,
    newPrice,
    offRate,
    products,
    productDetail,
    orderHeading,
    onHandleNavigate,
    onChange,
    onHandleCart,
    onHandleReview,
    reviewCount,
    moreDetails,
    productReview
}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.backbtn}>
                <Back navigationHandler={onHandleNavigate} />
            </Box>
            <Typography type="style-1" className={classes.subTitle}>
                {heading}
            </Typography>
            <Typography type="style-2" className={classes.titleDetails}>
                {subHeading}
            </Typography>
            <Box type="style-1" className={classes.offPrice}>
                <Typography className={classes.oldRate}><s> HK ${oldPrice}</s></Typography> {offRate}% OFF
            </Box>
            <Typography type="style-2" className={classes.newPrice}>
                HK ${newPrice}
            </Typography>
            <Box className={classes.productWrap}>
                <Box className={classes.galleryWrap}>
                    <Gallery products={products} />
                    <Typography className={classes.productDetail}>
                        {productDetail}
                    </Typography>
                </Box>
                <Box className={classes.orderWrap}>
                    <Box className={classes.orderWrapMain}>
                        <Typography className={classes.customizeOrderTitle}>
                            {orderHeading}
                        </Typography>
                        <Box>
                            <ProductQuantity quantityValue={1} />
                        </Box>
                        <Box>
                            <DeliveryOptions label="Delivery or Self-collection" value='Delivery'
                                onChange={onChange}
                                name='Delivery or Self-collection'>
                                <RadioComponent label='Delivery (+HK$ 5.00)'
                                    value='Delivery'
                                    checked={true} />
                                <RadioComponent label="Self-collection (Free)" value="Self-collection" />
                            </DeliveryOptions>
                        </Box>
                        <ButtonComponent customClass={classes.btn} onClick={onHandleCart}>Add to cart</ButtonComponent>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.accordion}>
                <Accordion
                    reviewCount={reviewCount}
                    productDetail={<MoreProductDetail {...moreDetails} />}
                    selfContent={<SelfCollectionDetail {...moreDetails} />}
                    review={<ProductReview reviews={productReview} />}
                    moreDetailContent={<span>More Details</span>}
                    moreProductDetails={<span>More product details</span>}
                    selfCollectionDetails={<span>Self-collection details</span>}
                    Reviews={<span>Reviews</span>}
                    onClick={onHandleReview}
                />
            </Box>
            <Box className={classes.btnAddToCart}>
                <ButtonComponent customClass={classes.btnsm} onClick={onHandleCart}>
                    Add to cart
                </ButtonComponent>
            </Box>
        </Box>
    );
};

ProductDetail.propTypes = {
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    subHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    productDetail: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    orderHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    reviewCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    oldPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    newPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offRate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    moreDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    productReview: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.shape({})),
    ]),
    products: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.shape({})),
    ]),
    onHandleNavigate: PropTypes.func,
    onChange: PropTypes.func,
    onHandleCart: PropTypes.func,
    onHandleReview: PropTypes.func,
};

ProductDetail.defaultProps = {
    heading: '',
    subHeading: '',
    productDetail: '',
    orderHeading: '',
    oldPrice: 50,
    newPrice: 40,
    offRate: 10,
    reviewCount: 25,
    moreDetails: {},
    products: [],
    productReview: [],
    onHandleNavigate: () => { },
    onChange: () => { },
    onHandleCart: () => { },
    onHandleReview: () => { },
};

export default ProductDetail;
