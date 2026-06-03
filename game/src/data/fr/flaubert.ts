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
      text: `Emma se sentait prisonnière d'une vie qu'elle n'avait pas choisie. Chaque matin, elle regardait par la fenêtre les mêmes champs de la plaine normande, le même ciel gris, les mêmes toits d'ardoise, et elle ressentait une profonde mélancolie qu'elle n'arrivait pas à surmonter. Car telle était sa condition : née pour rêver, condamnée à végéter. Charles, lui, semblait parfaitement heureux. Il mangeait bien, dormait bien, soignait ses malades sans se poser de questions. Cependant, Emma ne pouvait s'empêcher de penser qu'il existait ailleurs des existences plus riches, plus intenses, plus dignes d'être vécues. Elle avait lu trop de romans pour se contenter de cette réalité médiocre.`,
      isAI: true,
      hint: '"Car telle était sa condition" is a thematic statement the narrator delivers on Emma\'s behalf — Flaubert never closes a reverie with a verdict like this. "Elle ressentait une profonde mélancolie" names the emotion instead of rendering it through Emma\'s own sensory logic. The contrast with Charles is drawn explicitly ("lui, semblait parfaitement heureux") where Flaubert would leave the irony to accumulate from objects and gestures.',
    },
    {
      id: 'flaubert-ai2',
      text: `Rodolphe Boulanger était un homme que la vie avait rendu cynique. Propriétaire de La Huchette depuis plusieurs années, il connaissait les femmes et leurs faiblesses — ou plutôt ce qu'il appelait leurs faiblesses, qui n'était souvent que l'expression d'une sensibilité plus vive que la sienne. Il avait séduit beaucoup de femmes et les avait toutes oubliées. En effet, pour un homme de son espèce, la conquête avait plus de valeur que la possession. Il observa Emma avec attention, nota sa façon de porter la tête, l'expression de ses yeux, et conclut en lui-même qu'elle serait facile à séduire. Les femmes malheureuses l'étaient toujours, car le malheur les rendait vulnérables au premier homme qui leur offrait un peu de compréhension.`,
      isAI: true,
      hint: '"En effet, pour un homme de son espèce" is a transitional phrase that explains Rodolphe\'s psychology as a general truth — Flaubert stays inside Rodolphe\'s specific idiom of contempt without editorialising. The final generalisation ("les femmes malheureuses l\'étaient toujours, car le malheur les rendait vulnérables") is an aphorism the narrator volunteers; Flaubert would render the same thought as Rodolphe\'s own smug internal shorthand, not a principle.',
    },
    {
      id: 'flaubert-ai3',
      text: `M. Homais était, à Yonville, bien plus qu'un simple pharmacien. C'était un homme de progrès, un esprit éclairé dans un bourg qui ne l'était guère. Il lisait les journaux de Paris, s'abonnait aux revues scientifiques, et n'hésitait jamais à donner son avis sur les affaires du département, voire sur les grandes questions de l'époque. Cependant, sa femme l'écoutait avec la patience résignée des épouses qui ont renoncé à comprendre leur mari. Ses enfants, eux, avaient appris à feindre l'intérêt. Quant aux clients qui attendaient leurs ordonnances, ils hochaient la tête en souriant, sans vraiment entendre. Car telle était la tragédie de M. Homais : il parlait à des gens qui l'entendaient sans jamais l'écouter.`,
      isAI: true,
      hint: '"Car telle était la tragédie de M. Homais" is exactly the kind of thematic wrap-up Flaubert never writes — he satirises Homais by quoting him at length, not by explaining his situation. The tidy antithesis between "entendre" and "écouter" is a neat LLM finishing move. Flaubert\'s Homais earns his ridiculousness through verbatim speeches; here the comedy is narrated from outside, which kills it.',
    },
    {
      id: 'flaubert-ai4',
      text: `Le lendemain du bal, Emma ne put se résoudre à reprendre le cours ordinaire de sa vie. Elle était restée debout une grande partie de la nuit, le cœur encore plein de lumières et de musique. Elle se rappelait la façon dont le vicomte l'avait guidée dans la valse, sa main gantée posée sur sa taille, son regard qui semblait lui dire qu'elle était différente des autres femmes. Elle ressentit alors, avec une acuité douloureuse, tout ce que sa vie manquait — l'élégance, l'intensité, cette façon de vivre pleinement que seules les grandes villes permettaient. Charles dormait paisiblement à côté d'elle, indifférent à tout. La lumière dorée du matin entrait par les rideaux, et Emma se demanda si elle supporterait longtemps encore le poids de son destin.`,
      isAI: true,
      hint: '"Le poids de son destin" and "la lumière dorée du matin" are both LLM clichés — Flaubert\'s Emma never frames her suffering in heroic-destiny terms. "Elle ressentit alors, avec une acuité douloureuse, tout ce que sa vie manquait" names the feeling and then lists its contents in abstract categories ("l\'élégance, l\'intensité"), where Flaubert would give Emma a specific sensory fragment from the night — the smell of a coat, a particular phrase of music — that her mind keeps returning to against her will.',
    },
  ],
};

export default author;
