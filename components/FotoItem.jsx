import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react'

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;

const FotoItem = ({ id, timestamp, uri, layout, selectedImages, setSelectedImages, navigation, imgs, refresh }) => {

    const [selected, setSelected] = useState(false)

    useEffect(() => {
        console.log(selectedImages, selectedImages.length)
    }, [selectedImages])

    const select = () => {
        if (selectedImages.some(img => img.id === id)) {
            setSelectedImages(selectedImages.filter(img => img.id !== id))
            setSelected(false)
        } else {
            setSelectedImages([...selectedImages, { id, timestamp, uri }])
            setSelected(true);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('details', { image: imgs.filter(img => img.id === id)[0], refresh: refresh })} onLongPress={select}>
                <Image style={layout === 4 ? styles.gridImage : styles.wideImage} source={{ uri: uri }} />
                <Text style={styles.id}>{id}</Text>
                {selected ? <View style={styles.overlay} >
                    <Image style={styles.icon} source={{ uri: 'https://i.imgur.com/kFsRPTH.png' }} />
                </View> : null}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 0, margin: 3 },
    gridImage: { width: maxWidth / 4 - 15, height: 75, borderRadius: 5 },
    wideImage: { width: maxWidth - 30, height: 160, borderRadius: 5 },
    id: { color: 'white', position: 'absolute', right: 0, bottom: 0 },
    icon: { width: 15, height: 15, position: 'absolute', left: 10, top: 10 },
    overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black', opacity: 0.7, }
});

export default FotoItem;