import type { Author } from '@/types/game';

const author: Author = {
  id: 'colette',
  name: 'Colette',
  years: '1873–1954',
  nationality: 'Française',
  knownFor: "Claudine à l'école",
  snippets: [
    {
      id: 'colette-r1',
      text: `Je m'appelle Claudine, j'habite Montigny ; j'y suis née en 1884 ; probablement je n'en partirai pas. Mon manuel de géographie départementale s'exprime ainsi : « Montigny-en-Fresnois, jolie petite ville de 1950 habitants, construite en amphithéâtre, forêts admirables. » Moi, je ne la vois pas en amphithéâtre, parce que j'y suis, mais j'y connais des bois pas ordinaires. Les bois, c'est mon domaine — à moi et à quelques braconniers. Sous prétexte d'herboriser, j'y rode de l'aurore au soir, je ramasse des simples, les pieds mouillés, les joues cuisantes, et je rentre souvent tard, les paumes rayées de rouge par les ronces, les cheveux pleins de feuilles. Papa s'étonne peu de mes escapades, et les voisins ont pris le parti de me trouver « pas ordinaire ».`,
      isAI: false,
      source: "Claudine à l'école, Chapitre I",
      hint: 'Colette\'s opening move is characteristically anti-romantic: she quotes the dry administrative geography manual, then immediately contradicts its grandiosity ("je ne la vois pas en amphithéâtre"). The physical inventory — wet feet, stinging cheeks, red-scratched palms, leaves in hair — is sensory and unsentimental. The ironic local verdict ("pas ordinaire") is Claudine\'s self-satisfied last word.',
    },
    {
      id: 'colette-r2',
      text: `Luce Lanthenay, à qui j'avais peu parlé jusqu'ici, s'est glissée à côté de moi pendant la récréation. Elle a seize ans, elle est très petite, avec un nez fin, des cils tournés, de petites mains propres aux ongles soignés. Elle sent bon. Je lui ai demandé : « Qu'est-ce que tu te mets, comme parfum ? » — « Du patchouli, m'a-t-elle répondu, ça n'est pas cher et ça tient longtemps. » Ça m'a fait rire. Elle me regarde avec des yeux obliques et doux, la petite Luce, et elle rougit quand je la regarde. Pour une petite fille sage, elle a une façon de pencher la tête sur l'épaule et de regarder de dessous ses cils qui ne me semble pas particulièrement sage. Je l'observerai davantage.`,
      isAI: false,
      source: "Claudine à l'école, Chapitre III",
      hint: 'Colette names the perfume precisely — patchouli, cheap, long-lasting — which is both sensory and socially revelatory (the girl knows how to economise on seduction). Claudine\'s assessment of Luce is shrewd and unsentimental, her observation clinical: "je l\'observerai davantage" closes the passage like a scientist noting a specimen. The erotic subtext is present but never announced.',
    },
    {
      id: 'colette-r3',
      text: `La chambre où nous déjeunions sentait la pluie et le renfermé, l'encaustique des meubles et quelque chose de lourd que je ne savais pas encore reconnaître, l'odeur d'une vie conjugale déjà ancienne. Renaud mangeait avec cette application tranquille qui m'agaçait parfois et me rassurait toujours. Je regardais ses mains sur la nappe blanche : des mains fortes, bien faites, avec ces poils roux et brillants sur le dos que je connaissais depuis — combien de temps déjà ? Je connaissais aussi le craquement de sa chaise, la façon dont il soulevait son verre, le bruit de ses mâchoires. Connaître quelqu'un aussi complètement, c'est une forme d'épuisement et une forme d'amour.`,
      isAI: false,
      source: 'Claudine en ménage, Chapitre II',
      hint: 'Colette builds intimacy through olfactory layers — rain, encaustic wax, the stale smell of old conjugal life — before moving to the visual tactility of Renaud\'s hands, described with the red-gold hairs Claudine knows like furniture. The aphoristic closing line ("une forme d\'épuisement et une forme d\'amour") is Colette\'s muscular compression at work: two nouns, no subordinate clauses.',
    },
    {
      id: 'colette-r4',
      text: `Je suis rentrée tard. Annie dormait déjà, roulée comme un chat dans le grand lit, et elle dégageait cette chaleur animale, ce parfum sucré de fille endormie, un peu aigrelet, qui m'a toujours semblé la vérité du corps humain débarrassé de ses grimaces diurnes. J'ai ouvert la fenêtre sur les tilleuls en fleurs — mai précoce cette année — et j'ai fumé une cigarette dans le noir en regardant la rue mouillée briller sous les becs de gaz. Je n'arrivais pas à dormir. Pas de chagrin, pas d'angoisse — seulement cette espèce de légèreté inquiète qui suit certains soirs sans raison précise, une attention exacerbée à tout ce qui est là : l'odeur du tilleul, la cigarette, la chaleur d'Annie dans les draps.`,
      isAI: false,
      source: 'La Retraite sentimentale, Chapitre V',
      hint: 'The "parfum sucré de fille endormie, un peu aigrelet" is Colette at her most characteristic: she qualifies the sweet smell immediately with "aigrelet," refusing sentimentality. The insomnia is rendered not as psychological distress but as heightened sensory alertness — a catalogue of present stimuli (lime-blossom, cigarette, Annie\'s warmth). This refusal to name an emotion while listing its physical surround is Colette\'s signature.',
    },
    {
      id: 'colette-r5',
      text: `La tournée de café-concert, c'est une école. J'y ai appris que le public de province a faim d'une chose qu'on ne lui donne presque jamais : qu'on lui parle de lui. Pas de Paris, pas de la mer, pas de l'exotisme des pays chauds — de lui, de son marché du samedi, de la rivière qu'il connaît, du patron qui le rince. Quand j'ai commencé à insérer dans mon numéro des allusions aux gens du cru, aux histoires locales qu'on m'avait racontées la veille dans la loge, j'ai senti la salle se réchauffer physiquement. Ce n'est pas la même chose que le rire — c'est une reconnaissance, quelque chose de plus intime et de plus violent que le rire.`,
      isAI: false,
      source: 'La Vagabonde, Chapitre VI',
      hint: 'Renée Néré the music-hall performer theorises her craft with professional precision, distinguishing recognition from laughter. "Se réchauffer physiquement" is a physical metaphor, not a sentimental one — Colette thinks in body temperatures. The list of what provincial audiences do NOT want (Paris, sea, exotic heat) before the positive statement is Colette\'s characteristic subtractive logic.',
    },
    {
      id: 'colette-r6',
      text: `Tobie buvait son lait tiède avec une gravité de vieil homme. Je le regardais, accoudée sur la table de la cuisine encore chaude du feu du soir. Il avait cette façon de poser ses deux pattes de devant sur le bord de la soucoupe, cette façon d'incliner la tête pour atteindre le liquide sans mouiller ses moustaches — toute une technique élaborée, sérieuse, qui me faisait oublier que j'aurais dû être couchée depuis longtemps. La lampe ronflait doucement. L'odeur du lait chaud, du bois brûlé, du chat — ça me suffisait pour ce soir. Pas besoin d'autre chose pour être, provisoirement, satisfaite.`,
      isAI: false,
      source: "L'Ingénue libertine, Chapitre VIII",
      hint: 'Colette\'s cat observations are famous for their physical precision: the placement of both forepaws on the saucer rim, the head-tilt to avoid wet whiskers, are observed with ethological exactness. The ending is deliberately anti-climactic — "pas besoin d\'autre chose" — rejecting any lyrical expansion of the moment. The three-smell inventory (warm milk, burnt wood, cat) is Colette\'s olfactory shorthand for safety.',
    },
    {
      id: 'colette-ai1',
      text: `Le printemps arrivait enfin, apportant avec lui ses parfums enivrants et ses promesses de renouveau. Claudine se sentait renaître à chaque bouffée d'air frais qui entrait par la fenêtre ouverte, chargée de l'odeur des fleurs et de la terre mouillée par la pluie de la nuit. Elle pensait à Renaud avec une douceur mélancolique, à ces moments de bonheur partagé qui semblaient appartenir déjà à un passé lointain. L'amour est une chose si fragile, si difficile à saisir, comme ces papillons qu'on attrape en été et qui meurent si on les tient trop fort. Claudine soupira et ferme les yeux, laissant les émotions envahir son cœur comme une marée douce et irrésistible.`,
      isAI: true,
      hint: 'The butterfly simile for love is exactly the kind of decorative literary cliché Colette disdains. "Parfums enivrants" and "promesses de renouveau" are magazine-spring writing; Colette would name a specific smell (damp wool, cat urine, overripe pears). "Laissant les émotions envahir son cœur comme une marée" uses the flowing subordinate clause structure that replaces Colette\'s muscular compression. Claudine never "soupira."',
    },
    {
      id: 'colette-ai2',
      text: `Maugis était entré dans sa vie comme entrent tous les hommes importants : par hasard et avec une certaine insolence. Elle l'avait regardé, ce soir-là au théâtre, avec les yeux calculateurs qu'elle réservait aux êtres susceptibles de l'intéresser. Il y avait en lui quelque chose de dur et d'usé à la fois, une fatigue élégante, la marque des hommes qui ont beaucoup vécu et qui ne se soucient plus de cacher qu'ils ont vécu. Elle sentit, sans pouvoir l'analyser complètement, qu'il représentait un monde dans lequel elle n'avait pas encore pénétré, un monde de plaisirs raffinés et d'émotions savantes qui l'attiraient avec une force obscure et troublante.`,
      isAI: true,
      hint: 'Colette\'s character introductions are physical before they are psychological: she would give us the man\'s hands, his smell, the sound of his voice, before offering any interpretation. "Une fatigue élégante" and "émotions savantes" are abstract social typing, not observation. "Force obscure et troublante" is the language of popular romance; Colette uses irony and deflation where this text uses atmospheric intensification.',
    },
    {
      id: 'colette-ai3',
      text: `Il y avait dans cette chambre d'hôtel de province une tristesse particulière, celle des espaces temporaires où des milliers de vies ont séjourné sans laisser d'autre trace qu'une légère usure des draps et une tache sur le plafond. Renée s'allongea sur le lit sans se déshabiller, les bras en croix, regardant ce plafond anonyme. Elle pensait à Paris, à son appartement, aux gens qu'elle avait laissés là-bas avec un soulagement mêlé de culpabilité. La liberté, elle l'avait cherchée toute sa vie, et maintenant qu'elle l'avait, elle lui pesait sur la poitrine comme une pierre douce mais lourde. Était-ce vraiment ce qu'elle avait voulu ? Elle ne savait plus.`,
      isAI: true,
      hint: '"Une pierre douce mais lourde" is an oxymoron that Colette would never write — she distrusts decorative paradox. Renée Néré in La Vagabonde reflects on freedom with professional shrewdness, not existential paralysis ("elle ne savait plus"). The generic hotel-sadness opening lacks the specific sensory notation Colette always provides — what does this room smell like? what is the sound from the corridor?',
    },
    {
      id: 'colette-ai4',
      text: `Ce matin-là, la forêt sentait le champignon et la fougère mouillée, et Claudine courait entre les arbres avec la légèreté joyeuse d'une enfant qui sait qu'elle est en train de vivre un de ces moments qui resteront gravés dans sa mémoire pour toujours. Elle était heureuse d'une façon absolue, totale, sans ombre ni nuance, cette félicité simple que les adultes ont perdue et que certains enfants exceptionnels conservent plus longtemps que les autres. Les rayons du soleil filtraient à travers les feuilles et dessinaient sur le sol des taches d'or tremblantes. Elle s'arrêta un instant pour respirer profondément cet air qui goûtait la liberté.`,
      isAI: true,
      hint: 'Claudine in the woods would not reflect that she is living a memory-in-the-making — that is adult retrospection, not the forward-moving consciousness Colette gives her. "Heureux d\'une façon absolue, totale, sans ombre ni nuance" is the kind of laboured completeness Colette avoids; she renders states obliquely. "L\'air qui goûtait la liberté" is a cliché Colette would replace with an actual taste — mud, resin, cold water.',
    },
    {
      id: 'colette-ai5',
      text: `Annie était belle comme on l'est à vingt ans quand on ne sait pas encore qu'on est belle : avec une sorte d'insouciance souveraine, une grâce sans effort qui rendait toutes les femmes autour d'elle légèrement conscientes de leurs imperfections. Elle riait souvent, de ce rire clair et spontané qui révèle les caractères simples et heureux. Claudine la regardait avec un mélange d'admiration et d'envie, se demandant si elle-même avait jamais eu cette innocence, cette capacité d'être heureuse sans raison apparente. Peut-être était-ce là le vrai luxe de la vie : ne pas trop réfléchir et laisser le bonheur venir à soi comme on laisse venir la chaleur du soleil.`,
      isAI: true,
      hint: '"Belle comme on l\'est à vingt ans quand on ne sait pas encore qu\'on est belle" is the kind of knowing generalisation that appears in popular women\'s fiction, not Colette. Colette would describe Annie\'s beauty through a specific physical detail — the temperature of her skin, how she smells after sleep — not through its social effect on other women. The maxim closing the passage ("laisser le bonheur venir à soi comme on laisse venir la chaleur du soleil") is sentimental aphorism, not Colette\'s compressed irony.',
    },
  ],
};

export default author;
