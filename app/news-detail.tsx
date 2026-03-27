import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function NewsDetailScreen() {
  const router = useRouter();
  const { title, description, type, date, image, content } =
    useLocalSearchParams();

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageWrapper}>
          <Image source={{ uri: String(image) }} style={styles.image} />

          <TouchableOpacity
            style={[styles.topIconButton, styles.leftIcon]}
            onPress={() => router.back()}
            activeOpacity={0.85}
          >
            <Ionicons name="chevron-back" size={28} color="#1F2937" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.topIconButton, styles.rightIcon]}
            activeOpacity={0.85}
          >
            <Ionicons name="heart-outline" size={24} color="#1F2937" />
          </TouchableOpacity>
        </View>

        <View style={styles.mainCard}>
          <View style={styles.metaRow}>
            <View style={styles.metaLeft}>
              <Feather name="calendar" size={22} color="#D2643E" />
              <Text style={styles.dateText}>{date}</Text>
            </View>

            <View style={styles.metaLeft}>
              <Feather name="tag" size={20} color="#D2643E" />
              <View style={styles.tag}>
                <Text style={styles.tagText}>{type}</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.title}>{title}</Text>

          <Text style={styles.summaryText}>{description}</Text>

          <Text style={styles.bodyText}>
            {content
              ? String(content)
              : "The university welcomes all new students to participate in our comprehensive orientation program designed to help you transition smoothly into university life."}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#EEF0F3",
  },

  container: {
    flex: 1,
    backgroundColor: "#EEF0F3",
  },

  scrollContent: {
    paddingBottom: 20,
  },

  imageWrapper: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 285,
  },

  topIconButton: {
    position: "absolute",
    top: 18,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  leftIcon: {
    left: 16,
  },

  rightIcon: {
    right: 16,
  },

  mainCard: {
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    marginHorizontal: 12,
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 18,
    marginBottom: 14,
  },

  metaLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  dateText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#556074",
  },

  tag: {
    marginLeft: 8,
    backgroundColor: "#F7EAE6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },

  tagText: {
    fontSize: 12,
    color: "#D2643E",
    fontWeight: "500",
    textTransform: "lowercase",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginBottom: 18,
  },

  title: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 14,
  },

  summaryText: {
    fontSize: 16,
    lineHeight: 26,
    color: "#475467",
    marginBottom: 16,
    fontWeight: "500",
  },

  bodyText: {
    fontSize: 15,
    lineHeight: 26,
    color: "#556074",
    fontWeight: "400",
  },
});