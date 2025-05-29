import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import CartButton from '../CartButton';
import FoodCardHorizontal from '../FoodCardHorizontal';

export default function Tela_principal ({navigation}){

  const produtos = [
    {
      id: '1',
      name: 'Hambúrguer Clássico',
      desc: 'Hambúrguer artesanal com queijo derretido e alface fresca',
      price: '35.90',
      rating: 4.5,
      Image: 'https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '2',
      name: 'Triplo X-Burger',
      desc: 'Hambúrguer premium com 3 carnes suculentas, queijo cheddar derretido, alface crocante e tomate fresco',
      price: '49.90',
      rating: 4.2,
      Image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg'
    },
    {
      id: '3',
      name: 'Hambúrguer Clássicão',
      desc: 'Hambúrguer com carne, queijo cheddar, bacon, alface e tomate',
      price: '42.90',
      rating: 4.0,
      Image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
    },
    {
      id: '4',
      name: 'Hambúrguer de Frango Duplo',
      desc: 'Dois hambúrgueres de frango grelhado, queijo especial e molho barbecue',
      price: '39.90',
      rating: 4.8,
      Image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg'
    }
  ];

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 }}>
      {/* Localização e perfil */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
        <Image source={{ uri: 'https://i.pravatar.cc/50' }} style={{ width: 35, height: 35, borderRadius: 20 }} />
      </View>

      {/* Barra de pesquisa */}
      <View style={{ marginVertical: 20, backgroundColor: '#f2f2f2', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput placeholder="Pesquisar" style={{ marginLeft: 10, flex: 1 }} />
      </View>

      {/* Banner promocional */}
      <TouchableOpacity onPress={()=> navigation.navigate("Pedidos",{
        item :{
          id: '2',
          name: 'Triplo X-Burger',
          desc: 'Hambúrguer premium com 3 carnes suculentas, queijo cheddar derretido, alface crocante e tomate fresco',
          price: '32.90',
          rating: 4.2,
          Image: '../../image/ofertaespecial.png',
          } 
        }
      )}>
      <Image source={require('../../image/ofertaespecial.png')}
        style={{ width: '100%', height: 150, borderRadius: 15, marginBottom: 20}} />
      </TouchableOpacity>

      {/* Abas de categoria */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        {['Hambúrguer', 'Pizza'].map((item, index) => (
          <TouchableOpacity key={index} style={{ paddingVertical: 6, paddingHorizontal: 14, backgroundColor: item === 'Hambúrguer' ? '#F24C6A' : '#f2f2f2', borderRadius: 20 }}>
            <Text style={{ color: item === 'Hambúrguer' ? '#fff' : '#000' }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Cards de comida */}
      <FlatList
        data={produtos}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        renderItem={({ item }) => (
          <FoodCardHorizontal 
            item={item} 
            onPress={() => navigation.navigate("Pedidos", { item })}
          />
        )}
      />

      {/* Seção popular */}
      <View style={{ marginTop: 30, marginBottom: 20, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Cardápio Popular</Text>
          <Text style={{ color: '#F24C6A' }}>Ver Todos</Text>
        </View>

        {produtos.map((item) => (
          <TouchableOpacity 
            key={item.id}
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }} 
            onPress={() => navigation.navigate("Pedidos", { item })}
          >
            <Image source={{ uri: item.Image }} style={{ width: 70, height: 70, borderRadius: 10 }} />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ color: '#999', fontSize: 12 }}>{item.desc}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', color: '#F24C6A', marginLeft: 'auto' }}>R${item.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

    <CartButton onPress={() => navigation.navigate("Tela_carrinho")} />
    </View>
  );
};
