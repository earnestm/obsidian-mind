import type { Author } from '@/types/game';

const author: Author = {
  id: 'woolf',
  name: 'Virginia Woolf',
  years: '1882–1941',
  nationality: 'British',
  knownFor: 'Mrs Dalloway',
  snippets: [
    {
      id: 'woolf-r1',
      text: `What a lark! What a plunge! For so it had always seemed to her when, with a little squeak of the hinges, which she could hear now, she had burst open the French windows and plunged at Bourton into the open air. How fresh, how calm, stiller than this of course, the air was in the early morning; like the flap of a wave; the kiss of a wave; chill and sharp and yet (for a girl of eighteen as she then was) solemn, feeling as she did, standing there at the open window, that something awful was about to happen.`,
      isAI: false,
      source: 'Mrs Dalloway',
      hint: 'The leap from "What a lark! What a plunge!" (comic) to "something awful was about to happen" (dread) occupies a single sentence. Woolf\'s consciousness is never in one emotional key. "The flap of a wave; the kiss of a wave" — two takes at the same sensation, testing it — is a technique of internal revision that AI prose does not replicate because it does not need to search for the right word.',
    },
    {
      id: 'woolf-r2',
      text: `She had the oddest sense of being herself invisible, unseen; unknown; there being no more marrying, no more having of children now, but only this astonishing and rather solemn progress with the rest of them, up Bond Street, this being Mrs Dalloway; not even Clarissa any more; this being Mrs Richard Dalloway. Bond Street fascinated her; Bond Street early in the morning in the swing of the season; there were gloves there; her mother's gloves; her own gloves; the same cool breath of darkness; the exquisite suspense.`,
      isAI: false,
      source: 'Mrs Dalloway',
      hint: '"Not even Clarissa any more; this being Mrs Richard Dalloway" — the full formal name measures the distance between self and social role. Then immediately: "Bond Street fascinated her" — the consciousness moves without transition to gloves, to her mother\'s gloves, to her own. This is Woolf\'s associative method: the abstract (loss of self) adjacent to the concrete (gloves in a shop window).',
    },
    {
      id: 'woolf-r3',
      text: `For nothing was simply one thing. The other fields she had often seen before and had not cared about them; and now she felt them touching her with the same quiet insistence as Lily's hand on her shoulder. But there she was — she was not making it up. The white and the blue, the silver and the green — they were there — and there she was looking at them and wondering why she'd come. And then — bang — the door opened, and — no, she didn't want that — bang, bang, and the door was open and there, outside, was a little girl in a party frock playing in the sand.`,
      isAI: false,
      source: 'To the Lighthouse',
      hint: '"Bang — the door opened, and — no, she didn\'t want that — bang, bang" — the repetition of "bang" mimes the mind\'s physical surprise at an interruption, then the refusal of that intrusion, then its second occurrence despite the refusal. Woolf\'s dashes are not decoration; they are the speed of arriving sensation against the slower momentum of thought.',
    },
    {
      id: 'woolf-r4',
      text: `The cook whistled in the kitchen. She heard the clatter of china and someone singing to herself as she mixed the pudding. Then the strokes — the clock began striking; the clock began striking — one — two — three — four — five — six — seven — eight — nine — ten — eleven — twelve — and she began to count with it as she stood in the middle of the drawing-room; and she felt that she was in the midst of it all, and that this was the moment of being alive, and that this mattered, and she was sad and glad and — oh, she couldn't quite say why.`,
      isAI: false,
      source: 'Mrs Dalloway',
      hint: 'The clock strokes typed out individually — "one — two — three —" — force the reader through time at the rate Clarissa experiences it. "She was sad and glad and — oh, she couldn\'t quite say why" refuses to analyse the emotion even as it names it. Woolf\'s syntax withholds explanation with a precision that the AI pastiche, which tends to over-specify emotion, cannot achieve.',
    },
    {
      id: 'woolf-r5',
      text: `She could see the little sandy beach where they had once bathed and out to sea a line of green water — the water was breaking — it was a long, slow green roller, which had gathered height — and she felt — she felt — something — the words could not say it — they had all such a sense of being over, done with, that particular life. She would have given anything — she would have liked to kneel down in the wet sand and say a prayer. She would have liked to stop that woman who was walking through the bracken and ask her: does it hurt?`,
      isAI: false,
      source: 'To the Lighthouse',
      hint: '"She felt — she felt — something — the words could not say it" — the repetition performs exactly what it reports: the hesitation of consciousness trying and failing to name grief. "Does it hurt?" addressed to a stranger walking through bracken is the concrete bizarre image Woolf arrives at through accumulation, not through logic. It is earned by the paragraph, not placed in it.',
    },
    {
      id: 'woolf-ai1',
      text: `She moved through the morning with a lightness that was also a kind of sadness — or not sadness exactly, but something adjacent to it, the way a room can feel empty even when full of people, the way the light in autumn is beautiful precisely because it is leaving. She had felt this before — this strange combination of presence and loss — at moments she could never quite predict or prepare for, moments when the ordinary world suddenly became translucent and she could see, or felt she could see, through it to something else, something she could never name, which was, she suspected, the point.`,
      isAI: true,
      hint: '"A lightness that was also a kind of sadness — or not sadness exactly, but something adjacent to it" — this mimics Woolf\'s emotional precision but the similes that follow (room full of people, autumn light) are aesthetic clichés, not the specific Dublin or London images Woolf anchors consciousness to. "Something she could never name, which was, she suspected, the point" — this meta-comment on ineffability names the device instead of deploying it.',
    },
    {
      id: 'woolf-ai2',
      text: `The party had ended — was ending — would end — and Elizabeth moved through the thinning rooms with the particular quality of attention she reserved for moments like this, when the social surface grew thin enough to see through. She had always been — not shy exactly — but observant in a way that felt, in company, like a kind of absence: she was there and not there, watching herself be there, which was — she understood this — its own form of participation. Her mother would not have called it that. Her mother called it being difficult.`,
      isAI: true,
      hint: 'The em-dash cascade — "had ended — was ending — would end" — is a surface feature of Woolf\'s style deployed as an aesthetic mannerism. Woolf\'s dashes respond to the speed of thought; this opening uses them rhythmically, for variety. "Watching herself be there, which was — she understood this — its own form of participation" declares an insight at the moment of having it, which Woolf never does.',
    },
    {
      id: 'woolf-ai3',
      text: `The light fell across the floor in a long slant, and Lily stood in it, holding her brush, thinking of — what was she thinking of? It slipped away from her before she could grasp it: something to do with the painting, or perhaps with Mrs Ramsay, or perhaps with the way the two things had become, in her mind, inseparable, the painting and the woman, the woman and the difficulty of getting something right, of making something true, of the impossibility of doing that and the necessity of trying — yes, the necessity — she would try again. She raised her brush. She made a mark.`,
      isAI: true,
      hint: 'The final "She raised her brush. She made a mark" is borrowed from the actual ending of To the Lighthouse but placed here as a resolution rather than a culmination. The interior leading up to it — "perhaps with Mrs Ramsay, or perhaps with the way the two things had become" — lists associations without Woolf\'s specific imagery. Woolf\'s Lily thinks in colour and form; this Lily thinks in abstractions (truth, necessity, impossibility).',
    },
    {
      id: 'woolf-ai4',
      text: `Time, she thought, was the cruelest thing — not because it took what one loved, which was cruel enough, but because it left one standing there with the full knowledge of what had been taken and the full experience of its absence, which was somehow worse. She had tried to explain this to various people over the years and had always failed, because the thing itself resisted language — was perhaps constituted by the resistance — and to explain it was, in some essential way, to miss it entirely. Better, perhaps, to simply stand here, in the drawing-room, and let it happen.`,
      isAI: true,
      hint: 'The essay on time — "the cruelest thing... not because... but because" — is argument, not stream of consciousness. Woolf\'s characters do not think about Time in the abstract; they experience specific moments. "The thing itself resisted language — was perhaps constituted by the resistance" is a sophisticated literary-critical observation that no character in Mrs Dalloway or To the Lighthouse makes about their own experience.',
    },
    {
      id: 'woolf-ai5',
      text: `Outside — was it raining? She thought it was. The drops on the window, the grey light, the way the street below had gone quiet — all this suggested rain, though it might have been the cloud cover alone, the particular heaviness of a London sky in winter. She thought of Richard — not with worry, not with longing particularly, only with that dim background awareness of another person\'s existence that marriage makes possible, or inevitable, or both. He would be at his committee. He was always at his committee, which was, she supposed, a kind of faithfulness.`,
      isAI: true,
      hint: '"That dim background awareness of another person\'s existence that marriage makes possible, or inevitable, or both" — Clarissa\'s marriage to Richard in the novel is rendered through specific scenes and objects: the narrow bed, the attic room, the flowers. This passage abstracts the marriage into a sociological observation. "Which was, she supposed, a kind of faithfulness" lands the irony too neatly; Woolf\'s relationship between Clarissa and Richard is charged with unspoken specificity, not witty epigram.',
    },
  ],
};

export default author;
