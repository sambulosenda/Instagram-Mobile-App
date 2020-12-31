import React from 'react';
import {View, FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://pbs.twimg.com/profile_images/1308470425819787267/ByYHu8Yv_400x400.jpg',
    name: 'Sambulo senda',
  },
  {
    imageUri:
      'https://pbs.twimg.com/profile_images/1273894202812690432/YjpNIV6E_400x400.jpg',
    name: 'Lukads',
  },
  {
    imageUri:
      'https://pbs.twimg.com/profile_images/1211680279041052682/fUqhMVez_400x400.jpg',
    name: 'Adlex',
  },
  {
    imageUri:
      'https://pbs.twimg.com/profile_images/911819039697027073/w7lmlWh6_400x400.jpg',
    name: 'Danidl',
  },
  {
    imageUri:
      'https://pbs.twimg.com/profile_images/1211680279041052682/fUqhMVez_400x400.jpg',
    name: 'Namase',
  },
  {
    imageUri:
      'https://pbs.twimg.com/profile_images/1211680279041052682/fUqhMVez_400x400.jpg',
    name: 'Lukdsaas',
  },
];

const Stories = () => (
  <FlatList
    style={styles.container}
    data={data}
    keyExtractor={(name) => name}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
  />
);
export default Stories;
