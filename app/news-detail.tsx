import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Alert,
} from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function NewsDetailScreen() {
  const params = useLocalSearchParams<{
    title: string;
    category: string;
    description: string;
    date: string;
    sourceLink: string;
  }>();

  const openSource = async () => {
    if (!params.sourceLink) {
      Alert.alert("Error", "No source link");
      return;
    }

    const supported = await Linking.canOpenURL(params.sourceLink);
    if (supported) {
      await Linking.openURL(params.sourceLink);
    } else {
      Alert.alert("Error", "Link is unavailable");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.title}</Text>
      <Text style={styles.text}>Category: {params.category}</Text>
      <Text style={styles.text}>Date: {params.date}</Text>
      <Text style={styles.text}>Description: {params.description}</Text>

      <TouchableOpacity style={styles.button} onPress={openSource}>
        <Text style={styles.buttonText}>View Source</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  text: { fontSize: 16, marginBottom: 8 },
  button: {
    marginTop: 18,
    backgroundColor: "#16a34a",
    padding: 14,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600" },
});