import { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { places, rooms } from "../../data/places";

export default function PlaceScreen() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const results = useMemo(() => {
    const text = keyword.trim().toLowerCase();

    if (!text) return places;

    const matchedPlaces = places.filter((place) =>
      place.name.toLowerCase().includes(text) ||
      place.category.toLowerCase().includes(text) ||
      place.location.toLowerCase().includes(text)
    );

    const matchedRooms = rooms.filter((room) =>
      room.roomNumber.toLowerCase().includes(text)
    );

    const roomAsPlaces = matchedRooms.map((room) => ({
      id: `room-${room.id}`,
      name: room.roomNumber,
      category: "Classroom",
      location: room.placeName,
      description: `Room ${room.roomNumber} is located in ${room.placeName}`,
    }));

    return [...matchedPlaces, ...roomAsPlaces];
  }, [keyword]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Place / Classroom</Text>

      <TextInput
        placeholder="Type place or room number"
        value={keyword}
        onChangeText={setKeyword}
        style={styles.input}
      />

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/place-detail",
                params: {
                  name: item.name,
                  category: item.category,
                  location: item.location,
                  description: item.description,
                },
              })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>{item.location}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No data found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  card: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#f4f4f4",
    marginBottom: 10,
  },
  name: { fontSize: 16, fontWeight: "600" },
});