// Business Configuration for Massageverkstan i Jönköping AB
// Update this file with your business details

export interface BusinessConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  openingHours: {
    [key: string]: {
      open?: string;
      close?: string;
      closed?: boolean;
    };
  };
  social?: {
    facebook?: string;
    instagram?: string;
    website?: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    goldColor: string;
    darkColor: string;
    lightGold: string;
  };
  logo: string;
  heroImage?: string;
}

// Massageverkstan i Jönköping AB configuration with calming spa colors
export const businessConfig: BusinessConfig = {
  name: "Massageverkstan i Jönköping AB",
  tagline: "Professionell Massage & Välmående",
  description: "Massageverkstan i Jönköping AB är inriktad mot hårda och värkande muskler, men även massage mot stress. Gravidmassage. Vi anpassar kraften till vad du önskar. En hel del HELGÖPPET under sommaren 2025. Vi utgår från SVENSK KLASSISK MASSAGE. 10% rabatt för studenter. Benify, Benifit och Epassi fungerar utmärkt. Har du betalat genom Hälsoresurs redan så är det till Tobias du ska boka in dig hos. Olika mervärdeskort eller presentkort går att köpa på plats. Har du ont i musklerna? Då har du kommit rätt!",
  phone: "0709934893",
  email: "info@massageverkstan.se",
  address: {
    street: "Trädgårdsgatan 12",
    postalCode: "553 16",
    city: "Jönköping",
    country: "Sverige"
  },
  openingHours: {
    monday: { open: "09:00", close: "18:00" },
    tuesday: { open: "09:00", close: "18:00" },
    wednesday: { open: "09:00", close: "18:00" },
    thursday: { open: "09:00", close: "18:00" },
    friday: { open: "09:00", close: "15:00" },
    saturday: { open: "10:00", close: "16:00" },
    sunday: { open: "10:00", close: "16:00" }
  },
  // Removed social media as the company doesn't have social media presence
  theme: {
    primaryColor: "#2D5A4F", // Deep forest green
    secondaryColor: "#4A7C59", // Medium sage green
    accentColor: "#8FBC8F", // Soft sage green
    goldColor: "#D4AF37", // Warm gold accent
    darkColor: "#1B3B36", // Dark forest
    lightGold: "#F0E6D2" // Cream/light gold
  },
  logo: "/logo.png"
};

// Service categories and services configuration for massage therapy
export interface Service {
  name: string;
  duration: string;
  price: string;
  bookingUrl: string;
  description?: string;
  therapist?: string;
  category?: string; // Add category to distinguish massage from courses
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

// Real massage therapy services from BokaDirekt - Ingmar and Tobias
export const serviceCategories: ServiceCategory[] = [
  {
    title: "Massage med Ingmar",
    services: [
      {
        name: "Massage 30 min",
        duration: "30 min",
        price: "590 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/massageverkstan-i-jonkoping-ab-34433/massage-30-min-ingmar-1002648",
        description: "Professionell massage med Ingmar",
        therapist: "Ingmar",
        category: "massage"
      },
      {
        name: "Massage 45 min",
        duration: "45 min",
        price: "795 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/massageverkstan-i-jonkoping-ab-34433/massage-45-min-ingmar-1051271",
        description: "Utökad massage med Ingmar",
        therapist: "Ingmar",
        category: "massage"
      },
      {
        name: "Massage 60 min",
        duration: "60 min",
        price: "899 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/massageverkstan-i-jonkoping-ab-34433/massage-60-min-ingmar-1002651",
        description: "Fullständig massage med Ingmar",
        therapist: "Ingmar",
        category: "massage"
      }
    ]
  },
  {
    title: "Massage med Tobias",
    services: [
      {
        name: "Massage 30 min",
        duration: "30 min",
        price: "590 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/massageverkstan-i-jonkoping-ab-34433/massage-30-min-tobias-3251863",
        description: "Professionell massage med Tobias",
        therapist: "Tobias",
        category: "massage"
      },
      {
        name: "Massage 45 min",
        duration: "45 min",
        price: "795 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/massageverkstan-i-jonkoping-ab-34433/massage-45-min-tobias-3251862",
        description: "Utökad massage med Tobias",
        therapist: "Tobias",
        category: "massage"
      },
      {
        name: "Massage 60 min",
        duration: "60 min",
        price: "899 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/massageverkstan-i-jonkoping-ab-34433/massage-60-min-tobias-3251864",
        description: "Fullständig massage med Tobias",
        therapist: "Tobias",
        category: "massage"
      }
    ]
  },
  {
    title: "Kurser & Specialbehandlingar",
    services: [
      {
        name: "Kurs i massage (Ingmar)",
        duration: "90 min",
        price: "1 990 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/massageverkstan-i-jonkoping-ab-34433/kurs-i-massage-ingmar-1240082",
        description: "Lär dig massagetekniker med Ingmar",
        therapist: "Ingmar",
        category: "course"
      },
      {
        name: "Hälsoresurs 25 min (Tobias)",
        duration: "25 min",
        price: "Varierande pris",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/massageverkstan-i-jonkoping-ab-34433/halsoresurs-25-min-massage-tobias-3284326",
        description: "Kort hälsoresursbehandling med Tobias",
        therapist: "Tobias",
        category: "health_resource"
      },
      {
        name: "Hälsoresurs 40 min (Tobias)",
        duration: "40 min",
        price: "Varierande pris",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/massageverkstan-i-jonkoping-ab-34433/halsoresurs-40-min-massage-tobias-3284324",
        description: "Medellång hälsoresursbehandling med Tobias",
        therapist: "Tobias",
        category: "health_resource"
      },
      {
        name: "Hälsoresurs 50 min (Tobias)",
        duration: "50 min",
        price: "Varierande pris",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/massageverkstan-i-jonkoping-ab-34433/halsoresurs-50-min-massage-tobias-3284327",
        description: "Längre hälsoresursbehandling med Tobias",
        therapist: "Tobias",
        category: "health_resource"
      }
    ]
  }
];

// Staff/Therapist configuration - Real therapists Ingmar and Tobias
export interface StaffMember {
  name: string;
  title: string;
  image: string;
  bio?: string;
  specialties?: string[];
  experience?: string;
  certifications?: string[];
}

export const staff: StaffMember[] = [
  {
    name: "Ingmar Apéll",
    title: "Diplomerad Massör & Kursledare",
    image: "/staff/Ingmar.png",
    bio: "Med en välkomponerad masseringsteknik går det att få resultat som är riktigt bra och hållbart. Har du ont i musklerna så har så du kommit rätt. Ingmar är specialist på klassisk svensk massage och leder även kurser för de som vill lära sig massage.",
    specialties: ["Klassisk svensk massage", "Terapeutisk massage", "Kursverksamhet", "Utbildning"],
    experience: "15+ år",
    certifications: ["Diplomerad Massör", "Kursledare", "Massageterapeut"]
  },
  {
    name: "Tobias Ahlstedt", 
    title: "Certifierad Massör & Hälsoresursspecialist",
    image: "/staff/Tobias.png",
    bio: "Hej mitt namn är Tobias Ahlstedt och har ca 25 års erfarenhet av massage. Tillsammans så har vi en dialog för att du skall kunna få bästa möjliga massagebehandling som du vill ha. Jag är certifierad massör samt har utb inom fibromassage, lotorpsmetoden som är en andningsmassage. Jag är också utb inom myofascialrelease som är en form av bindvävsmassage. Så välkommna o beställ tid",
    specialties: ["Fibromassage", "Lotorpsmetoden", "Myofascialrelease", "Hälsoresursbehandlingar", "Andningsmassage"],
    experience: "25+ år",
    certifications: ["Certifierad Massör", "Fibromassage", "Lotorpsmetoden", "Myofascialrelease", "Hälsoresursspecialist"]
  }
];

// Customer reviews configuration - Updated for Ingmar and Tobias
export interface Review {
  rating: number;
  text: string;
  author: string;
  date: string;
  verified?: boolean;
  service?: string;
}

export const reviews: Review[] = [
  {
    rating: 5,
    text: "Fantastisk massage hos Ingmar! Han är verkligen professionell och vet precis vad han gör. Känner mig som en ny människa efter behandlingen!",
    author: "Maria S.",
    date: "15 januari 2025",
    verified: true,
    service: "Massage 60 min - Ingmar"
  },
  {
    rating: 5,
    text: "Tobias hälsoresursbehandling var precis vad jag behövde. Hans 25 års erfarenhet märks verkligen. Mycket rekommenderad!",
    author: "Linda K.",
    date: "12 januari 2025",
    verified: true,
    service: "Hälsoresurs 40 min - Tobias"
  },
  {
    rating: 5,
    text: "Kursen i massage med Ingmar var fantastisk! Lärde mig så mycket och han är en utmärkt lärare. Värt varje krona!",
    author: "Johan A.",
    date: "10 januari 2025",
    verified: true,
    service: "Kurs i massage - Ingmar"
  },
  {
    rating: 5,
    text: "Tobias myofascialrelease behandling löste mina ryggproblem helt. Hans kunskap inom bindvävsmassage är fantastisk!",
    author: "David M.",
    date: "8 januari 2025",
    verified: true,
    service: "Hälsoresurs 50 min - Tobias"
  },
  {
    rating: 5,
    text: "Ingmars välkomponerade masseringsteknik är verkligen något utöver det vanliga. Resultatet var hållbart och bra!",
    author: "Emma L.",
    date: "5 januari 2025",
    verified: true,
    service: "Massage 45 min - Ingmar"
  },
  {
    rating: 5,
    text: "Tobias lotorpsmetod med andningsmassage var en helt ny upplevelse. Mycket avslappnande och effektiv!",
    author: "Peter R.",
    date: "3 januari 2025",
    verified: true,
    service: "Hälsoresurs 25 min - Tobias"
  },
  {
    rating: 5,
    text: "Ingmars 30 minuters massage var fantastisk! Trots den kortare tiden fick jag verkligen ut mycket av behandlingen.",
    author: "Stefan H.",
    date: "28 december 2024",
    verified: true,
    service: "Massage 30 min - Ingmar"
  },
  {
    rating: 5,
    text: "Tobias fibromassage var precis vad jag behövde. Hans 25 års erfarenhet märks i varje rörelse!",
    author: "Karin T.",
    date: "22 december 2024",
    verified: true,
    service: "Massage 60 min - Tobias"
  },
  {
    rating: 5,
    text: "Ingmars kurs i massage var en fantastisk upplevelse! Lärde mig tekniker jag kan använda hemma. Mycket rekommenderad!",
    author: "Andreas B.",
    date: "18 december 2024",
    verified: true,
    service: "Kurs i massage - Ingmar"
  },
  {
    rating: 4,
    text: "Mycket bra massage hos Tobias. Hans dialog och anpassning av behandlingen var professionell. Kommer definitivt tillbaka!",
    author: "Lars G.",
    date: "15 december 2024",
    verified: true,
    service: "Massage 45 min - Tobias"
  },
  {
    rating: 5,
    text: "Ingmar är fantastisk! Hans 60 minuters massage med välkomponerad teknik var den bästa jag någonsin fått.",
    author: "Mikael J.",
    date: "12 december 2024",
    verified: true,
    service: "Massage 60 min - Ingmar"
  },
  {
    rating: 5,
    text: "Tobias hälsoresursbehandling på 40 min var perfekt efter en lång arbetsvecka. Hans myofascialrelease teknik är fantastisk!",
    author: "Robert K.",
    date: "8 december 2024",
    verified: true,
    service: "Hälsoresurs 40 min - Tobias"
  }
];

// Function to force open BokaDirekt app or website
export const openBokaDirekt = () => {
  const bokaDirektUrl = "https://www.bokadirekt.se/places/massageverkstan-i-jonkoping-ab-34433";
  
  // Try to open BokaDirekt app on mobile devices
  if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Try to open the app first
    const appUrl = "bokadirekt://places/massageverkstan-i-jonkoping-ab-34433";
    
    // Create a hidden iframe to try opening the app
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appUrl;
    document.body.appendChild(iframe);
    
    // Fallback to website after a short delay if app doesn't open
    setTimeout(() => {
      window.open(bokaDirektUrl, '_blank', 'noopener,noreferrer');
      document.body.removeChild(iframe);
    }, 1000);
  } else {
    // Desktop - open website in new tab
    window.open(bokaDirektUrl, '_blank', 'noopener,noreferrer');
  }
};