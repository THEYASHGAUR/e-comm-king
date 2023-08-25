import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
        'color-s' :'#F0F0F0' ,
        'color-w' :'#FEFEFE' ,
        'color-b' :'#B38b59' ,
        'color-g' :'#113E21' 
      },
    },
  },
  plugins: [],
}
export default config
