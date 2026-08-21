import type { Author } from '@/types/game';

const domain: Author = {
  id: 'journalism',
  name: 'News & Journalism',
  years: '2024–2026',
  nationality: 'International Press',
  knownFor: 'Reportage and reporting from around the world',
  snippets: [
    {
      id: 'journalism-r1',
      text: `On Wednesday, the prime minister of Canada, Justin Trudeau, survived a vote of no confidence. The House of Commons voted 211-120 to defeat a motion declaring a lack of confidence in Trudeau's minority Liberal government. The motion was put by the Conservative Party, also known as 'Tories', which is the official opposition.

119 Conservative members of parliament voted in favor of the motion, while 153 Liberal members of the parliament voted against it, as did most of the remaining members, mostly comprised of the New Democratic Party and Bloc Québécois. The parliament included 338 members in total, and a majority of votes was required for the motion to pass.`,
      isAI: false,
      source: 'Wikinews (CC BY 2.5), Canada, 27 September 2024 — en.wikinews.org/wiki/Prime_Minister_of_Canada_Justin_Trudeau_survives_a_no_confidence_vote',
      hint: `Real reporting is dense with numbers that can be checked and would be embarrassing to get wrong: 211-120, 119 Conservatives, 153 Liberals, 338 members total. It names the specific parties (Bloc Québécois, NDP) and the exact procedural fact ("a majority of votes was required"). AI-written news gravitates to the shape of an event without the arithmetic; a genuine wire report is built from the tally.`,
    },
    {
      id: 'journalism-r2',
      text: `Irish consumers pay 11 times more duty on a pint of beer than people in Spain and Germany, according to research published on Friday.

The research, carried out by DCU economist Anthony Foley and commissioned by the Drinks Industry Group of Ireland (Digi), suggests that consumers here pay more duty on beer, wine and spirits than people in every country in Europe apart from Finland.

The report highlights how excise tax on wine in Ireland is the second highest across the EU and UK combined, while excise on beer and spirits is the third highest.

A pint of beer purchased in a pub here attracts excise of 55 cent compared to just five cent in Spain and Germany.`,
      isAI: false,
      source: 'The Irish Times, Ireland, 21 August 2026 — irishtimes.com (short excerpt)',
      hint: `Notice the named source of the claim (DCU economist Anthony Foley), the named commissioning body (Digi), and the precise comparison (55 cent versus five cent; "second highest," "third highest," "apart from Finland"). Real journalism attributes its numbers to someone and pins them to specific places. AI copy tends to say duties are "significantly higher" and stop; here every figure has a provenance.`,
    },
    {
      id: 'journalism-r3',
      text: `As of today (Tuesday), the Brussels-Capital Region has been without an elected government for 542 days – one day longer than the world record of 541 days, held by Belgium's Federal Government led by Elio Di Rupo (PS) in 2011.

On Monday, when the Brussels Region matched the Belgian world record of 541 days, more than 500 Brussels residents staged a protest at Place Saint Jean, near the Brussels Parliament. They chanted slogans and booed the politicians, before starting a spontaneous march to the parliament.

They also published their manifesto as an open letter, signed by nearly 200 prominent Brussels residents from various sectors.`,
      isAI: false,
      source: 'The Brussels Times, Belgium, August 2026 — brusselstimes.com (short excerpt)',
      hint: `The report hangs on a single exact, verifiable fact — 542 days, "one day longer than the world record of 541 days" — and grounds the protest in a named place (Place Saint Jean), a count ("more than 500 residents," "nearly 200" signatories), and a named precedent (Di Rupo, 2011). AI writing about political dysfunction reaches for "unprecedented gridlock"; a reporter reaches for the day count and the address.`,
    },
    {
      id: 'journalism-r4',
      text: `Videos recommending regular parasite cleanses by taking herbal products featuring wormwood, black walnut hulls and cloves are found across social media -- and many are gaining traction as the United States experiences a major outbreak of the gastrointestinal illness cyclosporiasis. But experts told AFP the remedies are unproven and warned that self-medicating with herbal supplements can be dangerous as the products are not regulated to protect patients from possible toxicity.

Despite their popularity online, there is no data showing parasite cleanses are necessary, said Kyle Enfield, vice-chair for patient quality and safety at University of Virginia Health. 'They've never been shown to be useful,' he told AFP on August 12.`,
      isAI: false,
      source: 'AFP Fact Check (Marisha Goldhamer), Canada, 17 August 2026 — factcheck.afp.com (short excerpt)',
      hint: `Fact-checking names its expert (Kyle Enfield, with his exact title), dates the interview ("he told AFP on August 12"), and specifies the actual ingredients (wormwood, black walnut hulls, cloves) and the actual illness (cyclosporiasis). The human tell is the direct, slightly awkward quote — "They've never been shown to be useful" — trailing off from a real person. AI health copy stays fluent and sourceless; real reporting quotes a named human saying a plain thing.`,
    },
    {
      id: 'journalism-r5',
      text: `In Greek mythology, Kairos was the youngest son of Zeus, known as the god of the fleeting, brief moment. According to the myth, Kairos, who symbolises the right and decisive moment, must be seized by the lock of hair on his forehead before he flies away. The young god, depicted by Lysippos with wings on his feet and back, barely ever touches the ground, conveying his sheer speed. He reminds mere mortals that the right moment passes quickly and that opportunities do not return.

Kairos has no hair on the back of his head, symbolising the transience of chances: once he has passed by, he can no longer be grasped, and a missed moment cannot ever be recovered.`,
      isAI: false,
      source: 'Total Croatia News (Lauren Simmonds), Croatia, 10 August 2026 — total-croatia-news.com (short excerpt)',
      hint: `Even a feature explainer carries human fingerprints: the specific sculptor (Lysippos), the exact iconography ("wings on his feet and back," "no hair on the back of his head"), and a writer's phrasing that commits to an image ("mere mortals," "before he flies away"). AI mythology copy hedges and generalises; this has an idiosyncratic descriptive rhythm and picks concrete visual details a person actually noticed.`,
    },
    {
      id: 'journalism-ai1',
      text: `The recent political developments have sparked a wide range of reactions from across the spectrum, raising important questions about the road ahead. While some observers see the moment as a turning point, others caution that meaningful change remains far from guaranteed.

Analysts note that the situation reflects broader trends that have been unfolding for some time. On one hand, there is a sense of momentum; on the other, significant challenges persist. Much will depend on how key stakeholders choose to respond in the days and weeks to come.

What is clear is that the coming period will be closely watched. For now, all eyes remain on how events continue to develop.`,
      isAI: true,
      hint: `Read it twice and you cannot say what happened, where, or to whom. No name, number, place, or date survives the paragraph — only "recent political developments," "key stakeholders," "observers," "analysts note." The "on one hand… on the other" balance and the closer ("all eyes remain on how events continue to develop") are the reflexes of a model imitating the cadence of news without any reporting underneath it.`,
    },
    {
      id: 'journalism-ai2',
      text: `In today's fast-paced world, the story has captured the attention of many, highlighting the complex and multifaceted nature of the issue at hand. As the situation continues to evolve, it is important to note that there are no easy answers.

Experts say the implications could be far-reaching, potentially affecting communities in a variety of ways. The development underscores the need for continued dialogue and a thoughtful, balanced approach moving forward.

Ultimately, the events serve as a powerful reminder of the challenges we face in an increasingly interconnected world — and of the importance of coming together to find solutions that work for everyone.`,
      isAI: true,
      hint: `The signature giveaways are all here: "In today's fast-paced world," "multifaceted," "it is important to note," "far-reaching implications," and a moralising sign-off about "an increasingly interconnected world." Genuine reporting never tells you the story is a "powerful reminder" — it tells you the facts and lets you draw the lesson. "Experts say" with no expert named is the tell that no expert was called.`,
    },
    {
      id: 'journalism-ai3',
      text: `In a heartwarming turn of events, the community has come together in an inspiring display of unity and resilience. The story has touched the hearts of many, serving as a beautiful reminder of the power of human connection.

Local residents, who preferred to let their actions speak for themselves, rallied around a common cause, proving that even in difficult times, hope can prevail. Their selfless efforts have not gone unnoticed, inspiring others to follow suit.

As one observer put it, moments like these remind us of what truly matters. It is a testament to the enduring spirit of a community determined to make a difference, one small act of kindness at a time.`,
      isAI: true,
      hint: `Human-interest reporting lives on specifics — who, how many, what exactly they did. This has none: "the community," "local residents," "one observer," "a common cause." The quote is attributed to nobody ("as one observer put it") and says nothing. "Heartwarming," "inspiring," "a beautiful reminder," "a testament to the enduring spirit" is sentiment poured over an empty mould where the facts should be.`,
    },
    {
      id: 'journalism-ai4',
      text: `Breaking developments are continuing to unfold as new information comes to light. According to sources, the situation is being closely monitored, and further updates are expected in due course.

While details remain limited at this stage, what is known is that the event has prompted a significant response from those involved. Authorities have urged calm and are working to establish the full picture.

The story is developing, and more will become clear as the facts emerge. In the meantime, questions remain about what comes next and what the broader implications may be. Stay tuned for further coverage as this important story continues to develop.`,
      isAI: true,
      hint: `A real breaking-news brief, however thin, contains at least one hard fact — a place, a time, a number, an agency by name. This one is engineered from pure placeholder: "according to sources," "authorities," "those involved," "details remain limited." "Stay tuned for further coverage" is a broadcast tic, not a sentence a wire reporter files. The paragraph describes the act of covering news while conveying none.`,
    },
  ],
};

export default domain;
