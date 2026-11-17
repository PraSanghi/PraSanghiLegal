// Context-matched photography for banners and hero slides (client review:
// "relevant photos everywhere ... replace all the photos based on the
// context"). Every ID below was checked by eye before use. Swap in the
// firm's own photography (office, team, courts) when the client sends it.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`

export const siteImages = {
  // Banners
  about: u('1436450412740-6b988f486c6b'), // neoclassical court columns
  visionValues: u('1589829545856-d10d557cf95f'), // Lady Justice with scales
  practiceAreas: u('1589994965851-a8f479c573a9'), // Lady Justice, light ground
  people: u('1505664194779-8beaceb93744'), // law library with busts
  insights: u('1479142506502-19b3a3b7ff33'), // bound law reports
  media: u('1504711434969-e33886168f5c'), // business newspapers
  careers: u('1507679799987-c73779587ccf'), // advocate in formal suit
  contact: u('1528747045269-390fe33c19f2'), // "CONTACT" on navy
  contactDesk: u('1450101499163-c8848c66ca85'), // signing a document
  // Home hero slides
  heroPractice: u('1589829545856-d10d557cf95f', 1200),
  heroInsights: u('1479142506502-19b3a3b7ff33', 1200),
  heroPeople: u('1507679799987-c73779587ccf', 1200),
  heroVision: u('1436450412740-6b988f486c6b', 1200),
} as const
