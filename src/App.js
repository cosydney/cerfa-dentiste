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
{/* HEADER */}
        <div style={styles.container}>
          <h1 style={styles.h1}>feuilles de soin bucco-dentaires</h1>
          <div style={styles.firstContainer}>
            <div style={{width: 200}}>
              <img src={cerfa} alt="cerfa.png" style={{height: 114/1.5, width: 168/1.5,marginTop: -30, marginLeft: -30}}/>
            </div>

            <div>
              <div style={{width: 480, display: 'flex', alignItems: 'center'}}>
                <div style={{width: 260}}>
                  <MuiThemeProvider muiTheme={MyTheme}>
                      <Checkbox
                          label='CHIRURGIEN DENTISTE'
                          labelPosition="left"
                          labelStyle={{fontWeight: 'bold', color: '#72644f'}}
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
              </div>
              <p>
              Art R. 161-40 et suivants du code de la sécurité sociale <br/> {"Art. L. 115 du Code des pensions militaires d'invalidité et des victimes de la guerre"}
              </p>
            </div>


            <div style={{width: 200}}>
              <MuiThemeProvider muiTheme={MyTheme}>
                <TextField
                  style={{top: -50, display: 'flex', flexDirection: 'column', width: '100%'}}
                  inputStyle={{ backgroundColor: '#d7d1ca', height: 35, top: 30 }}
                  underlineShow={false}
                  floatingLabelText="Numéro facture (facultatif)"
                  floatingLabelFixed={true} />
                  <DatePicker hintText="Date" DateTimeFormat={DateFormat} mode="landscape" locale="fr" style={{marginTop: -42, width: '100%'}}
                  underlineShow={false}/>
                </MuiThemeProvider>
            </div>
          </div>
{/* 1ere partie */}
          <h3 style={styles.h3dark}> PERSONNE RECEVANT LES SOINS ET ASSURE(E) </h3>
          <div style={{display: 'flex', marginTop: 4}}>
{/* Personne recevant les soins */}
            <h3 style={styles.h3}> PERSONNE RECEVANT LES SOINS </h3><i style={styles.italicTitle}>(La ligne "nom et prénom" est obligatoirement remplie par le praticien)</i>
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

          <div style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
            <MuiThemeProvider muiTheme={MyTheme}>
              <TextField
               floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18}}
               style={{backgroundColor: '#d7d1ca', height: 25, width: '100%'}}
               underlineShow={false}
               inputStyle={{ left: 150, bottom: 14, fontSize: 20, borderLeft: 'thin solid white'}}
               floatingLabelText="numéro d'application"
               floatingLabelFixed={true}/>
           </MuiThemeProvider>

           <MuiThemeProvider muiTheme={MyTheme}>
              <DatePicker
              floatingLabelFixed={true}
              floatingLabelText="date de naissance"
              underlineShow={false}
              floatingLabelStyle= {{paddingLeft: 0, top: 27, fontSize: 18, left: -110}}
              DateTimeFormat={DateFormat}
              mode="landscape"
              locale="fr"
              style={{backgroundColor: '#d7d1ca', height: 25, width: '500px', marginTop: 10}}
              inputStyle={{ left: 26, bottom: 14, fontSize: 20, height: 25, borderLeft: 'thin solid white', width: '352px'}} />
          </MuiThemeProvider>
         </div>
           <div style={{display: 'flex', flexDirection: 'column', width: '20%'}}>
             <MuiThemeProvider muiTheme={MyTheme}>
               <TextField
                floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18}}
                style={{backgroundColor: '#d7d1ca', height: 25, width: '100%'}}
                underlineShow={false}
                inputStyle={{fontSize: 20 }}
                floatingLabelFixed={true}/>
            </MuiThemeProvider>
            <i style={styles.italic}>Code de l'organisme de rattachement en cas de dispense d'avance des frais (à remplir par le praticien, le cas échéant)</i>
          </div>
        </div>
{/* ASSURE */}
        <div style={{display: 'flex'}}>
          <h3 style={styles.h3}> ASSURE(E) </h3><i style={styles.italicTitle}>(à remplir si la personne recevant les soins n'est pas l'assuré(e))</i>
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
        <div style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
          <MuiThemeProvider muiTheme={MyTheme}>
            <TextField
             floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18}}
             style={{backgroundColor: '#d7d1ca', height: 25, width: '100%'}}
             underlineShow={false}
             inputStyle={{ left: 150, bottom: 14, fontSize: 20, borderLeft: 'thin solid white'}}
             floatingLabelText="numéro d'application"
             floatingLabelFixed={true}/>
         </MuiThemeProvider>
        </div>
{/*Addresse de l'ASSURE */}
        <div style={{display: 'flex'}}>
          <h3 style={styles.h3}>{"ADRESS DE L'ASSURE(E)"}</h3>
        </div>
        <MuiThemeProvider muiTheme={MyTheme}>
          <TextField
           fullWidth={true}
           floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18}}
           style={{backgroundColor: '#d7d1ca', height: 25}}
           underlineShow={false}
           inputStyle={{fontSize: 20}}
           floatingLabelFixed={true}/>
        </MuiThemeProvider>
{/* IDENTIFICATION */}

      <div style={{display: 'flex', justifyContent: 'space-between', height: 250}} >
        <div style={{backgroundColor: 'red', flex: 1, display: 'flex', justifyContent:'flex-end', flexDirection:'column'}}>
          <div>
              <MuiThemeProvider muiTheme={MyTheme}>
                <TextField
                 floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18}}
                 style={{backgroundColor: '#d7d1ca', height: 25, width: '100%'}}
                 underlineShow={false}
                 inputStyle={{ left: 150, bottom: 14, fontSize: 20, borderLeft: 'thin solid white'}}
                 floatingLabelText="nom et prénom"
                 floatingLabelFixed={true}/>
                 <TextField
                  floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18}}
                  style={{backgroundColor: '#d7d1ca', height: 25, width: '100%'}}
                  underlineShow={false}
                  inputStyle={{ left: 150, bottom: 14, fontSize: 20, borderLeft: 'thin solid white'}}
                  floatingLabelText="identifiant"
                  floatingLabelFixed={true}/>
             </MuiThemeProvider>
          </div>
        </div>
        <div style={{backgroundColor: 'blue', flex: 1, display: 'flex', justifyContent:'flex-end', flexDirection:'column'}}>
          <div>
              <MuiThemeProvider muiTheme={MyTheme}>
                <TextField
                 floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18}}
                 style={{backgroundColor: '#d7d1ca', height: 25, width: '100%'}}
                 underlineShow={false}
                 inputStyle={{ left: 150, bottom: 14, fontSize: 20, borderLeft: 'thin solid white'}}
                 floatingLabelText="dispositif de coordination de soins - réseau de santé"
                 floatingLabelFixed={true}/>
             </MuiThemeProvider>
          </div>
        </div>
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
    justifyContent: 'space-between',
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
  italicTitle: {
    marginTop: 8,
    paddingLeft: 5,
    color: '#72644f',
    fontSize: 12
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
