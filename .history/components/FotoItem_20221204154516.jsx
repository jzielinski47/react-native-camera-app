import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react'

const FotoItem = ({ id, timestamp, uri }) => {
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{ uri: uri }} />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 0, marginVertical: 5, marginHorizontal: 1.5 },
    image: { width: 50, height: 50, borderRadius: 15 },
    id: { color: 'white', position: 'absolute', right: 0, bottom: 0 }
});