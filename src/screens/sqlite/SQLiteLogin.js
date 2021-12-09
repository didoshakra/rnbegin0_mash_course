//SQLiteLogin.js
import React, {useState, useEffect} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, View} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';
// import {openDatabase} from 'react-native-sqlite-storage';
import ButtonRA from '../../ui/ButtonRA';

// var db = openDatabase({name: 'MainDB.db'});
const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => { },
  error => {
    console.log(error);
  },
);

const SQLiteLogin = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXIST' +
          'Users' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);',
      );
    });
  };

  const getData = async () => {
    try {
      // // const value = await AsyncStorage.getItem('UserName'); //рядок
      // const value = await AsyncStorage.getItem('UserData'); //обєкти
      // console.log('value=', value);
      // if (value !== null) {
      //   navigation.navigate('AsyncStorageHome');
      // }
      //  'SELECT Name. Age FROM Users WHERE ID=1',
      await db.transaction(async tx => {
        await tx.executeSql(
          //  'SELECT Name. Age FROM Users WHERE ID=1',
          'SELECT Name, Age FROM Users ',
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              navigation.navigate('AsyncStorageHome');
            }
          },
        );
      });
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
        await db.transaction(async tx => {
          await tx.executeSql(
            // "INSERT INTO Users (Name.Age) Value ("+name+","+age+")"
            'INSERT INTO Users (Name,Age) Value (?,?)',
            [name, age],
          );
        });

        navigation.navigate('SQLiteHome');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../../../assets/sqlite.jpg')}
      />
      <Text style={styles.text}>SQLite Login</Text>
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

export default SQLiteLogin;
