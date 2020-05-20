import React from 'react'
import PropTypes from 'prop-types'
import { Button as ButtonMUI } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { colors } from "@cxa-shop-ui/styles";

const styles = theme => ({
    root: {
        borderRadius: '0px',
        borderColor: colors.primary,
        '&:hover': {
            opacity: 0.9,
            boxShadow: 'none',
            backgroundColor: colors.primary,
        },
        boxShadow: 'none',
        flexGrow: '1',
        flexBasis: '0',
        lineHeight: 1,
        backgroundColor: colors.primary,
        color: colors.white
    }
})
export const Button = (props) => {
    const {
        primary,
        disabled,
        children,
        width,
        classes,
        fullWidth,
        onClick,
        size,
        customClass
    } = props
    const variant = primary ? 'contained' : 'outlined'
    let height
    switch (size) {
        case 'small':
            height = '30px'
            break
        case 'medium':
            height = '40px'
            break
        default:
            height = '50px'
    }
    return (
        <ButtonMUI
            variant={variant}
            data-id="btn"
            color={colors.primary}
            fullWidth={fullWidth}
            disabled={disabled}
            style={{ minHeight: height, minWidth: width }}
            className={customClass ? customClass : classes.root}
            onClick={onClick}
        >
            {children}
        </ButtonMUI>
    )
}

Button.propTypes = {
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string,
    size: PropTypes.string,
    fullWidth: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    classes: PropTypes.objectOf(PropTypes.any),
    onClick: PropTypes.func,
    color: PropTypes.string
}

Button.defaultProps = {
    primary: false,
    disabled: false,
    children: '',
    size: 'large',
    fullWidth: false,
    width: 50,
    classes: {},
    onClick: () => { },
    color: colors.primary
}

export default withStyles(styles)(Button)