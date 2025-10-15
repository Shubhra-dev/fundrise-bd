/** @type {import('tailwindcss').Config} */
const chamferPlugin = require('./tailwind.chamfer.plugin.js');
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'], // default body font
        sora: ['Sora', 'sans-serif'], // default body font
        display: ['Neue Machina', 'sans-serif'], // headings, branding
      },
      colors: {
        // Light Mode
        title: '#111827', // Grey/900
        'sub-title': '#374151', // Grey/700
        heading: '#1F2937', // Grey/800
        'sub-heading': '#374151', // Grey/700
        paragraph: '#4B5563', // Grey/600
        caption: '#6B7280', // Grey/500
        disable: '#9CA3AF', // Grey/400
        white: '#FFFFFF', // Base/White

        'btext-1-base': '#7D5E80', // Dusky Plum/500
        'btext-1-light': '#CFBCD2', // Dusky Plum/200
        'btext-1-dark': '#593C61', // Dusky Plum/700

        'btext-2-base': '#4B8198', // Cool Irish/500
        'btext-2-light': '#BCDDE6', // Cool Irish/200
        'btext-2-dark': '#5673DC', // Cool Irish/700

        'btext-3-base': '#9A82A6', // Soft Orchid/500
        'btext-3-light': '#D7C8DE', // Soft Orchid/200
        'btext-3-dark': '#70547E', // Soft Orchid/700

        'btext-4-base': '#E4979E', // Blush Mist/500
        'btext-4-light': '#F8D9DB', // Blush Mist/200
        'btext-4-dark': '#BB5160', // Blush Mist/700

        // Dark Mode
        'title-dark': '#FFFFFF', // Base/White
        'sub-title-dark': '#D1D5DB', // Grey/300
        'heading-dark': '#F3F4F6', // Grey/100
        'sub-heading-dark': '#D1D5DB', // Grey/300
        'paragraph-dark': '#9CA3AF', // Grey/400
        'caption-dark': '#9CA3AF', // Grey/400
        'disable-dark': '#6B7280', // Grey/500
        'white-dark': '#FFFFFF', // Base/White

        'btext-1-base-dark': '#7D5E80', // Dusky Plum/500
        'btext-1-light-dark': '#593C61', // Dusky Plum/700
        'btext-1-dark-dark': '#CFBCD2', // Dusky Plum/200

        'btext-2-base-dark': '#4B8198', // Cool Irish/500
        'btext-2-light-dark': '#2D5461', // Cool Irish/700
        'btext-2-dark-dark': '#BCDEE6', // Cool Irish/200

        'btext-3-base-dark': '#9A82A6', // Soft Orchid/500
        'btext-3-light-dark': '#70547E', // Soft Orchid/700
        'btext-3-dark-dark': '#D7C8DE', // Soft Orchid/200

        'btext-4-base-dark': '#E4979E', // Blush Mist/500
        'btext-4-light-dark': '#BB5160', // Blush Mist/700
        'btext-4-dark-dark': '#F8D9DB', // Blush Mist/200
        // ---- System Colors (Light Mode) ----
        success: '#22C55E', // Green/500
        error: '#EF4444', // Red/500
        warning: '#EAB308', // Yellow/500
        info: '#3B82F6', // Blue/400

        // ---- System Colors (Dark Mode) ----
        'success-dark': '#4ADE80', // Green/400
        'error-dark': '#F87171', // Red/400
        'warning-dark': '#FACC15', // Yellow/400
        'info-dark': '#60A5FA', // Blue/300
        //backgrounds
        'bg-primary': '#F9FAFB', // Base/Soft White
        'bg-primary-2': '#FAF7F8', // Base/Ivory Rose
        'bg-secondary': '#F1F2F4', // Grey/50
        'bg-tertiary': '#F3F4F6', // Grey/100
        'bg-disabled': '#E5E7EB', // Grey/200
        'bg-alternative': '#FFFFFF', // Base/White

        'bg-dusky-plum-base': '#7D5E80', // Dusky Plum/500
        'bg-dusky-plum-light': '#E6DCEB', // Dusky Plum/100
        'bg-dusky-plum-dark': '#352732', // Dusky Plum/800

        'bg-cool-irish-base': '#8197E5', // Cool Irish/500
        'bg-cool-irish-light': '#EAEDFB', // Cool Irish/100
        'bg-cool-irish-dark': '#385AD6', // Cool Irish/800

        'bg-soft-orchid-base': '#9A82A6', // Soft Orchid/500
        'bg-soft-orchid-light': '#F4F0F4', // Soft Orchid/100
        'bg-soft-orchid-dark': '#4B3B55', // Soft Orchid/800

        'bg-blush-mist-base': '#F6CDCE', // Blush Mist/500
        'bg-blush-mist-light': '#FDF6F6', // Blush Mist/100
        'bg-blush-mist-dark': '#E4686A', // Blush Mist/700

        // ---- Background Colors (Dark Mode) ----
        'bg-primary-dark': '#1C1C1E', // Base/Charcoal Black
        'bg-primary-2-dark': '#0F0F10', // Base/Rich Black
        'bg-secondary-dark': '#111827', // Grey/900
        'bg-tertiary-dark': '#1F2937', // Grey/800
        'bg-disabled-dark': '#374151', // Grey/700
        'bg-alternative-dark': '#000000', // Base/Black

        'bg-dusky-plum-base-dark': '#352732', // Dusky Plum/500
        'bg-dusky-plum-light-dark': '#3F2E40', // Dusky Plum/800
        'bg-dusky-plum-dark-dark': '#E6DCEB', // Dusky Plum/100

        'bg-cool-irish-base-dark': '#4B8198', // Cool Irish/500
        'bg-cool-irish-light-dark': '#2D3B45', // Cool Irish/800
        'bg-cool-irish-dark-dark': '#D1E6EE', // Cool Irish/100

        'bg-soft-orchid-base-dark': '#9A82A6', // Soft Orchid/500
        'bg-soft-orchid-light-dark': '#4B3B55', // Soft Orchid/800
        'bg-soft-orchid-dark-dark': '#EDE6F2', // Soft Orchid/100

        'bg-blush-mist-base-dark': '#E4979E', // Blush Mist/500
        'bg-blush-mist-light-dark': '#BB5160', // Blush Mist/700
        'bg-blush-mist-dark-dark': '#F8D9DB', // Blush Mist/200
        // ---- Border Colors (Light Mode) ----
        'border-primary': '#A4AAB7', // Grey/300
        'border-secondary': '#9CA3AF', // Grey/400
        'border-tertiary': '#374151', // Grey/700

        'border-alternative-1': '#FFFFFF', // Base/White
        'border-alternative-2': '#000000', // Base/Black
        'border-white': '#FFFFFF', // Base/White

        'border-brand-1': '#85627E', // Dusky Plum/500
        'border-brand-2': '#4B8198', // Cool Irish/500
        'border-brand-3': '#9A82A6', // Soft Orchid/500
        'border-brand-4': '#F6CDCE', // Blush Mist/500

        // ---- Border Colors (Dark Mode) ----
        'border-primary-dark': '#4B5563', // Grey/600
        'border-secondary-dark': '#6B7280', // Grey/500
        'border-tertiary-dark': '#E5E7EB', // Grey/200

        'border-alternative-1-dark': '#000000', // Base/Black
        'border-alternative-2-dark': '#FFFFFF', // Base/White
        'border-white-dark': '#FFFFFF', // Base/White

        'border-brand-1-dark': '#60A5FA', // Blue/300
        'border-brand-2-dark': '#818CF8', // Purple/400
        'border-brand-3-dark': '#818CF8', // Purple/400
        'border-brand-4-dark': '#818CF8', // Purple/400
        // ---- Icon Colors (Light Mode) ----
        'icon-primary': '#374151', // Grey/700
        'icon-disable': '#9CA3AF', // Grey/400
        'icon-white': '#FFFFFF', // Base/White

        'icon-brand-1': '#7D5E80', // Dusky Plum/500
        'icon-brand-2': '#4B8198', // Cool Irish/500
        'icon-brand-3': '#9A82A6', // Soft Orchid/500
        'icon-brand-4': '#E4979E', // Blush Mist/500

        // ---- Icon Colors (Dark Mode) ----
        'icon-primary-dark': '#4B5563', // Grey/600
        'icon-disable-dark': '#6B7280', // Grey/500
        'icon-white-dark': '#FFFFFF', // Base/White

        'icon-brand-1-dark': '#60A5FA', // Blue/300
        'icon-brand-2-dark': '#818CF8', // Purple/400
        'icon-brand-3-dark': '#818CF8', // Purple/400
        'icon-brand-4-dark': '#818CF8', // Purple/400
        // ---- Brand Color_02 (Light Mode) ----
        'brand-02-primary': '#4B8198', // Cool Irish/500
        'brand-02-dark': '#2D5461', // Cool Irish/700
        'brand-02-darker': '#1E3A47', // Cool Irish/800
        'brand-02-light': '#BCDDE6', // Cool Irish/200
        'brand-02-lighter': '#D1E6EE', // Cool Irish/100

        // ---- Brand Color_02 (Dark Mode) ----
        'brand-02-primary-dark': '#60A5FA', // Cool Irish/400
        'brand-02-dark-dark': '#BCDDE6', // Cool Irish/200
        'brand-02-darker-dark': '#D1E6EE', // Cool Irish/100
        'brand-02-light-dark': '#2D5461', // Cool Irish/700
        'brand-02-lighter-dark': '#1E3A47', // Cool Irish/800
      },
      screens: {
        mobile: '376px',
        tab: '821px',
        smLap: '1025px',
        bgLap: '1300px',
        laptop: '1285px',
        content: '1750px',
        dashboard: '1850px',
      },
    },
  },
  plugins: [chamferPlugin],
};
