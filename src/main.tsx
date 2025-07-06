import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize performance monitoring
import { initializePerformanceMonitoring } from './utils/performance';

// Initialize performance monitoring for PWA optimization
initializePerformanceMonitoring();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);