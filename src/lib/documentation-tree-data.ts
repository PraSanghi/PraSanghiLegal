import {
  Megaphone,
  Handshake,
  ClipboardText,
  MapTrifold,
  Envelope,
  Flag,
  Newspaper,
  Users,
  FileText,
  Globe,
  Signature,
  MagnifyingGlass,
  ChartLine,
  House,
  Plant,
  Compass,
  Bank,
} from '@phosphor-icons/react/dist/ssr'

export const documentationTree = [
  {
    label: 'Notices & Filings',
    labelHi: 'सूचनाएँ एवं दाखिले',
    icon: Megaphone,
    items: [
      {
        title: 'Legal Notice Before Filing a Civil Case',
        titleHi: 'सिविल वाद दायर करने से पूर्व विधिक सूचना',
        icon: Envelope,
      },
      { title: 'Caveat Filing', titleHi: 'केविएट दाखिल करना', icon: Flag },
      {
        title: 'Public (Paper) Notice Drafting',
        titleHi: 'सार्वजनिक (समाचार-पत्र) सूचना प्रारूपण',
        icon: Newspaper,
      },
    ],
  },
  {
    label: 'Agreements & Contracts',
    labelHi: 'अनुबंध एवं संविदाएँ',
    icon: Handshake,
    items: [
      { title: 'Prenuptial Agreements', titleHi: 'विवाह-पूर्व अनुबंध', icon: Users },
      { title: 'MOU Drafting', titleHi: 'समझौता ज्ञापन (एमओयू) प्रारूपण', icon: FileText },
      { title: 'Import & Export Contracts', titleHi: 'आयात-निर्यात संविदाएँ', icon: Globe },
    ],
  },
  {
    label: 'Affidavits & Reports',
    labelHi: 'शपथ-पत्र एवं रिपोर्ट',
    icon: ClipboardText,
    items: [
      {
        title: 'Affidavit Drafting (All Types)',
        titleHi: 'शपथ-पत्र प्रारूपण (सभी प्रकार)',
        icon: Signature,
      },
      { title: 'Legal Online Search Reports', titleHi: 'विधिक ऑनलाइन खोज रिपोर्ट', icon: MagnifyingGlass },
      {
        title: 'Business Valuation & Mapping Reports',
        titleHi: 'व्यवसाय मूल्यांकन एवं मानचित्रण रिपोर्ट',
        icon: ChartLine,
      },
    ],
  },
  {
    label: 'Property & Land Matters',
    labelHi: 'संपत्ति एवं भूमि संबंधी मामले',
    icon: MapTrifold,
    items: [
      {
        title: 'Sale Deed Drafting & Registration',
        titleHi: 'विक्रय-पत्र प्रारूपण एवं पंजीकरण',
        icon: House,
      },
      {
        title: 'NA Conversion of Agricultural Land',
        titleHi: 'कृषि भूमि का अकृषिक रूपांतरण',
        icon: Plant,
      },
      { title: 'Land Satellite Mapping Reports', titleHi: 'भूमि उपग्रह मानचित्रण रिपोर्ट', icon: Compass },
      {
        title: 'Tahasildar & Prant Office Matters',
        titleHi: 'तहसीलदार एवं प्रांत कार्यालय संबंधी मामले',
        icon: Bank,
      },
    ],
  },
] as const
