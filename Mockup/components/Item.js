import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Item = ({ product, addToCart, image }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity 
        style={styles.dressContainer}
        onPress={() => navigation.navigate('ProductDetail', { product })}
      >
        <Image style={styles.dressImage} source={image} />
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(product)}>
          <Image source={require('../assets/add_circle.png')} />
        </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.nameText} numberOfLines={1}>{product.title}</Text>
      <Text style={styles.typeText}>{product.category}</Text>
      <Text style={styles.priceText}>${product.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingBottom: 20,
    width: 185,
  },
  dressContainer: {
    height: 260,
    width: 185,
    marginBottom: 10,
  },
  dressImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  addButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    zIndex: 2,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  typeText: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 18,
    color: '#DD8560',
    fontWeight: 'bold',
  },
});

export default Item;