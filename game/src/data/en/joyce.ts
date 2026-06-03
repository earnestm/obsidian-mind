import type { Author } from '@/types/game';

const author: Author = {
  id: 'joyce',
  name: 'James Joyce',
  years: '1882–1941',
  nationality: 'Irish',
  knownFor: 'Dubliners',
  snippets: [
    {
      id: 'joyce-r1',
      text: `North Richmond Street, being blind, was a quiet street except at the hour when the Christian Brothers' School set the boys free. An uninhabited house of two storeys stood at the blind end, detached from its neighbours in a square ground. The other houses of the street, conscious of decent lives within them, gazed at one another with brown imperturbable faces. The former tenant of our house, a priest, had died in the back drawing-room. Air, musty from having been long enclosed, hung in all the rooms, and the waste room behind the kitchen was littered with old useless papers.`,
      isAI: false,
      source: 'Dubliners, Araby',
      hint: '"North Richmond Street, being blind" — Joyce opens with a personification that is also a topographical fact: the street is a dead end. "Conscious of decent lives within them, gazed at one another with brown imperturbable faces" attributes a moral self-satisfaction to terraced houses without explaining it. This is free indirect Dublin, not description.',
    },
    {
      id: 'joyce-r2',
      text: `She sat at the window watching the evening invade the avenue. Her head was leaned against the window curtains and in her nostrils was the odour of dusty cretonne. She was tired. Few people passed. The man out of the last house passed on his way home; she heard his footsteps clacking along the concrete pavement and afterwards crunching on the cinder path before the new red houses. One time there used to be a field there in which they used to play every evening with other people's children. Then a man from Belfast bought the field and built houses in it — no, not that.`,
      isAI: false,
      source: 'Dubliners, Eveline',
      hint: '"Then a man from Belfast bought the field and built houses in it — no, not that." The dash and correction are Eveline\'s mind catching itself, abandoning a memory. Joyce does not explain what she abandons or why. The sensory precision — "dusty cretonne," "crunching on the cinder path" — is anchored to specific Dublin materials, not generic Victorian furnishings.',
    },
    {
      id: 'joyce-r3',
      text: `He lived at a little distance from his body, regarding his own acts with doubtful side-glances. He had an odd autobiographical habit which led him to compose in his mind from time to time a short sentence about himself containing a subject in the third person and a verb in the past tense. He never gave alms to beggars and walked firmly, glancing quickly now and then to left and right. If he was uncertain about the answer he would know it by heart, if he was certain he would not trouble to remember it. There was always something of the conqueror in his bearing.`,
      isAI: false,
      source: 'Dubliners, A Little Cloud',
      hint: '"He lived at a little distance from his body, regarding his own acts with doubtful side-glances" — this is Joyce\'s analysis of Little Chandler\'s dissociation, but rendered as observation, not diagnosis. The sentence about composing third-person autobiographical sentences in his mind is itself demonstrating the habit it describes. The logic is recursive in a way no AI pastiche has managed.',
    },
    {
      id: 'joyce-r4',
      text: `His soul swooned slowly as he heard the snow falling faintly through the universe and faintly falling, like the descent of their last end, upon all the living and the dead. Yes, the newspapers were right: snow was general all over Ireland. It was falling on every part of the dark central plain, on the treeless hills, falling softly upon the Bog of Allen and, farther westward, softly falling into the dark mutinous Shannon waves. It was falling, too, upon every part of the lonely churchyard on the hill where Michael Furey lay buried. It was falling softly upon the crooked crosses and headstones.`,
      isAI: false,
      source: 'Dubliners, The Dead',
      hint: '"His soul swooned slowly as he heard the snow falling faintly through the universe and faintly falling" — the chiasmus (falling faintly / faintly falling) is one of the most discussed sentences in English literature. The specific Dublin geography — Bog of Allen, the Shannon, the dark central plain — anchors a transcendent ending to actual Irish cartography.',
    },
    {
      id: 'joyce-r5',
      text: `Once upon a time and a very good time it was there was a moocow coming down along the road and this moocow that was coming down along the road met a nicens little boy named baby tuckoo. His father told him that story: his father looked at him through a glass: he had a hairy face. He was baby tuckoo. The moocow came down the road where Betty Byrne lived: she sold lemon platt. O, the wild rose blossoms on the little green place. He sang that song. That was his song. O, the green wothe botheth.`,
      isAI: false,
      source: 'A Portrait of the Artist as a Young Man, Ch. 1',
      hint: '"O, the green wothe botheth" — baby Stephen\'s mispronunciation is Joyce\'s rendering of early childhood phonetics, not a symbol or a metaphor; it simply is the sound a young child makes. The shift from third-person narration to first-person song without transition or explanation ("He sang that song. That was his song") is Joyce\'s stream of consciousness at its most transparent and most strange.',
    },
    {
      id: 'joyce-ai1',
      text: `He walked along the quays in the late afternoon light, thinking of everything and nothing. The river moved beside him, grey-green and indifferent, as it always had, as it always would. Dublin spread out on either side: the familiar shabby streets, the public houses with their briefly opened doors releasing warmth and the smell of porter into the cold air, the women in black shawls who did not look at him as he passed. He felt the familiar paralysis settling over him, the sense that no matter how far a man might travel in his imagination, the city would always draw him back into its grey embrace, its ordinary suffering, its beauty that was also a kind of trap.`,
      isAI: true,
      hint: '"The familiar paralysis settling over him" and "its grey embrace, its ordinary suffering, its beauty that was also a kind of trap" — this is criticism of Joyce translated into prose. Joyce\'s characters feel paralysis; they don\'t label it "paralysis" while they feel it. The AI has named the theme of Dubliners rather than dramatised the experience of living inside it.',
    },
    {
      id: 'joyce-ai2',
      text: `Yes and when she came in from the cold her cheeks were red and her eyes bright and he thought how beautiful she was even now even after all these years and he wanted to say something but the words would not come because the words never came when you needed them only afterwards when it was too late and you were lying awake in the dark thinking of all the things you might have said and the silence had said everything and nothing both at the same time and it was always like this always had been always would be.`,
      isAI: true,
      hint: 'The unpunctuated "and...and...and" is a surface imitation of Joyce\'s run-on style, but the content is generic romantic regret without a single Dublin particular — no name, no object, no address, no specific year. Joyce\'s stream of consciousness is always anchored: a specific woman, a specific occasion, a specific song. "Always had been always would be" repeats without purpose; Joyce\'s repetitions always shift slightly.',
    },
    {
      id: 'joyce-ai3',
      text: `The revelation came to him, as revelations often do, not in a moment of great crisis or high emotion, but in the most ordinary of circumstances — standing at the window of a tram, watching the streets of Dublin pass. He understood, suddenly and with great clarity, that he had been waiting for something all his life without knowing what it was, and that whatever it was, it would not come. This was not a tragic realisation, merely a true one. The tram moved on. The streets continued their shabby indifference. He felt, if anything, a certain relief.`,
      isAI: true,
      hint: 'The epiphany is announced ("The revelation came to him") and then explained ("he understood, suddenly and with great clarity"). Joyce\'s epiphanies in Dubliners work precisely because they are NOT explained — the story ends in an image or a gesture that the reader must complete. "As revelations often do" is the narrator editorialising in a way Joyce never does. The final "certain relief" is too tidy.',
    },
    {
      id: 'joyce-ai4',
      text: `He thought of Eileen. She was the girl who lived at the end of the road and who sometimes stood at her gate in the evening when the other children were playing. She had long pale hands and her hair was the colour of the chestnuts that fell from the tree in autumn. He had never spoken to her, not properly, not in the way he imagined speaking to her, and now she was gone — moved away with her family to somewhere in the west — and he would never know whether what he had felt was love or only the idea of love, which is perhaps the same thing when you are young.`,
      isAI: true,
      hint: '"Which is perhaps the same thing when you are young" is a knowing adult observation that interrupts the consciousness of a young Stephen Dedalus. Joyce\'s young Stephen never generalises about youth — he is entirely inside it. The descriptive detail (pale hands, chestnut-coloured hair) is generic romantic convention; Joyce\'s specific details in Portrait are always sensory and slightly strange.',
    },
    {
      id: 'joyce-ai5',
      text: `The party was ending now, the last guests putting on their coats and saying their farewells in the hallway. He stood apart and watched them, feeling the melancholy of endings that he always felt at such moments — the sense of time passing, of warmth retreating, of the brief community of a gathering dissolving back into separate solitudes. His wife appeared at his elbow. She had been crying, he thought, or was about to cry; there was something in her face that he did not know how to read. The snow was still falling outside. He could hear it against the windowpanes.`,
      isAI: true,
      hint: '"The melancholy of endings that he always felt at such moments" — Gabriel Conroy in The Dead does not reflect on his habitual melancholy; he is overtaken by specific revelations. "The brief community of a gathering dissolving back into separate solitudes" is the kind of elegant abstraction that substitutes for Joyce\'s concrete images. The ending reaches for the snow of The Dead but gives us sound rather than the cosmic geography Joyce deploys.',
    },
  ],
};

export default author;
