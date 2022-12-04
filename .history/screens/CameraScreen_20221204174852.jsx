import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CustomButton from '../components/CustomButton';

const CameraScreen = () => {

    const [cameraPermissions, setCameraPermissions] = useState(null)
    const [type, setType] = useState(CameraType.back);

    useEffect(() => { requestCameraPermissions() }, [])

    const requestCameraPermissions = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setCameraPermissions(status === 'granted' ? true : false)
    }

    const toggleCamera = () => setType(current === CameraType.back ? CameraType.front : CameraType.back)

    if (cameraPermissions) {
        return (
            <View style={styles.container}>
                <Camera style={styles.camera} type={type}>
                    <View style={{ flex: 1 }}>
                        <CustomButton title={"rot"} onPress={toggleCamera} />
                    </View>
                </Camera>
            </View>
        )
    } else {
        <View style={styles.container}>
            <Text>{cameraPermissions === false ? "Allow camera permissions to use the camera" : "Allow the camera permissions"}</Text>
        </View>
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
    camera: { flex: 1 },
    text: { color: 'white', fontSize: 16, marginBottom: 30, textAlign: 'center' }
});

export default CameraScreen