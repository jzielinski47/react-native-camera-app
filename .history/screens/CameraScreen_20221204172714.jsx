import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList } from 'react-native';
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const CameraScreen = () => {

    const [cameraPermissions, setCameraPermissions] = useState(false)

    useEffect(() => { requestCameraPermissions() }, [])

    const requestCameraPermissions = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setCameraPermissions(true)
    }

    return (
        <View style={styles.container}>
            <Text>{cameraPermissions ? "CameraScreen" : 'b'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
});

export default CameraScreen