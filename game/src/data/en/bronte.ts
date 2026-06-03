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
      text: `I thought of the life that lay before me — your life, sir — an existence more expansive and stirring than my own: as much more so as the depths of the sea to which the brook runs are than the shallows of its own strait channel. I wondered why moralists call this world a dreary wilderness: for me it blossomed like a rose. Just then it began to snow; the whirling storm came on, sweeping over the heath. I shut the casement to exclude the wet, and walked fast to warm myself: no use; cold and doom seemed to have mastered the air. I thought of Mr. Rochester — how he had gone away —`,
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
      text: `Reader, I will not pretend that those first weeks at Thornfield Hall were easy ones. The house was grand in a way that felt, to my unaccustomed eyes, more like severity than beauty — its stone corridors cold even in autumn, its high windows admitting light without warmth, its silence broken at intervals by sounds I could not account for and did not, then, know enough to fear. Mrs. Fairfax was kind; little Adèle was lively and affectionate; and I told myself that these things were sufficient. I had known worse places and harder conditions. I had, above all, known loneliness, and this was something different — a solitude that was populated, a quiet that held, somewhere within it, the possibility of change. I felt deeply grateful for it, and tried not to want more.`,
      isAI: true,
      hint: '"I felt deeply grateful for it, and tried not to want more" names Jane\'s emotion and then reflects on it from a distance. Real Jane Eyre reports what she perceives and does, not what she felt she was feeling. The description of Thornfield — "cold even in autumn," "light without warmth," "silence broken at intervals" — delivers Gothic atmosphere in three parallel constructions, whereas Brontë\'s Jane notices a specific portrait, a specific smell, a specific laugh from a specific room. The whole passage is smooth where Brontë is jagged.',
    },
    {
      id: 'bronte-ai2',
      text: `Mr. Rochester was not a man one could easily describe to those who had not met him, and I find I cannot do it now without a sense of my own inadequacy to the task. He was not handsome — this much was plain from the first — but there was something in his face, and in the energy with which he moved and spoke, that made handsomeness seem beside the point. He was a man of strong passions and stronger opinions, and he concealed neither with much success, though I sometimes thought he tried. When he spoke to me — which was often, and in a manner I had not expected from an employer — I felt something stir in me that I had not previously known was capable of being stirred. It was not comfort. It was something more alarming than comfort, and more alive.`,
      isAI: true,
      hint: '"Something stir in me that I had not previously known was capable of being stirred" is the vocabulary of mass-market romance, a warmth-in-the-chest sensation described in the vaguest possible terms. Brontë\'s Jane describes Rochester through contradictory specific details — "colourless, olive face," "jetty eyebrows" — that add up to a particular unbeautiful face. This passage says he was "not handsome" and then gives us nothing concrete. "More alarming than comfort, and more alive" is a neat antithesis that sounds like a pull-quote.',
    },
    {
      id: 'bronte-ai3',
      text: `I was not accustomed to happiness, and so I did not, at first, recognise it. It came quietly, without fanfare — in the lesson hours with Adèle, in the evenings by the fire with a book, in the gradual easing of that tightness in my chest that I had carried, without entirely noticing it, since Lowood. I had thought of myself, for so long, as a person to whom good things did not happen; and now here was Thornfield, solid and strange around me, and here was a position I could occupy with some dignity, and here was, occasionally, the sound of his voice in the corridor below, and I found that I was, carefully and with many reservations, becoming content. I was almost afraid to say so, even to myself.`,
      isAI: true,
      hint: '"I did not, at first, recognise it" — the AI has Jane explain her emotional process step by step, with tidy introspective awareness. Jane Eyre\'s interiority is passionate and argumentative, not quietly self-analytic. "That tightness in my chest that I had carried, without entirely noticing it" is modern therapeutic language. The final "I was almost afraid to say so, even to myself" closes on a well-managed sentiment; Brontë\'s Jane closes on an action or a sudden shock, not a soft caveat.',
    },
    {
      id: 'bronte-ai4',
      text: `The moors were beautiful that morning — or not beautiful exactly, for beauty is too gentle a word for what the moors are — wild, rather, and indifferent, and somehow deeply honest in their indifference. I had walked out early, before the household was stirring, and stood on the high ground above Thornfield, and felt the wind come across the heather, sharp and clean and full of a kind of freedom I had not felt since childhood. Below me the house lay quiet, its windows still dark, its secrets still sleeping. I thought of Mr. Rochester. I thought of the locked room on the third floor. I thought of how little I knew, and how much I wished to know, and how dangerous that wishing was, and I felt, in that moment, both afraid and entirely alive.`,
      isAI: true,
      hint: 'The moors scene is entirely generic: wind, heather, freedom, the house below with its dark windows and sleeping secrets. Brontë\'s outdoor scenes are physically specific — what Jane is wearing, whether she is cold, where exactly she walks. "Both afraid and entirely alive" is the kind of balanced emotional conclusion a reader expects; Brontë\'s endings are always slightly off-balance, with one feeling eclipsing the other in a way you don\'t see coming. The list of three things Jane "thought of" is an LLM parallel-structure habit.',
    },
    {
      id: 'bronte-ai5',
      text: `There are moments in a life when everything that has come before seems to have been leading, with a hidden inevitability, to a single point of decision. I had known such moments before — at Lowood, when I had resolved to advertise for a position; at Thornfield, when I had chosen to leave. Now I stood at another such threshold, and I understood, with the clarity that only great suffering can produce, that the choice before me was not truly a choice at all, but a recognition — of who I was, of what I valued, of what I could and could not live with. My heart was racing. My hands were steady. I stepped forward.`,
      isAI: true,
      hint: '"Everything that has come before seems to have been leading, with a hidden inevitability, to a single point of decision" is a narrator looking back on a life and finding a pattern — but Jane Eyre is narrated in the moment of experience, not from philosophical retrospect. "The clarity that only great suffering can produce" is a motivational-poster epigram. "My heart was racing. My hands were steady." — the short-sentence cinematic contrast is a modern thriller technique, not Victorian first-person prose.',
    },
  ],
};

export default author;
