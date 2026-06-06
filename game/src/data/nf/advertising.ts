import type { Author } from '@/types/game';

const domain: Author = {
  id: 'advertising',
  name: 'Advertising & Persuasion',
  years: '1900s–present',
  nationality: 'Commercial Writing',
  knownFor: 'The art of making a specific claim',
  snippets: [
    {
      id: 'advertising-r1',
      text: `We invite you to inspect our plant. We invite comparison. We challenge you to find a reason for your former choice of beer.

We clean our bottles with live steam. We double-pasteurize our beer. We cool it in filtered air. Our bottling machinery is sealed in glass, away from all outside air. Our filters use a unique process. We take 1,000 barrels of water from Lake Michigan to get 100 barrels of pure water for our brewing.

You have a right to know how we make Schlitz. Every process which seems to add to the cost of making beer has a reason. Most of them exist for your protection. We do not ask you to take our word for this. Come and see.`,
      isAI: false,
      source: 'Claude C. Hopkins, Schlitz Beer campaign, c. 1910 (reproduced in Scientific Advertising, 1923)',
      hint: 'Hopkins\'s breakthrough was that every brewer cleaned bottles with live steam — but he was the first to say so in an advertisement. Stating the ordinary fact created the impression of unusual purity. Every claim here is specific and verifiable: 1,000 barrels of Lake Michigan water yielding 100 barrels of pure water is a number, not a benefit. "We invite comparison" and "We challenge you" put the reader in an active position. No modern corporate copy invites comparison or challenge — it asserts uniqueness.',
    },
    {
      id: 'advertising-r2',
      text: `The first duty of an advertisement is to attract the eye of the probable buyer. Not the eye of the world in general, but the eye of the person most likely to want what you have to sell. Shouting to the world means dissipating your fire. An advertisement aimed at everyone hits no one.

You would not send the same letter to ten thousand people if you wanted results. You would write differently to a widow, differently to a merchant, differently to a young man just starting out. Each letter would recognize the interests and desires peculiar to that class of person. Your advertisement should do the same.

The man who writes with an eye on the crowd is usually writing nobody in particular. Think of the one man who needs what you have, and write to him.`,
      isAI: false,
      source: 'Claude C. Hopkins, Scientific Advertising, 1923',
      hint: 'Hopkins is doing what he prescribes: writing to one person. "Think of the one man who needs what you have, and write to him" is operational instruction, not aspiration. The contrast — widow, merchant, young man starting out — is specific enough to carry weight; these are people whose interests genuinely differ. No generalities. No values. No mission. The argument proceeds from observation (you would not send the same letter to ten thousand people) to application (your advertisement should do the same). Modern copy inverts this: it leads with brand values and concludes with a call to action.',
    },
    {
      id: 'advertising-r3',
      text: `Puffery has long since lost its force. The man who reads an advertisement knows it was written to sell him something. He is on the defensive from the start. He is suspicious of the writer's purpose.

The moment he suspects he is being manipulated, that moment your opportunity is gone. He will read a claim as a claim, not a fact. He will dismiss your superlative as the superlative every advertiser uses.

But give him a fact — a specific, checkable, demonstrable fact — and he is disarmed. He must either accept it or investigate it. Either way you have his attention. The man who tells the truth about his product does not need a large vocabulary. The truth, plainly stated, is always unexpected.`,
      isAI: false,
      source: 'Claude C. Hopkins, Scientific Advertising, 1923',
      hint: '"The truth, plainly stated, is always unexpected" is the kind of insight that advertising training has systematically ignored for a century. Hopkins is describing why puffery fails — not as an ethical claim but as a mechanical observation about reader psychology. "He must either accept it or investigate it. Either way you have his attention." — this is strategic reasoning, not values-speak. Compare any modern brand copy, which consists almost entirely of the puffery Hopkins is arguing against: "industry-leading," "best-in-class," "transformative."',
    },
    {
      id: 'advertising-r4',
      text: `I do not regard advertising as entertainment or an art form, but as a medium of information. When I write an advertisement, I want you to find it so interesting that you buy the product. When Aeschines spoke, they said, "How well he speaks." But when Demosthenes spoke, they said, "Let us march against Philip."

I am a copywriter and I am not ashamed. I have helped to sell Dove soap, Rolls-Royce cars, Shell gasoline, Puerto Rico, the government of Israel, and the Sears Roebuck catalogue. I have never written a line I didn't believe was honest, and I have never written a line I wasn't convinced could sell.

If you are fortunate enough to write a great advertisement, it will be quoted and reprinted without your name attached to it. That is the nature of the trade. Apocrypha has no byline.`,
      isAI: false,
      source: 'David Ogilvy, Confessions of an Advertising Man, 1963 (short excerpt, educational use)',
      hint: 'The Aeschines/Demosthenes distinction is not decoration — it is Ogilvy\'s theory of advertising stated as a classical example: the advertiser who makes people say "how good this ad is" has failed; the one who makes them act has succeeded. The list — Dove, Rolls-Royce, Shell, Puerto Rico, Israel, Sears — is deliberately odd; Puerto Rico and Israel are not products, which makes the list a claim about the scope of persuasion. Ogilvy never says "I am passionate about delivering results." He says exactly what he has sold.',
    },
    {
      id: 'advertising-r5',
      text: `There are men who read every word in every newspaper, including the want-ads. There are men who read every catalogue that comes their way. There are women who read every recipe on every package, every beauty advertisement, every home-furnishing notice. These people are in the market, and they are your natural readers.

Stop trying to advertise to people who are not buying. Stop writing to people who have not raised their hands. Every word you write to a hostile reader is a word you cannot spend on a willing one.

Your advertisement should speak to the man who needs you as though he knew he needed you. Not to persuade him that he has a need, but to answer the need he already knows is there.`,
      isAI: false,
      source: 'Claude C. Hopkins, Scientific Advertising, 1923',
      hint: 'The opening portraits — men who read want-ads, women who read recipes on packages — are specific sociological observations, not demographic abstractions. Hopkins does not say "your target audience" or "your customer persona"; he says men who do a particular thing with their morning newspaper. The strategic point — stop writing to hostile readers — is stated as waste management, not as a creative principle. The closing distinction ("not to persuade him that he has a need, but to answer the need he already knows is there") is a diagnostic for bad advertising that still applies to most of it.',
    },
    {
      id: 'advertising-ai1',
      text: `At Luminos, we believe that technology should work for people — not the other way around.

That's why we built our platform around a simple idea: when people have the right tools, they can do extraordinary things. When barriers disappear, creativity flourishes. When complexity gives way to clarity, potential is unlocked.

We're not just building software. We're building possibilities.

Our team of passionate problem-solvers works every day to make the invisible visible, the complicated simple, and the impossible achievable. Because at the end of the day, we're here for one reason: to help you do more of what matters.

The future of work is human. And we're here to help you lead it.`,
      isAI: true,
      hint: '"We\'re not just building software. We\'re building possibilities" — this is the form of Hopkins\'s specific claim ("We clean our bottles with live steam") drained of all specificity. Luminos builds possibilities, empowers people, unlocks potential, makes complexity give way to clarity. None of these is checkable. None of them gives the reader a reason to investigate. Hopkins\'s breakthrough was that stating a verifiable fact disarmed the defensive reader; this copy offers no fact at all, only a sequence of value claims so generic that any company in any industry could adopt them without changing a word. "The future of work is human" is particularly instructive: it sounds like a claim but cannot be falsified.',
    },
    {
      id: 'advertising-ai2',
      text: `Great coffee starts with great relationships.

For over thirty years, we've been working directly with farmers in Ethiopia, Colombia, and Guatemala — building the kind of long-term partnerships that make exceptional coffee possible. When farmers thrive, their crops reflect it. When communities prosper, quality follows.

Every bag you buy tells a story of connection. A story of care. A story of craft that begins thousands of miles away and ends in your cup.

We source with intention. We roast with precision. We deliver with pride.

Because coffee isn't just a morning ritual — it's a conversation between you and the people who grew it. And we believe that conversation should be worth having.`,
      isAI: true,
      hint: '"Every bag you buy tells a story of connection. A story of care. A story of craft" — the fragmented parallel sentences and the em-dash climax ("it\'s a conversation between you and the people who grew it") are characteristic AI corporate patterns. Notice what is absent: no specific farm named, no specific farmer, no specific process. "Sourcing with intention" has no content — intention toward what? Hopkins\'s Schlitz copy named specific numbers (1,000 barrels of lake water). This copy names three countries and stops there. "We believe that conversation should be worth having" closes on a value claim that again cannot be disproved. Every sentence is in the correct emotional register and none carry information.',
    },
    {
      id: 'advertising-ai3',
      text: `You work hard. You deserve tools that work harder.

That's the thinking behind everything we make at Vertex. Not just products — solutions. Not just features — experiences. Designed for the way you actually work, not the way someone thought you might.

Intuitive by design. Powerful by default. Built for people who don't have time to learn new software from scratch.

Join the hundreds of thousands of professionals who've already made the switch. Discover why Vertex has been named a leader in its category for three consecutive years. And find out what it feels like when your tools finally get out of the way.

Ready to work smarter? Let's go.`,
      isAI: true,
      hint: 'The "Not just X — Y" construction appears twice in three sentences: "Not just products — solutions. Not just features — experiences." This is the most reliable AI advertising tell: the rhetorical pivot that positions the brand as having transcended the category. But "solutions" and "experiences" are empty vessels — they mean exactly as much as "products" and "features," which is to say they describe nothing. "Intuitive by design. Powerful by default." are claims that require only the adjectives; no evidence is given. The call to action — "Ready to work smarter? Let\'s go." — ends on mutual enthusiasm that costs nothing to write and demands nothing of the reader.',
    },
    {
      id: 'advertising-ai4',
      text: `Fifteen years ago, we asked a simple question: why should doing the right thing cost more?

We didn't have a perfect answer. But we had a conviction: that ethical sourcing and exceptional quality weren't mutually exclusive. That you could build a business that was good for people, good for the planet, and good for your bottom line — without compromise.

We've been proving that every day since.

Today, Clearfield operates in 23 countries, works with over 4,000 certified suppliers, and has planted more than two million trees through our reforestation initiative. These aren't just numbers. They're proof that a different way of doing business is possible.

We're not perfect. But we're honest. And we're committed to getting better — together.`,
      isAI: true,
      hint: 'This copy executes the "origin story + impact numbers + humble closing" formula with mechanical precision. "Why should doing the right thing cost more?" is a rhetorical question with an implied answer; Hopkins\'s copy asks no questions it cannot answer with a fact. The numbers — 23 countries, 4,000 suppliers, 2 million trees — are specific but function as proof of earnestness rather than as reason to buy. "These aren\'t just numbers. They\'re proof." announces that the numbers should be read as moral evidence rather than demonstrating it. "We\'re not perfect. But we\'re honest." is the vulnerability-as-brand-positioning move that sophisticated corporate copy has adopted to deflect the Hopkins objection — but admitting imperfection is still a puffery claim, just an inverse one.',
    },
  ],
};

export default domain;
