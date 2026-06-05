import type { Author } from '@/types/game';

const author: Author = {
  id: 'hemingway',
  name: 'Ernest Hemingway',
  years: '1899–1961',
  nationality: 'American',
  knownFor: 'A Farewell to Arms',
  snippets: [
    {
      id: 'hemingway-r1',
      text: `In the late summer of that year we lived in a house in a village that looked across the river and the plain to the mountains. In the bed of the river there were pebbles and boulders, dry and white in the sun, and the water was clear and swiftly moving and blue in the channels. Troops went by the house and down the road and the dust they raised powdered the leaves of the trees. The trunks of the trees too were dusty and the leaves fell early that year and we saw the troops marching along the road and the dust rising and leaves, stirred by the breeze, falling and the soldiers marching and afterward the road bare and white except for the leaves.`,
      isAI: false,
      source: 'A Farewell to Arms, Ch. 1',
      hint: 'Leaves appear three times, each time more weighted: leaves dusty, leaves falling, leaves remaining on the bare road. Nothing announces this as an omen. The sentence accumulates soldiers, dust, and leaves into a single coordinated clause and then withdraws, leaving the road empty. The mortality is entirely in the objects and their sequence, never named.',
    },
    {
      id: 'hemingway-r2',
      text: `"I'm afraid of the rain because sometimes I see me dead in it."
"No."
"And sometimes I see you dead in it."
"That's more likely," I said.
"No, it's not, darling. Because I'm not afraid of it for myself any more. It's when I see you dead in it."
"That's foolish."
"I know it's foolish." She looked out the window. "I'm not afraid of it really. I just go ahead with the rain."
"I'll take care of you."
"I know. And I'll take care of you. We have to take care of each other."`,
      isAI: false,
      source: 'A Farewell to Arms',
      hint: 'Catherine names the premonition but the dialogue keeps deflecting from it — "That\'s foolish," "I know it\'s foolish." The characters are not having a conversation about fear; they are performing the ritual of not quite believing what they both know. Hemingway never writes "she was afraid for him." He writes the conversation that contains the fear inside its evasions.',
    },
    {
      id: 'hemingway-r3',
      text: `We were going along the road and then I was in a field and there was a gun firing and I was very afraid and I lay on the ground and the firing kept on and then I was not afraid but just very tired and I got up and went to the road. The road was very muddy and there was a lot of water in the ditches. I went along the road toward the river. There was artillery firing from the woods and the shells were going over and I was not afraid because I knew it was going to be all right.`,
      isAI: false,
      source: 'A Farewell to Arms',
      hint: 'The fear is stated once and immediately displaced by exhaustion, then by movement. By the third sentence the narrator is not afraid because "he knew it was going to be all right" — an assertion that the preceding context makes obviously untrue and that no one could rationally believe. This is how Hemingway renders the dissociation of combat: the mind insisting on normalcy while the body processes chaos.',
    },
    {
      id: 'hemingway-r4',
      text: `"You're not a moron. You're only a case of arrested development."
"Thank God," said Brett.
"You like her, do you?" the count asked.
"I like her very much," I said.
"Is she a friend of yours?"
"Yes, she is."
"There's something wrong with you all," the count said. "You're not like other people."
"No," Brett said. "We're not."
The count poured champagne.
"You like this wine?" he asked.
"Very much."
"I thought you would. You've the eyes of a man who likes good things."`,
      isAI: false,
      source: 'The Sun Also Rises',
      hint: 'The Count\'s final compliment — "you\'ve the eyes of a man who likes good things" — is positioned directly after Brett says "We\'re not" to the accusation that something is wrong with them all. The champagne and the compliment do not resolve the exchange about damage; they end it by moving into a different social register entirely. Hemingway\'s dialogue scenes close not with resolution but with a change of subject.',
    },
    {
      id: 'hemingway-r5',
      text: `In the morning it was bright and they were sprinkling the streets of the town and we all had breakfast in a café. Bayonne is a nice town. It is like a very clean Spanish town and it is on a big river. Already, so early in the morning, it was very hot on the boulevard.
The smell of the early morning in the town was pleasant. We sat at a table outside on the terrace and watched the street. There were men going to work. There was a low line of hills. There was a river. There were cows being driven along the street.`,
      isAI: false,
      source: 'The Sun Also Rises',
      hint: 'The list of what exists — hills, river, cows, men going to work — is stripped of all commentary. "Bayonne is a nice town. It is like a very clean Spanish town" is factual, flat, affectless. The emotional state of the narrator is encoded entirely in the neutrality of observation: the more careful the looking, the more carefully Jake is not thinking about Brett. The iceberg here is six fathoms down.',
    },
    {
      id: 'hemingway-ai1',
      text: `We came out of the trench at night and crossed the field under the flares and I was afraid. I was very afraid. The fear was in my stomach and in my hands and I could feel it clearly as we moved through the dark grass toward the wire. I knew then that I could die and the knowledge of it was immediate and real and not abstract any more the way it had been before the war. Martinez was ahead of me and I watched his back and I thought that if he could keep walking I could too but I was still afraid and the fear did not go away.`,
      isAI: true,
      hint: '"I was afraid. I was very afraid." — real Hemingway names fear once, flatly, then immediately moves to what the body does next: it gets up, it walks, it eats, it sleeps. He does not linger on the naming or intensify it. Here, the fear is inventoried ("in my stomach and in my hands"), philosophized about ("not abstract any more the way it had been"), and returned to at the end as a conclusion. Hemingway\'s courage is structural — characters demonstrate it by continuing to do things while afraid; they do not narrate it as a theme. The line "the knowledge of it was immediate and real and not abstract" is the AI explaining Hemingway\'s effect rather than producing it.',
    },
    {
      id: 'hemingway-ai2',
      text: `"I love you," she said. "I know that isn't what you want to hear right now but I need you to know it."
"I know you do," he said.
"Do you love me?"
"I don't know what I feel."
"That's honest at least."
"I'm trying to be honest."
"I know. That's why I trust you even when I shouldn't." She looked at him across the table. "I think we want the same things. I just think we're afraid to say it."
"Maybe."
"We could just say it."
"It doesn't always help to say it," he said. "Sometimes it's better to just let things be what they are."`,
      isAI: true,
      hint: 'Real Hemingway dialogue withholds the subject of the conversation. His characters talk about wine, fishing, what they will do tomorrow — while the actual subject (love, damage, what is broken between them) surfaces only in pressure and evasion. Here, both speakers name the subject directly: "I love you," "do you love me," "we want the same things," "we\'re afraid to say it." The dialogue then produces a theory about the nature of speech — "sometimes it\'s better to just let things be what they are" — which is Hemingway\'s iceberg theory rendered as dialogue. A Hemingway couple would order another round of drinks. They would not articulate the philosophy of indirect communication while practicing the opposite.',
    },
    {
      id: 'hemingway-ai3',
      text: `The mountains rose clean and white against the sky and the morning light fell across them in long horizontal bands that turned the snow gold and then pale and then simply bright. Below the tree line the dark shapes of the pines stood motionless in the cold air. It was beautiful in the way that things are beautiful when they are very large and very cold and very old, and the beauty of it had a quality of indifference about it, as though the mountains did not know you were looking at them, as though they had been beautiful before you arrived and would be beautiful long after you were gone.`,
      isAI: true,
      hint: 'Hemingway\'s landscapes are accurate and purposeful — they establish place and weather and the specific physical facts that will matter later. "The mountains were sharp and white and beautiful in the sun" from A Farewell to Arms states what is there. This passage aestheticizes the landscape by meditating on what beauty means: "in the way that things are beautiful when they are very large and very cold and very old." It then produces a philosophical observation about the mountains\' indifference to being observed. Real Hemingway does not interpret landscape; he records it. The mountains do not symbolize anything in A Farewell to Arms — they are simply there, across the plain, and whether or not they are beautiful is not the narrator\'s concern.',
    },
    {
      id: 'hemingway-ai4',
      text: `He sat at the bar and thought about Paris. He thought about it the way you think about a city you have loved and left, not with longing exactly but with something like longing, a recognition of absence that was also, in some way, a recognition of yourself. He ordered another whiskey. The barman brought it and he looked at the glass and thought about all the bars in Paris and all the nights and the people he had known there, and he could see them all clearly but the feeling he had was not sadness but something quieter than sadness, more like the knowledge that everything passes and that this is not a tragedy but simply the way things are.`,
      isAI: true,
      hint: 'This passage circles the same emotional register — longing, not-quite-longing, not-sadness, something-quieter-than-sadness — without advancing. Real Hemingway\'s and-chains move forward because each clause adds a new fact or action: "and the road was muddy and we came to the village and there was a café." Here, each clause refines the emotional state rather than adding new information: "not with longing exactly but with something like longing, a recognition of absence that was also, in some way, a recognition of yourself." The character\'s interiority displaces the scene entirely. Hemingway\'s Jake Barnes in Paris orders drinks, watches bullfights, goes fishing. He does not sit at a bar reflecting on the nature of his feelings about Paris. The emotion lives in the fact that he is drinking. The meditation is absent.',
    },
  ],
};

export default author;
