import React from 'react';
import * as PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { colors } from '@cxa-shop-ui/styles';
import { ButtonComponent } from '@cxa-shop-ui/atoms'

const useStyles = makeStyles(theme => ({
  root: {
    listStyle: 'none',
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    columnCount: 2,
    columnGap: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      columnCount: 1,
    },
  },
  heading: {
    fontWeight: '300',
    fontSize: '30px',
    lineHeight: '36px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  allProduct: {
    width: '100%',
    marginTop: theme.spacing(2.5),
    marginRight: theme.spacing(0),
    marginBottom: theme.spacing(2.5),
    marginLeft: theme.spacing(0),
    padding: theme.spacing(0),
    position: 'relative',
    "& .MuiTypography-root": {
      color: colors.mediumEmphasis,
    },
    [theme.breakpoints.down('sm')]: {
      "& .MuiButtonBase-root": {
        position: 'absolute',
        top: '-9',
        right: '0'
      },
      "& .MuiTypography-root": {
        marginLeft: theme.spacing(2.5),
        color: colors.mediumEmphasis,
      }
    },
  },
  category: {
    background: colors.white,
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05)',
    borderRadius: '4px',
    padding: theme.spacing(1.25),
    backgroundColor: theme.white,
    marginBottom: theme.spacing(1.86),
    listStyle: 'none',
    position: 'inherit',
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(0),
      borderBottom: `solid 1px ${colors.platinum}`,
      backgroundColor: theme.background,
      paddingBottom: theme.spacing(2.4),
      boxShadow: 'none',
      borderRadius: '0',
    },
  },
  subCategoryUi: {
    padding: 0,
    listStyle: 'none',
  },
  subCategoryLi: {
    paddingTop: theme.spacing(2),
    color: theme.mediumEmphasis,
    position: 'relative',

    [theme.breakpoints.down('sm')]: {
      "& .MuiButtonBase-root": {
        position: 'absolute',
        top: '0',
        right: '0'
      },
    },
  },
  subCategoryLabel: {
    fontSize: '14px',
    color: colors.mediumEmphasis,
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1.25)
    },
  },
  text: {
    paddingLeft: theme.spacing(1.25),
    fontWeight: 'bold',
  },
  applyBtn: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: '0px',
    width: '70px',
    marginRight: '2%',
    padding: theme.spacing(0),
    display: 'block',
    '&:hover': {
      opacity: 0.9,
      boxShadow: 'none',
      backgroundColor: colors.primary,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  applyBtnSm: {
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
  iconwrap: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      borderBottom: `1px solid ${colors.platinum}`,
      width: '100%',
      paddingBottom: theme.spacing(2.5),
      marginTop: theme.spacing(3.75),
    },
  },
  title: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      position: 'absolute',
      top: '25px',
      right: '35%',
      fontSize: '22px',
    },
  },
  btnWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2.5),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  btnWrapSm: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  checkbox: {
    "&$checked": {
      color: colors.success,
    },
  },
  checked: {},
}));


const Categories = ({ btnText, heading, title, checked, categories, onHandleApply, onChange, onHandleNavigate }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.btnWrap}>
        <Typography type="style-1" className={classes.heading}>{heading}</Typography>
        <ButtonComponent color='primary' customClass={classes.applyBtn} onClick={onHandleApply}>
          {btnText}
        </ButtonComponent>
      </Box>
      <Box className={classes.btnWrapSm}>
        <Box className={classes.iconwrap}>
          <ClearIcon className={classes.clearicon} onClick={onHandleNavigate} />
        </Box>
        <Typography className={classes.title}>
          {title}
        </Typography>
      </Box>
      <FormControlLabel
        control={
          <Checkbox
            value={'all'}
            checked={checked}
            name="all"
            onChange={onChange}
            classes={{ root: classes.checkbox, checked: classes.checked }} />
        }
        label={'All product'}
        className={classes.allProduct}
      />
      <ul className={classes.root}>
        {categories.map(
          (category, index) => {
            return (
              <li className={classes.category}>
                <strong>
                  <Typography type="style-4" className={classes.text}>{category.name}</Typography>
                </strong>
                <ul className={classes.subCategoryUi}>
                  {category.subCategories.map(subCategory => (
                    <li className={classes.subCategoryLi}>
                      <Checkbox
                        value={subCategory.id}
                        name={subCategory.name}
                        checked={checked}
                        classes={{ root: classes.checkbox, checked: classes.checked }}
                        onChange={onChange}
                      />
                      <span className={classes.subCategoryLabel}>
                        {subCategory.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            )
          },
        )}
      </ul>
      <ButtonComponent customClass={classes.applyBtnSm} onClick={onHandleApply}>
        {btnText}
      </ButtonComponent>
    </Box>
  );
};

Categories.propTypes = {
  btnText: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  checked: PropTypes.bool.isRequired,
  categories: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  onHandleApply: PropTypes.func.isRequired,
  onHandleNavigate: PropTypes.func,
};

Categories.defaultProps = {
  btnText: '',
  heading: '',
  title: '',
  checked: false,
  categories: [],
  onChange: () => { },
  onHandleApply: () => { },
  onHandleNavigate: () => { },
}

export default Categories;
