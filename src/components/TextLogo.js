import React, { Component } from 'react';
// import AutoComplete from 'material-ui/AutoComplete';
import MyTheme from '../componentTheme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

export default class TextLogo extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={{display: "flex", justifyContent: "space-around"}} >
        <div style={{color: "#72644f", width: '50%', fontSize:'12px'}}>
            {this.props.name}
        </div>
        <div style={{alignSelf:"flex-end"}} >
        <FontIcon className="material-icons" style={Stylesheet.iconStyles}  >forward</FontIcon>
        </div>
      </div>
    );
  }
}

const Stylesheet = {
  iconStyles: {
    color: 'white',
    backgroundColor: '#72644f',
    borderRadius: '100%',
    padding: '1%',
  }
}
