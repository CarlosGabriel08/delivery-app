import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

export default function Criar_conta() {
  return (
    <View>

      <View style={style.View_fundo}>

        <ImageBackground
          style={style.imagem_fundo}
          source={require("../../../assets/image")}
        />

      </View>


      <TouchableOpacity style={style.button_criar_conta}>
        <Text style={style.button_text_criar}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button_login}>
        <Text style={style.button_text_login}>Login</Text>
      </TouchableOpacity>

      <View style={style.container}>
        <Text style={style.nome}>Nome completo</Text>
        <TextInput style={style.input} placeholder="nome completo" />
        <Text style={style.email}>Email</Text>
        <TextInput style={style.input} placeholder="email" />
        <Text style={style.senha}>Senha</Text>
        <TextInput style={style.input} placeholder="senha" />
      </View>

      <TouchableOpacity style={style.button_cadastrar}>
        <Text style={style.button_text_cada}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button_cadastrar_google}>
        <Image
          style={style.simbolo_google}
          source={require("../../../assets/image/simbolo-do-google.png")}
        />
        <Text style={style.button_text_google}>Cadastrar com o Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  View_fundo:{
    position:"absolute",
    width:"100%",
    height:340,
    right:-117
    },
  imagem_fundo: {
    position: "absolute",
    width: 300,
    height: 180,
    bottom: 350,
  },
  button_criar_conta: {
    top: 27,
    height: 50,
    width: 150,
    right: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  button_text_criar: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#D61355",
  },

  button_login: {
    width: 150,
    bottom: 15,
    left: 160,
    alignItems: "center",
    backgroundColor: "transparent",
  },

  button_text_login: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#D61355",
  },

  container: {
    width: 150,
    height: 180,
    right: 30,
    padding: 0,
    top: 40,
  },

  nome: {
    fontSize: 15,
    fontWeight: "bold",
  },

  input: {},

  email: {
    fontSize: 15,
    fontWeight: "bold",
  },

  senha: {
    fontSize: 15,
    fontWeight: "bold",
  },

  button_cadastrar: {
    top: 100,
    width: 270,
    height: 50,
    backgroundColor: "#D61355",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },

  button_text_cada: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#F6F6F6",
  },

  button_cadastrar_google: {
    top: 140,
    height: 50,
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: -20,
    flexDirection: "row",
    gap: 10,
  },

  button_text_google: {
    fontWeight: "bold",
  },

  simbolo_google: {
    width: 30,
    height: 30,
  },
});
