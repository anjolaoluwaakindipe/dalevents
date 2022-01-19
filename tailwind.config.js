module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                "light-brown": "#C4B7B2",
                "accent-white": "#E5E5E5",
                "primary-pink": "#C8479D",
                "primary-dark": "#0E1116",
                "dark-brown": "#7E4D2B",
            },
            fontFamily: {
                "oswald": ["Oswald"],
            },
        },
    },
    plugins: [],
};
