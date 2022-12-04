import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react'

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;

const FotoItem = ({ id, timestamp, uri, layout, selectedImages, setSelectedImages }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={layout === 4 ? styles.gridImage : styles.wideImage} source={{ uri: uri }} />
                <Text style={styles.id}>{id}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 0, margin: 3 },
    gridImage: { width: maxWidth / 4 - 15, height: 75, borderRadius: 5 },
    wideImage: { width: maxWidth - 30, height: 160, borderRadius: 5 },
    id: { color: 'white', position: 'absolute', right: 0, bottom: 0 }

});

export default FotoItem;