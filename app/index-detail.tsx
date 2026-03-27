import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function IndexDetailScreen() {
    const router = useRouter();
    const { title, subtitle, amount, deadline, image, description } =
        useLocalSearchParams();

    return (
        <View style={styles.screen}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: String(image) }} style={styles.image} />

                    <TouchableOpacity
                        style={[styles.topIconButton, styles.leftIcon]}
                        onPress={() => router.back()}
                        activeOpacity={0.85}
                    >
                        <Ionicons name="chevron-back" size={24} color="#1F2937" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.topIconButton, styles.rightIcon]}
                        activeOpacity={0.85}
                    >
                        <Ionicons name="heart-outline" size={22} color="#1F2937" />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainCard}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>

                    <View style={styles.infoBoxGold}>
                        <View style={styles.infoIconWrap}>
                            <Feather name="dollar-sign" size={24} color="#E0B63F" />
                        </View>

                        <View style={styles.infoContent}>
                            <Text style={styles.infoLabel}>Award Amount</Text>
                            <Text style={styles.amountText}>{amount}</Text>
                        </View>
                    </View>

                    <View style={styles.infoBoxPink}>
                        <View style={styles.infoIconWrap}>
                            <Feather name="calendar" size={22} color="#D2643E" />
                        </View>

                        <View style={styles.infoContent}>
                            <Text style={styles.infoLabel}>Application Deadline</Text>
                            <Text style={styles.deadlineText}>{deadline}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.aboutCard}>
                    <View style={styles.aboutHeader}>
                        <Ionicons
                            name="information-circle-outline"
                            size={24}
                            color="#4B5563"
                        />
                        <Text style={styles.aboutTitle}>About This Scholarship</Text>
                    </View>

                    <Text style={styles.aboutText}>
                        {description
                            ? String(description)
                            : "Awarded to students maintaining a GPA of 3.5 or above."}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#EEF0F3",
    },

    container: {
        flex: 1,
        backgroundColor: "#EEF0F3",
    },

    scrollContent: {
        paddingBottom: 20,
    },

    imageWrapper: {
        position: "relative",
    },

    image: {
        width: "100%",
        height: 285,
    },

    topIconButton: {
        position: "absolute",
        top: 18,
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },

    leftIcon: {
        left: 16,
    },

    rightIcon: {
        right: 16,
    },

    mainCard: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: 12,
        marginTop: 16,
        borderRadius: 22,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },

    title: {
        fontSize: 24,
        lineHeight: 34,
        fontWeight: "700",
        color: "#0F172A",
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 15,
        lineHeight: 24,
        color: "#556074",
        marginBottom: 18,
        fontWeight: "500",
    },

    infoBoxGold: {
        backgroundColor: "#F5ECD5",
        borderRadius: 18,
        paddingHorizontal: 16,
        paddingVertical: 30,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14,
    },

    infoBoxPink: {
        backgroundColor: "#F7EAE6",
        borderRadius: 18,
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
    },

    infoIconWrap: {
        width: 34,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    infoContent: {
        flex: 1,
    },

    infoLabel: {
        fontSize: 13,
        color: "#556074",
        marginBottom: 2,
        fontWeight: "500",
    },

    amountText: {
        fontSize: 17,
        fontWeight: "700",
        color: "#E0B63F",
    },

    deadlineText: {
        fontSize: 17,
        fontWeight: "700",
        color: "#D2643E",
    },

    aboutCard: {
        backgroundColor: "#FFFFFF",
        marginTop: 14,
        marginHorizontal: 12,
        borderRadius: 22,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },

    aboutHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14,
    },

    aboutTitle: {
        marginLeft: 8,
        fontSize: 20,
        fontWeight: "700",
        color: "#0F172A",
        flexShrink: 1,
    },

    aboutText: {
        fontSize: 16,
        lineHeight: 28,
        color: "#475467",
        fontWeight: "400",
    },
});