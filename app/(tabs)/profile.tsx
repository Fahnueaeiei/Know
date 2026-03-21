import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>

      {/* 👤 Header */}
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.name}>Student Name</Text>
          <Text style={styles.sub}>Freshman • Class of 2029</Text>
          <Text style={styles.id}>ID: 123456789</Text>
        </View>
      </View>

      {/* 📍 Saved Places */}
      <Text style={styles.sectionTitle}>Saved Places</Text>
      <View style={styles.card}>
        <Text>Science Complex Building</Text>
        <Text style={styles.sub}>Academic</Text>
      </View>

      <View style={styles.card}>
        <Text>Main Library</Text>
        <Text style={styles.sub}>Library</Text>
      </View>

      {/* 🔖 Bookmarked */}
      <Text style={styles.sectionTitle}>Bookmarked</Text>
      <View style={styles.card}>
        <Text>Academic Excellence Scholarship</Text>
        <Text style={styles.sub}>Scholarship</Text>
      </View>

      <View style={styles.card}>
        <Text>Spring Festival 2026</Text>
        <Text style={styles.sub}>Event</Text>
      </View>

      {/* ⚙️ Settings */}
      <Text style={styles.sectionTitle}>Settings & More</Text>
      <View style={styles.card}>
        <Text>Notifications</Text>
      </View>

      <View style={styles.card}>
        <Text>App Settings</Text>
      </View>

      <View style={styles.card}>
        <Text>Help & Support</Text>
      </View>

      <View style={styles.card}>
        <Text style={{ color: 'red' }}>Sign Out</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  header: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  avatar: {
    width: 60,
    height: 60,
    backgroundColor: '#8b5cf6',
    borderRadius: 30,
    marginRight: 15,
  },

  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  sub: {
    color: '#cbd5e1',
  },

  id: {
    color: '#94a3b8',
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#f1f5f9',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
});