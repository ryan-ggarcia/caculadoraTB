import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Fruit from '../src/img/fruta.jpg'


export default function TaxaBasal() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#DAE3E5' }}>
            <Text style={style.legend}>
                O que é a Taxa Basal?
            </Text>
            {/* Imagem */}
            <View style={style.config}>
                <Image source={Fruit} style={{ width: 300, height: 350, borderRadius: 10 }} />
            </View>

            <View style={style.config}>
                <Text style={style.textConfig}>
                    Imagine seu corpo como um carro, assim como um carro precisa de combustível para funcionar,
                    seu corpo precisa de energia para realizar todas as suas funções, desde respirar até pensar.
                    A taxa basal é como um tanque de combustível mínimo. 
                    É a quantidade de energia que seu corpo precisa para manter as funções vitais funcionando enquanto você está em repouso, 
                    ou seja, quando você não está se exercitando, comendo ou fazendo qualquer atividade física.
                </Text>
            </View>
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    legend: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10,
    },
    config: {
        alignItems: 'center',
        marginTop: 20
    },
    textConfig:{
        textAlign:'center',
        fontSize:15
    }

})