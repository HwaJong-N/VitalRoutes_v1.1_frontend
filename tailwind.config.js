/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '700px',
        xl: '1280px'
      },
      colors: {
        'green-1': '#D7FF00',
        'green-2': '#EAFF78',
        alert: '#E60000',
        'gray-11': '#FFFFFF',
        'gray-10': '#F9FAFC',
        'gray-9': '#F4F6FB',
        'gray-8': '#E2E5EB',
        'gray-7': '#F8F8F8',
        'gray-6': '#F3F3F3',
        'gray-5': '#E9E9E9',
        'gray-4': '#DCDCDC',
        'gray-3': '#AAAAAA',
        'gray-2': '#666666',
        'gray-1': '#111111',
      },
      zIndex: {
        'selection-popup': '8000',
        header: '9998',
        dimmed: '9999',
      },

      keyframes: {
        'slide-left': {
          from: {
            transform: 'translateX(0%)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
        'slide-right': {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(0%)',
          },
        },
      },
    },
  },
  plugins: [],
};
