// @ts-nocheck
// Ported from screens/PlaceScreen.js — navigation.navigate('PlaceDetail', { placeId })
// becomes router.push(`/place/${id}`) to match the app/place/[id].tsx route.
import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import HeadBar from '../components/HeadBar';
import SearchBar from '../components/SearchBar';
import PlaceCard from '../components/PlaceCard';
import BottomNav from '../components/BottomNav';
import { PLACES, CATEGORIES } from '../data/places';
import { CURRENT_USER } from '../data/posts';

export default function PlaceScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Place');
  const [places, setPlaces] = useState(PLACES);

  const filteredPlaces = useMemo(() => {
    return places.filter((p) => {
      const matchesCategory =
        activeCategory === 'All Place' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [places, activeCategory, search]);

  const toggleFavorite = (place) => {
    setPlaces((prev) =>
      prev.map((p) => (p.id === place.id ? { ...p, favorite: !p.favorite } : p))
    );
  };

  const goToDetail = (place) => {
    router.push(`/place/${place.id}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeadBar avatar={CURRENT_USER.avatar} onAvatarPress={() => router.push('/profile')} />
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search buildings, cafes, or loops..."
        />

        <View style={styles.categoriesRow}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Ionicons name="heart" size={20} color="#E63946" />
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.chipsList}
          renderItem={({ item }) => {
            const active = item === activeCategory;
            return (
              <TouchableOpacity
                style={[styles.chip, active && styles.chipActive]}
                onPress={() => setActiveCategory(item)}
              >
                <Text style={[styles.chipText, active && styles.chipTextActive]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <View style={styles.nearestRow}>
          <Text style={styles.sectionTitle}>Nearest to You</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredPlaces}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PlaceCard place={item} onPress={goToDetail} onToggleFavorite={toggleFavorite} />
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No places found.</Text>}
        />
      </View>

      <BottomNav activeTab="Place" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F7F5F2' },
  container: { flex: 1, paddingHorizontal: 20 },
  categoriesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: '#1a1a1a' },
  chipsList: { gap: 10, paddingBottom: 20 },
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: '#EDEAE5',
    marginRight: 10,
  },
  chipActive: { backgroundColor: '#E86A33' },
  chipText: { fontSize: 13, fontWeight: '600', color: '#555' },
  chipTextActive: { color: '#fff' },
  nearestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  viewAll: { fontSize: 13, fontWeight: '600', color: '#E86A33' },
  list: { paddingBottom: 20 },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 40 },
});
