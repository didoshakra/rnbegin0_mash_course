//AsyncStorageHome.js
import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import GlobalStyle from '../../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonRA from '../../ui/ButtonRA';

const AsyncStorageHome = ({navigation, route}) => {
  // const Home = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // const value = await AsyncStorage.getItem('UserName');//рядок
      const value = await AsyncStorage.getItem('UserData'); //обєкт
      let user = JSON.parse(value); //обєкт
      console.log('value=', value);
      if (value !== null) {
        // setName(value);
        setName(user.Name);
        setAge(user.Age);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Pleese write your data.');
    } else {
      try {
        var user = {
          Name: name,
        };
        // await AsyncStorage.setItem('UserName', name); //рядок
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        Alert.alert('Succes!', 'Your data has been updated.');
      } catch (error) {
        console.log(error);
      }
    }
  };
  const removeData = async () => {
    try {
      // await AsyncStorage.removeItem('UserName');
      await AsyncStorage.removeItem('UserData');
      navigation.navigate('AsyncStorageLogin');
    } catch (error) {
      console.log(error);
    }
  };
  const clearData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('AsyncStorageLogin');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.body}>
      <Text style={[styles.text, {color: 'red'}]}>AsyncStorage</Text>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>
        Welcome {name} !
      </Text>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>
        Your age is {age} !
      </Text>
      <TextInput
        style={styles.input}
        placeholder={name}
        onChangeText={value => setName(value)}
      />
      <ButtonRA
        title={'Update'}
        color={'#ff7f00'}
        style={{marginTop: 5}}
        onPress={updateData}
      />
      <ButtonRA
        title={'Remove'}
        color={'#ef3c7b'}
        style={{marginTop: 5}}
        onPress={clearData}
      />
      <ButtonRA
        title={'Clear'}
        color={'#ef3c7b'}
        style={{marginTop: 5}}
        onPress={removeData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9f1f2',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});

export default AsyncStorageHome;
