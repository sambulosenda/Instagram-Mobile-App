import React from 'react';
import {View, FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://pbs.twimg.com/profile_images/1284955198130130949/CgLZ3-RA_400x400.jpg',
    name: 'Vadidm',
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
      'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/p160x160/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_eui2=AeGjZbecmqwLvnlbx3STRUcixlokCBJZ6JPGWiQIElnok5b36VQxmkbd_xA74WOh5Md7TWZNOQ6TSiAdKeQf8RJ9&_nc_ohc=tq7CYqHvRYcAX_LwjFy&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=a7fda4462bbac7dcca956ac0c492e739&oe=5F40895B',
    name: 'Namase',
  },
  {
    imageUri:
      'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeGuvh6y7JdJyQ_sgjEaph-zDfw2T_M-BQMN_DZP8z4FA3OG-Qkjoajvba83y0-f60PUHDPn7-GUA0e8jDoxYkRC&_nc_ohc=mmDFGHC1nLAAX8ojlCt&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=4c8509718f3e6e49cd6cf9eb163eb3fc&oe=5F42657B',
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
