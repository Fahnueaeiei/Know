import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const scholarships = [
    {
      id: "1",
      title: "Freshman Excellence Scholarship",
      subtitle: "For outstanding first-year students",
      amount: "฿50,000/year",
      deadline: "2026-04-30",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Academic Achievement Award",
      subtitle: "Based on GPA requirements",
      amount: "฿30,000/year",
      deadline: "2026-05-15",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Welcome, Freshman!</Text>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#9ca3af" />
          <TextInput
            placeholder="Search all..."
            placeholderTextColor="#9ca3af"
            style={styles.searchInput}
          />
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Scholarships</Text>

        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
          <Ionicons name="chevron-forward" size={16} color="#d97745" />
        </TouchableOpacity>
      </View>

      {scholarships.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.9}>
          <TouchableOpacity style={styles.favoriteButton}>
            <Ionicons name="heart-outline" size={18} color="#9ca3af" />
          </TouchableOpacity>

          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text style={styles.deadline}>Deadline: {item.deadline}</Text>
          </View>

          <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="cover" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  content: {
    paddingBottom: 24,
  },

  hero: {
    backgroundColor: "#bf5a37",
    paddingTop: 28,
    paddingHorizontal: 18,
    paddingBottom: 26,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 18,
  },

  searchBox: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#111827",
  },

  sectionHeader: {
    marginTop: 22,
    marginBottom: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  seeAllText: {
    color: "#d97745",
    fontWeight: "600",
    marginRight: 2,
  },

  card: {
    marginHorizontal: 16,
    marginBottom: 14,
    backgroundColor: "#f4df8d",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  favoriteButton: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    paddingRight: 40,
  },

  cardSubtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#475569",
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    marginBottom: 12,
    gap: 12,
    flexWrap: "wrap",
  },

  amount: {
    fontSize: 16,
    fontWeight: "800",
    color: "#e6a92d",
  },

  deadline: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6b7280",
  },

  cardImage: {
    width: "100%",
    height: 140,
    borderRadius: 14,
    backgroundColor: "#ead8a0",
  },
});