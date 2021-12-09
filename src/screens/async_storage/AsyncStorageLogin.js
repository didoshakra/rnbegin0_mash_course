//Login.js
import React, {useState, useEffect} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonRA from '../../ui/ButtonRA';

const AsyncStorageLogin = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // const value = await AsyncStorage.getItem('UserName'); //рядок
      const value = await AsyncStorage.getItem('UserData'); //обєкти
      console.log('value=', value);
      if (value !== null) {
        navigation.navigate('AsyncStorageHome');
      }
    } catch (e) {
      console.log(e);
    }
  };
  const setData = async () => {
    // if (name.length == 0) {
    if (name.length == 0 || age.length == 0) {
      Alert.alert('Warning!', 'Pleese write your name.');
    } else {
      try {
        //Для обєкта
        var user = {
          Name: name,
          Age: age,
        };
        // await AsyncStorage.setItem('UserName', name);//для рядка
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        navigation.navigate('AsyncStorageHome');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../../../assets/AsyncStorage.png')}
      />
      <Text style={styles.text}>Async Storage</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={value => setAge(value)}
      />
      <ButtonRA
        title={'Login'}
        color={'#1eb900'}
        style={{marginTop: 5}}
        onPress={setData}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    height: 100,
    width: 100,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default AsyncStorageLogin;
