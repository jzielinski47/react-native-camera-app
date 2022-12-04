import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'
import CustomButtonEmp from '../components/CustomButtonEmp';
import * as MediaLibrary from "expo-media-library";
import { ToastAndroid } from "react-native";
import FotoItem from '../components/FotoItem';

export default function Gallery() {

    const [imageGallery, setImageGallery] = useState([])

    useEffect(() => { downloadAlbum() }, [])

    const downloadAlbum = async () => {
        const { status } = MediaLibrary.requestPermissionsAsync();
        // ToastAndroid.showWithGravity('komunikat', ToastAndroid.SHORT, ToastAndroid.CENTER);
        const album = await MediaLibrary.getAlbumAsync("DCIM");
        const photos = await MediaLibrary.getAssetsAsync({ album: album })
        setImageGallery([...photos.assets])
    }

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
                <FlatList numColumns={4} data={imageGallery} renderItem={({ item }) => (
                    <FotoItem id={item.id} timestamp={item.creationTime} />
                )}
                />
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