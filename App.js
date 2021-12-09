import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {RootNavigator} from './src/navigators/RootNavigator';//Робоча
import {RootNavigator} from './src/navigators/RootNavigatorStack.js';//Stack
// import {RootNavigator} from './src/navigators/RootNavigatorBottomTabs';//Нижні вкладки
// import {RootNavigator} from './src/navigators/RootNavigatorMaterialBottomTabs';//Material нижні вкладки
// import {RootNavigator} from './src/navigators/RootNavigatorMaterialTopTabs';//Material верхні вкладки
// import {RootNavigator} from './src/navigators/RootNavigatorDrawer';//Бокове меню(ящик)
// import DropDownMenu from './src/components/menu/DropDownMenu';

// const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 16, color: '#B22222'}}>rnbegin0_mash_course</Text>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
