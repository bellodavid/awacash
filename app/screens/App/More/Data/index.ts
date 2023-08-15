interface MoreSectionProps {
  title: string;
  route?: string;
  color: string;
  icon: IconName;
  id: string;
}

export const moreSection: MoreSectionProps[] = [
  {
    color: '#2793EB',
    icon: 'user',
    id: 'personal-info',
    route: '',
    title: 'Personal Information',
  },
  {
    color: '#254DDC',
    icon: 'trend-up',
    id: 'upgrade',
    route: '',
    title: 'Upgrade Account',
  },
  {
    color: '#299264',
    icon: 'lock',
    id: 'security',
    route: '',
    title: 'Security Settings',
  },
  {
    color: '#4B7DF3',
    icon: 'share',
    id: 'referral',
    route: '',
    title: 'Share My Referral ID',
  },
  {
    color: '#9930B4',
    icon: 'document',
    id: 'statement',
    route: '',
    title: 'Request Statement',
  },
  {
    color: '#4460F1',
    icon: 'shield-security',
    id: 'privacy',
    route: '',
    title: 'Privacy Policy',
  },
  {
    color: '#2AAE74',
    icon: 'document-normal',
    id: 'terms',
    route: '',
    title: 'Terms & Conditions',
  },
  {
    color: '#2793EB',
    icon: 'message-question-outline',
    id: 'faq',
    route: '',
    title: 'FAQ',
  },
  {
    color: '#1400FF',
    icon: 'message-question',
    id: 'help',
    route: '',
    title: 'Help',
  },
  {
    color: '#E14413',
    icon: 'logout',
    id: 'logout',
    title: 'Logout',
  },
];
