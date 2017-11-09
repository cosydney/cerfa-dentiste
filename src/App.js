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
        <h1 style={styles.h1}>Feuilles de soin bucco dentiste</h1>
        <div style={styles.firstContainer}>
          <div style={{width: 220}}>
            <img src={cerfa} alt="cerfa.png" style={{height: 114/1.5, width: 168/1.5,marginTop: -30, marginLeft: -30}}/>
          </div>

          <div style={{width: 220}}>
            <MuiThemeProvider >
                <Checkbox
                    label='CHIRURGIEN DENTISTE'
                    labelPosition="left"
                    labelStyle={{color: '#72644f'}}
                    inputStyle={{color: 'red'}}
                    style={styles.checkbox}/>
            </MuiThemeProvider>
        </div>
        <div style={{width: 220}}>
            <MuiThemeProvider>
                  <Checkbox
                      label='MEDECIN'
                      labelPosition="left"
                      labelStyle={{color: '#72644f'}}
                      style={styles.checkbox}/>
              </MuiThemeProvider>
          </div>
          <div style={{width: 220}}>
            <MuiThemeProvider>
              <TextField
                style={{top: -50, display: 'flex', flexDirection: 'column'}}
                hintText="Numéro de facture"
                floatingLabelText="Numéro de facture (facultatif)" />
                <DatePicker hintText="Date" mode="landscape" style={{marginTop: -42}}/>
              </MuiThemeProvider>
          </div>
        </div>
        <h3 style={styles.h3}> PERSONNE RECEVANT LES SOINS ET ASSURE(E) </h3>
      </div>

    );
  }
}

export default App;

const styles = {
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: 'skyeblue',
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
  h3: {
    backgroundColor: '#72644f',
    color: 'white',
    marginRight: 20,
    marginLeft: 20,
    padding: 5,
  }
};
