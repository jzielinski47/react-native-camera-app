import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react'

export default function Main() {
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => navigation.navigate('list')}>
                
            </TouchableOpacity>
            <Text style={styles.regular}>find and save your position</Text>
            <Text style={styles.regular}>use google maps 🌍</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303f9f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: { fontSize: 54, color: '#fff', margin: 12.5 },
    regular: { fontSize: 24, fontWeight: 'regular', color: '#ffffff' }
});