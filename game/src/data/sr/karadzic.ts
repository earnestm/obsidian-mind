import type { Author } from '@/types/game';

const author: Author = {
  id: 'karadzic',
  name: 'Vuk Stefanović Karadžić',
  years: '1787–1864',
  nationality: 'Srpski',
  knownFor: 'Srpske narodne pripovijetke',
  snippets: [
    {
      id: 'karadzic-r1',
      text: `Bio jedanput jedan car, i imao tri sina. Kad je car ostario i oćutio da mu se bliži smrt, dozove sinove k sebi i kaže im: „Sinovi moji, ja sam stario i uskoro ću umrijeti. Vi se znadte bratski slagati, i ne prepirte se za carstvo; a koji od vas donese orla koji sjedi na vrhu onoga brda što se vidi odavle, taj neka bude car poslije mene."`,
      isAI: false,
      source: 'Srpske narodne pripovijetke, "Car i njegovi sinovi"',
      hint: 'The formula "bio jedanput jedan car" (there was once a tsar) is the exact traditional folk opening. The father\'s deathbed test — the eagle on the far mountain — is structurally the classic folk trial, never explained but immediately accepted by all parties. The speech is in direct discourse without stage-direction elaboration ("kaže im" — says to them). Folk narrative does not explain why an eagle proves fitness to rule; the logic is the story\'s logic.',
    },
    {
      id: 'karadzic-r2',
      text: `Idući put jedan čovjek u šumu, susretne vuka. Vuk mu reče: „Čovječe, ja sam gladan, moraću te izjesti." Čovjek mu odgovori: „Brate vuče, ne jedi me; ja ću ti naći boljeg jela." Vuk pristane na to, i pođe s čovjekom. Čovjek ga odvede pravo nekome konaku, pa mu reče: „Ovdje su mnoge ovce; ulazi unutra i jedi." Vuk uđe, ali ga ovčar uhvati i zatvori u ambar, i sutradan ga oderati i od kože načini kapu.`,
      isAI: false,
      source: 'Srpske narodne pripovijetke, "Čovjek i vuk"',
      hint: 'The exchange between man and wolf is conducted in the formula of folk negotiation — "brate vuče" (brother wolf) is the address of folkloric equality before the fatal deceit. The ending is blunt and without moral commentary: the wolf is caught, skinned, made into a hat. Karadžić\'s folk tales end with the consequence, not with the lesson. "Sutradan ga oderati" — and the next day they skinned him — is the folk narrative\'s characteristic economy.',
    },
    {
      id: 'karadzic-r3',
      text: `Bila jedanput jedna žena koja je imala tri kćeri. Najmlađa je bila najljepša i najmudrija, ali joj je majka bila nesklona i više je voljela starije dvije. Dogodi se jednom da majka pošlje sve tri kćeri u šumu da donesu drva. Kad su bile daleko od kuće, starijima dosadi pa se vrate, ali najmlađa ostane i skuplja drva, i natovar se teretom što ga jedva nosi. Na putu kući sretne starca.`,
      isAI: false,
      source: 'Srpske narodne pripovijetke, "Tri sestre"',
      hint: 'The tale establishes its moral structure — youngest daughter most beautiful and wisest, but disfavoured — in the first sentence without dramatic preparation, following the folk convention that character establishes destiny. The older sisters\' laziness is stated without moralising ("dosadi im pa se vrate" — they got bored and turned back). The youngest\'s virtue is shown by action, not description: she loads herself with wood she can barely carry. The old man appears as the natural next event.',
    },
    {
      id: 'karadzic-r4',
      text: `Onda car reče: „Ko god mi donese živu vodu, njemu ću dati kćer za ženu i pola carstva." Skupi se sav narod da posluša careve riječi. Mladi se polakomp pojaviše, i stari, i bogate gospodari, i siromasi, i svakakvi junaci. Ali niko nije znao gdje je živa voda ni kako se do nje dolazi. Tada izađe jedan starac pa reče: „Znao sam jednog čovjeka koji je znao, ali i taj je umro, i tajnu je ponio sa sobom u grob."`,
      isAI: false,
      source: 'Srpske narodne pripovijetke, "Živa voda"',
      hint: 'The royal proclamation draws everyone without distinction of age or rank ("mladi i stari, bogati i siromasi"), establishing the democratic scope of the folk tale\'s quest. The old man\'s response — he knew a man who knew, but he died taking the secret to his grave — is a perfect folk joke: the quest narrative confronting the limit of knowledge. The "living water" is never defined; its power is assumed from the fact that everyone wants it.',
    },
    {
      id: 'karadzic-ai1',
      text: `Bio jedanput jedan siromašan čovjek koji je imao samo jednu kravu. Krava mu je davala dovoljno mlijeka za njega i za djecu, i tako su živjeli bez nevolje. Ali jednog dana, kad se čovjek vratio s polja, vidio je da mu je krava nestala. Pretraži cijelo imanje, ali kravu nije mogao naći nigdje. Sjede pred kućom i počne razmišljati šta da radi. Bio je tužan i zabrinut, i nije znao kome da se obrati za pomoć.`,
      isAI: true,
      hint: '"Bio je tužan i zabrinut" (he was sad and worried) is psychological interiority that folk narrative avoids — emotion is shown through action, not named. "Nije znao kome da se obrati za pomoć" is a modern-sounding expression of bewilderment. Folk tales solve the problem of missing objects through the immediate appearance of a magical helper, not through the protagonist sitting and worrying. The domestic realism (enough milk, no trouble) is too prolonged for a folk opening.',
    },
    {
      id: 'karadzic-ai2',
      text: `Bila jedanput jedna carica koja je bila toliko lijepa da nije bilo ravne joj u svemu carstvu. Ali ljepota joj je bila prokletstvo koliko i blagoslov, jer je svaki car i svaki knez iz daljnih zemalja dolazio da je prosi, i ona nije mogla da odbije nijednog bez da izazove rat. Njena soba bila je puna darova i pisama, i svake nedjelje dolazilo bi po nekoliko novih prosaca na dvor. Carica je bila umorna od svega toga i pitala se da li će ikad naći mir.`,
      isAI: true,
      hint: 'The character\'s interiority and fatigue — "Carica je bila umorna od svega toga i pitala se da li će ikad naći mir" — does not belong in folk narrative. Folk tale heroines do not reflect on their situations; they act or are acted upon. "Ljepota joj je bila prokletstvo koliko i blagoslov" is a literary paradox, not a folk formula. The catalogue of suitors is rendered as psychological burden rather than as comic plot device.',
    },
    {
      id: 'karadzic-ai3',
      text: `Pođe čovjek u šumu i tamo nađe patuljka koji je sjedio na panju i plakao. „Zašto plačeš?" — upita ga čovjek. Patuljak reče: „Plačem jer mi je zla vještica uzela moju magičnu kapu, i bez nje ne mogu da se vratim kući u planinu." Čovjek se sažali i reče: „Ja ću ti naći tvoju kapu ako mi pokažeš put do zlata koje si zakopao." Patuljak pristane, i pođoše zajedno.`,
      isAI: true,
      hint: 'The contractual exchange — help me find my cap, I\'ll show you the gold — is the right folk structure, but "patuljak" (dwarf) as a category is closer to German Märchen tradition than to Serbian folk narrative, which uses "patuljak" rarely. More importantly, the motivation is too explicit: "Ne mogu da se vratim kući" explains the dwarf\'s distress in realistic terms. Folk helpers and hindrances operate without explanations — their power is assumed, not justified.',
    },
    {
      id: 'karadzic-ai4',
      text: `Bijaše jednom u jednom selu jedan kovač koji je bio toliko vješt da su se iz dalekih krajeva dolazili da mu naruče radove. Bio je poznat i poštovan, ali nije bio sretan, jer nije imao ženu ni djecu. Jednog dana, dok je radio u svojoj kovačnici, začuje pred vratima nekakav čudan zvuk. Iziđe i vidi pred kućom konja kakva nikad prije nije vidio — bio je bijel kao snijeg i oči su mu sijale kao zvijezde. Čovjek se zagleda u konja i osjeti da mu sudbina kuca na vrata.`,
      isAI: true,
      hint: '"Osjeti da mu sudbina kuca na vrata" (felt that fate was knocking at his door) is a literary metaphor, not a folk idiom. Karadžić\'s folk tales announce magical events without psychological preparation — the white horse appears and the action begins, without the smith\'s loneliness and the sense of destiny. "Bio je poznat i poštovan, ali nije bio sretan" is the AI\'s way of establishing pathos; folk narrative establishes need through poverty or orphanhood, not through existential longing.',
    },
  ],
};

export default author;
