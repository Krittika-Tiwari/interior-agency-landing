export type Plan = {
  name: string;
  price: string;
  period: string;
  theme: "light" | "dark";
  /** Optional line shown above the feature list */
  intro?: string;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    name: "Studio Starter",
    price: "[PRICE]",
    period: "3 months",
    theme: "light",
    features: [
      "Meta ads management",
      "One enquiry funnel with budget and timeline qualification",
      "CRM setup with basic follow-ups",
      "Consultation and site-visit booking calendar",
      "One creative refresh per month",
      "Monthly review call",
      "Weekly summary report",
    ],
  },
  {
    name: "Studio Growth",
    price: "[PRICE]",
    period: "3 months",
    theme: "dark",
    intro: "Everything in Studio Starter, plus:",
    features: [
      "Google ads management",
      "Advanced funnel testing",
      "Unlimited creative variations",
      "Lead scoring and multi-step follow-ups with no-show recovery",
      "Weekly strategy calls",
      "Priority WhatsApp and email support",
      "Dashboard for ad spend, cost per enquiry and booked consultations",
    ],
  },
];
