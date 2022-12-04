import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList, Button, BackHandler } from 'react-native';
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CustomButton from '../components/CustomButton';

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
                    <View style={{ flex: 1 }}>
                        <CustomButton title={"rot"} onPress={() => toggleCamera()} />
                        <CustomButton title={"shot"} onPress={() => takePhoto()} />
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
    text: { color: 'white', fontSize: 16, marginBottom: 30, textAlign: 'center' }
});

export default CameraScreen