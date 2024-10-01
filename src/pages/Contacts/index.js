import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Contacts({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/caio.jpeg")}
          style={styles.avatar}
        />
        <Text style={styles.contactText}>Nome: Caio Lopes</Text>
        <Text style={styles.contactText}>Telefone: (32) 99962-9386</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Information", {
              nome: "Caio Lopes",
              telefone: "(32) 99962-9386",
              endereco: "rua modesto de paiva",
              numero: "756",
              profissao: "dev",
              email: "caiolopeis95@gmail.com",
            })
          }
        >
          <Text style={styles.infoText}>Information</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../../assets/images/jojo.jpeg")}
          style={styles.avatar}
        />
        <Text style={styles.contactText}>Nome: Giovana Baldini</Text>
        <Text style={styles.contactText}>Telefone: (32) 9886-25822</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Information", {
              nome: "Giovana Baldini",
              telefone: "(32) 9886-25822",
              endereco: "rua maria conceição",
              numero: "40",
              profissao: "professora",
              email: "jobaldin02@gmail.com",
            })
          }
        >
          <Text style={styles.infoText}>Information</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/lucas.jpeg")}
          style={styles.avatar}
        />
        <Text style={styles.contactText}>Nome: Lucas Padilha</Text>
        <Text style={styles.contactText}>Telefone: (32) 99853-9124</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Information", {
              nome: "Lucas Padilha",
              telefone: "(32) 99853-9124",
              endereco: "rua Balbino da cunha",
              numero: "34",
              profissao: "ceo",
              email: "lucaspad@gmail.com",
            })
          }
        >
          <Text style={styles.infoText}>Informação</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactText: {
    color: "#000000",
    fontSize: 20,
    marginBottom: 5,
  },
  infoText: {
    color: "#1E90FF",
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 10,
  },
});
