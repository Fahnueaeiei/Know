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
        backgroundColor: "#BF5A37",
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 24,
    },

    heroTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#FFFFFF",
        marginBottom: 4,
    },

    heroSubtitle: {
        fontSize: 13,
        fontWeight: "500",
        color: "#FCE9DE",
    },

    addButton: {
        marginHorizontal: 20,
        marginTop: 16,
        marginBottom: 14,
        backgroundColor: "#FFFFFF",
        height: 62,
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },

    addButtonText: {
        fontSize: 17,
        fontWeight: "600",
        color: "#CC6237",
    },

    formCard: {
        marginHorizontal: 20,
        marginBottom: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },

    formInput: {
        backgroundColor: "#F5F6F8",
        borderRadius: 14,
        minHeight: 50,
        paddingHorizontal: 14,
        fontSize: 15,
        color: "#172033",
        marginBottom: 12,
    },

    formTextarea: {
        minHeight: 82,
        paddingTop: 14,
        textAlignVertical: "top",
    },

    formButtonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        marginTop: 2,
    },

    formButton: {
        flex: 1,
        height: 48,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },

    submitButton: {
        backgroundColor: "#CC6237",
    },

    submitButtonText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700",
    },

    cancelButton: {
        backgroundColor: "#E5E7EB",
    },

    cancelButtonText: {
        color: "#344054",
        fontSize: 15,
        fontWeight: "700",
    },

    card: {
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        minHeight: 96,
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },

    checkCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#C7CCD5",
        alignItems: "center",
        justifyContent: "center",
    },

    checkCircleCompleted: {
        backgroundColor: "#29B35B",
        borderColor: "#29B35B",
    },

    taskContent: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 8,
    },

    taskTitle: {
        fontSize: 16,
        lineHeight: 23,
        fontWeight: "500",
        color: "#172033",
        marginBottom: 4,
    },

    taskTitleCompleted: {
        textDecorationLine: "line-through",
    },

    taskDetails: {
        fontSize: 13,
        lineHeight: 18,
        color: "#667085",
        marginBottom: 6,
    },

    dateRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    dateText: {
        fontSize: 12,
        color: "#6E778B",
        fontWeight: "500",
    },

    actionColumn: {
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
    },

    iconButton: {
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    editButton: {
        backgroundColor: "#E8F5EC",
    },

    deleteButton: {
        backgroundColor: "#FCEAEA",
    },
});