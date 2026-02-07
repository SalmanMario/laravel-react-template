import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import react from "@vitejs/plugin-react"
import {tanstackRouter} from "@tanstack/router-plugin/vite";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),

        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
            routesDirectory: 'resources/js/routes',
            generatedRouteTree: 'resources/js/routeTree.gen.ts',
        }),
        react(),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
    esbuild:{
        jsx: 'automatic'
    }
});
