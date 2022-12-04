import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import React, { useEffect } from 'react'
import CustomButtonEmp from '../components/CustomButtonEmp';

export default function Gallery() {

    useEffect(() => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
    }, [])

    const getDimensions = () => {
        Dimensions.get("window").width
        Dimensions.get("window").height
    }

    return (
        <View style={styles.container}>
            <View style={styles.headlineBtns}>
                <CustomButtonEmp title={'layout'} onPress={() => console.log('layout')} />
                <CustomButtonEmp title={'camera'} onPress={() => console.log('camera')} />
                <CustomButtonEmp title={'delete'} onPress={() => console.log('delete')} />
            </View>
            <View style={styles.gallery}>
                <Text style={styles.text}>Gallery</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
    headlineBtns: { flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: '5%' },
    gallery: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#1E1E1E', margin: '5%', padding: '5%' },
    image: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    icon: { width: 50, height: 50, margin: 10 },
    title: { color: 'white', fontWeight: 'bold', fontSize: 32, marginBottom: 5 },
    text: { color: 'white', fontSize: 16, marginBottom: 30 }
});