import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { newsList } from "../../data/news";

export default function NewsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News / Activities</Text>

      <FlatList
        data={newsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/news-detail",
                params: {
                  title: item.title,
                  category: item.category,
                  description: item.description,
                  date: item.date,
                  sourceLink: item.sourceLink,
                },
              })
            }
          >
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text>{item.category}</Text>
            <Text>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  card: {
    backgroundColor: "#f4f4f4",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  newsTitle: { fontSize: 16, fontWeight: "600" },
});