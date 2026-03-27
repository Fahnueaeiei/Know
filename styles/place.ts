import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },

    header: {
        backgroundColor: "#BF5A37",
        paddingTop: 30,
        paddingHorizontal: 22,
        paddingBottom: 24,
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: "#FFFFFF",
        marginBottom: 18,
    },

    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    searchBox: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        height: 50,
        paddingHorizontal: 16,
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
        fontSize: 15,
        color: "#111827",
    },

    filterButton: {
        width: 50,
        height: 50,
        borderRadius: 16,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },

    content: {
        flex: 1,
        paddingTop: 0,
    },

    categorySection: {
        backgroundColor: "#FFFFFF",
        paddingTop: 14,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
        marginBottom: 12,
    },

    sectionTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#475467",
        marginBottom: 12,
        paddingHorizontal: 22,
    },

    categoryScroll: {
        flexGrow: 0,
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

    listContent: {
        paddingHorizontal: 22,
        paddingBottom: 22,
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 12,
        marginBottom: 14,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        position: "relative",
    },

    cardImage: {
        width: 84,
        height: 84,
        borderRadius: 16,
        marginRight: 14,
    },

    cardContent: {
        flex: 1,
        paddingRight: 34,
        justifyContent: "center",
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#101828",
        marginBottom: 6,
    },

    cardBuilding: {
        fontSize: 14,
        fontWeight: "500",
        color: "#475467",
        marginBottom: 3,
    },

    cardFloor: {
        fontSize: 13,
        color: "#667085",
        marginBottom: 8,
    },

    tag: {
        alignSelf: "flex-start",
        backgroundColor: "#E8F5E9",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
    },

    tagText: {
        color: "#16A34A",
        fontSize: 12,
        textTransform: "lowercase",
    },

    heartButton: {
        position: "absolute",
        top: 12,
        right: 12,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },

    emptyText: {
        textAlign: "center",
        marginTop: 24,
        color: "#667085",
        fontSize: 14,
    },
});