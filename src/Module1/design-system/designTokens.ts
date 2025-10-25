import {Platform} from 'react-native';

export const designTokens = {
    colors:{
        primary: {500: '#3b82f6'},
        neutral: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            500: '#6b7280',
            900: '#111827',
        },
        semantic: {
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444',
        },
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    
    typography: {
        fontFamily: Platform.select({
            ios: 'System',
            android:  'Roboto',
            web: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto',
            default: 'System',      
        }),
        
        fontSize: {
            xs: 12,
            base: 16, 
            lg: 18,
            xl: 20
        },
        
        lineHeight: {
            normal: 1.5, 
            relaxed: 1.75
        },
    },
    borderRadius: {
        sm: 4,
        md: 8,
        lg: 12
    },

    platformAdaptations: {
        touchTargets: Platform.select({
            ios: 44,
            android: 48,
            web: 44,
            default: 44
        }),
    },
};
export type designTokens = typeof designTokens;