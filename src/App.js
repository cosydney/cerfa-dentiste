import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import cerfa from './assets/img/cerfa-dentiste.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className={appTitle}>Welcome to Cerfa-Dentiste</h1>
          <img src={cerfa} className="cerfa" alt="logo" />
      </div>
    );
  }
}

export default App;

<MuiThemeProvider>
  <RaisedButton label="Default" />
</MuiThemeProvider>

const appTitle = {
  z-index: -1;
  height: 100vh;
};
