export interface Course {
  id: string;
  name: string;
}

export interface CourseCategory {
  id: string;
  name: string;
  courses: Course[];
}

export const courseCategories: CourseCategory[] = [
  {
    id: "agriculture",
    name: "Agricultural Skills",
    courses: [
      { id: "crop-farming", name: "Basic Crop Farming (Cassava, Maize, Rice, Yam)" },
      { id: "vegetable-farming", name: "Vegetable Farming (Tomatoes, Pepper, Okra, Onion)" },
      { id: "climate-smart", name: "Climate-Smart Agriculture" },
      { id: "soil-management", name: "Soil Management & Fertility Improvement" },
      { id: "irrigation", name: "Irrigation & Water Management" },
      { id: "organic-farming", name: "Organic Farming Practices" },
      { id: "poultry", name: "Poultry Farming (Broilers & Layers)" },
      { id: "fish-farming", name: "Fish Farming (Catfish & Tilapia)" },
      { id: "goat-sheep", name: "Goat & Sheep Rearing" },
      { id: "pig-farming", name: "Pig Farming" },
      { id: "snail-farming", name: "Snail Farming" },
      { id: "bee-keeping", name: "Bee Keeping (Apiculture)" },
      { id: "cassava-processing", name: "Cassava Processing (Garri, Fufu, Starch)" },
      { id: "palm-oil", name: "Palm Oil Processing" },
      { id: "rice-processing", name: "Rice Processing & Milling" },
      { id: "fruit-processing", name: "Fruit Processing & Juice Production" },
      { id: "agribusiness", name: "Agribusiness Startup & Management" },
      { id: "coop-formation", name: "Cooperative Society Formation & Governance" },
      { id: "grants-loans", name: "Accessing Agricultural Grants & Loans" },
    ],
  },
  {
    id: "tech",
    name: "Tech Skills",
    courses: [
      { id: "computer-basics", name: "Basic Computer Appreciation" },
      { id: "ms-office", name: "Microsoft Office (Word, Excel, PowerPoint)" },
      { id: "internet-email", name: "Internet & Email Skills" },
      { id: "website-design", name: "Website Design (HTML, CSS, JavaScript)" },
      { id: "wordpress", name: "WordPress Website Development" },
      { id: "frontend", name: "Front-End Web Development" },
      { id: "backend", name: "Back-End Web Development (PHP / Python)" },
      { id: "fullstack", name: "Full-Stack Web Development" },
      { id: "data-analysis", name: "Data Analysis" },
      { id: "digital-marketing", name: "Digital Marketing Fundamentals" },
      { id: "social-media", name: "Social Media Management" },
      { id: "content-creation", name: "Content Creation & Branding" },
      { id: "seo", name: "Search Engine Optimization (SEO)" },
      { id: "graphic-design", name: "Graphic Design (Canva & Photoshop)" },
      { id: "video-editing", name: "Video Editing (CapCut / Premiere Pro)" },
      { id: "ui-ux", name: "UI/UX Design Fundamentals" },
      { id: "cyber-security", name: "Cyber Security" },
      { id: "ai-automation", name: "AI & Automation" },
    ],
  },
  {
    id: "business",
    name: "Business Skills",
    courses: [
      { id: "entrepreneurship", name: "Entrepreneurship & Business Planning" },
      { id: "cooperative-mgmt", name: "Cooperative Management" },
      { id: "financial-literacy", name: "Financial Literacy for Small Businesses" },
      { id: "accounting-basics", name: "Accounting Software (QuickBooks / Wave)" },
      { id: "business-automation", name: "Business Automation Tools" },
      { id: "ecommerce", name: "E-Commerce Store Setup" },
      { id: "digital-payments", name: "Digital Payments & FinTech" },
      { id: "crm-tools", name: "CRM Tools for Cooperatives" },
      { id: "market-access", name: "Market Access & Distribution Channels" },
      { id: "risk-management", name: "Agricultural Insurance & Risk Management" },
    ],
  },
  {
    id: "vocational",
    name: "Vocational Skills",
    courses: [
      { id: "fashion", name: "Fashion Design & Tailoring" },
      { id: "catering", name: "Catering & Food Business" },
      { id: "soap-making", name: "Soap & Cosmetics Production" },
      { id: "photography", name: "Photography for Business" },
      { id: "event-planning", name: "Event Planning & Management" },
      { id: "hairdressing", name: "Hairdressing & Cosmetology" },
      { id: "leather-works", name: "Leather Works & Craft" },
      { id: "carpentry", name: "Furniture Making & Carpentry" },
    ],
  },
];

export const getCoursesByCategory = (categoryId: string): Course[] => {
  const category = courseCategories.find((c) => c.id === categoryId);
  return category?.courses || [];
};
