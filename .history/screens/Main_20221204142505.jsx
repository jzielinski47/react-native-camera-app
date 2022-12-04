import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react'

const image = { uri: "https://reactjs.org/logo-og.png" };

const Main = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text>Gallery App</Text>
                <Text>Upload images and photos</Text>
                <TouchableOpacity>

                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    image: { flex: 1, justifyContent: 'center' },
    text: 
});

export default Main;