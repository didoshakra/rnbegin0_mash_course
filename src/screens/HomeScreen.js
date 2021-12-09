//HomeScreen.js//https://www.kindacode.com/article/how-to-render-html-content-in-react-native/
import React from 'react';
import {Button, Linking, Text, View, StyleSheet} from 'react-native';
import Header from '../main/Header';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      {/* <Text>rnbegin0_mash_course</Text> */}
      <Header />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          color: 'red',
          backgroundColor: 'yellow',
        }}>
        The Complete React Native Course 2021 : from Zero to Hero
      </Text>
      <Button
        title="yotube chanel"
        onPress={() => {
          Linking.openURL(
            'https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash',
          );
        }}></Button>
      <Text style={{textAlign: 'center', fontSize: 22, color: 'red'}}>
        Home Page
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('ScrollView')}>
          ScrollView
        </Text>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('FlatList')}>
          FlatList
        </Text>

        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('SectionList')}>
          SectionList
        </Text>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('textInput_Button')}>
          TextInput_Buttons
        </Text>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('Alert_ToastMessage')}>
          Alert_ToastMessage
        </Text>

        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('Modal_Image')}>
          Modal_Image
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
  },
  textButton: {
    margin: 2,
    height: 40,
    width: '20%',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    borderWidth: 1,
    // color: '#8b0000',
    color: '#FFFF',
    // borderColor: '#00B8D4',
    borderColor: '#8b0000',
    backgroundColor: '#00B8D4',
    // backgroundColor: '#6FB8EE',

    borderRadius: 7,
    marginTop: 15,
  },
});

export default
HomeScreen;
