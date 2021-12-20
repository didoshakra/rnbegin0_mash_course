//SQLiteHome.js
import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import GlobalStyle from '../../utils/GlobalStyle';
// import SQLite from 'react-native-sqlite-storage';
import {openDatabase} from 'react-native-sqlite-storage';
import ButtonRA from '../../ui/ButtonRA';

const db = openDatabase({name: 'MainDB.db'});
// const db = SQLite.openDatabase(
//   {
//     name: 'MainDB',
//     location: 'default',
//   },
//   () => { },
//   error => {
//     console.log(error);
//   },
// );

const SQLiteHome = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      db.transaction(tx => {
        console.log('SQLiteHome/getData/len=');
        tx.executeSql(
          // 'SELECT Name. Age FROM Users WHERE ID=1',
          // 'SELECT Name, Age FROM Users',
          // 'SELECT Name, Age FROM User',
          // 'INSERT INTO User_Table (user_name, user_age) VALUES (?,?)',
          // 'SELECT Name, Age FROM User_Table',
          // 'SELECT user_name, user_age FROM User_Table',
          'SELECT * FROM User_Table',
          [],
          (tx, results) => {
            let len = results.rows.length;
            console.log('SQLiteHome/getData/len=', len);
            if (len > 0) {
              // results.rows.item(i);
              // let userName = results.rows.item(0).Name;
              // let userAge = results.rows.item(0).Age;
              // let userId = results.rows.item(0).user_id;
              let userName = results.rows.item(0).user_name;
              let userAge = results.rows.item(0).user_age;
              let userId = results.rows.item(0).user_id;
              console.log(
                'SQLiteHome/getData/results.rows.item(0)=',
                results.rows.item(0),
              );
              console.log(
                'SQLiteHome/getData/userName,userAge,userId=',
                userName,
                userAge,
                userId,
              );
              setName(userName);
              setAge(userAge);
              setId(userId);
            }
          },
        );
      });
    } catch (e) {
      console.log(e);
    }
  };
  // const editData = () => {
  //   db.transaction(tx => {
  //     tx.executeSql(
  //       'UPDATE Student_Table set student_name=?, student_phone=? , student_address=? where student_id=?',
  //       [S_Name, S_Phone, S_Address, S_Id],
  //       (tx, results) => {
  //         console.log('Results', results.rowsAffected);
  //         if (results.rowsAffected > 0) {
  //           Alert.alert('Record Updated Successfully..');
  //         } else Alert.alert('Error');
  //       },
  //     );
  //   });
  // };
  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Pleese write your data.');
    } else {
      try {
        console.log('SQLiteHome/updateData/name, age, id/', name, age, id);
        db.transaction(tx => {
          tx.executeSql(
            // 'UPDATE Users set Name=?',
            'UPDATE User set Name=?',
            [name],
            () => {
              Alert.alert('Success!', 'Updated Successfully..');
            },
            error => {
              console.log(error);
            },
          );
        });
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
      <Text style={[styles.text, {color: 'red'}]}>SQLiteHome</Text>
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

export default SQLiteHome;
