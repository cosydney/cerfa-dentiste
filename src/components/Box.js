import React, { Component } from 'react';
// import AutoComplete from 'material-ui/AutoComplete';
import MyTheme from '../componentTheme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Box extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render () {
    return (
      <MuiThemeProvider muiTheme={MyTheme}>
        {this.props.firstElem}
        {this.props.secondElem}
      </MuiThemeProvider>
    );
  }
}
