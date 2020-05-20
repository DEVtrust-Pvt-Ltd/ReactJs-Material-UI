import React from 'react';
import PropTypes from "prop-types";
import { Typography, Box, TextField, Select, FormControl, InputLabel, Checkbox, makeStyles } from '@material-ui/core';
import { colors } from '@cxa-shop-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2.5),
        display: "flex",
        cursor: "pointer",
        height: "100%",
        width: "50%",
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
            width: "90%",
        },
    },
    text: {
        display: 'block',
        marginTop: theme.spacing(2.5),
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
    textFieldWrap: {
        display: 'flex'
    },
    city: {
        display: 'block',
        marginTop: theme.spacing(2.5),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(2.125)
        },
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
        paddingRight: theme.spacing(3.75)
    },
    province: {
        display: 'block',
        marginTop: theme.spacing(2.5),
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
    formControl: {
        marginTop: theme.spacing(2.5),
        width: '100%',
        paddingRight: theme.spacing(3.75),
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
            paddingRight: theme.spacing(2.125)
        },
    },
    zipCode: {
        display: 'block',
        marginTop: theme.spacing(2.5),
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
    saveAddress: {
        marginTop: theme.spacing(2.5),
        fontSize: '14px',
        lineHeight: '20px',
        color: colors.mediumEmphasis,
    },
    checkbox: {
        "&$checked": {
            color: colors.success,
        },
    },
    checked: {},
}));

export const Address = ({
    country,
    checked,
    value,
    onChange,
}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" className={classes.text} fullWidth='true' label="FullName"
                        variant="outlined"
                        onChange={onChange}
                        name='fullName'
                        value={value}
                    />
                    <TextField id="outlined-basic" className={classes.text} fullWidth='true' label="Address Line 1"
                        variant="outlined"
                        onChange={onChange}
                        name='address1'
                        value={value}
                    />
                    <TextField id="outlined-basic" className={classes.text} fullWidth='true' label="Address Line 2"
                        variant="outlined"
                        onChange={onChange}
                        name='address2'
                        value={value}
                    />
                    <Box className={classes.textFieldWrap}>
                        <TextField id="outlined-basic" className={classes.city} fullWidth='true' label="City"
                            variant="outlined"
                            onChange={onChange}
                            name='city'
                            value={value}
                        />
                        <TextField id="outlined-basic" className={classes.province} fullWidth='true' label="Province"
                            variant="outlined"
                            onChange={onChange}
                            name='province'
                            value={value}
                        />
                    </Box>
                    <Box className={classes.textFieldWrap}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-country-native-simple">Country</InputLabel>
                            <Select
                                native
                                value={value}
                                onChange={onChange}
                                label="Country"
                                inputProps={{
                                    name: 'country',
                                    id: 'outlined-country-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                {country.map((c, i) => {
                                    return (<option value={c.value}>{c.name}</option>)
                                })}
                            </Select>
                        </FormControl>
                        <TextField id="outlined-basic" className={classes.zipCode} fullWidth='true' label="Zip Code"
                            variant="outlined"
                            onChange={onChange}
                            name='ZipCode'
                            value={value}
                        />
                    </Box>
                </form>
            </Box>
            <Typography className={classes.saveAddress}>Save this delivery address
            <Checkbox
                    classes={{ root: classes.checkbox, checked: classes.checked }}
                    checked={checked}
                    onChange={onChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Typography>
        </Box>
    );
};

Address.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    checked: PropTypes.bool.isRequired,
    country: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.shape({})),
    ]),
    onChange: PropTypes.func,
};

Address.defaultProps = {
    value: '',
    checked: false,
    country: [],
    onChange: () => { },
}

export default Address;
