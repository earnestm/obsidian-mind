import type { Author } from '@/types/game';

const domain: Author = {
  id: 'gov-notices',
  name: 'Government Notices',
  years: '1860s–present',
  nationality: 'Public Administration',
  knownFor: 'Official notices, regulations, and public announcements',
  snippets: [
    {
      id: 'gov-notices-r1',
      text: `Notice is hereby given that the following-described lands, in the State of Nebraska, will be offered at public sale to the highest bidder, but at not less than the appraised value thereof, at the United States Land Office at Lincoln, on the fourteenth day of June next, commencing at ten o'clock in the forenoon.

The sale will be kept open from day to day, Sundays excepted, until the whole of said lands shall have been offered and the sales thus closed; but no sale shall be kept open longer than two weeks, and no private entry of any of said lands will be permitted until after the expiration of the two weeks.

All persons claiming the right of pre-emption to any of the lands within the townships and parts of townships above enumerated are required to establish the same to the satisfaction of the register and receiver, and make payment therefor as soon as practicable after seeing this notice, and before the day appointed for the commencement of the public sale.`,
      isAI: false,
      source: 'General Land Office public land sale notice, form used under the Pre-emption Act, mid-19th century United States',
      hint: `The document is built from legal mechanics rather than description: a fixed opening time ("ten o'clock in the forenoon"), an explicit closing rule ("no sale shall be kept open longer than two weeks"), and the conditional obligation on pre-emption claimants to "establish the same to the satisfaction of the register and receiver." Real notices specify the exact procedure by which a right is lost or preserved. Every clause exists to foreclose a future dispute, which is why the diction is archaic and the deadlines are absolute.`,
    },
    {
      id: 'gov-notices-r2',
      text: `To all whom it may concern: Notice is hereby given that the partnership lately subsisting between the undersigned, carrying on business as grocers and provision dealers, was on this day dissolved by mutual consent.

All debts owing to the said partnership are to be received by the said party of the first part, and all demands on the said partnership are to be presented to him for payment, by whom the same will be settled and discharged in the regular course of business.

Dated this second day of April. Witness our hands the day and year first above written.`,
      isAI: false,
      source: 'Standard notice of dissolution of partnership, 19th-century American legal form',
      hint: `Notices of dissolution follow a rigid template because they exist to fix legal liability at a precise moment: "on this day dissolved by mutual consent," debts "to be received by the said party of the first part." The point of publishing it is to put the world on notice of exactly who now owes and who now collects. The formulaic closing — "Witness our hands the day and year first above written" — is not decoration; it is the attestation clause that makes the instrument binding.`,
    },
    {
      id: 'gov-notices-r3',
      text: `The Board of Health hereby gives notice that, by reason of the prevalence of contagious disease, the premises hereinafter described have been placed in quarantine, and that no person shall enter or leave the said premises without the written permission of the health officer.

All articles of clothing, bedding, and other material capable of conveying infection shall be disinfected in the manner prescribed by the regulations of the Board before removal. Any person violating the provisions of this notice shall be liable to the penalties provided by the statute in such case made and provided.

The quarantine herein established shall continue in force until the same shall be removed by order of the Board, after due inspection and a certificate that all danger of contagion has ceased.`,
      isAI: false,
      source: 'Municipal Board of Health quarantine notice, standard public-health form, late 19th / early 20th century United States',
      hint: `A real quarantine notice states the exact prohibited acts and the exact conditions of release: no entering or leaving "without the written permission of the health officer," continuing "until the same shall be removed by order of the Board, after due inspection and a certificate that all danger of contagion has ceased." It cites the penalty ("liable to the penalties provided by the statute") without describing it, because the statute already fixes it. The authority to act and the procedure to end the action are both named — an AI imitation tends to describe the danger instead.`,
    },
    {
      id: 'gov-notices-r4',
      text: `Notice is hereby given that sealed proposals will be received at this office until 2 o'clock p.m. on the 30th day of September, for furnishing the fuel and stationery required at the several public buildings under the control of this Department during the fiscal year ending June 30th following.

Schedules showing the estimated quantities of each article, and the specifications with which the articles delivered must comply, may be obtained upon application at this office. Each proposal must be accompanied by a bond, with two or more sureties, in a sum equal to the amount of the bid, conditioned for the faithful performance of the contract.

The Department reserves the right to reject any and all bids, and to waive any informality in bids received, should it be deemed in the interest of the Government to do so.`,
      isAI: false,
      source: 'Federal invitation for sealed bids (procurement notice), standard U.S. government contracting form',
      hint: `Procurement notices are engineered to be adversarial-proof: a hard deadline "until 2 o'clock p.m. on the 30th day of September," a bond requirement "with two or more sureties, in a sum equal to the amount of the bid," and the government's escape clause, "reserves the right to reject any and all bids, and to waive any informality." That last boilerplate is the surest tell of a genuine bid solicitation — it exists solely to defeat lawsuits from losing bidders, a concern no AI pastiche thinks to include.`,
    },
    {
      id: 'gov-notices-r5',
      text: `Whereas, it appears that certain persons have unlawfully enclosed portions of the public lands, and have obstructed the free passage and transit over and through the same:

Now, therefore, all persons are hereby warned and commanded to remove any and all such enclosures, and to desist from any further obstruction of the public lands, within a reasonable time from the date of this notice.

Failure to comply herewith will subject the offending parties to the proceedings and penalties prescribed by law, and the enclosures will be removed by the proper officers at the cost and charge of the persons maintaining the same.`,
      isAI: false,
      source: 'Public notice against unlawful enclosure of public lands, U.S. General Land Office, pursuant to the Act of February 25, 1885',
      hint: `The "Whereas … Now, therefore" structure is the recital-and-command form of an official order: it first states the finding of fact that triggers the authority, then issues the command. The consequence is concrete and shifts cost onto the violator — enclosures "will be removed by the proper officers at the cost and charge of the persons maintaining the same." Real enforcement notices name who pays and who acts. The stiff legal joinery ("warned and commanded," "desist from any further obstruction") is period administrative diction, not modern paraphrase.`,
    },
    {
      id: 'gov-notices-ai1',
      text: `In an effort to better serve our community, the Department is pleased to announce several important updates to our public services. These changes reflect our ongoing commitment to transparency, efficiency, and the needs of the residents we are proud to serve.

We understand that navigating government processes can sometimes be challenging. That is why we are working hard to ensure that every interaction with our offices is as smooth and stress-free as possible. Your satisfaction is our top priority.

We encourage all residents to stay informed and to reach out with any questions or concerns. Together, we can build a stronger, more connected community for everyone. Thank you for your continued patience and support as we strive to make a positive difference in your daily lives.`,
      isAI: true,
      hint: `No genuine government notice reassures you about your feelings. This one has no effective date, no authority cited, no defined term, no penalty, no procedure — only sentiment: "commitment to transparency," "as smooth and stress-free as possible," "your satisfaction is our top priority." A real notice exists to change legal rights or obligations on a specific date; this one announces "several important updates" without naming a single one. The warmth is the tell — administrative law is not written to make you feel connected.`,
    },
    {
      id: 'gov-notices-ai2',
      text: `The City is excited to share news about an upcoming initiative designed to enhance the quality of life for all of our valued residents. This forward-thinking program represents a bold step toward a more sustainable and inclusive future.

As part of our holistic approach to community development, we will be rolling out a range of exciting improvements in the coming months. From infrastructure to public spaces, these enhancements are thoughtfully crafted with you in mind.

We believe that meaningful change happens when we work together. We invite every member of our community to join us on this exciting journey as we reimagine what our city can be. Stay tuned for more details, and thank you for being an essential part of this transformative process.`,
      isAI: true,
      hint: `"Enhance the quality of life," "holistic approach," "reimagine what our city can be" — this is a marketing brochure wearing a municipal seal. The giveaway is that nothing is actionable: no dates, no locations, no ordinance number, no obligation created or removed. Real notices are dated and specific because they carry legal force; "stay tuned for more details" is the opposite of a notice. The vocabulary of enthusiasm ("excited," "bold step," "exciting journey") never appears in an authentic administrative document, whose entire purpose is to be dull, precise, and binding.`,
    },
    {
      id: 'gov-notices-ai3',
      text: `Please be advised that new guidelines are now in effect regarding the use of public facilities. These guidelines have been developed with careful consideration of community feedback and best practices from around the country.

Our goal is to create a welcoming and safe environment for everyone. We kindly ask that all visitors be respectful of one another and mindful of shared spaces. By working together and treating each other with kindness, we can ensure that these facilities remain a valuable resource for generations to come.

Should you have any questions about how these guidelines may apply to you, we warmly encourage you to contact our friendly staff, who are always happy to help. We appreciate your cooperation and look forward to continuing to serve you.`,
      isAI: true,
      hint: `A real "guidelines now in effect" notice would enumerate the guidelines and cite the rule that authorizes them; this one describes their vibe ("welcoming and safe," "mindful of shared spaces") and never states a single rule. "Best practices from around the country" is exactly the kind of unfalsifiable sourcing AI reaches for in place of a statutory citation. And no government body has "friendly staff, who are always happy to help" — the customer-service register is imported wholesale from retail copy, which is the clearest signal it was not written by an administrator.`,
    },
    {
      id: 'gov-notices-ai4',
      text: `The Agency wishes to remind the public of the importance of staying informed during this time. As circumstances continue to evolve, we remain dedicated to providing timely and accurate information to help you make the best decisions for yourself and your loved ones.

We recognize that periods of uncertainty can be difficult, and we want you to know that we are here for you every step of the way. Our team is monitoring the situation closely and will provide updates as they become available.

In the meantime, we encourage everyone to remain calm, look out for one another, and follow official guidance. By staying united and supporting our neighbors, we will get through this together. Your health, safety, and well-being remain our highest priority.`,
      isAI: true,
      hint: `This is the "during this time" advisory that says nothing: "as circumstances continue to evolve," "updates as they become available," "follow official guidance" — while never stating what the circumstance is, what the guidance says, or what the reader must do. A real emergency notice names the hazard, the required action, and the authority. The emotional scaffolding ("we are here for you every step of the way," "we will get through this together") is the reflexive AI closer, substituting solidarity for instruction. An official notice informs or commands; it does not console.`,
    },
  ],
};

export default domain;
