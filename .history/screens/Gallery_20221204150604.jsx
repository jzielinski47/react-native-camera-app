import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react'
import CustomButtonEmp from '../components/CustomButtonEmp';

export default function Gallery() {
    return (
        <View style={styles.container}>
            <View>
                <CustomButtonEmp title={'layout'} onPress={() => console.log('d')} />
                <CustomButtonEmp title={'camera'} onPress={() => console.log('d')} />
                <CustomButtonEmp title={'delete'} onPress={() => console.log('d')} />
            </View>

            <Text>Gallery</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
    headling
    image: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    icon: { width: 50, height: 50, margin: 10 },
    title: { color: 'white', fontWeight: 'bold', fontSize: 32, marginBottom: 5 },
    text: { color: 'white', fontSize: 16, marginBottom: 30 }
});