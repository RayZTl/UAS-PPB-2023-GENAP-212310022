import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import DaftarMakanan from './DaftarMakanan';

import DaftarMinuman from './DaftarMInuman';

const TabsMenu = () => {

    const mytabs = [{ id: 1, name: "Makanan", component:<DaftarMakanan /> }, { id: 2, name: "Minuman", component:<DaftarMinuman /> }];
    const [activeTab, setActiveTab] = useState(0);

    return (
        <View style={{ flex:1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: "#EE8C33", }}>
                {mytabs.map((v, index) => (
                    <TouchableOpacity key={v.id} style={(index === activeTab) ? styles.mytabsActive :styles.mytabs} onPress={() => setActiveTab(index)} >
                        <Text style={(index === activeTab) ? styles.mytabsTextActive : styles.mytabsText}>{v.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView>
                {mytabs[activeTab].component}
            </ScrollView>
        </View>
    )
}

export default TabsMenu;

const styles = StyleSheet.create({
    mytabs: {
        paddingHorizontal: 20,
        paddingVertical:15
    },
    mytabsActive: {
        borderBottomWidth: 3,
        borderBottomColor: "#EE8C33",
        paddingHorizontal: 20,
        paddingVertical:15
    },
    mytabsText:{
        color:"gray",
        fontSize:16,
        fontWeight:"bold"
    },
    mytabsTextActive:{
        color:"#EE8C33",
        fontSize:16,
        fontWeight:"bold"
    }
})