import { View, Text, Image, SafeAreaView} from 'react-native'
import React from 'react'
// import { StatusBar } from 'react-native-web';

const LoadingPage = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'rgba(238, 141, 51, 1)', flex: 1}}>
      {/* <StatusBar  */}
      <View style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', flex: 1}}>
      <Image source={require("../../assets/MieAyam.jpeg")} 
       style={{
        width: 154,
        height: 154,
        borderRadius: 100
       }}
       />
      <Text style={{fontSize: 25, color: 'white', }}>BAKMIE JOKO</Text>
      </View>
      <View>
      <Text style={{color: "white", justifyContent: 'flex-end', textAlign: 'center' }}>Since 2017</Text>
      </View>
      {/* </StatusBar>     */}
    </SafeAreaView>
    
  )
}

// const styles = {
//   heading: {
//     fontFamily: 'Arial', // Mengatur jenis font Arial untuk heading
//   },
//   paragraph: {
//     fontFamily: 'Verdana', // Mengatur jenis font Verdana untuk paragraf
//   },
// };

// const styles = StyleSheet.create({
//       container: {
//         position: absolute,
//         width: 154px;
//         height: 154px;
//         left: 103px;
//         top: 166px;
        
//         background: url();
//       }
// })

export default LoadingPage