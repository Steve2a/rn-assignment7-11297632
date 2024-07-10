import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <View style={{ marginTop: 24, marginBottom: 16 }}>
          <Image source={require('./assets/Menu.png')} style={{ width: 24, height: 24 }} />
        </View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>Menu</Text>
        <DrawerItemList {...props} />
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ padding: 16 }}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;