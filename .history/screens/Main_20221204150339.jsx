import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react'
import CustomButton from '../components/CustomButton';

const image = { uri: "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg" };

const Main = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}  imageStyle={styles.cover}>
                <Image style={styles.icon} />
                <Text style={styles.title}>Camera App</Text>
                <Text style={styles.text}>Manage your photos in easy way</Text>
                <CustomButton title={'Get started'} onPress={() => navigation.navigate('gallery')} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
    image: { flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' },
    cover: { opacity: 0.5 },
    icon: { width: 50, height: 50, margin: 10 },
    title: { color: 'white', fontWeight: 'bold', fontSize: 32, marginBottom: 5 },
    text: { color: 'white', fontSize: 16, marginBottom: 30 }
});

export default Main;