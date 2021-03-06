//RootNavigatorStack.js(Stack)https://reactnavigation.org/docs/stack-navigator/
import * as React from 'react';
// import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import NavigationScreenA from '../screens/NavigationScreenA';
import NavigationScreenB from '../screens/NavigationScreenB';
import AsyncStorageHome from '../screens/async_storage/AsyncStorageHome';
import AsyncStorageLogin from '../screens/async_storage/AsyncStorageLogin';
import SQLiteLogin from '../screens/sqlite/SQLiteLogin';
import SQLiteHome from '../screens/sqlite/SQLiteHome';
import StudentScreen, {
  ViewAllStudentScreen,
} from '../screens/sqlite/StudentScreen';
import UserScreen, {ViewAllUserScreen} from '../screens/sqlite/UserScreen';
const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      // screenOptirons={{header: () => null}} //Забирає верхнє меню навігіції (всюди)
      initialRouteName={'NavigationScreenA'}>
      <Stack.Screen
        // options={{header: () => null}} //Забирає верхнє меню навігіції (тільки на даному екрані)
        name="ScreenA"
        component={NavigationScreenA}
        options={{title: 'NavigationScreenA'}}
      />

      <Stack.Screen name="ScreenB" component={NavigationScreenB} />
      <Stack.Screen
        name="AsyncStorageLogin"
        component={AsyncStorageLogin}
        // options={{header: () => null}} //Забирає верхнє меню навігіції (тільки на даному екрані)
      />
      <Stack.Screen
        name="AsyncStorageHome"
        component={AsyncStorageHome}
        // options={{header: () => null}} //Забирає верхнє меню навігіції (тільки на даному екрані)
      />
      <Stack.Screen
        name="SQLiteLogin"
        component={SQLiteLogin}
        // options={{header: () => null}} //Забирає верхнє меню навігіції (тільки на даному екрані)
      />
      <Stack.Screen
        name="SQLiteHome"
        component={SQLiteHome}
        // options={{header: () => null}} //Забирає верхнє меню навігіції (тільки на даному екрані)
      />
      <Stack.Screen
        name="StudentScreen"
        component={StudentScreen}
        // options={{header: () => null}} //Забирає верхнє меню навігіції (тільки на даному екрані)
      />
      <Stack.Screen
        name="ViewAllStudentScreen"
        component={ViewAllStudentScreen}
      />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="ViewAllUserScreen" component={ViewAllUserScreen} />
    </Stack.Navigator>
  );
};
