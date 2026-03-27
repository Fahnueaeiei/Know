import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/index";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const scholarships = [
    {
      id: "1",
      title: "Academic Achievement Award",
      subtitle: "Based on GPA requirements",
      amount: "฿30,000/year",
      deadline: "2026-05-15",
      description: "Awarded to students maintaining a GPA of 3.5 or above.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Academic Achievement Award",
      subtitle: "Based on GPA requirements",
      amount: "฿30,000/year",
      deadline: "2026-05-15",
      description: "Awarded to students maintaining a GPA of 3.5 or above.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const places = [
    {
      id: "1",
      title: "Main Library",
      building: "Building A",
      floor: "1st-5th Floor",
      location: "Khon Kaen University",
      category: "Library",
      description:
        "Central library with extensive collection of books, study rooms, and computer labs.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
      lat: "16.475",
      lng: "102.82",
    },
    {
      id: "2",
      title: "Student Center",
      building: "Building B",
      floor: "1st-3rd Floor",
      location: "Khon Kaen University",
      category: "Facility",
      description: "Student service center and activity area.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      lat: "16.474",
      lng: "102.821",
    },
    {
      id: "3",
      title: "Science Lab",
      building: "Building C",
      floor: "2nd-4th Floor",
      location: "Faculty of Science",
      category: "Classroom",
      description: "Laboratory rooms and science classrooms.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      lat: "16.4735",
      lng: "102.8237",
    },
    {
      id: "4",
      title: "Engineering Building",
      building: "Building D",
      floor: "1st-6th Floor",
      location: "Faculty of Engineering",
      category: "Classroom",
      description: "Engineering classrooms and lecture halls.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585",
      lat: "16.472",
      lng: "102.8245",
    },
  ];

  const news = [
    {
      id: "1",
      title: "Welcome Freshmen Orientation 2026",
      date: "2026-03-25",
      type: "event",
      description: "Join us for the annual freshmen orientation program.",
      content:
        "The university welcomes all new students to participate in our comprehensive orientation program designed to help you transition smoothly into university life.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    },
    {
      id: "2",
      title: "New Scholarship Program Announced",
      date: "2026-03-20",
      type: "scholarship",
      description:
        "Applications are now open for the new merit-based scholarship program.",
      content:
        "Students are encouraged to apply for the newly announced scholarship program that supports academic excellence and leadership potential.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      id: "3",
      title: "Campus Sustainability Initiative",
      date: "2026-03-18",
      type: "announcement",
      description:
        "Join the university’s new sustainability and green campus initiative.",
      content:
        "This initiative invites students and staff to participate in eco-friendly projects and activities that promote sustainability across campus.",
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
          <Ionicons name="chevron-forward" size={16} />
        </TouchableOpacity>
      </View>

      {scholarships.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          activeOpacity={0.9}
          onPress={() =>
            router.push({
              pathname: "/index-detail",
              params: {
                title: item.title,
                subtitle: item.subtitle,
                amount: item.amount,
                deadline: item.deadline,
                image: item.image,
                description: item.description,
              },
            })
          }
        >
          <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.8}>
            <Ionicons name="heart-outline" size={18} color="#9ca3af" />
          </TouchableOpacity>

          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text style={styles.deadline}>Deadline: {item.deadline}</Text>
          </View>

          <Image
            source={{ uri: item.image }}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      ))}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Places</Text>

        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
          <Ionicons name="chevron-forward" size={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.placeGrid}>
        {places.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.placeCard}
            activeOpacity={0.9}
            onPress={() =>
              router.push({
                pathname: "/place-detail",
                params: {
                  name: item.title,
                  category: item.category,
                  location: item.location,
                  description: item.description,
                  building: item.building,
                  floor: item.floor,
                  image: item.image,
                  lat: item.lat,
                  lng: item.lng,
                },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.placeImage} />

            <TouchableOpacity style={styles.placeFavorite} activeOpacity={0.8}>
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
          <Ionicons name="chevron-forward" size={16} />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        {news.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.newsCard}
            activeOpacity={0.9}
            onPress={() =>
              router.push({
                pathname: "/news-detail",
                params: {
                  title: item.title,
                  description: item.description,
                  type: item.type,
                  date: item.date,
                  image: item.image,
                  content: item.content,
                },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.newsImage} />

            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDate}>{item.date}</Text>

              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.type}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.newsFavorite} activeOpacity={0.8}>
              <Ionicons name="heart-outline" size={18} color="#9ca3af" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}