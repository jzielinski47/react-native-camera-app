import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react'

const FotoItem = ({ id, timestamp, uri }) => {
    return (
        <View style={styles.container}>
            <Image
                style={[layout ? styles.gridPhoto : styles.singlePhoto]}
                source={{ uri: uri }}
            ></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 0, marginVertical: 5, marginHorizontal: 1.5 },
  
});