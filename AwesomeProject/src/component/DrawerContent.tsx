/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title} from 'react-native-paper';

import AntDesign from 'react-native-vector-icons/AntDesign';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign1 from 'react-native-vector-icons/AntDesign';
import AntDesign2 from 'react-native-vector-icons/AntDesign';
interface DrawerContentProps {
  navigation: any;
}
const DrawerContent: React.FC<DrawerContentProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Avatar.Image
                source={{
                  uri: 'https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=',
                }}
                size={80}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <View style={styles.userInfo}>
              <Title style={styles.title}>Utkarsh Singhal</Title>
              <Text style={styles.caption}>utkarshsinghal369@gmail.com</Text>
            </View>
          </View>
          <View style={styles.drawerItems}>
            <DrawerItem
              icon={({color, size}) => (
                <AntDesign2 name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => navigation.navigate('Home')}
              style={styles.drawerItem}
            />
            <DrawerItem
              icon={({color, size}) => (
                <AntDesign1 name="car" color={color} size={size} />
              )}
              label="Browse Cars"
              onPress={() => navigation.navigate('BrowserCar')}
              style={styles.drawerItem}
            />
            <DrawerItem
              icon={({color, size}) => (
                <AntDesign name="hearto" color={color} size={size} />
              )}
              label="Favorites"
              onPress={() => navigation.navigate('Favourite')}
              style={styles.drawerItem}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome name="history" color={color} size={size} />
              )}
              label="Rental History"
              onPress={() => navigation.navigate('RentalHistory')}
              style={styles.drawerItem}
            />
            <View style={styles.separator} />
            {/* <DrawerItem
              icon={({color, size}) => (
                <AntDesign name="login" color={color} size={size} />
              )}
              label="Login"
              onPress={() => navigation.navigate('Login')}
              style={styles.drawerItem}
            /> */}
          </View>
        </View>
      </DrawerContentScrollView>
      {/* <View style={styles.footer}>
        <DrawerItem
          icon={({color, size}) => (
            <AntDesign name="logout" color={color} size={size} />
          )}
          label="Logout"
          onPress={() => console.log('Logout')}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  userInfoSection: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
    marginTop: 4,
  },
  avatar: {
    backgroundColor: '#ccc',
  },
  drawerItems: {
    marginTop: 30,
  },
  drawerItem: {
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 20,
  },
});

export default DrawerContent;
