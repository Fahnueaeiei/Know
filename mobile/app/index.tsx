// @ts-nocheck
// Ported from screens/HomeScreen.js — navigation.navigate(tab) replaced by
// BottomNav's own router.push, header/search extracted into HeadBar/SearchBar.
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import HeadBar from '../components/HeadBar';
import SearchBar from '../components/SearchBar';
import PostCard from '../components/PostCard';
import CreatePostModal from '../components/CreatePostModal';
import BottomNav from '../components/BottomNav';
import { POSTS, CURRENT_USER } from '../data/posts';

let nextPostId = POSTS.length + 1;

export default function HomeScreen() {
  const router = useRouter();
  const [posts, setPosts] = useState(POSTS);
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');

  const toggleLike = (post) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === post.id
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
  };

  const handleSubmitPost = (text) => {
    const newPost = {
      id: `post-new-${nextPostId++}`,
      user: { name: CURRENT_USER.name, faculty: 'You', avatar: CURRENT_USER.avatar },
      timeAgo: 'Just now',
      text,
      image: null,
      likes: 0,
      comments: 0,
      liked: false,
    };
    // New post goes to the top of the feed.
    setPosts((prev) => [newPost, ...prev]);
    // Close the popup and land back on Home.
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeadBar avatar={CURRENT_USER.avatar} onAvatarPress={() => router.push('/profile')} />
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search rooms, food, quests..."
        />

        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          ListHeaderComponent={
            <TouchableOpacity
              style={styles.composeBar}
              activeOpacity={0.8}
              onPress={() => setModalVisible(true)}
            >
              <Image source={CURRENT_USER.avatar} style={styles.composeAvatar} />
              <Text style={styles.composePlaceholder}>
                Share what's happening at KKU...
              </Text>
              <View style={styles.composeIcons}>
                <Feather name="image" size={17} color="#4CAF50" />
                <Feather name="smile" size={17} color="#E9C46A" />
              </View>
              <View style={styles.postPill}>
                <Text style={styles.postPillText}>Post</Text>
              </View>
            </TouchableOpacity>
          }
          renderItem={({ item }) => (
            <PostCard post={item} onToggleLike={toggleLike} />
          )}
        />
      </View>

      <CreatePostModal
        visible={modalVisible}
        user={CURRENT_USER}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSubmitPost}
      />

      <BottomNav activeTab="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F7F5F2' },
  container: { flex: 1, paddingHorizontal: 20 },
  list: { paddingBottom: 20 },
  composeBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 18,
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  composeAvatar: { width: 32, height: 32, borderRadius: 16 },
  composePlaceholder: { flex: 1, fontSize: 12.5, color: '#999' },
  composeIcons: { flexDirection: 'row', gap: 10, marginRight: 4 },
  postPill: {
    backgroundColor: '#E86A33',
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  postPillText: { color: '#fff', fontSize: 12, fontWeight: '700' },
});
