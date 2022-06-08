import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import imagemX from './assets/eco-light.png';
import imagemY from './assets/eco-light-off.png';

const App = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();
  }, []);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={toggle ? imagemX : imagemY}
        />
      </TouchableOpacity>
    </View>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
});
