//FlatListComponent.js //https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash
import React, {useState, useCallback} from 'react';
import {FlatList, StyleSheet, Text, View, RefreshControl} from 'react-native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const FlatListComponent = () => {
  const [Items, setItems] = useState([
    {name: 'Items 1'},
    {name: 'Items 2'},
    {name: 'Items 3'},
    {name: 'Items 4'},
    {name: 'Items 5'},
    {name: 'Items 6'},
    {name: 'Items 7'},
    {name: 'Items 8'},
    {name: 'Items 9'},
    {name: 'Items 10'},
    {name: 'Items 11'},
    {name: 'Items 12'},
    {name: 'Items 27'},
    {name: 'Items 78'},
  ]);

  const [Refreshing, setRefreshing] = useState(false);

  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setItems([...Items, {key: 69, item: 'Items 69'}]);
  //   setRefreshing(true);
  // };

  const onRefresh = useCallback(() => {
    console.log('onRefresh');
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    setItems([...Items, {name: 'Items 69'}]);
    setRefreshing(true);
  }, []);

  return (
    <FlatList
      // horizontal //Горизонтально
      // inverted //В зворотньому порядку
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00F6FF',
  },
  text: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 30,
    fontWeight: 'bold',
    // color: 'red',
    margin: 10,
  },
});

export default FlatListComponent;
