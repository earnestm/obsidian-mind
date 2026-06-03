import type { Author } from '@/types/game';

const author: Author = {
  id: 'zola',
  name: 'Émile Zola',
  years: '1840–1902',
  nationality: 'Français',
  knownFor: 'Germinal',
  snippets: [
    {
      id: 'zola-r1',
      text: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il ne voyait même pas le sol noir devant lui, et il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucun arbre même ne tachait le ciel, le pavé se déroulait avec la rectitude d'une jetée, au milieu de l'embrun aveuglant des ténèbres.`,
      isAI: false,
      source: 'Germinal, Première partie, Ch. 1',
      hint: 'The opening is Zola\'s naturalist method at its most concentrated: a single figure against an immeasurable dark plain, with distance measured in kilometres and sensation measured in wind-force. "Des rafales larges comme sur une mer" makes the coal-plain oceanic without metaphysical elaboration. The road\'s rectilinearity — "la rectitude d\'une jetée" — is both industrial and existential, but Zola doesn\'t say so.',
    },
    {
      id: 'zola-r2',
      text: `Maheu alla prendre sa lampe, la fit allumer au bureau des porions, et rejoignit Zacharie et Levaque qui attendaient dans la baraque. La baraque était une vaste salle, dont les murs blanchis à la chaux suintaient d'humidité, garnie de rayons de bois, où les mineurs accrochaient leurs vêtements. Au milieu, un poêle de fonte rougeoyait. Une douzaine d'ouvriers étaient là, debout ou assis sur des bancs, quelques-uns finissant de manger, d'autres fumant leur pipe. Depuis deux jours, la Compagnie avait diminué les salaires, sous le prétexte d'une réduction du prix de revient.`,
      isAI: false,
      source: 'Germinal, Première partie, Ch. 3',
      hint: 'The transition from physical inventory (whitewashed walls sweating moisture, iron stove glowing red) to the pay-cut notification happens without a paragraph break — Zola\'s technique for suturing economic fact into material environment. The final sentence is not a dramatic revelation; it\'s slipped in as another catalogued detail, which is exactly how economic violence operates in Zola\'s world.',
    },
    {
      id: 'zola-r3',
      text: `Et Gervaise se demandait si l'on ne vivrait pas mieux dans les pays où il n'y a pas de vin. Ça la rendait bien malheureuse de voir que toute la misère venait de ça. Mais non, ça n'était pas vrai, ce n'était pas possible, les hommes boiraient quand même. Coupeau pourtant buvait encore, pas trop, des coupettes de-ci de-là, pour s'entretenir, comme il disait. Elle, depuis son faux pas, avait recommencé à boire, sans plaisir d'abord, par un besoin de s'étourdir. Le genièvre lui faisait du bien, la soutenait quand elle croyait tomber.`,
      isAI: false,
      source: 'L\'Assommoir, Ch. 11',
      hint: 'The paragraph enacts Gervaise\'s circular logic — alcohol is the problem, but also the only relief — in the grammar itself. The sentences spiral: she wonders if life would be better without wine, immediately rejects the thought, and the paragraph ends with her drinking. "La soutenait quand elle croyait tomber" is Zola\'s bitter irony: gin as structural support for a collapse it is causing.',
    },
    {
      id: 'zola-r4',
      text: `La Voreux, maintenant, dans le coup de vent qui redoublait, avait un aspect plus morne encore. On apercevait, au milieu des ténèbres, la tête de bois du criblage, la cage d'extraction avec son beffroi, le cavalier qui portait le câble. Au rez-de-chaussée, la salle des machines soufflait sa vapeur avec une haleine haletante et épaisse. Le puits dévorait sa ration de chair humaine, vingt fois par vingt-quatre heures, avec une gueule de bête insatiable, toujours ouverte.`,
      isAI: false,
      source: 'Germinal, Première partie, Ch. 2',
      hint: '"Le puits dévorait sa ration de chair humaine" — the pit shaft personified as an insatiable beast — is Zola\'s symbolic naturalism: the metaphor emerges from physical description, not imposed on it. The "haleine haletante et épaisse" (panting, heavy breath) of the engine room makes the mine breathe before the beast metaphor arrives. The twenty-cycle feeding schedule quantifies the horror.',
    },
    {
      id: 'zola-ai1',
      text: `Étienne Lantier regardait la mine avec un sentiment mêlé d'effroi et de fascination. Il n'avait jamais vu quelque chose d'aussi imposant, d'aussi brutal dans sa puissance. Les roues de la machine tournaient sans cesse, indifférentes à la fatigue des hommes qui travaillaient en bas, dans les galeries obscures et étouffantes. C'était une machine terrible, qui dévorait le temps et les corps. Il pensa à sa vie à Paris, à l'insouciance de ses jeunes années, et se demanda comment il avait pu en arriver là, descendu si bas sur l'échelle sociale, réduit à chercher du travail dans ces plaines grises et interminables du Nord.`,
      isAI: true,
      hint: '"Un sentiment mêlé d\'effroi et de fascination" is a summary of what Zola would render through accumulated physical detail. The mine metaphor ("une machine terrible, qui dévorait le temps et les corps") arrives without preparation; Zola\'s La Voreux earns its beast metaphor through three pages of meticulous physical description first. "L\'échelle sociale" is sociological vocabulary, not Zola\'s sensory prose.',
    },
    {
      id: 'zola-ai2',
      text: `Dans le cabaret de l'Assommoir, l'air était chargé de fumée et d'alcool. Les hommes buvaient en silence ou en petits groupes bruyants. Derrière le comptoir, la patronne servait sans sourire, avec des gestes mécaniques, habituée depuis longtemps à cette misère tranquille qui s'installait chaque soir à ses tables. Gervaise était là, dans un coin, avec son verre de genièvre à moitié vide, regardant sans les voir les visages autour d'elle. Elle pensait à Coupeau, à la blanchisserie perdue, à ses belles années, au temps où elle avait encore des espoirs.`,
      isAI: true,
      hint: '"Cette misère tranquille" is an authorial summary; Zola\'s L\'Assommoir renders the tavern\'s effect through specific bodies and voices, not editorial labels. "Elle pensait à... à... à..." lists Gervaise\'s losses efficiently but without the recursive, self-defeating quality of Zola\'s free indirect discourse. The "belles années" nostalgia is the most conventional narrative choice available — Zola never gives Gervaise that clarity.',
    },
    {
      id: 'zola-ai3',
      text: `La grève durait depuis quinze jours, et la misère commençait à se faire sentir dans les corons. Les femmes comptaient leurs dernières provisions. Les enfants n'allaient plus à l'école, faute de vêtements chauds. Les hommes restaient assis devant leurs portes, le regard vide, fumant leur dernière pipe ou ne fumant plus du tout. Par moments, un groupe se formait au coin de la rue, et l'on parlait à voix basse de ce qui pourrait se passer, de ce que ferait la Compagnie, de si les soldats arriveraient vraiment. La peur et la colère se mêlaient, indiscernables.`,
      isAI: true,
      hint: 'The structure here is competent Zolaesque accumulation (women, children, men in sequence), but the final sentence — "La peur et la colère se mêlaient, indiscernables" — is an interpretive summary, not an observed detail. Zola\'s strike chapters enumerate specific faces and specific arguments. "Le regard vide" applied to an entire class of men is a generalisation; Zola always finds the individual body inside the collective.',
    },
    {
      id: 'zola-ai4',
      text: `Nana s'avança sur la scène avec ce sourire triomphant qui avait rendu fous tant d'hommes de Paris. Sa robe blanche, brodée de fleurs d'or, captait la lumière des lustres et semblait irradier sa propre clarté. La salle retint son souffle. Elle n'était pas simplement belle : elle était dangereuse, et tout le monde le sentait, même ceux qui la voyaient pour la première fois. C'était quelque chose dans ses yeux, dans la façon dont elle regardait le public comme si c'était elle qui le jugeait, et non l'inverse.`,
      isAI: true,
      hint: 'Zola\'s Nana opens with the crowd\'s physical reaction before establishing Nana herself — the theatre chapter builds from the audience\'s confusion inward. "La salle retint son souffle" is a stage direction, not a Zolaesque naturalist observation. "Elle était dangereuse, et tout le monde le sentait" is an authorial assertion about a quality Zola spends three hundred pages demonstrating through specific ruinations.',
    },
  ],
};

export default author;
