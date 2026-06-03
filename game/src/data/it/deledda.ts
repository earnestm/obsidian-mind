import type { Author } from '@/types/game';

const author: Author = {
  id: 'deledda',
  name: 'Grazia Deledda',
  years: '1871–1936',
  nationality: 'Italiana',
  knownFor: 'Canne al vento',
  snippets: [
    {
      id: 'deledda-r1',
      text: `Efix era seduto davanti alla capanna, sul ciglio del podere che digradava verso il mare. Il cielo e il mare erano d'un azzurro cupo, quasi viola, e la brughiera intorno, cosparsa di cisto e di lentischio, odorava forte e amaro nell'aria ferma del tramonto. Efix guardava giù verso il paese, le casette basse tra gli oleandri e i fichi d'India, i campanili delle chiese, il muro del cimitero. Sapeva che le padrone stavano aspettando il suo ritorno, e sentiva il peso di questa attesa come il peso della bisaccia quando è piena. Non c'era ragione precisa di rimandare, eppure rimandava, come rimanda chi sa di avere un conto da regolare e non ha ancora trovato il modo di pagare.`,
      isAI: false,
      source: 'Canne al vento, Capitolo I',
      hint: 'Deledda grounds Efix immediately in specific Sardinian botany (cisto, lentischio) and specific smells (strong and bitter in still evening air). The debt metaphor at the end is not psychological abstraction but economic: a debt to be settled, a way to pay not yet found. Efix\'s guilt is material and concrete, embedded in his relationship to the Pintor sisters, not a generic moral burden.',
    },
    {
      id: 'deledda-r2',
      text: `La madre di Elias era morta quando lui aveva tre anni, e suo padre, pastore nei pascoli di Oliena, lo aveva dato a crescere a una zia che aveva già cinque figli. Elias era cresciuto così, come crescono i cardi selvatici, senza che nessuno li coltivi e senza che nessuno li estirpi. A dodici anni guardava le greggi, a quindici portava i carichi sulle mulattiere della montagna. Il suo corpo si era fatto duro come il legno di olivastro, e i suoi occhi, abituati a scrutare l'orizzonte alla ricerca delle bestie perdute, avevano acquistato una capacità di vedere lontano che a volte lo spaventava lui stesso.`,
      isAI: false,
      source: 'Elias Portolu, Capitolo I',
      hint: 'The wild-thistle simile ("come crescono i cardi selvatici") is Sardinian flora, not decorative nature writing — the plant that grows without cultivation and without being uprooted. Deledda catalogues Elias\'s biography through labour at precise ages (12: herding flocks, 15: carrying loads on mountain paths). The olive-wood hardness is not heroic but ecological. The long-sighted eyes that frighten him are an observation, not a portent.',
    },
    {
      id: 'deledda-r3',
      text: `Zia Annedda Bellia era una di quelle vecchie sarde che sembrano fatte di pietra e di silenzio. Aveva ottant'anni e ne dimostrava settanta, e i suoi occhi neri brillavano ancora come gli occhi di una giovane donna. Viveva sola nella sua casetta ai margini del paese, con una capra, un cane e un gatto, e non aveva bisogno di nessuno. Conosceva le erbe medicinali, sapeva quando avrebbe piovuto guardando le stelle, e si diceva che capisse il linguaggio degli uccelli. Ma lei non incoraggiava queste voci : diceva semplicemente che aveva vissuto abbastanza a lungo per imparare quello che la gente giovane non sa ancora.`,
      isAI: false,
      source: "L'edera, Capitolo III",
      hint: 'The wise-old-woman figure is a Sardinian type Deledda uses with sociological precision: Zia Annedda\'s "magical" attributes (reading weather from stars, understanding birds) are presented as accumulated folk knowledge, not supernatural gifts. She actively deflates the mysticism attributed to her ("non incoraggiava queste voci"). Her material companions — goat, dog, cat — are specific and particular, not symbolic.',
    },
    {
      id: 'deledda-r4',
      text: `Anania non aveva ancora diciotto anni quando sua madre Olì fu arrestata. Fu un colpo che lo piegò come un ramo giovane sotto il peso di una neve improvvisa, ma non lo spezzò. Rimase a Nuoro, solo, e imparò a fare il sarto per non morire di fame. I ragazzi del vicinato lo chiamavano "figlio della bruciata" e lui non rispondeva, perché aveva già capito che certe parole bruciano solo se uno alza il fuoco. Lavorava tutto il giorno e di notte studiava, con una lanterna ad olio che tingeva di giallo le pagine del libro e le sue mani bucate dagli aghi.`,
      isAI: false,
      source: 'Cenere, Capitolo II',
      hint: 'The bending-branch simile is qualified immediately: it bent but did not break. Deledda\'s characters resist fate through specific acts, not through generic resilience. The cruelty of "figlio della bruciata" (son of the burned woman) is given without authorial commentary; Anania\'s response is a proverb-like practical wisdom delivered without sentimentality. The oil-lamp yellowing the book pages and his needle-scarred hands is physical, not literary.',
    },
    {
      id: 'deledda-r5',
      text: `Marianna Sirca aveva ereditato dalla madre il senso dell'ordine e dalla nonna materna qualcosa di più antico e di meno nominabile, una certa qualità di silenzio che non era tristezza ma non era nemmeno pace. Riusciva a stare ore seduta sul muretto del giardino guardando la campagna senza pensare a niente di preciso, come se la sua mente fosse un catino vuoto che aspettava. Quando Simone Sole le fu presentato al mercato di Nuoro, lei lo guardò con quegli stessi occhi quieti e lui, che non aveva paura di nessuno, abbassò gli sguardi per primo.`,
      isAI: false,
      source: 'Marianna Sirca, Capitolo IV',
      hint: 'The maternal inheritance is split along two lines: the mother\'s sense of order, and something older and "less nameable" from the maternal grandmother — a quality of silence that is neither sadness nor peace. Deledda refuses to name this quality precisely, which is her form of precision. The first meeting with Simone is rendered through eye-contact and who looks away first — a power dynamic in gesture, not in description.',
    },
    {
      id: 'deledda-r6',
      text: `Il viaggio da Nuoro a Orosei si faceva allora a cavallo, attraverso i monti del Gennargentu, e ci voleva una giornata intera. Partivano all'alba, con le bisacce piene di pane carasau e formaggio, e arrivavano a sera con le gambe indolenzite e i vestiti impregnati dell'odore del sudore e della macchia. La strada, se così si poteva chiamare, era un sentiero di capre che saliva e scendeva senza requie, tra massi di granito e macchie di corbezzolo e di mirto che in certi punti chiudevano il passaggio. Chi non conosceva quei monti ci si perdeva facilmente, e ci si perdeva anche chi li conosceva, quando la nebbia scendeva.`,
      isAI: false,
      source: 'Elias Portolu, Capitolo V',
      hint: 'Deledda gives travel time, specific provisions (pane carasau, cheese), specific botanical landmarks (strawberry-tree, myrtle), specific geology (granite boulders), and specific weather risk (fog). Nothing is symbolic; everything is navigational. The road is defined by its absence of the name ("se così si poteva chiamare") — it is a goat path. The closing clause — even those who knew the mountains got lost in fog — is matter-of-fact risk assessment, not ominous foreshadowing.',
    },
    {
      id: 'deledda-ai1',
      text: `Il sole tramontava sulla Sardegna come un'enorme palla di fuoco, tingendo di rosso e di viola le rocce antiche e il mare lontano. Efisio guardava questo spettacolo grandioso con l'anima piena di una malinconia profonda e antica, quella malinconia che è propria degli uomini del sud, cresciuti tra la luce accecante e l'ombra densa, tra la vita e la morte che si inseguono come giorno e notte. Sentiva il peso della tradizione sulle spalle, il fardello di secoli di fede e di superstizione, e sapeva che non avrebbe mai potuto liberarsi di quel peso, perché era la sua terra, il suo sangue, la sua anima.`,
      isAI: true,
      hint: '"La malinconia propria degli uomini del sud" is exactly the generic south-Italian generalisation that replaces Deledda\'s Sardinian specificity. Deledda never writes "uomini del sud"; she writes Nuorese, Orgolese, Barbagia. The "enormous ball of fire" sunset and the "ancient rocks" are scenic backdrop; Deledda\'s landscape is specific botany and navigational terrain. The blood-and-soul catalogue at the end is the Catholic-guilt abstraction that replaces her more animistic, fate-as-physical-weight characterisation.',
    },
    {
      id: 'deledda-ai2',
      text: `La festa di Sant'Antonio era l'occasione più importante dell'anno per il paese, il momento in cui le tensioni accumulate nei mesi di lavoro e di silenzio esplodevano in musica e ballo e vino. Tutti vi partecipavano, anche chi si odiava, anche chi aveva un lutto recente — perché le feste sono più forti del dolore individuale, perché il rito collettivo assorbe e trasforma le pene personali in qualcosa di più grande. Maria danzava con gli altri senza pensare, lasciandosi portare dal ritmo dei tamburelli, e per un'ora dimenticò tutto : la povertà, l'uomo che aveva perduto, la paura del futuro.`,
      isAI: true,
      hint: 'The generalisation about festivals overpowering grief ("le feste sono più forti del dolore individuale") is sociological thesis-writing, not Deledda\'s mode. She would show the festival through specific sensory and ritual detail — what bread is made, what prayers are said, who walks in procession behind which saint. Maria\'s forgetting everything ("la povertà, l\'uomo, la paura") in a catalogue of abstractions is the psychological-abstraction mode Deledda replaces with fate as physical weight.',
    },
    {
      id: 'deledda-ai3',
      text: `Salvatore portava dentro di sé il peccato come una pietra conficcata nel petto. Lo sentiva fisicamente, ad ogni respiro, in certi momenti più acuto e in altri attutito, ma sempre presente, sempre lì. Aveva tentato di confessarsi, ma le parole del prete gli sembravano parole di un altro mondo, un mondo dove le cose si potevano pesare e misurare e poi perdonare con una formula. Il suo peccato era diverso, radicato nel sangue, nella terra, nel silenzio di queste montagne che non perdonano e non dimenticano. Aveva capito che per lui non c'era assoluzione possibile in questa vita.`,
      isAI: true,
      hint: 'Sin-as-stone-in-the-chest is a plausible Deleддian metaphor, but the subsequent development — confession inadequate because abstract, sin rooted in blood and earth and mountains — escalates into rhetorical self-pity that Deledda resists. Her characters carry guilt in action and avoidance, not in internal soliloquy. "Le montagne che non perdonano e non dimenticano" is Gothic personalisation of landscape; Deledda\'s mountains are obstacles and navigation problems.',
    },
    {
      id: 'deledda-ai4',
      text: `Il nuraghe si ergeva contro il cielo come il silenzioso testimone di millenni, guardiano di segreti che nessuna lingua vivente avrebbe mai potuto decifrare. Attorno ad esso cresceva la macchia in un cerchio quasi perfetto, come se la natura stessa rispettasse la sacralità del luogo. Antonio si avvicinò lentamente, con quella reverenza istintiva che i sardi provano davanti ai resti dei loro antenati, quella consapevolezza oscura di essere gli eredi di qualcosa di più grande di loro. Toccò il granito caldo e sentì vibrare nella pietra un'energia antica, il respiro di un mondo che non esiste più ma che non ha mai smesso di essere.`,
      isAI: true,
      hint: 'Deledda mentions nuraghi as landscape markers — waypoints in Sardinian topography — but she never mystifies them as "silent witnesses of millennia" or gives her characters reverential responses to them. "Un\'energia antica che vibra nella pietra" is new-age spirituality layered onto Sardinian setting. Antonio\'s mystical response is the animistic-fate abstraction that replaces Deledda\'s actual animism, which works through specific ritual and custom, not through generic "ancient energy."',
    },
    {
      id: 'deledda-ai5',
      text: `Gonaria aveva visto nascere e morire tre generazioni nella stessa casa, e questo le aveva dato una saggezza tranquilla e quasi feroce che spaventava le persone più giovani. Non aveva mai lasciato il paese, non aveva mai voluto farlo. Il mondo di là dai monti era per lei una favola raccontata dai viaggiatori, qualcosa di lontano e di poco reale come le stelle. Il suo mondo era questa cucina, questo orto, questo pozzo, e i volti delle persone che aveva amato e che erano morti. Si sentiva custode di qualcosa che non si poteva nominare, e sapeva che quando lei fosse morta, quella cosa sarebbe morta con lei.`,
      isAI: true,
      hint: 'Deledda\'s old women are specific in their knowledge and practice: they know which herbs cure which ailments, they perform specific rites. The "saggezza quasi feroce" and the "qualcosa che non si può nominare" that will die with her are mystifying gestures where Deledda would be concrete. The closing sentiment — unnamed thing dying with its guardian — is sentimental elegiac mode; Deledda\'s deaths are specific material losses, not symbolic extinctions.',
    },
  ],
};

export default author;
