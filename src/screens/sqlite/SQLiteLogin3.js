//SQLiteLogin.js
import React, {useState, useEffect} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, View} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SQLite from 'react-native-sqlite-storage';
import {openDatabase} from 'react-native-sqlite-storage';
import ButtonRA from '../../ui/ButtonRA';

// const NameDB = 'SchoolDatabase.db';
const NameDB = 'MainDB.db';
const db = openDatabase({name: NameDB});
/**************************** */

const SQLiteLogin = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setID] = useState('');

  useEffect(() => {
    createTable();
    // getData();
  }, []);

  const createTable = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='User_Table'",
        [],
        function (tx, res) {
          console.log('UserScreen/createTable/item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS User_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS User_Table(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(30), user_age INT(10))',
              [],
            );
          }
        },
      );
    });
    // Alert.alert('SQLite Database and Table Successfully Created...');
  };

  const insertData = () => {
    if (name == '' || age == '') {
      Alert.alert('Please Enter All the Values');
    } else {
      console.log('SQLiteLogin/insertData/name=', name + '/age=', age);
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO User_Table (user_name, user_age) VALUES (?,?)',
          [name, age],
          (tx, results) => {
            console.log(
              'UserScreen/insertData/results.rowsAffected=',
              results.rowsAffected,
            );
            console.log('UserScreen/insertData/Results=', results);
            if (results.rowsAffected > 0) {
              Alert.alert('Data Inserted Successfully..rr');
              navigation.navigate('SQLiteHome');
            } else Alert.alert('Failed....');
          },
        );
      });
    }
  };

  const getData = async () => {
    try {
      await db.transaction(async tx => {
        console.log('SQLiteLogin/getData');
        // 'SELECT Name, Age FROM Users ',
        // await tx.executeSql('SELECT * FROM Users ', [], (tx, results) => {
        // await tx.executeSql('SELECT * FROM User ', [], (tx, results) => {
        await tx.executeSql('SELECT * FROM User_Table ', [], (tx, results) => {
          console.log('SQLiteLogin/getData/results=', results);
          // var len = results.rows.length;
          let len = results.rows.length;
          console.log('SQLiteLogin/getData/len=', len);
          if (len > 0) {
            navigation.navigate('SQLiteHome');
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  // const insertData = () => {
  //   if (name == '' || age == '') {
  //     Alert.alert('Please Enter All the Values');
  //   } else {
  //     db.transaction(function (tx) {
  //       tx.executeSql(
  //         'INSERT INTO User (Name, Age) VALUES (?,?)',
  //         [name, age],
  //         (tx, results) => {
  //           console.log(
  //             'SQLiteLogin/insertData/results.rowsAffected=',
  //             results.rowsAffected,
  //           );
  //           console.log('SQLiteLogin/insertData/Results=', results);
  //           if (results.rowsAffected > 0) {
  //             Alert.alert('Data Inserted Successfully..rr');
  //           } else Alert.alert('Failed....');
  //         },
  //       );
  //     });
  //   }
  // };

  // const setData = async () => {
  //   try {
  //     console.log('SQLiteLogin/setData');
  //     await db.transaction(async tx => {
  //       await tx.executeSql(
  //         // 'INSERT INTO Users (Name,Age) Value (?,?)',
  //         'INSERT INTO User (Name,Age) Value (?,?)',
  //         [name, age],
  //         (tx, results) => {
  //           console.log('SQLiteLogin/setData/Results', results.rowsAffected);
  //           if (results.rowsAffected > 0) {
  //             Alert.alert('Data Inserted Successfully....');
  //             navigation.navigate('SQLiteHome');
  //           } else Alert.alert('Failed....');
  //         },
  //       );
  //     });
  //     // navigation.navigate('SQLiteHome');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
        // onPress={setData}
        onPress={insertData}
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
