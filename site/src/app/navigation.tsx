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
    href: '#', 
    visible: true 
  },
  { 
    verb: 'Regenerate',
    rest: 'With Us',
    href: '#', 
    visible: true 
  },
  { 
    verb: 'Experience',
    rest: 'The Farm',
    href: '#', 
    visible: true 
  },
  { 
    verb: 'Learn',
    rest: 'About Our Produce',
    href: '#', 
    visible: true 
  },
  { 
    verb: 'Cook',
    rest: 'From The Hearth',
    href: '#', 
    visible: true 
  },
  { 
    verb: 'Read',
    rest: 'Out to Pasture',
    href: '#', 
    visible: true 
  },
  { 
    verb: 'Join',
    rest: 'Our Community',
    href: '#', 
    visible: false 
  }
];
