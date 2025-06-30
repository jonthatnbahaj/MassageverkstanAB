import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, ChevronUp, User, Award } from 'lucide-react';
import BookingIframe from './BookingIframe';
import { serviceCategories, staff, type Service } from '../config/business';

const BookingView: React.FC = () => {
  const [selectedTherapist, setSelectedTherapist] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const toggleTherapist = (therapistName: string) => {
    setSelectedTherapist(selectedTherapist === therapistName ? null : therapistName);
  };

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  const handleBookingClick = (service: Service) => {
    setSelectedService(service);
  };

  const closeBookingIframe = () => {
    setSelectedService(null);
  };

  // Get therapist services - ONLY MASSAGES (filter out courses and health resources)
  const getTherapistServices = (therapistName: string) => {
    const therapistServices: Service[] = [];
    serviceCategories.forEach(category => {
      category.services.forEach(service => {
        // Only include massage services for therapists
        if (service.therapist === therapistName && service.category === 'massage') {
          therapistServices.push(service);
        }
      });
    });
    return therapistServices;
  };

  // Get courses and special treatments (non-therapist specific)
  const getCoursesAndSpecialTreatments = () => {
    return serviceCategories.find(category => 
      category.title === "Kurser & Specialbehandlingar"
    );
  };

  // Clean animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const therapistCardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const serviceVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      <motion.div 
        className="p-4 max-w-4xl mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Therapist Cards - Simple Layout - ONLY MASSAGES */}
        <div className="space-y-3">
          {staff.map((therapist, index) => {
            const therapistServices = getTherapistServices(therapist.name.split(' ')[0]); // Use first name
            const isExpanded = selectedTherapist === therapist.name.split(' ')[0];
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-brand-accent transition-colors duration-300"
                variants={therapistCardVariants}
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Simple Therapist Header - Matching Reference */}
                <motion.button
                  onClick={() => toggleTherapist(therapist.name.split(' ')[0])}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center">
                    {/* Therapist Image - Simple Circle */}
                    <motion.div 
                      className="relative flex-shrink-0 mr-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-accent shadow-sm bg-gray-100">
                        <img 
                          src={therapist.image} 
                          alt={therapist.name} 
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            // Create fallback element
                            const fallback = document.createElement('div');
                            fallback.className = 'w-full h-full flex items-center justify-center text-brand-primary bg-gradient-to-br from-brand-accent to-brand-secondary text-lg font-bold';
                            fallback.textContent = therapist.name.split(' ').map(n => n[0]).join('');
                            target.parentNode?.appendChild(fallback);
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Simple Info Layout */}
                    <div className="text-left">
                      <motion.h4 
                        className="text-base font-bold text-brand-primary"
                        whileHover={{ color: "#8FBC8F" }}
                        transition={{ duration: 0.2 }}
                      >
                        {therapist.name}
                      </motion.h4>
                      <p className="text-sm text-gray-600">{therapist.title}</p>
                    </div>
                  </div>
                  
                  {/* Simple Expand Icon */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isExpanded ? (
                      <ChevronUp size={20} className="text-brand-accent" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-600" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Behandlingar Section - ONLY MASSAGES */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      className="border-t border-gray-100 bg-gray-50"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-4">
                        <h5 className="font-semibold text-brand-primary text-sm mb-3">Behandlingar</h5>
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: {
                              transition: {
                                staggerChildren: 0.05
                              }
                            }
                          }}
                          className="space-y-3"
                        >
                          {therapistServices.map((service, serviceIndex) => (
                            <motion.div 
                              key={serviceIndex} 
                              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                              variants={serviceVariants}
                              whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              <div className="flex justify-between items-start mb-3">
                                <h5 className="font-semibold text-brand-primary text-sm leading-tight flex-1 mr-3">
                                  {service.name}
                                </h5>
                                <div className="text-right flex-shrink-0">
                                  <motion.div 
                                    className="font-bold text-brand-accent text-sm"
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    {service.price}
                                  </motion.div>
                                </div>
                              </div>
                              
                              {service.description && (
                                <p className="text-xs text-gray-600 mb-3">{service.description}</p>
                              )}
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center text-gray-600">
                                  <Clock size={12} className="mr-1" />
                                  <span className="text-xs">{service.duration}</span>
                                </div>
                                <motion.button 
                                  onClick={() => handleBookingClick(service)}
                                  className="bg-brand-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-secondary transition-colors duration-200 shadow-md border border-brand-accent"
                                  whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "#8FBC8F",
                                    color: "#1B3B36"
                                  }}
                                  whileTap={{ scale: 0.95 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                  BOKA
                                </motion.button>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Courses & Special Treatments Section - SEPARATE */}
        {(() => {
          const coursesCategory = getCoursesAndSpecialTreatments();
          if (!coursesCategory) return null;

          return (
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-brand-accent transition-colors duration-300"
              variants={categoryVariants}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Category Header */}
              <motion.button
                onClick={() => toggleCategory(coursesCategory.title)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award size={20} className="text-brand-accent" />
                  </div>
                  <div className="text-left">
                    <motion.h4 
                      className="text-base font-bold text-brand-primary"
                      whileHover={{ color: "#8FBC8F" }}
                      transition={{ duration: 0.2 }}
                    >
                      {coursesCategory.title}
                    </motion.h4>
                    <span className="text-xs text-gray-500">
                      {coursesCategory.services.length} service{coursesCategory.services.length > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCategory === coursesCategory.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expandedCategory === coursesCategory.title ? (
                    <ChevronUp size={20} className="text-brand-accent" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-600" />
                  )}
                </motion.div>
              </motion.button>

              {/* Services List */}
              <AnimatePresence>
                {expandedCategory === coursesCategory.title && (
                  <motion.div 
                    className="border-t border-gray-100 bg-gray-50"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="p-4 space-y-3"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05
                          }
                        }
                      }}
                    >
                      {coursesCategory.services.map((service, serviceIndex) => (
                        <motion.div 
                          key={serviceIndex} 
                          className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                          variants={serviceVariants}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h5 className="font-semibold text-brand-primary text-sm leading-tight flex-1 mr-3">
                              {service.name}
                            </h5>
                            <div className="text-right flex-shrink-0">
                              <motion.div 
                                className="font-bold text-brand-accent text-sm"
                                whileHover={{ scale: 1.05 }}
                              >
                                {service.price}
                              </motion.div>
                            </div>
                          </div>
                          
                          {/* Therapist info */}
                          {service.therapist && (
                            <div className="flex items-center text-xs text-brand-secondary mb-2">
                              <User size={12} className="mr-1" />
                              <span>Med {service.therapist}</span>
                            </div>
                          )}
                          
                          {service.description && (
                            <p className="text-xs text-gray-600 mb-3">{service.description}</p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-600">
                              <Clock size={12} className="mr-1" />
                              <span className="text-xs">{service.duration}</span>
                            </div>
                            <motion.button 
                              onClick={() => handleBookingClick(service)}
                              className="bg-brand-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-secondary transition-colors duration-200 shadow-md border border-brand-accent"
                              whileHover={{ 
                                scale: 1.05,
                                backgroundColor: "#8FBC8F",
                                color: "#1B3B36"
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              BOKA
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })()}
      </motion.div>

      {/* Booking Iframe Modal */}
      <AnimatePresence>
        {selectedService && (
          <BookingIframe
            bookingUrl={selectedService.bookingUrl}
            serviceName={selectedService.name}
            onClose={closeBookingIframe}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingView;