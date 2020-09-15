import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const StoryScreen = () => {
  return (
    <SafeAreaView>
    <View style={{backgroundColor: 'blue', height: 1500}}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          marginTop: 300,
          fontSize: 30,
        }}>
        Story Screen
      </Text>
    </View>
    </SafeAreaView>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({});
