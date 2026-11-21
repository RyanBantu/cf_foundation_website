// Central place for site content you may want to edit.

export const site = {
  name: "Christopher Foundation",
  tagline: "A better future through medicine, education and care.",
  motto:
    "To build a better future by bringing awareness, medicine and education to every village — and connecting people to the local health professionals who can care for them.",
  // TODO: replace with the foundation's real contact details
  email: "contact@christopherfoundation.org",
  phone: "",
  location: "India",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Work" },
  { href: "/stories", label: "Christopher's Story" },
  { href: "/get-involved", label: "Get Involved" },
];

// Drop your photos into /public/images using these file names.
// Until a file exists, a styled placeholder is shown instead.
export const images = {
  hero: "/images/hero.jpg",
  awareness: "/images/awareness-camp.jpg",
  medicalCamp: "/images/medical-camp.jpg",
  bionics: "/images/bionics.jpg",
  christopher: "/images/christopher.jpg",
  ryan: "/images/ryan.jpg",
  salome: "/images/salome.jpg",
  story: "/images/story.jpg",
  community: "/images/community.jpg",
};

export const team = [
  {
    name: "Christopher Stanley Bantu",
    role: "Founder & Managing Director",
    image: images.christopher,
    bio: "Christopher started the foundation after his own health scare. Undiagnosed diabetes and everyday eating habits led to an angioplasty. He wants to make sure fewer families learn about their health this late.",
  },
  {
    name: "Ryan Bantu",
    role: "Co-Founder & Chief Engineer",
    image: images.ryan,
    bio: "A mechanical engineer who saw how few people could afford prosthetics. Ryan leads our engineered solutions work: designing affordable bionic limbs for villagers and people with amputations across India.",
  },
  {
    name: "Salome Bantu",
    role: "Chief Medical Director",
    image: images.salome,
    bio: "Salome leads the medical side of the foundation. She plans our free medical camps and screenings, oversees treatment, and makes sure every patient is connected to their local Primary Health Centre.",
  },
];
