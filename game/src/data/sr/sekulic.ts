import type { Author } from '@/types/game';

const author: Author = {
  id: 'sekulic',
  name: 'Isidora Sekulić',
  years: '1877–1958',
  nationality: 'Srpska',
  knownFor: 'Saputnici',
  snippets: [
    {
      id: 'sekulic-r1',
      text: `Putovanje je jedina stvar koja čoveku ne izmiče. Sve ostalo — sreća, ljubav, razumevanje — prolazi kao voda kroz prste, ili ga čovek i ne dotakne. Putovanje se ne može uzeti ni oduzeti : ono se desilo. Ti si bio u Veneciji, na Kilimandžaru, u onoj sobi s plavim zavesama u Pragu. To niko ne može uzeti natrag. A čovek koji je bio na tim mestima nije sasvim isti čovek koji je otišao — i to ne može biti uzeto. Putovanje je jedina imovina koja raste time što se troši.`,
      isAI: false,
      source: 'Saputnici, prva proza',
      hint: "Sekulić's philosophical turn arrives without announcement: \"putovanje je jedina stvar\" opens as a flat assertion, and only the second sentence explains why by contrast with everything else that slips away. The specific place names (Venice, Kilimanjaro, Prague with blue curtains) are dropped without elaboration, as evidence rather than atmosphere. The closing aphorism — the only property that grows by being spent — arrives as logical completion, not rhetorical ornament.",
    },
    {
      id: 'sekulic-r2',
      text: `Ima dana kada ništa ne znači ono što treba da znači. Reči su šuplje, lica su maska, i čak i sunce na zidu izgleda nalepljeno, lažno, kao u pozorištu. Tada ne vredi niti raditi niti se odmarati ; ne vredi ni biti sam ni biti s drugima. Takav dan se mora pretrpeti, kao što se pretrpljava kiša : bez besa, bez žalbe, s rukom na džepu. Iza takvog dana uvek dolazi dan koji znači nešto, premda ništa naročito nije razlog tome. Taj prelaz čovek ne vidi, baš kao što ne vidi kako zaspi.`,
      isAI: false,
      source: 'Saputnici, treća proza',
      hint: 'The days-of-meaninglessness passage moves from observation (words hollow, faces masked, sun pasted on like theatre) to prescription (must be endured like rain: without anger, without complaint, hand in pocket) to the quiet reversal (a meaningful day follows without apparent cause). The transition from meaningless to meaningful is compared to the transition into sleep — something you cannot observe from within. The rhythm enacts the compression it describes.',
    },
    {
      id: 'sekulic-r3',
      text: `Svaka osoba je kontinent. Može se kružiti oko nje godinama, sletati u razne luke, misliti da je poznata — a unutrašnjost ostaje neistražena, puna reka i planina o kojima se ne sluti. Ovo nije tužno. Tužno bi bilo kada bi se moglo znati sve. Ono što je nepoznato u čoveku koji nam je blizak — to je, u stvari, razlog zašto mu ostajemo blizu. Izgubimo li misteriju, gubimo i saputnika.`,
      isAI: false,
      source: 'Saputnici, šesta proza',
      hint: "The continent metaphor for a person is established in one sentence and immediately complicated — you can circle it for years, land in various ports, believe you know it, while the interior remains unexplored. The key move is the reversal of the expected emotional register: \"Ovo nije tužno.\" The philosophical point (mystery sustains closeness) is enacted, not explained. The word \"saputnik\" (fellow-traveller) here doubles as the book's title — its meaning in this context is earned rather than announced.",
    },
    {
      id: 'sekulic-r4',
      text: `Zima je najistinitije godišnje doba. Drvo bez lišća pokazuje šta je zaista : pravo grananje, pravu gustinu, pravi stav prema nebu. Čovek koji voli samo drvo s lišćem — voli zapravo zasenčenost, puninu, ono što skriva koliko daruje. Zima ne laže. Ona kaže : evo kičme, evo grana, evo starih rana na kori. Ko ne voli to, neka čeka proleće. Proleće dolazi uvek, ali ne dolazi svima.`,
      isAI: false,
      source: 'Saputnici, deseta proza',
      hint: "Winter-as-truth is a compressed syllogism: winter reveals structure, those who love only leafed trees love concealment rather than form, winter does not deceive. The series \"evo kičme, evo grana, evo starih rana\" (here is the spine, the branches, the old wounds in bark) is Sekulić's anaphoric rhythm — three parallel elements building toward the one that reframes the others (\"starih rana\"). The final sentence — spring comes always, but not to everyone — is the philosophical sting delivered without explanation.",
    },
    {
      id: 'sekulic-r5',
      text: `Ćutanje između dve osobe nije uvek isto. Ima ćutanja koje je puno, kao naftna lampa kad gori ravno bez trepćanja. Ima ćutanja koje je prazno, kao soba iz koje su iznesene sve stvari. I ima ćutanja koje je opasno, koje čeka, koje broji vreme. Naučiti razliku — to je polovina mudrosti u ophođenju s ljudima. Druga polovina je znati kada u koje ćutanje ući i kada ostati napolju.`,
      isAI: false,
      source: 'Saputnici, četrnaesta proza',
      hint: "Sekulić's taxonomy of silences uses precise material similes: a full oil-lamp burning steady without flicker; a room stripped of all its furniture. The third kind — dangerous, waiting, counting time — is described without simile, which gives it more weight. The philosophical payoff is split into two halves (learning the difference; knowing when to enter which silence), and the second half extends the spatial metaphor of the emptied room into \"entering\" a silence or staying outside it.",
    },
    {
      id: 'sekulic-r6',
      text: `Nema mesta gde se lakše zaboravi nego u vozu. Ne znam zašto je to tako. Možda zbog ravnomerne buke koja popunjava ono što inače misao popunjava. Možda zbog toga što si negde između odlaska i dolaska, na mestu koje nije ni jedno ni drugo, u vremenu koje ni ne teče ni stoji. U vozu mogu da gledam u prozor i ne mislim ništa po jedan sat. Vredi li taj sat? Ne znam. Mislim da vredi, premda ne znam šta je vredelo.`,
      isAI: false,
      source: 'Iz prošlosti, putopisna beleška',
      hint: "The observation about forgetting in trains is followed immediately by an admission of ignorance about why — \"ne znam zašto je to tako\" — then two speculative hypotheses offered without endorsement. The train is a liminal space (between departure and arrival, neither one nor the other, time neither flowing nor standing still) described analytically, not lyrically. The closing question — was that hour worth anything? — is answered honestly: yes, probably, but I don't know what it was worth.",
    },
    {
      id: 'sekulic-ai1',
      text: `Jesen je uvek bila njena omiljena godišnja doba, vreme kada je priroda oblači svoja najlepša ruha pre nego što sve umre. Lišće je plamtelo u crvenom i zlatnom, a vazduh je mirisao na vlažnu zemlju i na vatru od hrastovog drveta. Sofija je šetala ulicom i osećala kako je ta lepota ispunjava iznutra, kao što sunce ispunjava sobu kroz otvoreni prozor. Mislila je na sve one koje je volela i izgubila, i bile su joj zahvalne suze u očima — ne od tuge, već od punoće srca, od te blaženosti koja dolazi kada čovek bude sposoban da vidi lepotu sveta uprkos svemu.`,
      isAI: true,
      hint: "Sekulić does not write descriptions of autumn foliage as emotional backdrop. She observes a specific phenomenon, draws a general conclusion, then tests or reverses it. The sunlight-filling-a-room simile is generic where Sekulić's similes are surprising and material. \"Blaženost koja dolazi kada čovek bude sposoban da vidi lepotu sveta uprkos svemu\" is the language of inspirational prose; Sekulić's philosophical statements arrive without preparation, not as conclusions to emotional narrative.",
    },
    {
      id: 'sekulic-ai2',
      text: `Kao što znamo, čovek je društveno biće i ne može živeti bez zajednice. Ova istina provlači se kroz svu njenu prozu, kroz sva putovanja i susrete opisane u knjigama. Njena proza govori o usamljenosti kao o suštinskom stanju modernog čoveka, ali i o mogućnosti prevazilaženja te usamljenosti kroz razgovor, putovanje i umetnost. Ovi tematski tokovi prožimaju se kroz celo njeno stvaralaštvo i daju mu unutrašnju koheziju i prepoznatljivost. Susret s Drugim ostaje centralni problem njene proze, jer Drugi je ogledalo u kome čovek vidi sebe.`,
      isAI: true,
      hint: "This opens with the exact phrase Sekulić never uses: \"Kao što znamo\" (as we know) — a didactic connector she actively avoids. The passage announces themes rather than enacting them, and the \"Drugi kao ogledalo\" (the Other as mirror) is philosophy seminar vocabulary, not Sekulić's compressed imagistic mode. Where Sekulić's prose moves from observation to implication without signposting, this text moves from thesis to examples to conclusion — the inverse of her method.",
    },
    {
      id: 'sekulic-ai3',
      text: `Grad me uvek podseća na ogromnu mašinu koja radi dan i noć, bez odmora, bez svesti o sebi. Milioni žive u njemu i svaki misli da ga razume, ali grad ne može biti razumljen — može samo biti doživljen, sloj po sloj, godinu po godinu. Ja živim u ovom gradu već dugo, i svaki put kad mislim da sam ga upoznala, on mi pokaže neko novo lice, neku ulicu za kojom nisam znala, neku grupu ljudi čiji se jezik ne poklapa ni sa jednim poznatim. Grad je uvek veći od nas, i to je istovremeno njegova veličina i njegova okrutnost.`,
      isAI: true,
      hint: "The city-as-machine metaphor is common European modernist vocabulary; Sekulić's images are more surprising and less inherited. \"Može samo biti doživljen, sloj po sloj\" is the kind of instruction-to-the-reader phrasing she avoids — she shows rather than tells. The closing symmetry (\"veličina i okrutnost\") is rhetorical balance; Sekulić's closings tend to be asymmetric, leaving one element without its expected pair, which generates aphoristic resonance rather than satisfying resolution.",
    },
    {
      id: 'sekulic-ai4',
      text: `Putnik koji se vraća kući uvek donosi nešto sa sobom, nešto što nije mogao predvideti kada je polazio. Ponekad je to nova misao, ponekad nova tuga, ponekad samo jedna slika koja će ostati zauvek u pamćenju. Ana je sedela u vozu i gledala kako nestaju poslednji obrisi stranog grada. Osećala je tu čudnu mešavinu olakšanja i žaljenja koja prati svaki povratak, to neodređeno osećanje da ostavljamo za sobom deo sebe koji nećemo naći kada se vratimo kući. Život je tako : uvek smo negde između odlaska i dolaska, uvek nešto gubimo a nešto dobijamo.`,
      isAI: true,
      hint: "\"Život je tako: uvek smo negde između odlaska i dolaska, uvek nešto gubimo a nešto dobijamo\" is a commonplace expressed without compression or surprise. Sekulić's train observation (the real snippet) covers similar territory but refuses this kind of summarising balance. The \"čudna mešavina olakšanja i žaljenja\" is named, not shown; Sekulić would find the physical or structural image rather than the psychological label. \"Deo sebe koji nećemo naći\" is sentimental cliché.",
    },
    {
      id: 'sekulic-ai5',
      text: `Prijateljstvo je retkost. Ne ono što se zove prijateljstvo — to je svuda — već ono što jeste: dve osobe koje jedna drugoj ne moraju ništa da objašnjavaju. Kad naiđeš na takvo prijateljstvo, ne prepoznaješ ga odmah. Misliš da si samo naišao na nekog ko te razume bolje od drugih. Tek kasnije, posle mnogo vremena, shvataš da to razumevanje nije bila slučajnost ili naklonost, već da je bila neka vrsta sudbine, da ste se trebali sresti i sreli ste se, i da više nema govora o slučajnosti.`,
      isAI: true,
      hint: "The friendship meditation starts with a real Sekulić move — distinguishing the thing called X from the thing that actually is X — but then drifts into the language of fate and \"you were meant to meet\" that Sekulić's sharper intelligence resists. Her philosophical reversals are structural; they do not rely on concepts like \"neka vrsta sudbine\" (a kind of destiny). The phrase \"više nema govora o slučajnosti\" (no more talk of chance) is conclusory sentimentality where Sekulić would leave the question open or redirect it unexpectedly.",
    },
  ],
};

export default author;
