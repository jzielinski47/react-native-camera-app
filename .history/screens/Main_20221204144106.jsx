import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react'
import CustomButton from '../components/CustomButton';

const image = { uri: "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg" };

const Main = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} blurRadius={3}>
                <Image></Image>
                <Text style={styles.title}>Camera App</Text>
                <Text style={styles.text}>Manage your photos in easy way</Text>
                <CustomButton />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    image: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { color: 'white', fontWeight: 'bold', fontSize: 32 },
    text: { color: 'white', fontSize: 16 }
});

export default Main;