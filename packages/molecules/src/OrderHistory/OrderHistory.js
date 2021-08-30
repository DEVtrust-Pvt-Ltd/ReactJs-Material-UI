import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { colors } from "@cxa-shop-ui/styles";
import { Order } from "@cxa-shop-ui/atoms";

const useStyles = makeStyles((theme) => ({
  row: {
    flexDirection: "row",
    width: "100%",
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
}));

const OrderHistory = ({ heading, orders, onClick }) => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Typography type="style-1" className={classes.subTitle}>
        {heading}
      </Typography>
      {orders.map((order, index) => (
        <Box key={index}>
          <Order
            dateOfOrder={order.dateOfOrder}
            orderNo={order.orderNo}
            totalAmount={order.totalAmount}
            totalCount={order.totalCount}
            orders={order.orders.qty}
            onClick={onClick}
          />
        </Box>
      ))}
    </Box>
  );
};

OrderHistory.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  orders: PropTypes.array,
  onClick: PropTypes.func,
};

OrderHistory.defaultProps = {
  heading: '',
  orders: [],
  onClick: () => { }
};

export default OrderHistory;
