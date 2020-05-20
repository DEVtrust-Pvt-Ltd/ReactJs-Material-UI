import { createMuiTheme } from "@material-ui/core/styles";
import breakpoints from "../breakpoints";
import colors from "../colors";
import typography from "../typography";

const THEME_UNIT_SPACING = 4;

const spacing = (factor) => THEME_UNIT_SPACING * factor;
const spacingX = (factor) => `${spacing(factor)}px`;

const defaultTheme = createMuiTheme({
  ...colors,
  breakpoints,
  typography: { ...typography },
  spacing,
  spacingX,
  palette: {
    type: "light",
    primary: {
      main: colors.primary,
      light: colors.primary,
      dark: colors.primary,
    },
  },
});

defaultTheme.overrides = {
  MuiButton: {
    root: {
      ...typography["button"],
      borderRadius: 0,
      textTransform: "initial",
      height: spacingX(12),
      minHeight: spacingX(10),
      paddingRight: spacingX(5),
      paddingLeft: spacingX(5),
    },
    outlined: {
      paddingRight: spacingX(5),
      paddingLeft: spacingX(5),
    },
    contained: {
      boxShadow: "none",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: colors.hover,
      },
    },
  },

  MuiTab: {
    root: {
      padding: 0,
      textTransform: "capitalize",
      color: colors.highEmphasis,
      borderBottom: `${spacingX(1)} solid transparent`,
      ...typography.body,

      "&": {
        minWidth: "auto",
      },

      "&:hover, &:focus": {
        borderBottom: `${spacingX(1)} solid ${colors.error}`,
      },

      "&$selected": {
        fontWeight: typography.fontWeightBold,
        borderBottom: `${spacingX(1)} solid ${colors.primary}`,
      },
    },
  },

  MuiCard: {
    root: {
      padding: 0,
      "&:last-child": {
        paddingBottom: 0,
      },
      borderRadius: spacingX(1),
      background: colors.background,
      boxShadow: "none",
    },
  },
  MuiCardContent: {
    root: {
      padding: 0,
      "&:last-child": {
        paddingBottom: 0,
      },
    },
  },
  MuiFormControl: {
    root: {
      marginTop: spacingX(4),
      marginBottom: spacingX(4),
    },
  },
  MuiFormHelperText: {
    root: {
      "&$error": {
        color: colors.error,
      },
    },
  },
  MuiFormLabel: {
    root: {
      "&$focused": {
        color: colors.outline,
      },
      "&$error": {
        color: colors.error,
      },
    },
  },
  MuiOutlinedInput: {
    input: {
      paddingLeft: spacingX(4),
    },
    notchedOutline: {
      borderColor: colors.lowEmphasis,
    },
    root: {
      "&:hover:not($focused):not($error):not($disabled) $notchedOutline": {
        borderColor: colors.highEmphasis,
      },
      "&$focused $notchedOutline": {
        borderColor: colors.outline,
      },
      "&&$error $notchedOutline": {
        borderColor: colors.error,
      },
    },
    adornedEnd: {
      paddingRight: 0,
    },
  },
  MuiInputAdornment: {
    positionEnd: {
      "& > button": {
        padding: spacingX(4),
      },
    },
  },
  MuiSelect: {
    select: {
      "&:focus": {
        backgroundColor: "transparent",
      },
    },
    icon: {
      right: spacingX(4),
    },
  },
  MuiMenuItem: {
    root: {
      ...typography.body1,
      wordBreak: "break-word",
      whiteSpace: "pre-wrap",
    },
  },
  MuiListItem: {
    button: {
      "&:hover:not($selected), &:focus:not($selected)": {
        backgroundColor: colors.background,
      },
      "&$selected": {
        backgroundColor: colors.grey1,
      },
    },
  },
  MuiCheckbox: {
    colorPrimary: {
      color: colors.lowEmphasis,
      "&$checked": {
        color: colors.success,
      },
    },
  },
  MuiRadio: {
    colorPrimary: {
      color: colors.lowEmphasis,
      "&$checked": {
        color: colors.success,
      },
    },
    colorSecondary: {
      color: colors.lowEmphasis,
      "&$checked": {
        color: colors.success,
      },
    },
  },
  MuiGrid: {
    root: {
      "&&": {
        marginTop: 0,
        marginBottom: 0,
      },
    },
    item: {
      "&&&": {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
  MuiDivider: {
    root: {
      backgroundColor: defaultTheme.grey1,
    },
  },
};

export default defaultTheme;
