import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function Pedido_feito({navigation}){
    return(
        <View style={{flex:1, justifyContent:"center"}}>

            <View style={{width:27, height:27, backgroundColor:"#D61355", position:"absolute", left:100, top:250, borderRadius:30}}/>
           
            <View style={{width:17, height:17, backgroundColor:"#D61355", position:"absolute", left:100, top:380, borderRadius:30}}/>

            <View style={{width:27, height:27, backgroundColor:"#D61355", position:"absolute", left:100, top:250, borderRadius:30}}/>

            <View style={{width:17, height:17, backgroundColor:"#D61355", position:"absolute", left:270, top:250, borderRadius:30}}/>

            <View style={{width:10, height:10, backgroundColor:"#D61355", position:"absolute", left:270, top:400, borderRadius:30}}/>

            <View style={{width:100, height:100, backgroundColor:"#D61355", justifyContent:"center", alignSelf:"center", borderRadius:50}}>
                <Ionicons name="checkmark" size={54} color="white" style={{position:"absolute", alignSelf:"center"}}/> 
            </View>

            <View style={{alignSelf:"center", marginTop:20,}}>
                <Text style={style.text}>  Obrigado !</Text>
                <Text style={style.text}>Pedido Feito</Text>
            </View>

            <View style={{alignSelf:"center", marginTop:20}}>
                <Text style={{color:"rgba(0,0,0,0.3)"}}>Coloque a avalição do seu ultimo motorista</Text>
            </View>

            <View style={{alignSelf:"center", marginTop:30}}>
                <Image source={require("../../image/Star Icon.png")}/>
            </View>

            <View style={{position:"absolute", flexDirection:"row", bottom:90, alignSelf:"center"}}>
                <TouchableOpacity style={{backgroundColor:"#D61355", width:230, height:57,alignSelf:"center",justifyContent:"center", borderRadius:10, marginRight:0}}>
                    <Text style={{alignSelf:"center",color:"#FEFEFF"}}>Compartilhar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"", width:130, height:57,alignSelf:"center",justifyContent:"center", borderRadius:10}}  onPress={()=> navigation.navigate("Tela_principal")}>
                    <Text style={{alignSelf:"center", color:"#D61355", fontWeight:"700"}}>Pular</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const style = StyleSheet.create({
    text:{
        fontWeight:"bold",
        fontSize:20
    }
})