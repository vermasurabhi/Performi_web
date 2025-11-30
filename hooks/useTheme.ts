import { theme } from '@/lib/theme';

/**
 * Custom hook to access theme values
 * This ensures type safety when using theme colors and fonts
 */
export function useTheme() {
  return theme;
}

