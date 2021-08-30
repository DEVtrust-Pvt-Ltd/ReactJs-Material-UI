import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, FormControl, FormHelperText, RadioGroup, OutlinedInput, makeStyles } from '@material-ui/core'
import clsx from "clsx";
import { colors } from "@cxa-shop-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: theme.spacing(5),
    },
    label: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontize: '19px',
        lineHeight: '27px',
        color: colors.highEmphasis,
    },
    margin: {
        marginTop: theme.spacing(5),
    },
    textField: {
        width: '50ch',
        borderRadius: '4px',
        border: `1px solid ${colors.lowEmphasis}`,
        boxSizing: 'border-box',
        marginTop: theme.spacing(3.1),
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
    },
    group: {
        marginTop: theme.spacing(3.75)
    },
    optional: {
        marginLeft: theme.spacing(1.9),
        color: colors.mediumEmphasis,
        fontSize: '11px',
        lineHeight: '13px',
    }
}));

export const DeliveryOption = (props) => {
    const { value, name, onChange, label, children, errorText, inputValue } = props;
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <FormControl error={!!errorText}>
                <Typography className={classes.label}>{label}</Typography>
                <RadioGroup
                    className={classes.group}
                    aria-label={name}
                    name={name}
                    data-id="radio-group"
                    value={value}
                    onChange={onChange}
                >
                    {children}
                </RadioGroup>
                <FormHelperText>{errorText}</FormHelperText>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <OutlinedInput
                        id="vendor-instruction"
                        value={inputValue}
                        onChange={onChange}
                        placeholder="Special instruction for vendor"
                        labelWidth={0}
                    />
                </FormControl>
                <FormHelperText id="outlined-vendor-instruction" className={classes.optional}>optional</FormHelperText>
            </FormControl>
        </Box>
    );
};

DeliveryOption.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.string,
    children: PropTypes.node,
    errorText: PropTypes.string,
    inputValue: PropTypes.string,
}

DeliveryOption.defaultProps = {
    label: '',
    children: <></>,
    errorText: '',
    onChange: () => {
    }
}

export default DeliveryOption;
