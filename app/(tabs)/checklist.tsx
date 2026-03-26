import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { defaultTasks } from "../../data/tasks";
import { Task } from "../../types";

export default function ChecklistScreen() {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const router = useRouter();

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checklist</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/add-task")}
      >
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={[styles.taskTitle, item.done && styles.done]}>
              {item.title}
            </Text>
            <Text>{item.description}</Text>
            <Text>Due Date: {item.dueDate || "-"}</Text>

            <TouchableOpacity
              style={styles.smallButton}
              onPress={() => toggleTask(item.id)}
            >
              <Text style={styles.smallButtonText}>
                {item.done ? "Undo" : "Mark Done"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  addButton: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  addButtonText: { color: "#fff", textAlign: "center", fontWeight: "600" },
  card: {
    backgroundColor: "#f4f4f4",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  taskTitle: { fontSize: 16, fontWeight: "600" },
  done: { textDecorationLine: "line-through", color: "gray" },
  smallButton: {
    marginTop: 10,
    backgroundColor: "#16a34a",
    padding: 10,
    borderRadius: 8,
  },
  smallButtonText: { color: "#fff", textAlign: "center" },
});