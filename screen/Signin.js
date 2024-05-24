import {Alert, StyleSheet, View} from 'react-native';
import {Button, Text,Icon, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import React, {useEffect} from 'react';
import '@react-native-firebase/app';
import {login, useMyContextController} from '../store';
//import Icon from 'react-native-vector-icons/Ionicons';
//import { Icon } from 'react-native-paper/lib/typescript/components/List/List';

function Signin({navigation}) {
  const [controller, dispatch] = useMyContextController();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const {userLogin} = controller;
  const [showPass, setShowPass] = React.useState(false);

  useEffect(() => {
    if (userLogin != null) {
      if (userLogin.role == 'admin') {
        navigation.navigate('Admin');
      } else if (userLogin.role == 'customer') {
        navigation.navigate('Customer');
      }
    }
    console.log(userLogin);
  }, [navigation, userLogin]);

  const handleLogin = () => {
    login(dispatch, email, pass);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerName}>Login</Text>
      <TextInput
        label={'Email'}
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
        underlineColor="transparent"
        underlineStyle={0}
        textColor='#000000'
      />
        <TextInput
          style={styles.textInput}
          secureTextEntry={!showPass}
          label={'Password'}
          value={pass}
          onChangeText={setPass}
          textColor='#000000'
          right={
            <TextInput.Icon
              icon={showPass ? 'eye-off' : 'eye'}
              color={"#000000"}
              size={20}
              onPress={() => setShowPass(!showPass)}
            />
          }
          underlineColor="transparent"
          underlineStyle={0}
        />
        {/* <Icon name="eye-off" size={20} color="#000000" onPress={() => setShowPass(!showPass)}/> */}
      
      
      <Button style={styles.button} textColor='#ffffff' mode="contained" onPress={handleLogin}>
        Login
      </Button>
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:5}}>
        <Button textColor='#000000' onPress={() => navigation.navigate('Signup')}>
          Create account
        </Button>
        <Button textColor='#000000' onPress={() => navigation.navigate('ForgotPass')}>
          Forgot password
        </Button>
      </View>
    </View>
  );
}
export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dcdcdc',
    padding: 30,
  },
  headerName: {
    alignSelf: 'center',
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#EB4960',
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: 'none',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: 'grey'
  },

  button: {
    borderRadius: 10,
    marginTop: 20,
    padding: 5,
    backgroundColor: '#EB4960'
  },
});