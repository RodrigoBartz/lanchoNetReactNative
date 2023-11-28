import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';

export default function ListaAxios() {
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
      <Text style={styles.title}>Cardápio</Text>
      {produtos.map(product => (
      <Text key={product.id} style={styles.productName}>
        {product.nome}
      </Text>
      ))}
      <Link href="/">Voltar</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "orange"
  },
  productName: {
    fontSize: 18,
    margin: 10,
  },
  title: {
    fontSize: 28,
    width: 300,
    textAlign: 'center',
    paddingBottom: 20,
    },
});