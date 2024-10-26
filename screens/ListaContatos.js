import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { BASE_URL } from '../config';

function ListaContatos({ navigation }) {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    const fetchContatos = async () => {
      try {
        const response = await fetch(`${BASE_URL}/contatos`);
        const data = await response.json();
        setContatos(data);
      } catch (error) {
        console.error('Erro ao buscar contatos:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', fetchContatos);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contatos</Text>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EditarContato', { contatoId: item.id })}>
            <View style={styles.contactItem}>
              <Text style={styles.contactName}>{item.nome}</Text>
              <Text>{item.telefone}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  contactItem: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
  contactName: { fontWeight: 'bold' },
});

export default ListaContatos;
  