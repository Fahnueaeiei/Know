// @ts-nocheck
// Ported from components/BottomTabBar.js — now navigates via expo-router
// instead of React Navigation's navigation.navigate(tab).
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const TABS = [
  { key: 'Home', label: 'Home', icon: 'home-outline', activeIcon: 'home', route: '/' },
  { key: 'Place', label: 'Place', icon: 'location-outline', activeIcon: 'location', route: '/place' },
  { key: 'Event', label: 'Event', icon: 'calendar-outline', activeIcon: 'calendar', route: '/event' },
  { key: 'Checklist', label: 'Checklist', icon: 'checkbox-outline', activeIcon: 'checkbox', route: '/checklist' },
];

/**
 * BottomNav
 * props:
 *  - activeTab: 'Home' | 'Place' | 'Event' | 'Checklist'
 */
export default function BottomNav({ activeTab = 'Place' }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const active = tab.key === activeTab;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => router.push(tab.route)}
          >
            {active ? (
              <View style={styles.activeIconWrap}>
                <Ionicons name={tab.activeIcon} size={20} color="#fff" />
              </View>
            ) : (
              <Ionicons name={tab.icon} size={22} color="#8a8a8a" />
            )}
            <Text style={[styles.label, active && styles.activeLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  activeIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E86A33',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  label: {
    fontSize: 11,
    color: '#8a8a8a',
  },
  activeLabel: {
    color: '#E86A33',
    fontWeight: '600',
  },
});
