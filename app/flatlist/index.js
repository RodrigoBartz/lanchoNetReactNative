import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Flatlist() {
  const [produtos, setProdutos] = useState([]);
  
  useEffect(() => {
    getProd();
  });

  const getProd = () => {
    axios.get(`http://localhost:3000/produtos/`)
    .then(response => {setProdutos(response.data)})
    .catch(error => {console.log(error)})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatCardápio</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Text>{item.nome}</Text>
        )}
      />
      <Link href="/">Voltar</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "orange"
  },
  title: {
    fontSize: 28,
    width: 300,
    textAlign: 'center',
    paddingBottom: 20,
    },

});
