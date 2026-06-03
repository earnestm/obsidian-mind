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
Браћо моја, дошло је вријеме
да се одлучимо: ко смо и шта смо.
Нијесмо ли ми Срби јунаци
који смо бранили слободу своју
вековима против тамних сила?
Нијесмо ли крвљу купили право
да живимо слободни на земљи?
Ако јесмо — онда нека знамо
да ово није тренутак слабости,
него тренутак највеће снаге.
Устајте, браћо, час је ударио!
Ко не устане данас са нама,
нека зна да је издао крв
свих оних који прије нас умрше.`,
      isAI: true,
      hint: 'The heroic address lacks Njegoš\'s formulaic specificity: proper names, bird-epithets, geographic anchors (specific villages, specific passes). "Дошло је вријеме да се одлучимо" is a general political rallying cry; Njegoš\'s speeches are always embedded in specific historical situations — the Christmas-night council, the particular apostasy being judged. The oral epic\'s theological weight, its cosmic honor-system, is replaced by more generic patriotic sentiment.',
    },
    {
      id: 'njegos-ai2',
      text: `Вук Мићуновић:
Владико, шта је слобода без жртве?
Праздна ријеч, звук без садржине.
Ми смо Срби, ми смо Черногорци,
крв нам тече у жилама истим,
планине нам стоје под небесима.
Нека знају Турци и невјерни
да је боља честна смерт на борби
него живот у срамоти тешкој.
Наши оци тако нам завјешташе,
наши дједи тако нас учише —
и ми данас по том завјету ходим,
јер је то наш образ и наш закон,
јер је то наша вјера и слобода.`,
      isAI: true,
      hint: 'The formulaic elements are present — "образ," ancestor-invocation, the contrast of honorable death and shameful life — but deployed without Njegoš\'s specific historical texture. His speeches name clans, battles, specific years; they are addressed to specific interlocutors in a specific dramatic situation. "Праздна ријеч, звук без садржине" is a reasonable gnomic statement, but Njegoš builds his aphorisms through the escalating structure of the oral epic, not through compressed definition.',
    },
    {
      id: 'njegos-ai3',
      text: `Владика Данило:
Гледам ноћас звезде на небесу,
бројим их и бројати не могу.
Тако беше и народа нашег —
прекривао земљу ка звездице.
Сад нас мало, па смо ипак јаки,
јер нас крепи вера и образ наш.
Нека дође ко год хоће на нас,
наћи ће ту кланицу и гроб свој,
наћи ће ту ватру и олујно,
у планини нашој поноситу.`,
      isAI: true,
      hint: 'The star-counting image is poetically appealing but too literary in its execution — Njegoš\'s celestial imagery is theological and heroic, not elegiac in this pastoral manner. "Бројим их и бројати не могу" is a smooth line, but Njegoš\'s verse is architecturally structured through antithesis and escalating parallelism, not through this kind of lyrical observation. The final boast ("наћи ће ту ватру и олујно") lacks the formulaic specificity — named enemies, named terrain — of the genuine heroic mode.',
    },
    {
      id: 'njegos-ai4',
      text: `Игуман Стефан:
Тешка је борба с многобројним светом,
кад само неколико вас стоји.
Али јунак није он ко бројем
надвладава, него ко срцем бди.
Ми смо мали народ у планини,
али смо свободан и поносит.
Слобода се крвљу откупљује
и она се крвљу задржава.
Свако племе нека да свог сина,
свако огњиште нека гори светло —
па ћемо ми, браћо, бити јаки,
па ћемо ми с Богом победити!`,
      isAI: true,
      hint: '"Јунак није он ко бројем надвладава, него ко срцем бди" is a correct heroic sentiment but stated as an abstract maxim rather than through the dramatic action in which Njegoš\'s characters embody their code. The Abbot in the real text speaks from specific experience — counting the specific dead of the previous winter. "Свако огњиште нека гори светло" (let every hearth burn bright) is a generic image; Njegoš names specific hearths, specific clans, specific obligations.',
    },
  ],
};

export default author;
