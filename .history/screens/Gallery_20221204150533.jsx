import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react'
import CustomButton from '../components/CustomButton';

export default function Gallery() {
    return (
        <View style={styles.container}>
            <View>
                <CustomButton title={'layout'} onPress={() => console.log('d')} />
                <CustomButton title={'camera'} onPress={() => console.log('d')} />
                <CustomButton title={'layout'} onPress={() => console.log('d')} />
            </View>

            <Text>Gallery</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
    image: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    icon: { width: 50, height: 50, margin: 10 },
    title: { color: 'white', fontWeight: 'bold', fontSize: 32, marginBottom: 5 },
    text: { color: 'white', fontSize: 16, marginBottom: 30 }
});