import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Criar_conta({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    try {
      if (!nome.trim()) {
        Alert.alert('Erro', 'Por favor, digite seu nome completo');
        return;
      }

      if (!email.trim()) {
        Alert.alert('Erro', 'Por favor, digite seu email');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Alert.alert('Erro', 'Por favor, digite um email válido');
        return;
      }

      if (!senha.trim()) {
        Alert.alert('Erro', 'Por favor, digite sua senha');
        return;
      }

      if (senha.length < 6) {
        Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
        return;
      }

      const usuarios = await AsyncStorage.getItem('usuarios');
      const usuariosArray = usuarios ? JSON.parse(usuarios) : [];
      
      const emailExistente = usuariosArray.find(user => user.email === email);
      if (emailExistente) {
        Alert.alert('Erro', 'Este email já está cadastrado');
        return;
      }

      const novoUsuario = {
        nome: nome.trim(),
        email: email.trim(),
        senha: senha.trim(),
      };

      usuariosArray.push(novoUsuario);

      await AsyncStorage.setItem('usuarios', JSON.stringify(usuariosArray));

      Alert.alert(
        'Sucesso', 
        'Conta criada com sucesso!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login')
          }
        ]
      );
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao criar a conta');
      console.error(error);
    }
  };

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
            <TextInput 
              style={style.input} 
              placeholder="Digite seu nome completo"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
            />
            <Text style={style.label}>Email</Text>
            <TextInput 
              style={style.input} 
              keyboardType="email-address" 
              placeholder="Digite seu email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <Text style={style.label}>Senha</Text>
            <TextInput 
              style={style.input} 
              placeholder="Digite sua senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          <TouchableOpacity 
            style={style.button_cadastrar}
            onPress={handleCadastro}
          >
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
    borderColor: "rgba(0, 0, 0, 0.1)",
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
