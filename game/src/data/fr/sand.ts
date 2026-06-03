import type { Author } from '@/types/game';

const author: Author = {
  id: 'sand',
  name: 'George Sand',
  years: '1804–1876',
  nationality: 'Française',
  knownFor: 'La Mare au diable',
  snippets: [
    {
      id: 'sand-r1',
      text: `Indiana était une de ces natures naïves qui semblent faites tout exprès pour être trompées et abandonnées, parce qu'elles ne savent pas se défendre, et qu'elles ignorent les précautions que la société exige. Certes, si la destinée a jamais préparé une victime à l'oppression des hommes forts, c'est cette fille si délicate, si fragile, et pourtant si courageuse dans ses souffrances ; si impuissante dans les luttes de la vie réelle, et si énergique dans les résistances passives. La vie de M. Delmare était pour elle un martyre perpétuel, non pas qu'il la battît, mais parce qu'il l'accablait de ses exigences brutales, de ses caprices ombrageux, de sa volonté despotique. Il ne lui permettait pas d'agir selon sa propre intelligence, il froissait à chaque instant sa fierté sans s'en douter, et elle s'habituait à la souffrance comme une esclave résignée, mais elle n'y consentait pas comme une femme déjà vaincue. Il y avait en elle quelque chose de fort et de libre qui résistait et qui attendait.`,
      isAI: false,
      source: 'Indiana, Chapitre IV',
      hint: 'Sand characterises Indiana through paradox — fragile yet energetic, passive yet resistant — which is her signature technique for female protagonists constrained by marriage law. The phrase "martyre perpétuel" and the legal-sounding inventory of Delmare\'s abuses reflect Sand\'s firsthand knowledge of the Code Napoléon\'s effects on wives.',
    },
    {
      id: 'sand-r2',
      text: `Germain était un bon laboureur, et il connaissait son métier à fond. Un homme de vingt-huit ans, robuste et actif, avec un visage ouvert et honnête, des yeux bleus et des cheveux noirs, avait tout ce qu'il fallait pour plaire à une femme. Mais Germain ne songeait guère à se faire valoir, et quoiqu'il sût danser, il n'allait aux assemblées que pour y conduire ses jeunes camarades, et regarder de loin. Il aimait ses enfants uniquement, et l'ennui de sa maison, depuis que sa femme était morte, le rendait sombre et paresseux à certaines heures. Pourtant le père Maurice avait raison de dire que cela ne pouvait pas durer, et que la maisonnée avait besoin d'une maîtresse. Germain le sentait lui-même ; mais l'idée d'aller chercher une femme lui répugnait, non par légèreté de cœur, mais par une fidélité instinctive à la morte qu'il avait aimée.`,
      isAI: false,
      source: 'La Mare au diable, Chapitre II',
      hint: 'This is the introduction of Germain the ploughman, and Sand gives him moral seriousness without idealization — he is both capable and grief-stricken. The detail that he attends village dances only to escort younger friends, watching from afar, is one of those specific social observances that root the story in Berry custom.',
    },
    {
      id: 'sand-r3',
      text: `La petite Fadette était pauvre et mal vêtue ; elle n'avait pas de souliers à ses pieds, quoiqu'il ne fît pas bien chaud ce jour-là. Sa robe était toute rapiécée et ses cheveux mal peignés. Elle avait pourtant de beaux yeux, grands, noirs et brillants, quand elle ne les cachait pas sous de longues paupières frangées de cils épais. Sa bouche était belle aussi et ses dents blanches, mais elle avait l'habitude de froncer les sourcils et de tirer les coins de sa lèvre d'une manière moqueuse qui déplaisait à la plupart des gens. Elle était, dit-on, malicieuse et sauvage, et elle avait un nom qui donnait à rire : on l'appelait Fanchon Fadet, et les enfants de son âge, qui la craignaient un peu, l'avaient surnommée la petite Fadette, parce que fadette veut dire, dans notre pays, une petite fée espiègle et un peu maligne, ce qu'on appelle aussi un follet.`,
      isAI: false,
      source: 'La Petite Fadette, Chapitre IV',
      hint: 'Sand\'s introduction of Fadette catalogs her poverty precisely (no shoes, patched dress, tangled hair) before conceding her beauty — in that order, which matters. The regional gloss on "fadette" as a local word for a mischievous sprite is the kind of ethnographic footnote Sand provides to educate urban readers about Berry folk culture.',
    },
    {
      id: 'sand-r4',
      text: `François le Champi était un enfant trouvé. On appelle ainsi, dans nos campagnes, les enfants abandonnés qui ont été recueillis par charité dans quelque ferme. Le mot champi ou champis vient de champ, et désigne l'enfant qui a été trouvé dans les champs. Ces enfants portent en général le sobriquet de leur lieu de naissance ou de leur lieu de recueil ; et François, ayant été trouvé dans un champ labouré appartenant à la ferme des Champis, fut appelé François Champi. Il était bien beau garçon, et avait tout ce qu'il fallait pour être aimé. La meunière qui l'avait recueilli l'aimait comme son fils, mais son mari, le meunier Blanchet, n'avait jamais pu le souffrir et le traitait durement. Pourtant la meunière Madeleine tenait bon pour cet enfant, et il faisait sa seule consolation dans une vie peu heureuse.`,
      isAI: false,
      source: 'François le Champi, Chapitre I',
      hint: 'Sand opens with an anthropological annotation — defining the Berry term "champi" etymologically — before introducing François. This pedagogical gesture toward a Parisian readership is a Sand hallmark. The asymmetry between the miller\'s wife who loves the foundling and the husband who cannot stand him establishes the novel\'s central tension immediately.',
    },
    {
      id: 'sand-r5',
      text: `Nous étions partis de Nohant à pied, par un beau matin d'avril. La Vallée noire est, en général, peu connue des touristes et des curieux, parce qu'elle n'a rien qui frappe l'imagination de prime abord. Ce ne sont pas des sites grandioses ni des paysages sauvages. C'est un pays doux et mélancolique, des collines doucement inclinées, des vallées fraîches et boisées, des prairies émaillées de fleurs, des haies vives chargées de plantes grimpantes, des ruisseaux bordés de saules et d'aulnes. La terre est grasse et noire, ce qui lui a valu son nom. On n'y voit pas de monuments remarquables ; les villages sont petits, les maisons basses. C'est un pays de laboureurs et de tisserands. Mais quand on a vu une fois ces paysages discrets et ces champs paisibles, on les aime, parce qu'ils ont une physionomie particulière, une couleur locale que les tableaux du Midi n'ont pas.`,
      isAI: false,
      source: 'La Vallée noire, Chapitre I',
      hint: 'Sand describes the Berry landscape by systematic negation — it is NOT dramatic, NOT savage — before building to what it actually is. The phrase "pays de laboureurs et de tisserands" anchors the landscape in its working population rather than treating it as scenic backdrop. This is Sand\'s regionalist conscience distinguishing her from Romantic landscape writing.',
    },
    {
      id: 'sand-r6',
      text: `Mariette n'était pas une de ces beautés de village dont on fait des chansons, mais elle avait une grâce naturelle, une franchise dans le regard et une douceur dans la voix qui touchaient mieux que la beauté. Elle portait ses sabots avec une sorte d'aisance que les filles de la ville auraient pu envier, et son tablier bleu, noué sur ses hanches solides, avait la propreté que la misère n'empêche pas quand on a du soin. Elle allait et venait dans la cour de la ferme, donnant les ordres avec une autorité tranquille que personne ne contestait. Son père était mort depuis deux ans, sa mère depuis six mois, et elle avait pris la direction de la maison avec ce courage simple des femmes de chez nous, qui ne se demandent pas si elles en sont capables, mais font ce qu'il y a à faire.`,
      isAI: false,
      source: 'La Petite Fadette, Chapitre XVI',
      hint: 'The "courage simple" that does not pause to ask whether it is capable is quintessential Sand: competence expressed through action rather than self-reflection. The ranking of grace, frankness, and gentleness above conventional beauty, and the attention to clean apron despite poverty, are the social-realist registers Sand deploys to honour peasant women.',
    },
    {
      id: 'sand-ai1',
      text: `La nuit tombait sur le village comme un voile de deuil, enveloppant dans son ombre les chaumières et les âmes souffrantes qui y habitaient. Edmée s'était réfugiée dans sa chambre, le cœur brisé par tant d'injustices accumulées. Dehors, le vent gémissait dans les arbres centenaires, semblant pleurer avec elle les espoirs perdus de sa jeunesse. Combien de fois avait-elle rêvé d'une vie différente, d'un homme qui la comprendrait vraiment, d'un bonheur simple que la société lui refusait avec une cruauté impitoyable ? Elle pleurait doucement, sans espoir de consolation, abandonnée à sa douleur comme une feuille au gré de la tempête. La femme qu'elle aurait pu être était morte, étouffée par les conventions et par la loi des hommes qui ne voyaient en elle qu'une chose à posséder, jamais une âme à respecter.`,
      isAI: true,
      hint: 'The storm pathetic fallacy ("le vent gémissait") and the passive, tearful heroine are precisely what Sand avoids: her protagonists resist, act, or plan rather than weep. "Abandonnée à sa douleur comme une feuille" is the kind of decorative simile Sand would reject as sentimental. Sand\'s social critique is specific and legally grounded, not a general lament about "la loi des hommes."',
    },
    {
      id: 'sand-ai2',
      text: `Le vieux paysan regardait la plaine avec des yeux pleins de sagesse ancestrale. La terre était sa mère, son refuge, son identité profonde. Il avait vu passer les saisons depuis son enfance, toujours fidèle au même lopin de terre que ses pères lui avaient transmis avec leurs callosités et leurs silences. La charrue traçait ses sillons réguliers comme les rides sur son visage, témoins d'une vie passée au grand air. Il ne parlait pas beaucoup, car les gens de la campagne gardent leurs pensées pour eux, préférant l'action aux discours. Mais quand il parlait, ses mots avaient le poids de la vérité simple, forgée dans le travail et la patience. Sa fille le regardait travailler et comprenait, sans qu'il soit besoin de paroles, tout ce qu'il voulait lui transmettre de son amour pour cette terre.`,
      isAI: true,
      hint: 'The "sagesse ancestrale" and the mystical earth-connection are generic pastoral clichés. Sand\'s peasants speak in reported dialogue with regional vocabulary; she does not substitute silence and taciturnity for character. The parallelism between plough-furrows and facial wrinkles is exactly the kind of literary ornament Sand\'s Berry sketches refuse — she describes field work in practical, not symbolic, terms.',
    },
    {
      id: 'sand-ai3',
      text: `La forêt du Berry s'étendait à perte de vue, mystérieuse et profonde, gardant en son sein les secrets d'une nature sauvage et primitive. Les chênes millénaires formaient une cathédrale de verdure dont les voûtes frissonnaient sous le souffle du vent. Dans ce sanctuaire naturel vivaient des êtres à mi-chemin entre le réel et le légendaire : bergers qui connaissaient les herbes qui guérissent, vieilles femmes dont le regard semblait traverser les apparences pour toucher l'essence cachée des choses. C'est là que Marion avait grandi, nourrie de légendes et de superstitions que sa grand-mère lui avait transmises dans le murmure du soir. Elle en était venue à croire que la nature entière était habitée par des présences invisibles, bienveillantes ou maléfiques selon l'heure et la saison.`,
      isAI: true,
      hint: 'Sand\'s Berry forests are inhabited by named people with specific occupations and dialects, not by vague "présences invisibles." The cathedral-of-greenery metaphor and the mystical folk-knowledge are Romantic woodland Gothic, not Sand\'s regionalism. Sand takes pains to demystify rural superstition, presenting it sociologically rather than endorsing it atmospherically.',
    },
    {
      id: 'sand-ai4',
      text: `Valentine hésitait au seuil de la porte, tiraillée entre son devoir et son désir, entre la raison et le cœur. Toute sa vie, on lui avait enseigné l'obéissance, la soumission, le sacrifice de soi. Et voilà que maintenant, en cet instant décisif, elle sentait monter en elle une rébellion sourde, un refus profond de continuer à vivre cette existence étriquée que lui imposaient les conventions sociales de son époque. Elle pensa à sa mère, à ses sœurs, à toutes ces femmes résignées qui avaient accepté leur sort sans se battre. Elle ne voulait pas être comme elles. Mais avait-elle vraiment le choix ? La société était ainsi faite qu'elle n'offrait aux femmes que deux issues : le mariage ou le couvent.`,
      isAI: true,
      hint: 'Sand\'s heroines do not stand frozen in doorways cataloguing their constraints in abstract terms ("devoir," "raison," "cœur"). They move: they ride horses, cross rivers, make decisions that surprise themselves. The thesis-statement ending — "le mariage ou le couvent" — is the kind of generalisation Sand would dramatise through plot rather than announce through narration.',
    },
    {
      id: 'sand-ai5',
      text: `Le soleil se couchait sur les étangs du Berry, teintant l'eau de reflets roses et dorés d'une beauté presque irréelle. Sylvain s'était assis sur la berge mousseuse et contemplait ce spectacle avec le sentiment vague d'une mélancolie sans nom, cette tristesse douce qui saisit parfois les âmes simples face à la beauté du monde. Il n'aurait pas pu dire pourquoi il était triste — peut-être parce que la beauté est toujours un peu douloureuse, peut-être parce que le soir rappelle que tout finit. Les grenouilles commençaient leur concert monotone et les hirondelles rasaient la surface de l'étang en traçant des arabesque fugitives. Sylvain resta longtemps ainsi, immobile, laissant la nuit l'envelopper de sa douceur apaisante.`,
      isAI: true,
      hint: 'Sand\'s pond descriptions in La Mare au diable are embedded in the drama of navigation and weather — the étang is something to cross, not a mirror for vague "mélancolie sans nom." Sand never writes "cette tristesse douce qui saisit parfois les âmes simples"; her working people are not aestheticised as naïve souls. The arabesque swallows and frog-concert are stock pastoral inventory.',
    },
  ],
};

export default author;
