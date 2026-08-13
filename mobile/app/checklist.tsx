// @ts-nocheck
// Placeholder — Checklist screen has no design/code yet in the chats provided.
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import HeadBar from '../components/HeadBar';
import BottomNav from '../components/BottomNav';
import { CURRENT_USER } from '../data/posts';

export default function ChecklistScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeadBar avatar={CURRENT_USER.avatar} onAvatarPress={() => router.push('/profile')} />
        <Text style={styles.note}>
          Checklist screen not built yet — send a design/screenshot to build it out
          like Place and Event.
        </Text>
      </View>
      <BottomNav activeTab="Checklist" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F7F5F2' },
  container: { flex: 1, paddingHorizontal: 20 },
  note: { fontSize: 13, color: '#888', lineHeight: 20, marginTop: 12 },
});
