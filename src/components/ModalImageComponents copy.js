//TextInputComponents.js //https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash
//TextInput,Button,TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback,Pressable,
import React, {useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  TextInput,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const ModalImageComponents = () => {
  const [name, SetName] = useState('');
  const [submited, SetSubmited] = useState(false);
  const [showWarning, SetShowWarning] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmited(!submited);
    } else {
      SetShowWarning(true);
    }
  };
  return (
    // <View style={styles.body}>
    <ImageBackground
      style={styles.body}
      source={{
        // uri: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-grunge-brick-wall-texture-1201-png-image_3552420.jpg',
        uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_1280.png',
      }}>
      <Modal
        // animationType="slide"
        // transparent={true}//Не весь екран
        transparent //По замовчуванню/Весь екран
        visible={showWarning}
        onRequestClose={() => SetShowWarning(false)}
        animationType="fade"
        // animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer then 3 character
              </Text>
            </View>
            <Pressable
              onPress={() => SetShowWarning(false)}
              style={styles.warning_button}
              // Визначає колір ефекту брижі.
              android_ripple={{color: '#ffcfff'}}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* ++++++++++++++++++++++++++++++++++++ */}
      <Text style={styles.textHead}>Modal</Text>
      <Text style={styles.text}>Введіть своє ім'я > 4 символів:</Text>
      <TextInput
        multiline //багато рядків
        style={styles.input}
        placeholder="e.g.Join"
        onChangeText={value => SetName(value)}
      />
      <Button
        style={styles.button}
        title={submited ? 'Button-Cleer' : 'Button-Submit'}
        onPress={onPressHandler}
        // disabled={submited}
        color="#00f"
      />
      {submited ? (
        <View style={styles.body}>
          <Text style={styles.textHead}>Ви зареєстровані як: {name}</Text>
          <Image
            style={styles.image}
            source={require('../../assets/Done.png')}
            resizeMode="stretch" //маштабує
          />
        </View>
      ) : (
        // <Image source={logo} />
        <Image
          style={styles.image}
          source={logo}
          // source={require('../../assets/error.jpg')}
          // source={require('../../assets/error.png')}
          resizeMode="stretch" //маштабує
          // blurRadius={10}//РОзмиття зображення
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#ffffff',
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
    // fontStyle: 'italic',
    fontSize: 20,
    margin: 10,
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5,
  },
  button: {
    width: 150,
    height: 30,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default ModalImageComponents;
