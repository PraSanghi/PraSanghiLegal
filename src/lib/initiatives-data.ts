export type InitiativeTheme = 'Safety' | 'Education' | 'Health' | 'Environment' | 'Sport' | 'Compassion'

export const INITIATIVE_THEME_HI: Record<InitiativeTheme, string> = {
  Safety: 'सुरक्षा',
  Education: 'शिक्षा',
  Health: 'स्वास्थ्य',
  Environment: 'पर्यावरण',
  Sport: 'खेल',
  Compassion: 'सेवा',
}

export interface InitiativeRecord {
  slug: string
  theme: InitiativeTheme
  /** Publish date on the site — used for sorting and <time>. */
  date: string
  /** When the work happened, if the source says so (free text, both languages). */
  when?: string
  whenHi?: string
  headline: string
  headlineHi: string
  excerpt: string
  excerptHi: string
  /** Local path under /public. Leave unset until the client supplies the photo. */
  image?: string
  body: string[]
  bodyHi: string[]
  /** Instagram posts this story was written from; also where the photos live. Not rendered. */
  sourcePosts: string[]
}

// Stories of PraSanghi Social Welfare Society / PraSanghi Foundation, written
// from the society's own Instagram posts (instagram.com/prasanghi.bharat,
// read Nov 2026). Most posts carry no caption, so the copy only states what
// the photos, posters, and captions themselves show — no invented figures,
// dates, or quotes. Personal phone numbers from the posts are deliberately
// left out; enquiries go through the site's contact page.
//
// IMAGES: Instagram CDN links are signed and expire, so they cannot be
// hot-linked. Save the photos from `sourcePosts` into
// /public/initiatives/<slug>.jpg and set `image` — until then the pages show
// a branded placeholder.
export const initiatives: InitiativeRecord[] = [
  {
    slug: 'self-defence-for-deaf-and-mute-children',
    theme: 'Safety',
    date: '2026-11-02',
    headline: 'Self-Defence Training for 100 Deaf and Mute Children',
    headlineHi: '100 मूक-बधिर बच्चों के लिए आत्मरक्षा प्रशिक्षण',
    excerpt:
      'A one-day session that set out to teach self-defence — and ended up revealing just how quickly these children learn.',
    excerptHi:
      'एक दिवसीय सत्र, जिसका उद्देश्य आत्मरक्षा सिखाना था — और जिसने दिखाया कि ये बच्चे कितनी तेज़ी से सीखते हैं।',
    body: [
      'PraSanghi Social Welfare Society organised a self-defence training session for one hundred deaf and mute children. Skills that usually take a long time to pick up were learned by these children in a single day — and the energy and talent they brought to the session won over everyone present.',
      'Children who cannot hear or speak are among the most exposed when it comes to their personal safety, and among the least served by conventional training. Instruction at the session was adapted so that it could be followed by watching and repeating, giving every child the same chance to practise each technique.',
      'For the Society, the goal goes beyond self-defence alone. Sport is a proven route to confidence, fitness, and — for the most talented — competitive opportunities and careers. Identifying that talent early, and giving it direction, is the larger purpose behind the programme.',
      'The Society’s message from the day was simple: every child has a talent; what they need is the right opportunity and the right direction. Schools and institutions that would like to host a similar session are welcome to get in touch.',
    ],
    bodyHi: [
      'प्रासंघी सोशल वेलफेयर सोसायटी द्वारा सौ मूक-बधिर बच्चों के लिए आत्मरक्षा प्रशिक्षण सत्र का आयोजन किया गया। जिस कौशल को सीखने में सामान्यतः लंबा समय लगता है, उसे इन बच्चों ने एक ही दिन में सीख लिया — तथा सत्र में उनके उत्साह और प्रतिभा ने उपस्थित सभी का मन जीत लिया।',
      'जो बच्चे सुन या बोल नहीं सकते, वे अपनी व्यक्तिगत सुरक्षा के मामले में सर्वाधिक असुरक्षित होते हैं, तथा पारंपरिक प्रशिक्षण उन तक सबसे कम पहुँच पाता है। अतः सत्र में प्रशिक्षण को इस प्रकार ढाला गया कि उसे देखकर और दोहराकर सीखा जा सके, ताकि प्रत्येक बच्चे को हर तकनीक का अभ्यास करने का समान अवसर मिले।',
      'सोसायटी का उद्देश्य केवल आत्मरक्षा सिखाना नहीं है। खेल आत्मविश्वास, स्वास्थ्य तथा — प्रतिभाशाली बच्चों के लिए — प्रतियोगिताओं और करियर के नए अवसरों का सिद्ध मार्ग है। इस प्रतिभा को समय रहते पहचानना और उसे सही दिशा देना ही इस कार्यक्रम का व्यापक उद्देश्य है।',
      'इस दिन सोसायटी का संदेश सरल था: हर बच्चे में हुनर है, बस उसे सही अवसर और सही दिशा की आवश्यकता है। इस प्रकार का सत्र आयोजित करने के इच्छुक विद्यालय एवं संस्थान हमसे संपर्क कर सकते हैं।',
    ],
    sourcePosts: [
      'https://www.instagram.com/prasanghi.bharat/reel/DfPbE-ToRon/',
      'https://www.instagram.com/prasanghi.bharat/reel/DfNlFQhIiO7/',
    ],
  },
  {
    slug: 'sashakt-beti-surakshit-beti',
    theme: 'Safety',
    date: '2026-11-02',
    when: 'Begun during Navratri',
    whenHi: 'नवरात्रि पर आरंभ',
    headline: 'Sashakt Beti, Surakshit Beti: Free Self-Defence Classes for Girls',
    headlineHi: 'सशक्त बेटी, सुरक्षित बेटी: बालिकाओं के लिए निःशुल्क आत्मरक्षा कक्षाएँ',
    excerpt:
      'A new resolve, started in the season of Navdurga: every daughter should be able to defend herself.',
    excerptHi: 'नवदुर्गा के पावन पर्व पर लिया गया एक नया संकल्प: हर बेटी अपनी आत्मरक्षा में सक्षम हो।',
    body: [
      '“In a land of warrior women, are our daughters still not safe?” That question is the starting point of Sashakt Beti, Surakshit Beti — PraSanghi Social Welfare Society’s campaign to take girls “from self-defence to self-reliance” through free self-defence classes in Indore.',
      'The Society chose the festival of Navdurga, which celebrates the goddess in her protective forms, to begin. The first session was held for girls of the Ahirkhedi basti area, covering basic self-defence techniques. Every participant also received a gift to encourage her to keep practising.',
      'The campaign is led by the Society’s president, Pranita Joshi Gawade, and the first session was conducted with the support of trainer and social worker Bandhu Verma ji.',
      'The campaign is designed to travel. Neighbourhoods, educational institutions, and residents’ associations that would like a training camp held for the girls in their community can reach out to the Society to arrange one.',
    ],
    bodyHi: [
      '“वीरांगनाओं के देश में, बेटियाँ सुरक्षित नहीं?” — यही प्रश्न “सशक्त बेटी, सुरक्षित बेटी” अभियान का आधार है, जिसके माध्यम से प्रासंघी सोशल वेलफेयर सोसायटी इंदौर में निःशुल्क आत्मरक्षा कक्षाओं द्वारा बालिकाओं को “आत्मरक्षा से आत्मनिर्भरता तक” ले जाने का संकल्प लेकर चल रही है।',
      'इस संकल्प का आरंभ सोसायटी ने नवदुर्गा के पावन पर्व पर किया। पहला सत्र अहीरखेड़ी बस्ती क्षेत्र की बालिकाओं के लिए आयोजित हुआ, जिसमें आत्मरक्षा की मूलभूत तकनीकें सिखाई गईं। सभी बालिकाओं को प्रोत्साहन हेतु उपहार भी दिए गए।',
      'यह अभियान सोसायटी की अध्यक्ष प्रणिता जोशी गावड़े के नेतृत्व में चल रहा है, तथा पहले सत्र में प्रशिक्षक एवं सामाजिक कार्यकर्ता बंधु वर्मा जी का सहयोग रहा।',
      'यह अभियान आगे भी चलता रहेगा। जो क्षेत्र, शैक्षणिक संस्थान अथवा रहवासी संघ अपने यहाँ बालिकाओं के लिए ऐसा प्रशिक्षण शिविर आयोजित कराना चाहते हैं, वे सोसायटी से संपर्क कर सकते हैं।',
    ],
    sourcePosts: [
      'https://www.instagram.com/prasanghi.bharat/reel/DfNkmbBoYv9/',
      'https://www.instagram.com/prasanghi.bharat/p/DfNewmSiLuW/',
    ],
  },
  {
    slug: 'ten-years-of-prasanghi-foundation',
    theme: 'Education',
    date: '2026-11-01',
    headline: 'Ten Years of PraSanghi Foundation',
    headlineHi: 'प्रासंघी फाउंडेशन के दस वर्ष',
    excerpt:
      'A decade of work across education, health, sport, and social awareness — and the story of where it began.',
    excerptHi:
      'शिक्षा, स्वास्थ्य, खेल एवं सामाजिक जागरूकता के क्षेत्र में एक दशक का कार्य — तथा इसकी शुरुआत की कहानी।',
    body: [
      'For the past ten years, PraSanghi Foundation has worked for the all-round development of society. Its aim, in its own words, is to build “an empowered, healthy and prosperous society through education, health, sport and social awareness.”',
      'That aim plays out in four streams of work. Education: helping children in need continue their studies. Health: awareness drives and health camps. Sport: encouraging children to play, and opening doors to competition. Social campaigns: programmes that bring communities together around the issues that affect them.',
      'The roots of this work are personal. Profiles in the Indore press have described how the Society’s president, Pranita Joshi Gawade, drew her inspiration from her father and set out to become a light in the lives of girls who had no one to turn to. She took responsibility for the education of young girls in need and helped seven young women find employment. That commitment grew into the Foundation.',
      'Ten years on, the Foundation’s invitation remains the same: come together, and build a better society.',
    ],
    bodyHi: [
      'पिछले दस वर्षों से प्रासंघी फाउंडेशन समाज के सर्वांगीण विकास के लिए निरंतर कार्यरत है। फाउंडेशन का उद्देश्य है — “शिक्षा, स्वास्थ्य, खेल और सामाजिक जागरूकता के माध्यम से एक सशक्त, स्वस्थ और समृद्ध समाज का निर्माण।”',
      'यह उद्देश्य चार प्रमुख कार्यक्षेत्रों में साकार होता है। शिक्षा अभियान: ज़रूरतमंद बच्चों को उनकी पढ़ाई जारी रखने में सहयोग। स्वास्थ्य अभियान: जागरूकता कार्यक्रम एवं स्वास्थ्य शिविर। स्पोर्ट्स अभियान: बच्चों को खेलों के लिए प्रोत्साहन तथा प्रतियोगिताओं के अवसर। सामाजिक अभियान: ऐसे कार्यक्रम जो समुदायों को उनसे जुड़े विषयों पर एकजुट करें।',
      'इस कार्य की जड़ें व्यक्तिगत हैं। इंदौर के समाचार पत्रों में प्रकाशित लेखों में बताया गया कि किस प्रकार सोसायटी की अध्यक्ष प्रणिता जोशी गावड़े को अपने पिता से प्रेरणा मिली, और वे बेसहारा बालिकाओं के अंधकार भरे जीवन में ज्योति बनीं। उन्होंने ज़रूरतमंद बच्चियों की शिक्षा का दायित्व उठाया तथा सात युवतियों को रोज़गार से जोड़ा। यही प्रतिबद्धता आगे चलकर फाउंडेशन बनी।',
      'दस वर्ष बाद भी फाउंडेशन का आह्वान वही है: आइए, साथ मिलकर एक बेहतर समाज का निर्माण करें।',
    ],
    sourcePosts: [
      'https://www.instagram.com/prasanghi.bharat/reel/DfNkLQaoNSc/',
      'https://www.instagram.com/prasanghi.bharat/p/DfNjR8KiIMR/',
      'https://www.instagram.com/prasanghi.bharat/p/DfNjopaiKLq/',
    ],
  },
  {
    slug: 'sickle-cell-awareness-campaign',
    theme: 'Health',
    date: '2026-11-01',
    when: '2022–23',
    whenHi: '2022–23',
    headline: 'Sickle Cell Awareness Campaign',
    headlineHi: 'सिकल सेल जागरूकता अभियान',
    excerpt: 'Bringing awareness of an inherited blood disorder to the communities most affected by it.',
    excerptHi: 'एक आनुवंशिक रक्त विकार के प्रति, उससे सर्वाधिक प्रभावित समुदायों में जागरूकता का प्रसार।',
    body: [
      'In 2022–23 PraSanghi Social Welfare Society ran a Sickle Cell Awareness Campaign, under the banner “awareness is prevention”, bringing together community members, organisers, and speakers to talk openly about the condition.',
      'Sickle cell disease is an inherited blood disorder in which red blood cells take on a rigid, sickle shape, causing pain, anaemia, and long-term complications. In India it is especially prevalent in parts of central India, including Madhya Pradesh, and among tribal communities.',
      'Because the condition is inherited, awareness genuinely changes outcomes: knowing one’s carrier status, getting tested early, and understanding what to watch for allow families to seek care sooner and make informed decisions. Public screening and awareness are a stated priority of national health programmes for exactly this reason.',
      'The campaign is part of the Society’s wider health work — taking reliable health information to the people who need it most, in a setting where they can ask questions freely.',
    ],
    bodyHi: [
      'वर्ष 2022–23 में प्रासंघी सोशल वेलफेयर सोसायटी ने “जागरूकता ही बचाव है” के संदेश के साथ सिकल सेल जागरूकता अभियान का आयोजन किया, जिसमें समुदाय के सदस्य, आयोजक एवं वक्ता इस रोग पर खुलकर चर्चा हेतु एकत्र हुए।',
      'सिकल सेल रोग एक आनुवंशिक रक्त विकार है, जिसमें लाल रक्त कोशिकाएँ कठोर होकर हँसिए के आकार की हो जाती हैं, जिससे दर्द, रक्ताल्पता तथा दीर्घकालिक जटिलताएँ उत्पन्न होती हैं। भारत में यह विशेष रूप से मध्य प्रदेश सहित मध्य भारत के क्षेत्रों तथा जनजातीय समुदायों में अधिक पाया जाता है।',
      'चूँकि यह रोग आनुवंशिक है, अतः जागरूकता से वास्तविक अंतर आता है: अपनी वाहक स्थिति जानना, समय पर जाँच कराना तथा लक्षणों की समझ रखना परिवारों को शीघ्र उपचार लेने एवं सोच-समझकर निर्णय लेने में सक्षम बनाता है। इसी कारण जनस्तरीय जाँच एवं जागरूकता राष्ट्रीय स्वास्थ्य कार्यक्रमों की घोषित प्राथमिकता है।',
      'यह अभियान सोसायटी के व्यापक स्वास्थ्य कार्य का हिस्सा है — विश्वसनीय स्वास्थ्य जानकारी को उन लोगों तक पहुँचाना जिन्हें इसकी सबसे अधिक आवश्यकता है, ऐसे वातावरण में जहाँ वे निःसंकोच प्रश्न पूछ सकें।',
    ],
    sourcePosts: ['https://www.instagram.com/prasanghi.bharat/p/DfNgPJkCAAb/'],
  },
  {
    slug: 'greener-indore',
    theme: 'Environment',
    date: '2026-11-01',
    headline: 'Towards a Greener Indore',
    headlineHi: 'हरित इंदौर की ओर',
    excerpt:
      'Tree plantation in the bastis, a clean-up of a neglected hilltop, and a simple idea: plant a tree on your birthday.',
    excerptHi:
      'बस्तियों में पौधारोपण, उपेक्षित पहाड़ी स्थल की सफ़ाई, और एक सरल विचार: अपने जन्मदिन पर एक पेड़ लगाएँ।',
    body: [
      '“We abuse land because we regard it as a commodity belonging to us. When we see land as a community to which we belong, we may begin to use it with love and respect.” Aldo Leopold’s words sit at the heart of PraSanghi’s environmental work.',
      'On 20 July 2020 the Society held a tree plantation drive at Ahirkhedi Seva Basti, Indore. The children of the basti did much of the planting and watering themselves — the most reliable way to ensure that a sapling is still being looked after long after the volunteers have gone home. The Society has since carried the drive to villages around the city, where volunteers and local residents planted saplings alongside the children of the village.',
      'The Society has also cleaned up a neglected hilltop shrine, clearing the litter that had built up around it and restoring the space for the community that uses it — a before-and-after that shows how much a few hours of collective effort can achieve.',
      'And it has a standing invitation for everyone: Gift Your Birthday to Mother Nature. Instead of — or alongside — the cake, plant a tree on your birthday, and give the world a greener future.',
    ],
    bodyHi: [
      '“हम भूमि का दुरुपयोग इसलिए करते हैं क्योंकि हम उसे अपनी संपत्ति मानते हैं। जब हम भूमि को एक ऐसे समुदाय के रूप में देखेंगे जिसके हम स्वयं सदस्य हैं, तब हम उसका उपयोग प्रेम और सम्मान के साथ करने लगेंगे।” — एल्डो लियोपोल्ड के ये शब्द प्रासंघी के पर्यावरण कार्य का मूल हैं।',
      '20 जुलाई 2020 को सोसायटी ने इंदौर की अहीरखेड़ी सेवा बस्ती में पौधारोपण अभियान आयोजित किया। बस्ती के बच्चों ने स्वयं पौधे लगाए और उन्हें पानी दिया — यह सुनिश्चित करने का सबसे विश्वसनीय तरीका कि स्वयंसेवकों के लौट जाने के बाद भी पौधे की देखभाल होती रहे। इसके पश्चात सोसायटी ने यह अभियान शहर के आसपास के गाँवों तक भी पहुँचाया, जहाँ स्वयंसेवकों एवं स्थानीय नागरिकों ने गाँव के बच्चों के साथ मिलकर पौधे लगाए।',
      'सोसायटी ने एक उपेक्षित पहाड़ी देवस्थल की सफ़ाई भी की — वहाँ जमा कचरा हटाकर उस स्थान को समुदाय के उपयोग हेतु पुनः स्वच्छ बनाया। पहले और बाद की तस्वीरें दिखाती हैं कि कुछ घंटों का सामूहिक प्रयास कितना परिवर्तन ला सकता है।',
      'और सोसायटी का सभी के लिए एक स्थायी आमंत्रण है: अपना जन्मदिन प्रकृति माँ को उपहार में दें। केक के साथ — या उसके स्थान पर — अपने जन्मदिन पर एक पेड़ लगाएँ, और दुनिया को एक हरित भविष्य दें।',
    ],
    sourcePosts: [
      'https://www.instagram.com/prasanghi.bharat/p/DfNewmSiLuW/',
      'https://www.instagram.com/prasanghi.bharat/p/DfNfHrFCLUd/',
      'https://www.instagram.com/prasanghi.bharat/p/DfNgH0PiMbg/',
      'https://www.instagram.com/prasanghi.bharat/p/DfNgSkJiBGR/',
      'https://www.instagram.com/prasanghi.bharat/p/DfNfSz5I9jW/',
    ],
  },
  {
    slug: 'sports-fest-prestige-department-of-law',
    theme: 'Sport',
    date: '2026-11-01',
    when: '2022',
    whenHi: '2022',
    headline: 'Cheering On Young Talent at a Law School Sports Fest',
    headlineHi: 'विधि विद्यालय के स्पोर्ट्स फेस्ट में युवा प्रतिभाओं का सम्मान',
    excerpt:
      'Trophies for the winners of the Sports Fest at the Department of Law, Prestige Institute of Management & Research, Indore.',
    excerptHi:
      'प्रेस्टीज इंस्टीट्यूट ऑफ मैनेजमेंट एंड रिसर्च, इंदौर के विधि विभाग के स्पोर्ट्स फेस्ट के विजेताओं को ट्रॉफी प्रदान की गई।',
    body: [
      'In 2022 PraSanghi took part in the prize distribution of the Sports Fest held at the Department of Law, Prestige Institute of Management & Research, Indore, presenting trophies to the winning student teams.',
      'For PraSanghi, the occasion brought together two things it cares about. Law students are the profession’s future, and sport builds the discipline, teamwork, and composure under pressure that serve an advocate well in a courtroom.',
      'Encouraging sport is also one of the four streams of work of PraSanghi Foundation, alongside education, health, and social awareness. Whether it is self-defence for girls in the bastis or a trophy for a winning team, the idea is the same: talent grows when someone notices it and gives it a stage.',
    ],
    bodyHi: [
      'वर्ष 2022 में प्रासंघी ने प्रेस्टीज इंस्टीट्यूट ऑफ मैनेजमेंट एंड रिसर्च, इंदौर के विधि विभाग में आयोजित स्पोर्ट्स फेस्ट के पुरस्कार वितरण में भाग लिया तथा विजेता विद्यार्थी टीमों को ट्रॉफी प्रदान की।',
      'प्रासंघी के लिए यह अवसर दो महत्त्वपूर्ण विषयों का संगम था। विधि के विद्यार्थी इस पेशे का भविष्य हैं, और खेल वह अनुशासन, टीम भावना तथा दबाव में संयम विकसित करते हैं जो न्यायालय में एक अधिवक्ता के लिए अत्यंत उपयोगी होते हैं।',
      'खेलों को प्रोत्साहन देना प्रासंघी फाउंडेशन के चार प्रमुख कार्यक्षेत्रों में से एक है — शिक्षा, स्वास्थ्य एवं सामाजिक जागरूकता के साथ। चाहे बस्तियों में बालिकाओं के लिए आत्मरक्षा प्रशिक्षण हो या किसी विजेता टीम के लिए ट्रॉफी, विचार एक ही है: प्रतिभा तब निखरती है जब कोई उसे पहचानकर उसे मंच देता है।',
    ],
    sourcePosts: ['https://www.instagram.com/prasanghi.bharat/p/DfNjopaiKLq/'],
  },
  {
    slug: 'small-acts-of-care',
    theme: 'Compassion',
    date: '2026-11-01',
    headline: 'Small Acts of Care: Blankets, Plasma, and a Bowl of Water',
    headlineHi: 'सेवा के छोटे कदम: कंबल, प्लाज़्मा और पानी का एक सकोरा',
    excerpt:
      'Three of the Society’s appeals — each asking for something small, each capable of saving a life.',
    excerptHi: 'सोसायटी की तीन अपीलें — हर एक में माँगा गया कुछ छोटा-सा, पर हर एक जीवन बचाने में सक्षम।',
    body: [
      'Not every act of service needs a programme. Some of PraSanghi Social Welfare Society’s most direct work has taken the form of simple appeals to the public — each asking for something small that can make the difference between hardship and survival.',
      'This Winter, Save a Life. Every winter, families sleeping without adequate shelter face bitter cold nights. The Society collects blankets and warm clothes from those who can spare them and passes them on to those who cannot do without them.',
      'Plasma donation. During the COVID-19 pandemic, the Society appealed to people who had recovered from the virus to donate plasma — at a time when convalescent plasma was being used in the treatment of seriously ill patients — and gave donors a helpline to reach it.',
      'One sakora of water and a fistful of grain. In the heat of an Indore summer, birds struggle to find water. The Society’s appeal — “see how easy it is to save lives” — asks households to keep a clay bowl (sakora) of water and a little grain on their roofs and balconies, and distributes sakoras free of cost to those who want one.',
    ],
    bodyHi: [
      'सेवा के हर कार्य के लिए किसी बड़े कार्यक्रम की आवश्यकता नहीं होती। प्रासंघी सोशल वेलफेयर सोसायटी के कुछ सबसे प्रत्यक्ष कार्य जनता से की गई सरल अपीलों के रूप में रहे हैं — हर अपील में माँगा गया कुछ छोटा-सा, जो कठिनाई और जीवन के बीच का अंतर बन सकता है।',
      'इस सर्दी, एक जीवन बचाएँ। हर वर्ष सर्दियों में पर्याप्त आश्रय के बिना सोने वाले परिवारों को कड़ाके की ठंडी रातें झेलनी पड़ती हैं। सोसायटी उन लोगों से कंबल एवं गर्म कपड़े एकत्र करती है जो इन्हें दे सकते हैं, और उन तक पहुँचाती है जिन्हें इनकी सबसे अधिक आवश्यकता है।',
      'प्लाज़्मा दान। कोविड-19 महामारी के दौरान, जब गंभीर रोगियों के उपचार में प्लाज़्मा का उपयोग हो रहा था, सोसायटी ने संक्रमण से स्वस्थ हो चुके लोगों से प्लाज़्मा दान की अपील की तथा दाताओं हेतु संपर्क नंबर उपलब्ध कराया।',
      'एक सकोरा पानी और मुट्ठी भर दाना। इंदौर की तपती गर्मी में पक्षियों को पानी मिलना कठिन हो जाता है। सोसायटी की अपील — “देखो कितना आसान है ज़िंदगियाँ बचाना” — घरों से अनुरोध करती है कि वे अपनी छत और बालकनी पर मिट्टी का एक सकोरा पानी और थोड़ा दाना रखें; इच्छुक लोगों को सोसायटी निःशुल्क सकोरे भी उपलब्ध कराती है।',
    ],
    sourcePosts: [
      'https://www.instagram.com/prasanghi.bharat/p/DfNfMfcInuU/',
      'https://www.instagram.com/prasanghi.bharat/p/DfNf19bISIb/',
      'https://www.instagram.com/prasanghi.bharat/p/DfNf6TDIGUH/',
    ],
  },
]

export const initiativesBySlug: Record<string, InitiativeRecord> = Object.fromEntries(
  initiatives.map((i) => [i.slug, i])
)
