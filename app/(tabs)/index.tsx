import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TextInput, View, TouchableOpacity} from "react-native";
import { styles } from "../../styles/index";

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

  const places = [
    {
      id: "1",
      title: "Main Library",
      building: "Building A",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    },
    {
      id: "2",
      title: "Student Center",
      building: "Building B",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    {
      id: "3",
      title: "Science Lab",
      building: "Building C",
      image: "https://images.unsplash.com/photo-1581091870627-3b5de6c0f8c7",
    },
    {
      id: "4",
      title: "Engineering Building",
      building: "Building D",
      image: "https://images.unsplash.com/photo-1562774053-701939374585",
    },
  ];

  const news = [
    {
      id: "1",
      title: "Welcome Freshmen Orientation 2026",
      date: "2026-03-25",
      type: "event",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    },
    {
      id: "2",
      title: "New Scholarship Program Announced",
      date: "2026-03-20",
      type: "scholarship",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      id: "3",
      title: "Campus Sustainability Initiative",
      date: "2026-03-18",
      type: "announcement",
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469",
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

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Places</Text>

        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
          <Ionicons name="chevron-forward" size={16} color="#d97745" />
        </TouchableOpacity>
      </View>

      <View style={styles.placeGrid}>
        {places.map((item) => (
          <TouchableOpacity key={item.id} style={styles.placeCard}>
            <Image source={{ uri: item.image }} style={styles.placeImage} />

            <TouchableOpacity style={styles.placeFavorite}>
              <Ionicons name="heart-outline" size={16} color="#9ca3af" />
            </TouchableOpacity>

            <View style={styles.placeContent}>
              <Text style={styles.placeTitle}>{item.title}</Text>
              <Text style={styles.placeSubtitle}>{item.building}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>News & Updates</Text>

        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
          <Ionicons name="chevron-forward" size={16} color="#d97745" />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        {news.map((item) => (
          <TouchableOpacity key={item.id} style={styles.newsCard}>
            <Image source={{ uri: item.image }} style={styles.newsImage} />

            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDate}>{item.date}</Text>

              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.type}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.newsFavorite}>
              <Ionicons name="heart-outline" size={18} color="#9ca3af" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}