/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
          scrollbar: {
            enabled: true,
          },
        },
    },
    plugins: [require('flowbite/plugin')],
};
