import type { Author } from '@/types/game';

const domain: Author = {
  id: 'speeches',
  name: 'Political Speeches',
  years: '1863–1961',
  nationality: 'American Politics',
  knownFor: 'Presidential rhetoric and public address',
  snippets: [
    {
      id: 'speeches-r1',
      text: `Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

But, in a larger sense, we can not dedicate — we can not consecrate — we can not hallow — this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract.`,
      isAI: false,
      source: 'Abraham Lincoln, Gettysburg Address, November 19, 1863',
      hint: 'Lincoln\'s triple negation — "we can not dedicate — we can not consecrate — we can not hallow" — performs the argument it makes: three synonyms exhausted in order to demonstrate the inadequacy of ceremony before the fact of the dead. Each word is slightly different in register. The speech works by establishing what it cannot do, which is the deepest form of honoring what was done.',
    },
    {
      id: 'speeches-r2',
      text: `This is preeminently the time to speak the truth, the whole truth, frankly and boldly. Nor need we shrink from honestly facing conditions in our country today. This great Nation will endure as it has endured, will revive and will prosper. So, first of all, let me assert my firm belief that the only thing we have to fear is fear itself — nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.

In such a spirit on my part and on yours we face our common difficulties. They concern, thank God, only material things. Values have shrunken to fantastic levels; taxes have risen; our ability to pay has fallen; government of all kinds is faced by serious curtailment of income; the means of exchange are frozen in the currents of trade; the withered leaves of industrial enterprise lie on every side; farmers find no markets for their produce; the savings of many years in thousands of families are gone.`,
      isAI: false,
      source: 'Franklin D. Roosevelt, First Inaugural Address, March 4, 1933',
      hint: '"Fear itself — nameless, unreasoning, unjustified terror" is a phrase that earns its aphoristic quality by immediately defining the thing it names. The catalogue that follows is specific economic inventory: shrunken values, fallen ability to pay, frozen exchange, withered leaves of enterprise, no markets, savings gone. FDR does not say the economy is struggling; he catalogs the specific material forms of the struggle. The phrase "thank God, only material things" is a theological move no AI would improvise.',
    },
    {
      id: 'speeches-r3',
      text: `Let every nation know, whether it wishes us well or ill, that we shall pay any price, bear any burden, meet any hardship, support any friend, oppose any foe, in order to assure the survival and the success of liberty.

This much we pledge — and more.

To those old allies whose cultural and spiritual origins we share, we pledge the loyalty of faithful friends. United there is little we cannot do in a host of cooperative ventures. Divided there is little we can do — for we dare not meet a powerful challenge at odds and split asunder.

To those new states whom we welcome to the ranks of the free, we pledge our word that one form of colonial control shall not have passed away merely to be replaced by a far more iron tyranny.`,
      isAI: false,
      source: 'John F. Kennedy, Inaugural Address, January 20, 1961',
      hint: 'The four-beat anaphora — "pay any price, bear any burden, meet any hardship, support any friend" — is designed to be spoken, each stress landing on the operative word. JFK then makes structural use of division: "United there is little we cannot do... Divided there is little we can do." The speech moves outward in concentric rings of obligation: old allies, new states, people in huts and villages — each ring receives a specific pledge. The architecture is geopolitical, not rhetorical.',
    },
    {
      id: 'speeches-r4',
      text: `With malice toward none, with charity for all, with firmness in the right as God gives us to see the right, let us strive on to finish the work we are in, to bind up the nation's wounds, to care for him who shall have borne the battle and for his widow, and his orphan — to do all which may achieve and cherish a just and lasting peace among ourselves and with all nations.`,
      isAI: false,
      source: 'Abraham Lincoln, Second Inaugural Address, March 4, 1865',
      hint: 'The entire speech has been building to this closing sentence, which is one of the longest syntactic units in American political oratory. It moves from disposition ("with malice toward none") to action ("let us strive") to specific care ("him who shall have borne the battle and for his widow, and his orphan") to the horizon ("lasting peace"). The precision of "his widow, and his orphan" — not widows and orphans in the abstract, but the widow and orphan of a specific him — is Lincoln\'s characteristic move from category to person.',
    },
    {
      id: 'speeches-r5',
      text: `Yesterday, December 7, 1941 — a date which will live in infamy — the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.

The United States was at peace with that nation, and, at the solicitation of Japan, was still in conversation with its Government and its Emperor looking toward the maintenance of peace in the Pacific. Indeed, one hour after Japanese air squadrons had commenced bombing in the American island of Oahu, the Japanese Ambassador to the United States and his colleague delivered to our Secretary of State a formal reply to a recent American message. And while this reply stated that it seemed useless to continue the existing diplomatic negotiations, it contained no threat or hint of an attack or armed action.`,
      isAI: false,
      source: 'Franklin D. Roosevelt, Address to Congress, December 8, 1941',
      hint: '"A date which will live in infamy" is embedded as a parenthetical — a relative clause inside a declarative sentence — rather than announced as the speech\'s theme. The diplomatic accounting that follows is specific to the hour: the ambassador\'s delivery of a formal reply while the attack was already underway. FDR does not say Japan behaved treacherously; he describes the timeline and lets the gap between the diplomacy and the bombs carry the weight.',
    },
    {
      id: 'speeches-ai1',
      text: `My fellow citizens, we stand today at a pivotal moment in our nation's history. The challenges we face are real and they are serious. But I want you to know this: I have never been more confident in our ability to meet them.

We are a resilient people. We are an innovative people. We are a people who have always risen to the occasion when our values were tested. And today, our values are being tested once again.

The path forward will not be easy. It will require sacrifice. It will require courage. It will require each of us to look beyond our differences and see what unites us as Americans. But I believe, with every fiber of my being, that if we come together — if we choose unity over division, hope over fear, progress over the politics of the past — there is no challenge we cannot overcome.`,
      isAI: true,
      hint: '"I have never been more confident" and "with every fiber of my being" are placeholder phrases — rhetorical intensity without rhetorical pressure. The three-beat anaphora ("We are a resilient people. We are an innovative people.") assembles the correct form but the nouns are generic virtues, not specific historical claims. Compare FDR\'s "the only thing we have to fear is fear itself" — a paradox that must be unpacked — against "choose unity over division, hope over fear": the AI has generated the antitheses correctly but produced ones so expected they have no cutting edge. Great political rhetoric names specific things and specific enemies; this names only abstractions.',
    },
    {
      id: 'speeches-ai2',
      text: `To our allies across the Atlantic and Pacific, I say this: America will not turn away. We remain committed to the values that bind free nations together — democracy, human dignity, the rule of law. These are not merely American values. They are universal values, hard-won over centuries of struggle and sacrifice.

To our adversaries, let me be equally clear: we will defend what we have built. Not with aggression, but with resolve. Not with threats, but with the demonstrated strength of a united people.

And to the citizens of this nation who have placed their trust in us: we hear you. We see the burdens you carry. We will not rest until the promise of this country is accessible to every family in every corner of this land.`,
      isAI: true,
      hint: 'The structure is correct — allies, adversaries, citizens, each addressed in turn — but each ring receives a generic pledge. JFK\'s inaugural addresses specific concentric groups with specific obligations ("to those new states... we pledge our word that one form of colonial control shall not merely be replaced by a far more iron tyranny"). This version pledges commitment to democracy and dignity — values so broadly held that pledging to them costs nothing and means nothing. "The demonstrated strength of a united people" is sound without referent. The speech answers every rhetorical question it asks without surprising anyone.',
    },
    {
      id: 'speeches-ai3',
      text: `We gather here today not only to honor those who have fallen, but to rededicate ourselves to the principles for which they fought. They believed in something larger than themselves. They believed in a future they would not live to see. And in that belief, they gave us everything.

We owe them a debt that can never be fully repaid. But we can honor it. We can honor it by refusing to let their sacrifice be in vain. We can honor it by committing ourselves — each of us, in our own way — to the ongoing work of building a more just, a more equal, a more compassionate society.

That is the only memorial equal to what they did. Not monuments, not words, but action. Not ceremony, but commitment.`,
      isAI: true,
      hint: 'Lincoln\'s Gettysburg Address addresses the same rhetorical problem — how to honor the dead at a dedication ceremony — and solves it by arguing that the ceremony cannot honor the dead and that only the continuation of the cause can. This passage reaches the same conclusion ("not monuments, not words, but action") but announces it as an epigram rather than earning it through argument. "They believed in a future they would not live to see" is a well-formed sentiment; Lincoln\'s equivalent move is specific ("that nation, or any nation so conceived and so dedicated, can long endure") — a conditional about democratic governance, not a general tribute to selflessness.',
    },
    {
      id: 'speeches-ai4',
      text: `There are those who say the American dream is over. There are those who claim that our best days are behind us, that the problems we face are too great, the divisions too deep, the challenges too formidable for any generation to overcome.

I am not among them.

I believe in the American people. I have seen their resilience. I have witnessed their generosity. I have felt the power of their determination when they set their minds to a common purpose.

This country has faced hard moments before. And every time — every single time — the American people have risen to the occasion. Not because someone told them to. Not because a politician asked them to. But because it is in our nature, as Americans, to refuse to accept defeat.`,
      isAI: true,
      hint: '"There are those who say... I am not among them" is the most common opening structure in AI-generated political speeches because it establishes opposition and position in one move. But note: there are no named adversaries, no specific claim attributed to the unnamed critics. The repetition of "I have seen / I have witnessed / I have felt" generates anaphoric momentum without accumulating evidence. "It is in our nature, as Americans, to refuse to accept defeat" closes with a national-character claim that cannot be proved or disproved. Great political speeches make falsifiable claims — Lincoln\'s speech stakes the whole question of democratic legitimacy on the outcome of the war; this speech stakes nothing.',
    },
  ],
};

export default domain;
