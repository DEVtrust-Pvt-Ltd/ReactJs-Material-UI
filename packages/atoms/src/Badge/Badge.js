import React from "react";
import PropTypes from "prop-types";
import {Box, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import colors from "@cxa-shop-ui/styles/src/colors";
import classnames from 'classnames';

const useStyles = makeStyles(theme => ({
   
badge: {fontWeight: '300', backgroundColor:colors.badge, color:colors.white, padding:'12px 16px', display:'inline-block', fontSize:'12px', },
badgeFullWidth: {display:'block', textAlign:'center'},
colorPrimary: {backgroundColor:colors.primary},
colorSecondary: {backgroundColor:colors.secondary},
colorWarning: {backgroundColor:colors.warning},
colorDanger: {backgroundColor:colors.error,},
colorInfo: {backgroundColor:colors.info},
colorSuccess: {backgroundColor:colors.success},
roundedBadge:{padding:'10px', height:'25px', width:'25px', borderRadius:'50%', textAlign:'center'},
label:{fontWeight:'500'},
offHide: { display: 'none' }
}));


const Badge = ({ label,classname,discountOff='',discountFlag}) => {    
  const classes = useStyles();
  const classFinalName=(classname)?classname.map((element, index) =>{
    return (classes[element]!=undefined)?classes[element]:''
  }):'';

  return (
    <>    
      <Box component="span" className={classnames(discountFlag  ? classes.roundedBadge:'', classFinalName ,classes.badge) } fontFamily="fontFamily">
        <Box className={classes.label}>{label}</Box>
        {discountFlag ? (<Box >{discountOff}</Box> ):(<Box className={classes.offHide}>{discountOff}</Box> )}        
    </Box>     
    </>
  );
};

Badge.propTypes = {
  classname: PropTypes.arrayOf(PropTypes.string),
  discountOff:PropTypes.string
};

Badge.default = {
  label: 'Limited',
  classname: [Badge]
};
export default Badge;