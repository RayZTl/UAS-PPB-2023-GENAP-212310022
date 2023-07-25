import { View,Text, SafeAreaView, StyleSheet, Image, ImageBackground, Dimensions,} from "react-native";
  import React from "react";
  import TabsMenu from "./TabsMenu";
  
  const DaftarMenu = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/Background.png")}
          resizeMode="cover"
          style={{ flex: 1}}
          imageStyle={{ height:150, width:width }}
        >
          <View style={{ flex:1 }}></View>
          <View
            style={{ flex: 6, borderTopLeftRadius: 20, borderTopEndRadius: 20, backgroundColor:"white" }}
          >
            <View style={{ padding: 20 }}>
              <Text style={styles.text}>Daftar Menu</Text>
              <Text style={styles.text2}>Masukkan Daftar Menu</Text>
            </View>
            <TabsMenu />
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      color: "#EE8C33",
      textAlign: "left",
      fontSize: 32,
      fontWeight:"bold"
    },
    text2: {
      textAlign: "left",
      fontSize: 16,
    },
  });
  
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  
  export default DaftarMenu;
  
