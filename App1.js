//App_FlatList.js //https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash
import React, {useState, useCallback} from 'react';
import {SectionList, View, Text, StyleSheet} from 'react-native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const App = () => {
  const DATA = [
    {
      title: 'Title1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title3',
      data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
    },
    {
      title: 'Title4',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
    },
    {
      title: 'Title5',
      data: ['Item 5-1', 'Item 5-2', 'Item 5-3'],
    },
    {
      title: 'Title6',
      data: ['Item 6-1', 'Item 6-2', 'Item 6-3'],
    },
    {
      title: 'Title7',
      data: ['Item 7-1', 'Item 7-2', 'Item 7-3'],
    },
    {
      title: 'Title8',
      data: ['Item 8-1', 'Item 8-2', 'Item 8-3'],
    },
  ];

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    console.log('onRefresh');
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    setItems([...Items, {name: 'Items 69'}]);
    setRefreshing(true);
  }, []);

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({item}) => (
        // <View style={styles.item}>
        <Text style={styles.text}>{item}</Text>
        // </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
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
    // textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 30,
    // fontWeight: 'bold',
    // color: 'red',
    margin: 10,
  },
});

export default App;
