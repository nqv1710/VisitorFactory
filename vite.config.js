import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        vuetify(),

    ],
    server: {
        host: '192.168.10.53',  // Đảm bảo đúng IP của server
        port: 5173,
        strictPort: true,
        hmr: {
            host: '192.168.10.53',
        },
        cors: {
            origin: ['http://khodien.ringnet.vn'],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            credentials: true,
        }
    }
});
