import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Information({ route }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.infoText}>Nome: {route.params?.nome}</Text>
        <Text style={styles.infoText}>Telefone: {route.params?.telefone}</Text>
        <Text style={styles.infoText}>Endereço: {route.params?.endereco}</Text>
        <Text style={styles.infoText}>Número: {route.params?.numero}</Text>
        <Text style={styles.infoText}>
          Profissão: {route.params?.profissao}
        </Text>
        <Text style={styles.infoText}>Email: {route.params?.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000080",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    color: "#000",
    fontSize: 16,
    marginBottom: 10,
  },
});
