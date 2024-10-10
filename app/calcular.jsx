// import React, { useState } from "react"
// import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"
// import { Picker } from "react-native-web"

// export default function calcular(){
//     // separação da coleta de dados
//     const [peso,setPeso] = useState('')
//     const [altura,setAltura] = useState ('')
//     const [idade,setIdade] = useState ('')
//     const [genero, setGenero] = useState ('')
//     const [taxaBasal,setTaxaBasal] = useState ('')

//     // alerta para preencher todos os campos
//     const handleCalcula = ()=>{
//         if(peso === '' || altura === '' || idade === '' || genero === ''){
//             alert('Preencha todos os campos!')
//             return;
//         }
//         // variavel que armazenara a taxa basal
//         let taxaBasalCalculado = 0
//         // if e else para o calculo da taxa basal
//         if(genero === 'masculino'){
//             taxaBasalCalculado = 66 + (6.2 * peso) + (12.7 * altura) - (6.8 * idade)
//         }
//         else if (genero === 'feminino') {
//             taxaBasalCalculado = 655 + (4.35 * peso) + (4.7 * altura) - (4.7 * altura)
//         }
//         setTaxaBasal(taxaBasalCalculada.toFixed(2));
//     };

//     return(
//      <View>
//        <TextInput 
//         placeholder="Peso (Kg)"
//         value={peso} 
//         onChangeText={(texto) => setPeso(texto)}
//         keyboardType="numeric"/>
//        <TextInput 
//         placeholder="Altura (cm)"
//         value={altura} 
//         onChangeText={(texto) => setAltura(texto)}
//         keyboardType="numeric"/>
//        <TextInput 
//         placeholder="Idade"
//         value={idade} 
//         onChangeText={(texto) => setIdade(texto)}
//         keyboardType="numeric"/>
//         <Picker 
//         selectedValue={genero}
//         onValueChange={(itemValue) => setGenero(itemValue)}
//         >
//             <Picker.item label='Masculino' value='masculino' />
//             <Picker.item label='Feminino' value='feminino' />            
//         </Picker>
//         <Button title="Calcular" onPress={handleCalcula} />

//         <Text>Taxa basal:{taxaBasal} </Text>

//      </View>
//     )
// }
import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';

const Formulario = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [taxaBasal, setTaxaBasal] = useState('');

  const handleCalcular = () => {
    if (peso === '' || altura === '' || idade === '' || genero === '') {
      alert('Preencha todos os campos!');
      return;
    }

    let taxaBasalCalculada = 0;

    if (genero === 'masculino') {
      taxaBasalCalculada = 66 + (6.2 * peso) + (12.7 * altura) - (6.8 * idade);
    } else if (genero === 'feminino') {
      taxaBasalCalculada = 655 + (4.35 * peso) + (4.7 * altura) - (4.7 * idade);
    }

    setTaxaBasal(taxaBasalCalculada.toFixed(2));
  };

  return (
    <View>
      <Text>Formulário</Text>
      <TextInput
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={(texto) => setPeso(texto)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Altura (cm)"
        value={altura}
        onChangeText={(texto) => setAltura(texto)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={(texto) => setIdade(texto)}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={genero}
        onValueChange={(itemValue) => setGenero(itemValue)}
      >
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Feminino" value="feminino" />
      </Picker>
      <Button title="Calcular" onPress={handleCalcular} />
      <Text>Taxa Basal: {taxaBasal}</Text>
    </View>
  );
};

export default Formulario;