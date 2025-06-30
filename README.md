# Massageverkstan i Jönköping AB - Professionell Massage & Välmående

En modern, responsiv bokningssystem för Massageverkstan i Jönköping AB. Byggd med React, TypeScript och Tailwind CSS.

## Funktioner

- 🌿 Modern, responsiv design med lugnande spa-färger
- 📱 Mobil-först approach med PWA-stöd
- 🔒 Säker iframe-bokningsintegration med BokaDirekt
- 🌐 Svenskt språkstöd
- ⚡ Snabb laddning med optimerad prestanda
- 🎭 Mjuka animationer med Framer Motion
- 💆 Massagebehandlingshanteringssystem
- 👥 Terapeutvisning med certifieringar (Ingmar & Tobias)
- ⭐ Kundrecensioner
- 📍 Plats- och kontaktinformation
- 🔐 Integritetspolicy och användarvillkor

## Snabb installation

1. **Uppdatera företagskonfiguration**
   
   Redigera `src/config/business.ts` med dina företagsdetaljer:
   
   ```typescript
   export const businessConfig: BusinessConfig = {
     name: "Massageverkstan i Jönköping AB",
     tagline: "Professionell Massage & Välmående",
     description: "Din beskrivning...",
     phone: "+46 36 123 45 67",
     email: "info@massageverkstan.se",
     address: {
       street: "Wellness Gatan 15",
       postalCode: "553 20",
       city: "Jönköping",
       country: "Sverige"
     },
     // ... mer konfiguration
   };
   ```

2. **Uppdatera behandlingar**
   
   Alla massagebehandlingar är redan konfigurerade med riktiga BokaDirekt-länkar för Ingmar och Tobias.

3. **Lägg till din logotyp**
   
   Ersätt `/public/logo.png` med din företagslogotyp.

4. **Uppdatera terapeutinformation**
   
   Redigera `staff`-arrayen i `business.ts` och lägg till terapeutfoton i `/public/staff/`.

5. **Anpassa recensioner**
   
   Uppdatera `reviews`-arrayen med riktiga kundrecensioner.

## Filstruktur

```
src/
├── components/          # React-komponenter
├── config/
│   └── business.ts     # Huvudkonfigurationsfil
├── utils/              # Hjälpfunktioner
└── ...

public/
├── logo.png           # Din företagslogotyp
├── staff/             # Terapeutfoton
└── ...
```

## Konfigurerade behandlingar

Alla massagebehandlingar är redan konfigurerade med riktiga BokaDirekt-länkar:

### Massage med Ingmar
- Massage 30 min - 30 min, 590 kr
- Massage 45 min - 45 min, 795 kr
- Massage 60 min - 60 min, 899 kr

### Massage med Tobias
- Massage 30 min - 30 min, 590 kr
- Massage 45 min - 45 min, 795 kr
- Massage 60 min - 60 min, 899 kr

### Kurser & Specialbehandlingar
- Kurs i massage (Ingmar) - 90 min, 1 990 kr
- Hälsoresurs 25 min (Tobias) - 25 min, Varierande pris
- Hälsoresurs 40 min (Tobias) - 40 min, Varierande pris
- Hälsoresurs 50 min (Tobias) - 50 min, Varierande pris

## Anpassning

### Färger och tema

Uppdatera temafärgerna i `src/config/business.ts`:

```typescript
theme: {
  primaryColor: "#2D5A4F",    // Deep forest green
  secondaryColor: "#4A7C59",  // Medium sage green
  accentColor: "#8FBC8F"      // Soft sage green
}
```

### Öppettider

Konfigurera dina öppettider i `openingHours`-objektet.

## BokaDirekt-integration

Systemet stöder iframe-integration med BokaDirekt. Alla boknings-URL:er är redan konfigurerade med riktiga länkar från Massageverkstan i Jönköping AB.

## Deployment

Systemet är redo för deployment på:
- Netlify (konfiguration inkluderad)
- Vercel (konfiguration inkluderad)
- Vilken statisk hosting-tjänst som helst

## Utveckling

```bash
# Installera beroenden
npm install

# Starta utvecklingsserver
npm run dev

# Bygg för produktion
npm run build
```

## Webbläsarstöd

- Moderna webbläsare (Chrome, Firefox, Safari, Edge)
- Mobila webbläsare (iOS Safari, Chrome Mobile)
- PWA-stöd för app-liknande upplevelse

## Säkerhetsfunktioner

- Content Security Policy (CSP)
- Säker iframe-sandboxing
- XSS-skydd
- Konsolskydd (valfritt)

## Licens

Detta system tillhandahålls som det är för kommersiell och personlig användning. Anpassa det för dina affärsbehov.

## Support

För anpassningshjälp eller frågor, se komponentdokumentationen i koden.