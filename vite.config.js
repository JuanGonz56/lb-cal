import { defineConfig } from 'vite'; // Import defineConfig
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
    plugins: [sveltekit()], // Use the SvelteKit plugin
    server: {
        port: 5173, // Specify the port (default is 5173)
        fs: {
            allow: ['.'], // Restrict file system access to the project directory
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // Optional alias for cleaner imports
        },
    },
});
