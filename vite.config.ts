import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from "@vitejs/plugin-react"
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/ts/main.tsx'],
            refresh: true,
        }),

        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react(),
        tailwindcss(),
    ],
    resolve:{
        alias:{
            "@" : "/resources/ts",
        }
    },
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
