import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Task, fetchTasks } from "../../data/tasks";
import { TaskItem } from "../../components/TaskItem";
import { designTokens } from "../../design-system/designTokens";

export default function TaskListMobile() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: designTokens.spacing.md }
});
