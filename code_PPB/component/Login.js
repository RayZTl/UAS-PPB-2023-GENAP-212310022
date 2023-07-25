import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  //for redirect to another page
  const navigation = useNavigation();
  //end initial

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //Logika untuk proses login
    //Misalnya, melakukan validasi dan mengirim permintaan ke server
    console.log('Username:', username);
    console.log('Password', password);
    if(username && password){
      //redirect to route page
      navigation.navigate('Home');
      //end redirect
    }else{
      alert("username & password tidak boleh kosong");
    }
  };

  return (

    <View style={styles.container}>
      <Image source={require("../../assets/MieAyam.jpeg")} 
       style={{width: 100, height: 100, marginTop: 30, borderRadius: 100}} />
      <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 30, color: "white",}}>BAKMIE JOKO</Text>
      <Text style={{ color: 'white'}}>Slurp it, Blurp it, and Love it!</Text>
      <TextInput 
       style={styles.input}
       placeholder='Username'
       onChangeText={(text) => setUsername(text)}
       value={username}
      />
      <TextInput
       style={styles.inputp}
       placeholder='Password'
       onChangeText={(text) => setPassword(text)}
       value={password}
       secureTextEntry
      />
      <TouchableOpacity 
      style={styles.button}
      onPress={handleLogin}
      >
      <Text style={styles.buttonText}> Masuk </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#EE8C33'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#EE8D33',
    backgroundColor: "white",
    borderRadius: 33,
    marginBottom: 10,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  inputp: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#EE8D33',
    backgroundColor: "white",
    borderRadius: 33,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#76470E',
    width: '70%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 33,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 33,
  },

});

export default Login