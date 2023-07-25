import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Price = [
    { id: 1, image: require("../../../assets/MieAyamOriginal.png"), name: "Mie Ayam", harga: 13000 },
    { id: 2, image: require("../../../assets/MieAyamBaksoBesar.png"), name:"Mie Ayam Plus Bakso Besar", harga: 25000 },
    { id: 3, image: require("../../../assets/MieAyamBaksoKecil.png"), name: "Mie Ayam plus Bakso Kecil", harga: 18000 },
    { id: 4, image: require("../../../assets/BihunBakso.png"), name: "Bihun Bakso", harga: 25000 },
    { id: 5, image: require("../../../assets/Bakso1Porsi.png"), name: "Baso 1 Porsi", harga: 18000 },
    { id: 6, image: require("../../../assets/YaminBakso.png"), name: "Yamin Bakso", harga: 23000 },
  ];
  
    function DaftarMakanan(){
    const [counts, setCounts] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const navigation = useNavigation();
  
    const handleMinus = (itemId) => {
      const updatedCounts = { ...counts };
      if (updatedCounts[itemId] && updatedCounts[itemId] > 0) {
        updatedCounts[itemId] = updatedCounts[itemId] - 1;
        setCounts(updatedCounts);
        updateTotalPrice(itemId, -1);
      }
    };
  
    const handlePlus = (itemId) => {
      const updatedCounts = { ...counts };
      updatedCounts[itemId] = updatedCounts[itemId] ? updatedCounts[itemId] + 1 : 1;
      setCounts(updatedCounts);
      updateTotalPrice(itemId, 1);
    };
  
    const handleReset = (itemId) => {
      const updatedCounts = { ...counts };
      const count = updatedCounts[itemId] || 0;
      updatedCounts[itemId] = 0;
      setCounts(updatedCounts);
      updateTotalPrice(itemId, -count);
    };
  
    const updateTotalPrice = (itemId, quantity) => {
      const product = Price.find((item) => item.id === itemId);
      if (product) {
        const price = product.harga;
        setTotalPrice((prevTotalPrice) => prevTotalPrice + price * quantity);
      }
    };
  
    const handleOrder = () => {
      navigation.navigate('DataPesanan', { totalAmount: totalPrice });
    };
  
    const renderProductItem = ({ item }) => {
      const count = counts[item.id] || 0;
  
      return (
        <View style={styles.productItem}>
          <Image source={item.image} style={styles.productImage} />
          <View style={styles.infoContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.priceText}>Rp {item.harga}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => handleReset(item.id)}>
                  <Icon name="trash" size={20} color="red" style={styles.trashButton} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMinus(item.id)}>
                  <Icon name="minus-circle" size={20} color="red" />
                </TouchableOpacity>
                <Text style={styles.quantity}>{count}</Text>
                <TouchableOpacity onPress={() => handlePlus(item.id)}>
                  <Icon name="plus-circle" size={20} color="green" style={styles.plusButton} />
                </TouchableOpacity>
               
              </View>
            </View>
          </View>
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <FlatList
          data={Price}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProductItem}
          style={styles.productList}
        />
        <View style={styles.totalContainer}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.totalLabel}>Jumlah:</Text>
            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalPrice}>Rp {totalPrice.toLocaleString("id-ID")}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
            <Text style={styles.orderButtonText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop:20,
      flex: 1,
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      width: '100%',
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    productList: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 16,
      paddingTop: 10,
    },
    productItem: {
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: 'center',
    },
    productImage: {
      width: 100,
      height: 100,
      marginRight: 10,
    },
    infoContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      marginRight: 10,
    },
    productName: {
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    priceText: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantity: {
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginLeft: 10,
      width: 100,
    },
    plusButton: {
      marginRight: 5,
    },
    trashButton: {
      marginRight: 10,
    },
    totalContainer: {
      width: '100%',
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 16,
      paddingVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    totalLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    totalPriceContainer: {
      borderWidth: 0,
      borderColor: '#000',
      borderRadius: 5,
      padding: 5,
    },
    totalPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    orderButton: {
      backgroundColor: '#EE8C33',
      padding: 5,
      borderRadius: 5,
      marginTop: 10,
      width: 100,
      alignItems: "center",
      justifyContent: "center"
    },
    orderButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
    },
  });



export default DaftarMakanan;
