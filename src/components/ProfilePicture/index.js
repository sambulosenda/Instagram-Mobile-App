/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import Styles from './styles';

const ProfilePicture = ({uri}) => (
  <View style={styles.container}>
    <Image
      source={{
        uri:uri,
      }}
      style={styles.image}
    />
  </View>
);

export default ProfilePicture;
