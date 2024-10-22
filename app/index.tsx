import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import Fundo from '../src/img/fundo-01.jpg'
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <>
      <View style={style.conteiner}>
        {/* Titulo */}
        {/* <View>
          <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 30, color: '#04080F' }}>
            Calcule sua Taxa Basal aqui!
          </Text>
        </View> */}

        {/* Imagem */}
        <View style={{ alignItems: 'center'}}>
          <Image source={Fundo} style={{ width: 400, height:450}} />
        </View>

        <View style={{backgroundColor:'#BBD1EA', width:400, height:255, }}>
          {/* Button */}
          <TouchableOpacity style={style.button}>
            <Link push href={'./Calcular'} style={{ fontSize: 20 }}>Calcular</Link>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', marginTop: 20 }}>
            <Link push href={'./Taxa'} style={style.info}>  O que é taxa basal?</Link>
          </TouchableOpacity>
        </View>

      </View>

    </>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1,}}>
      <HomeScreen />
    </SafeAreaView>

  );
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
  }
})
