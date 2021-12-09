//RootNavigator.js //https://reactnavigation.org/docs/getting-started
import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ScrollViewComponent from '../components/ScrollViewComponent';
import FlatListComponent from '../components/FlatListComponent';
import SectionListComponent from '../components/SectionListComponent';
import TextInputButtonComponents from '../components/TextInputButtonComponents';
import AlertToastMessageComponent from '../components/AlertToastMessageComponent';
import ModalImageComponents from '../components/ModalImageComponents';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      // screenOptirons={{header: () => null}} //Забирає верхнє меню навігіції (всюди)
      initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen
        // options={{header: () => null}} //Забирає верхнє меню навігіції (тільки на даному екрані)
        name="ScrollView"
        component={ScrollViewComponent}
      />
      <Stack.Screen name="FlatList" component={FlatListComponent} />
      <Stack.Screen name="SectionList" component={SectionListComponent} />
      <Stack.Screen
        name="textInput_Button"
        component={TextInputButtonComponents}
      />
      <Stack.Screen
        name="Alert_ToastMessage"
        component={AlertToastMessageComponent}
      />
      <Stack.Screen name="Modal_Image" component={ModalImageComponents} />
    </Stack.Navigator>
  );
};
