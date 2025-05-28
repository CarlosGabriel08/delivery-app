import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Criar_conta');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground 
      source={require('../../image/fundo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image 
          source={require('../../image/bicicleteira.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>Food Couriers</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d11f64',
  },
});

export default SplashScreen;