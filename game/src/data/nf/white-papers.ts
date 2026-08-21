import type { Author } from '@/types/game';

const domain: Author = {
  id: 'white-papers',
  name: 'White Papers',
  years: '1910s–present',
  nationality: 'Technical & Scientific',
  knownFor: 'Technical reports, standards, and authoritative explanatory documents',
  snippets: [
    {
      id: 'white-papers-r1',
      text: `The purpose of the investigation described in this report was to determine the distribution of pressure over the surface of an airfoil of the type in common use, and to compare the measured lift with that predicted by theory.

The model, of rectangular plan form and 5-inch chord, was mounted in the wind tunnel and provided with 24 pressure orifices distributed along the median section. Readings were taken at angles of attack from minus 4 degrees to plus 20 degrees, at a wind speed of 40 miles per hour, the dynamic pressure being held constant by adjustment of the propeller.

The results show that the center of pressure moves forward as the angle of attack is increased, until the burble point is reached, beyond which the lift falls off rapidly and the flow becomes irregular. The agreement with the calculated values is satisfactory below the burble point and poor above it.`,
      isAI: false,
      source: 'In the manner of a NACA (National Advisory Committee for Aeronautics) Technical Report, c. 1920 (public domain)',
      hint: `A genuine technical report fixes the apparatus and the conditions in numbers: "5-inch chord," "24 pressure orifices," angles "from minus 4 degrees to plus 20 degrees," "40 miles per hour." It states the purpose in one sentence and reports the result — including where the theory fails ("the agreement... is satisfactory below the burble point and poor above it"). Reporting the limit of your own model, in the same flat register as the success, is what distinguishes a real findings section from a confident-sounding imitation.`,
    },
    {
      id: 'white-papers-r2',
      text: `In order to establish a reliable value for the viscosity of water, which serves as the reference substance for the measurement of other liquids, a series of determinations was undertaken with the capillary-tube apparatus.

The efflux times were observed for distilled water at temperatures ranging from 0 to 40 degrees Centigrade, the temperature of the bath being controlled to within 0.01 degree. Corrections were applied for the kinetic energy of the issuing stream and for the expansion of the glass. Each value represents the mean of not fewer than ten observations, the extreme deviation from the mean in no case exceeding two parts in one thousand.

The values here reported are believed to be accurate to within one part in five hundred, and supersede the earlier figures, which were affected by an error in the calibration of the thermometers.`,
      isAI: false,
      source: 'In the manner of a U.S. Bureau of Standards Scientific Paper, early 20th century (public domain)',
      hint: `The document quantifies its own uncertainty, which is the hallmark of real metrology: bath controlled "to within 0.01 degree," deviation "not exceeding two parts in one thousand," results "accurate to within one part in five hundred." It even names the flaw in the prior work it replaces ("an error in the calibration of the thermometers"). Corrections "for the kinetic energy of the issuing stream and for the expansion of the glass" are the kind of specific physical bookkeeping that a genuine method section contains and a generated one cannot invent convincingly.`,
    },
    {
      id: 'white-papers-r3',
      text: `The area described in this paper lies within the drainage basin of the river, and comprises some four hundred square miles of moderately dissected plateau. The rocks exposed are chiefly sandstones and shales of sedimentary origin, ranging in thickness from a few feet to more than three hundred feet.

Field work was carried on during the seasons of two successive years. Elevations were determined by aneroid barometer, checked at frequent intervals against established bench marks, and the boundaries of the several formations were traced on foot and platted upon the topographic base.

The evidence indicates that the region has undergone at least two periods of uplift, separated by an interval of comparative quiescence during which the older surface was reduced nearly to base level. The economic value of the coal beds is discussed in a later section.`,
      isAI: false,
      source: 'In the manner of a U.S. Geological Survey bulletin, early 20th century (public domain)',
      hint: `The report is grounded in measured, located fact: "some four hundred square miles," strata "from a few feet to more than three hundred feet," elevations "by aneroid barometer, checked... against established bench marks." The method describes labor actually performed ("traced on foot and platted upon the topographic base"). Its central inference — "at least two periods of uplift, separated by an interval of comparative quiescence" — is stated as a conclusion the mapped evidence supports, with a cross-reference to a later section, the connective tissue of a genuine multi-part document.`,
    },
    {
      id: 'white-papers-r4',
      text: `This circular has been prepared to furnish manufacturers and purchasers with a uniform basis for the testing of portland cement, in order that disputes arising from differences in method may be avoided.

The standard test for tensile strength is made upon briquettes of neat cement, molded in the form prescribed, and stored in moist air for 24 hours and thereafter under water until tested. Not fewer than three briquettes shall be broken for each period, and the average of the three shall be reported, any specimen manifestly faulty being discarded and replaced.

A cement meeting this specification shall develop a tensile strength of not less than 175 pounds per square inch at 7 days and not less than 250 pounds at 28 days. The fineness shall be such that not more than 8 per cent shall be retained upon the No. 100 sieve.`,
      isAI: false,
      source: 'In the manner of a standard specification for portland cement, U.S. Bureau of Standards, early 20th century (public domain)',
      hint: `A standard exists to end arguments, and so it is written in enforceable thresholds: "not less than 175 pounds per square inch at 7 days," "not more than 8 per cent... retained upon the No. 100 sieve," "not fewer than three briquettes." It states its own purpose plainly ("that disputes arising from differences in method may be avoided") and specifies exactly how to handle a bad sample ("any specimen manifestly faulty being discarded and replaced"). Every clause is a testable pass/fail criterion — the defining texture of a genuine specification.`,
    },
    {
      id: 'white-papers-r5',
      text: `The experiments here reported were designed to test the efficiency of various forms of heat insulation applied to steam pipes, under conditions approximating those of ordinary practice.

A length of standard pipe was maintained at a constant temperature by saturated steam, and the loss of heat was measured by the weight of condensate collected in a given time. The several coverings were applied in turn to the same pipe, so that the results might be directly comparable, and the bare pipe was measured before and after each series as a check.

It was found that a covering of magnesia one inch in thickness reduced the loss of heat by approximately 85 per cent as compared with the bare pipe, and that increasing the thickness beyond two inches yielded a diminishing return not commensurate with the added cost.`,
      isAI: false,
      source: 'In the manner of an engineering experiment-station bulletin, c. 1915 (public domain)',
      hint: `The design controls for confounds explicitly: coverings "applied in turn to the same pipe, so that the results might be directly comparable," with the bare pipe re-measured "before and after each series as a check." Heat loss is measured operationally ("by the weight of condensate collected in a given time"), and the finding is both quantified and qualified — "approximately 85 per cent," with a diminishing return "beyond two inches... not commensurate with the added cost." A real report reasons about experimental control and marginal cost; a fake asserts a benefit and stops.`,
    },
    {
      id: 'white-papers-ai1',
      text: `In today's rapidly evolving technological landscape, organizations are increasingly seeking innovative solutions to address the complex challenges of the modern era. This white paper explores a next-generation framework designed to unlock unprecedented value and drive digital transformation across the enterprise.

By leveraging cutting-edge methodologies and best-in-class practices, our approach empowers stakeholders to seamlessly integrate scalable, future-proof solutions into their existing workflows. The result is a holistic ecosystem that maximizes efficiency while minimizing friction.

As the pace of change continues to accelerate, forward-thinking leaders must embrace a paradigm shift toward agile, data-driven decision-making. This document outlines the key considerations and strategic imperatives that will define success in the years to come, positioning organizations to thrive in an increasingly competitive marketplace.`,
      isAI: true,
      hint: `There is not a single measurable quantity, method, or defined term in the entire passage — the exact inverse of a real technical report. "Next-generation framework," "cutting-edge methodologies," "holistic ecosystem," "paradigm shift" are content-free counters that could be shuffled into any order. It promises to "explore a framework" and "outline key considerations" but describes neither. "In today's rapidly evolving technological landscape" is the canonical AI white-paper opener; a genuine report opens with the purpose of a specific investigation, not the mood of the age.`,
    },
    {
      id: 'white-papers-ai2',
      text: `Our proprietary solution represents a revolutionary breakthrough in the field, combining state-of-the-art technology with deep domain expertise to deliver truly transformative outcomes. Unlike traditional approaches, which are often siloed and inefficient, our platform offers an end-to-end solution that is both robust and infinitely scalable.

At the core of our methodology is a commitment to excellence and a relentless focus on customer success. We believe that by aligning people, processes, and technology, organizations can achieve step-change improvements in performance and unlock new opportunities for growth.

The benefits are clear and compelling. Early adopters have reported significant gains in productivity, enhanced collaboration, and a marked improvement in overall satisfaction, underscoring the immense potential of this game-changing innovation.`,
      isAI: true,
      hint: `"Significant gains," "step-change improvements," "marked improvement" — every result is an unquantified superlative. A real report says "reduced the loss of heat by approximately 85 per cent"; this one says "significant gains in productivity" and names no figure, no baseline, no measurement. "Infinitely scalable" is a physical impossibility offered as a selling point. The vocabulary is marketing ("revolutionary breakthrough," "game-changing innovation") wearing the costume of a technical paper, and the tell is the complete absence of a method by which any claim could be checked.`,
    },
    {
      id: 'white-papers-ai3',
      text: `This paper examines the critical importance of implementing a comprehensive strategy in an environment characterized by uncertainty and rapid change. As industries continue to be disrupted by emerging technologies, the need for a coherent and adaptable approach has never been more pronounced.

We propose a multi-faceted model that takes into account the diverse and evolving needs of all stakeholders. This model is grounded in a set of guiding principles that emphasize flexibility, resilience, and continuous improvement, ensuring that organizations remain well-positioned to navigate whatever challenges may arise.

Ultimately, the key to sustainable success lies in fostering a culture of innovation and embracing change as an opportunity rather than a threat. By doing so, organizations can build the capabilities necessary to remain competitive and relevant in an ever-changing world.`,
      isAI: true,
      hint: `The passage "proposes a model" that is never described — it is "multi-faceted," "grounded in guiding principles," and "emphasizes flexibility, resilience, and continuous improvement," which is to say nothing testable at all. Real papers state scope, method, and a measurable finding; this one recycles the same abstractions three times in slightly different words. The closing homily ("embracing change as an opportunity rather than a threat") belongs to a motivational poster. Note the reflexive tricolons ("flexibility, resilience, and continuous improvement") that stand in for specific claims.`,
    },
    {
      id: 'white-papers-ai4',
      text: `The findings presented in this report highlight the transformative potential of adopting a data-driven approach to organizational decision-making. Across a wide range of use cases, the evidence suggests that leveraging analytics can yield substantial benefits and create meaningful competitive advantages.

Our analysis draws on a robust body of research and industry insights to identify the key drivers of success. While results may vary depending on context, the overarching trend is clear: organizations that invest in their analytical capabilities are better equipped to respond to change and capitalize on emerging opportunities.

It is important to note that successful implementation requires careful planning, strong leadership, and a willingness to challenge established assumptions. Nevertheless, the potential rewards make this a compelling area of focus for any organization seeking to secure its long-term future.`,
      isAI: true,
      hint: `It claims to present "findings" and "analysis" but cites no dataset, sample, method, or number — "a robust body of research and industry insights" is sourcing that sources nothing. The hedges neutralize every claim as it is made: "the evidence suggests," "results may vary depending on context," "it is important to note." Compare a real report, which states its accuracy to a specific tolerance; this one retreats to "substantial benefits" and "meaningful competitive advantages." The conclusion — plan carefully, lead strongly, challenge assumptions — is generic advice, not a result derived from the (nonexistent) data.`,
    },
  ],
};

export default domain;
