import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomHomeNavigator from './bottomHomeNavigator.routes';

const RootStack = createStackNavigator();
import StoryScreen from '../screens/StoryScreen';
const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={'Home'}
      component={BottomHomeNavigator}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name="Story"
      component={StoryScreen}
      options={{
        headerShown: false,
      }}
    />
  </RootStack.Navigator>
);

export default Router;
