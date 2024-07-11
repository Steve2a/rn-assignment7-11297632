
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';
import ProductDetailScreen from './components/ProductDetailScreen';
import 'react-native-gesture-handler';
import TestScreen from './components/TestScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import { navigation } from '@react-navigation/native';


const CustomHeaderTitle = () => (
  <Image 
    source={require('./assets/Logo.png')} 
    style={{ width: 100, height: 30, marginLeft:85}}
    resizeMode="contain"
  />
);


const CustomHeaderRight = () => {
  const navigation = useNavigation();
  return(
  <View style={{display:'flex', flexDirection:'row', gap:15, paddingRight:15}}>
  <TouchableOpacity >
    <Image 
      source={require('./assets/Search.png')} 
      style={{ width: 24, height: 24, marginRight: 10 }}
    />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
    <Image 
      source={require('./assets/shoppingBag.png')} 
      style={{ width: 24, height: 24, marginRight: 10 }}
    />
  </TouchableOpacity>
  
  </View>
  
)};




export default function App() {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator
      
      >
      <Drawer.Screen name="Home" component={HomeScreen}  
      options={() => ({
        headerTitle: () => <CustomHeaderTitle />,
        headerRight: ({ navigation }) => <CustomHeaderRight navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
      />
      <Drawer.Screen name="Cart" component={CartScreen} 
      options={() => ({
        headerTitle: () => <CustomHeaderTitle />,
        headerRight: () => (<TouchableOpacity >
          <Image 
            source={require('./assets/Search.png')} 
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
        </TouchableOpacity>),
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0
        },
        headerTintColor: '#000', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerItemStyle: {
          display:'none'
        }
      })}
      />
      <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} 
       options={() => ({
        headerTitle: () => <CustomHeaderTitle />,
        headerRight: () => <CustomHeaderRight />,
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerItemStyle: {
          display:'none'
        }
      })}
      />
      <Drawer.Screen name="Store" component={''} />
      <Drawer.Screen name="Locations" component={''} />
      <Drawer.Screen name="Blog" component={''} />
      <Drawer.Screen name="Jewelery" component={''} />
      <Drawer.Screen name="Electronic" component={''} />
      <Drawer.Screen name="Clothing" component={''} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: 'plum',
    borderWidth:1,
    width:300,
    height:200,
    alignSelf:'center',
    marginTop: 50,

  },

  

});
