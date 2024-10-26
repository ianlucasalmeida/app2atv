import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { BASE_URL } from '../config';

function EditarContato({ route, navigation }) {
  const { contatoId } = route.params;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    const fetchContato = async () => {
      try {
        const response = await fetch(`${BASE_URL}/contatos/${contatoId}`);
        const contato = await response.json();
        setNome(contato.nome);
        setEmail(contato.email);
        setTelefone(contato.telefone);
      } catch (error) {
        console.error('Erro ao carregar o contato:', error);
      }
    };

    fetchContato();
  }, [contatoId]);

  const handleUpdate = async () => {
    try {
      await fetch(`${BASE_URL}/contatos/${contatoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, telefone })
      });
      navigation.navigate('ListaContatos');
    } catch (error) {
      console.error('Erro ao atualizar o contato:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`${BASE_URL}/contatos/${contatoId}`, { method: 'DELETE' });
      navigation.navigate('ListaContatos');
    } catch (error) {
      console.error('Erro ao excluir o contato:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Contato</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
      <Button title="Salvar" onPress={handleUpdate} />
      <Button title="Excluir" color="red" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginVertical: 8, borderRadius: 5 },
});

export default EditarContato;
