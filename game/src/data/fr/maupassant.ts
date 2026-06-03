import type { Author } from '@/types/game';

const author: Author = {
  id: 'maupassant',
  name: 'Guy de Maupassant',
  years: '1850–1893',
  nationality: 'Français',
  knownFor: 'Boule de Suif',
  snippets: [
    {
      id: 'maupassant-r1',
      text: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes avaient la barbe longue et sale, des uniformes en guenilles, et ils avançaient d'une allure molle, sans drapeau, sans régiment. Tous semblaient accablés, éreintés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait surtout des mobilisés, gens pacifiques, rentiers tranquilles, pliant sous le fusil ; des petits mobiles alertes, faciles à l'épouvante et prompts à l'enthousiasme, prêts à l'attaque comme à la fuite.`,
      isAI: false,
      source: 'Boule de Suif',
      hint: 'The accumulation of negatives — "Ce n\'était point de la troupe, mais des hordes" — and the enumeration of civilian types (renters, small-town militias) creates Maupassant\'s social panorama without editorialising. "Marchant seulement par habitude et tombant de fatigue sitôt qu\'ils s\'arrêtaient" captures the physical and moral exhaustion in one grammatical unit. The observation is utterly dispassionate.',
    },
    {
      id: 'maupassant-r2',
      text: `Ils vécurent ainsi pendant dix ans, honnêtes, unis, doux, se voyant peu à cause de leurs positions. Elle ne sortait pas le soir, ne voulant point se montrer ainsi parée, et lui se couchait toujours à dix heures. Ils eurent un enfant qui mourut. Au bout de six ans, la dot fut remboursée. Le reste, au taux très fort du prêteur et à l'accumulation des intérêts superposés, fut payé enfin, et Madame Loisel parut vieille, maintenant. Elle était devenue la femme forte, et dure, et rude des ménages pauvres.`,
      isAI: false,
      source: 'La Parure',
      hint: 'The ten-year compression into a single paragraph — child dies in one clause, debt extinguished in another, Mathilde aged in a final phrase — is Maupassant\'s radical narrative economy. "La femme forte, et dure, et rude" uses three adjectives linked by "et" instead of commas to slow down and weight each quality, miming the heaviness of labour. The twist follows immediately after.',
    },
    {
      id: 'maupassant-r3',
      text: `Il y avait une fois, à Étretat, un marin, nommé Jérôme Vicaire. C'était un homme du pays, bien connu dans le bourg, robuste, honnête, un peu dur. Il aimait la mer comme on aime une vieille maîtresse connue depuis l'enfance, dont on connaît toutes les humeurs, les caprices, les dangers et les charmes, et dont on revient toujours, quoi qu'elle vous ait fait, parce qu'on ne peut pas s'en passer. Il la sentait vibrer sous lui, la nuit, dans sa barque, et il écoutait le bruit de ses vagues comme le bruit d'une femme endormie.`,
      isAI: false,
      source: 'En mer',
      hint: 'The extended simile — the sea as a mistress known since childhood — is Maupassant\'s characteristic move of embedding an abstraction in the specific geography (Étretat) and the specific sensation (feeling the sea vibrate under the boat at night). The final image pivots from the grand to the domestic ("le bruit d\'une femme endormie"), which is exactly Maupassant\'s scale adjustment.',
    },
    {
      id: 'maupassant-r4',
      text: `Jadis j'avais des amis, du côté d'Argenteuil. J'y allais souvent le dimanche. C'était une famille de braves gens qui m'aimaient simplement, avec cordialité, de cette amitié saine et forte qui ne demande pas d'esprit. Le père était un officier de marine en retraite, un peu gras maintenant, un peu rouge, mais toujours droit, toujours militaire. Sa femme, une grosse dame, avait des bras rouges, une gorge pleine, une voix forte, et un rire continuel. Les deux filles étaient grandes, solides, gaies, prêtes à danser du matin au soir.`,
      isAI: false,
      source: 'Le Trou',
      hint: 'The accumulation of physical adjectives (gras, rouge, droit, militaire; grosse, bras rouges, gorge pleine, voix forte) is Maupassant\'s social portraiture in miniature — characters established through body, not psychology. "Une amitié saine et forte qui ne demande pas d\'esprit" is both affectionate and gently condescending, the narrator\'s ironic distance maintained in a single subordinate clause.',
    },
    {
      id: 'maupassant-ai1',
      text: `Marguerite Tellier avait grandi dans un village de Seine-Inférieure où tout le monde se connaissait et où les secrets ne duraient guère. Elle était jolie d'une façon simple et saine, avec de bonnes joues rouges et des mains solides habituées au travail. Son père était fermier, sa mère était morte jeune, et elle avait appris très tôt que la vie n'attend pas. Cependant, quelque chose en elle refusait de se soumettre entièrement à ce destin ordinaire. Elle regardait parfois passer les voitures sur la grand-route avec une sorte de curiosité mélancolique, se demandant ce qui existait au-delà des champs qu'elle connaissait depuis l'enfance. Car telle est la nature des âmes sensibles : elles souffrent d'un monde trop étroit pour elles.`,
      isAI: true,
      hint: '"Car telle est la nature des âmes sensibles" is the kind of editorial generalisation Maupassant never writes — his characters are types observed from outside, not sensitive souls receiving philosophical explanations. "Curiosité mélancolique" is a vague emotional label where Maupassant would give a physical gesture or a social fact. The backstory is delivered as tidy biography; Maupassant drops characters into action and lets background emerge piecemeal.',
    },
    {
      id: 'maupassant-ai2',
      text: `La diligence de Rouen roulait depuis deux heures sous un ciel de novembre bas et uniforme. Le paysage normand défilait de chaque côté, mélancolique et beau à sa façon : les pommiers dépouillés, les fermes grises enfouies derrière leurs haies, les vaches immobiles dans les prés boueux. À l'intérieur de la voiture, les six voyageurs se regardaient sans se parler, chacun replié sur lui-même. La gêne pesait sur eux comme le froid qui s'infiltrait par les joints mal ajustés des panneaux. Dehors, la boue giclait sous les sabots des chevaux avec un bruit régulier et monotone. La campagne était vide, indifférente, et belle d'une beauté sans consolation.`,
      isAI: true,
      hint: '"Belle d\'une beauté sans consolation" is a literary flourish at the end that Maupassant would never write — his landscape descriptions serve social function, not mood. "Chacun replié sur lui-même" summarises interiority; Maupassant would show three or four passengers in their specific physical attitudes. The repeated "mélancolique" applied to both the journey and the landscape is an LLM default adjective that erases the class friction Maupassant would be building here.',
    },
    {
      id: 'maupassant-ai3',
      text: `Le père Cacheux était bien connu dans le bourg, et chacun avait sur lui son opinion arrêtée. On le disait honnête. On le disait aussi un peu rude, un peu froid, pas commode à approcher. Il avait les mains larges et rouges d'un homme qui a toujours travaillé, les épaules d'un ancien charretier, et ces yeux bleus délavés qu'on voit parfois chez les vieux paysans normands. Ses voisins le respectaient. Ses domestiques faisaient leur travail sans se plaindre. Sa femme ne se plaignait pas non plus, du moins pas à voix haute. En trente ans de mariage, personne n'avait entendu une dispute dans leur maison, ce qui pouvait signifier beaucoup de choses.`,
      isAI: true,
      hint: '"Ce qui pouvait signifier beaucoup de choses" is an LLM wink at the reader — Maupassant delivers his irony through a specific observed fact, not a narrator nudging you to notice the implication. The portrait is built correctly (body before psychology) but the adjectives are generic Norman-peasant inventory rather than particular. Maupassant would give this man one unexpected physical detail that makes him individual.',
    },
    {
      id: 'maupassant-ai4',
      text: `Elle s'appelait Mathilde Loisel, et elle était née, semblait-il, pour une vie plus belle que celle qu'elle menait. Elle était jolie, délicate, sensible à toutes les choses élégantes, et souffrait sans cesse de se voir condamnée à vivre dans un appartement médiocre avec un mari sans ambition. En effet, sa souffrance n'était pas de celles qu'on peut expliquer facilement, car elle ne manquait de rien d'essentiel. Mais l'âme humaine est ainsi faite qu'elle désire toujours ce qu'elle n'a pas, surtout quand elle est douée de la capacité d'imaginer mieux. Mathilde imaginait très bien. C'était là, peut-être, sa malchance et son malheur.`,
      isAI: true,
      hint: '"L\'âme humaine est ainsi faite qu\'elle désire toujours ce qu\'elle n\'a pas" is exactly the kind of universal aphorism Maupassant replaces with a specific social observation. The original "La Parure" opens with four flat declarative sentences about Mathilde\'s class position — no philosophising, no "En effet." "C\'était là, peut-être, sa malchance" is a closing reflection the narrator volunteers; Maupassant never editorialises on whether a character\'s desires are tragic.',
    },
  ],
};

export default author;
