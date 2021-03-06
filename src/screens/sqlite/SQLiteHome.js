//SQLiteHome.js
import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import GlobalStyle from '../../utils/GlobalStyle';
import {openDatabase} from 'react-native-sqlite-storage';
import ButtonRA from '../../ui/ButtonRA';

const db = openDatabase({name: 'MainDB.db'});

const SQLiteHome = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      db.transaction(tx => {
        console.log('SQLiteHome/getData/len=');
        tx.executeSql(
          'SELECT user_id, user_name, user_age FROM Users',
          [],
          (tx, results) => {
            let len = results.rows.length;
            console.log('SQLiteHome/getData/len=', len);
            if (len > 0) {
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

  const updateData = () => {
    Alert.alert('updateData', 'updateData');
    try {
      console.log('SQLiteHome/updateData/name, age, id/', name, age, id);
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE Users set user_name=? user_age? where user_id=?',
          [name, age, id],
          (tx, results) => {
            console.log('SQLiteHome/updateData/Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Record Updated Successfully..');
            } else Alert.alert('Error');
          },
        );
      });
      Alert.alert('Succes!', 'Your data has been updated.');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = () => {
    Alert.alert('deleteRecord', 'deleteRecord');
    console.log('deleteRecord');
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Users where student_id=?',
        // [id],
        [1],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Done',
              'Record Deleted Successfully',
              [
                {
                  text: 'Ok',
                  // onPress: () => navigation.navigate('ViewAllStudentScreen'),
                },
              ],
              {cancelable: false},
            );
          }
        },
      );
    });
  };
  // const updateData = async () => {
  //   if (name.length == 0) {
  //     Alert.alert('Warning!', 'Pleese write your data.');
  //   } else {
  //     try {
  //       console.log('name, age, id/', name, age, id);
  //       db.transaction(tx => {
  //         tx.executeSql(
  //           // 'UPDATE Student_Table set student_name=?, student_phone=? , student_address=? where student_id=?',
  //           // [S_Name, S_Phone, S_Address, S_Id],
  //           'UPDATE Users set user_name=? user_age? WHERE user_id=?',
  //           [name, age, id],
  //           (tx, results) => {
  //             console.log('Results', results.rowsAffected);
  //             if (results.rowsAffected > 0) {
  //               Alert.alert('Record Updated Successfully..');
  //             } else Alert.alert('Error');
  //           },
  //         );
  //       });
  //       Alert.alert('Succes!', 'Your data has been updated.');
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const removeData = () => {
    Alert.alert('removeData', 'removeData');
    console.log('removeData!');
  };

  const clearData = () => {
    Alert.alert('clearData!', 'clearData');
    console.log('clearData!');
  };

  return (
    <View style={styles.body}>
      <Text style={[styles.text, {color: 'red'}]}>SQLiteHome1</Text>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>
        Welcome {name} !
      </Text>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>
        Your age is {age} !
      </Text>
      <TextInput
        style={styles.input}
        // placeholder={name}
        placeholder="Enter your name"
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.input}
        // placeholder={age}
        placeholder="Enter your age"
        onChangeText={value => setAge(value)}
      />

      <ButtonRA
        title={'Update'}
        color={'#ff7f00'}
        style={{marginTop: 5}}
        onPress={updateData}
      />
      <ButtonRA
        title={'deleteRecord'}
        color={'#ef3c7b'}
        style={{marginTop: 5}}
        onPress={deleteRecord}
      />
      <ButtonRA
        title={'Clear'}
        color={'#ef3c7b'}
        style={{marginTop: 5}}
        onPress={clearData}
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
    // marginTop: 10,
    marginBottom: 5,
  },
});

export default SQLiteHome;
