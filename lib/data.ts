// TIS site data — all sourced from tis.edu.in

export const NAV_ITEMS = [
  {
    label: "About TIS",
    href: "#about",
    dropdown: [
      { label: "Our Story", href: "#about" },
      { label: "Vision & Mission", href: "#about" },
      { label: "Leadership", href: "#about" },
      { label: "Campus", href: "#campus" },
    ],
  },
  {
    label: "Academics",
    href: "#academics",
    dropdown: [
      { label: "CBSE Curriculum", href: "#academics" },
      { label: "Classes IV–XII", href: "#academics" },
      { label: "University Counselling", href: "#academics" },
    ],
  },
  {
    label: "Boarding Life",
    href: "#boarding",
    dropdown: [
      { label: "Residential Life", href: "#boarding" },
      { label: "Meals & Nutrition", href: "#boarding" },
      { label: "Daily Routine", href: "#boarding" },
    ],
  },
  {
    label: "Beyond Academics",
    href: "#sports",
    dropdown: [
      { label: "Sports", href: "#sports" },
      { label: "Arts & Music", href: "#sports" },
      { label: "Clubs & Societies", href: "#sports" },
    ],
  },
  {
    label: "Admission",
    href: "#admission",
    dropdown: [
      { label: "How to Apply", href: "#admission" },
      { label: "Fee Structure", href: "#admission" },
      { label: "Contact Admissions", href: "#admission" },
    ],
  },
] as const;

export const STATS = [
  { value: "2012", label: "Established" },
  { value: "15+", label: "Olympic Sports" },
  { value: "IV–XII", label: "Classes Offered" },
  { value: "CBSE", label: "Affiliation" },
] as const;

export const SPORTS = [
  "Archery",
  "Swimming",
  "Polo",
  "Karate",
  "Yoga",
  "Dance",
  "Football",
  "Basketball",
  "Cricket",
  "Badminton",
  "Table Tennis",
  "Chess",
  "Athletics",
  "Shooting",
  "Horse Riding",
  "Rock Climbing",
] as const;

export const PROGRAMS = [
  {
    id: "academics",
    tag: "Academics",
    title: "CBSE Excellence",
    description:
      "Rigorous CBSE curriculum from Class IV to XII, with expert university counselling and one-to-one student support. Our teachers inspire curiosity and build critical thinkers.",
    icon: "🎓",
    color: "#b90124",
  },
  {
    id: "sports",
    tag: "Sports",
    title: "15+ Olympic Sports",
    description:
      "From polo and archery to swimming and football — sports at TIS isn't just a facility, it's the foundation. Every student discovers their athletic passion.",
    icon: "🏅",
    color: "#60bab1",
  },
  {
    id: "arts",
    tag: "Arts & Culture",
    title: "Creative Expression",
    description:
      "Music, dance, drama, painting — creativity thrives at TIS. We believe every student is an artist waiting to be discovered. Regular performances and exhibitions.",
    icon: "🎭",
    color: "#c09d59",
  },
  {
    id: "boarding",
    tag: "Residential",
    title: "Modern Boarding",
    description:
      "Safe, nurturing residential facilities with structured daily routines, healthy nutritious meals, and a warm community that feels like a home away from home.",
    icon: "🏡",
    color: "#8b5cf6",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "We feel supported in what we do and nudged further to do more. At Tulas, creativity finds its way.",
    author: "TIS Student",
    role: "Class XI",
    avatar: "S",
  },
  {
    id: 2,
    quote:
      "Tulas helped me thrive and become the best version of myself. It's more than a school — it's a place to belong.",
    author: "TIS Alumni",
    role: "Batch 2024",
    avatar: "A",
  },
  {
    id: 3,
    quote:
      "The holistic approach to education here is unmatched. My child has grown academically and personally beyond our expectations.",
    author: "TIS Parent",
    role: "Parent of Class X Student",
    avatar: "P",
  },
] as const;

export const FACILITIES = [
  {
    title: "Modern Classrooms",
    description: "Smart, tech-enabled learning spaces with interactive boards",
    icon: "🖥️",
  },
  {
    title: "Sports Complex",
    description: "Olympic-standard arenas, pools, and fields for 15+ sports",
    icon: "🏟️",
  },
  {
    title: "Science Labs",
    description: "Fully equipped labs for Physics, Chemistry, Biology & more",
    icon: "🔬",
  },
  {
    title: "Library & Media",
    description:
      "Extensive collection of books, digital resources, and quiet study zones",
    icon: "📚",
  },
  {
    title: "Performing Arts",
    description: "Dedicated studios for music, dance, drama, and visual arts",
    icon: "🎵",
  },
  {
    title: "Dining Hall",
    description:
      "Nutritious, diverse, and healthy meal programs for residential students",
    icon: "🍽️",
  },
] as const;

export const CONTACT = {
  phone: "+91-9837983791",
  phone2: "+91-9458319102",
  landline: "0135-2699444",
  landline2: "0135-2699666",
  email: "info@tis.edu.in",
  address:
    "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun – 248011, Uttarakhand",
  admissionPortal: "https://admission.tis.edu.in",
  social: {
    facebook: "https://www.facebook.com/tulasinternationalschool/",
    instagram: "https://www.instagram.com/tulasinternationalschool/",
    youtube: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
    twitter: "https://twitter.com/tulas_intschool",
    linkedin:
      "https://www.linkedin.com/school/tulas-international-school/",
  },
} as const;
