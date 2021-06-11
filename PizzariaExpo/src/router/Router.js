import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {ListPage} from '../pages/ListPage';
import {FormPage} from '../pages/FormPage';

const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="List">
        <Drawer.Screen name="List" component={ListPage} />
        <Drawer.Screen name="Form" component={FormPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export {Router};
