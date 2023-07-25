import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [orders, setOrders] = useState([
    { id: 1, date: '2023-07-14', menu: 'Mie Ayam', quantity: 2, price: 46000 },
    { id: 2, date: '2023-07-15', menu: 'Es Jeruk', quantity: 1, price: 7000 },
    { id: 3, date: '2023-07-16', menu: 'Baso 1 Porsi', quantity: 3, price: 57000 },
  ]);

  const getTotalAmount = () => {
    let total = 0;
    orders.forEach((order) => {
      total += order.quantity * order.price;
    });
    return total;
  };

  const renderOrder = ({ item, index }) => (
    <TouchableOpacity key={item.id} onPress={() => console.log(`Clicked order ${item.id}`)}>
      <View style={styles.row}>
        <Text style={styles.text}>{index + 1}</Text>
        <Text style={styles.text}>{item.date}</Text>
        <Text style={styles.text}>{item.menu}</Text>
        <Text style={styles.text}>{item.quantity}</Text>
        <Text style={styles.text}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Laporan</Text>

      <ScrollView horizontal>
        <View>
          <View style={[styles.row, styles.head]}>
            <Text style={styles.text}>No.</Text>
            <Text style={styles.text}>Tanggal</Text>
            <Text style={styles.text}>Menu</Text>
            <Text style={styles.text}>Jumlah</Text>
            <Text style={styles.text}>Harga</Text>
          </View>

          <FlatList
            data={orders}
            renderItem={renderOrder}
            keyExtractor={(item) => item.id.toString()}
          />

          <View style={[styles.row, styles.totalRow]}>
            <Text style={[styles.text, styles.totalText]}></Text>
            <Text style={[styles.text, styles.totalText]}></Text>
            <Text style={[styles.text, styles.totalText]}></Text>
            <Text style={[styles.text, styles.totalText]}>Total</Text>
            <Text style={[styles.text, styles.totalText]}>{getTotalAmount()}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#EE8C33',
    textAlign: "left",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  text: {
    margin: 6,
  },
  head: {
    backgroundColor: '#f1f8ff',
    fontWeight: 'bold',
  },
  totalRow: {
    backgroundColor: '#e6f7ff',
  },
  totalText: {
    fontWeight: 'bold',
  },
});

export default App;
