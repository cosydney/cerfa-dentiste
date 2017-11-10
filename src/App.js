import React, { Component, Text } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
// import cerfadentiste from './assets/img/cerfa-dentiste.png'
import cerfa from './assets/img/cerfa.png'
import './App.css';

import AutoComplete from './components/AutoComplete';
import Box from './components/Box';
import TextLogo from './components/TextLogo';

import MyTheme from './componentTheme.js';
import DateFormat from './components/componentDate.js';


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
{/* PREMIERE PARTIE */}
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
{/* Addresse de l'ASSURE */}
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
      <div style={{display: 'flex', marginTop: 2}}>
        <h3 style={styles.h3dark}> IDENTIFICATION DU PRATICIEN </h3>
        <h3 style={styles.h3dark}> IDENTIFICATION DE LA STRUCTURE </h3>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', height: 250}} >
        <div style={{flex: 1, display: 'flex', justifyContent:'flex-end', flexDirection:'column'}}>
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
        <div style={{ flex: 1, display: 'flex', justifyContent:'flex-end', flexDirection:'column'}}>
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

{/*CONDITION DE PRISE EN CHARGE DES ACTES*/}
      <h3 style={styles.h3dark}> CONDITION DE PRISE EN CHARGE DES ACTES </h3>
      <div style={{display: 'flex'}}>
        <div style={{width: '70.5%', display:'flex', flexDirection: 'column', marginTop: 3}}>
            <div style={{display:'flex',backgroundColor: '#d7d1ca'}}>
            <div>
              <MuiThemeProvider muiTheme={MyTheme}>
                <Checkbox
                    label='MALADIE'
                    labelStyle={{fontWeight: 'bold', color: '#72644f', alignSelf: 'left'}}
                    style={styles.checkbox}/>
              </MuiThemeProvider>
            </div>
                <div>
                  <i style={styles.italicTitle}>(si exonération du ticket modérateur, cochez une case de la ligne suivante)</i>
                </div>
              </div>

              <div style={{display:'flex', backgroundColor: '#d7d1ca', marginTop: 5, marginLeft: 40}}>
                <div>
                  <h5 style={styles.h5Rapport}>acte en rapport avec</h5>
                </div>
                <div>
                <MuiThemeProvider muiTheme={MyTheme}>
                  <Checkbox
                      label='une ALD'
                      labelPosition="left"
                      labelStyle={{marginLeft: 10, width: 66, fontWeight: '500', color: '#72644f', alignSelf: 'left'}}
                      iconStyle={{display: 'flex'}}
                      style={styles.checkbox}/>
                </MuiThemeProvider>
                </div>
                <div>
                <MuiThemeProvider muiTheme={MyTheme}>
                  <Checkbox
                      label='action de prevention'
                      labelPosition="left"
                      iconStyle={{display: 'flex'}}
                      labelStyle={{marginLeft: 10, width: 160, fontWeight: '500', color: '#72644f', alignSelf: 'left'}}
                      style={styles.checkbox}/>
                </MuiThemeProvider>
                </div>
                <div>
                <MuiThemeProvider muiTheme={MyTheme}>
                  <Checkbox
                      label='autre'
                      labelPosition="left"
                      iconStyle={{display: 'flex'}}
                      style={{width: 40}}
                      labelStyle={{marginLeft: 10, width: 40,fontWeight: '500', color: '#72644f', alignSelf: 'left'}}
                      style={styles.space}/>
                </MuiThemeProvider>
                </div>
              </div>
          </div>

          <div style={{width: '30.5%',  backgroundColor: '#d7d1ca', marginLeft: 5, marginTop: 2, display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', width: '20%', flexDirection: 'row'}}>
              <MuiThemeProvider muiTheme={MyTheme}>
                <Checkbox
                    label='ACTES'
                    labelPosition="right"
                    iconStyle={{display: 'flex'}}
                    labelStyle={{marginLeft: -15, width: 40, fontSize: 14, fontWeight: 'bold', color: '#72644f', alignSelf: 'left'}}
                    style={styles.space}/>
              </MuiThemeProvider>
              <div style={{width: '80%', marginLeft: -150}}>
                <h5 style={styles.h5}>{"dispensés au titre de l'art L. 212-1"}</h5>
              </div>
            </div>
              <div style={{marginRight: 10, marginLeft: 10, marginTop: -5}}>
                <i style={{ color: '#72644f', fontSize: 10, padding: 0}}>(cf. la notice au verso : § précédé de * et les recommendations importantes)</i>
              </div>
            </div>
          </div>
          <div style={{display:'flex', backgroundColor: '#d7d1ca', marginTop: 5, marginLeft: 40}}>
            <div>
              <h5 style={styles.h5Rapport}>accident causé par un tiers</h5>
            </div>
            <div>
            <MuiThemeProvider muiTheme={MyTheme}>
              <Checkbox
                  label='oui'
                  labelPosition="left"
                  labelStyle={{marginLeft: 10, width: 66, fontWeight: '500', color: '#72644f', alignSelf: 'left'}}
                  iconStyle={{display: 'flex'}}
                  style={styles.checkbox}/>
            </MuiThemeProvider>
            </div>
            <div>
            <MuiThemeProvider muiTheme={MyTheme}>
              <Checkbox
                  label='non'
                  labelPosition="left"
                  iconStyle={{display: 'flex'}}
                  labelStyle={{marginLeft: 10, width: 160, fontWeight: '500', color: '#72644f', alignSelf: 'left'}}
                  style={styles.checkbox}/>
            </MuiThemeProvider>
            </div>
              <div>
              <MuiThemeProvider muiTheme={MyTheme}>
                 <DatePicker
                 floatingLabelFixed={true}
                 floatingLabelText="date"
                 underlineShow={false}
                 floatingLabelStyle= {{paddingLeft: 30, top: 25, fontSize: 18, left: -110, color: '#72644f' }}
                 DateTimeFormat={DateFormat}
                 mode="landscape"
                 locale="fr"
                 placeholder={'JJ/MM/AAAA'}
                 style={{backgroundColor: '#d7d1ca', height: 25, width: '73px', marginLeft: 117}}
                 inputStyle={{ right: 50, bottom: 14, fontSize: 20, height: 25, borderLeft: 'thin solid white', width: '352'}} />
              </MuiThemeProvider>
              </div>
            </div>

            <div style={{display:'flex',backgroundColor: '#d7d1ca', marginTop: 5}}>
              <div>
                <MuiThemeProvider muiTheme={MyTheme}>
                  <Checkbox
                      label='AT/MP'
                      labelStyle={{fontWeight: 'bold', color: '#72644f', alignSelf: 'left'}}
                      style={styles.checkbox}/>
                </MuiThemeProvider>
              </div>
              <MuiThemeProvider muiTheme={MyTheme}>
                <TextField
                 floatingLabelStyle= {{paddingLeft: 10, top: 25, fontSize: 18, color: "#72644f"}}
                 style={{backgroundColor: '#d7d1ca', height: 25, marginLeft: 110}}
                 placeholder={'Entrer votre numéro ici'}
                 underlineShow={false}
                 inputStyle={{ left: 80, bottom: 14, fontSize: 20, borderLeft: 'thin solid white'}}
                 floatingLabelText="numéro"
                 floatingLabelFixed={true}/>
             </MuiThemeProvider>
             <div>
             <MuiThemeProvider muiTheme={MyTheme}>
                <DatePicker
                floatingLabelFixed={true}
                floatingLabelText="ou date"
                underlineShow={false}
                floatingLabelStyle= {{paddingLeft: 30, top: 25, fontSize: 18, left: -110, color: '#72644f' }}
                DateTimeFormat={DateFormat}
                mode="landscape"
                locale="fr"
                placeholder={'JJ/MM/AAAA'}
                style={{backgroundColor: '#d7d1ca', height: 25, width: '73px', marginLeft: 213}}
                inputStyle={{ right: 50, bottom: 14, fontSize: 20, height: 25, borderLeft: 'thin solid white', width: '352'}} />
             </MuiThemeProvider>
             </div>
            </div>
            <h3 style={{backgroundColor: '#72644f', paddingBottom: 3, marginTop: 3, width: '100%', marginBottom: 0}}> </h3>
            <div style={{display: 'flex'}}>
              <h6 style={styles.h6}><i>(les trois rubriques ci-dessu sont complétées, le cas échéant, uniquement par le medecin)</i></h6>
            </div>

            <div style={{backgroundColor: '#d7d1ca', display: 'flex'}}>
              <MuiThemeProvider muiTheme={MyTheme}>
                <Checkbox
                    label='si vous êtes le nouveau médecin traitant cochez cette case'
                    labelPosition='left'
                    labelStyle={{fontWeight: 'thin', color: '#72644f', alignSelf: 'left', fontSize: 14, width: '55%'}}
                    style={styles.checkbox}/>
              </MuiThemeProvider>
            </div>
            <div style={{marginTop: 4, height: 22, backgroundColor: '#d7d1ca'}}>
            <p style={{color:'#72644f', fontSize: 14, paddingTop: 4, paddingLeft: 8, backgroundColor: '#d7d1ca', marginBottom: 0, display: 'flex'}}>si le patient est envoyé par le médecin traitant, compléter la ligne ci-dessus <i style={{paddingLeft: 8}}>(s'il ne l'est pas, cochez une case de la ligne suivante)</i></p>
              <MuiThemeProvider muiTheme={MyTheme}>
                <TextField
                 fullWidth={true}
                 floatingLabelStyle= {{paddingLeft: 10, top: 27, fontSize: 18, color:'#72644f'}}
                 style={{height: 25, backgroundColor: '#d7d1ca'}}
                 underlineShow={false}
                 inputStyle={{ left: 180, bottom: 13, fontSize: 20}}
                 floatingLabelText="nom et prénom du médecin  "
                 floatingLabelFixed={true}/>
             </MuiThemeProvider>
            </div>

            <div style={{display:'flex', backgroundColor: '#d7d1ca', marginTop: 28}}>
              <div>
              <MuiThemeProvider muiTheme={MyTheme}>
                <Checkbox
                    label='accès direct spécifique'
                    labelPosition="left"
                    labelStyle={{marginLeft: 2, width: 122, fontSize: 10, fontWeight: '500', color: '#72644f', alignSelf: 'left'}}
                    iconStyle={{display: 'flex'}}
                    style={styles.checkbox}/>
              </MuiThemeProvider>
              </div>
              <div>
              <MuiThemeProvider muiTheme={MyTheme}>
                <Checkbox
                    label='urgence'
                    labelPosition="left"
                    iconStyle={{display: 'flex'}}
                    labelStyle={{marginLeft: 2, paddingLeft: 6, fontSize: 10, fontWeight: '500', color: '#72644f', alignSelf: 'left'}}
                    style={styles.checkbox}/>
              </MuiThemeProvider>
              </div>
              <div>
              <MuiThemeProvider muiTheme={MyTheme}>
                <Checkbox
                    label='hors résidence habituelle'
                    labelPosition="left"
                    iconStyle={{display: 'flex'}}
                    style={{width: 40}}
                    labelStyle={{marginLeft: 2, width: 122, fontSize: 10, fontWeight: '500', color: '#72644f', alignSelf: 'left'}}
                    style={styles.space}/>
              </MuiThemeProvider>
              </div>
              <div style={{marginLeft: -20}}>
              <MuiThemeProvider muiTheme={MyTheme}>
                <Checkbox
                    label='medecin traitant remplacé'
                    labelPosition="left"
                    iconStyle={{display: 'flex'}}
                    style={{width: 40}}
                    labelStyle={{marginLeft: 2, width: 130, fontSize: 10, fontWeight: '500', color: '#72644f', alignSelf: 'left'}}
                    style={styles.space}/>
              </MuiThemeProvider>
              </div>
              <div style={{marginLeft: -20}}>
              <MuiThemeProvider muiTheme={MyTheme}>
                <Checkbox
                    label='accés hors coordination'
                    labelPosition="left"
                    iconStyle={{display: 'flex'}}
                    style={{width: 40}}
                    labelStyle={{width: 130, margineLeft: -150,fontSize: 10, fontWeight: '500', color: '#72644f', alignSelf: 'left'}}
                    style={styles.space}/>
              </MuiThemeProvider>
              </div>
            </div>
{/* ACTES EFFECTUES */}
            <h3 style={styles.h3dark}> ACTES EFFECTUES  </h3>
            <h6 style={{color: '#72644f',margin: 0, fontSize: 14}}>
              <i>{"(si les actes sont soumis à la formalité de l'accord préalable, indiquez la date de la demande)"}</i>
            </h6>
    {/* ACTES EFFECTUES */}
      <div style={{display: 'flex',  justifyContent: 'space-between', height: 550}}>
        <div style={{flex: 8}}>
          <div style={{color: '#72644f', fontSize: '12px'}}>
            <p> date des actes </p>
          </div>
          <div>
            <Box
              firstElem={<DatePicker
                          hintText="Date"
                          DateTimeFormat={DateFormat}
                          mode="landscape"
                          locale="fr"
                          textFieldStyle={{width: '100%'}}
                          underlineShow={false}/>}
              secondElem={<TextLogo name="localisation automatique"/>} />
          </div>
        </div>
        <div style={{flex: 8}}>
        <div style={{color: '#72644f', fontSize: '12px'}}>
          <p> code des actes </p>
        </div>
          <div>
            <Box
              firstElem={<AutoComplete />}
              secondElem={<AutoComplete />}/>
          </div>
        </div>
        <div style={{flex: 1}}>
          <div style={{color: '#72644f',
                      fontSize: '12px',
                      WebkitTransform: 'rotate(-90deg)',
                      MozTransform: 'rotate(-90deg)',
                      OTransform: 'rotate(-90deg)',
                      MsTransform: 'rotate(-90deg)',
                      transform: 'rotate(-90deg)'}}>
            <p> activités </p>
          </div>
          <div>
          </div>
        </div>
        <div style={{flex: 2}}>
          <div style={{color: '#72644f', fontSize: '12px'}}>
            <p> C. CS </p>
            <p> V. VS </p>
          </div>
          <div>
          </div>
        </div>
        <div style={{flex: 7}}>
          <div style={{color: '#72644f', fontSize: '12px'}}>
            <p> autres actes (TO, ...)
             éléments de la tarification CCAM
             (modificateurs, association,...)</p>
          </div>
          <div>
          </div>
        </div>
        <div style={{flex: 7}}>
          <div style={{color: '#72644f', fontSize: '12px'}}>
              <p> montant des honoraires facturés </p>
            </div>
          <div>
          </div>
        </div>
        <div style={{flex: 2}}>
          <div style={{color: '#72644f',
                      fontSize: '12px',
                      WebkitTransform: 'rotate(-90deg)',
                      MozTransform: 'rotate(-90deg)',
                      OTransform: 'rotate(-90deg)',
                      MsTransform: 'rotate(-90deg)',
                      transform: 'rotate(-90deg)'}}>
            <p> dépass. </p>
          </div>
          <div>
          </div>
        </div>
        <div style={{flex: 8}}>
          <div style={{color: '#72644f', fontSize: '12px'}}>
            <p> frais de déplacement </p>
          </div>
          <div>
          </div>
        </div>
      </div>


{/* PAIEMENT */}
              <div style={{display: 'flex', marginTop: 4}}>
                  <h3 style={styles.h3dark}> PAIEMENT </h3>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', height: 56}} >
                  <div style={{marginTop: 4, marginLeft:322, height: 22}}>
                  <MuiThemeProvider muiTheme={MyTheme}>
                      <TextField
                      fullWidth={true}
                      floatingLabelStyle= {{paddingLeft: 20, top: 27, fontSize: 18, width: 200}}
                      style={{backgroundColor: '#afa599', height: 46, fontWeight: 'bold'}}
                      underlineShow={false}
                      inputStyle={{ left: 230, bottom: 14, backgroundColor: '#d7d1ca', fontSize: 20, paddingRight: 10, textAlign: 'right'}}
                      floatingLabelText="MONTANT TOTAL en euros (1+2+3)"
                      floatingLabelFixed={true}/>
                  </MuiThemeProvider>
                  </div>
              </div>
              <div style={{display: 'flex', backgroundColor: '#d7d1ca', textAlign:'left'}}>
                  <div style={{width: '50%'}}>
                      <MuiThemeProvider muiTheme={MyTheme}>
                          <Checkbox
                              label="l'assuré(e) n'a pas payé la part obligatoire"
                              labelPosition="left"
                              labelStyle={{color: '#72644f', fontSize: 14, marginLeft: 10}}/>
                      </MuiThemeProvider>
                  </div>
                  <div style={{width: '50%', borderLeft: 'solid white'}}>
                      <MuiThemeProvider muiTheme={MyTheme}>
                          <Checkbox
                              label="l'assuré(e) n'a pas payé la part complementaire"
                              labelPosition="left"
                              labelStyle={{color: '#72644f', fontSize: 14, marginLeft: 10}}/>
                      </MuiThemeProvider>
                  </div>
              </div>
              <div style={{display: 'flex', height: 55, backgroundColor: '#afa599', marginTop: 4, textAlign: 'left', fontSize: 15}} >
                  <div style={{width: '40%'}}>
                      <MuiThemeProvider muiTheme={MyTheme}>
                          <TextField
                              floatingLabelStyle= {{paddingLeft: 10, top: 22, width: 200}}
                              style={{height: 46, fontWeight: 'bold'}}
                              underlineShow={false}
                              inputStyle={{ left: 145, bottom: 10, backgroundColor: '#ffffff', width: 200, paddingLeft: 10}}
                              floatingLabelText="signature du practicien ayant effectue l'acte ou les actes"
                              floatingLabelFixed={true}/>
                      </MuiThemeProvider>
                  </div>
                  <div style={{width: '40%'}}>
                      <MuiThemeProvider muiTheme={MyTheme}>
                          <TextField
                              floatingLabelStyle= {{paddingLeft: 10, top: 22, width: 200}}
                              style={{height: 46, fontWeight: 'bold'}}
                              underlineShow={false}
                              inputStyle={{ left: 145, bottom: 10, backgroundColor: '#ffffff', width: 200, paddingLeft: 10}}
                              floatingLabelText="signature du practicien ayant effectue l'acte ou les actes"
                              floatingLabelFixed={true}/>
                      </MuiThemeProvider>
                  </div>
                  <div style={{width: '20%', paddingTop: 12}}>
                      <MuiThemeProvider muiTheme={MyTheme}>
                          <Checkbox
                              label="impossibilite de signer"
                              labelPosition="left"
                              labelStyle={{color: '#72644f', bottom: 10}}
                              style={styles.checkbox}/>
                      </MuiThemeProvider>
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
    color: 'yellow',
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
    paddingTop: 5,
    paddingBottom: 5,
    margin: 0,
    marginTop: 4,
    width: '100%'
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
    fontSize: 10
  },
  h4dark: {
    margin: 0,
    display: 'flex',
    backgroundColor: '#d7d1ca',
    color: '#72644f',
    fontSize: 13,
    fontWeight: 300,
  },
  h5Rapport: {
    fontWeight: 'bold',
    color: '#72644f',
    alignSelf: 'left',
    width: 177,
    margin: 4,
    marginTop: 7,
    fontSize: 11,
  },
  h5: {
    fontWeight: 'bold',
    color: '#72644f',
    alignSelf: 'left',
    width: 177,
    margin: 4,
    marginTop: 7,
    fontSize: 11,
  },
  h6: {
    color: '#72644f',
    margin: 0,
    paddingLeft: 10,
  },
  space:{
    width: 221,
  }
};

// light brown '#d7d1ca'
// dark brown '#72644f'
