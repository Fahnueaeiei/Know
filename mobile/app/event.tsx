// @ts-nocheck
// Ported from screens/EventScreen.js (built from the Event screenshot) —
// navigation.navigate(...) calls replaced with expo-router's router.push/back.
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
import EventCard from '../components/EventCard';
import BottomNav from '../components/BottomNav';
import { EVENTS, EVENT_CATEGORIES } from '../data/events';
import { CURRENT_USER } from '../data/posts';

export default function EventScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Events');
  const [events, setEvents] = useState(EVENTS);

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const matchesCategory =
        activeCategory === 'All Events' || e.category === activeCategory;
      const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [events, activeCategory, search]);

  const toggleFavorite = (event) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === event.id ? { ...e, favorite: !e.favorite } : e))
    );
  };

  const toggleJoin = (event) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === event.id ? { ...e, joined: !e.joined } : e))
    );
  };

  const goToDetail = (event) => {
    router.push(`/event/${event.id}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeadBar avatar={CURRENT_USER.avatar} onAvatarPress={() => router.push('/profile')} />
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search events, venues..."
        />

        <View style={styles.categoriesRow}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Ionicons name="heart" size={20} color="#E63946" />
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={EVENT_CATEGORIES}
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

        <View style={styles.upcomingRow}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <EventCard
              event={item}
              onPress={goToDetail}
              onToggleFavorite={toggleFavorite}
              onToggleJoin={toggleJoin}
            />
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No events found.</Text>}
          ListFooterComponent={
            <View style={styles.calendarCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.calendarTitle}>Event Calendar</Text>
                <Text style={styles.calendarSubtitle}>
                  See what's happening this month at a glance.
                </Text>
                <TouchableOpacity
                  style={styles.calendarButton}
                  onPress={() => router.push('/event/calendar')}
                >
                  <Text style={styles.calendarButtonText}>Open Calendar</Text>
                  <Ionicons name="arrow-forward" size={14} color="#fff" />
                </TouchableOpacity>
              </View>
              <Ionicons name="calendar" size={64} color="#EDEAE5" style={styles.calendarIcon} />
            </View>
          }
        />
      </View>

      <BottomNav activeTab="Event" />
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
  upcomingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  viewAll: { fontSize: 13, fontWeight: '600', color: '#E86A33' },
  list: { paddingBottom: 20 },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 40 },
  calendarCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginTop: 4,
    marginBottom: 12,
    overflow: 'hidden',
  },
  calendarTitle: { fontSize: 16, fontWeight: '700', color: '#1a1a1a', marginBottom: 4 },
  calendarSubtitle: { fontSize: 12, color: '#888', marginBottom: 12, maxWidth: 180 },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 6,
  },
  calendarButtonText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  calendarIcon: { marginLeft: 8 },
});
