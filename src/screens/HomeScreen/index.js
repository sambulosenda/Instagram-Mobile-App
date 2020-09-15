import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Feed from '../../components/Feed';
import Post from '../../components/Post';
import Stories from '../../components/Stories';

const index = () => {
  return (
    <SafeAreaView>
      <Feed />
    </SafeAreaView>
  );
};

export default index;

