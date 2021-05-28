import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './screens/HomeScreen';
import {ListScreen} from './screens/ListScreen';
import {RainbowScreen} from './screens/RainbowScreen';
import {InputScreen} from './screens/InputScreen';
import {ScrollScreen} from './screens/ScrollScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Rainbow" component={RainbowScreen} />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Scroll" component={ScrollScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
