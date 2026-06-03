import type { Author } from '@/types/game';

const author: Author = {
  id: 'fielding',
  name: 'Henry Fielding',
  years: '1707–1754',
  nationality: 'British',
  knownFor: 'Tom Jones',
  snippets: [
    {
      id: 'fielding-r1',
      text: `Reader, I think proper, before we proceed any farther together, to acquaint thee that I intend to digress, through this whole history, as often as I see occasion: of which I am myself a better judge than any pitiful critic whatever; and here I must desire all those critics to mind their own business, and not to intermeddle with affairs or works which no ways concern them: for till they produce the authority by which they are constituted judges, I shall not plead to their jurisdiction. In the course of our work (for so I shall choose to call it) many things will be spoken which may be called digressions by those who are ignorant of the laws of writing.`,
      isAI: false,
      source: 'Tom Jones, Book I, Ch. 2',
      hint: '"Pitiful critic whatever" and the demand for a legal "authority by which they are constituted judges" — Fielding\'s mock-combative relationship with the reader is grounded in actual 18th-century literary controversy. He is genuinely irritable here, not performing irritability. The parenthetical "(for so I shall choose to call it)" is Fielding hedging his own genre while refusing the hedge.',
    },
    {
      id: 'fielding-r2',
      text: `Now it happened that this young woman had so long conversed with Jones, that she had conceived a most violent affection for him; which she indulged the less scruple in discovering, as she had never been taught any other duty than that of obeying her father, and Jones had always taught her that it was no sin to love a worthy person. As to Jones himself, he had long left off having any particular tenderness for her above the rest of the family; for as he was of a warm disposition, and had no doubt of finding sympathy in others, his present passion for Sophia was so engrossing, that he could attend to no other female in the world.`,
      isAI: false,
      source: 'Tom Jones, Book IV, Ch. 7',
      hint: '"He had long left off having any particular tenderness for her above the rest of the family" — Fielding slides from the young woman\'s "violent affection" to Jones\'s thoroughly reasonable indifference without moral comment, letting the structural irony do the work. "No doubt of finding sympathy in others" is Fielding euphemising Tom\'s promiscuity with such delicacy it sounds like praise.',
    },
    {
      id: 'fielding-r3',
      text: `Indeed, if we consider this matter truly, hypocrisy appears to me a much less evil than open villany; for the hypocrite's good actions are at least good actions, though they proceed from bad motives; whereas the open villain does nothing but mischief: and the world, I believe, is more apt to excuse the hypocrite than to punish him; for as it is sometimes convenient for a man to be thought better than he is, so it is often his interest to appear worse than he really is, in order to scare those who might otherwise attempt to impose on him. This kind of imposture, if I may call it so, is, I think, very pardonable.`,
      isAI: false,
      source: 'Tom Jones, Book III, Ch. 7',
      hint: 'The argument turns back on itself — hypocrisy\'s good actions are good though ill-motivated; open villany is pure mischief — and then Fielding extends this further: it is sometimes useful to appear worse than you are. This is Fielding\'s essayist mode, where moral argument is playfully reversed not to reach nihilism but to expose the inadequacy of simple categories.',
    },
    {
      id: 'fielding-r4',
      text: `In the morning when Sophia arose, she found that transformation which a single night, the mediation of Cupid, had wrought in the apartment. Everything in the room smiled. Even the looking-glass had brightened its appearance; it had recovered from the speck of last night. For those who are not in love, it is needless to attempt a description of Sophia's sensations; and those who are will very little want the assistance of our pen. We shall therefore refer both to their own feelings, and proceed to matters of more general concern to our readers.`,
      isAI: false,
      source: 'Tom Jones, Book VI, Ch. 7',
      hint: '"Even the looking-glass had brightened its appearance; it had recovered from the speck of last night" — the looking-glass has no speck, but love-struck Sophia\'s seeing redeems it. Fielding then refuses to describe the sensation and refers readers to their own hearts, which is simultaneously the laziest and most intimate move a novelist can make. AI pastiches can\'t replicate this kind of authored withdrawal.',
    },
    {
      id: 'fielding-r5',
      text: `To say the truth, I am convinced I was never less capable of writing a book than at the present time. Whether it be that I am grown wiser, or that I am grown older, I know not; but certain it is, that the sprightliness which once distinguished me is greatly abated. In fact, I have arrived at that period when men are not apt to expect new adventures, and when they seldom meet with any. Indeed, this is a very reasonable and comfortable doctrine, and to which I shall most certainly adhere; for who would quarrel with their fate, when their fate is, at worst, indifference?`,
      isAI: false,
      source: 'Tom Jones, Book XII, Ch. 1',
      hint: 'Fielding\'s authorial persona cheerfully admits to diminished creative capacity, then immediately undermines the admission by writing elegant, balanced prose. "Who would quarrel with their fate, when their fate is, at worst, indifference?" is mock-Stoic consolation that secretly congratulates the narrator on his equanimity. The performance of fatigue is itself energetic.',
    },
    {
      id: 'fielding-ai1',
      text: `It is a maxim long established among the wise, and seldom disputed by those who have had occasion to reflect upon the conduct of human affairs, that the heart of man is a most uncertain guide to the happiness of man. For while the heart may lead its possessor towards objects of genuine worth and lasting satisfaction, it is equally capable of directing him towards those pleasures which, though appearing most desirable in the moment of their pursuit, do in the event prove to be but fleeting and unsatisfying. Our hero Tom was not, we must confess, entirely exempt from this universal infirmity of the human condition.`,
      isAI: true,
      hint: 'The opening generalisation has the shape of a Fielding chapter-head essay but none of his wit: "a most uncertain guide to the happiness of man" is a platitude, not a paradox. Fielding\'s authorial intrusions are specific and argumentative; they take sides. "Universal infirmity of the human condition" is an 18th-century-sounding phrase without any of the period\'s actual bite. "We must confess" tries for the narrator\'s intimacy but the confession is empty.',
    },
    {
      id: 'fielding-ai2',
      text: `Squire Western was not, it must be said, a man of great refinement, nor was he altogether a man of great wisdom; but he was, in his own way, a man of considerable energy and determination, and these qualities had served him well enough in the management of his estate, if not always in the management of his family. His love for his daughter was genuine, if somewhat inarticulately expressed, and his opposition to her choice of husband proceeded less from any ill-will towards the young man in question than from a settled conviction — common among men of his class and generation — that a father's judgment in such matters must necessarily be superior to that of a daughter of nineteen.`,
      isAI: true,
      hint: 'Fielding\'s Squire Western is a figure of comic excess — he shouts, he swears, he hunts. This passage describes him from the outside as a social type ("men of his class and generation") with sociological detachment. The real Fielding writes Western from the inside of his bluster, not from above it. "His love for his daughter was genuine, if somewhat inarticulately expressed" is a modern psychological qualification, not an 18th-century narrative observation.',
    },
    {
      id: 'fielding-ai3',
      text: `There are, the reader may have observed, in the affairs of this world, two distinct kinds of fortune: the fortune that comes to a man through his own merits and industry, and the fortune that comes to him through no merit of his own whatsoever, but through the mysterious workings of chance and Providence. Tom Jones was, throughout the greater part of his history, a signal example of the second kind, though whether this redounded more to his credit or to his discredit is a question upon which the wisest of men have not always been able to agree. We shall not presume to settle it here, having more pressing business at hand.`,
      isAI: true,
      hint: 'The mock-philosophical frame — two kinds of fortune — is borrowed from Fielding\'s essayist manner but deployed without any actual argument. The real Fielding would use such a frame to argue a counterintuitive position; this version merely poses a question and refuses to answer it ("We shall not presume to settle it here"). The refusal lacks irony — Fielding\'s "we shall not settle" always is a settlement in disguise.',
    },
    {
      id: 'fielding-ai4',
      text: `Lady Bellaston was a woman of quality who had, by long habit and considerable effort, arranged her life in such a manner as to obtain a maximum of pleasure with a minimum of inconvenience. She had observed, through many years of experience in the world, that men were in general susceptible to flattery, and women to curiosity, and that a skilful practitioner of the social arts might turn both these susceptibilities to considerable advantage. Tom she had found interesting from the first — too interesting, perhaps, for her own peace of mind, though this was not a consideration that had yet given her any very serious concern.`,
      isAI: true,
      hint: '"A maximum of pleasure with a minimum of inconvenience" could almost pass for Fielding, but the sentence that follows destroys the effect: "men were in general susceptible to flattery, and women to curiosity" is a neat binary that Fielding would immediately complicate or reverse. Fielding\'s Lady Bellaston is dangerous because she is specific and particular, not because she has mastered a general social science. The final qualifying clause is too evenhanded to be Fieldingesque.',
    },
    {
      id: 'fielding-ai5',
      text: `We have, in the foregoing chapters, traced the fortunes of our hero through many adventures, both of the amorous and of the more straightforwardly dangerous variety; and if the reader has found him at times imprudent, at times rash, and at times governed more by his heart than by his understanding, we would ask that reader to consider whether these are not, in truth, the very qualities which make a young man worth following through the pages of a history, and whether a hero of perfect prudence and unerring judgment would not make, in the end, a very dull companion indeed.`,
      isAI: true,
      hint: 'This defends Tom Jones\'s imprudence in exactly the terms Fielding uses — but it does so earnestly, as a brief. Fielding\'s prefaces and chapter-heads are argumentative and funny simultaneously; they typically argue for the counterintuitive view and prove it by demonstration. "A very dull companion indeed" reaches for the wit but the entire passage has been building to a foregone conclusion rather than surprising the reader with one.',
    },
  ],
};

export default author;
