import type { Author } from '@/types/game';

const domain: Author = {
  id: 'journalism',
  name: 'Journalism & Criticism',
  years: '1910s–present',
  nationality: 'American Journalism',
  knownFor: 'Opinion, reportage, and cultural criticism',
  snippets: [
    {
      id: 'journalism-r1',
      text: `The Confederacy is at the bottom of the aesthetic Sargasso Sea. It would be impossible in all history to match so complete a vacancy. One thinks of the interstellar spaces, of the colossal reaches of the now-mythical ether. Nearly the whole of Europe could be lost in that stupendous region of fat farms, shoddy cities and paralyzed cerebrums: one could throw in France, Germany and Italy, and still have room for the British Isles. And yet, for all its size and all its wealth and all the "progress" it babbles of, it has not produced one first-rate artist, one first-rate composer, one first-rate historian, one first-rate theologian, one first-rate philosopher.`,
      isAI: false,
      source: 'H.L. Mencken, "The Sahara of the Bozart," Smart Set, November 1920',
      hint: 'Mencken\'s method is aggressive specificity: not "the South lacks culture" but the "aesthetic Sargasso Sea," the "colossal reaches of the now-mythical ether," the geographical claim that all of Europe could fit inside this cultural vacancy. The list — artist, composer, historian, theologian, philosopher — is exhaustive rather than illustrative. Mencken does not hedge: "one first-rate," repeated six times, is a falsifiable claim. The sneer at "progress" in quotation marks tells you his view of that word in three punctuation marks.',
    },
    {
      id: 'journalism-r2',
      text: `Bryan was a vulgar and common man, a cad undiluted. He was ignorant, bigoted, self-seeking, blatant and dishonest. His career brought him into contact with the first men of his time; he preferred the company of rustic ignoramuses. It was hard to believe, watching him at Dayton, that he had traveled, that he had been received in civilized societies, that he had been a high officer of state. He seemed only a poor clod like those around him, deluded by a childish theology, full of an almost pathological hatred of all learning, all human dignity, all beauty, all fine and noble things. He was a peasant come home to the barnyard. Pyre was gone out of him long before he died.`,
      isAI: false,
      source: 'H.L. Mencken, "In Memoriam: W.J.B.," Baltimore Evening Sun, July 27, 1925',
      hint: 'This is an obituary written with open contempt, published the day after Bryan died. The accumulation — "vulgar and common," "ignorant, bigoted, self-seeking, blatant and dishonest" — does not build a case so much as sustain a pitch of feeling. But Mencken then does something precise: he describes specifically what he saw at Dayton during the Scopes trial ("it was hard to believe... that he had been a high officer of state"), making the general claim legible through observed behavior. The final sentence — "Pyre was gone out of him long before he died" — is both anatomical and metaphysical at once.',
    },
    {
      id: 'journalism-r3',
      text: `No other such complete and durable repudiation of Christianity is on record anywhere in the world. The Mohammedans, when they fall from grace, usually fall only halfway; they abandon their prayers and their temperance, but they keep their general feeling that Allah is real and potent and that it is better to be on his side. But the Americans who fall from Protestantism often become, in the end, its bitterest opponents. There is more raw anticlericalism in the United States than in any other country in the world save France, and the anticlericals of France are relatively polite compared to those of the United States.

I know, of course, that this sounds absurd. The United States is held everywhere to be a profoundly religious nation. Its very politicians confess their faith.`,
      isAI: false,
      source: 'H.L. Mencken, "The Decay of Churches," Baltimore Evening Sun, c. 1924',
      hint: 'Mencken\'s comparative method — Mohammedans fall only halfway, American anticlericals are ruder than the French — forces the argument to be specific about degree. He then immediately concedes the obvious objection ("I know, of course, that this sounds absurd") before the reader can raise it. The preemptive concession followed by the sharper version of the argument is a rhetorical structure that appears nowhere in AI-generated opinion writing, which smooths over the objection or doesn\'t raise it. Mencken knows his reader is skeptical and argues with that reader directly.',
    },
    {
      id: 'journalism-r4',
      text: `I am not an advocate of unnecessary suffering. I am not in favor of the third degree or of cruel and unusual punishment. I believe in mercy as well as in justice. But when the criminal law gets a man who has deliberately killed another for hire, and when it wrings a confession from him that leaves no reasonable doubt as to his guilt, and when a judge has carefully listened to the evidence and a jury has weighed it, then I think the criminal ought to be hanged by the neck until dead, and that the hanging should occur within a month of the verdict, and that it should be public, and that the body should be left dangling for an hour.`,
      isAI: false,
      source: 'H.L. Mencken, "Capital Punishment," Baltimore Evening Sun, 1926',
      hint: 'The sentence accumulates conditional clauses ("when... and when... and when") that enact due process as syntax before arriving at the conclusion. Mencken doesn\'t argue for capital punishment in the abstract; he argues for it under specific conditions (deliberate murder for hire, confession, careful judgment) which he takes the trouble to specify. The detail of "left dangling for an hour" is Mencken refusing the polite euphemism — he will say exactly what he means. AI opinion writing on contentious topics characteristically refuses exactly this kind of specificity.',
    },
    {
      id: 'journalism-r5',
      text: `It is, of course, a fact that literature suffers when politics run high. The reason is not far to seek. Politics is essentially a low art. Its practitioners are, in the main, shysters, demagogues and mountebanks. It is true that now and then a man of genuine parts is drawn into it, but he is almost always corrupted by it. The first effect of a really superior man entering politics is usually a quick surrender to political ways and political morals. He begins in honesty and dignity; he ends in chicanery and compromise.

Such a man, before he entered politics, was probably capable of writing honestly and well. After he has entered politics he is capable of nothing save claptrap.`,
      isAI: false,
      source: 'H.L. Mencken, "Literature and Politics," Smart Set, c. 1920',
      hint: 'Mencken\'s pattern is the categorical claim followed by the systematic exception: "in the main, shysters... it is true that now and then a man of genuine parts." The exception is granted and then absorbed: the superior man who enters politics is "almost always corrupted by it." The mechanism is stated precisely — "he begins in honesty and dignity; he ends in chicanery and compromise." This chiastic structure (honesty/dignity → chicanery/compromise) is Mencken\'s standard closing move: what was described over the paragraph, crystallized in two clauses.',
    },
    {
      id: 'journalism-ai1',
      text: `The state of American democracy raises important questions that deserve serious consideration. On the one hand, voter participation has increased in recent elections, suggesting renewed civic engagement. On the other hand, trust in institutions continues to erode, with polling data showing that a majority of Americans believe the system is fundamentally broken.

Experts are divided. Some argue that democratic norms are resilient and that current tensions reflect healthy political competition. Others warn that the breakdown of shared facts and the rise of partisan media represent an existential threat to democratic governance.

What is clear is that something has changed. Whether that change is a crisis or an opportunity depends, in large part, on what citizens choose to do about it.`,
      isAI: true,
      hint: '"On the one hand... on the other hand" is the structural signature of the balanced news analysis, and it produces a kind of writing that Mencken would have described as cowardice in the guise of fairness. Every sentence here qualifies its own claim: "suggests renewed engagement," "experts are divided," "depends on what citizens choose to do." The closing — "whether that change is a crisis or an opportunity depends on what citizens choose to do about it" — is formally correct and substantively empty: it locates responsibility with the reader rather than making an argument. Mencken on democracy makes specific, falsifiable, offensive claims; this piece makes no claim at all.',
    },
    {
      id: 'journalism-ai2',
      text: `The decline of the American mall is a story about more than retail. It is a story about community, about the changing nature of public space, and about what happens when the places where we gather together disappear.

At its peak in the 1980s, the mall was an unlikely democratic institution — a place where teenagers, retirees, and families from different backgrounds all occupied the same air-conditioned corridors. It was imperfect, commercially motivated, and often culturally homogenizing. But it was somewhere to be.

Now, those spaces are closing. And as they do, we are forced to ask: what replaces them? Where do people gather now? And what does it mean for our sense of shared life when the answer is: nowhere in particular?`,
      isAI: true,
      hint: 'The mall-as-community-space argument is legitimate, but this piece enacts rather than demonstrates it. "A story about more than retail. It is a story about community, about the changing nature of public space" — three abstract nouns piled up as substitutes for observation. The "unlikely democratic institution" framing is a familiar cultural-criticism move: elevating a commercial object into a social-science category. Mencken\'s cultural criticism makes specific invidious claims about specific people and places; this piece makes general sympathetic claims about everyone and nowhere. The rhetorical questions at the end ("where do people gather now?") manufacture poignancy by refusing to answer.',
    },
    {
      id: 'journalism-ai3',
      text: `To understand Silicon Valley, you have to understand the particular form of optimism it produces. It is not the optimism of a man who expects things to improve gradually. It is the optimism of a man who expects them to improve suddenly, discontinuously, and beyond recognition.

This optimism has real consequences. It produces tolerance for risk and for failure that you do not find in most industries. It also produces a certain impatience with limits — legal, ethical, political — that exists primarily to protect people from the consequences of other people's impatience.

The Valley has been right enough times that its inhabitants have earned the right to be wrong in the specific, expensive, and occasionally dangerous ways they prefer. Whether the rest of us have agreed to those terms is a different question.`,
      isAI: true,
      hint: 'This passage is a close imitation of a certain style of tech-cultural criticism — measured, formulation-heavy, balanced — and it largely succeeds. The tell is in the final paragraph: "whether the rest of us have agreed to those terms is a different question." This is the non-conclusion conclusion, the pointed observation that withdraws before making its point. Mencken would have made the point. He would have said the Valley has been wrong in the specific, expensive, and occasionally dangerous ways it prefers and that the rest of us have not agreed to those terms and that someone should do something about it. The balanced formulation is the AI\'s signature of sophisticated analysis without the willingness to land the punch.',
    },
    {
      id: 'journalism-ai4',
      text: `There is something worth noting about the way we talk about expertise. For most of human history, knowing more than your neighbors about medicine, law, or agriculture was a social good. The specialist was respected. His opinions carried weight precisely because they were not shared by everyone.

Today, expertise is contested in a new way. It is not simply distrusted — it is resented. The expert is viewed not as a source of useful information but as a threat to the authority of personal experience. "I did my own research" has become a declaration of independence from a system many people no longer believe is working in their interest.

This is not a new phenomenon, but it has accelerated. Understanding why may matter more than condemning it.`,
      isAI: true,
      hint: 'The observation — that expertise is now resented rather than simply distrusted — is the kind of distinction good journalism makes. But then the piece retreats: "understanding why may matter more than condemning it" is an instruction to the reader about the appropriate stance rather than a demonstration of it. Mencken never told his readers how they should feel about his argument. He made the argument. The passive constructions ("it is not simply distrusted," "it is resented," "expertise is contested") distribute the action without assigning it to anyone. And the closing balance ("understanding vs. condemning") performs fairness without taking a side, which is the AI opinion piece\'s characteristic refusal to do the thing it is nominally doing.',
    },
  ],
};

export default domain;
