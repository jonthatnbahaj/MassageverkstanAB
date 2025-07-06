// Performance Monitoring and Optimization Utilities
// Industry-leading PWA performance standards

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observer: PerformanceObserver | null = null;

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  constructor() {
    this.initializeObserver();
    this.measureCoreWebVitals();
  }

  private initializeObserver() {
    if ('PerformanceObserver' in window) {
      try {
        this.observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.processEntry(entry);
          }
        });

        // Observe all performance entry types
        this.observer.observe({ 
          entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift']
        });
      } catch (error) {
        console.warn('Performance Observer not supported:', error);
      }
    }
  }

  private processEntry(entry: PerformanceEntry) {
    switch (entry.entryType) {
      case 'navigation':
        this.processNavigationEntry(entry as PerformanceNavigationTiming);
        break;
      case 'paint':
        this.processPaintEntry(entry as PerformancePaintTiming);
        break;
      case 'largest-contentful-paint':
        this.metrics.set('LCP', entry.startTime);
        break;
      case 'first-input':
        this.metrics.set('FID', (entry as any).processingStart - entry.startTime);
        break;
      case 'layout-shift':
        if (!(entry as any).hadRecentInput) {
          const currentCLS = this.metrics.get('CLS') || 0;
          this.metrics.set('CLS', currentCLS + (entry as any).value);
        }
        break;
    }
  }

  private processNavigationEntry(entry: PerformanceNavigationTiming) {
    this.metrics.set('TTFB', entry.responseStart - entry.fetchStart);
    this.metrics.set('DOM_LOAD', entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart);
    this.metrics.set('WINDOW_LOAD', entry.loadEventEnd - entry.loadEventStart);
    this.metrics.set('DNS_LOOKUP', entry.domainLookupEnd - entry.domainLookupStart);
    this.metrics.set('TCP_CONNECT', entry.connectEnd - entry.connectStart);
  }

  private processPaintEntry(entry: PerformancePaintTiming) {
    if (entry.name === 'first-paint') {
      this.metrics.set('FP', entry.startTime);
    } else if (entry.name === 'first-contentful-paint') {
      this.metrics.set('FCP', entry.startTime);
    }
  }

  private measureCoreWebVitals() {
    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    let clsEntries: any[] = [];

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsEntries.push(entry);
          clsValue += (entry as any).value;
        }
      }
      this.metrics.set('CLS', clsValue);
    });

    try {
      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (error) {
      console.warn('Layout shift observation not supported');
    }
  }

  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  // Get performance score based on Core Web Vitals
  getPerformanceScore(): { score: number; grade: string; details: Record<string, any> } {
    const lcp = this.metrics.get('LCP') || 0;
    const fid = this.metrics.get('FID') || 0;
    const cls = this.metrics.get('CLS') || 0;
    const fcp = this.metrics.get('FCP') || 0;
    const ttfb = this.metrics.get('TTFB') || 0;

    // Scoring based on Google's thresholds
    const lcpScore = lcp <= 2500 ? 100 : lcp <= 4000 ? 50 : 0;
    const fidScore = fid <= 100 ? 100 : fid <= 300 ? 50 : 0;
    const clsScore = cls <= 0.1 ? 100 : cls <= 0.25 ? 50 : 0;
    const fcpScore = fcp <= 1800 ? 100 : fcp <= 3000 ? 50 : 0;
    const ttfbScore = ttfb <= 800 ? 100 : ttfb <= 1800 ? 50 : 0;

    const totalScore = (lcpScore + fidScore + clsScore + fcpScore + ttfbScore) / 5;
    
    let grade = 'F';
    if (totalScore >= 90) grade = 'A';
    else if (totalScore >= 80) grade = 'B';
    else if (totalScore >= 70) grade = 'C';
    else if (totalScore >= 60) grade = 'D';

    return {
      score: Math.round(totalScore),
      grade,
      details: {
        LCP: { value: lcp, score: lcpScore, threshold: '≤ 2.5s' },
        FID: { value: fid, score: fidScore, threshold: '≤ 100ms' },
        CLS: { value: cls, score: clsScore, threshold: '≤ 0.1' },
        FCP: { value: fcp, score: fcpScore, threshold: '≤ 1.8s' },
        TTFB: { value: ttfb, score: ttfbScore, threshold: '≤ 800ms' }
      }
    };
  }

  // Report metrics to analytics (if needed)
  reportMetrics() {
    const metrics = this.getMetrics();
    const score = this.getPerformanceScore();
    
    console.log('🚀 Performance Metrics:', {
      ...metrics,
      score: score.score,
      grade: score.grade
    });

    // Send to analytics service if configured
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metrics', {
        custom_map: { metric1: 'lcp', metric2: 'fid', metric3: 'cls' },
        metric1: metrics.LCP,
        metric2: metrics.FID,
        metric3: metrics.CLS,
        performance_score: score.score
      });
    }
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Resource loading optimization
export class ResourceOptimizer {
  static preloadCriticalResources(resources: string[]) {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      
      if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (resource.endsWith('.js')) {
        link.as = 'script';
      } else if (resource.match(/\.(png|jpg|jpeg|webp|svg)$/)) {
        link.as = 'image';
      } else if (resource.match(/\.(woff2|woff|ttf)$/)) {
        link.as = 'font';
        link.crossOrigin = 'anonymous';
      }
      
      link.href = resource;
      document.head.appendChild(link);
    });
  }

  static lazyLoadImages() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  static optimizeScrollPerformance() {
    let ticking = false;

    function updateScrollPosition() {
      // Perform scroll-related updates here
      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
  }
}

// Initialize performance monitoring
export function initializePerformanceMonitoring() {
  const monitor = PerformanceMonitor.getInstance();
  
  // Report metrics after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      monitor.reportMetrics();
    }, 1000);
  });

  // Preload critical resources
  ResourceOptimizer.preloadCriticalResources([
    '/logo.png',
    '/staff/Ingmar.png',
    '/staff/Tobias.png'
  ]);

  // Initialize optimizations
  ResourceOptimizer.lazyLoadImages();
  ResourceOptimizer.optimizeScrollPerformance();

  return monitor;
}