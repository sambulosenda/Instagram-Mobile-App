import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = ({imageUri, name}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story');
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <ProfilePicture uri={imageUri} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Story;
