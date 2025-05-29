import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CartButton({ onPress }) {
  return (
    <View style={{
      position: 'absolute',
      left: 290,
      bottom: 70,
    }}>
      <TouchableOpacity 
        style={{
          width: 70,
          height: 70,
          backgroundColor: "#dc3545",
          borderRadius: 35,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={onPress}
      >
        <Ionicons name="cart" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}