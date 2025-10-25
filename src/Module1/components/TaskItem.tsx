import React from "react";
import {View, Text, TouchableOpacity, Stylesheet} from 'react-native';
import { Task } from "../data/tasks";
import {designTokens} from "../design-system/designTokens";

export const TaskItem: React.FC <{
    task: Task;
    onToggle: (id: string) =>void;
    onOpen?:(id: string)=>void}> = ({task, onToggle, onOpen}) => {
        const Wrapper: any = onOpen ? TouchableOpacity : View;
        return (
            <Wrapper
            onPress={() => onOpen ? onOpen(task.id): undefined}
            style={[styles.container, task.completed && styles.completed]}
            accessibilityRole="button"
            accessibilityState={{disabled: false, checked: task.completed}}
            >
                <TouchableOpacity onPress={() => onToggle(task.id)} style={styles.checkbox}>
                    <Text>{task.completed ? '✓' : ''}</Text>
                </TouchableOpacity>
                <View style={styles.content}>
                <Text style={styles.title}>{task.title}</Text>
                {task.notes ? <Text style={Stylesheet.notes}>{task.notes}</Text> : null}
                </View>
            </Wrapper>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: designTokens.spacing.md,
            borderBottomWidth: 1,
            borderBottomColor: designTokens.colors.neutral [200],
            backgroundColor: designTokens.colors.neutral [50]
        },
        completed: {opacity: 0.5},
        
        checkbox: {
            width: 36,
            height: 36,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: designTokens.colors.neutral[200], 
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: designTokens.spacong.md
        },
        content: {flex: 1},
        
        title: {
            fontSize: designTokens.typography.fontSizxe.base,
            color: designTokens.colors.neutral[900], 
            fontWeight: '600'
        },
        notes: {
            fontSize: 13,
            color: designTokens.colors.neutral[500],
            marginTop: 4
        },
    });