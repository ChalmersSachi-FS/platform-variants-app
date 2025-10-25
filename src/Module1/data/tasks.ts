import {v4 as uuidv4 } from 'uuid';

export type Task = {
    id: string; 
    title: string; 
    notes?: string; 
    completed: boolean; 
    due?: number;
    project?: string;
    createdAt: number
};

const now = () => Date.now();

export const initialTasks: Task[] = [
    {   id: uuidv4(), 
        title: 'Plan weekly goals', 
        notes: 'Pick 3 MITs',
        completed: false,
        due: now() + 86400000,
        project: 'Planning',
        createdAt: now() - 86400000 },
    {
        id: uuidv4(),
        title: 'Email client',
        notes: 'Send invoice',
        completed: false,
        due: now() + 2*86400000,
        project: 'Work',
        createdAt: now() - 2*86400000
    },
    {
        id: uuidv4(),
        title: 'Buy yarn',
        notes: 'Check colors for sample',
        completed: true,
        createdAt: now() - 3*86400000
    },
];

export const fetchTasks = async (): Promise<Task[]> => {
    await new Promise((r) => setTimeout(r, 200));
    return [...initialTasks].sort((a,b) => (a.completed === b.completed ? b.createdAt - a.createdAt : (a.completed ? 1: -1)));
};