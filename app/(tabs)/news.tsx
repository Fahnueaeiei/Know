import { useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { styles } from "../../styles/news";

const categories = ["All", "Events", "Scholarships", "Announcements"];

const newsData = [
  {
    id: "1",
    title: "Welcome Freshmen Orientation 2026",
    description: "Join us for the annual freshmen orientation program.",
    content: "The university welcomes all new students to participate in our comprehensive orientation program designed to help you transition smoothly into university life.",
    type: "event",
    category: "Events",
    date: "2026-03-25",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    title: "Library Extended Hours During Exam Week",
    description: "The main library will stay open longer to support students during exams.",
    type: "announcement",
    category: "Announcements",
    date: "2026-03-20",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    title: "New Scholarship Program Announced",
    description: "Applications are now open for the new merit-based scholarship program.",
    type: "scholarship",
    category: "Scholarships",
    date: "2026-03-18",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function NewsScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  const filteredNews = useMemo(() => {
    if (selectedCategory === "All") return newsData;
    return newsData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <View style={styles.hero}>
              <Text style={styles.heroTitle}>News & Updates</Text>
            </View>

            <View style={styles.categorySection}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryList}
              >
                {categories.map((item) => {
                  const active = selectedCategory === item;

                  return (
                    <TouchableOpacity
                      key={item}
                      style={[
                        styles.categoryChip,
                        active && styles.categoryChipActive,
                      ]}
                      onPress={() => setSelectedCategory(item)}
                      activeOpacity={0.85}
                    >
                      <Text
                        style={[
                          styles.categoryText,
                          active && styles.categoryTextActive,
                        ]}
                        numberOfLines={1}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
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
                },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.cardImage} />

            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>

              <View style={styles.cardFooter}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{item.type}</Text>
                </View>

                <Text style={styles.dateText}>{item.date}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.heartButton} activeOpacity={0.8}>
              <Ionicons name="heart-outline" size={22} color="#7A8499" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}