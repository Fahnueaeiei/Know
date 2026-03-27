import { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { places, rooms } from "../../data/places";
import { styles } from "../../styles/place";

const categories = ["All", "Library", "Classroom", "Facility"];

export default function PlaceScreen() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  const results = useMemo(() => {
    const text = keyword.trim().toLowerCase();

    const matchedPlaces = places.filter((place) => {
      const matchKeyword =
        !text ||
        place.name.toLowerCase().includes(text) ||
        place.category.toLowerCase().includes(text) ||
        place.location.toLowerCase().includes(text) ||
        place.building.toLowerCase().includes(text);

      const matchCategory =
        selectedCategory === "All" ||
        place.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchKeyword && matchCategory;
    });

    if (!text) return matchedPlaces;

    const matchedRooms = rooms.filter((room) =>
      room.roomNumber.toLowerCase().includes(text)
    );

    const roomAsPlaces = matchedRooms.map((room) => ({
      id: `room-${room.id}`,
      name: room.roomNumber,
      category: "Classroom",
      location: room.placeName,
      description: `Room ${room.roomNumber} is located in ${room.placeName}`,
      building: room.placeName,
      floor: "See room detail",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      lat: 0,
      lng: 0,
      shuttleBusRoutes: [],
    }));

    return [...matchedPlaces, ...roomAsPlaces];
  }, [keyword, selectedCategory]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Campus Places</Text>

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search-outline" size={22} color="#98A2B3" />
            <TextInput
              placeholder="Search places..."
              placeholderTextColor="#8A8A8A"
              value={keyword}
              onChangeText={setKeyword}
              style={styles.searchInput}
            />
          </View>

          <TouchableOpacity style={styles.filterButton} activeOpacity={0.85}>
            <Feather name="sliders" size={22} color="#667085" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.categorySection}>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
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

        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No data found</Text>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.9}
              onPress={() =>
                router.push({
                  pathname: "/place-detail",
                  params: {
                    name: item.name,
                    category: item.category,
                    location: item.location,
                    description: item.description,
                    building: item.building,
                    floor: item.floor,
                    image: item.image,
                    lat: String(item.lat ?? ""),
                    lng: String(item.lng ?? ""),
                  },
                })
              }
            >
              <Image source={{ uri: item.image }} style={styles.cardImage} />

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardBuilding}>{item.building}</Text>
                <Text style={styles.cardFloor}>{item.floor}</Text>

                <View style={styles.tag}>
                  <Text style={styles.tagText}>
                    {item.category.toLowerCase()}
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={styles.heartButton} activeOpacity={0.8}>
                <Ionicons name="heart-outline" size={20} color="#667085" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}