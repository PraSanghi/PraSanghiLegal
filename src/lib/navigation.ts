export interface PrimaryNavItem {
  title: string
  titleHi: string
  href: string
}

export const primaryNav: PrimaryNavItem[] = [
  { title: 'About Us', titleHi: 'हमारे बारे में', href: '/about' },
  { title: 'Our Advocates', titleHi: 'हमारे अधिवक्ता', href: '/people' },
  { title: 'Legal Insights', titleHi: 'विधिक विश्लेषण', href: '/insights' },
  { title: 'Careers', titleHi: 'कैरियर', href: '/careers' },
  { title: 'Media Coverage', titleHi: 'मीडिया कवरेज', href: '/media' },
  { title: 'Contact Us', titleHi: 'संपर्क करें', href: '/contact' },
]
