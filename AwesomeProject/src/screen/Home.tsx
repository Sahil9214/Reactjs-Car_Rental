/* eslint-disable prettier/prettier */
import React, {useLayoutEffect, useState} from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
const screenWidth = Dimensions.get('window').width * 0.9;

const CarItem = ({item}) => {
  return (
    <View style={styles.surface}>
      <View style={styles.carItem}>
        <Image source={{uri: item.image}} style={styles.carImage} />
        <View style={styles.carInfo}>
          <Text style={styles.carMakeModel}>
            {item.make} {item.model}
          </Text>
          <Text style={{textAlign: 'center'}}>{item.color}</Text>
          <Text style={styles.carPrice}>${item.price}</Text>
        </View>
      </View>
    </View>
  );
};

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let res = await axios.get(`https://ruby-giant-crocodile.cyclic.app/car`);
      setData(res.data);
    } catch (err) {
      console.log('err');
    }
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={item => item._id}
      renderItem={({item}) => <CarItem item={item} />}
      horizontal
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  carInfo: {
    marginLeft: 10,
    textAlign: 'center',
  },
  carMakeModel: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  carPrice: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
  carItem: {
    flex: 1,
    marginRight: 20,
  },
  carImage: {
    width: screenWidth,
    height: 300,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  hoveredImage: {
    transform: [{scale: 1.1}],
  },
  surface: {
    marginTop: 20,
  },
});
