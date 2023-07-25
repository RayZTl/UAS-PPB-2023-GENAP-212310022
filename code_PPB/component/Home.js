import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  //for redirect to another page
  const navigation = useNavigation();
  //end initial
  const handleKeluar = () => {
    navigation.navigate('Login');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/MieAyam.jpeg")}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.text}>SELAMAT DATANG</Text>
          <Text style={styles.text2}>OWNER BAKMIE JOKO</Text>
        </View>
      </View>
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DaftarMenu')}>
          <Text style={styles.buttonText}>Daftar Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Laporan')}>
          <Text style={styles.buttonText}>Laporan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { alignSelf: 'center' }]} onPress={handleKeluar}>
          <Text style={styles.buttonText2}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EE8C33',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: "white",
  },
  text2: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: 'white'
  },
  text3: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'brown'
  },
  button: {
    backgroundColor: "white",
    marginVertical: 15,
    width: 300,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button2: {
    backgroundColor: "#76470E",
    marginVertical: 75,
    width: 300,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "333333",
    fontWeight: "bold"
  },
  buttonText2: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  }
});

export default Home;
