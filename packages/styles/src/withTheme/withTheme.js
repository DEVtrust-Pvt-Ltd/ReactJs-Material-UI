import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../defaultTheme";

const withTheme = (WrappedComponent) =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps };
    }

    render() {
      return (
        <MuiThemeProvider theme={defaultTheme}>
          <WrappedComponent {...this.props} />
        </MuiThemeProvider>
      );
    }
  };

export default withTheme;
