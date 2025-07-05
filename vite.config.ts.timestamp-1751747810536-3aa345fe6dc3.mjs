// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///home/project/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpeg,jpg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/www\.bokadirekt\.se\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "bokadirekt-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24
              },
              networkTimeoutSeconds: 10
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          }
        ],
        navigateFallback: "/index.html",
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
        "favicon.ico",
        "favicon-16x16.png",
        "favicon-32x32.png",
        "favicon-96x96.png",
        "favicon-152x152.png",
        "favicon-512x512.png",
        "favicon-1024x1024.png",
        "apple-icon.png",
        "apple-icon-precomposed.png",
        "apple-icon-57x57.png",
        "apple-icon-60x60.png",
        "apple-icon-72x72.png",
        "apple-icon-76x76.png",
        "apple-icon-114x114.png",
        "apple-icon-120x120.png",
        "apple-icon-144x144.png",
        "apple-icon-152x152.png",
        "apple-icon-180x180.png",
        "apple-icon-1024x1024.png",
        "apple-touch-icon.png",
        "apple-touch-icon-precomposed.png",
        "apple-touch-icon-57x57.png",
        "apple-touch-icon-60x60.png",
        "apple-touch-icon-72x72.png",
        "apple-touch-icon-76x76.png",
        "apple-touch-icon-114x114.png",
        "apple-touch-icon-120x120.png",
        "apple-touch-icon-144x144.png",
        "apple-touch-icon-152x152.png",
        "apple-touch-icon-180x180.png",
        "apple-touch-icon-512x512.png",
        "apple-touch-icon-1024x1024.png",
        "apple-touch-icon-167x167.png",
        "apple-touch-icon-83.5x83.5.png",
        "apple-touch-icon-40x40.png",
        "apple-touch-icon-80x80.png",
        "apple-touch-icon-58x58.png",
        "apple-touch-icon-87x87.png",
        "apple-touch-icon-29x29.png",
        "apple-touch-icon-20x20.png",
        "apple-touch-icon-1024x1024@2x.png",
        "apple-touch-icon-512x512@2x.png",
        "apple-touch-icon-256x256.png",
        "apple-touch-icon-128x128.png",
        "apple-touch-icon-64x64.png",
        "apple-touch-icon-32x32.png",
        "apple-touch-icon-16x16.png",
        "android-icon-36x36.png",
        "android-icon-48x48.png",
        "android-icon-72x72.png",
        "android-icon-96x96.png",
        "android-icon-144x144.png",
        "android-icon-192x192.png",
        "ms-icon-70x70.png",
        "ms-icon-144x144.png",
        "ms-icon-150x150.png",
        "ms-icon-310x310.png",
        "offline.html",
        "icon-maskable-96.png",
        "icon-maskable-128.png",
        "icon-maskable-144.png",
        "icon-maskable-152.png",
        "icon-maskable-192.png",
        "icon-maskable-384.png",
        "icon-maskable-512.png",
        "icon-maskable-1024.png",
        "staff/*.png"
      ],
      manifest: {
        name: "Massageverkstan i J\xF6nk\xF6ping AB",
        short_name: "Massageverkstan",
        description: "Massageverkstan i J\xF6nk\xF6ping AB - Professionell massage och v\xE4lm\xE5ende. Boka din behandling online med Ingmar och Tobias.",
        theme_color: "#2D5A4F",
        background_color: "#2D5A4F",
        display: "standalone",
        orientation: "portrait-primary",
        scope: "/",
        start_url: "/",
        lang: "sv",
        categories: ["health", "wellness", "lifestyle", "medical", "business"],
        icons: [
          // Standard favicon sizes
          {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/favicon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/favicon-1024x1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any"
          },
          // Enhanced maskable icons for Apple Store compliance
          {
            src: "/favicon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/favicon-1024x1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any"
          },
          // Android Chrome icons
          {
            src: "/android-icon-36x36.png",
            sizes: "36x36",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/android-icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/android-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/android-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          // Apple Touch Icons
          {
            src: "/apple-icon-57x57.png",
            sizes: "57x57",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/apple-icon-60x60.png",
            sizes: "60x60",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/apple-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/apple-icon-76x76.png",
            sizes: "76x76",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/apple-icon-114x114.png",
            sizes: "114x114",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/apple-icon-120x120.png",
            sizes: "120x120",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/apple-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/apple-icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/apple-icon-180x180.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/apple-icon-1024x1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any"
          },
          // Microsoft Icons
          {
            src: "/ms-icon-70x70.png",
            sizes: "70x70",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/ms-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/ms-icon-150x150.png",
            sizes: "150x150",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/ms-icon-310x310.png",
            sizes: "310x310",
            type: "image/png",
            purpose: "any"
          },
          // Maskable icons for adaptive icons
          {
            src: "/icon-maskable-96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icon-maskable-128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icon-maskable-144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icon-maskable-152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icon-maskable-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icon-maskable-384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icon-maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icon-maskable-1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        shortcuts: [
          {
            name: "Boka behandling",
            short_name: "Boka",
            description: "Boka din behandling hos Massageverkstan",
            url: "/",
            icons: [
              {
                src: "/apple-icon-96x96.png",
                sizes: "96x96",
                type: "image/png"
              }
            ]
          },
          {
            name: "Om oss",
            short_name: "Om oss",
            description: "L\xE4s mer om Massageverkstan",
            url: "/om-oss",
            icons: [
              {
                src: "/apple-icon-96x96.png",
                sizes: "96x96",
                type: "image/png"
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
      injectRegister: "script",
      strategies: "generateSW"
    })
  ],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          icons: ["lucide-react"],
          motion: ["framer-motion"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLGljbyxwbmcsc3ZnLGpwZWcsanBnfSddLFxuICAgICAgICBydW50aW1lQ2FjaGluZzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvZm9udHNcXC5nb29nbGVhcGlzXFwuY29tXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnZ29vZ2xlLWZvbnRzLWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXmh0dHBzOlxcL1xcL2ZvbnRzXFwuZ3N0YXRpY1xcLmNvbVxcLy4qL2ksXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2dzdGF0aWMtZm9udHMtY2FjaGUnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvd3d3XFwuYm9rYWRpcmVrdFxcLnNlXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdOZXR3b3JrRmlyc3QnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdib2thZGlyZWt0LWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDIwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBuZXR3b3JrVGltZW91dFNlY29uZHM6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXFwuKD86cG5nfGpwZ3xqcGVnfHN2Z3xnaWZ8d2VicCkkLyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnaW1hZ2VzLWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwMCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnL2luZGV4Lmh0bWwnLFxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrRGVueWxpc3Q6IFtcbiAgICAgICAgICAvXlxcL18vLFxuICAgICAgICAgIC9cXC9bXi8/XStcXC5bXi9dKyQvLFxuICAgICAgICAgIC9eXFwvYXBpXFwvLyxcbiAgICAgICAgICAvXlxcL29mZmxpbmVcXC5odG1sJC9cbiAgICAgICAgXSxcbiAgICAgICAgc2tpcFdhaXRpbmc6IHRydWUsXG4gICAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFtcbiAgICAgICAgJ2Zhdmljb24uaWNvJyxcbiAgICAgICAgJ2Zhdmljb24tMTZ4MTYucG5nJyxcbiAgICAgICAgJ2Zhdmljb24tMzJ4MzIucG5nJywgXG4gICAgICAgICdmYXZpY29uLTk2eDk2LnBuZycsXG4gICAgICAgICdmYXZpY29uLTE1MngxNTIucG5nJyxcbiAgICAgICAgJ2Zhdmljb24tNTEyeDUxMi5wbmcnLFxuICAgICAgICAnZmF2aWNvbi0xMDI0eDEwMjQucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24ucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tcHJlY29tcG9zZWQucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tNTd4NTcucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tNjB4NjAucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tNzJ4NzIucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tNzZ4NzYucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tMTE0eDExNC5wbmcnLFxuICAgICAgICAnYXBwbGUtaWNvbi0xMjB4MTIwLnBuZycsXG4gICAgICAgICdhcHBsZS1pY29uLTE0NHgxNDQucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tMTUyeDE1Mi5wbmcnLFxuICAgICAgICAnYXBwbGUtaWNvbi0xODB4MTgwLnBuZycsXG4gICAgICAgICdhcHBsZS1pY29uLTEwMjR4MTAyNC5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZC5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi01N3g1Ny5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi02MHg2MC5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi03Mng3Mi5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi03Nng3Ni5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZycsXG4gICAgICAgICdhcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tMTQ0eDE0NC5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZycsXG4gICAgICAgICdhcHBsZS10b3VjaC1pY29uLTE4MHgxODAucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tNTEyeDUxMi5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi0xMDI0eDEwMjQucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tMTY3eDE2Ny5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi04My41eDgzLjUucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tNDB4NDAucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tODB4ODAucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tNTh4NTgucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tODd4ODcucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tMjl4MjkucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tMjB4MjAucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tMTAyNHgxMDI0QDJ4LnBuZycsXG4gICAgICAgICdhcHBsZS10b3VjaC1pY29uLTUxMng1MTJAMngucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tMjU2eDI1Ni5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi0xMjh4MTI4LnBuZycsXG4gICAgICAgICdhcHBsZS10b3VjaC1pY29uLTY0eDY0LnBuZycsXG4gICAgICAgICdhcHBsZS10b3VjaC1pY29uLTMyeDMyLnBuZycsXG4gICAgICAgICdhcHBsZS10b3VjaC1pY29uLTE2eDE2LnBuZycsXG4gICAgICAgICdhbmRyb2lkLWljb24tMzZ4MzYucG5nJyxcbiAgICAgICAgJ2FuZHJvaWQtaWNvbi00OHg0OC5wbmcnLFxuICAgICAgICAnYW5kcm9pZC1pY29uLTcyeDcyLnBuZycsXG4gICAgICAgICdhbmRyb2lkLWljb24tOTZ4OTYucG5nJyxcbiAgICAgICAgJ2FuZHJvaWQtaWNvbi0xNDR4MTQ0LnBuZycsXG4gICAgICAgICdhbmRyb2lkLWljb24tMTkyeDE5Mi5wbmcnLFxuICAgICAgICAnbXMtaWNvbi03MHg3MC5wbmcnLFxuICAgICAgICAnbXMtaWNvbi0xNDR4MTQ0LnBuZycsXG4gICAgICAgICdtcy1pY29uLTE1MHgxNTAucG5nJyxcbiAgICAgICAgJ21zLWljb24tMzEweDMxMC5wbmcnLFxuICAgICAgICAnb2ZmbGluZS5odG1sJyxcbiAgICAgICAgJ2ljb24tbWFza2FibGUtOTYucG5nJyxcbiAgICAgICAgJ2ljb24tbWFza2FibGUtMTI4LnBuZycsXG4gICAgICAgICdpY29uLW1hc2thYmxlLTE0NC5wbmcnLFxuICAgICAgICAnaWNvbi1tYXNrYWJsZS0xNTIucG5nJyxcbiAgICAgICAgJ2ljb24tbWFza2FibGUtMTkyLnBuZycsXG4gICAgICAgICdpY29uLW1hc2thYmxlLTM4NC5wbmcnLFxuICAgICAgICAnaWNvbi1tYXNrYWJsZS01MTIucG5nJywgXG4gICAgICAgICdpY29uLW1hc2thYmxlLTEwMjQucG5nJyxcbiAgICAgICAgJ3N0YWZmLyoucG5nJ1xuICAgICAgXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdNYXNzYWdldmVya3N0YW4gaSBKXHUwMEY2bmtcdTAwRjZwaW5nIEFCJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ01hc3NhZ2V2ZXJrc3RhbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTWFzc2FnZXZlcmtzdGFuIGkgSlx1MDBGNm5rXHUwMEY2cGluZyBBQiAtIFByb2Zlc3Npb25lbGwgbWFzc2FnZSBvY2ggdlx1MDBFNGxtXHUwMEU1ZW5kZS4gQm9rYSBkaW4gYmVoYW5kbGluZyBvbmxpbmUgbWVkIEluZ21hciBvY2ggVG9iaWFzLicsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnIzJENUE0RicsXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjMkQ1QTRGJyxcbiAgICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxuICAgICAgICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0LXByaW1hcnknLFxuICAgICAgICBzY29wZTogJy8nLFxuICAgICAgICBzdGFydF91cmw6ICcvJyxcbiAgICAgICAgbGFuZzogJ3N2JyxcbiAgICAgICAgY2F0ZWdvcmllczogWydoZWFsdGgnLCAnd2VsbG5lc3MnLCAnbGlmZXN0eWxlJywgJ21lZGljYWwnLCAnYnVzaW5lc3MnXSxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAvLyBTdGFuZGFyZCBmYXZpY29uIHNpemVzXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tMTZ4MTYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tMzJ4MzIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMzJ4MzInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tOTZ4OTYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnOTZ4OTYnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tMTUyeDE1Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNTJ4MTUyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9mYXZpY29uLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvZmF2aWNvbi0xMDI0eDEwMjQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTAyNHgxMDI0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIEVuaGFuY2VkIG1hc2thYmxlIGljb25zIGZvciBBcHBsZSBTdG9yZSBjb21wbGlhbmNlXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tMTUyeDE1Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNTJ4MTUyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tMTAyNHgxMDI0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEwMjR4MTAyNCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBBbmRyb2lkIENocm9tZSBpY29uc1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hbmRyb2lkLWljb24tMzZ4MzYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMzZ4MzYnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FuZHJvaWQtaWNvbi00OHg0OC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc0OHg0OCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC1pY29uLTcyeDcyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzcyeDcyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hbmRyb2lkLWljb24tOTZ4OTYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnOTZ4OTYnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FuZHJvaWQtaWNvbi0xNDR4MTQ0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE0NHgxNDQnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FuZHJvaWQtaWNvbi0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gQXBwbGUgVG91Y2ggSWNvbnNcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi01N3g1Ny5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1N3g1NycsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi02MHg2MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc2MHg2MCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi03Mng3Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc3Mng3MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi03Nng3Ni5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc3Nng3NicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi0xMTR4MTE0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzExNHgxMTQnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FwcGxlLWljb24tMTIweDEyMC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxMjB4MTIwJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hcHBsZS1pY29uLTE0NHgxNDQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTQ0eDE0NCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE1MngxNTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FwcGxlLWljb24tMTgweDE4MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hcHBsZS1pY29uLTEwMjR4MTAyNC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxMDI0eDEwMjQnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gTWljcm9zb2Z0IEljb25zXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL21zLWljb24tNzB4NzAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNzB4NzAnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL21zLWljb24tMTQ0eDE0NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNDR4MTQ0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9tcy1pY29uLTE1MHgxNTAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTUweDE1MCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvbXMtaWNvbi0zMTB4MzEwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzMxMHgzMTAnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gTWFza2FibGUgaWNvbnMgZm9yIGFkYXB0aXZlIGljb25zXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2ljb24tbWFza2FibGUtOTYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnOTZ4OTYnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaWNvbi1tYXNrYWJsZS0xMjgucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTI4eDEyOCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pY29uLW1hc2thYmxlLTE0NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNDR4MTQ0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2ljb24tbWFza2FibGUtMTUyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE1MngxNTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaWNvbi1tYXNrYWJsZS0xOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pY29uLW1hc2thYmxlLTM4NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICczODR4Mzg0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2ljb24tbWFza2FibGUtNTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaWNvbi1tYXNrYWJsZS0xMDI0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEwMjR4MTAyNCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZSdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHNob3J0Y3V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdCb2thIGJlaGFuZGxpbmcnLFxuICAgICAgICAgICAgc2hvcnRfbmFtZTogJ0Jva2EnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCb2thIGRpbiBiZWhhbmRsaW5nIGhvcyBNYXNzYWdldmVya3N0YW4nLFxuICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiAnL2FwcGxlLWljb24tOTZ4OTYucG5nJyxcbiAgICAgICAgICAgICAgICBzaXplczogJzk2eDk2JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnT20gb3NzJywgXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiAnT20gb3NzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTFx1MDBFNHMgbWVyIG9tIE1hc3NhZ2V2ZXJrc3RhbicsXG4gICAgICAgICAgICB1cmw6ICcvb20tb3NzJyxcbiAgICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi05Nng5Ni5wbmcnLFxuICAgICAgICAgICAgICAgIHNpemVzOiAnOTZ4OTYnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9uczogZmFsc2UsXG4gICAgICAgIHJlbGF0ZWRfYXBwbGljYXRpb25zOiBbXSxcbiAgICAgICAgZGlzcGxheV9vdmVycmlkZTogW1wid2luZG93LWNvbnRyb2xzLW92ZXJsYXlcIiwgXCJzdGFuZGFsb25lXCJdLFxuICAgICAgICBwcm90b2NvbF9oYW5kbGVyczogW10sXG4gICAgICAgIGZpbGVfaGFuZGxlcnM6IFtdLFxuICAgICAgICBzaGFyZV90YXJnZXQ6IHtcbiAgICAgICAgICBhY3Rpb246IFwiL1wiLFxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcInRpdGxlXCIsXG4gICAgICAgICAgICB0ZXh0OiBcInRleHRcIixcbiAgICAgICAgICAgIHVybDogXCJ1cmxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRnZV9zaWRlX3BhbmVsOiB7XG4gICAgICAgICAgcHJlZmVycmVkX3dpZHRoOiA0MDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRldk9wdGlvbnM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBpbmplY3RSZWdpc3RlcjogJ3NjcmlwdCcsXG4gICAgICBzdHJhdGVnaWVzOiAnZ2VuZXJhdGVTVydcbiAgICB9KVxuICBdLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgdmVuZG9yOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgICAgIHJvdXRlcjogWydyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICAgICAgaWNvbnM6IFsnbHVjaWRlLXJlYWN0J10sXG4gICAgICAgICAgbW90aW9uOiBbJ2ZyYW1lci1tb3Rpb24nXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1AsY0FBYyxDQUFDLHlDQUF5QztBQUFBLFFBQ3hELGdCQUFnQjtBQUFBLFVBQ2Q7QUFBQSxZQUNFLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxjQUNQLFdBQVc7QUFBQSxjQUNYLFlBQVk7QUFBQSxnQkFDVixZQUFZO0FBQUEsZ0JBQ1osZUFBZSxLQUFLLEtBQUssS0FBSztBQUFBLGNBQ2hDO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxTQUFTO0FBQUEsY0FDUCxXQUFXO0FBQUEsY0FDWCxZQUFZO0FBQUEsZ0JBQ1YsWUFBWTtBQUFBLGdCQUNaLGVBQWUsS0FBSyxLQUFLLEtBQUs7QUFBQSxjQUNoQztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSztBQUFBLGNBQzNCO0FBQUEsY0FDQSx1QkFBdUI7QUFBQSxZQUN6QjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxTQUFTO0FBQUEsY0FDUCxXQUFXO0FBQUEsY0FDWCxZQUFZO0FBQUEsZ0JBQ1YsWUFBWTtBQUFBLGdCQUNaLGVBQWUsS0FBSyxLQUFLLEtBQUs7QUFBQSxjQUNoQztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0Esa0JBQWtCO0FBQUEsUUFDbEIsMEJBQTBCO0FBQUEsVUFDeEI7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsUUFDYixjQUFjO0FBQUEsTUFDaEI7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sWUFBWSxDQUFDLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVTtBQUFBLFFBQ3JFLE9BQU87QUFBQTtBQUFBLFVBRUw7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBO0FBQUEsVUFFQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUE7QUFBQSxVQUVBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQTtBQUFBLFVBRUE7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUE7QUFBQSxVQUVBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBO0FBQUEsVUFFQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFdBQVc7QUFBQSxVQUNUO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixZQUFZO0FBQUEsWUFDWixhQUFhO0FBQUEsWUFDYixLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsY0FDTDtBQUFBLGdCQUNFLEtBQUs7QUFBQSxnQkFDTCxPQUFPO0FBQUEsZ0JBQ1AsTUFBTTtBQUFBLGNBQ1I7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFlBQVk7QUFBQSxZQUNaLGFBQWE7QUFBQSxZQUNiLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxjQUNMO0FBQUEsZ0JBQ0UsS0FBSztBQUFBLGdCQUNMLE9BQU87QUFBQSxnQkFDUCxNQUFNO0FBQUEsY0FDUjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsNkJBQTZCO0FBQUEsUUFDN0Isc0JBQXNCLENBQUM7QUFBQSxRQUN2QixrQkFBa0IsQ0FBQywyQkFBMkIsWUFBWTtBQUFBLFFBQzFELG1CQUFtQixDQUFDO0FBQUEsUUFDcEIsZUFBZSxDQUFDO0FBQUEsUUFDaEIsY0FBYztBQUFBLFVBQ1osUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFVBQ1A7QUFBQSxRQUNGO0FBQUEsUUFDQSxpQkFBaUI7QUFBQSxVQUNmLGlCQUFpQjtBQUFBLFFBQ25CO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVk7QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsVUFDN0IsUUFBUSxDQUFDLGtCQUFrQjtBQUFBLFVBQzNCLE9BQU8sQ0FBQyxjQUFjO0FBQUEsVUFDdEIsUUFBUSxDQUFDLGVBQWU7QUFBQSxRQUMxQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
