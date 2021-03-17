// External
import React from "react";
import { Provider } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

// Ours
import { colors } from "./Styles/colors";
import App from "./App";

// Generate Our Theme
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: colors.mainButtonColor
      },
      contained: {
        fontFamily: "Pathway Gothic One",
        filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))", fontSize: "1.250em"
      },
      outlined: {
        color: colors.activeLinkColor,
        border: `1px solid ${colors.activeLinkColor}`
      }
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: colors.headerNavigationBackground,
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        fontSize: "1.250em",
        color: "white"
      }
    },
  },
  palette: {
    primary: {
      light: colors.secondary5,
      main: colors.secondary,
      dark: colors.secondary2,
      contrastText: "#fff"
    },
    secondary: {
      light: colors.primary5,
      main: colors.primary,
      dark: colors.primary2,
      contrastText: "#fff"
    },
    cancel: {},
    background: {
      default: colors.siteStatus,
      paper: colors.scrollBackground
    },
    action: {
      disabledBackground: colors.mainGrey,
      selected: colors.secondary3,
      active: colors.activeLinkColor,
      hover: colors.secondary4
    },
    divider: colors.secondary,
    text: {
      primary: "#FFFFFF",
      secondary: colors.secondary,
      hint: colors.linkColor,
      disabled: colors.mainGrey
    }
  },
  typography: {
    fontFamily: "Pathway Gothic One",
    fontSize: 14,
    button: {
      fontFamily: "Raleway",
      fontSize: "large",
      letterSpacing: 1.2,
      color: colors.secondary
    },
    h1: {
      fontStyle: "italic"
    },
    h2: {
      fontStyle: "italic",
      fontSize: "2.125em"
    },
    h3: {
      fontStyle: "italic",
      color: colors.secondary2,
      fontSize: "1.512em"
    },
    body1: {
      fontFamily: "Raleway",
      fontSize: "1.250rem"
    },
    body2: {
      fontFamily: "Raleway",
      fontSize: "1.1rem"
    }
  }
});

// Factor out what normally would go in root.js in order to combine Router && Redux store
const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App {...store}/>
    </MuiThemeProvider>
  </Provider>
);

export default Root;
