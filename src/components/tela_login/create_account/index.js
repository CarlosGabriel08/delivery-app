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

import { useNavigation } from "@react-navigation/native";

export default function Criar_conta({navigation}) {
  return (
    <ScrollView style={style.scroll_geral}   showsVerticalScrollIndicator={false}>

      

        <ImageBackground
          style={style.imagem_fundo}
          source={require("../../../image/Illustration.png")}
          resizeMode="cover"
        />

      


      <TouchableOpacity style={style.button_criar_conta}>

        <View style={{marginTop:15}}>
          <Text style={style.button_text_criar}>Criar Conta</Text>
          <View style={{width:90, height:3,backgroundColor:"#D61355", alignSelf:"center", marginTop:7, borderRadius:8}}></View>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={style.button_login} onPress={()=> navigation.navigate("Login")}>
        <Text style={style.button_text_login}>Login</Text>
      </TouchableOpacity>

      <View style={style.container}>
        <Text style={style.nome}>Nome completo</Text>
        <TextInput style={style.input} placeholder="nome completo" />
        <Text style={style.email}>Email</Text>
        <TextInput style={style.input} keyboardType="email-address"  placeholder="...@gmail.com" />
        <Text style={style.senha}>Senha</Text>
        <TextInput style={style.input} placeholder="senha" />
      </View>


      <TouchableOpacity style={style.button_cadastrar}>
        <Text style={style.button_text_cada}>Cadastrar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const style = StyleSheet.create({

  scroll_geral:{
    flex:1,
    backgroundColor:"white",
  },

  imagem_fundo: {
    top:70,
    width: 300,
    height: 290,
    bottom: 100,
    alignSelf:"center",
  },

  button_criar_conta: {
    marginBottom:-30,
    marginTop:70,
    height: 50,
    width: 150,
    right: 25,
    left:25,
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
    height:50,
    marginLeft:230,
    alignItems: "center",
    backgroundColor: "transparent",
    bottom:15,
  },

  button_text_login: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#D61355",
  },

  container: {
    width: 350,
    height: 200,
    right: 0,
    left:17,
    marginTop:20,
    gap:7,
  },

  nome: {
    fontSize: 15,
    fontWeight: "bold",
  },

  input: {
    width:350,
    borderRadius:3,
    padding:7,
    borderWidth:0.5
  },

  email: {
    fontSize: 15,
    fontWeight: "bold",
  },

  senha: {
    fontSize: 15,
    fontWeight: "bold",
  },

  button_cadastrar: {
    top: 70,
    width: 270,
    height: 50,
    backgroundColor: "#D61355",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    alignSelf:"center",
    
  },

  button_text_cada: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#F6F6F6",
  },

});
