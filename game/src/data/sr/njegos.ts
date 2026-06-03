import type { Author } from '@/types/game';

const author: Author = {
  id: 'njegos',
  name: 'Petar Petrović Njegoš',
  years: '1813–1851',
  nationality: 'Srpski/Crnogorski',
  knownFor: 'Gorski vijenac',
  snippets: [
    {
      id: 'njegos-r1',
      text: `Vladika Danilo:
Prokleta da je krvava večera
koja nas je stala tolke braće!
Ali nas je krvlju vjenčala
i u koljeno bratsko primila,
ko vjenčanik prime svoju nevjestu.
Oj Cerovo, pleme sokolovo!
Oj Batriću, sokole srebrni!
Kome sam ti oči zatvorio,
draga li si mi ti krv prolio!
Kad pomislim dvadeset i pet
udovica mladih ocvilelih,
pedeset ti sirota bez oca —
suze, suze, al nemaš granica!`,
      isAI: false,
      source: 'Gorski vijenac, stihovi 489–502',
      hint: 'The formulaic apostrophe — "Oj Cerovo, pleme sokolovo! / Oj Batriću, sokole srebrni!" — is the oral epic tradition concentrated: the bird-epithet (sokol/falcon) applied to tribe and fallen warrior alike. Grief in the Montenegrin heroic mode is always counted: dvadeset i pet udovica (twenty-five widows), pedeset sirota (fifty orphans). The final broken exclamation — "suze, suze, al nemaš granica!" — breaks the verse form as tears break the voice.',
    },
    {
      id: 'njegos-r2',
      text: `Vuk Mićunović:
Vladiko, sve nam oči suza vrijede
kad gledamo ovo strašno breme —
bijeda naša na bijedu pala,
nevolja nam nevolju iznedrila.
Mrtvi brate pred živijem bratom,
otac mrtav pred živijem sinom —
ovo grdno gledati je, vladiko!
Ako zemlja može trpjet ovo,
ako nebo može trpjet ovo
i lice mu ne zarudi sramom,
ako naša vjera ne navali
suzama, za osvetom, na nas —
onda smo mi stoka, a ne ljudi,
onda nemo sloboda ni prava!`,
      isAI: false,
      source: 'Gorski vijenac, stihovi 510–523',
      hint: 'The anaphora — "Mrtvi brate pred živijem bratom, / otac mrtav pred živijem sinom" — places death spatially in front of life. The conditional escalation ("Ako zemlja... ako nebo... ako naša vjera") makes shame cosmic before reaching the moral conclusion: if heaven and earth can endure this dishonor, then they would be livestock, not men. Cosmic shame is the Montenegrin heroic register — "obraz" (face/honor) operates at the level of heaven itself.',
    },
    {
      id: 'njegos-r3',
      text: `Iguman Stefan:
Ova zima dovede do kraja
ono čemu ni kraja vidjeti
sa proljeća nije moglo biti.
Umrla je posljednja nevala —
groblje li je naše pleme pravo!
Prošle zime u našem predjelu
pomrije nas do dveste i pedest,
a do sto nam u turske lape pade.
Ostadosmo — otkad smo postali,
mislim, manji nikad nijesmo,
brojem manji, a snagom jači!
Jer smo našu zemlju utvrdili
krvlju naših Turaka i braće.`,
      isAI: false,
      source: 'Gorski vijenac, stihovi 560–572',
      hint: 'The Abbot\'s accounting integrates precise numbers into the heroic register: "do dveste i pedest" dead, "do sto" captured. This is how Njegoš merges Montenegrin historical memory with epic form — the specific winter, the specific losses, the specific toll. The paradox "brojem manji, a snagom jači!" (fewer in number, stronger in force) is the heroic code stated as lived experience, not as aspiration. Blood shed literally fortifies the land.',
    },
    {
      id: 'njegos-r4',
      text: `Vladika Danilo:
Teško onome ko živi sramotno!
Lakše mrtav pod zemljom ležati
neg živiti u sramoti teškoj.
Groblja nema bez mrtvijeh kosti,
ni junaštva bez žrtve i krvi.
Nek života nam dušmanin žali,
nek nam žali svake sitne mozge —
a mi smo mu suze posušili,
vjekom smo ga navikli na mač naš!
Teško onome ko nema obraza,
a lako onome ko obraz ima;
ko bez obraza živi na svijetu,
taj bez groba i umreti mora.`,
      isAI: false,
      source: 'Gorski vijenac, stihovi 602–615',
      hint: 'The gnomic structure — paired fates, opposed lives and deaths — is the oral-heroic mode: wisdom stated as universal law before application. "Obraz" (honor-face, public honor) is the key term: to live without it is not merely to die badly but to die without burial — the deepest Montenegrin curse. "Ko bez obraza živi na svijetu, / taj bez groba i umreti mora" — the conditional links cosmic honor to the specific material fate of an unburied corpse.',
    },
    {
      id: 'njegos-r5',
      text: `Vuk Mićunović:
O svemoćni gospode veliki!
Ti si pravda, ti si sila prava,
ti vladaš i ovim svijetom gorkim.
Zemlja blati noge putnikovim,
nebo brani glavu putnikovim.
Nas prostrla ruka neumitna
ismeana, proždrljiva kletva
života i vječne pogibije.
Đe je rodu našemu oduška,
ako ne je boja i osvete,
ako ne je slobodne pogibije?
Bogu nema našemu molitve,
nego lomljenje mača u kosti,
nego zemlja krvlju natopljena.`,
      isAI: false,
      source: 'Gorski vijenac, stihovi 540–553',
      hint: 'Prayer in Njegoš is inseparable from battle: "Bogu nema našemu molitve, / nego lomljenje mača u kosti." The sword breaking in bone is not just warfare — it is the only liturgy available to the Montenegrin people in this version of the heroic code. The rhetorical question "Đe je rodu našemu oduška" (Where is our people\'s release?) is not despairing but locates the answer in "slobodne pogibije" — a free death in battle. The theological and martial are inseparable.',
    },
    {
      id: 'njegos-ai1',
      text: `Vladika Danilo:
Braćo moja, pogledajte ove gore,
pogledajte nebo nad Crnom Gorom.
Tu smo mi odvijek živjeli slobodni,
tu smo krvlju svoje pravo stekli.
Junaštvo je naša vjera stara,
sloboda je naša sveta dužnost.
Ko izda braću, izda i Boga,
ko klekne vražji, klekne dušom svojom.
Ne bojte se mača ni vatre,
ne bojte se broja ni nadmoći —
jer je bolja čestna smert u boju
nego sramotan život u ropstvu.
Tako nam je obraz zapovjedio,
tako nam je vjera zavještala.`,
      isAI: true,
      hint: 'This sounds like ChatGPT answering "write a speech by Bishop Danilo." It assembles correct vocabulary — obraz, junaštvo, sloboda, vjera — but in generic sequence, like a checklist. No specific people are named, no specific event is addressed. The antithesis "čestna smert / sramotan život" appears in the real text too, but here it arrives as a standalone maxim with no dramatic context. The closing couplet ("tako nam je obraz zapovjedio / tako nam je vjera zavještala") is neat parallel structure that wraps everything up — Njegoš builds toward peaks, not toward tidy summaries.',
    },
    {
      id: 'njegos-ai2',
      text: `Vuk Mićunović:
Vladiko, ko se rađa u planini
taj zna šta znači mraz i kamen tvrdi.
Mi nijesmo meko rođeni,
niti smo po ravnici odrasli.
Svaka kap krvi naše plemenske
plaćena je u borbi i nevolji.
Ne žalimo ni život ni mlađanost,
jer život bez časti nije život —
to je samo bijeda bez obraza,
to je samo disanje i ništa.
Neka znaju i prijatelj i dušman
da Mićunović neće kleknuti,
niti će mu potomstvo to učinit
dokle god gore stoje i rijeke.`,
      isAI: true,
      hint: 'The mountain/plainsman contrast is generic, not anchored to a specific clan or event. "Neka znaju i prijatelj i dušman" is the kind of symmetrical public-address formula LLMs reach for — announcing to an abstract audience rather than speaking to a specific character in a charged dramatic moment. The passage assembles correct heroic vocabulary (obraz, krv, borba) at even emotional temperature throughout, where the real Gorski vijenac builds toward specific peaks of grief or rage through named individuals and events. "Dokle god gore stoje i rijeke" is a convenient noble-sounding closure; Njegoš\'s commitments emerge from specific dramatic pressures, not from generic nature imagery.',
    },
    {
      id: 'njegos-ai3',
      text: `Vladika Danilo:
Teška je to sudbina, braćo moja,
kad narod plače i žali za svojim.
Grobovi su po svim poljanama,
mrtvi junaci pod svakim kamenom.
Ali duša naroda ne umire,
jer je duša jača nego tijelo.
Iza svake noći dolazi zora,
iza svakog bola dolazi snaga.
Mi ćemo opet dignuti glavu,
mi ćemo opet biti ono što smo,
jer takva je priroda slobode —
ona gori jače kad je ugnjetavaju,
ona raste dublje kad je slome,
ona živi vječno u narodu pravom.`,
      isAI: true,
      hint: 'The closing line is the clearest tell: "jer takva je priroda slobode" is exactly the kind of thematic summary sentence LLMs add to round off a passage. Njegoš never explains what the nature of something is — he enacts it through dramatic action and image. The rest is smooth but generic: "iza svake noći dolazi zora" (after every night comes dawn) is a proverb-level cliché. Notice also how the emotions are named — "plače i žali," "bola," "snaga" — rather than shown through the specific physical and dramatic detail that makes the real Gorski vijenac vivid.',
    },
    {
      id: 'njegos-ai4',
      text: `Iguman Stefan:
Nemojte misliti da nas je malo,
braćo moja, čeda Černe Gore.
Mi nijesmo malo kad je Bog s nama,
mi nijesmo slabi kad je obraz čist.
Dušmanin je brojan i nadmoćan,
dušmanin je bogat i moćan veoma —
ali dušmanin nema ono naše
čime mi nadilazimo svaku silu:
vjeru pravu, slobodan duh i obraz,
zavjet ocâ i materina molitva.
Zato stojte i ne ustupajte,
zato stojte časno i pošteno,
jer ko stoji s Bogom i s obrazom,
taj pobjeđuje i kad pogine.`,
      isAI: true,
      hint: 'The Abbot here speaks in perfect motivational-speech rhythm: build up the enemy, then flip it with "ali." "Materina molitva" (mother\'s prayer) is a sentimental touch — it sounds traditional but Njegoš\'s Abbot deals in specific numbers and specific deaths, not general maternal feeling. The closing paradox "pobjeđuje i kad pogine" (wins even when he dies) is neatly formulated, the kind of thing you\'d put on a poster. Njegoš\'s paradoxes are more knotted and less comfortable. Also "bogat i moćan veoma" — the adverb "veoma" is modern standard Serbian, not the idiom of Gorski vijenac.',
    },
  ],
};

export default author;
