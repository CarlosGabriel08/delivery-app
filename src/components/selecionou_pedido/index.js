import react from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Pedido({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>

        <Image
          style={style.imagem}
          source={{
          uri: "https://blog.biglar.com.br/wp-content/uploads/2024/08/iStock-1398630614.jpg",}}
        />


        
            <TouchableOpacity style={{position:"absolute", top:70, left:20, width:50,height:50, justifyContent:"center", alignItems:"center", borderRadius:30, backgroundColor:"rgba(0, 0, 0, 0.3)"}} onPress={()=> navigation.navigate("Tela_principal")}>
            <Ionicons name="arrow-back" size={32} color={"white"}></Ionicons>
            </TouchableOpacity>


      </View>

      <View
        style={{
          flex: 1.3,
          borderTopRightRadius: 20,
          backgroundColor: "#FFFFFF",
        }}
      >
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
        
        <Text style={style.text_titulo}>Chesse Burguer</Text>

        <View style={{height: "100%",backgroundColor: "",marginTop: 100,gap: 30,}}>

          <View style={{ flexDirection: "row", marginLeft: 30, marginTop:-20, alignItems:"center", backgroundColor:"" }}>
            <Ionicons style={{ color: "yellow" }} name="star"></Ionicons>
            <Ionicons style={{ color: "yellow" }} name="star"></Ionicons>
            <Ionicons style={{ color: "yellow" }} name="star"></Ionicons>
            <Ionicons style={{ color: "yellow" }} name="star"></Ionicons>
            <Ionicons style={{ color: "yellow" }} name="star-half"></Ionicons>
            <Text style={{marginLeft:10}}>4,8</Text>
          </View>

          <Text style={style.text_descriçao}>
            "Um clássico que nunca sai de moda: hambúrguer artesanal de 150g,
            queijo cheddar derretido, alface crocante, tomate fresco e o nosso
            molho especial, tudo isso no pão brioche levemente tostado. Simples,
            saboroso e perfeito para qualquer hora."
          </Text>
        </View>
      </View>

      <TouchableOpacity style={style.button}>
        <Text style={{ flexDirection: "row", color: "white" }}>adicionar ao carrinho</Text>
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
