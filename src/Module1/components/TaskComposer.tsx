import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard } from 'react-native';
import { designTokens } from '../design-system/designTokens';

export const TaskComposer: React.FC<{onAdd: (title: string)=>void}> = ({ onAdd }) => {
  const [value, setValue] = useState('');
  const add = () => {
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue('');
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a task..."
        value={value}
        onChangeText={setValue}
        style={styles.input}
        returnKeyType="done"
        onSubmitEditing={add}
        accessibilityLabel="Add task"
      />
      <TouchableOpacity onPress={add} style={styles.button} accessibilityRole="button">
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: designTokens.spacing.sm, backgroundColor: designTokens.colors.neutral[100], alignItems: 'center' },
  input: { flex: 1, padding: designTokens.spacing.sm, borderRadius: designTokens.borderRadius.sm, backgroundColor: '#fff', marginRight: designTokens.spacing.sm },
  button: { paddingVertical: 10, paddingHorizontal: 12, borderRadius: designTokens.borderRadius.sm, backgroundColor: designTokens.colors.primary[500] },
  buttonText: { color: '#fff', fontWeight: '700' },
});
