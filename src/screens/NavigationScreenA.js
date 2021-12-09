//NavigationScreenA //https://reactnavigation.org/docs/hello-react-navigation/
import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import ButtonRA from '../ui/ButtonRA';
import GlobalStyle from '../utils/GlobalStyle';

const NavigationScreenA = ({navigation, route}) => {
  const onPressHandler = () => {
    navigation.navigate('ScreenB', {
      ItemName: 'Item from ScreenA',
      ItemID: 12,
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
        NavigationScreenA
      </Text>
      <Text style={styles.text}>{route.params?.Message}</Text>
      <Text
        style={[
          GlobalStyle.CustomFont,
          styles.text,
          {fontSize: 20, color: 'blue'},
        ]}>
        GlobalStyle.CustomFont/DancingScript-Regular
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'green',
          fontFamily: 'DancingScript-Regular',
        }}>
        DancingScript-Regular
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'green',
          fontFamily: 'IndieFlower-Regular',
        }}>
        IndieFlower-Regular
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'green',
          fontFamily: 'AbrilFatface - Regular',
        }}>
        AbrilFatface - Regular
      </Text>
      <ButtonRA
        title={'ScreenB'}
        color={'#8abbec'}
        // style={ {margin: 5}}
        // onPress={() => navigation.navigate('ScreenB')}
        onPress={onPressHandler}
      />
      <ButtonRA
        title={'Drawer'}
        color={'#8abbec'}
        style={{marginTop: 5, width: 150}}
        // onPress={() => navigation.replace('NavigationScreenB')}
        onPress={() => navigation.toggleDrawer()} //Відкриває ящик (бокове меню) при NavigatorDrawer
      />
      <ButtonRA
        title={'AsyncStorage Login'}
        color={'#defaab'}
        style={{marginTop: 5, width: 350}}
        onPress={() => navigation.navigate('AsyncStorageLogin')}
      />
      <ButtonRA
        title={'SQLite Login'}
        // color={'#8abbec'}
        color={'#defaab'}
        style={{marginTop: 5, width: 350}}
        onPress={() => navigation.navigate('SQLiteLogin')}
      />
      {/* <ButtonRA
        title={'replace(заміна) ScreenB'}
        color={'#8abbec'}
        style={{margin: 5,width: 300}}
        onPress={() => navigation.replace('NavigationScreenB')}
      /> */}
      {/* <Button
        title={'to ScreenB'}
        onPress={() => navigation.navigate('NavigationScreenB')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
    color: '#8b0000',
  },
});

export default NavigationScreenA;
