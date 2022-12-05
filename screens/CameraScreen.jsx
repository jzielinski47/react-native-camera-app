import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList, Button, BackHandler } from 'react-native';
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CameraButton from '../components/CameraButton';

const CameraScreen = ({ route, navigation }) => {

    const [camera, setCamera] = useState(null)
    const [cameraPermissions, setCameraPermissions] = useState(null)
    const [type, setType] = useState(CameraType.back);

    const requestCameraPermissions = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setCameraPermissions(status === 'granted' ? true : false)
    }

    const handleBackPress = async () => { }

    const toggleCamera = () => setType((current) => current === CameraType.back ? CameraType.front : CameraType.back)

    const takePhoto = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            const asset = await MediaLibrary.createAssetAsync(photo.uri);
        }
    }

    const goBack = async () => { await route.params.refresh(); navigation.navigate('gallery'); }

    useEffect(async () => {
        requestCameraPermissions();
        await route.params.refresh()
        const backAction = () => { navigation.navigate('gallery') }
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove();
    }, [])

    if (cameraPermissions) {
        return (
            <View style={styles.container}>
                <Camera style={styles.camera} type={type} ref={ref => setCamera(ref)}>
                    <View style={styles.overlay}>
                        <View style={styles.interface} >
                            <View style={styles.modeLayout}>
                                <Text style={[styles.text, { flex: 1 }]}>Gallery</Text>
                                <Text style={[styles.selected, { flex: 1 }]}>Photo</Text>
                                <Text style={[styles.text, { flex: 1 }]}>Rotate</Text>
                            </View>
                            <View style={styles.buttonLayout}>
                                <CameraButton title={"blue"} onPress={() => goBack()} uri='https://cdn.icon-icons.com/icons2/1993/PNG/512/frame_gallery_image_images_photo_picture_pictures_icon_123209.png' stylesheet={styles.rotateBtn} />
                                <CameraButton title={"shot"} onPress={() => takePhoto()} uri='https://cdn.icon-icons.com/icons2/753/PNG/512/photo-camera-1_icon-icons.com_63898.png' stylesheet={styles.shotBtn} />
                                <CameraButton title={"rot"} onPress={() => toggleCamera()} uri='https://cdn.icon-icons.com/icons2/1875/PNG/512/rotateaxisy_120496.png' stylesheet={styles.rotateBtn} />
                            </View>
                        </View>
                    </View>
                </Camera>
            </View>
        )
    } else {
        <View style={styles.overlay}>
            <Text>{cameraPermissions === false ? "Allow camera permissions to use the camera" : "Allow the camera permissions"}</Text>
            {!cameraPermissions ? requestCameraPermissions() : null}
        </View>
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
    camera: { flex: 1 },
    overlay: { flex: 1, justifyContent: 'flex-end' },
    interface: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: 5 },
    buttonLayout: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 0, paddingBottom: 50 },
    modeLayout: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 },
    rotateBtn: { padding: 12 },
    shotBtn: { padding: 25 },
    text: { color: 'white', fontSize: 16, textAlign: 'center', margin: 5, marginHorizontal: 20 },
    selected: { color: '#AB9F6F', fontSize: 16, textAlign: 'center', margin: 5 }
});

export default CameraScreen