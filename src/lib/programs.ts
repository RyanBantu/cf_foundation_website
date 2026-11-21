import { images } from "./site";

export const programs = [
  {
    id: "awareness",
    number: "01",
    title: "Medical Awareness Camps",
    short: "Teaching villages to spot the warning signs of anaemia, high blood pressure and diabetes early.",
    image: images.awareness,
    body: [
      "Across India, many people don't know they're ill until the illness is serious. Conditions like anaemia, high blood pressure and diabetes cause no pain for years, so people don't see a doctor until it's urgent.",
      "Our awareness camps visit villages, schools and community halls. We explain in plain language what these conditions are, which everyday habits make them worse, and why a simple check-up can save a life.",
    ],
    points: [
      "Sessions on diet, salt, sugar and everyday habits",
      "Recognising warning signs early",
      "Women's and children's health, including anaemia",
      "Why regular check-ups matter, even when you feel fine",
    ],
  },
  {
    id: "medical-camps",
    number: "02",
    title: "Free Medical Camps & PHC Connection",
    short: "Free screening and treatment in rural areas, plus a link to the local Primary Health Centre for ongoing care.",
    image: images.medicalCamp,
    body: [
      "Many people can't afford a trip to the hospital, let alone the medicines. Our free medical camps take doctors, screening and basic treatment straight to rural communities.",
      "A single visit isn't enough, so we connect every patient to their local Primary Health Centre (PHC). That way they keep getting follow-up care, medicines and support from health professionals close to home.",
    ],
    points: [
      "Free screening for anaemia, blood pressure and blood sugar",
      "Consultations and basic treatment from qualified doctors",
      "Medicines for families who cannot afford them",
      "Referral and hand-over to the local PHC for follow-up",
    ],
  },
  {
    id: "bionics",
    number: "03",
    title: "Engineered Solutions & Affordable Bionics",
    short: "Designing low-cost bionic and prosthetic limbs for people with amputations in villages and across the country.",
    image: images.bionics,
    body: [
      "Losing a limb can mean losing a livelihood, and most families can't afford a modern prosthetic. Ryan Bantu, our co-founder, saw this need and started engineering bionics with his mechanical engineering background.",
      "Our goal is simple: bionic limbs that are affordable, tough enough for daily rural life, and easy to repair locally, so people can get back to work, school and family life.",
    ],
    points: [
      "Low-cost bionic and prosthetic limb design",
      "Built for real conditions: farms, heat, dust and long walks",
      "Fitted and adjusted with each person",
      "Designed to be maintained and repaired locally",
    ],
  },
];
