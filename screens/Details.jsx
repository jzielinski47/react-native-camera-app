import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react'
import CustomButtonEmp from '../components/CustomButtonEmp';
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;

// Should be called BigImage
const Details = ({ route, navigation }) => {

    const deleteImage = async () => {
        await MediaLibrary.deleteAssetsAsync([route.params.image])
        await route.params.refresh()
        navigation.navigate("gallery");
    }

    const shareImage = async () => {
        if (Sharing.isAvailableAsync()) {
            Sharing.shareAsync(route.params.image.uri);
        } else console.log("cant share right now");
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '90%' }}>
                <Image resizeMode={'cover'} style={styles.image} source={{ uri: route.params.image.uri }} />
            </View>
            <View style={styles.buttons}>
                <CustomButtonEmp title={'share'} onPress={shareImage} />
                <CustomButtonEmp title={'delete'} onPress={deleteImage} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, jusifyContent: 'center', alignItems: 'center', backgroundColor: '#121212', padding: 5 },
    image: { height: "85%", width: '100%', borderRadius: 10 },
    buttons: { flexDirection: 'row', justifyContent: 'space-evenly', margin: 5, padding: 5, width: maxWidth }
});

export default Details