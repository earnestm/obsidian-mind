import type { Author } from '@/types/game';

const domain: Author = {
  id: 'think-pieces',
  name: 'Think Pieces',
  years: '1841–present',
  nationality: 'Essays & Argument',
  knownFor: 'First-person argument developing a single idea',
  snippets: [
    {
      id: 'think-pieces-r1',
      text: `There is a time in every man's education when he arrives at the conviction that envy is ignorance; that imitation is suicide; that he must take himself for better, for worse, as his portion; that though the wide universe is full of good, no kernel of nourishing corn can come to him but through his toil bestowed on that plot of ground which is given to him to till. The power which resides in him is new in nature, and none but he knows what that is which he can do, nor does he know until he has tried.

Trust thyself: every heart vibrates to that iron string. Accept the place the divine providence has found for you, the society of your contemporaries, the connection of events. Great men have always done so, and confided themselves childlike to the genius of their age, betraying their perception that the absolutely trustworthy was seated at their heart, working through their hands, predominating in all their being.`,
      isAI: false,
      source: 'Ralph Waldo Emerson, "Self-Reliance" (1841)',
      hint: 'Emerson stakes an unhedged, offensive claim: "imitation is suicide." The image of the "iron string" that every heart vibrates to is idiosyncratic and physical, not a balanced observation. He does not weigh sides — he issues an imperative ("Trust thyself") and dares you to disagree. The reasoning develops one idea, self-trust, with mounting force rather than dissolving it into nuance.',
    },
    {
      id: 'think-pieces-r2',
      text: `I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. I did not wish to live what was not life, living is so dear; nor did I wish to practise resignation, unless it was quite necessary. I wanted to live deep and suck out all the marrow of life, to live so sturdily and Spartan-like as to put to rout all that was not life, to cut a broad swath and shave close, to drive life into a corner, and reduce it to its lowest terms, and, if it proved to be mean, why then to get the whole and genuine meanness of it, and publish its meanness to the world; or if it were sublime, to know it by experience, and be able to give a true account of it in my next excursion.`,
      isAI: false,
      source: 'Henry David Thoreau, "Walden" (1854)',
      hint: 'Thoreau commits to a falsifiable personal experiment and states the stakes without hedging: if life proved mean, he would "publish its meanness to the world." The physical images — sucking the marrow, driving life into a corner, shaving close — are peculiar and bodily. He is willing to find life mean; that willingness to accept an ugly answer is the mark of a real argument, not a manufactured one.',
    },
    {
      id: 'think-pieces-r3',
      text: `Unjust laws exist: shall we be content to obey them, or shall we endeavor to amend them, and obey them until we have succeeded, or shall we transgress them at once? Men generally, under such a government as this, think that they ought to wait until they have persuaded the majority to alter them. They think that, if they should resist, the remedy would be worse than the evil. But it is the fault of the government itself that the remedy is worse than the evil. It makes it worse. Why is it not more apt to anticipate and provide for reform? Why does it not cherish its wise minority? Why does it cry and resist before it is hurt?

If the injustice is part of the necessary friction of the machine of government, let it go, let it go: perchance it will wear smooth — certainly the machine will wear out. But if it is of such a nature that it requires you to be the agent of injustice to another, then, I say, break the law.`,
      isAI: false,
      source: 'Henry David Thoreau, "Civil Disobedience" (1849)',
      hint: 'Thoreau lands on a specific, actionable, offensive imperative: "break the law." He poses rhetorical questions, but they build toward a committed position rather than dissolving into balance. The machine metaphor is developed into a concrete distinction — friction you tolerate versus becoming "the agent of injustice." He tells you exactly when to disobey. No fence-sitting.',
    },
    {
      id: 'think-pieces-r4',
      text: `The war against war is going to be no holiday excursion or camping party. The military feelings are too deeply grounded to abdicate their place among our ideals until better substitutes are offered than the glory and shame that come to nations as well as to individuals from the ups and downs of politics and the vicissitudes of trade. There is something highly paradoxical in the modern man's relation to war. Ask all our millions, north and south, whether they would vote now (were such a thing possible) to have our war for the Union expunged from history, and the record of a peaceful transition to the present time substituted for that of its marches and battles, and probably hardly a handful of eccentrics would say yes. Those ancestors, those efforts, those memories and legends, are the most ideal part of what we now own together, a sacred spiritual possession worth more than all the blood poured out.`,
      isAI: false,
      source: 'William James, "The Moral Equivalent of War" (1910)',
      hint: 'James makes a concrete, testable psychological claim — that almost no one would vote to erase the Civil War from history, even at the cost of its dead — and uses it as evidence, not decoration. He concedes the seductive power of what he opposes ("worth more than all the blood poured out"), which is intellectual honesty, not hedging. The argument advances by admitting the strength of the other side, then pressing on.',
    },
    {
      id: 'think-pieces-r5',
      text: `Our faith is faith in some one else's faith, and in the greatest matters this is most the case. Our belief in truth itself, for instance, that there is a truth, and that our minds and it are made for each other — what is it but a passionate affirmation of desire, in which our social system backs us up? We want to have a truth; we want to believe that our experiments and studies and discussions must put us in a continually better and better position towards it; and on this line we agree to fight out our thinking lives. But if a pyrrhonistic sceptic asks us how we know all this, can our logic find a reply? No! certainly it cannot. It is just one volition against another — we willing to go in for life upon a trust or assumption which he, for his part, does not care to make.`,
      isAI: false,
      source: 'William James, "The Will to Believe" (1896)',
      hint: 'James answers his own rhetorical question with a blunt "No! certainly it cannot" — he refuses to pretend logic can rescue him, which is the opposite of manufactured depth. He reduces the disagreement to a stark, unflattering core: "one volition against another." He is willing to concede that belief in truth is "a passionate affirmation of desire." That admission against his own comfort is a human argument taking a real risk.',
    },
    {
      id: 'think-pieces-ai1',
      text: `In an age of constant connection, we have perhaps never felt more alone. It is worth considering what we have traded away in our rush toward the frictionless and the instantaneous. The notification, the endless feed, the curated self — each promises intimacy while quietly delivering its opposite. But is technology truly the villain here, or merely a mirror held up to desires that predate the smartphone by millennia?

Perhaps the truth, as is so often the case, lies somewhere in the middle. Solitude and connection have always existed in tension, and every generation believes its own tools to be uniquely corrosive. What the ancients feared in the written word, we now fear in the screen. And yet the human hunger for meaning persists, stubborn and unchanged beneath the shifting surfaces of our devices.

Ultimately, the question is not whether our technology connects or isolates us, but how we choose to hold it. In learning to be present, we may yet rediscover what it means to truly be together — and to be, at last, ourselves.`,
      isAI: true,
      hint: 'Sophistication without a landed claim. It opens on "In an age of," reaches for depth with "is technology truly the villain," then evacuates every position: "the truth lies somewhere in the middle," "how we choose to hold it." The rhetorical questions manufacture profundity instead of building toward a thesis. It closes on a vague call to presence. Nothing here is falsifiable and nothing could offend anyone.',
    },
    {
      id: 'think-pieces-ai2',
      text: `We live in a culture obsessed with productivity, and it is worth pausing to ask what, exactly, we are producing. The language of optimization has crept from the factory floor into the bedroom, the friendship, the quiet Sunday morning. We speak of maximizing our time as though a life were a spreadsheet to be balanced.

And yet there is something undeniably human in the desire to make the most of our days. Ambition, after all, has built cathedrals and cured diseases. To dismiss the impulse entirely would be to throw out something precious along with the excess. Perhaps the challenge is not to reject productivity but to reimagine it — to ask not how much we can do, but what is worth doing at all.

These are not easy questions, and they resist tidy answers. But in an era that prizes speed above nearly everything, the simple act of slowing down to reflect may itself be a quiet form of resistance. Maybe the most radical thing we can do is to pause, and to wonder.`,
      isAI: true,
      hint: 'The giveaway is the perfectly balanced non-argument: it critiques productivity culture, then immediately rescues it ("cathedrals and cured diseases"), then splits the difference ("not to reject but to reimagine"). It admits its own questions "resist tidy answers" as a way of never answering them. The closing — "to pause, and to wonder" — is a call to reflection with no content. Fluent, symmetrical, and committed to nothing.',
    },
    {
      id: 'think-pieces-ai3',
      text: `There is a quiet revolution happening in the way we think about failure. Once treated as something shameful to be hidden away, failure has become, in certain circles, almost a badge of honor. We celebrate the entrepreneur who has failed a dozen times, the artist whose rejected manuscripts fill a drawer. But it is worth considering whether we have simply replaced one distortion with another.

For all our talk of embracing failure, we rarely mean it. We admire failure only in retrospect, only when it has been redeemed by eventual success. The failures we truly celebrate are the ones that turned out, in the end, not to be failures at all. This raises an uncomfortable question about the stories we tell ourselves.

And so we arrive, as we so often do, at a kind of paradox. Failure is both essential and unbearable, instructive and devastating, something to be sought and something to be survived. Perhaps wisdom lies not in resolving this tension but in learning to live gracefully within it.`,
      isAI: true,
      hint: 'It gestures at a real insight — that we only celebrate failure retroactively — but never presses it into a claim about what we should therefore do. Instead it retreats into paradox: failure is "both essential and unbearable, instructive and devastating." The catalogue of balanced opposites is the tell. It closes by explicitly declining to resolve the tension, dressing evasion up as wisdom. All poise, no landing.',
    },
    {
      id: 'think-pieces-ai4',
      text: `In an age of algorithmic curation, we might ask what has become of genuine discovery. Our tastes, once formed through the messy serendipity of a friend's recommendation or a stranger's overheard conversation, are now increasingly shaped by systems designed to give us more of what we already want. There is comfort in this, of course, but there may also be a cost.

The paradox is that these systems promise to expand our horizons even as they quietly narrow them. Each click teaches the machine to show us a slightly smaller world, more perfectly tailored to who we already are. And yet — is this so different from the neighborhoods and newspapers and social circles that have always shaped us? Perhaps we have merely traded one set of invisible fences for another.

What is clear is that the questions matter more than ever. In choosing how we engage with the tools that shape our attention, we are, in a very real sense, choosing who we will become. And that, perhaps, is a responsibility worth reflecting on.`,
      isAI: true,
      hint: 'Opens with "In an age of," names a real phenomenon, then immediately defangs it with the "is this so different from..." move that flattens any distinction. Every observation is followed by its own undoing. It never commits to whether algorithmic curation is actually bad. The ending — "a responsibility worth reflecting on" — is the signature AI dismount: gesture at gravity, hand the reader a vague homework assignment, claim nothing.',
    },
  ],
};

export default domain;
