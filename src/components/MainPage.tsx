import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';
import BookingView from './BookingView';
import InfoView from './InfoView';
import { businessConfig } from '../config/business';

const MainPage: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'boka' | 'info'>('boka');
  const [isLoading, setIsLoading] = useState(true);

  // Check for navigation state to set the correct tab
  useEffect(() => {
    const state = location.state as { activeTab?: 'boka' | 'info' } | null;
    if (state?.activeTab) {
      setActiveTab(state.activeTab);
      // Clear the state to prevent issues on refresh
      window.history.replaceState({}, document.title);
    }
    
    // Simulate loading for smooth UX
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, [location.state]);

  // Preload critical resources
  useEffect(() => {
    const preloadImages = [
      businessConfig.logo,
      '/staff/Ingmar.png',
      '/staff/Tobias.png'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
        </div>
      );
    }
    
    switch (activeTab) {
      case 'boka':
        return <BookingView />;
      case 'info':
        return <InfoView />;
      default:
        return <BookingView />;
    }
  };

  // Clean animation variants
  const headerVariants = {
    hidden: { 
      y: -50, 
      opacity: 0
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.6
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
        delay: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const pageVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4
      }
    }
  };

  const logoVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 flex flex-col"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header - Clean and minimal with Massageverkstan branding */}
      <AnimatePresence mode="wait">
        {activeTab === 'boka' && (
          <motion.div 
            className="bg-brand-primary text-white py-4 px-4 shadow-lg sticky top-0 z-40 border-b border-brand-accent main-header"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="header"
            style={{
              // Ensure header can be pushed behind iframe modal on iOS
              position: 'sticky',
              zIndex: 40,
              // Add transform for stacking context
              WebkitTransform: 'translateZ(0)',
              transform: 'translateZ(0)',
              isolation: 'isolate'
            }}
          >
            <motion.div 
              className="max-w-4xl mx-auto flex items-center justify-center"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-8 h-8 mr-3 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden border border-brand-accent"
                variants={logoVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <img 
                  src={businessConfig.logo} 
                  alt={`${businessConfig.name} Logo`} 
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.3, 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <h1 className="text-lg md:text-xl font-bold text-brand-accent">
                  MASSAGEVERKSTAN
                </h1>
                <p className="text-xs text-brand-lightGold opacity-90">
                  I JÖNKÖPING AB
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area */}
      <div className={`flex-1 pb-20 overflow-y-auto ${activeTab === 'boka' ? '' : 'pt-0'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.6,
          delay: 0.2
        }}
      >
        <BottomNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
      </motion.div>
    </motion.div>
  );
};

export default MainPage;