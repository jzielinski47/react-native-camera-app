import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Main from './screens/Main';
import Gallery from './screens/Gallery';
import CameraScreen from './screens/CameraScreen';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="gallery" component={Gallery} options={{ title: 'DCIM Gallery', headerStyle: { backgroundColor: '#1f1f1f' }, headerTintColor: '#fff', }} />
        <Stack.Screen name="camera" component={CameraScreen} options={{ title: 'Camera', headerStyle: { backgroundColor: '#1f1f1f' }, headerTintColor: '#fff', }} />
        <Stack.Screen name="details" component={Details} options={{ title: 'Details', headerStyle: { backgroundColor: '#1f1f1f' }, headerTintColor: '#fff', }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
});