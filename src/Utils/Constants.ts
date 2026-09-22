import { type LucideIcon, Layers, MessageSquareQuote, Award } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export const navItems: NavItem[] = [
  { label: 'Features', href: '#features', icon: Layers },
  { label: 'Testimonials', href: '#testimonials', icon: MessageSquareQuote },
  { label: 'Excellence', href: '#excel', icon: Award },
];