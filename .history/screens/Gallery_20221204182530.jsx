import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'
import CustomButtonEmp from '../components/CustomButtonEmp';
import * as MediaLibrary from "expo-media-library";
import { ToastAndroid } from "react-native";
import FotoItem from '../components/FotoItem';

const Gallery = ({ navigation }) => {

    const [imageGallery, setImageGallery] = useState([])
    const [selectedImages, setSelectedImages] = useState([])
    const [deleteArr, setDeleteArr] = useState([])
    const [layout, setLayout] = useState(4)

    useEffect(() => { downloadAlbum() }, [])
    useEffect(() => setDeleteArr(selectedImages), [selectedImages])

    const downloadAlbum = async () => {
        const { status } = MediaLibrary.requestPermissionsAsync();
        // ToastAndroid.showWithGravity('komunikat', ToastAndroid.SHORT, ToastAndroid.CENTER);
        const album = await MediaLibrary.getAlbumAsync("DCIM");
        const photos = await MediaLibrary.getAssetsAsync({ album: album, sortBy: "creationTime", first: 48, mediaType: ["photo"], })
        setImageGallery([...photos.assets])
    }

    const changeLayout = () => setLayout(layout === 4 ? 1 : 4)

    const deleteSelectedPhotos = async () => await MediaLibrary.deleteAssetsAsync(deleteArr);


    return (
        <View style={styles.container}>
            <View style={styles.headlineBtns}>
                <CustomButtonEmp title={'layout'} onPress={changeLayout} />
                <CustomButtonEmp title={'camera'} onPress={() => navigation.navigate('camera')} />
                <CustomButtonEmp title={'delete'} onPress={deleteSelectedPhotos} />
            </View>
            <View style={styles.gallery}>
                <FlatList style={styles.list} numColumns={layout} key={layout} data={imageGallery} renderItem={({ item }) => (
                    <FotoItem id={item.id} timestamp={item.creationTime} uri={item.uri} layout={layout} selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
                )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
    headlineBtns: { flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: '5%' },
    gallery: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#1E1E1E', marginTop: '5%', paddingTop: 10, borderRadius: 15 },
    image: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    icon: { width: 50, height: 50, margin: 10 },
    title: { color: 'white', fontWeight: 'bold', fontSize: 32, marginBottom: 5 },
    text: { color: 'white', fontSize: 16, marginBottom: 30 },
    list: { paddingTop: 10 }
});

export default Gallery;