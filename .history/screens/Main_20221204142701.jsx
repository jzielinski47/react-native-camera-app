import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react'

const image = { uri: "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg" };

const Main = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} blurRadius={10}>
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
    text: { color: 'white' }
});

export default Main;