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
        id: "massageverkstan-jonkoping-ab-pwa",
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
        dir: "ltr",
        launch_handler: {
          client_mode: "navigate-existing"
        },
        handle_links: "preferred",
        edge_side_panel: {
          preferred_width: 400
        },
        display_override: ["window-controls-overlay", "standalone", "minimal-ui"],
        protocol_handlers: [
          {
            protocol: "web+massage",
            url: "/booking?service=%s"
          },
          {
            protocol: "mailto",
            url: "/contact?email=%s"
          }
        ],
        file_handlers: [
          {
            action: "/",
            accept: {
              "text/calendar": [".ics"],
              "application/pdf": [".pdf"],
              "text/vcard": [".vcf"],
              "application/vnd.ms-outlook": [".msg"]
            },
            icons: [
              {
                src: "/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png"
              }
            ],
            launch_type: "single-client"
          }
        ],
        screenshots: [
          {
            src: "/apple-icon-180x180.png",
            sizes: "180x180",
            type: "image/png",
            form_factor: "narrow",
            label: "Massageverkstan mobile booking interface - Book massage appointments with Ingmar and Tobias"
          },
          {
            src: "/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            form_factor: "wide",
            label: "Massageverkstan desktop view - Professional massage services in J\xF6nk\xF6ping"
          },
          {
            src: "/apple-icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            form_factor: "narrow",
            label: "Massageverkstan therapist profiles - Meet our certified massage therapists"
          },
          {
            src: "/favicon-1024x1024.png",
            sizes: "1024x1024",
            type: "image/png",
            form_factor: "wide",
            label: "Massageverkstan services overview - Professional massage and wellness treatments"
          }
        ],
        categories: ["health", "wellness", "lifestyle", "medical", "business"],
        iarc_rating_id: "e84b072d-71b3-4d3e-86ae-31a8ce4e53b7",
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
            name: "Boka tid",
            short_name: "Om oss",
            description: "L\xE4s mer om Massageverkstan och v\xE5ra terapeuter",
            url: "/?tab=boka",
            icons: [
              {
                src: "/apple-icon-96x96.png",
                sizes: "96x96",
                type: "image/png"
              }
            ]
          },
          {
            name: "Kontakt",
            short_name: "Kontakt",
            description: "Kontakta Massageverkstan f\xF6r fr\xE5gor",
            url: "/?tab=info",
            icons: [
              {
                src: "/apple-icon-96x96.png",
                sizes: "96x96",
                type: "image/png"
              }
            ]
          },
          {
            name: "Ring oss",
            short_name: "Ring",
            description: "Ring Massageverkstan direkt",
            url: "tel:0709934893",
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
        related_applications: [
          {
            platform: "webapp",
            url: "https://massageverkstan.netlify.app/manifest.json"
          }
        ],
        share_target: {
          action: "/",
          method: "GET",
          enctype: "application/x-www-form-urlencoded",
          params: {
            title: "title",
            text: "text",
            url: "url"
          }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLGljbyxwbmcsc3ZnLGpwZWcsanBnfSddLFxuICAgICAgICBydW50aW1lQ2FjaGluZzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvZm9udHNcXC5nb29nbGVhcGlzXFwuY29tXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnZ29vZ2xlLWZvbnRzLWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXmh0dHBzOlxcL1xcL2ZvbnRzXFwuZ3N0YXRpY1xcLmNvbVxcLy4qL2ksXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2dzdGF0aWMtZm9udHMtY2FjaGUnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvd3d3XFwuYm9rYWRpcmVrdFxcLnNlXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdOZXR3b3JrRmlyc3QnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdib2thZGlyZWt0LWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDIwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBuZXR3b3JrVGltZW91dFNlY29uZHM6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXFwuKD86cG5nfGpwZ3xqcGVnfHN2Z3xnaWZ8d2VicCkkLyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnaW1hZ2VzLWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwMCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnL2luZGV4Lmh0bWwnLFxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrRGVueWxpc3Q6IFtcbiAgICAgICAgICAvXlxcL18vLFxuICAgICAgICAgIC9cXC9bXi8/XStcXC5bXi9dKyQvLFxuICAgICAgICAgIC9eXFwvYXBpXFwvLyxcbiAgICAgICAgICAvXlxcL29mZmxpbmVcXC5odG1sJC9cbiAgICAgICAgXSxcbiAgICAgICAgc2tpcFdhaXRpbmc6IHRydWUsXG4gICAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFtcbiAgICAgICAgJ2Zhdmljb24uaWNvJyxcbiAgICAgICAgJ2Zhdmljb24tMTZ4MTYucG5nJyxcbiAgICAgICAgJ2Zhdmljb24tMzJ4MzIucG5nJywgXG4gICAgICAgICdmYXZpY29uLTk2eDk2LnBuZycsXG4gICAgICAgICdmYXZpY29uLTE1MngxNTIucG5nJyxcbiAgICAgICAgJ2Zhdmljb24tNTEyeDUxMi5wbmcnLFxuICAgICAgICAnZmF2aWNvbi0xMDI0eDEwMjQucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24ucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tcHJlY29tcG9zZWQucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tNTd4NTcucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tNjB4NjAucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tNzJ4NzIucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tNzZ4NzYucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tMTE0eDExNC5wbmcnLFxuICAgICAgICAnYXBwbGUtaWNvbi0xMjB4MTIwLnBuZycsXG4gICAgICAgICdhcHBsZS1pY29uLTE0NHgxNDQucG5nJyxcbiAgICAgICAgJ2FwcGxlLWljb24tMTUyeDE1Mi5wbmcnLFxuICAgICAgICAnYXBwbGUtaWNvbi0xODB4MTgwLnBuZycsXG4gICAgICAgICdhbmRyb2lkLWljb24tMzZ4MzYucG5nJyxcbiAgICAgICAgJ2FuZHJvaWQtaWNvbi00OHg0OC5wbmcnLFxuICAgICAgICAnYW5kcm9pZC1pY29uLTcyeDcyLnBuZycsXG4gICAgICAgICdhbmRyb2lkLWljb24tOTZ4OTYucG5nJyxcbiAgICAgICAgJ2FuZHJvaWQtaWNvbi0xNDR4MTQ0LnBuZycsXG4gICAgICAgICdhbmRyb2lkLWljb24tMTkyeDE5Mi5wbmcnLFxuICAgICAgICAnbXMtaWNvbi03MHg3MC5wbmcnLFxuICAgICAgICAnbXMtaWNvbi0xNDR4MTQ0LnBuZycsXG4gICAgICAgICdtcy1pY29uLTE1MHgxNTAucG5nJyxcbiAgICAgICAgJ21zLWljb24tMzEweDMxMC5wbmcnLFxuICAgICAgICAnb2ZmbGluZS5odG1sJyxcbiAgICAgICAgJ2ljb24tbWFza2FibGUtOTYucG5nJyxcbiAgICAgICAgJ2ljb24tbWFza2FibGUtMTI4LnBuZycsXG4gICAgICAgICdpY29uLW1hc2thYmxlLTE0NC5wbmcnLFxuICAgICAgICAnaWNvbi1tYXNrYWJsZS0xNTIucG5nJyxcbiAgICAgICAgJ2ljb24tbWFza2FibGUtMTkyLnBuZycsXG4gICAgICAgICdpY29uLW1hc2thYmxlLTM4NC5wbmcnLFxuICAgICAgICAnaWNvbi1tYXNrYWJsZS01MTIucG5nJywgXG4gICAgICAgICdpY29uLW1hc2thYmxlLTEwMjQucG5nJyxcbiAgICAgICAgJ3N0YWZmLyoucG5nJ1xuICAgICAgXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIGlkOiAnbWFzc2FnZXZlcmtzdGFuLWpvbmtvcGluZy1hYi1wd2EnLFxuICAgICAgICBuYW1lOiAnTWFzc2FnZXZlcmtzdGFuIGkgSlx1MDBGNm5rXHUwMEY2cGluZyBBQicsXG4gICAgICAgIHNob3J0X25hbWU6ICdNYXNzYWdldmVya3N0YW4nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ01hc3NhZ2V2ZXJrc3RhbiBpIEpcdTAwRjZua1x1MDBGNnBpbmcgQUIgLSBQcm9mZXNzaW9uZWxsIG1hc3NhZ2Ugb2NoIHZcdTAwRTRsbVx1MDBFNWVuZGUuIEJva2EgZGluIGJlaGFuZGxpbmcgb25saW5lIG1lZCBJbmdtYXIgb2NoIFRvYmlhcy4nLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyMyRDVBNEYnLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnIzJENUE0RicsXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgICAgICAgb3JpZW50YXRpb246ICdwb3J0cmFpdC1wcmltYXJ5JyxcbiAgICAgICAgc2NvcGU6ICcvJyxcbiAgICAgICAgc3RhcnRfdXJsOiAnLycsXG4gICAgICAgIGxhbmc6ICdzdicsXG4gICAgICAgIGRpcjogJ2x0cicsXG4gICAgICAgIGxhdW5jaF9oYW5kbGVyOiB7XG4gICAgICAgICAgY2xpZW50X21vZGU6ICduYXZpZ2F0ZS1leGlzdGluZydcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlX2xpbmtzOiAncHJlZmVycmVkJyxcbiAgICAgICAgZWRnZV9zaWRlX3BhbmVsOiB7XG4gICAgICAgICAgcHJlZmVycmVkX3dpZHRoOiA0MDBcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGxheV9vdmVycmlkZTogW1wid2luZG93LWNvbnRyb2xzLW92ZXJsYXlcIiwgXCJzdGFuZGFsb25lXCIsIFwibWluaW1hbC11aVwiXSxcbiAgICAgICAgcHJvdG9jb2xfaGFuZGxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm90b2NvbDogJ3dlYittYXNzYWdlJyxcbiAgICAgICAgICAgIHVybDogJy9ib29raW5nP3NlcnZpY2U9JXMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm90b2NvbDogJ21haWx0bycsXG4gICAgICAgICAgICB1cmw6ICcvY29udGFjdD9lbWFpbD0lcydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbGVfaGFuZGxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY3Rpb246ICcvJyxcbiAgICAgICAgICAgIGFjY2VwdDoge1xuICAgICAgICAgICAgICAndGV4dC9jYWxlbmRhcic6IFsnLmljcyddLFxuICAgICAgICAgICAgICAnYXBwbGljYXRpb24vcGRmJzogWycucGRmJ10sXG4gICAgICAgICAgICAgICd0ZXh0L3ZjYXJkJzogWycudmNmJ10sXG4gICAgICAgICAgICAgICdhcHBsaWNhdGlvbi92bmQubXMtb3V0bG9vayc6IFsnLm1zZyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogJy9mYXZpY29uLTk2eDk2LnBuZycsXG4gICAgICAgICAgICAgICAgc2l6ZXM6ICc5Nng5NicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxhdW5jaF90eXBlOiAnc2luZ2xlLWNsaWVudCdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHNjcmVlbnNob3RzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FwcGxlLWljb24tMTgweDE4MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgZm9ybV9mYWN0b3I6ICduYXJyb3cnLFxuICAgICAgICAgICAgbGFiZWw6ICdNYXNzYWdldmVya3N0YW4gbW9iaWxlIGJvb2tpbmcgaW50ZXJmYWNlIC0gQm9vayBtYXNzYWdlIGFwcG9pbnRtZW50cyB3aXRoIEluZ21hciBhbmQgVG9iaWFzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgZm9ybV9mYWN0b3I6ICd3aWRlJyxcbiAgICAgICAgICAgIGxhYmVsOiAnTWFzc2FnZXZlcmtzdGFuIGRlc2t0b3AgdmlldyAtIFByb2Zlc3Npb25hbCBtYXNzYWdlIHNlcnZpY2VzIGluIEpcdTAwRjZua1x1MDBGNnBpbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE1MngxNTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBmb3JtX2ZhY3RvcjogJ25hcnJvdycsXG4gICAgICAgICAgICBsYWJlbDogJ01hc3NhZ2V2ZXJrc3RhbiB0aGVyYXBpc3QgcHJvZmlsZXMgLSBNZWV0IG91ciBjZXJ0aWZpZWQgbWFzc2FnZSB0aGVyYXBpc3RzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tMTAyNHgxMDI0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEwMjR4MTAyNCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIGZvcm1fZmFjdG9yOiAnd2lkZScsXG4gICAgICAgICAgICBsYWJlbDogJ01hc3NhZ2V2ZXJrc3RhbiBzZXJ2aWNlcyBvdmVydmlldyAtIFByb2Zlc3Npb25hbCBtYXNzYWdlIGFuZCB3ZWxsbmVzcyB0cmVhdG1lbnRzJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgY2F0ZWdvcmllczogWydoZWFsdGgnLCAnd2VsbG5lc3MnLCAnbGlmZXN0eWxlJywgJ21lZGljYWwnLCAnYnVzaW5lc3MnXSxcbiAgICAgICAgaWFyY19yYXRpbmdfaWQ6ICdlODRiMDcyZC03MWIzLTRkM2UtODZhZS0zMWE4Y2U0ZTUzYjcnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIC8vIFN0YW5kYXJkIGZhdmljb24gc2l6ZXNcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvZmF2aWNvbi0xNngxNi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNngxNicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvZmF2aWNvbi0zMngzMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICczMngzMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvZmF2aWNvbi05Nng5Ni5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc5Nng5NicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvZmF2aWNvbi0xNTJ4MTUyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE1MngxNTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9mYXZpY29uLTEwMjR4MTAyNC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxMDI0eDEwMjQnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gRW5oYW5jZWQgbWFza2FibGUgaWNvbnMgZm9yIEFwcGxlIFN0b3JlIGNvbXBsaWFuY2VcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvZmF2aWNvbi0xNTJ4MTUyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE1MngxNTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvZmF2aWNvbi01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvZmF2aWNvbi0xMDI0eDEwMjQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTAyNHgxMDI0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIEFuZHJvaWQgQ2hyb21lIGljb25zXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FuZHJvaWQtaWNvbi0zNngzNi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICczNngzNicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC1pY29uLTQ4eDQ4LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzQ4eDQ4JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hbmRyb2lkLWljb24tNzJ4NzIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNzJ4NzInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FuZHJvaWQtaWNvbi05Nng5Ni5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc5Nng5NicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC1pY29uLTE0NHgxNDQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTQ0eDE0NCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC1pY29uLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBBcHBsZSBUb3VjaCBJY29uc1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hcHBsZS1pY29uLTU3eDU3LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzU3eDU3JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hcHBsZS1pY29uLTYweDYwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzYweDYwJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hcHBsZS1pY29uLTcyeDcyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzcyeDcyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hcHBsZS1pY29uLTc2eDc2LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzc2eDc2JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hcHBsZS1pY29uLTExNHgxMTQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTE0eDExNCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi0xMjB4MTIwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEyMHgxMjAnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FwcGxlLWljb24tMTQ0eDE0NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNDR4MTQ0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hcHBsZS1pY29uLTE1MngxNTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTUyeDE1MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi0xODB4MTgwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE4MHgxODAnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gTWljcm9zb2Z0IEljb25zXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL21zLWljb24tNzB4NzAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNzB4NzAnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL21zLWljb24tMTQ0eDE0NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNDR4MTQ0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9tcy1pY29uLTE1MHgxNTAucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTUweDE1MCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvbXMtaWNvbi0zMTB4MzEwLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzMxMHgzMTAnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gTWFza2FibGUgaWNvbnMgZm9yIGFkYXB0aXZlIGljb25zXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2ljb24tbWFza2FibGUtOTYucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnOTZ4OTYnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaWNvbi1tYXNrYWJsZS0xMjgucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTI4eDEyOCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pY29uLW1hc2thYmxlLTE0NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNDR4MTQ0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2ljb24tbWFza2FibGUtMTUyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE1MngxNTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaWNvbi1tYXNrYWJsZS0xOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pY29uLW1hc2thYmxlLTM4NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICczODR4Mzg0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2ljb24tbWFza2FibGUtNTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvaWNvbi1tYXNrYWJsZS0xMDI0LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzEwMjR4MTAyNCcsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZSdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHNob3J0Y3V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdCb2thIHRpZCcsXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiAnT20gb3NzJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTFx1MDBFNHMgbWVyIG9tIE1hc3NhZ2V2ZXJrc3RhbiBvY2ggdlx1MDBFNXJhIHRlcmFwZXV0ZXInLFxuICAgICAgICAgICAgdXJsOiAnLz90YWI9Ym9rYScsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiAnL2FwcGxlLWljb24tOTZ4OTYucG5nJyxcbiAgICAgICAgICAgICAgICBzaXplczogJzk2eDk2JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnS29udGFrdCcsXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiAnS29udGFrdCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0tvbnRha3RhIE1hc3NhZ2V2ZXJrc3RhbiBmXHUwMEY2ciBmclx1MDBFNWdvcicsXG4gICAgICAgICAgICB1cmw6ICcvP3RhYj1pbmZvJyxcbiAgICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICcvYXBwbGUtaWNvbi05Nng5Ni5wbmcnLFxuICAgICAgICAgICAgICAgIHNpemVzOiAnOTZ4OTYnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdSaW5nIG9zcycsXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiAnUmluZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JpbmcgTWFzc2FnZXZlcmtzdGFuIGRpcmVrdCcsXG4gICAgICAgICAgICB1cmw6ICd0ZWw6MDcwOTkzNDg5MycsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiAnL2FwcGxlLWljb24tOTZ4OTYucG5nJyxcbiAgICAgICAgICAgICAgICBzaXplczogJzk2eDk2JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGZhbHNlLFxuICAgICAgICByZWxhdGVkX2FwcGxpY2F0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBsYXRmb3JtOiAnd2ViYXBwJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWFzc2FnZXZlcmtzdGFuLm5ldGxpZnkuYXBwL21hbmlmZXN0Lmpzb24nXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzaGFyZV90YXJnZXQ6IHtcbiAgICAgICAgICBhY3Rpb246IFwiL1wiLFxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICBlbmN0eXBlOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdGl0bGU6IFwidGl0bGVcIixcbiAgICAgICAgICAgIHRleHQ6IFwidGV4dFwiLFxuICAgICAgICAgICAgdXJsOiBcInVybFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGluamVjdFJlZ2lzdGVyOiAnc2NyaXB0JyxcbiAgICAgIHN0cmF0ZWdpZXM6ICdnZW5lcmF0ZVNXJ1xuICAgIH0pXG4gIF0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J11cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICB2ZW5kb3I6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICAgICAgcm91dGVyOiBbJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgICAgICAgICBpY29uczogWydsdWNpZGUtcmVhY3QnXSxcbiAgICAgICAgICBtb3Rpb246IFsnZnJhbWVyLW1vdGlvbiddXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMseUNBQXlDO0FBQUEsUUFDeEQsZ0JBQWdCO0FBQUEsVUFDZDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSyxLQUFLO0FBQUEsY0FDaEM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxjQUNQLFdBQVc7QUFBQSxjQUNYLFlBQVk7QUFBQSxnQkFDVixZQUFZO0FBQUEsZ0JB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S0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUE7QUFBQSxVQUVBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQTtBQUFBLFVBRUE7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBO0FBQUEsVUFFQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQTtBQUFBLFVBRUE7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87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
