import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

type BusItem = {
  id: string;
  code: string;
  routeName: string;
  routeLabel: string;
  time: string;
};

export default function PlaceDetailScreen() {
  const router = useRouter();

  const {
    name,
    location,
    description,
    building,
    floor,
    image,
    time,
    lat,
    lng,
  } = useLocalSearchParams();

  const busData: BusItem[] = [
    {
      id: "1",
      code: "A",
      routeName: "Main Campus - Engineering",
      routeLabel: "Route A",
      time: "08:00",
    },
    {
      id: "2",
      code: "A",
      routeName: "Main Campus - Engineering",
      routeLabel: "Route A",
      time: "09:30",
    },
    {
      id: "3",
      code: "B",
      routeName: "Main Campus - Science Complex",
      routeLabel: "Route B",
      time: "08:30",
    },
  ];

  const openGoogleMaps = async () => {
    const latitude = typeof lat === "string" ? lat : "";
    const longitude = typeof lng === "string" ? lng : "";
    const label = typeof name === "string" ? name : "Destination";

    let url = "";

    if (latitude && longitude) {
      url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    } else if (typeof building === "string" || typeof location === "string") {
      const query = encodeURIComponent(
        `${building ?? ""} ${location ?? ""} ${label}`.trim()
      );
      url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    }

    if (url) {
      await Linking.openURL(url);
    }
  };

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
          <Text style={styles.title}>{name}</Text>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={24} color="#22C55E" />
            <Text style={styles.infoText}>{building}</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="clock" size={22} color="#F97316" />
            <Text style={styles.infoText}>
              {typeof time === "string" && time ? time : "08:00 - 17:00"}
            </Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.description}>{description}</Text>
        </View>

        <TouchableOpacity
          style={styles.mapButton}
          onPress={openGoogleMaps}
          activeOpacity={0.9}
        >
          <Ionicons name="paper-plane-outline" size={28} color="#FFFFFF" />
          <Text style={styles.mapButtonText}>Navigate with Google Maps</Text>
        </TouchableOpacity>

        <View style={styles.busSection}>
          <View style={styles.busHeader}>
            <MaterialCommunityIcons
              name="bus-school"
              size={26}
              color="#D06A3A"
            />
            <Text style={styles.busTitle}>Shuttle Bus Information</Text>
          </View>

          {busData.map((bus) => (
            <View key={bus.id} style={styles.busCard}>
              <View style={styles.busBadge}>
                <Text style={styles.busBadgeText}>{bus.code}</Text>
              </View>

              <View style={styles.busContent}>
                <Text style={styles.busRouteName}>{bus.routeName}</Text>
                <Text style={styles.busRouteLabel}>{bus.routeLabel}</Text>
              </View>

              <Text style={styles.busTime}>{bus.time}</Text>
            </View>
          ))}
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
  },

  scrollContent: {
    paddingBottom: 24,
  },

  imageWrapper: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 260, // 🔽 ลดจาก 355
  },

  topIconButton: {
    position: "absolute",
    top: 42,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  leftIcon: {
    left: 14,
  },

  rightIcon: {
    right: 14,
  },

  mainCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 14,
    marginTop: 16,
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  title: {
    fontSize: 22, // 🔽 จาก 28
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  infoText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#4B5563",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 14,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#475467",
  },

  mapButton: {
    marginTop: 14,
    marginHorizontal: 14,
    backgroundColor: "#24B15A",
    borderRadius: 18,
    height: 60, // 🔽 จาก 94
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  mapButtonText: {
    color: "#FFFFFF",
    fontSize: 16, // 🔽 จาก 22
    fontWeight: "700",
  },

  busSection: {
    marginTop: 16,
    marginHorizontal: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  busHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  busTitle: {
    marginLeft: 8,
    fontSize: 18, // 🔽 จาก 24
    fontWeight: "700",
    color: "#111827",
  },

  busCard: {
    backgroundColor: "#F7F8FA",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  busBadge: {
    width: 46, // 🔽 จาก 62
    height: 46,
    borderRadius: 23,
    backgroundColor: "#556074",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  busBadgeText: {
    color: "#FFFFFF",
    fontSize: 18, // 🔽 จาก 24
    fontWeight: "700",
  },

  busContent: {
    flex: 1,
  },

  busRouteName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#182033",
  },

  busRouteLabel: {
    fontSize: 12,
    color: "#667085",
    marginTop: 2,
  },

  busTime: {
    fontSize: 15,
    color: "#556074",
    fontWeight: "700",
  },
});