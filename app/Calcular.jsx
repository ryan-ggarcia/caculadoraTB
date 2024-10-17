import React from "react";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, View, Button, StyleSheet } from "react-native";
// npm install @react-native-picker/picker --save
import { Picker } from '@react-native-picker/picker';

export default function Calcular() {

  // coleta de dados
  const [peso, setPeso] = useState('')
  const [idade, setIdade] = useState('')
  const [genero, setGenero] = useState('masculino')
  const [altura, setAltura] = useState('')
  const [tmb, setTmb] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState();

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DAE3E5' }} >
      <View style={style.conteiner}>

        {/* Formulario */}
        <Text style={style.legend}>
          Formulario
        </Text>

        <Text> Peso </Text>
        <TextInput
          style={style.form}
          placeholder='Peso (Kg)'
          keyboardType="numeric"
          onChangeText={setPeso}
          value={peso} />

        <Text> Idade </Text>
        <TextInput
          style={style.form}
          placeholder='Idade'
          keyboardType="numeric"
          onChangeText={setIdade}
          value={idade} />

        <Text> Altura </Text>
        <TextInput
          style={style.form}
          placeholder='Altura (Cm)'
          keyboardType="numeric"
          onChangeText={setAltura}
          value={altura} />

        {/* Seleção de genero */}
        <Text>Genero</Text>
        <Picker selectedValue={genero} onValueChange={(itemValue) => setGenero(itemValue)}>

          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Feminino" value="feminino" />
        </Picker>

        {/* Botão */}
        <Button title="Calcular" onPress={tbmCalcular} style={style.button} />
        {tmb !== null && <Text style={{ marginTop: 20, fontSize: 20 }}>Sua TMB é: {tmb}</Text>}

        {/* Alerta */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'red' }}>
            Atenção!
            O calculo acima mostra APROXIMADAMENTE a sua taxa basal.
            Ou seja o número será quebrado. Considere apenas os QUATRO primeiros números.
            Para mais informações consulte um Nutricionista.
          </Text>
        </View>

      </View>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  conteiner: {
    alignItems: 'center',
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#507DBC',
    borderRadius: 4,
    width: 200,
  },
  legend: {
    fontSize: 30,
    marginTop: 15
  },
  form: {
    marginTop: 10,
    backgroundColor: '#507dbc',
    color: '#DAE3E5',
    width: 100,
    borderRadius: 4
  }
})
