import react from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Pedido({ navigation, route }) {
  const { nome, descricao, preco, avaliacao, imagem } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          style={style.imagem}
          source={{ uri: imagem }}
        />
        
        <TouchableOpacity 
          style={{position:"absolute", top:70, left:20, width:50,height:50, justifyContent:"center", alignItems:"center", borderRadius:30, backgroundColor:"rgba(0, 0, 0, 0.3)"}} 
          onPress={()=> navigation.navigate("Tela_principal")}
        >
          <Ionicons name="arrow-back" size={32} color={"white"}></Ionicons>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1.3, borderTopRightRadius: 20, backgroundColor: "#FFFFFF" }}>
        <View style={{ width: 100, height: 30, backgroundColor: "#FFCBCB", marginTop: 30, marginLeft: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
          <Text style={style.text_popular}>Popular</Text>
        </View>
        
        <Text style={style.text_titulo}>{nome}</Text>

        <View style={{height: "100%", marginTop: 100, gap: 30}}>
          <View style={{ flexDirection: "row", marginLeft: 30, marginTop:-20, alignItems:"center" }}>
            {[...Array(5)].map((_, i) => (
              <Ionicons 
                key={i}
                style={{ color: "yellow" }} 
                name={i < Math.floor(avaliacao) ? "star" : i < avaliacao ? "star-half" : "star-outline"}
              />
            ))}
            <Text style={{marginLeft:10}}>{avaliacao}</Text>
          </View>

          <Text style={style.text_descriçao}>{descricao}</Text>
        </View>
      </View>

      <TouchableOpacity style={style.button}>
        <Text style={{ flexDirection: "row", color: "white" }}>adicionar ao carrinho - R$ {preco}</Text>
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
    alignItems: "center",
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
