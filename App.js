import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      forca: '0',
      massa: '0',
      aceleracao: '0'
    }
  }
  calcResultado(){
    let forca = this.state.forca
    let massa = this.state.massa
    let aceleracao = this.state.aceleracao

    if(forca == 0){
      let resultado = massa * aceleracao
      this.setState({forca: resultado})

      console.log(this.state.forca)
    } else if (aceleracao == 0){
      let resultado = forca / massa
      this.setState({aceleracao: resultado})
    } else if (massa == 0){
      let resultado = forca / aceleracao
      this.setState({massa: resultado})
    }
  }

  clear(){
    this.setState({forca: 0})
    this.setState({aceleracao: 0})
    this.setState({massa: 0})

  }
  render() {
    const {forca, massa, aceleracao} = this.state;

    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Segunda Lei de Newton
        </Text>

        <Text style={styles.label}> 
            Força
        </Text>
        <TextInput 
          style={styles.input} 
          onChangeText={(f) => {this.setState({forca: f})}} 
          placeholder="Força" 
          defaultValue={`${forca}`}
          keyboardType="numeric" 
        />

        <Text style={styles.label}> 
            Massa
        </Text>

        <TextInput 
          style={styles.input} 
          onChangeText={(m) => { this.setState({massa: m})}} 
          placeholder="Massa" 
          defaultValue={`${massa}`}
          keyboardType="numeric" 
        />

        <Text style={styles.label}> 
            Aceleração
        </Text>

        <TextInput 
          style={styles.input} 
          onChangeText={(a) => { this.setState({aceleracao: a})}} 
          placeholder="Massa" 
          defaultValue={`${aceleracao}`}
          keyboardType="numeric" 
        />

        <Button 
        onPress={() => this.calcResultado()}
        title="Calcular"
        color="#00e600"
      
        > 
        </Button>

        <Button 
        onPress={() => this.clear()}
        title="Limpar"
        color="#ff0000"
        style={{color: "10%"}}
      
        > 
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
    textAlign:'center'
  },
  label: {
    margin: 10,
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    width: '90%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    margin: 15,
  },
  
  
});