/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            "blue-700": "#1d4ed8",
            "blue-500": "#3b82f6",
            "blue-300": "#93c5fd",
            "blue-100": "#dbeafe"
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        spacing: {
            '1': '0.25rem',
            '1.5': '0.375rem',
            '2': '0.5rem',
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    plugins: [],
};
