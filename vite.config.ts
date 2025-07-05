import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,jpg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/www\.bokadirekt\.se\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'bokadirekt-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24
              },
              networkTimeoutSeconds: 10
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          }
        ],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [
          /^\/_/,
          /\/[^/?]+\.[^/]+$/,
          /^\/api\//,
          /^\/offline\.html$/
        ],
        skipWaiting: true,
        clientsClaim: true
      },
      includeAssets: [
        'favicon.ico',
        'favicon-16x16.png',
        'favicon-32x32.png', 
        'favicon-96x96.png',
        'favicon-152x152.png',
        'favicon-512x512.png',
        'favicon-1024x1024.png',
        'apple-icon.png',
        'apple-icon-precomposed.png',
        'apple-icon-57x57.png',
        'apple-icon-60x60.png',
        'apple-icon-72x72.png',
        'apple-icon-76x76.png',
        'apple-icon-114x114.png',
        'apple-icon-120x120.png',
        'apple-icon-144x144.png',
        'apple-icon-152x152.png',
        'apple-icon-180x180.png',
        'android-icon-36x36.png',
        'android-icon-48x48.png',
        'android-icon-72x72.png',
        'android-icon-96x96.png',
        'android-icon-144x144.png',
        'android-icon-192x192.png',
        'ms-icon-70x70.png',
        'ms-icon-144x144.png',
        'ms-icon-150x150.png',
        'ms-icon-310x310.png',
        'offline.html',
        'icon-maskable-96.png',
        'icon-maskable-128.png',
        'icon-maskable-144.png',
        'icon-maskable-152.png',
        'icon-maskable-192.png',
        'icon-maskable-384.png',
        'icon-maskable-512.png', 
        'icon-maskable-1024.png',
        'staff/*.png'
      ],
      manifest: {
        id: 'massageverkstan-jonkoping-ab-pwa',
        name: 'Massageverkstan i Jönköping AB',
        short_name: 'Massageverkstan',
        description: 'Massageverkstan i Jönköping AB - Professionell massage och välmående. Boka din behandling online.',
        theme_color: '#2D5A4F',
        background_color: '#2D5A4F',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        launch_handler: {
          client_mode: 'navigate-existing'
        },
        handle_links: 'preferred',
        file_handlers: [
          {
            action: '/',
            accept: {
              'text/calendar': ['.ics'],
              'application/pdf': ['.pdf']
            }
          }
        ],
        screenshots: [
          {
            src: '/apple-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Massageverkstan booking interface'
          },
          {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Massageverkstan desktop view'
          }
        ],
        categories: ['health', 'wellness', 'lifestyle', 'medical'],
        lang: 'sv',
        icons: [
          // Standard favicon sizes
          {
            src: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/favicon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/favicon-1024x1024.png',
            sizes: '1024x1024',
            type: 'image/png',
            purpose: 'any'
          },
          // Enhanced maskable icons for Apple Store compliance
          {
            src: '/favicon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/favicon-1024x1024.png',
            sizes: '1024x1024',
            type: 'image/png',
            purpose: 'any'
          },
          // Android Chrome icons
          {
            src: '/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          // Apple Touch Icons
          {
            src: '/apple-icon-57x57.png',
            sizes: '57x57',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/apple-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/apple-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/apple-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/apple-icon-114x114.png',
            sizes: '114x114',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/apple-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/apple-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/apple-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/apple-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any'
          },
          // Microsoft Icons
          {
            src: '/ms-icon-70x70.png',
            sizes: '70x70',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/ms-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/ms-icon-150x150.png',
            sizes: '150x150',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/ms-icon-310x310.png',
            sizes: '310x310',
            type: 'image/png',
            purpose: 'any'
          },
          // Maskable icons for adaptive icons
          {
            src: '/icon-maskable-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/icon-maskable-128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/icon-maskable-144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/icon-maskable-152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/icon-maskable-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/icon-maskable-384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/icon-maskable-1024.png',
            sizes: '1024x1024',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        shortcuts: [
          {
           name: 'Om oss',
            short_name: 'Om oss',
            description: 'Läs mer om Massageverkstan',
            url: '/om-oss',
            icons: [
              {
                src: '/apple-icon-96x96.png',
                sizes: '96x96',
                type: 'image/png'
              }
            ]
          }
        ],
        prefer_related_applications: false,
        related_applications: [],
        display_override: ["window-controls-overlay", "standalone"],
        protocol_handlers: [],
        file_handlers: [],
        share_target: {
          action: "/",
          method: "GET",
          params: {
            title: "title",
            text: "text",
            url: "url"
          }
        },
        edge_side_panel: {
          preferred_width: 400
        }
      },
      devOptions: {
        enabled: false
      },
      injectRegister: 'script',
      strategies: 'generateSW'
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          motion: ['framer-motion']
        }
      }
    }
  }
});