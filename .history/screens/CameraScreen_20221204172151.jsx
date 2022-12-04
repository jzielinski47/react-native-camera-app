import { View, Text } from 'react-native'
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const CameraScreen = () => {

    useEffect(() => { }, [])


    return (
        <View>
            <Text>CameraScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
})

export default CameraScreen