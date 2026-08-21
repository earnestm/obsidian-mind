import type { Author } from '@/types/game';

const domain: Author = {
  id: 'investigative',
  name: 'Investigative Reports',
  years: '2022–2026',
  nationality: 'Cross-border Journalism',
  knownFor: 'Documented exposés built from evidence and firsthand reporting',
  snippets: [
    {
      id: 'investigative-r1',
      text: `The last major earthquake in Italy was the Amatrice earthquake, which had a magnitude of 6.2 and struck on 24 August 2016. It claimed the lives of nearly 300 people and left some 4,000 homeless. The tragedy reignited the debate on the vulnerability of Italy's building stock: it was estimated that nearly 70 percent of buildings did not meet earthquake-resistance standards. Even relatively recent constructions had collapsed in previous earthquakes. 2009 saw the collapse of the university hall of residence in L'Aquila. Back in 2002 a school collapsed in San Giuliano di Puglia.`,
      isAI: false,
      source: 'Voxeurop / El Confidencial (García-Ajofrín & Ruiz Guevara), Europe, 17 August 2026 — voxeurop.eu (short excerpt)',
      hint: `Investigative reporting builds its case from dated, located specifics: magnitude 6.2, "24 August 2016," "nearly 300 people," "70 percent of buildings," and named prior collapses (L'Aquila 2009, San Giuliano di Puglia 2002). Each fact is checkable and each points at the same conclusion. AI writing on disasters offers "devastating consequences" and "urgent concerns"; a reporter offers the casualty count and the building-code failure rate.`,
    },
    {
      id: 'investigative-r2',
      text: `Satellite imagery and data provided by the environmental group SkyTruth helped identify hundreds of potential dumps across the globe in 2021 alone. But the number of spills is most likely significantly higher because the satellites used by SkyTruth cover less than one-fifth of the world's oceans. According to the group's estimate, the amount of oily water dumped into the oceans this way could amount to more than 200,000 cubic meters (52.8 million gallons) annually, or roughly five times the equivalent of the 1989 Exxon Valdez spill in Alaska — one of the worst maritime environmental disasters.`,
      isAI: false,
      source: 'Deutsche Welle / Lighthouse Reports (Bernhard, Bayer, Werkhäuser), Germany, 22 March 2022 — dw.com (short excerpt)',
      hint: `The passage names its data source (SkyTruth), quantifies its own coverage limits ("less than one-fifth of the world's oceans"), and gives a scaled comparison a reader can grasp ("five times the equivalent of the 1989 Exxon Valdez spill"). Admitting the uncertainty — that the true number "is most likely significantly higher" — is a mark of real methodology. AI exposés assert scale without measurement; this one shows its instrument and its margin.`,
    },
    {
      id: 'investigative-r3',
      text: `Each operation is carefully planned, sometimes for months, the target's every move analyzed and monitored by one of 15 units inside Bangladesh's Rapid Action Battalion (RAB). Victims are usually picked up late at night and whisked away to the special police force's facilities.

Few survivors have dared to speak out about their ordeal, but one man could not remain silent. Deep into a warm November night in 2021, officers from the elite force stormed a house in an upmarket neighborhood in Dhaka, recalls Nafiz Mohammed Alam, a self-assured 23-year-old sporting a stylish blue suit.`,
      isAI: false,
      source: 'Deutsche Welle / Netra News (Caurla, Islam, Schülke, Conrad), Bangladesh, 3 April 2023 — dw.com (short excerpt)',
      hint: `The reporting is anchored to a named survivor (Nafiz Mohammed Alam, 23), a specific structure ("15 units"), and a scene rendered with a detail only a person would choose — "a self-assured 23-year-old sporting a stylish blue suit." Real investigation gets its authority from firsthand testimony and concrete particulars. AI writing about abuses stays abstract ("victims report mistreatment"); it never meets a specific person in a specific suit on a specific November night.`,
    },
    {
      id: 'investigative-ai1',
      text: `A growing body of concern surrounds the practices of certain organizations, which critics say may be putting their own interests ahead of the public good. While the full picture remains unclear, questions continue to mount about whether enough is being done to ensure accountability and transparency.

Sources familiar with the matter suggest the situation is more complex than it first appears. Some point to systemic failures; others argue that individual actors bear responsibility. What is certain is that these are serious concerns that deserve serious scrutiny.

As pressure builds, one thing is clear: the public deserves answers, and those in positions of power must be held to account.`,
      isAI: true,
      hint: `This is the silhouette of an exposé with the evidence deleted. There is no organization named, no figure cited, no document referenced, no dated event — only "certain organizations," "critics say," "sources familiar with the matter." The hedges ("may be," "questions continue to mount," "the full picture remains unclear") do all the work. Real investigation is a stack of specifics; this is a stack of insinuations that commits to nothing.`,
    },
    {
      id: 'investigative-ai2',
      text: `Behind the scenes, a troubling picture is beginning to emerge. According to multiple accounts, warning signs were repeatedly overlooked, and opportunities to intervene were missed time and again.

Though many details are still coming to light, the allegations raise serious questions about oversight and responsibility. Experts warn that the consequences could be significant, potentially affecting large numbers of people who placed their trust in the system.

Requests for comment were not immediately answered — a silence that, for many, speaks volumes. As scrutiny intensifies, the demand for transparency and accountability has never been louder. The coming weeks will be critical.`,
      isAI: true,
      hint: `Every actor is a placeholder ("multiple accounts," "experts," "the system") and every fact is a category ("warning signs were overlooked," "opportunities were missed"). The passage even tries to convert an absence of reporting into evidence — "a silence that, for many, speaks volumes." A real reporter treats "no comment" as a dead end and turns to documents; the AI treats it as a dramatic beat because it has no documents to turn to.`,
    },
    {
      id: 'investigative-ai3',
      text: `An investigation has revealed what many had long suspected: that beneath the surface lies a far more complicated reality. The findings, while not yet fully confirmed, point to a troubling gap between what was promised and what was actually delivered.

Insiders describe a culture in which difficult questions went unasked and inconvenient truths were quietly set aside. The human cost, advocates say, is still being felt today.

As with so many stories of this kind, the truth may prove messy and accountability hard to pin down. But one lesson is already clear: when institutions are left to police themselves, it falls to a free press to demand better on behalf of us all.`,
      isAI: true,
      hint: `It announces a result — "an investigation has revealed" — then immediately withdraws the substance: "while not yet fully confirmed," "point to a troubling gap." A genuine lede states what was found; this states only that finding happened. "Insiders," "advocates," "a culture" are generic slots, and the closing homage to "a free press" performs the role of investigative journalism while producing none of its content. No document was read, because there is none.`,
    },
  ],
};

export default domain;
