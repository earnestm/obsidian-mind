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
      text: `Владика Данило:
Проклета да је крвава вечера
која нас је стала толке браће!
Али нас је крвљу вјенчала
и у кољено братско примила,
ко вјенчаник приме своју невјесту.
Ој Церово, племе соколово!
Ој Батрићу, соколе сребрни!
Коме сам ти очи затворио,
драга ли си ми ти крв пролио!
Кад помислим двадесет и пет
удовица младих оцвилелих,
педесет ти сирота без оца —
сузе, сузе, ал немаш граница!`,
      isAI: false,
      source: 'Gorski vijenac, стихови 489–502',
      hint: 'The formulaic apostrophe — "Ој Церово, племе соколово! / Ој Батрићу, соколе сребрни!" — is the oral epic tradition concentrated: the bird-epithet (сокол/falcon) applied to tribe and fallen warrior alike. Grief in the Montenegrin heroic mode is always counted: двадесет и пет удовица (twenty-five widows), педесет сирота (fifty orphans). The final broken exclamation — "сузе, сузе, ал немаш граница!" — breaks the verse form as tears break the voice.',
    },
    {
      id: 'njegos-r2',
      text: `Вук Мићуновић:
Владико, све нам очи суза вриједе
кад гледамо ово страшно бреме —
биједа наша на биједу пала,
невоља нам невољу изнедрила.
Мртви брате пред живијем братом,
отац мртав пред живијем сином —
ово грдно гледати је, владико!
Ако земља може трпјет ово,
ако небо може трпјет ово
и лице му не заруди срамом,
ако наша вјера не навали
сузама, за осветом, на нас —
онда смо ми стока, а не људи,
онда немо слобода ни права!`,
      isAI: false,
      source: 'Gorski vijenac, стихови 510–523',
      hint: 'The anaphora — "Мртви брате пред живијем братом, / отац мртав пред живијем сином" — places death spatially in front of life. The conditional escalation ("Ако земља... ако небо... ако наша вјера") makes shame cosmic before reaching the moral conclusion: if heaven and earth can endure this dishonor, then they would be livestock, not men. Cosmic shame is the Montenegrin heroic register — "образ" (face/honor) operates at the level of heaven itself.',
    },
    {
      id: 'njegos-r3',
      text: `Игуман Стефан:
Ова зима доведе до краја
оно чему ни краја видјети
са прољећа није могло бити.
Умрла је посљедња невала —
гробље ли је наше племе право!
Прошле зиме у нашем предјелу
помрије нас до двесте и педест,
а до сто нам у турске лапе паде.
Остадосмо — откад смо постали,
мислим, мањи никад нијесмо,
бројем мањи, а снагом јачи!
Јер смо нашу земљу утврдили
крвљу наших Турака и браће.`,
      isAI: false,
      source: 'Gorski vijenac, стихови 560–572',
      hint: 'The Abbot\'s accounting integrates precise numbers into the heroic register: "до двесте и педест" dead, "до сто" captured. This is how Njegoš merges Montenegrin historical memory with epic form — the specific winter, the specific losses, the specific toll. The paradox "бројем мањи, а снагом јачи!" (fewer in number, stronger in force) is the heroic code stated as lived experience, not as aspiration. Blood shed literally fortifies the land.',
    },
    {
      id: 'njegos-r4',
      text: `Владика Данило:
Тешко ономе ко живи срамотно!
Лакше мртав под земљом лежати
нег живити у срамоти тешкој.
Гробља нема без мртвијех кости,
ни јунаштва без жртве и крви.
Нек живота нам душманин жали,
нек нам жали сваке ситне мозге —
а ми смо му сузе посушили,
вјеком смо га навикли на мач наш!
Тешко ономе ко нема образа,
а лако ономе ко образ има;
ко без образа живи на свијету,
тај без гроба и умрети мора.`,
      isAI: false,
      source: 'Gorski vijenac, стихови 602–615',
      hint: 'The gnomic structure — paired fates, opposed lives and deaths — is the oral-heroic mode: wisdom stated as universal law before application. "Образ" (honor-face, public honor) is the key term: to live without it is not merely to die badly but to die without burial — the deepest Montenegrin curse. "Ко без образа живи на свијету, / тај без гроба и умрети мора" — the conditional links cosmic honor to the specific material fate of an unburied corpse.',
    },
    {
      id: 'njegos-r5',
      text: `Вук Мићуновић:
О свемоћни господе велики!
Ти си правда, ти си сила права,
ти владаш и овим свијетом горким.
Земља блати ноге путниковим,
небо брани главу путниковим.
Нас прострла рука неумитна
исмеана, прождрљива клетва
живота и вјечне погибије.
Ђе је роду нашему одушка,
ако не је боја и освете,
ако не је слободне погибије?
Богу нема нашему молитве,
него ломљење мача у кости,
него земља крвљу натопљена.`,
      isAI: false,
      source: 'Gorski vijenac, стихови 540–553',
      hint: 'Prayer in Njegoš is inseparable from battle: "Богу нема нашему молитве, / него ломљење мача у кости." The sword breaking in bone is not just warfare — it is the only liturgy available to the Montenegrin people in this version of the heroic code. The rhetorical question "Ђе је роду нашему одушка" (Where is our people\'s release?) is not despairing but locates the answer in "слободне погибије" — a free death in battle. The theological and martial are inseparable.',
    },
    {
      id: 'njegos-ai1',
      text: `Владика Данило:
Браћо моја, погледајте ове горе,
погледајте небо над Црном Гором.
Ту смо ми одвијек живјели слободни,
ту смо крвљу своје право стекли.
Јунаштво је наша вјера стара,
слобода је наша света дужност.
Ко изда браћу, изда и Бога,
ко клекне вражји, клекне душом својом.
Не бојте се мача ни ватре,
не бојте се броја ни надмоћи —
јер је боља честна смерт у боју
него срамотан живот у ропству.
Тако нам је образ заповједио,
тако нам је вјера завјештала.`,
      isAI: true,
      hint: 'This sounds like ChatGPT answering "write a speech by Bishop Danilo." It assembles correct vocabulary — образ, јунаштво, слобода, вјера — but in generic sequence, like a checklist. No specific people are named, no specific event is addressed. The antithesis "честна смерт / срамотан живот" appears in the real text too, but here it arrives as a standalone maxim with no dramatic context. The closing couplet ("тако нам је образ заповједио / тако нам је вјера завјештала") is neat parallel structure that wraps everything up — Njegoš builds toward peaks, not toward tidy summaries.',
    },
    {
      id: 'njegos-ai2',
      text: `Вук Мићуновић:
Владико, ко се рађа у планини
тај зна шта значи мраз и камен тврди.
Ми нијесмо меко рођени,
нити смо по равници одрасли.
Свака кап крви наше племенске
плаћена је у борби и невољи.
Не жалимо ни живот ни млађаност,
јер живот без части није живот —
то је само биједа без образа,
то је само дисање и ништа.
Нека знају и пријатељ и душман
да Мићуновић неће клекнути,
нити ће му потомство то учинит
докле год горе стоје и ријеке.`,
      isAI: true,
      hint: 'The mountain/plainsman contrast is generic, not anchored to a specific clan or event. "Нека знају и пријатељ и душман" is the kind of symmetrical public-address formula LLMs reach for — announcing to an abstract audience rather than speaking to a specific character in a charged dramatic moment. The passage assembles correct heroic vocabulary (образ, крв, борба) at even emotional temperature throughout, where the real Gorski vijenac builds toward specific peaks of grief or rage through named individuals and events. "Докле год горе стоје и ријеке" is a convenient noble-sounding closure; Njegoš\'s commitments emerge from specific dramatic pressures, not from generic nature imagery.',
    },
    {
      id: 'njegos-ai3',
      text: `Владика Данило:
Тешка је то судбина, браћо моја,
кад народ плаче и жали за својим.
Гробови су по свим пољанама,
мртви јунаци под сваким каменом.
Али душа народа не умире,
јер је душа јача него тијело.
Иза сваке ноћи долази зора,
иза сваког бола долази снага.
Ми ћемо опет дигнути главу,
ми ћемо опет бити оно што смо,
јер таква је природа слободе —
она гори јаче кад је угњетавају,
она расте дубље кад је сломе,
она живи вјечно у народу правом.`,
      isAI: true,
      hint: 'The closing line is the clearest tell: "јер таква је природа слободе" is exactly the kind of thematic summary sentence LLMs add to round off a passage. Njegoš never explains what the nature of something is — he enacts it through dramatic action and image. The rest is smooth but generic: "иза сваке ноћи долази зора" (after every night comes dawn) is a proverb-level cliché. Notice also how the emotions are named — "плаче и жали," "бола," "снага" — rather than shown through the specific physical and dramatic detail that makes the real Gorski vijenac vivid.',
    },
    {
      id: 'njegos-ai4',
      text: `Игуман Стефан:
Немојте мислити да нас је мало,
браћо моја, чеда Черне Горе.
Ми нијесмо мало кад је Бог с нама,
ми нијесмо слаби кад је образ чист.
Душманин је бројан и надмоћан,
душманин је богат и моћан веома —
али душманин нема оно наше
чиме ми надилазимо сваку силу:
вјеру праву, слободан дух и образ,
завјет оцâ и материна молитва.
Зато стојте и не уступајте,
зато стојте часно и поштено,
јер ко стоји с Богом и с образом,
тај побјеђује и кад погине.`,
      isAI: true,
      hint: 'The Abbot here speaks in perfect motivational-speech rhythm: build up the enemy, then flip it with "али." "Материна молитва" (mother\'s prayer) is a sentimental touch — it sounds traditional but Njegoš\'s Abbot deals in specific numbers and specific deaths, not general maternal feeling. The closing paradox "побјеђује и кад погине" (wins even when he dies) is neatly formulated, the kind of thing you\'d put on a poster. Njegoš\'s paradoxes are more knotted and less comfortable. Also "богат и моћан веома" — the adverb "веома" is modern standard Serbian, not the idiom of Gorski vijenac.',
    },
  ],
};

export default author;
