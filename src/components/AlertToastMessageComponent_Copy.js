import React from 'react';
import {
  Alert,
  View,
  StyleSheet,
  ToastAndroid,
  Button,
  StatusBar,
} from 'react-native';

// const showAlert = () =>
//   Alert.alert(
//     'Alert Title',
//     'My Alert Msg',
//     [
//       {
//         text: 'Cancel',
//         onPress: () => Alert.alert('Cancel Pressed'),
//         style: 'cancel',
//       },
//     ],
//     {
//       cancelable: true,
//       onDismiss: () =>
//         Alert.alert(
//           'This alert was dismissed by tapping outside of the alert dialog.',
//         ),
//     },
//   );
const AlertToastMessageComponent = () => {
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
    <View style={styles.container}>
      <Button title=" Alert 1-Button (Alert)" onPress={showAlert} />
      <Button
        title={'Alert 2-Button (console.log)'}
        onPress={createTwoButtonAlert}
      />
      <Button
        title={'Alert 3-Button (console.warn)'}
        onPress={createThreeButtonAlert}
      />
      {/* </View> */}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#888888',
    padding: 8,
  },
});

export default AlertToastMessageComponent;
