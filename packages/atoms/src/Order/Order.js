import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { colors } from "@cxa-shop-ui/styles";
import { ButtonComponent } from "@cxa-shop-ui/atoms"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2.5),
        display: "flex",
        cursor: "pointer",
        height: "100%",
        flexDirection: "column"
    },

    detail: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    btnOrder: {
        textAlign: 'end',
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(2.5),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
    },
    btn: {
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
    btnsm: {
        display: 'none',
        color: colors.white,
        borderRadius: '0px',
        marginTop: theme.spacing(1.25),
        marginBottom: theme.spacing(1.25),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        minWidth: '100% !important',
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
    qty: {
        marginBottom: theme.spacing(1.25),
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '200',
        color: colors.mediumEmphasis
    },
    qtyWrap: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '200'
    },
    borderBottom: {
        borderBottom: `1px solid ${colors.platinum}`
    },
    orderAmt: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(1.25)
    }
}));

const Order = ({
    orderNo,
    dateOfOrder,
    totalCount,
    totalAmount,
    orders,
    onClick
}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.borderBottom}>
                <Box>
                    <Typography type="style-2" className={classes.detail}>
                        <Typography>Order no. : {orderNo} </Typography>
                        <Typography>{dateOfOrder}</Typography>
                        <Box className={classes.orderAmt}>
                            <Typography>{`Total (${totalCount} items)`}</Typography> <Typography> {`HK$ ${totalAmount}`}</Typography>
                        </Box>
                        <ButtonComponent customClass={classes.btn} onClick={onClick}>
                            View Order History
                </ButtonComponent>
                    </Typography>
                </Box>
                {orders.map((order, index) => {
                    return (
                        <Box key={index}>
                            <Typography className={classes.qtyWrap}>
                                {order.title}
                            </Typography>
                            <Typography className={classes.qty}>
                                Qty: {order.qty}
                            </Typography>
                        </Box>
                    )
                })}
                <Box className={classes.btnOrder}>
                    <ButtonComponent customClass={classes.btnsm} onClick={onClick}>
                        View Order History
                </ButtonComponent>
                </Box>
            </Box>
        </Box>
    );
};

Order.propTypes = {
    orderNo: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    dateOfOrder: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    totalCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    totalAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    orders: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.shape({})),
    ]),
    onClick: PropTypes.func,
};

Order.defaultProps = {
    orderNo: '',
    dateOfOrder: '',
    totalCount: 4,
    totalAmount: 1812,
    orders: [],
    onClick: () => { }
};

export default Order;
