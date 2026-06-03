import type { Author } from '@/types/game';

const author: Author = {
  id: 'pirandello',
  name: 'Luigi Pirandello',
  years: '1867–1936',
  nationality: 'Italiano',
  knownFor: 'Il fu Mattia Pascal',
  snippets: [
    {
      id: 'pirandello-r1',
      text: `Una delle poche cose, anzi forse la sola ch'io sapessi di certo era questa : che mi chiamavo Mattia Pascal. E me ne approfittavo. Ogni qual volta qualcuno de' miei amici o conoscenti dava segni di non essere troppo contento di sé, della propria vita, della propria moglie, io m'avvicinavo e, compatendolo con gli occhi, di soppiatto : — Siete ancor fortunato, gli dicevo, — ch'almeno sapete chi siete.

Perché per me questa non era più una consolazione. Sapevo ch'ero Mattia Pascal. E allora? Questo nome, queste due parole : Mattia Pascal. Senz'altro. Null'altro. Questo ero. Mattia Pascal. Ma che vuol dire Mattia Pascal? Vuol dire niente.`,
      isAI: false,
      source: 'Il fu Mattia Pascal, Capitolo I, "Premessa"',
      hint: 'The circular logic — Mattia knows only his name, consoles others with this knowledge, then undermines the consolation for himself — is Pirandello\'s philosophical humor enacted, not explained. "Mattia Pascal. Senz\'altro. Null\'altro." The rhetorical self-repetition performs the hollowness it describes. The narrator establishes himself as unreliable from the first sentence: he "approfittava" (exploited) his one certainty, even while preparing to demolish it.',
    },
    {
      id: 'pirandello-r2',
      text: `Ebbene, io avevo anche la moglie! — Sissignori. E se qualche prudente persona pensa che potevo benissimo fare a meno di prendermela, gli dico senz'altro ch'essa se la prese da sé, come se la pigliano tutti. Non c'è rimedio. Si nasce, si vive, si muore — ah sì, si muore anche — si cresce, si fa la scuola, s'impara qualcosa, ci s'innamora... quella cosa lì che si chiama amore, di cui si parla tanto — s'innamora, ci si sposa; poi si hanno i figliuoli, — e nascono anche loro, come noi siamo nati, senza saperlo — poi s'invecchia, poi si muore, — come ho detto.`,
      isAI: false,
      source: 'Il fu Mattia Pascal, Capitolo II, "Premessa seconda"',
      hint: 'The parenthetical "(ah sì, si muore anche)" is Pirandello\'s comedy: Mattia almost forgot death, and corrects himself mid-sentence as if death were an administrative detail he nearly left off a list. The impersonal "si" — one is born, one lives, one marries — distances the narrator from his own biography even while describing it. The closing "come ho detto" mocks both the list\'s logic and the narrator\'s reliability.',
    },
    {
      id: 'pirandello-r3',
      text: `Devo dunque avvertire che io uso il termine "pirandellismo" soltanto per comodità di discorso, intendendo con esso quella particolare condizione dell'animo mio — non so come altro chiamarla — per cui mi pareva di esistere fuori di me stesso, di vedermi da lontano, come uno spettatore del proprio spettacolo. Era come se io portassi dentro di me un altro me, che mi guardava con ironia, col quale però non riuscivo a parlare, perché appena mi rivolgevo verso di lui, scompariva.

Non ne soffrivo però, ecco il punto. O forse ne soffrivo, ma non sapevo d'esserne causa io stesso.`,
      isAI: false,
      source: 'Uno, nessuno e centomila, Libro Primo, Capitolo I',
      hint: 'Pirandello coins a term for his own condition ("pirandellismo") with self-mocking irony — the philosopher who needs a word for his philosophy before he has lived it. The inner observer who vanishes when addressed directly is the novel\'s central joke: self-consciousness that defeats its own object. "Non ne soffrivo però, ecco il punto" — the comic reversal, delivered as if this were the most important finding, is Pirandello\'s philosophical humor at full power.',
    },
    {
      id: 'pirandello-r4',
      text: `— Veda, — riprese l'Anselmo Paleari, sbuffando un'altra boccata di fumo — l'uomo che pensa è come uno che ha una lanterna cieca accesa in testa. Cammina, cammina per le strade buie della vita, e illumina, sì, qualche piccolo spazio davanti a sé ; ma dietro e ai lati non vede nulla, e non vede neppure il passo che ha già fatto, e il sentiero già percorso. E allora forse che sa dove va? Niente affatto. Eccolo. Lei è in uno Stato così. È venuta a trovarsi al bivio, e non sa da che parte andare.`,
      isAI: false,
      source: 'Il fu Mattia Pascal, Capitolo XII',
      hint: 'Anselmo Paleari\'s lantern metaphor for consciousness is Pirandello\'s philosophical content delivered through a character who is himself eccentric and unreliable — a theosophist, a digressive talker. The philosophy arrives in a puff of smoke, from a slightly absurd source. Pirandello never presents his ideas in the voice of a reliable authority; they are always dramatized through people who are themselves examples of the problem.',
    },
    {
      id: 'pirandello-r5',
      text: `Mi chiamo Vitangelo Moscarda, che è già per sé un nome ridicolo e strano. Gli uomini portano il nome come un vestito che gli è stato messo addosso senza che potessero sceglierlo, e che può andar bene o può andare male, o star bene o star male, secondo il corpo che deve portarlo.

Mia moglie, un mattino, guardandomi nello specchio, mi disse che io avevo il naso che pendeva un poco verso destra. Io mi guardai nel mio solito specchio e non lo vidi pendere. Poi mia moglie mi portò davanti a un altro specchio, e con la mano mi fece inclinare il capo a sinistra, e allora lo vidi. Pendeva un poco a destra, sì. Mi misi a ridere.`,
      isAI: false,
      source: 'Uno, nessuno e centomila, Libro Primo, Capitolo I',
      hint: 'A wife\'s casual observation about a slightly tilted nose triggers the complete dissolution of Vitangelo\'s identity — and Pirandello introduces this as comedy. "Mi misi a ridere" (I started to laugh). The laughter is the key: before the catastrophe is a catastrophe, it is a joke. The name-as-ill-fitting-garment is stated as premise, not conclusion; Pirandello always dramatizes his philosophy before announcing it.',
    },
    {
      id: 'pirandello-ai1',
      text: `Mi chiamo Mattia Pascal, o mi chiamavo, perché la questione è più complicata di quanto sembri. Il nome è una cosa strana: ti viene dato prima che tu possa sceglierlo, ti segue per tutta la vita, e quando muori ti sopravvive, inciso sulla pietra o scritto nei documenti. Siamo noi che abitiamo il nome, o è il nome che abita noi?

Ho meditato a lungo su questa domanda, in quei mesi in cui ero, per così dire, tra i due nomi. Avevo lasciato Mattia Pascal — morto, almeno sulla carta — e non avevo ancora deciso di diventare pienamente Adriano Meis. Ero nel mezzo, una specie di limbo dell'identità, e devo dire che non era poi così sgradevole.`,
      isAI: true,
      hint: '"Siamo noi che abitiamo il nome, o è il nome che abita noi?" is a smooth rhetorical question. Pirandello\'s Mattia arrives at the same crisis through comic misadventure and self-undermining observation, not through organized philosophical interrogation. "Non era poi così sgradevole" attempts the Pirandellian comic understatement but lacks the specific absurdist detail that makes Mattia\'s narration funny. The identity crisis is explained rather than enacted.',
    },
    {
      id: 'pirandello-ai2',
      text: `Il problema era che tutti mi vedevano in modo diverso. Mia moglie Romilda mi vedeva come un marito inadeguato, e aveva le sue ragioni. Mia suocera mi vedeva come la rovina della famiglia, e aveva le sue ragioni anche lei. Il bibliotecario Romitelli mi vedeva come un collega capace, se non di molto altro. Anselmo Paleari mi vedeva come un interlocutore filosofico di qualità.

Ero tutte queste cose, dunque? O nessuna? Oppure — ed era questa l'ipotesi che più mi inquietava — ero qualcosa di completamente diverso da tutte queste versioni, qualcosa che nessuno di loro aveva mai visto, e che forse nemmeno io stesso avevo mai visto?`,
      isAI: true,
      hint: 'The catalog of how others see Mattia is thematically correct — this is the "uno, nessuno e centomila" insight — but presented as a neat itemized list. Pirandello\'s Mattia reaches this discovery sideways, through a specific incident (the nose in the mirror, a casual remark), never in organized paragraphs. The final question ("qualcosa che nessuno di loro aveva mai visto") is reliably self-aware where Pirandello\'s Mattia is unreliably self-aware: that\'s the entire point.',
    },
    {
      id: 'pirandello-ai3',
      text: `La prima cosa che feci, dopo aver letto la notizia della mia morte sul giornale, fu di ordinare un caffè. Non so perché. Forse perché era il gesto più normale che potessi compiere in quel momento, e la normalità mi sembrava necessaria, come un ancoraggio.

Poi mi misi a riflettere. Ero morto. Era ufficiale: c'era scritto sul giornale. Mattia Pascal era morto, annegato, identificato, sepolto. Io — ma chi ero io, adesso? Potevo diventare chiunque. L'idea era spaventosa e, nello stesso tempo, stranamente eccitante.`,
      isAI: true,
      hint: '"Stranamente eccitante" resolves the crisis into a neat duality (frightening / exciting) that Pirandello\'s Mattia resists. The real Mattia experiences his death with comic bewilderment rather than psychological balance — the humor comes from his inability to process what has happened, not from his articulate weighing of it. The coffee ordered as "ancoraggio" is a nice detail, but the passage is too self-possessed for Pirandello\'s deliberately unstable narrator.',
    },
    {
      id: 'pirandello-ai4',
      text: `La verità è che avrei potuto continuare a vivere come Adriano Meis per molto tempo ancora, se non fosse stato per quella storia del furto. Mi avevano rubato del denaro in pensione, e avrei dovuto fare la denuncia. Ma fare la denuncia significava andare dai carabinieri, e i documenti di Adriano Meis non esistevano, perché Adriano Meis non esisteva.

Così mi ritrovai a essere la vittima di un furto che non potevo denunciare, in quanto la vittima ufficiale ero io, ma io ufficialmente non esistevo. È una situazione che, in retrospettiva, mi sembra abbastanza comica.`,
      isAI: true,
      hint: 'The bureaucratic trap — an officially non-existent person cannot report a theft to officials — is genuinely Pirandellian in structure. But "mi sembra abbastanza comica, in retrospettiva" is too restrained and too conclusive. Pirandello\'s Mattia would spend paragraphs in escalating comic despair before conceding the joke, and would not use "retrospettiva" — too abstract and too composed for his voice. The real passage has more anguished digression in its path to the laugh.',
    },
  ],
};

export default author;
