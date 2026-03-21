import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>

      {/* 🔵 Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back! 👋</Text>
        <Text style={styles.subtitle}>
          Your university companion for campus life
        </Text>

        <TextInput
          placeholder="Search places, classrooms..."
          style={styles.search}
        />
      </View>

      {/* ⚡ Quick Access */}
      <Text style={styles.sectionTitle}>Quick Access</Text>

      <View style={styles.quickRow}>
        <View style={styles.quickItem}>
          <Text>📍</Text>
          <Text>Find Place</Text>
        </View>

        <View style={styles.quickItem}>
          <Text>🔍</Text>
          <Text>Search Room</Text>
        </View>

        <View style={styles.quickItem}>
          <Text>💰</Text>
          <Text>Scholarships</Text>
        </View>

        <View style={styles.quickItem}>
          <Text>📅</Text>
          <Text>Calendar</Text>
        </View>
      </View>

      {/* 🎓 Featured */}
      <Text style={styles.sectionTitle}>Featured</Text>

      <View style={styles.card}>
        <Text style={styles.badge}>Featured</Text>
        <Text style={styles.cardTitle}>
          Academic Excellence Scholarship
        </Text>
        <Text style={styles.cardDesc}>
          Merit-based scholarship for outstanding students
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.badge}>Featured</Text>
        <Text style={styles.cardTitle}>
          First-Year Student Grant
        </Text>
        <Text style={styles.cardDesc}>
          Financial support for new students
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#4f46e5',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#e0e7ff',
    marginBottom: 15,
  },

  search: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },

  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  quickItem: {
    backgroundColor: '#f1f5f9',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#e2e8f0',
    margin: 16,
    padding: 15,
    borderRadius: 15,
  },

  badge: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },

  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  cardDesc: {
    color: '#475569',
  },
});