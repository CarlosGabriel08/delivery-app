import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function FoodCard({ 
  name, 
  desc, 
  price, 
  rating, 
  image, 
  style, 
  imageStyle,
  onPress 
}) {
  return (
    <TouchableOpacity 
      style={[{ backgroundColor: '#f9f9f9', borderRadius: 15, padding: 15 }, style]}
      onPress={onPress}
    >
      <Image 
        source={{ uri: image }} 
        style={[{ width: '100%', height: 100, borderRadius: 10 }, imageStyle]} 
      />
      <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{name}</Text>
      <Text style={{ fontSize: 12, color: '#555', marginVertical: 4 }}>{desc}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', color: '#F24C6A' }}>R$ {price}</Text>
        <Text style={{ fontSize: 12 }}>⭐ {rating}</Text>
      </View>
    </TouchableOpacity>
  );
}