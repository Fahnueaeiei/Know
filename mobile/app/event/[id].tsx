// @ts-nocheck
// Placeholder — no screenshot/design for Event Detail yet.
// Wire this up to data/events.js the same way app/place/[id].tsx uses data/places.ts
// once the design is ready.
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { EVENTS } from '../../data/events';

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const event = EVENTS.find((e) => e.id === id);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={20} color="#1a1a1a" />
      </TouchableOpacity>
      <Text style={styles.title}>{event ? event.title : 'Event'}</Text>
      <Text style={styles.note}>
        Event detail layout not designed yet — send a screenshot and this screen
        will be built out the same way Place Detail was.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F5F2', padding: 20 },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: { fontSize: 20, fontWeight: '700', color: '#1a1a1a', marginBottom: 8 },
  note: { fontSize: 13, color: '#888', lineHeight: 20 },
});
