import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import logo from './logo.svg';
import cerfadentiste from './assets/img/cerfa-dentiste.png'
import cerfa from './assets/img/cerfa.png'
import './App.css';

import Autocomplete from './Autocomplete';

import MyTheme from './componentTheme.js';
import DateFormat from './componentDate.js';


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
          <h1 style={styles.h1}>feuilles de soin bucco-dentaires</h1>
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
                  // hintText="Numéro de facture"
                  // style={{backgroundColor: '#d7d1ca', marginBottom: 10}}
                  inputStyle={{ backgroundColor: '#d7d1ca', height: 35, top: 30 }}
                  underlineShow={false}
                  floatingLabelText="Numéro de facture (facultatif)"
                  floatingLabelFixed={true} />
                  <DatePicker hintText="Date" mode="landscape" style={{marginTop: -42}}/>
                </MuiThemeProvider>
            </div>
          </div>
          <h3 style={styles.h3dark}> PERSONNE RECEVANT LES SOINS ET ASSURE(E) </h3>
          <div style={{display: 'flex', marginTop: 4}}>
            <h3 style={styles.h3}> PERSONNE RECEVANT LES SOINS </h3><i style={styles.italic}>(La ligne "nom et prénom" est obligatoirement remplie par le praticien)</i>
          </div>
          <div style={{marginTop: 4, height: 22}}>
            <MuiThemeProvider muiTheme={MyTheme}>
              <TextField
               fullWidth={true}
               floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18}}
               style={{backgroundColor: '#d7d1ca', height: 25}}
               underlineShow={false}
               inputStyle={{ left: 110, bottom: 13, fontSize: 20}}
               floatingLabelText="nom et prénom"
               floatingLabelFixed={true}/>
           </MuiThemeProvider>
          </div>
          <div style={{display: 'flex', marginTop: 4}}>
            <i style={styles.italic}>(Nom de famille - de naissance - suivi du nom d'usage (facultatif et s'il y a lieu)</i>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between'}}>

          <MuiThemeProvider muiTheme={MyTheme}>
            <TextField
             floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18}}
             style={{backgroundColor: '#d7d1ca', height: 25, width: '60%'}}
             underlineShow={false}
             inputStyle={{ left: 150, bottom: 14, fontSize: 20, borderLeft: 'thin solid white'}}
             floatingLabelText="numéro d'application"
             floatingLabelFixed={true}/>
         </MuiThemeProvider>

         <MuiThemeProvider muiTheme={MyTheme}>
           <TextField
            floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18}}
            style={{backgroundColor: '#d7d1ca', height: 25}}
            underlineShow={false}
            inputStyle={{ left: 110, bottom: 13, fontSize: 20, backgroundColor: 'red'}}
            floatingLabelFixed={true}/>
        </MuiThemeProvider>
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
    paddingLeft: 5,
    color: '#72644f',
    fontSize: 12
  },
  h4dark: {
    margin: 0,
    display: 'flex',
    backgroundColor: '#d7d1ca',
    color: '#72644f',
    fontSize: 13,
    fontWeight: 300,
  }
};
