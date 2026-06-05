import type { Author } from '@/types/game';

const author: Author = {
  id: 'twain',
  name: 'Mark Twain',
  years: '1835–1910',
  nationality: 'American',
  knownFor: 'Adventures of Huckleberry Finn',
  snippets: [
    {
      id: 'twain-r1',
      text: `You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied one time or another, without it was Aunt Polly, or the widow, or maybe Mary. Aunt Polly — Tom's Aunt Polly, she is — and Mary, and the Widow Douglas is all told about in that book, which is mostly a true book, with some stretchers, as I said before.`,
      isAI: false,
      source: 'Adventures of Huckleberry Finn, Ch. 1',
      hint: 'The opening performs vernacular suspicion of narrative itself — "he told the truth, mainly" in the second sentence, then: "There was things which he stretched." Huck does not trust books, including the book about him. The logic is circular and self-undermining: "That is nothing. I never seen anybody but lied." No AI imitation produces an unreliable narrator who is unreliable in this direction — not dramatising his own unreliability, simply assuming it as the default condition of people.',
    },
    {
      id: 'twain-r2',
      text: `Two or three days and nights went by; I reckon I might say they swum by, they slid along so quiet and smooth and lovely. Here is the way we put in the time. It was a monstrous big river down there — sometimes a mile and a half wide; we run nights, and laid up and hid daytimes; soon as night was most gone we stopped navigating and tied up — nearly always in the dead water under a towhead; and then cut young cottonwoods and willows, and hid the raft with them. Then we set out the lines. Next we slid into the river and had a swim, so as to freshen up and cool off; then we set down on the sandy bottom where the water was about knee deep, and watched the daylight come.`,
      isAI: false,
      source: 'Adventures of Huckleberry Finn, Ch. 19',
      hint: 'The self-correcting simile — "I reckon I might say they swum by, they slid along" — is characteristic Twain: the voice audibly trying out an expression before settling. What follows is a schedule of evasion reported as daily routine, without comment on what the hiding means. "Monstrous big" is Huck\'s scale, not an author\'s literary register. The raft life is described through specific actions in sequence — cutting cottonwoods, setting lines, swimming, watching daylight — and the peace of it is in the accumulation, never stated.',
    },
    {
      id: 'twain-r3',
      text: `In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. I have a lurking suspicion that Leonidas W. Smiley is a myth; that my friend never knew such a personage; and that he only conjectured that, if I asked old Wheeler about him, it would remind him of his infamous Jim Smiley, and he would go to work and bore me to death with some infernal reminiscence of him as long and as tedious as it should be useless to me. If that was the design, it certainly succeeded.`,
      isAI: false,
      source: 'The Celebrated Jumping Frog of Calaveras County',
      hint: 'The narrator announces the trap before walking into it — lays out the complete mechanism of the joke that is about to be inflicted on him, and then confirms it succeeded. The formal diction ("I hereunto append the result") against the content ("bore me to death with some infernal reminiscence") is the tonal gap Twain sustains for the entire story. "If that was the design, it certainly succeeded" ends the prologue with cheerful defeat. The framing device here is not setup but pre-emptive indictment of the story\'s own narrator.',
    },
    {
      id: 'twain-r4',
      text: `The king got out an old ratty deck of cards after breakfast, and him and the duke played seven-up a while, five cents a game. Then they got tired of it, and allowed they would "lay out a campaign," as they called it. The duke went down into his carpet-bag, and fetched up a lot of little printed bills and read them out loud. One bill said, "THE WORLD-RENOWNED SHAKESPEARIAN TRAGEDIAN, GARRICK THE YOUNGER, OF DRURY LANE, LONDON." Another bill said, "AT ONE NIGHT ONLY! the world renowned tragedians David Garrick the Younger, of Drury Lane Theatre, London, and Edmund Kean the Elder, of the Royal Haymarket Theatre, Whitechapel, Pudding Lane, Piccadilly, White Chapel, and the Royal Continental Theatres of Europe."`,
      isAI: false,
      source: 'Adventures of Huckleberry Finn, Ch. 20',
      hint: 'Twain lets the fraudsters\' self-promotion indict itself entirely. The escalating bill — each fake theatre credit more grandiose and geographically impossible than the last — requires no authorial comment. The repetition of "Whitechapel" and the insertion of "Pudding Lane" alongside "Piccadilly" is the joke, and Twain trusts it to land without nudging. The humor is in the accumulation; the moral nowhere stated. Huck narrates it straight because Huck is not yet the kind of reader who spots the absurdity the way the novel\'s actual reader does.',
    },
    {
      id: 'twain-r5',
      text: `The face of the water, in time, became a wonderful book — a book that was a dead language to the uneducated passenger, but which told its mind to me without reserve, delivering its most cherished secrets as clearly as if it uttered them with a voice. And it was not a book to be read once and thrown aside, for it had a new story to tell every day. Throughout the long twelve hundred miles there was never a page that was void of interest, never one that you could leave unread without loss, never one that you would want to skip, thinking you could find higher enjoyment in some other thing. There never was so wonderful a book written by man; never one whose interest was so absorbing, so unflagging, so sparklingly renewed with every re-perusal.`,
      isAI: false,
      source: 'Life on the Mississippi, Ch. 9',
      hint: 'Twain extends the river-as-book metaphor with the patience of someone who genuinely means it — not as decoration but as professional testimony. A pilot\'s literacy is named as such: a language dead to the uneducated passenger. The accumulation of negatives — "never a page void of interest, never one you could leave unread, never one you would want to skip" — builds to the superlative through the logic of daily re-reading, not through hyperbole. Twain spent two years learning to read this book; the sustained metaphor earns its length through conviction, not craft.',
    },
    {
      id: 'twain-ai1',
      text: `You've probably heard of me if you read the book about Tom Sawyer and our adventures. My name is Huckleberry Finn, but most folks just call me Huck. I grew up in a small town on the Mississippi River, and that river is where most of my story takes place. Tom Sawyer was my best friend, and we got into all kinds of trouble together. But this story is different from those old ones. This one is mine, and it gets a lot more serious as it goes on, even if it doesn't always seem that way at first. I've learned things during my time on the river that changed me in ways I'm still figuring out.`,
      isAI: true,
      hint: '"This one is mine, and it gets a lot more serious as it goes on" — Huck is offering a thematic introduction to his own book. Real Huck never does this. He tells you about Widow Douglas\'s attempts to sivilize him, about Tom\'s gang and their robbers\' oath, about the specifics of domestic friction; he does not preview his story\'s emotional arc. "I\'ve learned things during my time on the river that changed me in ways I\'m still figuring out" is a sentence Huck would never form — his learning is implicit in everything he describes, never reflected on. The voice has been cleaned up: grammar too consistent, self-awareness too available, retrospective wisdom too tidily packaged. Real Huck\'s intelligence surfaces sideways, in how he describes things; this version explains itself from the front.',
    },
    {
      id: 'twain-ai2',
      text: `The river at dawn was something you had to see to believe. The mist hung low over the water in great gray sheets, and when the first light came it turned everything pale gold and then brighter, until the whole surface was shining like a mirror laid flat on the earth. I'd seen a lot of sunrises on the river by then, but they never got ordinary. Every morning felt like the world was being made fresh, and all the trouble and foolishness of people seemed very far away. Out here it was just the river and the sky and the current, and a person could think clearly for once, without all the noise of civilization pressing in.`,
      isAI: true,
      hint: '"A person could think clearly for once, without all the noise of civilization pressing in" — the river as escape from civilisation is one of the novel\'s actual themes, but Huck never states it. He describes what he sees and does; the thematic content arrives through accumulation of specific detail, not through the narrator summarising what the river means. "Every morning felt like the world was being made fresh" is an insight, neatly packaged. Huck\'s river descriptions are schedules: what time they moved, where they hid, what they caught, what they watched. The beauty is in the specificity. "Great gray sheets" and "shining like a mirror laid flat on the earth" are similes a careful writer produces; Twain\'s Huck tries out language and corrects himself mid-sentence, which is different from composing it.',
    },
    {
      id: 'twain-ai3',
      text: `It is a curious thing about the American character that it can simultaneously hold the deepest reverence for honesty and the most practiced talent for deception, and feel no contradiction between the two. The confidence man is, in this sense, not an aberration but a kind of folk hero — the proof that intelligence, when freed from the inconvenience of conscience, can achieve remarkable results. I have known a great many such men in my time, and found them, as a class, more agreeable company than most honest men, since their profession requires them to listen carefully, speak pleasantly, and pretend to believe whatever you tell them. These, I have long thought, are the foundations of civilized conversation.`,
      isAI: true,
      hint: 'The passage sounds Twain-like — the wit is real, the target is right — but Twain\'s social criticism operates through specific people and anecdotes, not through thesis and taxonomy. "It is a curious thing about the American character" is an essayist\'s generalization; Twain opens on a specific person, a specific situation, a specific absurdity. "I have known a great many such men in my time, and found them, as a class" is sociological, not narrative. The final paradox — confidence men are better company because they simulate the virtues of polite society — is the kind of thing Twain might arrive at after fifty pages of buildup; here it\'s announced as the point. The joke is explained rather than demonstrated.',
    },
    {
      id: 'twain-ai4',
      text: `Well, after that the king and the duke put their heads together and talked low for a little while, and then they told us the plan. It was a mighty smart plan, I had to admit, even if it wasn't the most honest arrangement I'd ever heard of. The king was to play the part of the grieving brother from England, and the duke was to be deaf and dumb, so he wouldn't have to keep up any complicated story. I thought it showed a real understanding of human nature, the way they'd worked it out, because people will believe almost anything if you give them a reason to want to believe it, and grief is a reason that shuts down a person's skepticism faster than most.`,
      isAI: true,
      hint: '"Grief is a reason that shuts down a person\'s skepticism faster than most" — Huck has become a social psychologist. Real Huck admires the King and Duke\'s schemes with a straight face and no theory. He reports what they did; the reader draws the conclusion about human credulity. The moment Huck articulates the mechanism of the con — "people will believe almost anything if you give them a reason to want to believe it" — he steps outside the novel\'s moral structure. Part of Huck\'s function is that he does not know what he knows; his observations are acute without being analytical. "I thought it showed a real understanding of human nature" is exactly the kind of self-aware commentary that Twain excludes from Huck\'s voice, reserving it instead for the gap between what Huck says and what the reader understands.',
    },
  ],
};

export default author;
