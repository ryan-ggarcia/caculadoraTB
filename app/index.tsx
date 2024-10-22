import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import Fundo from '../src/img/fundo-01.jpg'
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <>
      <View style={style.conteiner}>


        {/* Imagem */}
        <View>
          <Image source={Fundo} style={{ width: 400, height: 450 }} />
        </View>

        {/* Card */}
        <View style={style.Card}>
          {/* Titulo */}
        
            <Text style={{ textAlign: 'center', fontSize: 25, color: '#04080F' }}>
              Calcule sua Taxa Basal aqui!
            </Text>
         
          {/* Button */}
          <TouchableOpacity style={style.button}>
            <Link push href={'./Calcular'} style={{ fontSize: 20 }}>Calcular</Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link push href={'./Taxa'} style={style.info}>  O que é taxa basal?</Link>
          </TouchableOpacity>
        </View>

      </View>

    </>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, }}>
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
  },
  Card: {
    backgroundColor: '#BBD1EA',
    width: 400,
    height: 260,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position:'relative',
    top: -7
  }
})
