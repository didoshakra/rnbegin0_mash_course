//RootNavigatorMaterialTopTabs.js //https://reactnavigation.org/docs/material-top-tab-navigator
import * as React from 'react';
import {View, Text} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBold} from '@fortawesome/free-solid-svg-icons';
import {faAutoprefixer} from '@fortawesome/free-brands-svg-icons';

import NavigationScreenA from '../screens/NavigationScreenA';
import NavigationScreenB from '../screens/NavigationScreenB';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'ScreenA') {
            iconName = faAutoprefixer;
            size = focused ? 25 : 20;
            // color = focused ? '#f0f' : '#555'; //Коли нема tabBarOptions
          } else if (route.name === 'ScreenB') {
            iconName = faBold;
            size = focused ? 25 : 20;
            // color = focused ? '#f0f' : '#555'; //Коли нема tabBarOptions
          }

          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
      })}
      //Нижній квадрат для bottom-tabs
      tabBarOptions={{
        activeTintColor: '#f0f',
        inactiveTintColor: '#555',
        activeBackgroundColor: '#fff',
        inactiveBackgroundColor: '#999',
        showLabel: true,
        // showLabel: false,
        labelStyle: {fontSize: 14},
      }}
      //Нижній квадрат для material-bottom-tabs
      activeColor="#4ded21"
      inactiveColor="#f32498"
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen
        name="ScreenA"
        component={NavigationScreenA}
        options={{title: 'ScreenA'}}
        // options={{tabBarBadge: 1}}
      />
      <Tab.Screen
        name="ScreenB"
        component={NavigationScreenB}
        // options={{tabBarBadge: 2}}
      />
    </Tab.Navigator>
  );
};
