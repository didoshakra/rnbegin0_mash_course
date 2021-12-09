//AlertToastMessageComponent.js //https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash
//TextInput,Button,TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback,Pressable,
import React, {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ToastAndroid,
} from 'react-native';

const AlertToastMessageComponent = () => {
  const [name, SetName] = useState('');
  const [submited, SetSubmited] = useState(false);

  const onPressHandler = () => {
    if (name.length > 4) {
      SetSubmited(!submited);
    }
  };

  const showAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Warning!',
      'The name must be longer 3 characters',
      [
        {
          text: 'Do not show again',
          onPress: () => console.warn('Do not show again Pressed!'),
        },
        {text: 'Cancel', onPress: () => console.warn('Cancel Pressed!')},
        {text: 'OK', onPress: () => console.warn('OK Pressed!')},
      ],
      //Ф-ція по замовчуванню (при уліку поза вибором)
      {cancelable: true, onDismiss: () => console.warn('Alert dismissed!')},
    );
  //************************** */
  const showToast = () => {
    ToastAndroid.show(
      '.show / Повідомлення внизу ( міняється LONG/SHORT) ',
      ToastAndroid.SHORT,
    );
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      '.showToastWithGravity/Міняється місце повідомлення CENTER/BOTTON/TOP)',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      '.showWithGravityAndOffset/Міняється відступ від місця повідомлення (зліва,зверху) (10,20)',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  return (
    <View style={styles.body}>
      <Text style={styles.textHead}>Alert_ToastMessageMashComponent</Text>
      <Text style={styles.text}>Введіть своє ім'я > 4х символів:</Text>
      <TextInput
        multiline //багато рядків
        style={styles.input}
        placeholder="e.g.Joinввв"
        onChangeText={value => SetName(value)}
        // keyboardType="numeric"
        // keyboardType='phone-pad'
        // keyboardType='default'
        // maxLength={3} //Обмеження символів
        // editable={false} //заборона вводу
        // secureTextEntry //скриває текст
      />
      {submited ? (
        <Text style={styles.textHead}>Ви зареєстровані як: {name}</Text>
      ) : null}
      <View style={styles.container}>
        <Button
          // style={styles.button}
          title={submited ? 'Button-Cleer' : 'Button-Submit'}
          onPress={onPressHandler}
          // disabled={submited}
          color="#00f"
        />
        <Button title=" Alert 1-Button (Alert)" onPress={showAlert} />
        <Button
          title={'Alert 2-Button (console.log)'}
          onPress={createTwoButtonAlert}
        />
        <Button
          title={'Alert 3-Button (console.warn)'}
          onPress={createThreeButtonAlert}
        />
        <Button title="ToastAndroid.show" onPress={() => showToast()} />
        <Button
          title="ToastAndroid.showWithGravity"
          onPress={() => showToastWithGravity()}
        />
        <Button
          title="ToastAndroid.showWithGravityAndOffset"
          onPress={() => showToastWithGravityAndOffset()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    // flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: '#888888',
    padding: 5,
  },
  textHead: {
    textAlign: 'center',
    color: 'red',
    fontStyle: 'italic',
    fontSize: 15,
    margin: 3,
  },
  text: {
    textAlign: 'center',
    color: '#000000',
    fontStyle: 'italic',
    fontSize: 10,
    margin: 3,
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 5,
  },
  // button: {
  //   width: 350,
  //   height: 30,
  //   borderWidth: 1,
  //   color: '#00ff00',
  //   backgroundColor: '#00ff00',
  //   alignItems: 'center',
  //   marginTop: 3,
  //   // marginBottom: 5,
  // },
});

export default AlertToastMessageComponent;
