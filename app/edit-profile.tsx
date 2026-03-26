import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function EditProfile() {
  const [name, setName] = useState("Phattharawadee Songsrirod");
  const [email, setEmail] = useState("user@email.com");
  const [phone, setPhone] = useState("0812345678");
  const router = useRouter();

  const handleSave = () => {
    Alert.alert("Success", "Profile updated");
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <TextInput value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput value={phone} onChangeText={setPhone} style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 10,
  },
  buttonText: { color: "white", textAlign: "center" },
});