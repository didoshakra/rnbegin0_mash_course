//NavigationScreenA //https://reactnavigation.org/docs/hello-react-navigation/
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonRA from '../ui/ButtonRA';

const NavigationScreenB = ({navigation, route}) => {
  console.log('route=', route);
  const {ItemName, ItemID} = route.params;
  const onPressHandler = () => {
    navigation.navigate('ScreenA', {Message: 'message from B'});
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
        NavigationScreenB
      </Text>
      <Text style={styles.text}>{ItemName}</Text>
      <Text style={styles.text}>ID:{ItemID}</Text>
      <ButtonRA
        title={'to ScreenA'}
        color={'#9ff58f'}
        style={{margin: 5}}
        // onPress={() => navigation.navigate('ScreenA')}
        onPress={onPressHandler}
      />
      <ButtonRA
        title={'setParams({ItemID:14})'}
        color={'#9ff58f'}
        style={{margin: 5, width: 250}}
        onPress={() => navigation.setParams({ItemID: 14})}
      />
      <ButtonRA
        title={'goBack'}
        color={'#9ff58f'}
        style={{margin: 5}}
        onPress={() => navigation.goBack()}
      />
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
export default NavigationScreenB;
