export type NavItem = {
  label?: string;
  verb?: string;
  rest?: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  visible?: boolean;
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/', visible: false },
  {
    verb: 'Discover',
    rest: 'Our Story',
    href: '/about',
    visible: true,
  },
  {
    verb: 'Regenerate',
    rest: 'With Us',
    href: '/regeneration',
    visible: true,
  },
  {
    verb: 'Experience',
    rest: 'The Farm',
    href: '#',
    visible: false,
  },
  {
    verb: 'Learn',
    rest: 'About Our Produce',
    href: '#',
    visible: false,
  },
  {
    verb: 'Cook',
    rest: 'From The Hearth',
    href: '#',
    visible: false,
  },
  {
    verb: 'Read',
    rest: 'Life on Pasture',
    href: '#',
    visible: true,
  },
  {
    verb: 'Join',
    rest: 'Our Community',
    href: '#',
    visible: false,
  },
];
