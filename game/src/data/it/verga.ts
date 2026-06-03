import type { Author } from '@/types/game';

const author: Author = {
  id: 'verga',
  name: 'Giovanni Verga',
  years: '1840–1922',
  nationality: 'Italiano',
  knownFor: 'I Malavoglia',
  snippets: [
    {
      id: 'verga-r1',
      text: `Un tempo i Malavoglia erano stati numerosi come i sassi della strada vecchia di Trezza ; ve n'erano persino ad Ognina, e ad Aci Castello, tutti buona e brava gente di mare, proprio all'opposto di quel che sembrava dal nomignolo, come dev'essere. A Trezza non rimanevano che Padron 'Ntoni, con i nipoti Giovanni detto 'Ntoni, e Bastiano detto Bastianazzo perché era grande e grosso quanto Sansone ; e Bastianazzo aveva preso moglie, una Marussa dei Zuppiddi, che era stata chiesta per lui perché la ragazza portava sei onze di dote in tasca, senza contare i baci che portava sulla faccia, diceva Padron 'Ntoni.`,
      isAI: false,
      source: 'I Malavoglia, Capitolo I',
      hint: 'Verga\'s narrator sounds like the village itself: the simile "come i sassi della strada vecchia di Trezza" is local and concrete, not literary. The parenthetical "come dev\'essere" (as it should be) adopts the community\'s own evaluative voice. The chain of nicknames and their folk etymologies ("grande e grosso quanto Sansone") places the novel inside the oral tradition. No literary Italian here — the narrative voice is the village speaking.',
    },
    {
      id: 'verga-r2',
      text: `Padron 'Ntoni aveva anche lui i suoi grilli per il capo, e si lamentava che dopo che avevano messo quel fanale in cima allo scoglio dei Ciclopi, e la guardia doganale era arrivata coi suoi schioppi ad Aci Trezza, il contrabbando non si poteva fare più come prima. E suo nipote 'Ntoni, seduto sui gradini della chiesa, come un signore, si divertiva a guardare le ragazze che passavano, e diceva che voleva fare il galante come i giovinotti di città, colla giacca sul didietro e il cappellino sull'orecchio.`,
      isAI: false,
      source: 'I Malavoglia, Capitolo I',
      hint: 'The customs lantern and the carbineers with their guns are not narrated as historical facts but as grievances in Padron \'Ntoni\'s voice — free indirect discourse embedded so deeply in collective speech that there is no narrator-character boundary. The young \'Ntoni "seduto sui gradini della chiesa, come un signore" is an image of village shame, read through the community\'s eyes: idleness coded as class betrayal. The detail of the jacket "sul didietro" (worn loose) and tilted hat is the precise social sign.',
    },
    {
      id: 'verga-r3',
      text: `Jeli non sapeva leggere, e non era mai stato al paese, sicché quando passava davanti alla stazione di Licodia, o di Passaneto, e udiva fischiare il treno, si fermava a guardare con la bocca aperta, o si buttava pancia a terra, spaventato. L'unica cosa che lo preoccupasse era di sapere dove gli altri andavano in tanta fretta. I buoi e i cavalli a lui erano più familiari degli uomini, e conosceva tutti i vizii e i vezzi degli animali, li sapeva medicare, e capiva quel che volevano dire quando pigriavano, o quando avevano la tosse, o stavano a collo torto.`,
      isAI: false,
      source: 'Vita dei campi, "Jeli il pastore"',
      hint: 'Jeli\'s worldview is rendered entirely through what he knows and does not know, without condescension from the narrator. He cannot read; he can diagnose cattle by the angle of their neck. The catalogue of his animal knowledge ("li sapeva medicare... quando pigriavano, o quando avevano la tosse") is given with the same precision one would apply to any technical expertise. Verga\'s verismo refuses the educated narrator\'s patronizing distance from the peasant subject.',
    },
    {
      id: 'verga-r4',
      text: `Gesualdo non dormiva da tre giorni. Aveva girato e rigirato pel paese, spiando i creditori, fermandosi agli angoli delle strade, origliando alle porte ; s'era fatto dir male da tutti, o quasi. Gli mandavano a dire di non farsi vedere, che lui cercava di tagliarli fuori dal fallimento. — Canaglia ! canaglia ! — borbottava fra i denti. — Dopo tanti anni che ci ho cacciato il sangue !...

Bianca stava seduta al balcone, coi gomiti sul davanzale, e guardava le case del paese venir fuori a poco a poco dalla nebbia del mattino.`,
      isAI: false,
      source: 'Mastro-don Gesualdo, Parte Quarta, Capitolo I',
      hint: 'Verga cuts from Gesualdo\'s fury — "Canaglia! canaglia!" — to Bianca at the balcone without transition or authorial comment. The juxtaposition is the meaning: the self-made man who has "cacciato il sangue" (poured his blood) for years is ruined; his aristocratic wife watches the fog clear with aristocratic indifference. Verga never explains the class irony. He arranges the image and trusts the reader.',
    },
    {
      id: 'verga-r5',
      text: `Il mare di Trezza ha tanti umori diversi, e sputa e soffia, e si lamenta fra gli scogli dei Faraglioni come se dovesse inghiottire il mondo ; poi si acquieta e torna a fare il visino all'acqua, liscio e tranquillo, che par di toccarci il cielo con un dito. Allora le barche si allineano sulla riva, colle prore in su, come i pulcini vicino alla chioccia, e si vede tutta la roba delle famiglie che ci campano, stesa ad asciugare sugli scogli, o appesa alle pertiche davanti alle porte.`,
      isAI: false,
      source: 'I Malavoglia, Capitolo I',
      hint: 'The sea is personified in popular idiom rather than literary register — "fa il visino all\'acqua" (makes a pretty face at the water) is colloquial, not Romantic. The boats are "come i pulcini vicino alla chioccia" (like chicks near the hen) — a farmyard image for fishing boats, typical of verismo\'s refusal to elevate rural life into the picturesque. The village community perceives collectively: "si vede," "si allineano," no named observer.',
    },
    {
      id: 'verga-ai1',
      text: `I Malavoglia erano una famiglia come tante altre a Trezza, gente di mare che viveva del mare e per il mare, e che aveva imparato, di generazione in generazione, a rispettarne le leggi. Padron 'Ntoni era il capo della famiglia, un vecchio saggio che aveva passato la vita a combattere con le burrasche e con la miseria, e che aveva capito da tempo che il destino degli uomini poveri era fatto di lavoro e di pazienza.

La casa del nespolo era piccola ma dignitosa, con il cortile dove d'estate si mettevano le reti ad asciugare. I vecchi sedevano all'ombra e i bambini giocavano, e la vita andava avanti così, come va avanti la vita di chi non ha altro che le proprie braccia.`,
      isAI: true,
      hint: '"La vita degli uomini poveri era fatto di lavoro e di pazienza" is a literary narrator\'s generalization about the peasant condition — exactly what Verga\'s collective voice avoids. The village never steps back to describe itself sociologically. "La casa del nespolo era piccola ma dignitosa" renders the house as atmosphere; Verga\'s objects function — nets dry in the courtyard because the nets are the family\'s livelihood, not because it makes a pleasing image.',
    },
    {
      id: 'verga-ai2',
      text: `Nella notte, quando il vento di scirocco batteva contro le finestre, Ntoni pensava al mare. Non era nostalgia romantica — lui avrebbe riso di chi l'avesse chiamata così. Era qualcosa di più semplice: il riconoscimento che la sua vita aveva senso solo là fuori, sul pelo dell'acqua, con la rete in mano. La terraferma lo annoiava. Le strade del paese, le chiacchiere davanti alla bottega, le questioni di confine e di debito: tutto questo gli sembrava piccolo e chiuso, privo di quella grandezza silenziosa che aveva il mare in tempesta.`,
      isAI: true,
      hint: '\'Ntoni thinking of the sea as "grandezza silenziosa" is literary Romanticism in a fisherman\'s mouth. Verga\'s characters do not reflect on the existential significance of their work; they work, argue, suffer, and act. When the real \'Ntoni becomes disillusioned with village life, Verga shows it through his behavior in town — his drinking, his speech, his quarrels — not through interior meditation on authenticity.',
    },
    {
      id: 'verga-ai3',
      text: `Mastro-don Gesualdo aveva costruito la sua fortuna con le proprie mani, e questo nessuno glielo poteva togliere. Era partito dal niente — figlio di un muratore, cresciuto tra la calce e la polvere — e aveva saputo vedere le opportunità dove gli altri vedevano solo ostacoli. Ora possedeva terre, case, contratti. Eppure c'era qualcosa che non riusciva a comprare, e lo sapeva: la considerazione dei signori, quella considerazione che si ereditava col sangue e non si guadagnava col lavoro.`,
      isAI: true,
      hint: '"C\'era qualcosa che non riusciva a comprare" — Verga renders the impossibility of Gesualdo\'s social climbing through specific scenes of humiliation and exclusion, not through the character\'s neat self-assessment. "La considerazione che si ereditava col sangue e non si guadagnava col lavoro" is a thesis sentence; Verga would show a specific dinner where the gentry look through him, a specific marriage negotiation where the price of his acceptance is named.',
    },
    {
      id: 'verga-ai4',
      text: `La malattia aveva preso Bastianazzo di sorpresa, come prendono le malattie i robusti, senza preavviso. In tre giorni era passato da quell'uomo grande e forte — soprannominato Sansone — a quella cosa che giaceva sul letto e respirava piano come se non volesse disturbare. Padron 'Ntoni stava seduto accanto a lui e non parlava. Cosa c'era da dire? Il dolore dei vecchi è silenzioso, perché i vecchi sanno già che le parole non servono a niente, e che il mondo andrà avanti comunque, con o senza di loro.`,
      isAI: true,
      hint: '"Il dolore dei vecchi è silenzioso, perché i vecchi sanno già che le parole non servono a niente" is a literary narrator explaining the psychology of old peasant grief. Verga\'s verismo renders Padron \'Ntoni through his speech and action — not through a narrator who steps outside the village voice to categorize how old men mourn. The final clause ("il mondo andrà avanti comunque") is a philosophical aside that the collective narrator of I Malavoglia would never make.',
    },
  ],
};

export default author;
