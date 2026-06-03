import type { Author } from '@/types/game';

const author: Author = {
  id: 'mann',
  name: 'Thomas Mann',
  years: '1875–1955',
  nationality: 'Deutsch',
  knownFor: 'Buddenbrooks',
  snippets: [
    {
      id: 'mann-r1',
      text: `Was ist das? Was ist das?" — So klang es durch die Hausflur, halb verloren, halb besorgt. Das war die Stimme des Konsuln, der in halber Verkleidung aus seinem Bureau trat, eine riesige Serviette unter dem Arm. Er war ein langer, breitschultriger, schmächtiger Mann in den Fünfzigern mit rötlichem Backenbart, rotem Gesicht und blauen Augen. Sein Haar war noch voll und dicht und strohfarbig, sein Schnurrbart ging in den Backenbart über, seine Nase war groß und seine Hände waren breit und rot.`,
      isAI: false,
      source: 'Buddenbrooks, Erster Teil, Kapitel 1',
      hint: 'Mann\'s physical portrait of the Consul accumulates through parallel clauses of increasing specificity — broad shoulders, reddish mutton-chops, full straw-coloured hair, large nose, broad red hands. Each detail is a social indicator; the body is also the bourgeois self. The repeated "und" instead of commas in the final sentence enacts the thoroughness of the bourgeois inventory.',
    },
    {
      id: 'mann-r2',
      text: `Tonio Kröger liebte einen schönen, wilden Knaben namens Hans Hansen und litt schon damals, obgleich er sehr wohl wußte, daß Hans ihm wenig erwiderte, sehr darunter. Er besuchte ihn, ihm entgegen, und mühte sich, seine Gegenwart zu ertragen, und das blieb lange so. Einmal sagte er ihm: „Ich mag dich furchtbar gern, Hans", — und bald darauf kam das Wort über ihn, das man keinem sagen darf.`,
      isAI: false,
      source: 'Tonio Kröger, Kapitel 1',
      hint: 'The sentence "Er litt schon damals, obgleich er sehr wohl wußte, daß Hans ihm wenig erwiderte" is Mann\'s characteristic structure: suffering acknowledged alongside clear-eyed knowledge of its futility. The understated "und bald darauf kam das Wort über ihn, das man keinem sagen darf" — the word that must not be said — is Mann\'s technique of the significant omission, a discretion that says more than naming.',
    },
    {
      id: 'mann-r3',
      text: `Aschenbach hatte sich in den letzten Jahren eine gewisse Kürze angewöhnt. Sätze, die einst von breitem Atem gewesen waren, wurden kürzer, prägnanter, mehr auf das Wesentliche reduziert. Die Ironie wich dem Ernst, der Humor dem Pathos. Der Wandel war nicht unbemerkt geblieben: man hatte ihn hingenommen als Reifen und Vertiefen. Aber es war auch möglich, hinter diesem Wandel eine Verarmung zu sehen, ein Eintrocknen des Lebensquells unter der Hitze der Pflicht, eine Verdorrung.`,
      isAI: false,
      source: 'Der Tod in Venedig, Kapitel 2',
      hint: 'The four parallel nouns in the second movement — "Reifen und Vertiefen" vs. "Verarmung, Eintrocknen, Verdorrung" — are set against each other as two possible readings of the same transformation. Mann never decides between them; the ambiguity is maintained. "Unter der Hitze der Pflicht" (under the heat of duty) establishes the solar/Venetian leitmotif early.',
    },
    {
      id: 'mann-r4',
      text: `Buddenbrook hatte, seit langen Jahren, den Sonntag als den Tag der Ruh\' und der Familie angesehen. Heute jedoch saß er in seinem Lederstuhl, das Kontor zu seinen Füßen, die Hände zu einem unschlüssigen Falten geformt, und wartete. Er dachte an die Firma, deren Bücher er kannte wie sein eigenes Gesicht im Spiegel, an die Zahlen, die einst so leicht zu lesen gewesen waren und die jetzt, wie er fühlte, zu zweideuten Zeichen geworden waren, die zwei Meinungen zuließen.`,
      isAI: false,
      source: 'Buddenbrooks, Vierter Teil, Kapitel 4',
      hint: 'The comparison "wie sein eigenes Gesicht im Spiegel" for the ledgers is Mann\'s Buddenbrook irony: the family firm is as intimate as selfhood, and equally subject to misreading. "Zu zweideutigen Zeichen geworden waren, die zwei Meinungen zuließen" — the numbers becoming ambiguous signs — prefigures the Consul\'s decline through a mercantile metaphor.',
    },
    {
      id: 'mann-ai1',
      text: `Thomas Buddenbrook saß in seinem Arbeitszimmer und blickte auf die Straße hinunter. Es war ein grauer Herbsttag, und die Lübecker Bürger gingen ihren Geschäften nach mit der ruhigen Geschäftigkeit, die ihn seit seiner Kindheit begleitete. Er dachte an seinen Bruder Christian, der in Hamburg lebte und von dem man wenig Gutes zu hören bekam. Es war eine Schande, aber man konnte nichts dagegen tun. Die Familie Buddenbrook hatte ihren Ruf zu wahren, und er, Thomas, war sich dieser Verantwortung sehr wohl bewusst.`,
      isAI: true,
      hint: '"Er, Thomas, war sich dieser Verantwortung sehr wohl bewusst" is the AI restating in the narrator\'s voice what Mann always embeds in irony and internal contradiction. Mann\'s Thomas Buddenbrook is never simply "aware of his responsibility" — he performs responsibility as compensation for private doubt. Christian is dismissed here as a simple disgrace; in Buddenbrooks, Christian is Thomas\'s shadow-self, fascinating and disturbing.',
    },
    {
      id: 'mann-ai2',
      text: `Gustav von Aschenbach war ein Mann, der das Schöne liebte — dies war bekannt und unbestritten. Was weniger bekannt war: er liebte es mit einer Leidenschaft, die er selbst als gefährlich erkannte, die er aber trotzdem nicht unterdrücken konnte oder wollte. Als er in Venedig ankam, hatte er keine bestimmten Pläne. Er wollte nur Ruhe, Wärme, Sonne. Was er fand, war etwas ganz anderes — etwas, das sein geordnetes Leben erschüttern und schließlich zerstören würde.`,
      isAI: true,
      hint: '"Etwas, das sein geordnetes Leben erschüttern und schließlich zerstören würde" announces the plot prospectively — Mann never uses this narratorial foreshadowing so bluntly. The original Tod in Venedig builds suspense by refusing to name Aschenbach\'s fascination as dangerous until Aschenbach himself is too far gone to retreat. "Er liebte es mit einer Leidenschaft, die er selbst als gefährlich erkannte" grants too much self-knowledge too early.',
    },
    {
      id: 'mann-ai3',
      text: `Tonio Kröger hatte gelernt, allein zu sein. Das war keine kleine Kunst, und er hatte sie teuer bezahlt. Die Bürgerlichen hatten ihn nie ganz akzeptiert, und die Künstler verstand er zu gut, um sich bei ihnen heimisch zu fühlen. Zwischen diesen zwei Welten stand er, ein Fremder in beiden, und versuchte, aus dieser Fremdheit eine Art Stärke zu machen. Das gelang ihm manchmal. Öfter aber saß er abends in seinem Zimmer, das stille Licht der Lampe über seinen Papieren, und schrieb Sätze, die ihm allein zu gehören schienen.`,
      isAI: true,
      hint: '"Er versuchte, aus dieser Fremdheit eine Art Stärke zu machen" is a resolution that Tonio Kröger explicitly refuses to reach. The novella ends with Tonio still torn between bürgerlich longing and artistic exile — he does not make strength from his alienation; he mourns it. Mann\'s Tonio has a letter to Hans Hansen in his desk, not a program of artistic resilience.',
    },
    {
      id: 'mann-ai4',
      text: `Das Haus der Familie Buddenbrook stand, wie es schon in Generationen gestanden hatte, an der Mengstraße, und von weitem sah es aus wie der Inbegriff bürgerlicher Solidität und Beständigkeit. Innen jedoch war es von einer anderen Art. Die Zimmer waren groß und gut eingerichtet, aber es hing eine schwere Stille über allem, die Stille von Reichtum, der schon zu lange in der Familie war, um noch Freude zu bereiten, und der anfing, wie eine Last zu werden, die man mit sich trug, ohne genau zu wissen, wohin.`,
      isAI: true,
      hint: 'The house metaphor (solid exterior, heavy interior silence) is the right Buddenbrook territory, but "Reichtum, der schon zu lange in der Familie war, um noch Freude zu bereiten" over-explains the family\'s problem in the narrator\'s voice. Mann establishes the Buddenbrook decline through specific business failures, specific dining-table conversations, specific bodies — not through general statements about wealth\'s diminishing returns.',
    },
  ],
};

export default author;
