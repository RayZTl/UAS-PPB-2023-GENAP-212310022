import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DaftarPesanan = () => {
  const navigation = useNavigation();
  const [pesanan, setPesanan] = useState([
    
    { id: 2, nama: 'Mie Ayam', harga: 13000 },
    // ... daftar menu yang dipesan
  ]);

  // Menghitung total harga pesanan
  const totalHarga = pesanan.reduce((total, item) => total + item.harga, 0);

  // Mengambil tanggal saat ini
  const tanggalPemesanan = new Date().toLocaleDateString();

  // Fungsi untuk menyimpan pesanan


  const handleSimpanPesanan = () => {
        // Kirim data pesanan ke halaman laporan saat tombol "Simpan Pesanan" ditekan
        navigation.navigate('Laporan', { pesanan });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Pesanan</Text>
      <Text style={styles.header2}>Silahkan Cek Pesanan</Text>
    <View style={styles.rowContainer}>
    <Text style={styles.label}>Tanggal Pemesanan:</Text>
    <Text style={styles.tanggal}>{tanggalPemesanan}</Text>
    </View>
      
    <View style={styles.rowContainer}>
    <Text style={styles.label}>Daftar Menu Pesanan:</Text>
      {pesanan.map((item) => (
        <Text key={item.id} style={styles.menu}>{item.nama}</Text>
      ))}
    </View>
    <View style={styles.rowContainer}>
      <Text style={styles.label}>Total Harga:</Text>
      <Text style={styles.harga}>{totalHarga}</Text>
    </View>
      

      <TouchableOpacity style={styles.button} onPress={handleSimpanPesanan}>
        <Text style={styles.buttonText}>Simpan Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    color: "#EE8C33",
    textAlign: "left",
    fontSize: 32,
    fontWeight:"bold",
    marginTop: 20,
  },
  header2: {
    textAlign: "left",
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
  tanggal: {
    fontSize: 16,
    marginLeft: 10,
  },
  harga: {
    fontSize: 16,
  },  
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: "white",
    padding: 10,
  },  
  menu: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#EE8C33',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DaftarPesanan;
