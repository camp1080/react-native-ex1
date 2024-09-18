import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { useState } from "react";

const { width } = Dimensions.get("window");

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da2-471f-bd96-145571e29d72",
    title: "Fourth Item",
  },
];

export default function List({ navigation }) {
  const [timesPressed, setTimesPressed] = useState(0);

  const handlePress = () => {
    setTimesPressed((current) => current + 1);
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={handlePress}
      style={[styles.item, { width: width - 32 }]}
    >
      <Text>{item.title}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["right", "bottom", "left"]}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
        <Text>List Screen</Text>
        <Text>Times Pressed: {timesPressed}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <FlatList
          contentContainerStyle={{ alignItems: "center" }}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")} // Navigate to Home screen
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("About")} // Navigate to List (Contact Us) screen
        >
          <Text style={styles.buttonText}>Go to About Us</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "lightgrey",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
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
  container: {
    flex: 1,
    padding: 10,
  },
});
