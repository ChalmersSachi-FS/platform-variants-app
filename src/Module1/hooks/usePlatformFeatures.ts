import {Platform} from 'react-native'
export function usePlatformFeatures() {
    const isWeb = Platform.OS === 'web';
    const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
    return {
        isWeb,
        isMobile,
        supportsHaptics: isMobile,
        supportsHover: isWeb,
    };
}