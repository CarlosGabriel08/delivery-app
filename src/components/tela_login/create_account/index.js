import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


export default function Criar_conta({navigation}) {
  return (
    <ScrollView style={style.scroll_geral} showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <View style={style.content}>
          <ImageBackground
            style={style.imagem_fundo}
            source={require("../../../image/Illustration.png")}
            resizeMode="cover"
          />

          <View style={style.header}>
            <TouchableOpacity style={style.button_criar_conta}>
              <View>
                <Text style={style.button_text_criar}>Criar Conta</Text>
                <View style={style.underline}></View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.button_login} onPress={()=> navigation.navigate("Login")}>
              <Text style={style.button_text_login}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={style.form}>
            <Text style={style.label}>Nome completo</Text>
            <TextInput style={style.input} placeholder="Digite seu nome completo" />
            <Text style={style.label}>Email</Text>
            <TextInput style={style.input} keyboardType="email-address" placeholder="Digite seu email" />
            <Text style={style.label}>Senha</Text>
            <TextInput style={style.input} placeholder="Digite sua senha" />
          </View>

          <TouchableOpacity style={style.button_cadastrar}>
            <Text style={style.button_text_cada}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  scroll_geral: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  content: {
    width: "90%",
    alignItems: "center",
  },

  imagem_fundo: {
    width: 300,
    height: 290,
    marginTop: 70,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },

  button_criar_conta: {
    alignItems: "center",
  },

  button_text_criar: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#D61355",
  },

  underline: {
    width: 90,
    height: 3,
    backgroundColor: "#D61355",
    marginTop: 7,
    borderRadius: 8,
  },

  button_login: {
    alignItems: "center",
  },

  button_text_login: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#D61355",
  },

  form: {
    width: "100%",
    marginTop: 20,
    gap: 7,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    borderRadius: 3,
    padding: 7,
    borderWidth: 0.5,
  },

  button_cadastrar: {
    width: 270,
    height: 50,
    backgroundColor: "#D61355",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginTop: 70,
  },

  button_text_cada: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#F6F6F6",
  },
});
