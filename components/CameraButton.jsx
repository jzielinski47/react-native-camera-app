import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, Image } from 'react-native';


const CameraButton = ({ title, onPress, uri, stylesheet }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, stylesheet]}>
            <Image style={{ width: 32, height: 32 }} source={{ uri: uri }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderRadius: 250,
        elevation: 3,
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});


export default CameraButton