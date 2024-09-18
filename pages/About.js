import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

export default function About({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["right", "bottom", "left"]}>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/toad1.jpeg")}
          />
          <Image style={styles.image} source={require("../assets/toad2.jpg")} />
          <Image style={styles.image} source={require("../assets/toad3.jpg")} />
          <Image style={styles.image} source={require("../assets/toad4.png")} />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")} // Navigate to Home screen
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("List")} // Navigate to List (Contact Us) screen
        >
          <Text style={styles.buttonText}>Go to Contact Us</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    flexDirection: "column", // Vertically scrolling layout
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20, // Space between images
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
