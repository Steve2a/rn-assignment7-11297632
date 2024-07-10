import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';


const TestScreen = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedProduct(item)}>
      <View style={styles.item}>
       
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedProduct? (
        <View style={styles.details}>
          <Text style={styles.title}>{selectedProduct.title}</Text>
          <Text>{selectedProduct.description}</Text>
          <Text>Price: ${selectedProduct.price}</Text>
          <TouchableOpacity onPress={() => setSelectedProduct(null)}>
            <Text style={styles.backButton}>Back to List</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>

  );
};
{/*<View style={styles.itemContainer}>
      <View style={styles.dressContainer}>
        <View style={styles.itemImage}>
          <Image style={styles.dressImage} source={product.image} />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(product)}>
          <Image source={require('../assets/add_circle.png')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.nameText}>{product.title}</Text>
      <Text style={styles.typeText}>{product.category}</Text>
      <Text style={styles.priceText}>{product.price}</Text>
    </View> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
  details: {
    padding: 20,
  },
  backButton: {
    marginTop: 20,
    color: 'blue',
  },

  itemContainer: {
    paddingBottom: 20

  },

  itemImage: {
    display: 'flex',
    height: 260,
    width: 185,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:1,
  },

  dressImage: {
    objectFit: 'cover',
    height: 260,
    width: 185,
  },

  typeText: {
    color: '#555555'
  },

  priceText: {
    fontSize: 20,
    color: '#DD8560'
  },

  dressContainer: {
    display:'flex',
    zIndex: 1,

  },

  addButton: {
    zIndex: 2,
    alignSelf:'flex-end',
    paddingRight:10,
    bottom:32



  },
});

export default TestScreen;