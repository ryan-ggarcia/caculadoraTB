import React from "react";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, View, Button } from "react-native";
// npm install @react-native-picker/picker --save
import { Picker } from '@react-native-picker/picker';

export default function Calcular() {

  // coleta de dados
  const [peso, setPeso] = useState('')
  const [idade, setIdade] = useState('')
  const [genero, setGenero] = useState('masculino')
  const [altura, setAltura] = useState('')
  const [tmb, setTmb] = useState('')

  // calculadora
  const tbmCalcular = () => {
    let resultado;
    if (genero === 'masculino') {
      resultado = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)
    }
    else {
      resultado = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade)
    }
    setTmb(resultado)
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#DAE3E5'}} >
      <View style={style.conteiner}>
        <Text style={style.legend}>
          Formulario
        </Text>
        <TextInput
          placeholder='Peso (Kg)'
          keyboardType="numeric"
          onChangeText={setPeso}
          value={peso} />
        <TextInput
          placeholder='Idade'
          keyboardType="numeric"
          onChangeText={setIdade}
          value={idade} />
        <TextInput
          placeholder='Altura (Cm)'
          keyboardType="numeric"
          onChangeText={setAltura}
          value={altura} />
          <Text>
            Genêro
          </Text>
        <Picker
          selectedValue={genero}
          onValueChange={(itemValue) => setGenero(itemValue)}>

          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item
            label="Feminino" value="feminino" />
          </Picker>
          <Button title="Calcular" onPress={tbmCalcular} style={style.button} />
            {tmb !== null && <Text>Sua TMB é: {tmb}</Text>}
        
      </View>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  conteiner: {
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#507DBC',
    borderRadius: 4,
    width: 200
  },
  info: {
    fontSize: 15,
    color: '#507DBC',
    borderColor: '#507DBC',
    borderBottomWidth: 2
  },
  legend:{
    fontSize: 30,
    marginTop: 15
  }
})
