/**
 * Centralized Theme Configuration
 * Suranna Brand - Pinterest-focused creation platform
 * Update colors and fonts from this single file
 */

export const theme = {
  colors: {
    softPink: '#e0a5a4',      // Light backgrounds, accents
    deepRed: '#a9444a',       // Headings, strokes, icons
    coralPink: '#e0857f',      // Buttons, small accents
    deepOlive: '#4e5033',     // Primary heading text
    warmOlive: '#7d7956',     // Backgrounds in grids, content areas
    beige: '#e5d4ca',         // Card backgrounds, neutral space
  },
  gradients: {
    primary: 'radial-gradient(at 64% 68%, #e0a5a4, transparent 50%), radial-gradient(at 3% 8%, #a9444a, transparent 50%), radial-gradient(at 100% 1%, #e0857f, transparent 50%), radial-gradient(at 0% 99%, #4e5033, transparent 50%), radial-gradient(at 100% 100%, #7d7956, transparent 50%)',
    baseColor: '#e5d4ca', // Base background color for gradient
  },
  fonts: {
    heading: 'Suranna',      // For headings and subheadings
    body: 'Josefin Sans',    // For body text
  },
  fontWeights: {
    thin: '300',
    regular: '400',
    semiBold: '600',
  },
} as const;

export type Theme = typeof theme;


