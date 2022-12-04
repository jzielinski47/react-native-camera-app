import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react'

export default function Main() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('list')}>
                {fontLoaded ? <Text style={[styles.header, { fontFamily: 'Worksans' }]}>Geo App</Text> : <ActivityIndicator size="large" color="#ffffff87" />}
            </TouchableOpacity>
            <Text style={styles.regular}>find and save your position</Text>
            <Text style={styles.regular}>use google maps 🌍</Text>
        </View>
    )
}