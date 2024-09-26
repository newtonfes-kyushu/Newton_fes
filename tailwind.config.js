/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // srcフォルダ内の全ファイルを対象にする
    './*.html', // 必要に応じて他のファイルも追加
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#800000',
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
      },
    },
  },  
  plugins: [],
}

