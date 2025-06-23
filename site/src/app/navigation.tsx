export type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  visible?: boolean;
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/', visible: false },
  { label: 'Our Farm', href: '/about', visible: true },
  { label: 'Regeneration Project', href: '/regeneration', visible: true },
  { label: 'Life on the Land', href: '/blog', visible: false },
];
