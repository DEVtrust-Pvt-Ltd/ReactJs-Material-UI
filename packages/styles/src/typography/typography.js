import colors from "../colors";

const defaultFontFamily = '"Arial", "Helvetica", sans-serif';
const defaultFontSize = 14;
const htmlFontSize = 16;
const coef = defaultFontSize / 14;
const pxToRem = (size) => `${(size / htmlFontSize) * coef}rem`;
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const fontWeights = {
  light: 300,
  normal: 400,
  semiBold: 600,
  bold: 700,
};

const buildVariant = (
  fontWeight,
  size,
  lineHeight,
  letterSpacing,
  color = colors.highEmphasis
) => ({
  defaultFontFamily,
  fontWeight,
  fontSize: pxToRem(size),
  lineHeight,
  letterSpacing: `${round(letterSpacing / size)}em`,
});

const typography = {
  h1: buildVariant(fontWeights.light, 96, 1.167, -1.5),
  h2: buildVariant(fontWeights.light, 60, 1.2, -0.5),
  h3: buildVariant(fontWeights.normal, 48, 1.167, 0),
  h4: buildVariant(fontWeights.normal, 34, 1.235, 0.25),
  h5: buildVariant(fontWeights.normal, 24, 1.334, 0),
  h6: buildVariant(fontWeights.semiBold, 20, 1.6, 0.15, colors.mediumEmphasis),
  subtitle1: buildVariant(fontWeights.normal, 16, 1.75, 0.15),
  subtitle2: buildVariant(
    fontWeights.semiBold,
    14,
    1.57,
    0.1,
    colors.mediumEmphasis
  ),
  body1: buildVariant(fontWeights.normal, 16, 1.5, 0.15, colors.mediumEmphasis),
  body2: buildVariant(fontWeights.normal, 14, 1.43, 0.15, colors.lowEmphasis),
  caption: buildVariant(fontWeights.normal, 12, 1.66, 0.4, colors.lowEmphasis),
  button: buildVariant(fontWeights.semiBold, 14, 1.75, 0.4),
};

export default typography;
