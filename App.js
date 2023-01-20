import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={estilos.safeContainer}>
        <Text style={estilos.tituloExercicio}>
          App 1 - Fotos de lugares visitados
        </Text>

        <View style={estilos.containerNomeLocal}>
          <TextInput
            style={estilos.nomeLocal}
            placeholder="Titulo da foto/local"
          />
        </View>

        <View style={estilos.foto}></View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  tituloExercicio: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
  nomeLocal: {
    borderWidth: 1,
    fontSize: 16,
    marginTop: 20,
    height: 50,
    width: "90%",
    textAlign: "center", // Deixa o placheholder centralizado
  },
  containerNomeLocal: {
    alignItems: "center",
  },
  mapa: {
    backgroundColor: "#f0f",
    height: 20,
    width: 20,
  },
});
