import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import FoodCard from '../card_comida';

export default function Tela_principal ({navigation}){

  const produtos = [
  {
    id: '1',
    name: 'Chicken burger',
    desc: '100 gr chicken + tomato + lettuce + cheese',
    price: '15.00',
    rating: 4.2,
    Image: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/77XTHHCCLBEXLC2Y5RK4PN37CE.jpg',
  },
  {
    id: '2',
    name: 'Cheese burger',
    desc: '100 gr meat + cheese + tomato + lettuce',
    price: '20.00',
    rating: 4.5,
    Image: 'https://blog.biglar.com.br/wp-content/uploads/2024/08/iStock-1398630614.jpg',
  },
];




  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 }}>
      {/* Location and profile */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
        <Image source={{ uri: 'https://i.pravatar.cc/50' }} style={{ width: 35, height: 35, borderRadius: 20 }} />
      </View>

      {/* Search bar */}
      <View style={{ marginVertical: 20, backgroundColor: '#f2f2f2', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput placeholder="Search" style={{ marginLeft: 10, flex: 1 }} />
      </View>

      {/* Promo banner */}

      <TouchableOpacity onPress={()=> navigation.navigate("Pedidos",{
        item :{
          id: '2',
          name: 'Cheese burger',
          desc: '100 gr meat + cheese + tomato + lettuce',
          price: '15.00',
          rating: 4.5,
          Image: 'https://blog.biglar.com.br/wp-content/uploads/2024/08/iStock-1398630614.jpg',
          } 
        }
      )}>
      <Image source={{ uri: 'https://blog.biglar.com.br/wp-content/uploads/2024/08/iStock-1398630614.jpg' }}
        style={{ width: '100%', height: 150, borderRadius: 15, marginBottom: 20}} />
      </TouchableOpacity>

      <Image source={require('../../image/ofertaespecial.png')}
        style={{ width: '100%', height: 150, borderRadius: 15, marginBottom: 20,backgroundColor:"red"}} />


      {/* Category tabs */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        {['Burger', 'Pizza'].map((item, index) => (
          <TouchableOpacity key={index} style={{ paddingVertical: 6, paddingHorizontal: 14, backgroundColor: item === 'Burger' ? '#F24C6A' : '#f2f2f2', borderRadius: 20 }}>
            <Text style={{ color: item === 'Burger' ? '#fff' : '#000' }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Food cards */}

      <FlatList
        data={produtos}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: '#f9f9f9', borderRadius: 15, padding: 15, marginRight: 15, width: 180 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Pedidos", { item })}>
              <Image source={{ uri: item.Image }} style={{ width: '100%', height: 100, borderRadius: 10 }} />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
            <Text style={{ fontSize: 12, color: '#555', marginVertical: 4 }}>{item.desc}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: '#F24C6A' }}>$ {item.price}</Text>
              <Text style={{ fontSize: 12 }}>⭐ {item.rating}</Text>
            </View>
          </View>
        )}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[
          {
            name: 'Hambúrguer Clássico',
            desc: 'Hambúrguer artesanal com queijo derretido e alface fresca',
            price: '20.00',
            rating: 4.5,
            image: 'https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            name: 'Triplo X-Burger',
            desc: 'Hambúrguer premium com 3 carnes suculentas, queijo cheddar derretido, alface crocante e tomate fresco',
            price: '32.90',
            rating: 4.2,
            image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg'
          },
          {
            name: 'Hambúrguer Clássicão',
            desc: 'Hambúrguer com carne, queijo cheddar, bacon, alface e tomate',
            price: '27.00',
            rating: 4.0,
            image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
          },
          {
            name: 'Hambúrguer de Frango Duplo',
            desc: 'Dois hambúrgueres de frango grelhado, queijo especial e molho barbecue',
            price: '25.00',
            rating: 4.8,
            image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg'
          }
        ].map((item, index) => (
          <TouchableOpacity 
            key={index}
            onPress={() => navigation.navigate('Pedido', { 
              nome: item.name,
              descricao: item.desc,
              preco: item.price,
              avaliacao: item.rating,
              imagem: item.image
            })}
          >
            <FoodCard
              name={item.name}
              desc={item.desc}
              price={item.price}
              rating={item.rating}
              image={item.image}
              style={{ marginRight: 15, width: 180 }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>


      {/* Popular section */}
      <View style={{ marginTop: 30, marginBottom: 20, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Popular Meal Menu</Text>
          <Text style={{ color: '#F24C6A' }}>See All</Text>
        </View>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, }} onPress={()=> navigation.navigate("Pedidos", {
          item:{
          id: '1',
          name: 'Chicken burger',
          desc: '100 gr chicken + tomato + lettuce + cheese',
          price: '15.00',
          rating: 4.2,
          Image: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/77XTHHCCLBEXLC2Y5RK4PN37CE.jpg',
          } 
        }
        )}>
          <Image source={{ uri: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/77XTHHCCLBEXLC2Y5RK4PN37CE.jpg' }} style={{ width: 70, height: 70, borderRadius: 10 }} />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>Chicken Burguer</Text>
            <Text style={{ color: '#999', fontSize: 12 }}>100 gr meat + cheese + tomato + lettuce</Text>
          </View>
          <Text style={{ fontWeight: 'bold', color: '#F24C6A', marginLeft: 'auto' }}>$15</Text>
        </TouchableOpacity>


          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Hambúrgueres Populares</Text>
          <Text style={{ color: '#F24C6A' }}>Ver Todos</Text>
        </View>
        {(() => {
          const popularBurgers = [
            {
              name: 'Hambúrguer Clássico',
              desc: 'Hambúrguer artesanal com queijo derretido e alface fresca',
              price: '20.00',
              rating: 4.5,
              image: 'https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
              name: 'Triplo X-Burger',
              desc: 'Hambúrguer premium com 3 carnes suculentas, queijo cheddar derretido, alface crocante e tomate fresco',
              price: '32.90',
              rating: 4.2,
              image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg'
            },
            {
              name: 'Hambúrguer Clássicão',
              desc: 'Hambúrguer com carne, queijo cheddar, bacon, alface e tomate',
              price: '27.00',
              rating: 4.0,
              image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
            },
            {
              name: 'Hambúrguer de Frango Duplo',
              desc: 'Dois hambúrgueres de frango grelhado, queijo especial e molho barbecue',
              price: '25.00',
              rating: 4.8,
              image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg'
            }
          ];

          return popularBurgers
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3)
            .map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 10 }} />
                <View style={{ marginLeft: 15, flex: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                  <Text style={{ color: '#999', fontSize: 12 }}>{item.desc}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                    <FontAwesome name="star" size={12} color="#FFD700" />
                    <Text style={{ marginLeft: 4, fontSize: 12 }}>{item.rating}</Text>
                  </View>
                </View>
                <Text style={{ fontWeight: 'bold', color: '#F24C6A' }}>R${item.price}</Text>
              </View>
            ));
        })()}

      </View>
    </ScrollView>
  );
};
