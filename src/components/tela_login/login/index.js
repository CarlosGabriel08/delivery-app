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

export default function Login({navigation}) {
  return (
    <View>

      <View style={style.View_fundo}>

        <ImageBackground
          style={style.imagem_fundo}
          source={require("../../../image/Illustration.png")}
        />

      </View>


      <TouchableOpacity style={style.button_criar_conta}  onPress={()=> navigation.navigate("Criar_conta")}>
        <Text style={style.button_text_criar}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button_login}>

        <View>
          <Text style={style.button_text_login}>Login</Text>
          <View style={{width:50, height:3,backgroundColor:"#D61355", alignSelf:"center", marginTop:7, borderRadius:8}}></View>
        </View>

      </TouchableOpacity>

      <View style={style.container}>
        <Text style={style.email}>Email</Text>
        <TextInput style={style.input} keyboardType="email-address"  placeholder="...@gmail.com" />
        <Text style={style.senha}>Senha</Text>
        <TextInput style={style.input} placeholder="senha" />
      </View>

      <TouchableOpacity style={style.button2_Log}>
        <Text style={style.button2_text_Log}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const style = StyleSheet.create({
  view_geral:{
    flex:1,
    backgroundColor:"white",
  },
  View_fundo:{
    width:"100%",
    height:340,
    backgroundColor:""
    },
  imagem_fundo: {
    top:70,
    width: 300,
    height: 290,
    bottom: 100,
    alignSelf:"center",
  },
  button_criar_conta: {
    top:30,
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
    top:20,
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

  button2_Log: {
    top: 70,
    width: 270,
    height: 50,
    backgroundColor: "#D61355",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    alignSelf:"center",
    
  },

  button2_text_Log: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#F6F6F6",
  },
});
