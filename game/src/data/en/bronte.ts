import type { Author } from '@/types/game';

const author: Author = {
  id: 'bronte',
  name: 'Charlotte Brontë',
  years: '1816–1855',
  nationality: 'British',
  knownFor: 'Jane Eyre',
  snippets: [
    {
      id: 'bronte-r1',
      text: `A new chapter in a novel is something like a new scene in a play; and when I draw up the curtain this time, reader, you must fancy you see a room in the George Inn at Millcote, with such large figured papering on the walls as inn rooms have; such a carpet, such furniture, such ornaments on the mantelpiece, such prints, including a portrait of George the Third, and another of the Prince of Wales, and a representation of the death of Wolfe. All this is visible to you by the light of an oil lamp hanging from the ceiling, and by that of an excellent fire, near which I sit in my cloak and bonnet; my muff and umbrella lie on the table, and I am warming away the numbness and chill contracted by sixteen hours' exposure to the rawness of an October day.`,
      isAI: false,
      source: 'Jane Eyre, Ch. 11',
      hint: 'The inventory of the inn room — George III portrait, death of Wolfe print, figured papering — is Brontë\'s exact prose. She catalogues specific objects not for atmosphere but to ground Jane\'s solitude in material reality. The sixteen-hour chill is a precise physical fact, not a Gothic mood.',
    },
    {
      id: 'bronte-r2',
      text: `My master's colourless, olive face, square, massive brow, broad and jetty eyebrows, deep eyes, strong features, firm, grim mouth — all energy, decision, will — were not beautiful, according to rule; but they were more than beautiful to me: they were full of an interest, an influence that quite mastered me — that took my feelings from my own power and fettered them in his. I had not intended to love him: the reader knows I had wrought hard to extirpate from my soul the germs of love there detected; and now, at the first renewed view of him, they spontaneously arrived, green and strong! He made me love him without looking at me.`,
      isAI: false,
      source: 'Jane Eyre, Ch. 17',
      hint: 'The sequence — "colourless, olive face, square, massive brow" — lists contradictory physical details that cohere into a specific, unbeautiful face. "He made me love him without looking at me" is the kind of compressed paradox Brontë earns through fifty pages of buildup; AI pastiches tend to declare attraction rather than demonstrate its mechanism.',
    },
    {
      id: 'bronte-r3',
      text: `The rain beat strongly; wind blew loud and bleak; the west shook what little verdure July had left on the trees. I had put on some warm upper garments and taken a thick shawl, and, thus clad, I could not get cold, however much I might get wet. Had I been in my own country, I should have found shelter in the woods or under a hedge, and waited till the storm was over. Here I was in a foreign land, with no knowledge of the town — if town it were — near at hand, and no resource but to press forward, drenched as I was, and trust to Providence.`,
      isAI: false,
      source: 'Jane Eyre, Ch. 28',
      hint: 'Jane\'s reasoning under stress is characteristically literal and practical: she thinks about shelter types, itemises what she is wearing, notes she "could not get cold, however much I might get wet." The parenthetical "if town it were" registers uncertainty without dramatising it. This is Brontë\'s first-person rationalism at its most grounded.',
    },
    {
      id: 'bronte-r4',
      text: `I thought of the life that lay before me — your life, sir — an existence more expansive and stirring than my own: as much more so as the depths of the sea to which the brook runs are than the shallows of its own strait channel. I wondered why moralists call this world a dreary wilderness: for me it blossomed like a rose. Just then it began to snow; the whirling storm came on, sweeping over the heath. I shut the casement to exclude the A, and walked fast to warm myself: no use; cold and doom seemed to have mastered the air. I thought of Mr. Rochester — how he had gone away —`,
      isAI: false,
      source: 'Jane Eyre, Ch. 32',
      hint: 'The whiplash structure — rose metaphor immediately extinguished by snow, warmth sought and refused — is Brontë\'s emotional realism: Jane\'s hope and loss occupy the same paragraph. The dash at the end mid-thought ("gone away —") is authentic to Brontë\'s punctuation, not a stylistic ornament.',
    },
    {
      id: 'bronte-r5',
      text: `Do you think I am an automaton? — a machine without feelings? and can bear to have my morsel of bread snatched from my lips, and my drop of living water dashed from my cup? Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong! — I have as much soul as you — and full as much heart! And if God had gifted me with some beauty and much wealth, I should have made it as hard for you to leave me, as it is now for me to leave you. I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.`,
      isAI: false,
      source: 'Jane Eyre, Ch. 23',
      hint: 'The anaphoric catalogue — "poor, obscure, plain, and little" — builds to the reversal: if she were beautiful and wealthy, she would trap him as he traps her. "I am no bird; and no net ensnares me" is one of Brontë\'s most famous sentences, its rhythm entirely unrepeatable. The compound negation is a grammatical fingerprint.',
    },
    {
      id: 'bronte-ai1',
      text: `The night was dark and full of strange sounds, as nights at Thornfield always seemed to be after Mr. Rochester's arrival. Jane lay awake in her narrow bed in the governess's room, listening to the wind as it moved through the old stones of the house, carrying with it something she could not name — a sense of menace, or perhaps of longing, or perhaps of both together, for they are not always so different as we might wish them to be. She thought of his face, so unlike any other face she had ever seen: powerful and compelling in its ugliness, the face of a man who had suffered greatly and who would, she felt certain, suffer greatly still. She did not know why she was so certain of this. She only knew that she was.`,
      isAI: true,
      hint: '"A sense of menace, or perhaps of longing, or perhaps of both together, for they are not always so different" is atmospheric fog without a body. Brontë\'s Gothic is grounded in specific detail — a creak, a smell, a particular sound. The final three short sentences ("She did not know... She only knew") manufacture profundity through truncation rather than earning it.',
    },
    {
      id: 'bronte-ai2',
      text: `Thornfield Hall in winter was a place of melancholy grandeur, its long corridors and high ceilings speaking of former glories now dimmed by time and neglect. The servants moved through it quietly, as though afraid to disturb whatever it was that brooded in its upper rooms. Jane had by now grown accustomed to its peculiarities — the strange laugh that occasionally echoed from the third floor, the locked door at the end of the passage, the way the firelight in the great hall seemed always to cast shadows rather than to dispel them. She accepted these things with the quiet resilience that had characterised her since childhood, for she had learned early that not all mysteries are meant to be solved.`,
      isAI: true,
      hint: 'Every sentence here delivers Gothic atmosphere in a perfectly uniform tone — "melancholy grandeur," "brooded," "quiet resilience." Brontë\'s Jane Eyre modulates: curiosity, irritation, humour, fear. The AI pastiche has no texture changes. "Not all mysteries are meant to be solved" is a concluded moral; Jane Eyre doesn\'t offer conclusions, she asks questions.',
    },
    {
      id: 'bronte-ai3',
      text: `I was not, I confess, a woman who inspired passionate attachment in those who met me. My face was too plain, my manner too direct, my opinions too freely expressed for the tastes of those accustomed to a more ornamental femininity. And yet I had learned — through years of solitude and self-examination — that the soul does not require the approval of others in order to know its own worth. I had a mind, and that mind was my own; I had a heart, and though it had been wounded, it remained capable of great feeling. These were not inconsiderable possessions, whatever the world might think.`,
      isAI: true,
      hint: 'The self-assessment is tidily systematic — face, manner, opinions, then counterargument — and arrives at a self-affirmation that Jane Eyre never claims so directly. Real Jane is riven with self-doubt even at her most defiant. "These were not inconsiderable possessions" is a grammatically correct Brontë-flavoured phrase but the settled confidence behind it is not Jane\'s voice.',
    },
    {
      id: 'bronte-ai4',
      text: `When Mr. Rochester spoke to me in that tone, something in my breast responded with a warmth I struggled to suppress. He had a power over me that I could not entirely explain — not the power of mere handsomeness, for he was not handsome in any conventional sense, but something deeper and more dangerous: the power of a mind that met mine as an equal, and of eyes that seemed, in their darker moments, to see through every defence I had ever constructed. I reminded myself that he was my employer, and I his dependent, and that the distance between us was not merely social but essential.`,
      isAI: true,
      hint: '"Something in my breast responded with a warmth I struggled to suppress" is the vocabulary of mass-market romance, not Brontë. Jane describes Rochester\'s effect through specific actions and observations, not warm-in-the-breast generalities. "The power of a mind that met mine as an equal" states the theme directly; Brontë demonstrates it through conversation.',
    },
    {
      id: 'bronte-ai5',
      text: `The moors in autumn have a beauty that is inseparable from their desolation, and I have often thought that this is why I loved them — because they made no pretence of comfort, because they offered the eye nothing soft or accommodating, only the truth of the landscape as it was: heather going brown, sky pressing low, wind that smelled of rain and distance. In such places one feels very small and very real simultaneously, which is, I believe, the closest the natural world comes to the condition of the soul in its more honest moments. I was happy there, in the way that one can only be happy when one has ceased to expect happiness.`,
      isAI: true,
      hint: 'This is picturesque nature writing, not Brontë. The moors in Jane Eyre are named places Jane passes through when cold, hungry, and desperate — not philosophical occasions for meditation on happiness. "The closest the natural world comes to the condition of the soul" is the kind of generalising epigram Joyce or Woolf might write; Brontë\'s Jane is too embodied and immediate for it.',
    },
  ],
};

export default author;
