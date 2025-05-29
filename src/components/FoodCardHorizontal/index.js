import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function FoodCardHorizontal({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: '#f9f9f9', borderRadius: 15, padding: 15, marginRight: 15, width: 180 }}>
        <Image source={{ uri: item.Image }} style={{ width: '100%', height: 100, borderRadius: 10 }} />
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
        <Text style={{ fontSize: 12, color: '#555', marginVertical: 4 }}>{item.desc}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', color: '#F24C6A' }}>R$ {item.price}</Text>
          <Text style={{ fontSize: 12 }}>⭐ {item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}