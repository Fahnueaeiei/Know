import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },

    listContent: {
        paddingBottom: 22,
    },

    hero: {
        backgroundColor: "#C85D34",
        paddingTop: 50,
        paddingHorizontal: 22,
        paddingBottom: 28,
    },

    heroTitle: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "700",
    },

    categorySection: {
        backgroundColor: "#FFFFFF",
        paddingTop: 14,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
        marginBottom: 12,
    },

    categoryList: {
        paddingHorizontal: 22,
        paddingRight: 30,
    },

    categoryChip: {
        height: 44,
        paddingHorizontal: 20,
        borderRadius: 22,
        backgroundColor: "#EEF0F3",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },

    categoryChipActive: {
        backgroundColor: "#D46A3E",
    },

    categoryText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#3F4B63",
    },

    categoryTextActive: {
        color: "#FFFFFF",
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 22,
        marginHorizontal: 22,
        marginBottom: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
        position: "relative",
    },

    cardImage: {
        width: "100%",
        height: 220,
    },

    cardBody: {
        paddingHorizontal: 20,
        paddingTop: 18,
        paddingBottom: 20,
    },

    cardTitle: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 10,
        paddingRight: 48,
    },

    cardDescription: {
        fontSize: 15,
        lineHeight: 23,
        color: "#5B6476",
        marginBottom: 18,
    },

    cardFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    tag: {
        backgroundColor: "#FBE9E2",
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 999,
    },

    tagText: {
        fontSize: 13,
        color: "#D46A3E",
        fontWeight: "500",
        textTransform: "lowercase",
    },

    dateText: {
        fontSize: 13,
        color: "#6B7280",
        fontWeight: "600",
    },

    heartButton: {
        position: "absolute",
        right: 14,
        top: 196,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },

    emptyText: {
        textAlign: "center",
        marginTop: 24,
        color: "#667085",
        fontSize: 14,
    },
});