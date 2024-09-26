import { View, Text } from "react-native";

export default function Contacts({ navigation }) {
  return (
    <View style={{ marginTop: 60 }}>
      <View>
        <Text>Nome: Caio Lopes</Text>
        <Text>Telefone: (32)99962-9386</Text>
        <Text
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
          Information
        </Text>
      </View>
      <View style={{ marginTop: 60 }}>
        <Text>Nome: Giovana Baldini</Text>
        <Text>Telefone: (32)9886-25822</Text>
        <Text onPress={() => navigation.navigate("Information")}>
          Information
        </Text>
      </View>
    </View>
  );
}
