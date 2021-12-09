//RootNavigatorDrawer.js //Бокове меню(ящик) //https://reactnavigation.org/docs/drawer-navigator
import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBold} from '@fortawesome/free-solid-svg-icons';
import {faAutoprefixer} from '@fortawesome/free-brands-svg-icons';

import NavigationScreenA from '../screens/NavigationScreenA';
import NavigationScreenB from '../screens/NavigationScreenB';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="ScreenA"
      drawerPosition="right"
      drawerType="slide"
      edgeWidth={100}
      hideStatusBar={false}
      overlayColor="#000000"
      drawerStyle={{backgroundColor: '#00f', with: 350}}
      screenOptions={{
        headerShown: true,
        // swipeEnabled:false,//Чи можете ви використовувати жести, щоб відкрити або закрити ящик
        gestureEnabled: true,
        headerTitleAlign: 'center', // Центрування заголовка
        headerStyle: {
          backgroundColor: '#0080ff',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name="ScreenA"
        component={NavigationScreenA}
        options={{title: 'Screen-A'}}
        options={{
          title: 'Screen-A',
          drawerIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faAutoprefixer}
              size={focused ? 25 : 20}
              color={focused ? '#f0f' : '#999999'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ScreenB"
        component={NavigationScreenB}
        options={{
          title: 'Screen-B',
          drawerIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faBold}
              size={focused ? 25 : 20}
              color={focused ? '#f0f' : '#999999'}
            />
          ),
        }}
        initialParams={{
          ItemName: 'Item from Drawer',
          ItemID: 18,
        }}
      />
    </Drawer.Navigator>
  );
};
