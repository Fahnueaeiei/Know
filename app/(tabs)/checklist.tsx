import { useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { styles } from "../../styles/checklist";

type TaskItem = {
  id: string;
  title: string;
  details?: string;
  date?: string;
  completed: boolean;
};

const initialTasks: TaskItem[] = [
  {
    id: "1",
    title: "Complete university registration",
    date: "2026-03-25",
    completed: true,
  },
  {
    id: "2",
    title: "Attend freshman orientation",
    date: "2026-03-26",
    completed: false,
  },
  {
    id: "3",
    title: "Apply for scholarships",
    date: "2026-04-15",
    completed: false,
  },
  {
    id: "4",
    title: "Join student clubs",
    completed: false,
  },
];

export default function ChecklistScreen() {
  const [tasks, setTasks] = useState<TaskItem[]>(initialTasks);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newDetails, setNewDetails] = useState("");
  const [newDate, setNewDate] = useState("");

  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleAddTask = () => {
    if (!newTitle.trim()) return;

    const newTask: TaskItem = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      details: newDetails.trim() || undefined,
      date: newDate.trim() || undefined,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
    setNewTitle("");
    setNewDetails("");
    setNewDate("");
    setShowAddForm(false);
  };

  const handleCancelAdd = () => {
    setNewTitle("");
    setNewDetails("");
    setNewDate("");
    setShowAddForm(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <View style={styles.hero}>
              <Text style={styles.heroTitle}>My Checklist</Text>
              <Text style={styles.heroSubtitle}>
                {completedCount} of {tasks.length} completed
              </Text>
            </View>

            <TouchableOpacity
              style={styles.addButton}
              activeOpacity={0.9}
              onPress={() => setShowAddForm((prev) => !prev)}
            >
              <Feather name="plus" size={24} color="#CC6237" />
              <Text style={styles.addButtonText}>Add New Task</Text>
            </TouchableOpacity>

            {showAddForm && (
              <View style={styles.formCard}>
                <TextInput
                  placeholder="Task title..."
                  placeholderTextColor="#9CA3AF"
                  value={newTitle}
                  onChangeText={setNewTitle}
                  style={styles.formInput}
                />

                <TextInput
                  placeholder="Additional details..."
                  placeholderTextColor="#9CA3AF"
                  value={newDetails}
                  onChangeText={setNewDetails}
                  style={[styles.formInput, styles.formTextarea]}
                  multiline
                />

                <TextInput
                  placeholder="26/03/2026"
                  placeholderTextColor="#9CA3AF"
                  value={newDate}
                  onChangeText={setNewDate}
                  style={styles.formInput}
                />

                <View style={styles.formButtonRow}>
                  <TouchableOpacity
                    style={[styles.formButton, styles.submitButton]}
                    activeOpacity={0.85}
                    onPress={handleAddTask}
                  >
                    <Text style={styles.submitButtonText}>Add Task</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.formButton, styles.cancelButton]}
                    activeOpacity={0.85}
                    onPress={handleCancelAdd}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              style={[
                styles.checkCircle,
                item.completed && styles.checkCircleCompleted,
              ]}
              activeOpacity={0.8}
              onPress={() => toggleTask(item.id)}
            >
              {item.completed && (
                <Ionicons name="checkmark" size={20} color="#FFFFFF" />
              )}
            </TouchableOpacity>

            <View style={styles.taskContent}>
              <Text
                style={[
                  styles.taskTitle,
                  item.completed && styles.taskTitleCompleted,
                ]}
              >
                {item.title}
              </Text>

              {!!item.details && (
                <Text style={styles.taskDetails}>{item.details}</Text>
              )}

              {!!item.date && (
                <View style={styles.dateRow}>
                  <Feather name="calendar" size={16} color="#7C8597" />
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
              )}
            </View>

            <View style={styles.actionColumn}>
              {!!item.date && (
                <TouchableOpacity
                  style={[styles.iconButton, styles.editButton]}
                  activeOpacity={0.85}
                >
                  <Feather name="calendar" size={20} color="#24A95A" />
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={[styles.iconButton, styles.deleteButton]}
                activeOpacity={0.85}
                onPress={() => deleteTask(item.id)}
              >
                <Feather name="trash-2" size={20} color="#F15B50" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}