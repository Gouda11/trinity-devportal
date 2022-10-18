/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/main-bg.avif')",
                'footer-texture': "linear-gradient(rgba(56, 70, 77, 0.75),rgba(56, 70, 77, 0.75)),url(/main-bg.avif)",
            }
        },
    },
    plugins: [require('daisyui')],
}