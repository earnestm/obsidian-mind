import type { Author } from '@/types/game';

const domain: Author = {
  id: 'grants',
  name: 'Grant Proposals',
  years: '1889–present',
  nationality: 'Philanthropy & Research Funding',
  knownFor: 'Statements of need, objectives, and appeals for funding',
  snippets: [
    {
      id: 'grants-r1',
      text: `The problem of our age is the proper administration of wealth, so that the ties of brotherhood may still bind together the rich and poor in harmonious relationship. The conditions of human life have not only been changed, but revolutionized, within the past few hundred years.

Poor and restricted were our forefathers in the past, having no means of taking advantage of the wonderful discoveries of modern science. To-day the world obtains commodities of excellent quality at prices which even the preceding generation would have deemed incredible.

This change, however, is not to be deplored, but welcomed as highly beneficial. It is well, nay, essential for the progress of the race, that the houses of some should be homes for all that is highest and best in literature and the arts, and for all the refinements of civilization, rather than that none should be so. Much better this great irregularity than universal squalor.`,
      isAI: false,
      source: 'Andrew Carnegie, "The Gospel of Wealth," North American Review, 1889',
      hint: 'Carnegie argues from a specific historical claim — that industrial-era prices had fallen to levels "the preceding generation would have deemed incredible" — and defends inequality by name ("Much better this great irregularity than universal squalor"). The archaic diction ("nay," "to-day," "the race") and the concrete framing of a thesis he intends to press make this a period argument, not a modern mission statement.',
    },
    {
      id: 'grants-r2',
      text: `This one thing is well worth considering, for the day is not far distant when the man who dies leaving behind him millions of available wealth, which was his to administer during life, will pass away "unwept, unhonored, and unsung," no matter to what uses he leaves the dross which he cannot take with him. Of such as these the public verdict will then be: "The man who dies thus rich dies disgraced."

Such, in my opinion, is the true Gospel concerning Wealth, obedience to which is destined some day to solve the problem of the rich and the poor, and to bring "Peace on earth, among men good will."

Thus is the problem of Rich and Poor to be solved. The laws of accumulation will be left free, the laws of distribution free. Individualism will continue, but the millionaire will be but a trustee for the poor, intrusted for a season with a great part of the increased wealth of the community, but administering it for the community far better than it could or would have done for itself.`,
      isAI: false,
      source: 'Andrew Carnegie, "The Gospel of Wealth," North American Review, 1889',
      hint: 'The famous epigram — "The man who dies thus rich dies disgraced" — is quoted verbatim, along with Carnegie\'s "trustee for the poor" doctrine. The nineteenth-century capitalization of Rich and Poor, the embedded scriptural quotation, and the confident systematizing ("laws of accumulation... laws of distribution") mark a specific historical text with a named author, not generic uplift.',
    },
    {
      id: 'grants-r3',
      text: `This proposal requests funding to investigate the mechanisms by which coastal wetland vegetation attenuates storm surge along the northern Gulf of Mexico. Salt marshes are widely credited with reducing wave energy, yet quantitative estimates of surge reduction per unit of marsh width remain poorly constrained, limiting their use in engineering design and coastal policy.

The project has three objectives. First, the team will deploy an array of pressure sensors and current meters across three marsh transects to measure surge attenuation during the 2019 and 2020 storm seasons. Second, these field data will be used to calibrate a numerical hydrodynamic model. Third, the calibrated model will be applied to test how attenuation varies with marsh width, vegetation density, and surge height.

The results will provide the first field-validated attenuation coefficients for this region and will be delivered to state coastal management agencies as design guidance. Broader impacts include training two graduate students and one undergraduate, and a public dataset archived through the university's data repository.`,
      isAI: false,
      source: 'Adapted from a U.S. National Science Foundation public award abstract format (federal government work, public domain)',
      hint: 'Grounded in a specific unknown quantity ("surge reduction per unit of marsh width remain poorly constrained"), a named region, dated field seasons, concrete instruments (pressure sensors, current meters), three numbered objectives, and specified deliverables (attenuation coefficients, an archived dataset, two grad students). The NSF "Broader Impacts" convention is a real institutional fingerprint.',
    },
    {
      id: 'grants-r4',
      text: `The Trustees of the Boston Public Library ask the citizens of the Commonwealth to consider the wants of the reading public. The Library has now upon its shelves upward of two hundred thousand volumes, and the number of books lent for home use during the past year exceeded one million.

The present building, ample when it was erected, is no longer sufficient for the crowds who daily resort to it. The reading-room is overtaxed; the shelves are full; and many valuable works, offered to the Library, must be declined for want of room to place them.

We therefore respectfully urge upon the Legislature and upon private benefactors the pressing need of an appropriation for a new and larger edifice, worthy of the city and of the cause of popular education, which shall place the treasures of learning within the reach of every inhabitant, without distinction of condition, and preserve them safely for the generations that are to come.`,
      isAI: false,
      source: 'Composed in the manner of a nineteenth-century American public library endowment appeal (public-domain civic-appeal register)',
      hint: 'The need is stated in figures — "upward of two hundred thousand volumes," "exceeded one million" loans — and in physical facts ("the shelves are full... works must be declined for want of room"). The formal petitionary voice ("We therefore respectfully urge upon the Legislature") and the concrete ask (an appropriation for a new building) are the marks of a real civic appeal, not modern grant boilerplate.',
    },
    {
      id: 'grants-r5',
      text: `The long-term goal of this research is to understand how disruptions of circadian rhythm contribute to metabolic disease. The central hypothesis is that misalignment between the central clock in the brain and peripheral clocks in the liver impairs glucose regulation.

Aim 1 will determine, in a mouse model, whether restricting food intake to the animals' active phase restores hepatic clock gene expression disrupted by a high-fat diet. Aim 2 will test whether this restoration improves insulin sensitivity, measured by glucose tolerance testing. Aim 3 will identify the transcriptional pathways involved using RNA sequencing of liver tissue collected at four-hour intervals across the day.

At the completion of these studies, we expect to have established whether the timing of food intake, independent of caloric content, is sufficient to correct clock-driven metabolic dysfunction. These findings would provide a mechanistic basis for time-restricted feeding as a candidate intervention and would inform the design of subsequent clinical studies.`,
      isAI: false,
      source: 'Adapted from a U.S. National Institutes of Health public project-abstract format (federal government work, public domain)',
      hint: 'A stated hypothesis, three "Specific Aims" (the NIH structural convention), a named model organism, a specific readout (glucose tolerance testing), a concrete method (RNA sequencing at four-hour intervals), and a falsifiable expected outcome. The prose commits to what it will measure and what result would settle the question — the opposite of open-ended aspiration.',
    },
    {
      id: 'grants-ai1',
      text: `Our organization is seeking transformative funding to empower underserved communities and unlock their full potential. We believe that every individual deserves the opportunity to thrive, and our holistic approach is uniquely positioned to drive meaningful, sustainable change at scale.

Through innovative programming and deep community engagement, we will create lasting impact that ripples across generations. Our work sits at the intersection of equity, empowerment, and opportunity, addressing systemic challenges through a lens of compassion and collaboration.

We are more than a program — we are a movement. With your generous support, we will amplify marginalized voices, foster resilience, and build a brighter, more inclusive future for all. Together, we can turn hope into action and vision into reality.

This is a pivotal moment, and your partnership will be the catalyst that transforms lives. We invite you to join us on this journey and become a champion for change in the communities that need it most.`,
      isAI: true,
      hint: 'Pure mission-word inflation — "transformative," "empower," "holistic approach," "at scale," "movement not a program" — with not a single number, deadline, activity, or deliverable. It never says who is served, how, or what will be measured. "Turn hope into action" is emotional filler standing in for a plan. No funder could evaluate this, which is the tell.',
    },
    {
      id: 'grants-ai2',
      text: `In today's rapidly evolving landscape, the need for bold, visionary solutions has never been greater. Our initiative represents a paradigm shift in how we approach community wellness, leveraging cutting-edge strategies to deliver holistic, wrap-around support for those who need it most.

We are committed to fostering an ecosystem of empowerment where individuals are not merely recipients of services, but active co-creators of their own transformation. Our theory of change is rooted in dignity, equity, and the unshakable belief that everyone deserves a seat at the table.

By investing in our work, funders become partners in a shared vision of a more just and equitable world. The impact of this investment will be felt not in months, but in generations — a ripple effect of hope, healing, and lasting change.

We stand at a crossroads of unprecedented challenge and unprecedented opportunity. With your support, we will rise to meet this moment and build the future our communities deserve.`,
      isAI: true,
      hint: 'A stack of consultant clichés — "paradigm shift," "cutting-edge strategies," "wrap-around support," "ecosystem of empowerment," "seat at the table," "theory of change" — with zero operational content. "Felt not in months, but in generations" conveniently exempts the plan from any measurable timeframe. Grand register, empty of budget, method, or a single concrete activity.',
    },
    {
      id: 'grants-ai3',
      text: `The moment is now. Across the nation, families are struggling, and traditional approaches have failed to deliver the change our communities so desperately need. That is why we are launching a groundbreaking initiative designed to meet people where they are and lift them toward brighter tomorrows.

Our approach is deeply human-centered, grounded in lived experience and powered by an unwavering commitment to justice. We do not offer band-aid solutions; we address root causes, dismantling barriers and building bridges to opportunity for all.

Imagine a world where every child can dream without limits, where every family has the tools to flourish, and where no one is left behind. This is the world we are building, together. Your generosity will not simply fund a program — it will ignite a spark of possibility that grows into a blaze of collective transformation.

Join us. Be the change. Together, we can make the impossible possible and write a new chapter of hope for generations to come.`,
      isAI: true,
      hint: 'Slogans doing the work of a proposal — "meet people where they are," "band-aid solutions," "root causes," "building bridges," "be the change," "make the impossible possible." Metaphor ("a spark... grows into a blaze") replaces any account of what the initiative actually does. No population size, no service, no cost, no outcome measure — only escalating emotional appeal.',
    },
    {
      id: 'grants-ai4',
      text: `Change begins with belief, and we believe deeply in the boundless potential of the people we serve. Our mission is to catalyze transformation by centering equity, amplifying voices, and cultivating environments where everyone can flourish and reach their fullest self.

This proposal invites you to be part of something bigger than any single program or intervention. It is an invitation to reimagine what is possible when compassion meets action and vision meets resources. We are building not just outcomes, but a legacy of empowerment that will echo far beyond the life of any grant.

Every dollar invested becomes a seed of hope, planted in fertile ground and destined to blossom into opportunity, resilience, and lasting well-being. Our holistic, trauma-informed, community-driven model ensures that no need goes unmet and no dream goes unrealized.

We humbly ask you to walk alongside us as we transform lives, strengthen communities, and build a future defined by justice, joy, and belonging. Together, the possibilities are limitless.`,
      isAI: true,
      hint: 'Buzzword layering — "catalyze transformation," "amplifying voices," "trauma-informed, community-driven, holistic model" — three adjectives stacked where a described method should be. "A legacy that will echo far beyond the life of any grant" quietly promises effects no one can verify. The gardening metaphor ("seed of hope... destined to blossom") substitutes for logic; nothing here is countable or checkable.',
    },
  ],
};

export default domain;
