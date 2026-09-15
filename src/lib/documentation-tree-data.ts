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
    icon: Megaphone,
    items: [
      { title: 'Legal Notice Before Filing a Civil Case', icon: Envelope },
      { title: 'Caveat Filing', icon: Flag },
      { title: 'Public (Paper) Notice Drafting', icon: Newspaper },
    ],
  },
  {
    label: 'Agreements & Contracts',
    icon: Handshake,
    items: [
      { title: 'Prenuptial Agreements', icon: Users },
      { title: 'MOU Drafting', icon: FileText },
      { title: 'Import & Export Contracts', icon: Globe },
    ],
  },
  {
    label: 'Affidavits & Reports',
    icon: ClipboardText,
    items: [
      { title: 'Affidavit Drafting (All Types)', icon: Signature },
      { title: 'Legal Online Search Reports', icon: MagnifyingGlass },
      { title: 'Business Valuation & Mapping Reports', icon: ChartLine },
    ],
  },
  {
    label: 'Property & Land Matters',
    icon: MapTrifold,
    items: [
      { title: 'Sale Deed Drafting & Registration', icon: House },
      { title: 'NA Conversion of Agricultural Land', icon: Plant },
      { title: 'Land Satellite Mapping Reports', icon: Compass },
      { title: 'Tahasildar & Prant Office Matters', icon: Bank },
    ],
  },
] as const
