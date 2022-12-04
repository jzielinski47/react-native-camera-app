import { View, Text } from 'react-native'
import React from 'react'

const FotoItem = ({ id, timestamp, uri }) => {
    return (
        <View>
            <Text>FotoItem</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212' },
    image: { flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' },
    cover: { opacity: 0.7 },
    icon: { width: 50, height: 50, margin: 10 },
    title: { color: 'white', fontWeight: 'bold', fontSize: 32, marginBottom: 5 },
    text: { color: 'white', fontSize: 16, marginBottom: 30, textAlign: 'center' }
});