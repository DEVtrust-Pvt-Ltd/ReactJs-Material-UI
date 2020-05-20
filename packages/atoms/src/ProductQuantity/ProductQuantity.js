import React from "react";
import { Box, Typography, TextField, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { ButtonComponent } from "@cxa-shop-ui/atoms";
import { colors } from "@cxa-shop-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.primary,
        color: colors.white,
        fontSize: theme.spacing(3),
        padding: theme.spacing(0),
        height: '45px',
        minHeight: '48px ! important',
        minWidth: '56px ! important',
        borderRadius: 0,
        '&:hover': {
            backgroundColor: colors.primary,
        }
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    quantityValue: {
        width: '70px',
        height: '56px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid rgba(0, 0, 0, 0.32) !important',
        borderRadius: '4px',
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
        marginRight: theme.spacing(2.25),
        marginLeft: theme.spacing(2.25),
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
        },
        "& .MuiInputBase-root": {
            paddingTop: theme.spacing(0.5),
            paddingBottom: theme.spacing(0),
            paddingLeft: theme.spacing(2.25),
            paddingRight: theme.spacing(1.3),
        }
    },
    quantity: {
        marginRight: theme.spacing(3),
        fontWeight: 300,
        fontSize: '19px',
        fontStyle: 'normal',
        lineHeight: '27px',
        color: colors.highEmphasis,
    }
}));

export const ProductQuantity = ({ quantityValue }) => {
    const classes = useStyles();

    const [quantity, setQuantity] = React.useState(quantityValue || 1);

    const addQuantity = () => {
        setQuantity(quantity + 1);
    };

    const removeQuantity = () => {
        if (quantity === 1)
            setQuantity(1);
        else
            setQuantity(quantity - 1);
    };

    const handleChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    return (
        <Box className={classes.root}>
            <Typography className={classes.quantity}>Quantity</Typography>
            <Box className={classes.wrapper}>
                <ButtonComponent customClass={classes.button} onClick={removeQuantity}>-</ButtonComponent>
                <TextField
                    id="margin-none"
                    type="number"
                    value={quantity}
                    className={classes.quantityValue}
                    onChange={handleChange}
                    InputProps={{
                        disableUnderline: true,
                    }}
                    inputProps={{
                        min: "0"
                    }}
                />
                <ButtonComponent customClass={classes.button} onClick={addQuantity}>+</ButtonComponent>
            </Box>
        </Box>
    );
};

ProductQuantity.propTypes = {
    quantityValue: PropTypes.number,
};

ProductQuantity.default = {
    quantityValue: 1
};

export default ProductQuantity;
