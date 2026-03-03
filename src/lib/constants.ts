export const BRAND_NAME = "BRANDSEN";
export const LOGO_URL = "https://ibb.co/b5KFzxRS";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    megaMenu: [
      {
        category: "DIGITAL MARKETING",
        items: [
          { name: "Performance Marketing", slug: "performance-marketing" },
          { name: "SEO", slug: "seo" },
          { name: "Social Media Management", slug: "social-media-management" },
          { name: "Conversion Optimization", slug: "conversion-optimization" },
          { name: "Digital Campaigns", slug: "digital-campaigns" },
        ]
      },
      {
        category: "BRANDING & CREATIVE",
        items: [
          { name: "Brand Identity", slug: "brand-identity" },
          { name: "Graphic Designing", slug: "graphic-designing" },
          { name: "Creative Writing", slug: "creative-writing" },
          { name: "Video Editing", slug: "video-editing" },
          { name: "Content Strategy", slug: "content-strategy" },
        ]
      },
      {
        category: "WEB & APP DEVELOPMENT",
        items: [
          { name: "Corporate Websites", slug: "corporate-websites" },
          { name: "E-Commerce Development", slug: "e-commerce-development" },
          { name: "Web Applications", slug: "web-applications" },
          { name: "Mobile App Development", slug: "mobile-app-development" },
          { name: "UI/UX Design", slug: "ui-ux-design" },
        ]
      },
      {
        category: "SOFTWARE & IT",
        items: [
          { name: "Custom Software Development", slug: "custom-software-development" },
          { name: "CRM Systems", slug: "crm-systems" },
          { name: "ERP Systems", slug: "erp-systems" },
          { name: "Cloud Infrastructure", slug: "cloud-infrastructure" },
          { name: "IT Consulting", slug: "it-consulting" },
        ]
      }
    ]
  },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export const STATS = [
  { label: "Projects Delivered", value: 450, suffix: "+" },
  { label: "Client Retention Rate", value: 98, suffix: "%" },
  { label: "Campaign ROI Avg", value: 320, suffix: "%" },
  { label: "Years of Experience", value: 12, suffix: "+" },
];

export const SERVICES_DATA = {
  "performance-marketing": {
    title: "Performance Marketing",
    description: "Data-driven strategies to maximize your ROI and scale your business growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
  },
  // ... more will be added
};
