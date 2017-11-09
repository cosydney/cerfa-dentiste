import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import cerfa from './assets/img/cerfa-dentiste.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.body}>
          <img src={cerfa} style={styles.cerfa} alt="logo" usemap="#Map"/>
          <map name="Map" id="Map">
            <area title="chirurgien_dentiste" href="#" shape="poly" coords="371,37,371,51,390,52,389,38"/>
            <area title="personne_recevant_les_soins" href="#" shape="poly" coords="35,107,765,108,765,123,34,124" />
            <area title="date" href="#" shape="poly" coords="615,56,766,55,766,71,615,72" />
            <area title="nom_prenom_assure" href="#" shape="poly" coords="123,203,123,220,765,220,765,204" />
          </map>
      </div>
    );
  }
}

export default App;

const styles = {
  body: {
    zIndex: 1,
    height: '100%',
    width: '100%',
    color: 'skyeblue',
    display: 'flex',
    justifyContent: 'center',
  },
  cerfa: {
    zIndex: -1,
    display: 'flex',
    position: 'absolute',
  }
};
