import type { Author } from '@/types/game';

const author: Author = {
  id: 'hugo',
  name: 'Victor Hugo',
  years: '1802–1885',
  nationality: 'Français',
  knownFor: 'Les Misérables',
  snippets: [
    {
      id: 'hugo-r1',
      text: `Cet homme était Jean Valjean. La porte s'ouvrit.

Un homme entra.

C'était, comme nous le savons, le voyageur, Valjean.

Il entra, fit un pas, et s'arrêta, laissant la porte ouverte derrière lui. Il avait son sac sur l'épaule, son bâton à la main, une expression rude, hardie, fatiguée et violente dans les yeux. Le feu de la cheminée l'éclairait. Il était hideux. C'était une sinistre apparition.

Mme Magloire n'eut pas la force de pousser un cri. Elle tressaillit et resta béante.

Mlle Baptistine se retourna, aperçut l'homme qui entrait, et se dressa à demi d'effroi ; puis, ramenant la tête vers la cheminée, elle se mit à regarder son frère, et son visage redevint profondément calme et serein.

Monseigneur Bienvenu fixait sur l'homme des yeux tranquilles.

Comme il ouvrait la bouche, sans doute pour demander au nouveau venu ce qu'il désirait, l'homme appuya ses deux mains sur son bâton, promena ses regards sur le vieillard et les deux femmes, et, sans attendre que l'évêque parlât, dit d'une voix haute :

— Voici. Je m'appelle Jean Valjean. Je suis un galérien. J'ai passé dix-neuf ans au bagne.`,
      isAI: false,
      source: 'Les Misérables, Tome I, Livre II, Ch. 3',
      hint: 'Hugo stages Valjean\'s arrival in a series of short declarative sentences that slow time to a theatrical freeze — each sentence is a beat. The women\'s reactions are ordered by hierarchy of moral insight: the housekeeper panics, the sister nearly panics then becomes serene, the Bishop is still from the start. That arrangement is an argument about who can see clearly. Valjean\'s self-introduction — giving his name, his status, his sentence in three blunt clauses — is the structural reversal: the monstrous figure disarms himself with the truth.',
    },
    {
      id: 'hugo-r2',
      text: `Que s'était-il passé dans cette âme souffrante ? Quel affaissement, quelle prostration ! Quelle chute dans les plus profonds décourageant ! Elle avait voulu vivre, elle avait cru pouvoir. Fantine avait eu une jeunesse fraîche et belle. Cette jeunesse avait été gaspillée dans une sorte de folie sombre et funeste ; à vingt ans, à vingt-deux ans, elle avait un enfant. Maintenant, à vingt-cinq ans, elle avait été ouvrière, elle était fille. Que de douleur dans cette déclivité !

La société jette de pareilles créatures sans prendre soin de regarder si elle les blesse. Elle pose son nom sur elles : Prostituée. Elle les marque d'une flétrissure, les laisse tomber dans les ténèbres, et elle se lave les mains. Mais Fantine était de ces malheureux que la société condamne sans les avoir jugés.`,
      isAI: false,
      source: 'Les Misérables, Tome I, Livre V, Ch. 10',
      hint: 'Hugo\'s social realism operates through the collision of accounting and outrage. The paragraph begins as an audit — precise ages, precise stages of decline — and then breaks open into direct moral accusation: "La société jette de pareilles créatures sans prendre soin de regarder si elle les blesse." The final sentence is not emotional description but juridical precision: condemned without trial. Hugo the novelist and Hugo the pamphleteer are operating in the same paragraph, and the tension is the point.',
    },
    {
      id: 'hugo-r3',
      text: `Waterloo est une bataille du premier ordre gagnée par un capitaine du second.

Ce qui est étonnant dans Waterloo, c'est l'Angleterre, c'est la fermeté anglaise, c'est la résolution anglaise, c'est le sang anglais ; ce qu'il y a de superbe dans l'Angleterre à Waterloo, c'est, sauf respect de toute autre, elle-même. Ce n'est pas son général, c'est son armée.

Wellington, bizarrement ingrat, déclare dans une dépêche à lord Bathurst que son armée, l'armée qui a combattu dans cette journée du 18 juin 1815, était une « détestable armée ». Qu'en pense cette sombre pile d'ossements enfouis dans les sillons de Waterloo ?

L'Angleterre a été trop modeste vis-à-vis de Wellington. Faire Wellington si grand, c'est faire l'Angleterre petite. Wellington n'est qu'un héros comme un autre. Ces Écossais gris, ces gardes à cheval, ces régiments de Maitland et de Mitchell, cette infanterie de Pack et de Kempt, cette cavalerie de Ponsonby et de Somerset, ces Highlanders jouant du fifre sous la mitraille, ces bataillons de Ryland, ces recrues fraîches qui savaient à peine manier un mousquet et qui tenaient tête aux vieilles bandes d'Essling et de Rivoli, voilà ce qui est grand. Wellington l'a su ; il a rendu hommage à ces soldats. Pour le reste, nous contestons.`,
      isAI: false,
      source: 'Les Misérables, Tome II, Livre I, Ch. 14',
      hint: 'This is Hugo\'s digression at full argumentative thrust. He opens with a paradox — a first-rate battle won by a second-rate captain — and then builds through accumulation of specific regiment names toward a thesis about collective heroism versus the myth of the great individual. The rhetorical question addressed to "cette sombre pile d\'ossements" is typical Hugo: he makes the dead witnesses in his argument. The digression is not decoration; it is the demonstration of a thesis about history and celebrity.',
    },
    {
      id: 'hugo-r4',
      text: `Quasimodo avait une certaine affection pour le jeune archidiacre, qui l'avait adopté, nourri, élevé. Rien de bien surprenant à cela. Mais pourquoi le sonneur de cloches aimait-il les cloches ? Ce mystère était peut-être bien plus profond.

Les cloches étaient sa famille, sa mère, ses sœurs, ses amies. Les cloches l'avaient formé. Elles l'avaient été ses compagnes depuis l'enfance. Il les avait vus grandir. Il avait été élevé avec elles ; elles étaient sa nourriture, sa conversation, son monde. Il n'avait pas d'autres amis que les cloches, et de Dieu que les cloches. Parfois il s'inquiétait de Frollo ; le reste du temps, ses regards montaient vers les cloches, et il était heureux.

Le beffroi de Notre-Dame était son univers. Il ne dépassait pas les bornes de cet univers. Il ne savait que sonner. Il sonait. Il sonait à toutes les fêtes, à toutes les heures, il sonait quand il pleuvait, quand il faisait du soleil. Pour lui, il n'y avait pas de journée ennuyeuse, pas de saison qui déplût.`,
      isAI: false,
      source: 'Notre-Dame de Paris, Livre IV, Ch. 3',
      hint: 'Hugo\'s characterisation of Quasimodo works through a kind of tender taxonomy. The bells are catalogued as every category of human relationship — family, mother, sisters, friends — and then the paragraph narrows: not just his companions, but his world, his food, his conversation. The final movement strips everything down to the single verb "soner," repeated without variation. Hugo\'s prose enacts Quasimodo\'s limitation without condescension — the repetition is not pity but exactness.',
    },
    {
      id: 'hugo-r5',
      text: `Cosette n'était pas très maltraitée, mais très malheureuse. Il en est des enfants ainsi. On la faisait travailler, on ne lui donnait pas grand-chose à manger, on la laissait aller en haillons, et on la laissait dormir dans une cave, en hiver. Elle était battue quelquefois, sans raison, par la Thénardier. On l'appelait la Alouette. Les petits enfants avaient un instinct qui leur faisait deviner qu'il faut se défier de Cosette, et ils l'évitaient.

Cosette était toujours à genoux devant cette femme, occupée à quelque rude besogne. La Thénardier l'appelait à chaque instant. Elle remplissait les pichets, elle lavait les assiettes, elle servait les consommateurs, elle balayait les chambres.

Ses deux filles, Éponine et Azelma, étaient vêtues comme de petites reines. Cosette était vêtue comme une servante.`,
      isAI: false,
      source: 'Les Misérables, Tome I, Livre IV, Ch. 2',
      hint: 'The cruelty is indicted by accumulation rather than exclamation. Hugo lists Cosette\'s conditions — work, hunger, rags, cellar, beatings — in a neutral enumerative grammar that makes each item land harder for not being underlined. The structural reversal at the close — Éponine and Azelma dressed as little queens, Cosette as a servant — is Hugo\'s method: let the juxtaposition carry the moral weight so the narrator does not have to state it.',
    },
    {
      id: 'hugo-ai1',
      text: `Il existe dans l'âme humaine des abîmes que nul regard extérieur ne saurait sonder. L'homme qui souffre en silence est peut-être celui qui souffre le plus profondément, car sa douleur n'a point d'écho dans le monde et ne rencontre aucune main tendue. La société, dans sa hâte, passe à côté de ces naufrages invisibles sans les voir. Elle honore les exploits, elle célèbre les triomphes, elle couronne ceux qui ont vaincu ; mais ceux qui ont succombé, elle les oublie, comme si leur défaite était une faute. Pourtant, quelle est la grandeur d'un homme qui tombe, s'il tombe en combattant pour ce qui est juste ? La chute elle-même peut être une victoire. L'obscurité peut être une gloire. Le silence peut être un témoignage. Car ce qui compte, en dernière analyse, ce n'est pas le bruit que l'on fait dans le monde, mais la lumière que l'on laisse dans les cœurs.`,
      isAI: true,
      hint: 'The passage generates Hugolian grandiloquence without Hugo\'s structural argument. Each sentence performs moral elevation — the invisible sufferer, society\'s blindness, the paradox of noble defeat — but the sentences do not build on each other; they restate the same claim in progressively more lyrical terms. Hugo\'s rhetoric moves: it establishes a thesis ("Waterloo is a first-rate battle won by a second-rate captain"), complicates it, and arrives at a conclusion that could not have been predicted from the opening. This passage arrives at its final maxim — "non le bruit que l\'on fait dans le monde, mais la lumière que l\'on laisse dans les cœurs" — having added nothing since its first sentence. The grandiloquence is decorative because it has no destination.',
    },
    {
      id: 'hugo-ai2',
      text: `Il convient de dire quelques mots de Paris en 1832, car c'est dans cette ville, à cette époque précise, que se déroulent les événements que nous allons raconter. Paris comptait alors environ huit cent mille habitants. La ville s'étendait des faubourgs Saint-Antoine et Saint-Marceau, à l'est et au sud, jusqu'aux quartiers les plus élégants de la rive droite, au nord et à l'ouest. Les barricades n'étaient pas un phénomène nouveau dans son histoire : on en avait dressé en 1588, en 1648, en 1789, et encore en 1830. La misère y était concentrée dans les quartiers populaires, notamment autour du faubourg Saint-Antoine, tandis que la bourgeoisie et l'aristocratie occupaient les rues proches du Palais-Royal et des grands boulevards. C'est dans ce contexte qu'il faut comprendre le soulèvement de juin 1832, qui fut à la fois une révolte politique et une cri de désespoir des plus pauvres.`,
      isAI: true,
      hint: 'Hugo\'s famous digressions are argumentative, not encyclopaedic. When he writes about Waterloo, he is not providing background — he is prosecuting a case about the mythology of great men. When he writes about the Paris sewers, he is building a metaphor for civilisation\'s hypocrisy. This passage does the opposite: it presents population figures, lists districts, catalogues dates of past barricades. It is informative where Hugo is provocative. The final sentence — "à la fois une révolte politique et un cri de désespoir" — offers a tidy double label where Hugo would have committed to a single surprising argument and refused the easy synthesis. Historical digressions in Hugo always make the reader feel they have been shown something they did not expect to see.',
    },
    {
      id: 'hugo-ai3',
      text: `Jean Valjean était changé. La nuit passée chez l'évêque avait accompli en lui quelque chose d'irréversible. L'homme qui avait dormi dans ce lit propre, qui avait mangé à cette table fraternelle, qui avait reçu des chandeliers d'argent en réponse à sa trahison, n'était plus tout à fait le même homme qui avait frappé à la porte la veille. La haine qui l'avait maintenu debout pendant dix-neuf ans de bagne s'était fissurée. À sa place, quelque chose d'incertain et de fragile avait commencé de germer — quelque chose qui ressemblait, de loin, à ce que les hommes appellent une conscience. Il ne le savait pas encore. Mais la transformation était réelle, et elle était définitive. Jean Valjean était devenu, sans le savoir, un autre homme.`,
      isAI: true,
      hint: 'Hugo\'s account of Valjean\'s transformation after the Bishop\'s silver is one of the most extended dramatic scenes in the novel — it covers several chapters, moves through Valjean\'s flight, his theft from the child Petit-Gervais, his pursuit by the gendarmerie of his own conscience, and his collapse on the road. The transformation is proven by action and specific failure, not announced. This passage does the opposite: it states the transformation directly ("la transformation était réelle, et elle était définitive"), offers a metaphor (hatred cracking, conscience germinating), and closes with a summary verdict. "Jean Valjean était devenu, sans le savoir, un autre homme" is the sentence a book-jacket writer produces. Hugo earns the same conclusion by making you watch the man commit another crime and then come apart on the roadside in the dark.',
    },
    {
      id: 'hugo-ai4',
      text: `Le lecteur sait que nous n'avons point l'habitude de fuir les difficultés. Nous devons dire ici, avec toute la franchise qui nous est naturelle, que la question de la misère est peut-être la première question de notre temps. Le lecteur nous accordera sans doute que nous ne l'abordons pas sans une certaine inquiétude. Car enfin, de quoi s'agit-il ? Il s'agit de savoir si la société moderne est capable de regarder en face ce qu'elle a fait de ses membres les plus faibles. Nous croyons que oui, et c'est pourquoi nous écrivons. Le lecteur, qui a suivi Fantine jusqu'ici, comprend mieux que quiconque ce que nous voulons dire. Nous lui faisons confiance pour tirer lui-même les conclusions que les faits imposent.`,
      isAI: true,
      hint: 'Hugo\'s direct addresses to the reader are combative — he anticipates resistance, forces complicity, and often accuses. "Le lecteur qui pense que nous exagérons se trompe" is his register, not this passage\'s "Nous lui faisons confiance pour tirer lui-même les conclusions." That final sentence is a gracious withdrawal; Hugo never withdraws. He states the conclusion himself, emphatically, and dares the reader to disagree. This passage\'s reader-address is collaborative and solicitous — it assumes the reader is already on side and reassures them. Hugo\'s addresses assume the reader is resistant, comfortable, and needs to be implicated. The rhetoric here praises the reader into agreement; Hugo\'s rhetoric corners the reader into it.',
    },
  ],
};

export default author;
