import { type LucideIcon, Sparkles, MessageSquareQuote, Award } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export const navItems: NavItem[] = [
  { label: 'Features', href: '#features', icon: Sparkles },
  { label: 'Testimonials', href: '#testimonials', icon: MessageSquareQuote },
  { label: 'Excellence', href: '#excel', icon: Award },
];