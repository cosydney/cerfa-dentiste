import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import logo from './logo.svg';
import cerfadentiste from './assets/img/cerfa-dentiste.png'
import cerfa from './assets/img/cerfa.png'
import cross from './assets/img/cross.png'
import './App.css';
import MyTheme from './componentTheme.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirurgien: false
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="App" style={styles.body}>
        <div style={styles.container}>
          <h1 style={styles.h1}>Feuilles de soin bucco-dentaires</h1>
          <div style={styles.firstContainer}>
            <div style={{width: 220}}>
              <img src={cerfa} alt="cerfa.png" style={{height: 114/1.5, width: 168/1.5,marginTop: -30, marginLeft: -30}}/>
            </div>

            <div style={{width: 220}}>
              <MuiThemeProvider muiTheme={MyTheme}>
                  <Checkbox
                      label='CHIRURGIEN DENTISTE'
                      labelPosition="left"
                      labelStyle={{fontWeight: 'bold', color: '#72644f'}}
                      inputStyle={{color: 'red'}}
                      style={styles.checkbox}/>
              </MuiThemeProvider>
          </div>
          <div style={{width: 220}}>
              <MuiThemeProvider muiTheme={MyTheme}>
                    <Checkbox
                        label='MEDECIN'
                        labelPosition="left"
                        labelStyle={{fontWeight: 'bold', color: '#72644f'}}
                        style={styles.checkbox}/>
                </MuiThemeProvider>
            </div>
            <div style={{width: 220}}>
              <MuiThemeProvider muiTheme={MyTheme}>
                <TextField
                  style={{top: -50, display: 'flex', flexDirection: 'column'}}
                  hintText="Numéro de facture"
                  floatingLabelText="Numéro de facture (facultatif)" />
                  <DatePicker hintText="Date" mode="landscape" style={{marginTop: -42}}/>
                </MuiThemeProvider>
            </div>
          </div>
          <h3 style={styles.h3dark}> PERSONNE RECEVANT LES SOINS ET ASSURE(E) </h3>
          <div style={{display: 'flex', marginTop: 4}}>
            <h3 style={styles.h3}> PERSONNE RECEVANT LES SOINS </h3><i style={styles.italic}>(La ligne "nom et prénom" est obligatoirement remplie par le praticien)</i>
          </div>
          <div style={{display: 'flex', marginTop: 4}}>
            <h4 style={styles.h4dark}>nom et prénom</h4>
          </div>
          <div style={{display: 'flex', marginTop: 4}}>
            <i style={styles.italic}>(Nom de famille - de naissance - suivi du nom d'usage (facultatif et s'il y a lieu)</i>
          </div>
          </div>
      </div>

    );
  }
}

export default App;

const styles = {
  container:{
    margin: 50,
    padding: 40,
    backgroundColor: 'white',
    boxShadow: '3px 3px 4px black',
    borderRadius: '4px'
  },
  body: {
    paddingTop: 20,
    height: '100%',
    width: '100%',
    backgroundColor: '#525659',

  },
  cerfa: {
    zIndex: -1,
    display: 'flex',
    position: 'absolute',
  },
  h1: {
    fontSize: 40,
    color: "#aca193"
  },
  checkbox:{
    color: 'yellow'
  },
  firstContainer:{
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    color: '#72644f'
  },
  h3dark: {
    backgroundColor: '#72644f',
    color: 'white',
    padding: 5,
    margin: 0,
  },
  h3: {
    color: '#72644f',
    alignContent: 'left',
    margin: 0,
    paddingLeft: 10,
  },
  italic: {
    paddingLeft: 10,
    color: '#72644f',
    fontSize: 12
  },
  h4dark: {
    backgroundColor: '#72644f',
    color: 'white',
    fontSize: 13,
    fontWeight: 300,
  }
};
