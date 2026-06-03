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
      text: `Lorsque Jeanne Valmont descendit du train à Rouen, elle ne savait pas encore que cette journée changerait le cours de sa vie. Elle portait une petite valise en cuir brun et un chapeau qu'elle avait acheté l'année précédente à Paris, lors de son dernier voyage. La gare était bruyante et pleine de fumée. Des porteurs criaient. Des voyageurs se bousculaient. Elle chercha des yeux son cousin qui devait venir la chercher, mais ne le vit pas. Elle attendit un moment, puis s'assit sur un banc, sa valise entre les genoux, regardant les gens passer avec une légère inquiétude.`,
      isAI: true,
      hint: 'Maupassant never announces that a day "will change the course of a life" — the revelation arrives at the end, not the beginning. The physical details (brown leather case, last year\'s Parisian hat) lack the weight Maupassant gives objects; they\'re costume, not character. The scene of waiting is rendered competently but generically — "une légère inquiétude" is too mild and too early for Maupassant\'s economy.',
    },
    {
      id: 'maupassant-ai2',
      text: `La Normandie, en ce mois de novembre, avait une beauté mélancolique particulière. Les arbres avaient perdu leurs feuilles, et les champs grisâtres s'étendaient à perte de vue sous un ciel lourd et uniforme. Les fermes semblaient somnoler derrière leurs haies, et les vaches, immobiles dans les prés, regardaient passer la diligence avec une indifférence bovine. À l'intérieur, les voyageurs se taisaient, chacun enfermé dans ses propres pensées, bercé par le roulement régulier des roues sur la route défoncée.`,
      isAI: true,
      hint: 'The Normandy landscape is competently atmospheric but too uniformly "melancholic" — Maupassant\'s landscapes are always observed by someone specific, not by a generalised traveller. "Indifférence bovine" is a clever phrase but lands as a literary flourish rather than a specific observation. "Chacun enfermé dans ses propres pensées" is exactly the kind of interiority summary Maupassant avoids — he shows the silence through behaviour.',
    },
    {
      id: 'maupassant-ai3',
      text: `Pierre Dumont était l'homme le plus respecté du village, et aussi le plus redouté. On ne savait trop pourquoi, car il ne faisait jamais de mal à personne, du moins pas ouvertement. Il avait hérité de son père une ferme prospère et d'une réputation d'honnêteté rigoureuse. Mais ses yeux gris, froids et pénétrants, donnaient aux gens une impression d'être jugés sans recours. Les femmes baissaient les yeux en le croisant. Les hommes lui serraient la main avec un peu trop d'empressement. Tout le monde lui souriait, et personne ne l'aimait vraiment.`,
      isAI: true,
      hint: '"Du moins pas ouvertement" is the AI\'s way of signalling mystery before earning it. Maupassant establishes social types through physical accumulation first, then lets the contradiction emerge from action. The final paradox ("tout le monde lui souriait, et personne ne l\'aimait vraiment") is well-structured but stated; Maupassant would dramatise this in a specific scene, not announce it.',
    },
    {
      id: 'maupassant-ai4',
      text: `Elle s'appelait Mathilde. Elle était belle, elle le savait, et cette conscience de sa beauté était à la fois sa force et son tourment. Car la beauté, sans les moyens qui permettent de la mettre en valeur, n'est qu'une promesse non tenue, une lettre de créance sans banquier. Ses robes étaient simples — trop simples, pensait-elle — et son appartement, dans un quartier sans prestige, lui semblait chaque jour plus étouffant, plus gris, plus hostile. Son mari, employé de bureau, ne comprenait pas pourquoi elle pleurait parfois le soir, seule, devant la fenêtre.`,
      isAI: true,
      hint: 'The financial metaphor ("une lettre de créance sans banquier") is too writerly an intervention for Maupassant\'s transparent narration. The original "La Parure" opens by stating facts, not developing metaphors about beauty. "Cette conscience de sa beauté était à la fois sa force et son tourment" is a thesis sentence; Maupassant would show the discontent through a specific incident — a glance in a mirror, an unpaid bill.',
    },
  ],
};

export default author;
