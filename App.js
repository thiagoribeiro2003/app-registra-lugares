import { StatusBar } from "expo-status-bar";
import { cloneElement } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView
} from "react-native";


export default function App() {
  return (
    <>
    <ScrollView contentContainerStyle={estilos.contentContainer}>
  
      <SafeAreaView style={estilos.safeContainer}>

      
        <Text style={estilos.tituloExercicio}>
          App 1 - Fotos de lugares visitados
        </Text>

        <View style={estilos.containerNomeLocal}>
          <TextInput
            style={estilos.campoLocal}
            placeholder="Titulo da foto/local"
          />
        </View>

        <View style={estilos.foto}></View>

        <Pressable style={estilos.botaoFoto}>
          <Text style={estilos.textoBotaoFoto}>Tirar Foto</Text>
        </Pressable>

        <View style={estilos.mapa}></View>

        
        <Pressable style={estilos.botaoLocalizar} >
          <Text style={estilos.textoLocalizar}>Localizar no mapa</Text>
        </Pressable>


      </SafeAreaView>
      </ScrollView>
    </>
  );
}

const estilos = StyleSheet.create({
  contentContainer: {
    paddingVertical: 1
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  tituloExercicio: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
  campoLocal: {
    borderWidth: 1,
    fontSize: 18,
    marginTop: 25,
    height: 54,
    width: "90%",
    textAlign: "center", // Deixa o placheholder centralizado
  },
  containerNomeLocal: {
    alignItems: "center",
  },
  foto: {
    marginTop: 20,
    width: "90%",
    height: 200,
    backgroundColor: "#f0f",
    justifyContent: "center",
    marginLeft: 20 
  },
  botaoFoto: {
    marginTop: 20,
    borderWidth: 1,
    height: 54,
    width: "90%",
    marginLeft: 20
  },
  textoBotaoFoto: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10
  },
  mapa: {
    marginTop: 50,
    width: "90%",
    height: 200,
    backgroundColor: "#f0f",
    justifyContent: "center",
    marginLeft: 20 
  },
  botaoLocalizar: {
    marginTop: 20,
    borderWidth: 1,
    height: 54,
    width: "90%",
    marginLeft: 20
  },
  textoLocalizar: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10
  }
   


  
});
