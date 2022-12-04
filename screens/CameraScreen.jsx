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
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center', padding: 15 }}>
                        <CameraButton title={"rot"} onPress={() => toggleCamera()} uri='https://cdn.icon-icons.com/icons2/1875/PNG/512/rotateaxisy_120496.png' stylesheet={styles.rotateBtn} />
                        <CameraButton title={"shot"} onPress={() => takePhoto()} uri='https://cdn.icon-icons.com/icons2/753/PNG/512/photo-camera-1_icon-icons.com_63898.png' stylesheet={styles.shotBtn} />
                    </View>
                </Camera>
            </View>
        )
    } else {
        <View style={styles.container}>
            <Text>{cameraPermissions === false ? "Allow camera permissions to use the camera" : "Allow the camera permissions"}</Text>
            {!cameraPermissions ? requestCameraPermissions() : null}
        </View>
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
    camera: { flex: 1 },
    rotateBtn: { position: 'absolute', bottom: 15, left: 20, padding: 20 },
    shotBtn: { padding: 35 },
    text: { color: 'white', fontSize: 16, marginBottom: 30, textAlign: 'center' }
});

export default CameraScreen