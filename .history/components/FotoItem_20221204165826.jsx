import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react'

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;

const FotoItem = ({ id, timestamp, uri, layout }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={layout === 5 ? styles.gridImage : styles.wideImage} source={{ uri: uri }} />
                <Text style={styles.id}>{id}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 0, marginVertical: 5, marginHorizontal: 1.5 },
    gridImage: { width: maxWidth / 5 - 10, height: 65, borderRadius: 5 },
    wideImage: { width: maxWidth - 10, height: 250, borderRadius: 5 },
    id: { color: 'white', position: 'absolute', right: 0, bottom: 0 }

});

export default FotoItem;