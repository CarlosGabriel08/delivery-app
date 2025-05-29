import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Pedidos({ navigation, route }) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1 }}>
      {/* Imagem do produto */}
      <View style={{ flex: 1 }}>
        <Image style={style.imagem} source={{ uri: item.Image }} />

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 70,
            left: 20,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
          onPress={() => navigation.navigate("Tela_principal")}
        >
          <Ionicons name="arrow-back" size={32} color={"white"} />
        </TouchableOpacity>
      </View>

      {/* Conteúdo abaixo da imagem */}
      <View style={{ flex: 1.3, backgroundColor: "#FFFFFF" }}>
        <View
          style={{
            width: 100,
            height: 30,
            backgroundColor: "#FFCBCB",
            marginTop: 30,
            marginLeft: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={style.text_popular}>Popular</Text>
        </View>

        <Text style={style.text_titulo}>{item.name}</Text>

        <View
          style={{
            height: "100%",
            marginTop: 100,
            gap: 30,
          }}
        >
          {/* Estrelas e avaliação */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 30,
              marginTop: -20,
              alignItems: "center",
            }}
          >
            {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
              <Ionicons key={i} name="star" size={20} color="yellow" />
            ))}
            {item.rating % 1 !== 0 && (
              <Ionicons name="star-half" size={20} color="yellow" />
            )}
            <Text style={{ marginLeft: 10 }}>{item.rating}</Text>
          </View>

          {/* Descrição do item */}
          <Text style={style.text_descriçao}>{item.desc}</Text>
        </View>
      </View>

      {/* Botão adicionar ao carrinho */}
      <TouchableOpacity style={style.button}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          adicionar ao carrinho
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  imagem: {
    width: "100%",
    height: "100%",
  },

  text_popular: {
    color: "#D61355",
  },

  text_titulo: {
    fontWeight: "bold",
    position: "absolute",
    left: 30,
    bottom: 370,
    fontSize: 27,
  },

  text_descriçao: {
    marginLeft: 30,
    fontSize: 14,
    color: "#555",
    marginRight: 30,
    textAlign: "justify",
  },

  button: {
    position: "absolute",
    bottom: 70,
    alignSelf: "center",
    backgroundColor: "#D61355",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
