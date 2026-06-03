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
      text: `Étienne Lantier arriva à Montsou par une nuit froide de mars, épuisé d'avoir marché depuis Marchiennes. Il cherchait du travail — n'importe quel travail — après avoir été renvoyé de l'atelier de Lille pour une raison qu'il préférait ne pas rappeler. La mine se dressait devant lui dans l'obscurité, massive et menaçante, avec ses bâtiments noirs et ses roues qui tournaient sans s'arrêter. Il ressentit une sorte d'effroi primitif face à cette puissance industrielle indifférente à tout ce qui n'était pas elle-même. Cependant, il s'avança, car il n'avait pas le choix. Les hommes comme lui n'avaient jamais vraiment le choix : telle était la condition ouvrière sous le Second Empire.`,
      isAI: true,
      hint: '"Telle était la condition ouvrière sous le Second Empire" turns Zola\'s naturalist accumulation into a history lesson delivered by the narrator. Zola never summarises his thesis this way — he makes the reader live it through cold air and specific distances (ten kilometres of cobblestone). "Une sorte d\'effroi primitif" is a psychological label; Zola\'s Étienne is rendered through what his body does, not through what he feels.',
    },
    {
      id: 'zola-ai2',
      text: `Chez le père Colombe, l'alambic ronflait jour et nuit, distillant ce poison lent qui détruisait les familles ouvrières du quartier de la Goutte-d'Or. Les hommes venaient là après leur journée de travail, las et silencieux, et buvaient pour oublier leur fatigue, leur misère, l'injustice de leur condition. Gervaise les regardait parfois en passant devant la porte, et elle ressentait un malaise profond, car elle reconnaissait en eux quelque chose qu'elle ne voulait pas voir en elle-même. En effet, l'alcool était la grande maladie sociale de son époque, le fléau que la société tolérait parce qu'il rendait les pauvres trop hébétés pour se révolter.`,
      isAI: true,
      hint: '"Le fléau que la société tolérait parce qu\'il rendait les pauvres trop hébétés pour se révolter" is ideological editorial that Zola embeds in bodies and scenes, not in the narrator\'s voice. Zola\'s tavern chapters are inventories of physical sensation — the smell of the still, the specific sounds of the drinkers — not social analysis. "Elle ressentait un malaise profond" summarises what Zola would render through Gervaise\'s physical avoidance behaviour.',
    },
    {
      id: 'zola-ai3',
      text: `La grève durait depuis quinze jours, et ses effets se lisaient sur tous les visages du coron. Les femmes ne souriaient plus. Les enfants jouaient moins bruyamment devant les portes. Les hommes restaient debout par groupes de trois ou quatre, les mains dans les poches, parlant à voix basse de la Compagnie, des délégués, des soldats qu'on disait en route. La faim commençait à se faire sentir — une faim calme et froide, plus dangereuse que la colère. Chaque jour qui passait ressemblait au précédent, et chacun sentait confusément que quelque chose allait finir par se briser, sans pouvoir dire quand ni comment.`,
      isAI: true,
      hint: '"Une faim calme et froide, plus dangereuse que la colère" is a literary antithesis — Zola would give us a specific quantity of food, a specific child crying, a specific argument between a husband and wife about the last bread. The sequence women / children / men is the correct Zolaesque structure, but every element stays generic. "Chacun sentait confusément" is a collective interiority summary; Zola always names the individual who feels it.',
    },
    {
      id: 'zola-ai4',
      text: `Nana fit son entrée sur scène dans un silence qui dura deux ou trois secondes — le temps que la salle comprenne ce qu'elle voyait. Elle était grande, blonde, habillée de blanc, et elle avançait avec cette lenteur calculée des femmes qui savent que chaque mouvement est regardé. Les hommes dans les fauteuils d'orchestre se redressèrent légèrement. Quelques femmes détournèrent les yeux, puis les ramenèrent. Car il y avait dans la présence de Nana quelque chose d'irrésistible et de troublant à la fois, une beauté sans pudeur qui dérangeait autant qu'elle attirait. La salle était à elle, et elle le savait.`,
      isAI: true,
      hint: '"La salle était à elle, et elle le savait" is a confident closing declaration — Zola\'s theatre chapter keeps Nana\'s consciousness inaccessible and builds her power through the crowd\'s measurable physical reactions. "Une beauté sans pudeur qui dérangeait autant qu\'elle attirait" is a balanced antithesis the narrator delivers as a verdict; Zola earns this observation through the specific behaviour of specific men across many pages, not in one sentence.',
    },
  ],
};

export default author;
