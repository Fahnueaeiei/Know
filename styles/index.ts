import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  content: {
    paddingBottom: 24,
  },

  hero: {
    backgroundColor: "#bf5a37",
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 26,
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 18,
  },

  searchBox: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#111827",
  },

  sectionHeader: {
    marginTop: 22,
    marginBottom: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  seeAllText: {
    color: "#d97745",
    fontWeight: "600",
    marginRight: 2,
  },

  card: {
    marginHorizontal: 16,
    marginBottom: 14,
    backgroundColor: "#f4df8d",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  favoriteButton: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    paddingRight: 40,
  },

  cardSubtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#475569",
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    marginBottom: 12,
    gap: 12,
    flexWrap: "wrap",
  },

  amount: {
    fontSize: 16,
    fontWeight: "800",
    color: "#e6a92d",
  },

  deadline: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6b7280",
  },

  cardImage: {
    width: "100%",
    height: 140,
    borderRadius: 14,
    backgroundColor: "#ead8a0",
  },

  placeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  placeCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginBottom: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  placeImage: {
    width: "100%",
    height: 100,
  },

  placeFavorite: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#ffffff",
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  placeContent: {
    padding: 10,
  },

  placeTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },

  placeSubtitle: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },
  newsCard: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 14,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },

  newsContent: {
    flex: 1,
    marginLeft: 12,
  },

  newsTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },

  newsDate: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },

  tag: {
    marginTop: 6,
    alignSelf: "flex-start",
    backgroundColor: "#fde2e2",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },

  tagText: {
    fontSize: 11,
    color: "#dc2626",
    fontWeight: "600",
  },

  newsFavorite: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});