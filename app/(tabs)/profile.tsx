import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  const user = {
    name: "Phattharawadee Songsrirod",
    role: "Freshman • Class of 2029",
    studentId: "123456789",
  };

  const savedPlaces = [
    {
      id: "1",
      name: "Science Complex Building",
      category: "Academic",
      location: "Faculty of Science",
      description: "Main academic building for science classes and laboratories.",
    },
    {
      id: "2",
      name: "Main Library",
      category: "Library",
      location: "Khon Kaen University",
      description: "Central library and learning resource center.",
    },
  ];

  const bookmarkedItems = [
    {
      id: "1",
      title: "Academic Excellence Scholarship",
      category: "Scholarship",
      description: "Scholarship application is now open for eligible students.",
      date: "2026-03-25",
      sourceLink: "https://kku.ac.th",
    },
    {
      id: "2",
      title: "Spring Festival 2026",
      category: "Event",
      description: "Join the annual spring festival and student activities.",
      date: "2026-03-26",
      sourceLink: "https://kku.ac.th",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.sub}>{user.role}</Text>
          <Text style={styles.id}>ID: {user.studentId}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => router.push("/edit-profile")}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Saved Places</Text>
      {savedPlaces.map((place) => (
        <TouchableOpacity
          key={place.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/place-detail",
              params: {
                name: place.name,
                category: place.category,
                location: place.location,
                description: place.description,
              },
            })
          }
        >
          <Text style={styles.cardTitle}>{place.name}</Text>
          <Text style={styles.subDark}>{place.category}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Bookmarked</Text>
      {bookmarkedItems.map((item) => (
        <TouchableOpacity
          key={item.id}
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
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.subDark}>{item.category}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Settings & More</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>App Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.signOut}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    flex: 1,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: "#8b5cf6",
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  sub: {
    color: "#cbd5e1",
    marginTop: 2,
  },
  id: {
    color: "#94a3b8",
    fontSize: 12,
    marginTop: 2,
  },
  editButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  editButtonText: {
    color: "white",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f1f5f9",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0f172a",
  },
  subDark: {
    color: "#475569",
    marginTop: 4,
  },
  signOut: {
    color: "red",
    fontWeight: "600",
  },
});