import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

export default function DropdownPicker() {
  const [selectedProduto, setSelectedProduto] = useState();
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
      <Text style={styles.title}>Escolha para compra rápida:</Text>
      <Picker
      onValueChange={(value) => setSelectedProduto(value)}
      selectedValue={selectedProduto}
      style={styles.picker}
      mode="dropdown">
        {produtos.map((produto) => (
          <Picker.Item label={produto.nome} value={produto.nome} key={produto.id} ></Picker.Item>
        ))}
      </Picker>
      
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
  selectedProductText: {
    fontSize: 18,
    margin: 10,
  },
  title: {
    fontSize: 28,
    width: 300,
    textAlign: 'center',
    paddingBottom: 20,
    },
  picker: {
    fontSize: 30,
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
    },
});
