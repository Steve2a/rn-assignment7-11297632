import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  const navigateToProductDetail = (item) => {
    navigation.navigate('ProductDetail', { product: item });
  };

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const cart = await AsyncStorage.getItem('cart');
        if (cart !== null) {
          setCartItems(JSON.parse(cart));
        }
      } catch (error) {
        console.error('Error loading cart items:', error);
      }
    };

    loadCartItems();
  }, []);

  const removeFromCart = async (id) => {
    try {
      const updatedCart = cartItems.filter(item => item.id !== id);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Cart</Text>
        </View>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <TouchableOpacity 
              style={styles.productImage}
              onPress={() => navigateToProductDetail(item)}
            >
              <Image source={item.image} style={styles.itemImage} />
            </TouchableOpacity>
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemType}>{item.type}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity 
              style={styles.removeButton} 
              onPress={() => removeFromCart(item.id)}>
              <Image source={require('../assets/remove.png')} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
     {/* <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: </Text>
        <Text style={styles.totalSum}>${calculateTotal()}</Text>
      </View>*/}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 35,
  },

  productImage:{
    width: 60,
    height: 80,
    marginRight: 15,
  },
  itemImage: {
    width: 60,
    height: 80,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemType: {
    color: '#555555',
  },
  itemPrice: {
    fontSize: 16,
    color: '#DD8560',
    marginTop: 5,
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E3E3E3',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalSum: {
    fontSize: 18,
    color: '#DD8560',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    margin: 15,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
