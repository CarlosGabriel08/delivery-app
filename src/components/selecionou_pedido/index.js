import react from "react";
import { View,Image,Text,TouchableOpacity,StyleSheet, } from "react-native"
import { Ionicons } from "@expo/vector-icons";

export default function Pedido(){
    return(
        <View style={{flex:1}}>


            <View style={{flex:1, backgroundColor:""}}>
                <Image style={style.imagem} source={{uri: "https://blog.biglar.com.br/wp-content/uploads/2024/08/iStock-1398630614.jpg"}}/>
                    
               
            </View> 


            <View style={{flex:1.3,borderTopLeftRadius:20, borderTopRightRadius:20,backgroundColor:"#FFFFFF"}}>


                <View style={{width:100, height:30,backgroundColor:"#FFCBCB", marginTop:50,marginLeft:30, alignItems:"center", justifyContent:"center",borderRadius:10}}>
                    <Text style={style.text_popular}>Popular</Text>
                </View>

               {/* <View style={{width:45,  height:45, alignItems:"center", justifyContent:"center", borderRadius:27, backgroundColor:"#FFCBCB",position:"absolute", left:320, top:43}}>
                    <Ionicons name="heart" size={32} ></Ionicons>
                </View>*/ }
            
                <View style={{height:"100%", backgroundColor:"red"}}>

                    <View style={{flexDirection:"row", marginLeft:0,}}>
                        <Ionicons style={{color:"yellow"}} name="star"></Ionicons>
                        <Ionicons style={{color:"yellow"}} name="star"></Ionicons> 
                        <Ionicons style={{color:"yellow"}} name="star"></Ionicons>
                        <Ionicons style={{color:"yellow"}} name="star"></Ionicons>
                        <Ionicons style={{color:"yellow"}} name="star-half"></Ionicons>
                    </View>

                    <Text style={style.text_descriçao}>"Um clássico que nunca sai de moda: hambúrguer artesanal de 150g, queijo cheddar derretido, alface crocante, tomate fresco e o nosso molho especial, tudo isso no pão brioche levemente tostado. Simples, saboroso e perfeito para qualquer hora."</Text>

                </View>

            
            </View> 
                    
           
                <TouchableOpacity style={style.button}>
                    <Text style={{flexDirection:"row", color:"white"}}>adicionar ao carrinho</Text>
                </TouchableOpacity>
            
        </View>
    )
}

const style = StyleSheet.create({
    imagem: {
        width:"100%",
        height:"100%",
    },

    text_popular:{
        color:"#D61355"
    },

    text_titulo:{
        fontWeight:"bold",
        position:"absolute",
        left:30,
        bottom:90,
        fontSize:27
    },

    text_descriçao:{
        marginLeft:30,
        alignItems:"center"
    },

    button:{
        position:"absolute",
        bottom:70,
        alignSelf:"center",
        backgroundColor:"#D61355",
        width:"80%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    }
})