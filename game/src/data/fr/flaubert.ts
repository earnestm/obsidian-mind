import type { Author } from '@/types/game';

const author: Author = {
  id: 'flaubert',
  name: 'Gustave Flaubert',
  years: '1821–1880',
  nationality: 'Français',
  knownFor: 'Madame Bovary',
  snippets: [
    {
      id: 'flaubert-r1',
      text: `Charles aperçut dans la cour un jeune femme en robe de mérinos bleu garnie de trois volants, qui venait sur le seuil de la porte pour recevoir M. Bovary, qu'elle fit entrer dans la cuisine, où flambait un grand feu. Le déjeuner de la famille bouillonnait alentour, dans des petits pots de taille inégale. Des vêtements humides séchaient dans l'intérieur de la cheminée. La pelle, les pincettes et le bec du soufflet, tous de proportion colossale, brillaient comme de l'acier poli, tandis que le long des murs s'étendait une abondante batterie de cuisine, où miroitait inégalement la flamme claire du foyer, jointe aux premières lueurs du soleil arrivant par les carreaux.`,
      isAI: false,
      source: 'Madame Bovary, Première partie, Ch. 2',
      hint: 'The inventory of the kitchen — unequal pots, damp clothes, outsized fireplace tools — is Flaubert\'s precise, accumulative realism. Each item earns its place by reflecting or deflecting light in a specific way ("brillaient comme de l\'acier poli"). An AI version would select objects for atmosphere, not function. The light source is named twice and from two directions — compositional control, not decoration.',
    },
    {
      id: 'flaubert-r2',
      text: `Elle songeait quelquefois que c'étaient là pourtant les plus beaux jours de sa vie, la lune de miel, comme on disait. Pour en goûter la douceur, il eût fallu, sans doute, s'en aller vers ces pays à noms sonores où les lendemains de mariage ont de plus suaves paresses ! Dans des chaises de poste, sous des stores de soie bleue, on monte au pas des routes escarpées, écoutant la chanson du postillon, qui se répète dans la montagne avec les clochettes des chèvres et le bruit sourd de la cascade. Quand le soleil se couche, on respire au bord des golfes le parfum des citronniers ; puis le soir, sur la terrasse des villas, les doigts mêlés, on regarde les étoiles en faisant des projets.`,
      isAI: false,
      source: 'Madame Bovary, Première partie, Ch. 7',
      hint: 'This is style indirect libre at its purest: Flaubert inhabits Emma\'s fantasies without quotation marks or attribution. The subjunctive ("il eût fallu") signals the impossible conditional — the life Emma imagines she should have. The sensory cascade (sounds, smells, starlight) is organised by time of day, not randomly — structure masquerading as reverie.',
    },
    {
      id: 'flaubert-r3',
      text: `Il causait avec aisance, et sa conversation brillait d'une finesse naturelle. Rodolphe, dès le commencement de leur connaissance, avait reconnu qu'il y avait là quelque chose d'exceptionnel. Et il observait Emma maintenant avec une attention profonde ; et les mots qu'elle disait, le mouvement de ses lèvres, la forme de ses mains, et la ligne de son profil — tout cela était devenu, pour lui, comme un tableau qu'on lit. Il se rappelait les femmes qu'il avait connues, et que son instinct lui avait toujours bien classées. Mais quelque chose d'inaccoutumé dans celle-là l'arrêtait, et le retenait, et l'irritait, en même temps, dans une façon qu'il ne comprenait pas.`,
      isAI: false,
      source: 'Madame Bovary, Deuxième partie, Ch. 7',
      hint: 'Rodolphe\'s calculating gaze is rendered in a list that ends with his own confusion — "en même temps, dans une façon qu\'il ne comprenait pas." The three verbs of the final clause (l\'arrêtait, le retenait, l\'irritait) are arranged in a grammatically parallel trio, but the final confession of incomprehension breaks the predatory ease. Flaubert uses the form of seduction to show its limits.',
    },
    {
      id: 'flaubert-r4',
      text: `La conversation de Charles était plate comme un trottoir de rue, et les idées de tout le monde y défilaient dans leur costume ordinaire, sans exciter d'émotion, de rire ou de rêverie. Il n'avait jamais été curieux, disait-il, pendant qu'il habitait Rouen, d'aller voir au théâtre les acteurs de Paris. Il ne savait ni nager, ni faire des armes, ni tirer le pistolet, et il ne put, un jour, lui expliquer un terme d'équitation qu'elle avait rencontré dans un roman. Un homme, au contraire, ne devait-il pas tout savoir, exceller en des activités multiples, vous initier aux énergies de la passion, aux raffinements de la vie, à tous les mystères ?`,
      isAI: false,
      source: 'Madame Bovary, Première partie, Ch. 7',
      hint: 'The comparison "plate comme un trottoir de rue" — flat as a pavement — is Flaubert\'s clinical brutality. The list of Charles\'s negations (cannot swim, cannot fence, cannot explain a riding term) builds through banality, and then the paragraph pivots to Emma\'s unspoken ideal of "un homme" through a rhetorical question that never attributes the thought to her directly. The irony requires both halves.',
    },
    {
      id: 'flaubert-r5',
      text: `Ses regards erraient de tous côtés dans la salle. Elle cherchait à découvrir la clef de son existence, à déchiffrer l'énigme de cette vie qui lui paraissait si étrange et si obscure. Tout lui semblait un long rêve ou une hallucination. La musique continuait, et, sous la cambrure des pieds, l'air d'opéra se mêlait au bruit confus des conversations. Elle voyait, dans la vapeur des bougies, les épaules des femmes nues, les faces rouges, les rangs des lorgnettes. Elle eut envie de mourir, mais elle eut aussi envie de danser, de vivre à Paris, de devenir actrice.`,
      isAI: false,
      source: 'Madame Bovary, Première partie, Ch. 8',
      hint: 'Three simultaneous desires — to die, to dance, to become an actress — arrive in a single unpunctuated list that perfectly captures Emma\'s operatic self-contradiction. The physical detail (naked shoulders, flushed faces, opera glasses in haze) is specific and depersonalised; Emma sees the crowd as a painted surface. An AI would separate these three desires into three sentences and explain the contradiction.',
    },
    {
      id: 'flaubert-ai1',
      text: `Emma regardait souvent par la fenêtre le paysage monotone qui s'étendait devant elle — les mêmes champs, les mêmes arbres, le même ciel gris de province. Elle pensait à Paris, à ses lumières, à ses cafés où les hommes et les femmes parlaient de choses intéressantes et vivaient vraiment. Sa vie à Yonville lui semblait, dans ces moments-là, tout à fait intolérable. Charles, assis près d'elle, lisait son journal avec une placidité qui l'irritait profondément. Il était content, lui. Il ne désirait rien de plus. Emma soupira et se leva, consciente que rien ne changerait jamais dans cette existence qu'elle n'avait pas choisie.`,
      isAI: true,
      hint: '"Elle pensait à Paris" states the desire directly; Flaubert renders it through specific images (the sound of carriage wheels, the names of opera singers) that Emma has absorbed from novels. "Rien ne changerait jamais" is a narrator\'s verdict; Flaubert never closes Emma\'s reveries so conclusively — they always dissolve back into the present tense without resolution. The style indirect libre is entirely absent.',
    },
    {
      id: 'flaubert-ai2',
      text: `Rodolphe était un homme qui savait parfaitement ce qu'il voulait. Il avait observé Emma dès leur première rencontre et avait conclu, avec la certitude froide de l'expérience, qu'elle était exactement le type de femme susceptible de succomber à une cour bien conduite. Elle était belle, malheureuse, et romanesque — trois qualités qui, réunies chez une femme mariée à un homme médiocre, formaient la combinaison la plus favorable à ses desseins. Il décida donc de lui rendre visite plus souvent et de se montrer attentif, sans se presser.`,
      isAI: true,
      hint: 'The phrase "la combinaison la plus favorable à ses desseins" over-explains Rodolphe\'s calculation in the narrator\'s voice. Flaubert renders Rodolphe\'s cynicism through Rodolphe\'s own syntax — his contempt stays inside his idiom. The three-adjective list (belle, malheureuse, romanesque) feels like a thesis statement; Flaubert\'s lists earn each term through a specific preceding image.',
    },
    {
      id: 'flaubert-ai3',
      text: `La pharmacie de M. Homais était ouverte dès l'aube et fermait tard le soir, et l'on pouvait y trouver non seulement des médicaments de toute sorte, mais aussi les nouvelles du bourg, les opinions sur les événements du département, et les théories avancées et scientifiques que M. Homais lui-même élaborait avec un plaisir évident. Il aimait expliquer, démontrer, convaincre. C'était là son grand talent et sa grande joie. Sa femme l'écoutait avec patience. Ses enfants l'écoutaient par habitude. Et les clients de passage l'écoutaient par politesse, en attendant que leurs ordonnances fussent préparées.`,
      isAI: true,
      hint: 'The symmetrical list of listeners (wife by patience, children by habit, customers by politeness) is a competent imitation of Flaubert\'s tripartite irony, but the formula is too neat and the rhythm too predictable. Flaubert\'s Homais is rendered through his own quoted speech — his verbosity is performed, not summarised. "Sa grande joie" as a chapter-closing sentiment also softens Flaubert\'s sharper satirical edge.',
    },
    {
      id: 'flaubert-ai4',
      text: `Le soir du bal, Emma n'arriva pas à trouver le sommeil. Elle pensait aux lumières, aux robes, à la façon dont le vicomte l'avait regardée en dansant. Il y avait dans ce regard quelque chose qu'elle n'avait encore jamais rencontré — une intensité, une reconnaissance, comme s'il avait su immédiatement qui elle était vraiment. Elle se retourna dans son lit, incapable de rester tranquille. Charles dormait à côté d'elle avec son souffle régulier et paisible, indifférent à tout ce qu'elle ressentait. Elle éprouva alors une tristesse profonde, mêlée d'une irritation qu'elle ne savait pas tout à fait comment nommer.`,
      isAI: true,
      hint: '"Comme s\'il avait su immédiatement qui elle était vraiment" is the AI narrating Emma\'s fantasy in modern psychological language. Flaubert never confirms Emma\'s self-perception; he renders the ball through specific sensory details (the warmth of a gloved hand, the smell of haircream) without claiming insight into the vicomte. "Une tristesse profonde, mêlée d\'une irritation" is neat emotional taxonomy; Flaubert\'s Emma experiences sensations she cannot name.',
    },
  ],
};

export default author;
