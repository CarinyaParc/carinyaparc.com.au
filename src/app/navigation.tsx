export type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  visible?: boolean;
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/', visible: false },
  { label: 'Our Farm', href: '/about', visible: false },
  { label: 'Regeneration Project', href: '/regeneration', visible: false },
  { label: 'Life on the Land', href: '/blog', visible: false },
];
