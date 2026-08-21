import type { Author } from '@/types/game';

const domain: Author = {
  id: 'investigative',
  name: 'Investigative Reports',
  years: '1880s–present',
  nationality: 'Muckraking & Reportage',
  knownFor: 'Documented exposés built from evidence and firsthand observation',
  snippets: [
    {
      id: 'investigative-r1',
      text: `The thing that stands out most strongly in the history of the Standard Oil Company is the persistency with which it has pursued a single policy — that of getting control of the transportation of oil, and using that control to crush its competitors.

Mr. Rockefeller and his associates did not build the Standard Oil Company in the board rooms of Wall Street banks. They fought their way to control by rebate and drawback, bribe and blackmail, espionage and price cutting, by ruthless efficiency and unfailing loyalty to a single idea. From the beginning they never questioned that the oil business belonged to them.

It was a marvelous piece of work, this welding of a hundred quarrelsome concerns into one great machine. But it was done at the cost of every principle of fair dealing which the men who did it professed in church on Sunday.`,
      isAI: false,
      source: 'In the manner of Ida M. Tarbell, "The History of the Standard Oil Company" (1904)',
      hint: `Investigative reporting indicts through documented mechanism, not adjectives: the Standard's method is named specifically — "rebate and drawback, bribe and blackmail, espionage and price cutting." The charge is falsifiable because it points at a single, provable policy ("getting control of the transportation of oil"). Tarbell's method was to let the paper trail convict; the moral judgment ("professed in church on Sunday") lands only because it sits on top of a mountain of specifics. AI imitations reverse this — the outrage arrives first and the evidence never does.`,
    },
    {
      id: 'investigative-r2',
      text: `Look into any air-shaft at night and you will see a hundred windows, each with its story of grinding poverty. The tenement is the hot-bed of the epidemics that carry death to rich and poor alike; the nursery of pauperism and crime that fill our jails and police courts; that throw off a scum of forty thousand human wrecks to the island asylums and workhouses year by year.

In its darkest corners the tenement grows its worst crop. I counted the other day the little ones, up and down a single street, who were kept at home because they had no shoes. There were more than forty. Their fathers work, when there is work; their mothers sew from dawn to midnight for wages that a decent man would blush to offer.`,
      isAI: false,
      source: 'In the manner of Jacob A. Riis, "How the Other Half Lives" (1890)',
      hint: `Riis reports what he counted: "more than forty" children kept home for want of shoes, "forty thousand human wrecks" a year. The exposé is anchored to a specific place he stood ("up and down a single street") and a specific act of observation ("I counted the other day"). Firsthand witness plus a hard number is the muckraker's signature. Note the causal chain — tenement to epidemic to pauperism to jail — is asserted as a documented sequence, not gestured at. The indignation is earned by the ledger beneath it.`,
    },
    {
      id: 'investigative-r3',
      text: `The misgovernment of the American city is the most conspicuous failure of American institutions. In the details of it the boss and the ring are only the instruments; the real cause lies deeper, in the indifference of the citizen who is too busy making money to attend to his own affairs.

I went to St. Louis and found the boodler in full control of the municipal assembly. I went to Minneapolis and found the mayor himself at the head of the ring, sharing in the plunder of the town he was sworn to govern. In Pittsburg the graft ran through the police to the highest offices. Everywhere the story was the same — the businessman, respectable and respected, buying from the politician the privileges he could not obtain by right.`,
      isAI: false,
      source: 'In the manner of Lincoln Steffens, "The Shame of the Cities" (1904)',
      hint: `Steffens builds the case city by city with named places and offices: St. Louis's municipal assembly, the Minneapolis mayor "at the head of the ring," Pittsburg's police graft. The pattern ("everywhere the story was the same") is demonstrated by enumeration, not merely claimed. And he locates the mechanism precisely — the respectable businessman "buying from the politician the privileges he could not obtain by right." Real investigation names the office, the city, and the transaction; the thesis about civic indifference is a conclusion drawn from cases, not a mood.`,
    },
    {
      id: 'investigative-r4',
      text: `The girls are paid by the piece, and the price is cut whenever a hand grows too skillful and begins to earn what the firm considers too much. I talked with a woman who finished trousers at seven cents a pair, and who, by working from six in the morning until nine at night, could complete three dozen in a day. Out of her wage she paid for her own thread and for the rent of the machine at which she sat.

When I asked the foreman how a family might live upon such earnings, he shrugged and answered that the girls had fathers and brothers, and that the work was never meant to keep them. The account books, which I was permitted to see, told a plainer story than the foreman: of fines for lateness, fines for flawed stitching, and a payday that came a week in arrears.`,
      isAI: false,
      source: 'In the manner of the sweatshop investigations of Nellie Bly and the labor reporters of the 1880s–90s',
      hint: `The report converts a wage into arithmetic the reader can check: seven cents a pair, three dozen in a fifteen-hour day, minus thread and machine rent. The reporter goes to the source ("the account books, which I was permitted to see") and quotes the foreman's own justification against him. Concrete deductions — "fines for lateness, fines for flawed stitching" — are the documentary detail that survives fact-checking. Muckraking works by making the exploitation calculable; an AI version would call the wages "shockingly low" and name no figure.`,
    },
    {
      id: 'investigative-r5',
      text: `I asked to see the certificates of inspection, and after some delay they were produced. Of the fourteen boilers in the plant, eleven bore dates more than three years old, and two had never been inspected at all. The superintendent explained that the state inspector was a reasonable man who understood the pressures of business and did not insist on the letter of the law.

When I put the same question to the inspector, he denied ever having entered the building. His signature, however, appeared upon four of the certificates. I have both statements in writing, and the certificates are photographed. It is not my purpose to say which man is lying. It is my purpose to say that the boilers carry a hundred and sixty pounds of steam, and that six hundred men work within thirty feet of them.`,
      isAI: false,
      source: 'In the manner of Progressive-era industrial safety exposés, c. 1900–1911',
      hint: `The reporter forces a documentary contradiction into the open: the superintendent cites a lenient inspector; the inspector "denied ever having entered the building," yet "his signature appeared upon four of the certificates." Crucially, the writer refuses to overreach — "it is not my purpose to say which man is lying" — and instead pins the reader to the physical stakes: "a hundred and sixty pounds of steam," "six hundred men work within thirty feet." Withholding the accusation while nailing down the facts is a discipline unique to real investigation.`,
    },
    {
      id: 'investigative-ai1',
      text: `A growing body of concern surrounds the practices of certain corporations, which critics say may be putting profits ahead of people. While the full picture remains unclear, questions continue to mount about whether enough is being done to protect the public interest.

Industry insiders, speaking on background, suggest that the situation is more complicated than it appears. Some argue that regulation has failed to keep pace with a rapidly changing landscape. Others contend that the companies themselves bear responsibility for a culture that prioritizes growth at any cost.

What is clear is that these are serious questions that deserve serious answers. As scrutiny intensifies, one thing is certain: the public deserves transparency, and those in power must be held accountable. Only time will tell whether meaningful change will follow.`,
      isAI: true,
      hint: `This is all frame and no evidence. Not one company, figure, document, date, or named person appears — only "certain corporations," "critics say," "industry insiders, speaking on background." Real investigation is a pile of specifics; this is a pile of hedges ("may be," "questions continue to mount," "the full picture remains unclear"). The closer — "the public deserves transparency, and those in power must be held accountable... only time will tell" — is editorial boilerplate that could be appended to any story ever written. An exposé that exposes nothing was generated, not reported.`,
    },
    {
      id: 'investigative-ai2',
      text: `Behind closed doors, a troubling story is beginning to emerge. Sources familiar with the matter paint a picture of an organization shrouded in secrecy, where accountability appears to be in short supply.

Though details are still coming to light, the allegations raise serious red flags. Experts warn that the implications could be far-reaching, potentially affecting countless individuals who placed their trust in the institution. The lack of transparency, they say, is deeply concerning.

Attempts to obtain a comment were met with silence. This refusal to engage only deepens the mystery and fuels speculation about what the organization may be trying to hide. As the investigation unfolds, the public will be watching closely, demanding the answers they rightfully deserve.`,
      isAI: true,
      hint: `The prose is a thesaurus of insinuation with no object: "shrouded in secrecy," "red flags," "the mystery," "what the organization may be trying to hide." It manufactures suspicion from the absence of facts rather than the presence of them — even the silence is spun as evidence ("this refusal to engage only deepens the mystery"). A real reporter treats "no comment" as a dead end and goes to the documents; the AI treats it as a dramatic beat. Note there is still no name, place, sum, or date — the entire "investigation" is atmosphere.`,
    },
    {
      id: 'investigative-ai3',
      text: `In recent years, mounting evidence has suggested that all is not well within the industry. Whistleblowers have come forward with accounts that, if true, would represent a significant breach of public trust.

The pattern, observers note, is a familiar one: a powerful entity, a vulnerable population, and a system that seems designed to look the other way. Advocates have long warned of these dangers, but their voices, they say, have too often gone unheard.

Now, as public awareness grows, there are signs that the tide may be turning. Calls for reform are growing louder, and pressure is building on lawmakers to act. Whether that pressure will translate into real accountability, however, remains to be seen. The stakes, for those affected, could not be higher.`,
      isAI: true,
      hint: `"Mounting evidence has suggested" — but the evidence is never shown, only that it is mounting. The passage runs entirely on abstraction slots: "a powerful entity, a vulnerable population, and a system that seems designed to look the other way." That is a Mad Libs template for an exposé, not an exposé. The conditional "accounts that, if true" quietly excuses the writer from verifying anything. And the arc — awareness grows, calls for reform, "remains to be seen" — is the stock shape of a story with no reporting inside it. Genuine muckraking names the entity and the population.`,
    },
    {
      id: 'investigative-ai4',
      text: `An investigation has revealed what many had long suspected: that beneath the polished surface lies a far more complicated reality. The findings, while not yet fully confirmed, point to a troubling disconnect between what was promised and what was delivered.

Multiple sources have described an environment where warning signs were ignored and difficult questions went unasked. Time and again, it seems, opportunities to do the right thing were missed. The consequences of these failures, critics argue, are still being felt today.

As with so many stories of this kind, the truth is likely to be messy, and accountability difficult to pin down. But one lesson is already clear: when institutions fail to police themselves, it falls to the public — and to a free press — to demand better.`,
      isAI: true,
      hint: `It opens by claiming a result — "an investigation has revealed" — then immediately retracts the claim's substance: "while not yet fully confirmed," "point to a troubling disconnect." A real lede states what was found; this one states that finding occurred. Every actor is generic ("multiple sources," "critics argue") and every fact is a category ("warning signs were ignored," "difficult questions went unasked"). The self-congratulatory sign-off about "a free press" is the AI performing the role of investigative journalism while producing none of its content — no document was read, because none exists.`,
    },
  ],
};

export default domain;
