/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '640px',
        lg: '760px',
        xl: '960px',
        '2xl': '1180px',
      }
    },
  }
}
