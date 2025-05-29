import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Tela_carrinho({navigation}) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    carregarCarrinho();
  }, []);

  const carregarCarrinho = async () => {
    try {
      const carrinho = await AsyncStorage.getItem('carrinho');
      if (carrinho) {
        setCartItems(JSON.parse(carrinho));
      }
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
    }
  };

  const atualizarQuantidade = async (itemId, incremento) => {
    try {
      const novosItens = cartItems.map(item => {
        if (item.id === itemId) {
          const novaQuantidade = item.quantidade + incremento;
          if (novaQuantidade > 0) {
            return { ...item, quantidade: novaQuantidade };
          }
          return null;
        }
        return item;
      }).filter(Boolean);

      setCartItems(novosItens);
      await AsyncStorage.setItem('carrinho', JSON.stringify(novosItens));
    } catch (error) {
      console.error('Erro ao atualizar quantidade:', error);
    }
  };

  const subTotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantidade, 0);
  const delivery = 15;
  const discount = 10;
  const total = (subTotal + delivery - discount).toFixed(2);

  return (
    <View style={styles.container}>
        <View style={{flexDirection:"row", gap:17}}>
            <TouchableOpacity onPress={()=> navigation.navigate("Tela_principal")}>
                <Ionicons name='arrow-back' size={27}></Ionicons>
            </TouchableOpacity>
        <Text style={styles.header}>Detalhes do pedido</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {cartItems.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={{ uri: item.Image}} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDesc}>{item.desc}</Text>
              <Text style={styles.itemPrice}>R$ {item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={() => atualizarQuantidade(item.id, -1)}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantidade}</Text>
              <TouchableOpacity 
                style={[styles.quantityButton, { backgroundColor: '#f43f5e' }]}
                onPress={() => atualizarQuantidade(item.id, 1)}
              >
                <Text style={[styles.quantityButtonText, { color: '#fff' }]}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Sub-Total</Text>
          <Text style={styles.summaryLabel}>R$ {subTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Taxa de entrega</Text>
          <Text style={styles.summaryLabel}>R$ {delivery.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Desconto</Text>
          <Text style={styles.summaryLabel}>R$ {discount.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryTotal}>Total</Text>
          <Text style={styles.summaryTotal}>R$ {total}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Faça meu Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom:70
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollView: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#eee',
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 10,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemDesc: {
    fontSize: 13,
    color: '#888',
  },
  itemPrice: {
    color: '#e60023',
    fontWeight: 'bold',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 16,
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  summaryContainer: {
    backgroundColor: '#ffe4e6',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  summaryLabel: {
    color: '#444',
  },
  summaryTotal: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderButton: {
    backgroundColor: '#e60023',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
