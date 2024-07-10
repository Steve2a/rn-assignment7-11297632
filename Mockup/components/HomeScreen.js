import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Item from './Item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';

const HomeScreen = () => {
    const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const addToCart = async (product) => {
    try {
      const cartItems = await AsyncStorage.getItem('cart');
      let newCart = cartItems ? JSON.parse(cartItems) : [];
      newCart.push({
        ...product,
        price: product.price.toString()  
      });
      await AsyncStorage.setItem('cart', JSON.stringify(newCart));
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <ScrollView>
        <View>
          <View style={styles.container}>

         {/*} <View style={styles.profileContainer}>
    <TouchableOpacity>
        <Image source={require('../assets/Menu.png')}/>

    </TouchableOpacity>
    
    
    <View style={styles.searchBag}>
    <TouchableOpacity>
    <Image source={require('../assets/Search.png')}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
    <Image source={require('../assets/shoppingBag.png')}/>
    </TouchableOpacity>
    </View>
</View>*/}

    

            <View style={styles.ourStory}>
              <Text style={styles.ourStoryText}>OUR STORY</Text>
              <View style={styles.storyIcons}>
                <TouchableOpacity style={styles.imgBg}>
                  <Image source={require('../assets/Listview.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgBg}>
                  <Image source={require('../assets/Filter.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.Item}>
              {products.map((product) => (
                <Item
                  key={product.id}
                  product={product}
                  itemPhoto={{ uri: product.image }}
                  itemName={product.title}
                  itemType={product.category}
                  itemPrice={`$ ${product.price}`}
                  addToCart={() => addToCart({
                    id: product.id,
                    name: product.title,
                    type: product.category,
                    price: `$ ${product.price}`, // Ensure price is a string
                    image: { uri: product.image }
                  })}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor:'#fff'
  },

  logo:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    zIndex:5,
    marginTop:-50

},
profileContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'auto',
    height:'auto',
    marginBottom: 25,
    zIndex:10,

},
searchBag:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:31,
    paddingRight:8

},
  ourStoryText: {
    fontSize: 20,
  },
  ourStory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  storyIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  imgBg: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E3E3',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  Item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
