import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Home({ navigation, route }) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["right", "bottom", "left"]}>
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="About us"
            onPress={() => navigation.navigate("About")}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Contact us"
            onPress={() => navigation.navigate("List")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
  },
});
