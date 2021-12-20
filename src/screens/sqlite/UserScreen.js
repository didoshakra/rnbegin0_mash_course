import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';

const NameDB = 'SchoolDatabase.db';
// const NameDB = 'MainDB.db';

const db = openDatabase({name: NameDB});

export function ViewAllUserScreen({navigation}) {
  const [items, setItems] = useState([]); //Масив з запиту
  const [empty, setEmpty] = useState([]); // Чи не пустий Select

  const isFocused = useIsFocused();

  useEffect(() => {
    getData();
    //За замовчуванням ефекти спрацьовуються після кожного завершеного рендеру
    // Якщо є 2-й параметр [props.source], буде спрацьовувати тільки при зміні цих параметрів
  }, [isFocused]);
  // const getData = async () => {
  const getData = async () => {
    await db.transaction(async tx => {
      try {
        await tx.executeSql('SELECT * FROM User_Table', [], (tx, results) => {
          console.log(
            'UserScreen/get/results.rows.item(0)=',
            results.rows.item(0),
          );
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setItems(temp);
          if (results.rows.length >= 1) {
            setEmpty(false);
          } else {
            setEmpty(true);
          }
        });
      } catch (e) {
        console.log(e);
      }
    });
  };

  const listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  const emptyMSG = status => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{fontSize: 25, textAlign: 'center'}}>
          No Record Inserted Database is Empty.../Немає вставлених записів База
          даних порожня...
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {empty ? (
          emptyMSG(empty)
        ) : (
          <FlatList
            data={items}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View key={item.user_id} style={{padding: 20}}>
                <TouchableOpacity
                  onPress={() =>
                    navigateToEditScreen(
                      item.user_id,
                      item.user_name,
                      item.user_phone,
                      item.user_address,
                    )
                  }>
                  <Text style={styles.itemsStyle}> Id: {item.user_id} </Text>
                  <Text style={styles.itemsStyle}>
                    {' '}
                    Name: {item.user_name}{' '}
                  </Text>
                  <Text style={styles.itemsStyle}>
                    {' '}
                    Phone Number: {item.user_phone}{' '}
                  </Text>
                  <Text style={styles.itemsStyle}>
                    {' '}
                    Address: {item.user_address}{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export function EditRecordScreen({route, navigation}) {
  const [S_Id, setID] = useState('');
  const [S_Name, setName] = useState('');
  const [S_Phone, setPhone] = useState('0');
  const [S_Address, setAddress] = useState('');

  useEffect(() => {
    setID(route.params.user_id);
    setName(route.params.user_name);
    setPhone(route.params.user_phone.toString());
    setAddress(route.params.user_address);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <Text style={{fontSize: 24, textAlign: 'center', color: '#000'}}>
          Edit Record In SQLite Database
        </Text>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => setName(text)}
          placeholder="Enter User Name"
          value={S_Name}
        />

        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => setPhone(text)}
          placeholder="Enter User Phone Number"
          keyboardType={'numeric'}
          value={S_Phone}
        />

        <TextInput
          style={[styles.textInputStyle, {marginBottom: 20}]}
          onChangeText={text => setAddress(text)}
          placeholder="Enter User Address"
          value={S_Address}
        />

        <TouchableOpacity style={styles.touchableOpacity} onPress={editData}>
          <Text style={styles.touchableOpacityText}> Edit Record </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchableOpacity,
            {marginTop: 20, backgroundColor: '#33691E'},
          ]}
          onPress={deleteRecord}>
          <Text style={styles.touchableOpacityText}>
            {' '}
            Delete Current Record{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function UserScreen({navigation}) {
  const [S_Name, setName] = useState('');
  const [S_Phone, setPhone] = useState('0');
  const [S_Address, setAddress] = useState('');

  useEffect(() => {
    createTable();
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
              'CREATE TABLE IF NOT EXISTS User_Table(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(30), user_phone INT(15), user_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
    // Alert.alert('SQLite Database and Table Successfully Created...');
  };

  const insertData = () => {
    if (S_Name == '' || S_Phone == '' || S_Address == '') {
      Alert.alert('Please Enter All the Values');
    } else {
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO User_Table (user_name, user_phone, user_address) VALUES (?,?,?)',
          [S_Name, S_Phone, S_Address],
          (tx, results) => {
            console.log(
              'UserScreen/insertData/results.rowsAffected=',
              results.rowsAffected,
            );
            console.log('UserScreen/insertData/Results=', results);
            if (results.rowsAffected > 0) {
              Alert.alert('Data Inserted Successfully..rr');
            } else Alert.alert('Failed....');
          },
        );
      });
    }
  };

  navigateToViewScreen = () => {
    navigation.navigate('ViewAllUserScreen');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <Text style={{fontSize: 18, textAlign: 'center', color: '#000'}}>
          Insert Data Into SQLite Database={NameDB}
        </Text>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => setName(text)}
          placeholder="Enter User Name"
          value={S_Name}
        />

        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => setPhone(text)}
          placeholder="Enter User Phone Number"
          keyboardType={'numeric'}
          value={S_Phone}
        />

        <TextInput
          style={[styles.textInputStyle, {marginBottom: 20}]}
          onChangeText={text => setAddress(text)}
          placeholder="Enter User Address"
          value={S_Address}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={insertData}>
            <Text style={styles.touchableOpacityText}> Insert Data </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={navigateToViewScreen}>
            <Text style={styles.touchableOpacityText}>View Users</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

  touchableOpacity: {
    // backgroundColor: '#0091EA',
    marginTop: 5,
    backgroundColor: '#33691E',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },

  touchableOpacityText: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    padding: 3,
  },

  textInputStyle: {
    height: 45,
    width: '90%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#00B8D4',
    borderRadius: 7,
    marginTop: 15,
  },

  itemsStyle: {
    fontSize: 22,
    color: '#000',
  },
});
