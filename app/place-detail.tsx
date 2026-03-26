import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PlaceDetailScreen() {
  const params = useLocalSearchParams<{
    name: string;
    category: string;
    location: string;
    description: string;
  }>();

  const openMap = async () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      params.name || ""
    )}`;

    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "Cannot open Google Maps");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.name}</Text>
      <Text style={styles.text}>Category: {params.category}</Text>
      <Text style={styles.text}>Location: {params.location}</Text>
      <Text style={styles.text}>Description: {params.description}</Text>

      <View style={styles.busBox}>
        <Text style={styles.busTitle}>Shuttle Bus</Text>
        <Text>Red Line, Green Line</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={openMap}>
        <Text style={styles.buttonText}>Open Google Maps</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 8 },
  busBox: {
    marginTop: 16,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#f1f5f9",
  },
  busTitle: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});