import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react'

export default function Main() {
    return (
        <View>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
            <Text>Gallery App</Text>
            <Text>Upload images and photos</Text>
            <TouchableOpacity>

            </TouchableOpacity>
        </ImageBackground>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303f9f',
        alignItems: 'center',
        justifyContent: 'center',
    }
});