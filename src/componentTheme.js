import React from 'react';
import {brown600} from 'material-ui/styles/colors';
import {grey800} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const My_Theme = getMuiTheme({
  palette: {
    textColor: brown600,
    primary1Color: brown600,
    primary2Color: grey800,
    pickerHeaderColor: grey800,
  },
});

export default My_Theme;