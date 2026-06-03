import type { Author } from '@/types/game';

const author: Author = {
  id: 'droste',
  name: 'Annette von Droste-Hülshoff',
  years: '1797–1848',
  nationality: 'Deutsch',
  knownFor: 'Die Judenbuche',
  snippets: [
    {
      id: 'droste-r1',
      text: `In einem abgelegenen Winkel des Paderbornschen lebte gegen Ende des vorigen Jahrhunderts ein Mann, namens Hermann Mergel, der den Ruf eines ordentlichen ehrbaren Hausvaters hatte, wenn er gleich zuweilen durch übermäßiges Trinken seine Verhältnisse etwas in Unordnung brachte. Seine Frau war eine blasse, stille Frau, die in einem ununterbrochenen Zustand zwischen Hoffen und Zagen lebte und von der man nur wußte, daß sie vor ihrer Heirat sehr hübsch gewesen sei. Übrigens lebten beide ganz leidlich, wenn nur Mergel nicht zu viel getrunken hatte. Er war dann zwar finster und unwirsch, aber die guten Tage überwogen, und der Sohn, Friedrich, gedieh unter dieser Zucht nicht allzu schlecht, obgleich er frühzeitig gewohnt ward, Dinge zu sehen, die Kinder lieber nicht sehen sollten.`,
      isAI: false,
      source: 'Die Judenbuche, Anfang',
      hint: 'Droste-Hülshoff\'s narrative voice is juridically precise and morally non-committal: Mergel "had the reputation" of an honest man — she reports the reputation, not its accuracy. The qualification "wenn er gleich zuweilen" (even if he occasionally) is the narrator\'s careful hedging. Friedrich "gedeiht nicht allzu schlecht" — not well, but also not badly. No verdict is handed down.',
    },
    {
      id: 'droste-r2',
      text: `Friedrich war ein hübscher Junge, aber bleich und mit unruhigen Augen, die zuweilen plötzlich aufleuchteten und dann wieder erloschen, wie wenn jemand eine Laterne anzündet und sogleich wieder auslöscht. Er war durch die Unregelmäßigkeiten seines häuslichen Lebens früh an Selbstbeherrschung gewöhnt worden und hatte eine gewisse stolze Verschlossenheit, die man für Charakter nehmen konnte, wenn man es wollte. Die Dorfleute fanden ihn scheu und unheimlich ; aber das war nicht das eigentliche Wort, denn er war kein Träumer, sondern ein stiller Beobachter, der sich seine Urteile vorbehielt. Man wußte nicht recht, was man von ihm denken sollte.`,
      isAI: false,
      source: 'Die Judenbuche, erstes Drittel',
      hint: 'The lantern simile — eyes that flare and extinguish — is precisely observed and physically grounded rather than Gothic. Crucially, Droste-Hülshoff then unsettles the community\'s verdict ("scheu und unheimlich"): "aber das war nicht das eigentliche Wort." She corrects the village assessment with her own more precise distinction (not a dreamer but a silent observer), then immediately withdraws: "man wußte nicht recht." The narrator refuses to resolve.',
    },
    {
      id: 'droste-r3',
      text: `Aaron war ein Jude aus dem nächsten Städtchen, ein nicht übelaussehender Mann, aber mit dem ausgesprochenen Typus seiner Nation. Er hatte mit Friedrich schon mehrere Male Geschäfte gemacht und war daher nicht ganz unbekannt mit ihm. Als Aaron die Scheune betrat, nickte Friedrich ihm kurz zu, ohne aufzustehen. Die Unterhandlung war kurz ; Aaron bot acht Taler, Friedrich wollte zehn haben. Weder der eine noch der andere gab nach, und Aaron entfernte sich endlich mit der gewöhnlichen Formel : er würde es sich überlegen. Friedrich pfiff durch die Zähne und sagte nichts ; er schien überzeugt zu sein, daß Aaron wiederkommen würde.`,
      isAI: false,
      source: 'Die Judenbuche, zweites Drittel',
      hint: 'Droste-Hülshoff narrates the commercial negotiation with ledger-book economy: offer, counter, refusal, exit, physical gesture (Friedrich whistling through his teeth), and then the narrator\'s single insight into Friedrich\'s mental state — delivered as reported psychology, not omniscient declaration. Aaron is described with the period\'s anti-Semitic typology, which Droste-Hülshoff records without endorsing or condemning, letting the documentary surface speak.',
    },
    {
      id: 'droste-r4',
      text: `Der Gutsherr betrachtete ihn scharf. »Wie heißt du ?« fragte er. »Johannes Niemand«, antwortete der Fremde. »Wo kommst du her ?« »Aus der Türkei.« Der Gutsherr sah ihn noch einmal an ; dann wandte er sich um. Friedrich war näher getreten und stand jetzt dicht hinter dem Ankömmling. Die beiden Männer sahen sich an — es war der Blick zweier Menschen, die sich kannten und die wissen, daß der andere es weiß. Kein Wort fiel ; aber der Gutsherr hatte in dieser Sekunde mehr gesehen, als ihm lieb war. Er rief seinen Diener und ließ den Fremden fortführen. Die Sache kam nicht weiter zur Sprache.`,
      isAI: false,
      source: 'Die Judenbuche, letztes Drittel',
      hint: '"Johannes Niemand" (John Nobody) — the alias is delivered without authorial comment; Droste-Hülshoff leaves the reader to recognise the irony. The recognition scene between the two men is conveyed entirely through a glance and its aftermath: no interior monologue, no explanation. "Die Sache kam nicht weiter zur Sprache" — the matter was not pursued — is Droste\'s characteristic narrative suppression, presenting outcome without cause.',
    },
    {
      id: 'droste-r5',
      text: `Die Buche stand noch. Unter dem Einschnitt in der Rinde hatten die Buchstaben sich vergrößert und vertieft, wie es die Art der Bäume ist, mit dem Wachstum der Rinde. Die hebräische Inschrift war noch lesbar, obgleich das Moos sie halb verdeckte. Der Förster, der mit dabei war, wollte wissen, was die Zeichen bedeuteten, aber keiner im Dorfe konnte es sagen. Nur der alte Schulmeister meinte, er habe dergleichen einmal in einem alten Buch gesehen, es solle bedeuten : dem bösen Mann werde mit gleichem Maße gemessen werden. Aber ob er recht hatte, wußte er selbst nicht gewiß.`,
      isAI: false,
      source: 'Die Judenbuche, Schluss',
      hint: 'The Hebrew inscription is presented as partially legible, its meaning filtered through the old schoolteacher who is himself uncertain — "ob er recht hatte, wußte er selbst nicht gewiß." This is Droste\'s most sustained ironic gesture: the judgment written on the tree may or may not say what someone thinks it says. The moral verdict of the novella is literally unverifiable. The tree\'s growth naturally deepening the carved letters is a physical, biological fact, not a supernatural one.',
    },
    {
      id: 'droste-r6',
      text: `Die Juden aus dem Städtchen kamen zur Leiche, und zwar in größerer Zahl, als man erwartet hätte. Unter ihnen war auch Aarons Bruder, ein alter Mann mit einem weißen Bart, der die ganze Zeit über schwieg und dessen Augen trocken blieben. Man wußte nicht, ob er weinte oder nicht. Als der Sarg zugenagelt wurde, verließ er das Zimmer und setzte sich auf den Stein vor der Haustür. Die Christen gingen an ihm vorbei und sahen auf ihn ; er sah nicht auf. Die Sonne stand schief und warf seinen Schatten lang über den Hof. Er saß noch, als die anderen schon fort waren.`,
      isAI: false,
      source: 'Die Judenbuche, zweites Drittel',
      hint: 'Aaron\'s brother is observed from outside: "man wußte nicht, ob er weinte oder nicht." Droste-Hülshoff refuses access to his interior. The social mechanics are described without moral commentary: the Christians pass him, look at him; he does not look up. The detail of the elongated shadow (late-afternoon sun casting his shadow long across the yard) is temporal and precise, not symbolic. He is simply still there when the others have left.',
    },
    {
      id: 'droste-ai1',
      text: `Die Judenbuche stand düster am Rand des Waldes, als sei sie von einem alten Fluch gebrandmarkt. Ihre knorrigen Äste griffen wie verdorrte Hände in den bleigrauen Himmel, und wenn der Wind durch ihr Blätterwerk fuhr, schien es, als flüstere sie von Verbrechen und Verdammnis. Friedrich hörte dieses Flüstern in seinen Alpträumen, sah das blasse Gesicht des Ermordeten vor sich, spürte das Gewicht seiner Schuld wie einen Stein auf der Brust. Das Böse findet keine Ruhe ; es nagt am Gewissen des Schuldigen wie ein Wurm am Holz, langsam aber unerbittlich, bis der Verfall nicht mehr aufzuhalten ist.`,
      isAI: true,
      hint: 'Droste-Hülshoff never gives Friedrich nightmares or describes his guilt as a stone on his chest — she withholds his inner life almost completely. "Wie ein Wurm am Holz" is the kind of explicit moral simile her narrator refuses. The beech tree in the novella is not described as cursed or Gothic; it is a specific tree with a carved Hebrew inscription. "Verdammnis" and "Fluch" are moralistic vocabulary; Droste lets readers supply the moral.',
    },
    {
      id: 'droste-ai2',
      text: `Das Westfälische Dorf schlief still in der Herbstnacht. Nur Friedrich Mergel wachte noch, von Unruhe getrieben, die ihm keine Ruhe ließ. Er wußte selbst nicht, warum er nicht schlafen konnte — oder vielleicht wußte er es doch, aber er vermied, diesen Gedanken in Worte zu fassen. Die Nacht war kalt und mondlos, und irgendwo in der Ferne bellte ein Hund mit dieser eintönigen Beharrlichkeit, die mehr noch als Stille das Schweigen unterstreicht. Friedrich stand am Fenster und blickte in die Dunkelheit. Er war ein Mann, der viele Geheimnisse kannte, aber das größte Geheimnis war er selbst.`,
      isAI: true,
      hint: '"Das größte Geheimnis war er selbst" is the kind of literary aphorism Droste-Hülshoff never permits her narrator. Her prose terminates observations factually; it does not conclude them philosophically. The "bellender Hund" in the night is atmospheric sound-design; Droste uses specific local detail (a recognized place-name, a legal custom, a trade practice) rather than Gothic ambiance. Friedrich\'s interiority is never granted this much access.',
    },
    {
      id: 'droste-ai3',
      text: `Margreth Mergel hatte in ihrem Leben viel gelitten, und das Leid hatte ihr Gesicht gemeißelt wie ein Bildhauer, der schönere Materialien gewöhnt ist und mit dem schlechten ungeduldig umgeht. Sie liebte ihren Sohn mit der blinden Heftigkeit der Frauen, die keine andere Bestimmung kennen als die Mutterschaft. Friedrich war ihr Stolz und ihre Qual, ihr Rätsel und ihre einzige Freude. Als er fortging, verstand sie nicht ganz, warum, aber sie fragte nicht, weil die Frauen ihres Standes gelernt hatten, nicht zu fragen. Sie wartete jahrelang und blieb immer auf derselben Stelle — innerlich wie äußerlich.`,
      isAI: true,
      hint: 'The sculptor simile for grief-carved faces is literary decoration; Droste describes Margreth\'s appearance by reported village knowledge and observed behavior, not by authorial metaphor. "Die Frauen ihres Standes gelernt hatten, nicht zu fragen" is sociological generalisation; Droste would show Margreth not asking through a scene. The symmetric closing phrase ("innerlich wie äußerlich") is rhetorical balance that Droste\'s deliberately asymmetric style resists.',
    },
    {
      id: 'droste-ai4',
      text: `Der Wald um Bödfeld war uralt und hatte seine eigenen Gesetze, die nichts mit den Gesetzen der Menschen zu tun hatten. Die Holzfrevler kannten seine Pfade besser als die Förster, und die Förster kannten die Holzfrevler beim Namen, aber man tat so, als sei es nicht so. Es war ein stilles Einverständnis, wie es in solchen Gegenden zwischen Arm und Reich, zwischen Gesetz und Notwendigkeit entsteht. In diesem Wald war Friedrich aufgewachsen, und der Wald hatte ihn geformt, hatte ihm seine Schweigsamkeit gegeben, seine Fähigkeit, sich unsichtbar zu machen, seine Vertrautheit mit dem Dunkel.`,
      isAI: true,
      hint: 'The mutual-accommodation between poachers and foresters is a real feature of Die Judenbuche\'s social world — but Droste-Hülshoff presents it through specific named incidents, not through generalising social theory ("wie es in solchen Gegenden... entsteht"). "Der Wald hatte ihn geformt" is the Romantic nature-shapes-character thesis; Droste is far more interested in the legal and economic structures of the community than in landscape determinism.',
    },
    {
      id: 'droste-ai5',
      text: `Der Förster Brandis lag tot im Schnee, und niemand im Dorf wollte es gesehen haben. Das war die Art in dieser Gegend : man sieht nicht, was man nicht sehen will, man weiß nicht, was man lieber nicht wüßte. Friedrich Mergel hatte an jenem Abend die Schmiede verlassen, das war gewiß. Aber wann er zurückgekommen war — darüber gingen die Aussagen auseinander. Ein Zeuge erinnerte sich an Mitternacht, ein anderer an früher, ein dritter sagte, er habe ihn überhaupt nicht gesehen. In einem solchen Nebel aus Lüge und Erinnerung bleibt die Wahrheit verborgen, und vielleicht ist das ihr rechtmäßiger Ort.`,
      isAI: true,
      hint: '"Vielleicht ist das ihr rechtmäßiger Ort" — the truth\'s "rightful place" in concealment — is too neatly philosophical for Droste\'s narrator. She presents contradictory witness accounts in Die Judenbuche, but she does not then comment on what this means for truth in general. Her narrator\'s restraint is disciplined silence, not ironic commentary. The opening generalisation ("das war die Art in dieser Gegend") is the kind of sociological aphorism she embeds in action, not in summary.',
    },
  ],
};

export default author;
