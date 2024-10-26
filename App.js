import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import CadastroUsuario from './screens/CadastroUsuario';
import CadastroContato from './screens/CadastroContato';
import EditarContato from './screens/EditarContato';
import ListaContatos from './screens/ListaContatos';

function MainApp() {
  return (
    <View style={styles.container}>
      <Text>Esse é o meu app! Ou a tentativa de um...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="CadastroContato" component={CadastroContato} />
        <Stack.Screen name="EditarContato" component={EditarContato} />
        <Stack.Screen name="ListaContatos" component={ListaContatos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;