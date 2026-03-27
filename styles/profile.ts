import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },

    content: {
        paddingBottom: 22,
    },

    hero: {
        backgroundColor: "#BF5A37",
        paddingTop: 68,
        paddingHorizontal: 20,
        paddingBottom: 26,
    },

    heroRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        backgroundColor: "rgba(255,255,255,0.18)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 18,
    },

    heroText: {
        flex: 1,
        justifyContent: "center",
    },

    name: {
        color: "#FFFFFF",
        fontSize: 22,
        lineHeight: 28,
        fontWeight: "700",
        marginBottom: 4,
    },

    studentId: {
        color: "#FDE7DD",
        fontSize: 14,
        fontWeight: "500",
    },

    card: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: 14,
        marginTop: 12,
        borderRadius: 18,
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 16,
        shadowColor: "#000000",
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },

    cardHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 18,
    },

    cardTitle: {
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "700",
        color: "#172033",
        flex: 1,
    },

    editIconButton: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: "#F8ECE8",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 12,
    },

    infoBlock: {
        marginBottom: 18,
    },

    infoLabel: {
        fontSize: 14,
        lineHeight: 20,
        color: "#667085",
        marginBottom: 4,
        fontWeight: "500",
    },

    infoValue: {
        fontSize: 17,
        lineHeight: 24,
        color: "#172033",
        fontWeight: "500",
    },

    favoriteHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    favoriteLeft: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        paddingRight: 10,
    },

    favoriteTitle: {
        marginLeft: 10,
        fontSize: 19,
        lineHeight: 24,
        fontWeight: "700",
        color: "#172033",
    },

    favoriteCount: {
        fontSize: 13,
        color: "#7B8496",
        fontWeight: "600",
    },

    favoriteEmptyWrap: {
        minHeight: 72,
        alignItems: "center",
        justifyContent: "center",
    },

    favoriteEmptyText: {
        textAlign: "center",
        fontSize: 14,
        lineHeight: 20,
        color: "#98A2B3",
        fontWeight: "500",
    },

    logoutCard: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: 14,
        marginTop: 12,
        borderRadius: 18,
        minHeight: 64,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000000",
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },

    logoutText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "700",
        color: "#EB5757",
    },

    inputGroup: {
        marginBottom: 18,
    },

    inputLabel: {
        fontSize: 14,
        lineHeight: 20,
        color: "#667085",
        marginBottom: 8,
        fontWeight: "600",
    },

    inputBox: {
        backgroundColor: "#F5F6F8",
        borderRadius: 14,
        minHeight: 58,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#172033",
    },

    saveButton: {
        marginTop: 6,
        height: 58,
        borderRadius: 16,
        backgroundColor: "#CC6237",
        alignItems: "center",
        justifyContent: "center",
    },

    saveButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },
});