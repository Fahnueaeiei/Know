import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { styles } from "../../styles/profile";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "John Doe",
    studentId: "2026001234",
    email: "john.doe@university.edu",
    phone: "+66 12 345 6789",
  });

  const favoritesCount = 0;

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.heroRow}>
          <View style={styles.avatar}>
            <Ionicons name="person-outline" size={64} color="#FFFFFF" />
          </View>

          <View style={styles.heroText}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.studentId}>{user.studentId}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Profile Information</Text>

          <TouchableOpacity
            style={styles.editIconButton}
            activeOpacity={0.85}
            onPress={() => setIsEditing(true)}
          >
            <Feather name="edit-2" size={22} color="#D46A3E" />
          </TouchableOpacity>
        </View>

        {isEditing ? (
          <>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                value={user.name}
                onChangeText={(text) =>
                  setUser((prev) => ({ ...prev, name: text }))
                }
                style={styles.inputBox}
                placeholder="Enter name"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                value={user.email}
                onChangeText={(text) =>
                  setUser((prev) => ({ ...prev, email: text }))
                }
                style={styles.inputBox}
                placeholder="Enter email"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Phone</Text>
              <TextInput
                value={user.phone}
                onChangeText={(text) =>
                  setUser((prev) => ({ ...prev, phone: text }))
                }
                style={styles.inputBox}
                placeholder="Enter phone number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
              />
            </View>

            <TouchableOpacity
              style={styles.saveButton}
              activeOpacity={0.9}
              onPress={handleSave}
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{user.email}</Text>
            </View>

            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>{user.phone}</Text>
            </View>
          </>
        )}
      </View>

      <View style={styles.card}>
        <View style={styles.favoriteHeader}>
          <View style={styles.favoriteLeft}>
            <Ionicons name="heart" size={28} color="#EB5757" />
            <Text style={styles.favoriteTitle}>My Favorites</Text>
          </View>

          <Text style={styles.favoriteCount}>{favoritesCount} items</Text>
        </View>

        <View style={styles.favoriteEmptyWrap}>
          <Text style={styles.favoriteEmptyText}>
            No favorites yet. Start adding items!
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutCard}
        activeOpacity={0.9}
        onPress={() => {}}
      >
        <Feather name="log-out" size={28} color="#EB5757" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}