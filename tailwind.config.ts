import type { Config } from 'tailwindcss'

export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.tsx',
        './resources/**/*.ts',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config
