import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.nome}>LanchoNet</Text>
        <Link href="/listaAxios">Cardápio</Link>
        <Link href="/flatlist">FlatCardápio</Link>
        <Link href="/dropdownpicker">Pedir lanche</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "orange"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 44
  }
});
