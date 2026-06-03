import type { Author } from '@/types/game';

const author: Author = {
  id: 'manzoni',
  name: 'Alessandro Manzoni',
  years: '1785–1873',
  nationality: 'Italiano',
  knownFor: 'I Promessi Sposi',
  snippets: [
    {
      id: 'manzoni-r1',
      text: `Quel ramo del lago di Como, che volge a mezzogiorno, tra due catene non interrotte di monti, tutto a seni e a golfi, a seconda dello sporgere e del rientrare di quelli, vien, quasi a un tratto, a ristringersi, e a prender corso e figura di fiume, tra un promontorio a destra, e un'ampia costiera dall'altra parte ; e il ponte, che ivi congiunge le due rive, par che renda ancor più sensibile all'occhio questa trasformazione, e segni il punto in cui il lago cessa, e l'Adda rincomincia, per ripigliar poi nome di lago dove le rive, allontanandosi di nuovo, lascian l'acqua distendersi e rallentarsi in nuovi golfi e in nuovi seni.`,
      isAI: false,
      source: 'I Promessi Sposi, Capitolo I',
      hint: 'Manzoni\'s geographic opening is not scenery: the lake narrowing into a river then widening again enacts the tension between natural freedom and imposed constraint that structures the entire novel. The narrator\'s voice is gently present — "par che renda ancor più sensibile all\'occhio" — pointing to a transformation rather than merely describing it. Cartographic precision (left bank, right bank, bridge-point) becomes compositional argument.',
    },
    {
      id: 'manzoni-r2',
      text: `Don Abbondio, curato d'una delle terre accennate di sopra, tornava, sul far della sera del giorno 7 novembre 1628, tranquillamente a casa sua, dopo una passeggiata. Diceva tranquillamente il suo uficio, e talvolta, tra un salmo e l'altro, chiudeva il breviario, tenendovi dentro il dito, e, se la strada era solitaria, si metteva a considerare i sassi della via, le foglie che cadevano una a una dagli alberi, e si posava qualche momento sullo spigolo di un muricciuolo, a guardare il tramonto che tingeva d'arancione un pezzetto di cielo in fondo alla valle, e il lago, ch'era disteso poco lontano, al basso.`,
      isAI: false,
      source: 'I Promessi Sposi, Capitolo I',
      hint: 'Don Abbondio is introduced through his cowardly habit of looking away: he studies stones, falling leaves, the sunset — anything rather than what is in front of him. The precise date (November 7, 1628) is Manzoni the historian; the finger kept in the breviary is Manzoni the ironist. "Tranquillamente" twice in the opening lines establishes a man whose tranquility is about to be destroyed, with "tranquillamente" doing ironic work both times.',
    },
    {
      id: 'manzoni-r3',
      text: `— Signor curato — disse don Rodrigo, con quell'atto di familiarità altezzosa, con cui i prepotenti trattano talvolta gli inferiori — , lei mi ha fatto una cosa che mi dispiace. Aveva in mano una cosa facile, che poteva finire con tutti i contenti, e ha voluto complicarla. E poi son rimasto in sospeso tutto il giorno, per aspettare una risposta che non viene. Se lei sapesse come son fatto, non si sarebbe preso quest'incomodo.

Queste parole, uscite con una calma sinistra, e accompagnate da un'occhiata, ch'esprimeva molte cose, produssero il loro effetto.`,
      isAI: false,
      source: 'I Promessi Sposi, Capitolo V',
      hint: 'Don Rodrigo is not described as menacing; he is described speaking "con quell\'atto di familiarità altezzosa" — the oxymoron of haughty familiarity is a precise social observation about how power performs itself. The narrator\'s parenthetical "con cui i prepotenti trattano talvolta gli inferiori" widens the individual scene to a social type — Manzoni\'s historicizing reflex. The menace arrives as understatement: words "uscite con una calma sinistra."',
    },
    {
      id: 'manzoni-r4',
      text: `Lucia non aveva mai pronunziato al marito le paure che le avevano messo addosso quelle parole. La poverina pensava : quel ch'è fatto è fatto ; è inutile inquietarlo con pensieri di cui non ci può rimediare. Senz'altro ragionamento, per pura bontà, s'era imposta questo silenzio ; e, per servirlo, s'era studiata di dissimulare la propria inquietudine. Renzo, intanto, non se n'era avveduto : l'uno e l'altra avevano creduto di fare il meglio, e avevano fatto il solito degli sposi.`,
      isAI: false,
      source: 'I Promessi Sposi, Capitolo X',
      hint: '"Avevano fatto il solito degli sposi" — they had done what spouses usually do — is Manzoni\'s narrator at his most gently ironic: a private misunderstanding widened to a universal type. The phrase "La poverina pensava" signals free indirect discourse that immediately becomes the sympathetic narrator\'s voice: Lucia\'s reasoning is reported with transparent affection. Manzoni\'s narrator has a moral personality — he weighs his characters\' souls, and tells us he is weighing them.',
    },
    {
      id: 'manzoni-r5',
      text: `Era una notte buia e silenziosa. La luna, già alta, stava nascosta da un gran velame di nuvole, che si estendeva in ponente, e dal quale qualche grosso fiocco pendeva sul meriggio : il vento spingeva quelle nuvole verso oriente, le trapassava di tratto in tratto una luna che traspariva come da un drappo grigio, e mostrava il paesaggio in una luce incerta, come un gran fondo pallido. I sentieri, le contrade, i prati, i campi si distinguevano a mala pena.`,
      isAI: false,
      source: 'I Promessi Sposi, Capitolo XVII',
      hint: 'The nocturnal landscape before Renzo\'s flight is rendered with historical precision (wind direction, cloud cover) rather than Romantic atmospherics. The moon glimpsed "come da un drappo grigio" (as through grey cloth) is a functional image, not a symbolic one. Manzoni\'s setting descriptions always serve orientation and moral atmosphere simultaneously — this landscape is uncertain because what Renzo is about to do is uncertain.',
    },
    {
      id: 'manzoni-ai1',
      text: `Don Abbondio aveva sempre saputo che il suo carattere non era fatto per le situazioni difficili. Non era una colpa, si ripeteva — era una questione di temperamento, di costituzione. Il coraggio è una virtù rara, e chi non ce l'ha non può fingere di averlo, così come chi non ha l'orecchio musicale non può fingere di sentire quello che non sente.

Mentre camminava verso casa, recitando il suo breviario con quell'aria distratta degli anni, pensava ai bravi che aveva incontrato. Aveva risposto come poteva, e nessuno avrebbe potuto fare di meglio, al suo posto. Così almeno si diceva, in quella piccola corte d'appello che ognuno tiene aperta in fondo all'anima, sempre pronta ad assolvere l'imputato principale.`,
      isAI: true,
      hint: '"Quella piccola corte d\'appello che ognuno tiene aperta in fondo all\'anima" is a witty image, but it belongs to the character\'s self-exculpatory interior monologue — whereas Manzoni\'s narrator makes his observations from outside and above, with historical and providential authority. Manzoni\'s Don Abbondio does not think this clearly about his own cowardice; the narrator exposes him through behavior and dialogue. The providential frame — where cowardice has consequences before God, not just before public opinion — is absent.',
    },
    {
      id: 'manzoni-ai2',
      text: `Lucia guardò il lago un\'ultima volta, prima di salire sul barco. Era cresciuta con quel lago davanti, e l'aveva guardato ogni giorno della sua vita senza mai pensarci. Solo adesso, nell'atto di lasciarlo, capiva quanto le fosse caro.

Era strana, la vita, pensò. Si capisce il valore delle cose solo quando le si perde. Ma era una riflessione troppo grande per quel momento, e Lucia la lasciò andare, e salì sul barco, e non guardò più indietro.`,
      isAI: true,
      hint: 'Lucia\'s interior reflection is too secular and too composed. Manzoni\'s Lucia is formed by faith and providence — her interior life is devotional and other-directed, not given to this kind of phenomenological observation about appreciating what one is losing. "Non guardò più indietro" is a neat valediction; Manzoni\'s narrator would not end the scene on Lucia\'s willpower but on the providential meaning of her departure.',
    },
    {
      id: 'manzoni-ai3',
      text: `Fra Cristoforo aveva visto molte cose nella sua vita, prima e dopo il convento. Aveva visto la superbia nelle sue forme più alte e nelle sue forme più basse, e aveva capito che la differenza era meno grande di quanto si pensasse. I signori si credono superiori per il potere ; i poveri si credono superiori per la virtù ; e tutti quanti si sbagliano, perché la superbia è superbia, qualunque veste indossi.

Eppure — questo era il paradosso che lo teneva sveglio — era necessario che esistessero uomini come don Rodrigo, perché senza di loro non ci sarebbero stati uomini come lui, voltisi al bene proprio per aver visto il male da vicino.`,
      isAI: true,
      hint: 'Fra Cristoforo reflecting on the "necessity of evil" is a theological position, but rendered as private late-night philosophy rather than the embodied providential drama of Manzoni\'s narrative. Providence in I Promessi Sposi acts through events and conversions; characters experience it, they do not explain it to themselves. The absence of Manzoni\'s ironic narrator — who would frame and weigh this reflection — leaves the character speaking into a void.',
    },
    {
      id: 'manzoni-ai4',
      text: `Il paese era ancora addormentato quando Renzo si avviò verso il mulino. L'aria aveva quel sapore particolare del mattino autunnale che Renzo non avrebbe saputo descrivere ma che riconobbe subito come il sapore della sua vita, di quella vita ordinaria e faticosa che aveva sempre condotto. Pensò a Lucia. Pensò alla loro casa, che non avevano ancora, ai loro figli, che non erano ancora nati. Pensò a tutto quello che avrebbe potuto essere. E in quel pensiero c'era qualcosa di dolce e di amaro insieme, come certe frutte di stagione.`,
      isAI: true,
      hint: 'Renzo thinking of "la loro casa, che non avevano ancora" is introspectively modern — Manzoni\'s characters are shaped by providence, by faith, by the pressures of seventeenth-century Lombardy, not by a literary interiority that contemplates unbuilt futures. "Come certe frutte di stagione" is a graceful simile but of the kind a literary narrator deploys, not what Renzo thinks. Manzoni\'s absent narrator — who contextualizes every individual moment in historical and moral terms — makes the passage float.',
    },
  ],
};

export default author;
