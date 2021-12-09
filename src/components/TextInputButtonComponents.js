//TextInputComponents.js //https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash
//TextInput,Button,TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback,Pressable,
import React, {useState} from 'react';
import {
  Alert,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const TextInputButtonComponents = () => {
  const [name, SetName] = useState('');
  const [submited, SetSubmited] = useState(false);
  const onPressHandler = () => {
    // if (name.length > 3) {
    SetSubmited(!submited);
    // }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.textHead}>
        TextInput/Button/Touchable/Pressable
      </Text>
      <Text style={styles.text}>Введіть своє ім'я:</Text>
      <TextInput
        multiline //багато рядків
        style={styles.input}
        placeholder="e.g.Join"
        onChangeText={value => SetName(value)}
        // keyboardType="numeric"
        // keyboardType='phone-pad'
        // keyboardType='default'
        // maxLength={3} //Обмеження символів
        // editable={false} //заборона вводу
        // secureTextEntry //скриває текст
      />
      <Button
        style={styles.button}
        title={submited ? 'Button-Cleer' : 'Button-Submit'}
        onPress={onPressHandler}
        // disabled={submited}
        color="#00f"
      />
      {/* <TouchableOpacity */}
      <TouchableOpacity
        style={(styles.button, {backgroundColor: '#b4fbf9'})}
        onPress={onPressHandler}
        activeOpacity={0.3} //прозорість при нвтисканні
      >
        <Text style={styles.text}>
          {submited ? 'TouchableOpacity-Cleer' : 'TouchableOpacity-Submit'}
        </Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={(styles.button, {backgroundColor: '#5bfbf4'})}
        onPress={onPressHandler}
        activeOpacity={0.3} //прозорість при нвтисканні
        underlayColor="#dddddd" //колір при натисканні (для TouchableHighlight)
      >
        <Text style={styles.text}>
          {submited ? 'TouchableHighlight-Cleer' : 'TouchableHighlight-Submit'}
        </Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={onPressHandler}>
        {/* <View style={(styles.button, styles.buttonColor)}> */}
        <View style={styles.button}>
          <Text style={styles.text}>
            {submited
              ? 'TouchableWithoutFeedback-Cleer'
              : 'TouchableWithoutFeedback-Submit'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Pressable
        // style={styles.button}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}} //Встановлює додаткову відстань поза елементом, на якій можна виявити натискання.
        // android_ripple={{color:'#aa83f1'}}
        // disabled={pressed}
        onPressOut={() => Alert.alert('onPressOut')}
        onLongPress={onPressHandler}
        onPress={onPressHandler}
        style={({pressed}) => [
          styles.button,
          {backgroundColor: pressed ? '#dddddd' : '#00d100'},
        ]}>
        <Text style={styles.text}>
          {submited
            ? 'Pressable(LongPress/Out)-Cleer'
            : 'Pressable(LongPress/Out)-Submit'}
        </Text>
      </Pressable>
      {submited ? (
        <Text style={styles.textHead}>Ви зареєстровані як: {name}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  textHead: {
    textAlign: 'center',
    color: 'red',
    fontStyle: 'italic',
    fontSize: 20,
    margin: 3,
  },
  text: {
    textAlign: 'center',
    color: '#000000',
    fontStyle: 'italic',
    fontSize: 15,
    margin: 3,
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5,
  },
  button: {
    width: 350,
    height: 30,
    borderWidth: 1,
    // backgroundColor: '#00ff00',
    alignItems: 'center',
    marginTop: 3,
    // marginBottom: 5,
  },
  buttonColor: {
    backgroundColor: '#00ff00',
  },
});

export default TextInputButtonComponents;
