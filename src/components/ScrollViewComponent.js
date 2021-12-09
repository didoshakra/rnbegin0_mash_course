//ScrollViewComponent.js //https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash
import React, {useState, useCallback} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  RefreshControl,
} from 'react-native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const ScrollViewComponent = () => {
  const [Items, setItems] = useState([
    {key: 1, name: 'Items 1'},
    {key: 2, name: 'Items 2'},
    {key: 3, name: 'Items 3'},
    {key: 4, name: 'Items 4'},
    {key: 5, name: 'Items 5'},
    {key: 6, name: 'Items 6'},
    {key: 7, name: 'Items 7'},
    {key: 8, name: 'Items 8'},
    {key: 9, name: 'Items 9'},
    {key: 10, name: 'Items 10'},
    {key: 11, name: 'Items 11'},
    {key: 12, name: 'Items 12'},
    {key: 13, name: 'Items 27'},
    {key: 14, name: 'Items 78'},
  ]);

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    console.log('onRefresh');
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    setItems([...Items, {key: 69, name: 'Items 69'}]);
    setRefreshing(true);
  }, []);

  return (
    <View style={styles.body}>
      {/* <ScrollView horizontal={true} style={styles.body}> горизонтальний скрол*/}
      {/* <ScrollView  style={styles.body}> вертикальний скрол */}
      <ScrollView
        style={styles.body}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['#ff00ff']}
          />
        }>
        {Items.map(object => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
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

export default ScrollViewComponent;
