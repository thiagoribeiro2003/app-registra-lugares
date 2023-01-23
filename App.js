import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function ImagePickerExample() {
  /* ===================================== MAPA E LOCALIZAÇÃO =========================================== */

  const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);

  useEffect(() => {
    async function obterLocalizacao() {
      /* Acessandp o status da requisição de permissão de uso */
      const { status } = await Location.requestForegroundPermissionsAsync();

      /* Acessando os dados de geolocalização */
      let localizacaoAtual = await Location.getCurrentPositionAsync({});

      /* Adicionando os dados ao state */
      setMinhaLocalizacao(localizacaoAtual);
    }

    obterLocalizacao();
  }, []);

  console.log(minhaLocalizacao);

  const regiaoInicial = {
    // Estado de SP
    latitude: -23.533773,
    longitude: -46.65529,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  /* Usando state para controlar a localização */
  const [localizacaoClicada, setLocalizacaoClicada] = useState();

  const marcarLocal = (event) => {
    setLocalizacaoClicada({
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      latitude: minhaLocalizacao.coords.latitude,
      longitude: minhaLocalizacao.coords.longitude,
    });
  };

  /* ===================================== FOTO =========================================== */

  const [foto, setFoto] = useState(); // Recupera a foto que vc vai bater com a câmera

  const acessarCamera = async () => {
    const imagem = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(imagem);

    setFoto(imagem.assets[0].uri);
  };

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

          <View style={estilos.foto}>
            {foto && (
              <Image
                source={{ uri: foto }}
                style={{ width: 371, height: 200 }}
              />
            )}
          </View>

          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "gray" : "#f4f4f4",
              },
              estilos.botaoFoto,
            ]}
            onPress={acessarCamera}
          >
            <Text style={estilos.textoBotaoFoto}>Tirar Foto</Text>
          </Pressable>

          <View style={estilos.mapa}>
            <MapView
              style={{ width: 371, height: 200 }}
              region={localizacaoClicada ?? regiaoInicial}
              liteMode={false}
              mapType="standard"
              userInterfaceStyle="dark"
              onPress={marcarLocal}
            >
              {localizacaoClicada && (
                <Marker
                  coordinate={localizacaoClicada}
                  title="Sua localização!!!"
                  onPress={(e) => console.log(e.nativeEvent)}
                />
              )}
            </MapView>
          </View>

          {minhaLocalizacao && (
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "gray" : "#f4f4f4",
                },
                estilos.botaoLocalizar,
              ]}
              onPress={marcarLocal}
            >
              <Text style={estilos.textoLocalizar}>Salvar localização</Text>
            </Pressable>
          )}
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const estilos = StyleSheet.create({
  contentContainer: {
    paddingVertical: 1,
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
    backgroundColor: "lightblue",
    justifyContent: "center",
    marginLeft: 20,
  },
  botaoFoto: {
    marginTop: 20,
    borderWidth: 1,
    height: 54,
    width: "90%",
    marginLeft: 20,
  },
  textoBotaoFoto: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  mapa: {
    marginTop: 50,
    width: "90%",
    height: 200,
    backgroundColor: "lightblue",
    justifyContent: "center",
    marginLeft: 20,
  },
  botaoLocalizar: {
    marginTop: 20,
    borderWidth: 1,
    height: 54,
    width: "90%",
    marginLeft: 20,
  },
  textoLocalizar: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
  },
});
