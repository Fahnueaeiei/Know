import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "help";

          if (route.name === "index") {
            iconName = "home";
          } else if (route.name === "place") {
            iconName = "location";
          } else if (route.name === "news") {
            iconName = "newspaper";
          } else if (route.name === "checklist") {
            iconName = "checkbox";
          } else if (route.name === "profile") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="place" options={{ title: "Place" }} />
      <Tabs.Screen name="news" options={{ title: "News" }} />
      <Tabs.Screen name="checklist" options={{ title: "Checklist" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}