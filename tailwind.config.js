/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jaya' : {
                  100: '#ed6a1c',
                  200: '#d55e26',
                  300: '#ab451f',
                  400: '#99381e',
                  500: '#711810',
                  600: '#451814'
          
                }
      },
      width : {
        'fit-content': 'fit-content',
        '128': '32rem',
      },
      height : {
        'fit-content': 'fit-content',
        '128': '32rem',
      },
      backgroundImage: theme => ({
        'palms': "url('/palms.png')",
        'travel-art' : "url('/travel-art-background.jpg')",
        'connectify' : "url('/dark-linen.png')",
        'test1' : "url(/test1.jpg)",
        'turntable' : "url(/wood.jpg)"
      }),
      boxShadow: {
        'turntable': '4px 4px 60px 8px black',
      },
    },
    fontFamily: {
      briem: ['Briem Hand']
    },
  },
  plugins: [],
}

