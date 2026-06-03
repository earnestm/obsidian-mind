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
      text: `Bio jedanput jedan car, pa imao tri sina. Kad car ostarje i kad mu dođu oči, on dozove sinove pa im kaže: — Čujem da ima negdje na svijetu zlatna jabuka koja mi može oči izliječiti; ko je donese njemu ću ostaviti carstvo. — Sinovi mu odgovore da će poći tražiti, i najstariji zaišti od oca konja i oružje pa pođe. Putem sretne jednoga sjedoga starica, koji ga upita: — Kuda ideš, junače? — A on, ne htijući da kaže, odgovori: — To tebe ništa nije. — Onda mu starac reče: — Pođi zdrav! — a on mu okrenu ledja i ode.`,
      isAI: false,
      source: 'Srpske narodne pripovijetke, "Zlatna jabuka i devet paunica"',
      hint: 'The opening formula — "Bio jedanput jedan car" (Once upon a time there was a tsar) — is not a literary convention but a precise generic marker: this is a Serbian fairy tale, and the formula initiates the tale-world. The three sons, the king\'s aging, the quest object, the road encounter — all are deployed with the narrative economy of oral tradition. The eldest son\'s rudeness to the old man ("To tebe ništa nije") is the moral mechanism set up: the formula guarantees he will fail.',
    },
    {
      id: 'karadzic-r2',
      text: `Onda dođe i srednji sin, pa isto tako zaišti konja i oružje, i krene na put. I njega sretne onaj isti starac na istome mjestu, i upita ga isto ono što i prvoga: — Kuda ideš? — A i on odgovori na isti način: — To tebe ništa nije. — I njemu starac kaže: — Pođi zdrav! — On okrete leđa i ode, kao i brat mu. Najposlije dođe i najmlađi sin, Bogdan, i zaišti konja i oružje da ode i on tražiti jabuku. Otac mu ne htije dati konja, govoreći: — Šta ćeš ti tamo, kade ni starija braća ne mogaše naći!`,
      isAI: false,
      source: 'Srpske narodne pripovijetke, "Zlatna jabuka i devet paunica"',
      hint: 'The exact repetition — second son encounters the same old man, gives the same rude answer — is not redundancy but the folk tale\'s tripartite structure doing its formal work. The repetition is the genre. The youngest son\'s name (Bogdan — "given by God") and the father\'s reluctance to let him go are both traditional markers: the least-expected hero, the father\'s doubt. Karadžić transcribes this oral logic with complete fidelity and without literary embellishment.',
    },
    {
      id: 'karadzic-r3',
      text: `On stane pa se zahvali starcu, a starac mu reče: — Idi ravno, i naći ćeš jednu česmu s vodom : ne pij vode, niti potuci konja da pije, nego idi dalje, pa ćeš naći drugu česmu; ne pij ni iz nje, niti konja napajaj, nego idi pa ćeš naći treću česmu: iz te pij i konja napajaj. — Bogdan zahvali starcu i krene dalje. Dođe do prve česme; konj hoće da pije, no on ga ne da, nego idu dalje. Dođe do druge, konj opet hoće da pije, no on ga udari šibom pa idu dalje. Dođe do treće česme, ondje i sam pije i konja napaja.`,
      isAI: false,
      source: 'Srpske narodne pripovijetke, "Zlatna jabuka i devet paunica"',
      hint: 'The three fountains follow immediately on the old man\'s instruction, with exact parallel narration: "Dođe do prve česme... dođe do druge... dođe do treće." The folk tale\'s formal parallelism is here at its most transparent — not literary repetition for rhythm but structural logic: test, test, correct action. The hero\'s obedience to the old man\'s instructions is the moral contrast to his brothers\' rudeness, and it is demonstrated through behavior, not stated.',
    },
    {
      id: 'karadzic-r4',
      text: `Bio jedanput jedan siromah koji nije imao ništa. Pa jedanput ore, i orući nađe u zemlji lonac pun žutijeh dukata. Izvadi lonac i misli šta će. Kad se, eto ti, pojavi đavo pa mu kaže: — Šta je tvoje, daj mi; šta je moje, neka je tvoje. — Siromah, ne znajući šta to može biti, pristane, i đavo iščezne. Siromah ponese lonac kući i bude bogat. Žena mu se obraduje i pita ga otkud toliko blago; on joj ispriča sve kako je bilo, a žena mu reče: — Nije dobro, bojim se da te ne prevari đavo.`,
      isAI: false,
      source: 'Srpske narodne pripovijetke, "Čovjek i đavo"',
      hint: 'The compressed opening — "Bio jedanput jedan siromah koji nije imao ništa" — establishes the character in one clause through absolute poverty. The devil\'s appearance and his offer are reported without pause or wonder: this is the folk tale\'s characteristic absence of psychological reaction. The wife\'s immediate practical warning ("Bojim se da te ne prevari đavo") is the common sense of folk wisdom, never of romance. Every sentence is load-bearing; nothing is atmospheric.',
    },
    {
      id: 'karadzic-r5',
      text: `Bila jedna mlada udovica koja je imala jednog sina. Dječak je bio pametan i vješt, i od malih nogu znao je razlikovati dobro od zla. Majka ga je odgajala kako je mogla, u siromaštvu ali pošteno, i uvijek mu govorila: — Sine, budi pošten i Bog ti neće ostaviti. — Jednog dana, kad je dječak bio dovoljno star, reče mu majka: — Pođi u svijet, sine, traži sreću svoju. Budi pošten s ljudima i Bog ti neće dati da strada. — Dječak se zahvali majci, uzme u torbu malo hljeba i sira, pa pođe.`,
      isAI: false,
      source: 'Srpske narodne pripovijetke, "Djevojka cara nadmudrila"',
      hint: 'The mother\'s repeated formula — "Budi pošten i Bog ti neće ostaviti" (Be honest and God will not forsake you) — is the folk tale\'s moral code stated directly, not symbolized. "Uzme u torbu malo hljeba i sira" (took a little bread and cheese in his bag) is the hero\'s equipment: modest, specific, concrete. Folk tale departures always catalogue the exact provisions. The absence of psychology and interiority is not a limitation but the genre\'s distinctive moral clarity.',
    },
    {
      id: 'karadzic-ai1',
      text: `Bio je jednom jedan mladi junak koji je živio u malome selu na rubu velike šume. Bio je poznat po svojoj snazi i hrabrosti, ali još više po svojoj dobroti, koja je bila rijetka u tim krajevima. Jednog jutra, dok je junak još spavao, začuo je čudan glas koji ga je zvao iz šume. Ustao je, obukao se, i pošao da vidi ko ga zove. Šuma je bila tiha i tamna, i što je dalje išao, to mu je srdce jače tucalo. Ali on nije okrenuo.`,
      isAI: true,
      hint: 'The fairy tale formula is missing: there is no "Bio jedanput" opening, no numbered quest, no old man on the road. "Bio poznat po svojoj snazi i hrabrosti, ali još više po svojoj dobroti" over-explains the hero\'s qualities rather than demonstrating them through the action the genre requires. "Srdce jače tucalo" (heart beating harder) is psychological interiority — folk heroes do not report fear internally; they show courage through action. Literary embellishment has replaced formulaic economy.',
    },
    {
      id: 'karadzic-ai2',
      text: `Jednog dana jedan car pozva svog najstarijeg sina i reče mu: — Čujem da daleko odavde živi jedna vila koja zna tajnu vječnog života. Ko je nađe i donese mi tu tajnu, njemu ću ostaviti carstvo i sve što imam. — Sin se odmah spremi i pođe na put. Jahao je tri dana i tri noći, prešao je visoke planine i duboke rijeke, i stigao na jednu veliku livadu gdje je vidio bijelu vilu kako pleše. Prišao joj je i rekao: — O, vilo, car moj traži tajnu vječnog života.`,
      isAI: true,
      hint: 'The folk-tale structure is recognizable (three-day journey, the vila) but the execution is literary: "visoke planine i duboke rijeke" are generic landscape rather than the specific geography of Serbian folk tales. The son approaches the vila and speaks immediately — in the genuine folk tradition, these encounters involve tests of knowledge, riddles, or formulaic exchanges with strict rules. "Tajnu vječnog života" (secret of eternal life) is also not a typical Serbian folk-tale quest object, which is usually concrete (a golden apple, a specific bird).',
    },
    {
      id: 'karadzic-ai3',
      text: `Bila jednom jedna djevojka, lijepa ko sunce, pametna ko zmaj. Imala je tri prosioca: jedan je bio bogat, drugi je bio hrabar, a treći je bio mudar. Djevojka nije znala koga da izabere, pa ode da upita staru babu koja je živjela u šumi i koja je znala sve tajne ovoga svijeta. Baba je saslušala djevojku i rekla joj: — Bogat čovjek može kupiti mnogo, hrabar čovjek može odbraniti mnogo, ali mudar čovjek može razumjeti sve. Izaberi mudrog.`,
      isAI: true,
      hint: 'The three-suitor structure is correct, and "lijepa ko sunce, pametna ko zmaj" uses authentic simile forms. But the resolution — the old woman gives direct advice that the girl follows — collapses the folk tale\'s typical elaborate testing sequence into a single moral aphorism. Karadžić\'s folk tales resolve through action, trial, and demonstrated behavior; wisdom is shown by what characters do, not stated by oracles. "Izaberi mudrog" as a closing moral is too direct even for the didactic folk register.',
    },
    {
      id: 'karadzic-ai4',
      text: `Živio jednom jedan car koji je imao kćer jedinicu, lijepu kao da je od zlata. Svaki je junak koji bi je vidio zaboravio na sve drugo i mislio samo na nju. Car je objavio po cijeloj zemlji: — Ko hoće da se oženi mojom kćerju, neka dođe i postavi sebi zadatak koji može ispuniti, pa ću mu je dati. — I dolazili su junaci iz svih krajeva, ali nijedan nije mogao ispuniti zadatak koji bi sebi postavio, i svi bi se vraćali kući praznih ruku i puna srca.`,
      isAI: true,
      hint: 'The suitor contest is a genuine folk structure, but "neka dođe i postavi sebi zadatak koji može ispuniti" (let him come and set himself a task he can accomplish) is a confused formula — in genuine Serbian folk tales the tsar sets the task, or the princess sets the riddle; the suitors do not choose their own. "Praznih ruku i puna srca" (empty hands and full hearts) is a literary chiasm not found in oral folk narrative. The formulaic closing — the unsuccessful suitors — lacks the tripartite structure with its correct failure, correct failure, correct success.',
    },
  ],
};

export default author;
