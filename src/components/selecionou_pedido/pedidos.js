import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Pedidos({ navigation, route }) {
  const { item } = route.params;

  const adicionarAoCarrinho = async () => {
    try {
      // Busca itens existentes no carrinho
      const carrinhoAtual = await AsyncStorage.getItem('carrinho');
      const itensCarrinho = carrinhoAtual ? JSON.parse(carrinhoAtual) : [];
      
      // Verifica se o item já existe no carrinho
      const itemExistente = itensCarrinho.find(i => i.id === item.id);
      
      if (itemExistente) {
        // Se existir, incrementa a quantidade
        itemExistente.quantidade += 1;
      } else {
        // Se não existir, adiciona novo item
        itensCarrinho.push({
          ...item,
          quantidade: 1,
          price: item.price
        });
      }
      
      // Salva o carrinho atualizado
      await AsyncStorage.setItem('carrinho', JSON.stringify(itensCarrinho));
      alert('Item adicionado ao carrinho!');
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      alert('Erro ao adicionar ao carrinho');
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagem do produto */}
      <View style={styles.imageContainer}>
        <Image style={styles.imagem} source={{ uri: item.Image }} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Tela_principal")}
        >
          <Ionicons name="arrow-back" size={32} color={"white"} />
        </TouchableOpacity>
      </View>

      {/* Conteúdo abaixo da imagem */}
      <View style={styles.contentContainer}>
        <View style={styles.popularTag}>
          <Text style={styles.popularText}>Popular</Text>
        </View>

        <Text style={styles.title}>{item.name}</Text>

        <View style={styles.ratingContainer}>
          {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
            <Ionicons key={i} name="star" size={20} color="#FFD700" />
          ))}
          {item.rating % 1 !== 0 && (
            <Ionicons name="star-half" size={20} color="#FFD700" />
          )}
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>

        <Text style={styles.description}>{item.desc}</Text>

        <TouchableOpacity style={styles.button} onPress={adicionarAoCarrinho}>
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    flex: 1.3,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  popularTag: {
    width: 100,
    height: 30,
    backgroundColor: '#FFE5E5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 16,
  },
  popularText: {
    color: '#D61355',
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#D61355',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
