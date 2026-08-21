import type { Author } from '@/types/game';

const domain: Author = {
  id: 'policy-briefs',
  name: 'Policy Briefs',
  years: '1787–present',
  nationality: 'Public Policy',
  knownFor: 'Problem analysis, options, and recommendations for decision-makers',
  snippets: [
    {
      id: 'policy-briefs-r1',
      text: `It has been frequently remarked that it seems to have been reserved to the people of this country, by their conduct and example, to decide the important question, whether societies of men are really capable or not of establishing good government from reflection and choice, or whether they are forever destined to depend for their political constitutions on accident and force.

If there be any truth in the remark, the crisis at which we are arrived may with propriety be regarded as the era in which that decision is to be made; and a wrong election of the part we shall act may, in this view, deserve to be considered as the general misfortune of mankind.

This idea will add the inducements of philanthropy to those of patriotism, to heighten the solicitude which all considerate and good men must feel for the event. Happy will it be if our choice should be directed by a judicious estimate of our true interests, unperplexed and unbiased by considerations not connected with the public good.`,
      isAI: false,
      source: 'Alexander Hamilton, Federalist No. 1, 1787',
      hint: `Hamilton frames the whole ratification debate as one falsifiable proposition: can men build government "from reflection and choice" rather than "accident and force." He then names the specific bias he wants readers to guard against — decisions "unperplexed and unbiased by considerations not connected with the public good" — an admission that self-interest will distort the coming argument. The stakes are pinned to a single decidable question, not to vague aspiration.`,
    },
    {
      id: 'policy-briefs-r2',
      text: `Ambition must be made to counteract ambition. The interest of the man must be connected with the constitutional rights of the place. It may be a reflection on human nature, that such devices should be necessary to control the abuses of government. But what is government itself, but the greatest of all reflections on human nature? If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary.

In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself. A dependence on the people is, no doubt, the primary control on the government; but experience has taught mankind the necessity of auxiliary precautions.`,
      isAI: false,
      source: 'James Madison, Federalist No. 51, 1788',
      hint: `Madison proposes a concrete mechanism, not a hope: rival ambitions structurally checking each other, "the interest of the man" tied to "the constitutional rights of the place." He states the tradeoff plainly — dependence on the people is the primary control, but "auxiliary precautions" are needed because that control is insufficient. "If men were angels" is a period argument that concedes its own premise about human nature rather than flattering it.`,
    },
    {
      id: 'policy-briefs-r3',
      text: `Society can and does execute its own mandates: and if it issues wrong mandates instead of right, or any mandates at all in things with which it ought not to meddle, it practises a social tyranny more formidable than many kinds of political oppression, since, though not usually upheld by such extreme penalties, it leaves fewer means of escape, penetrating much more deeply into the details of life, and enslaving the soul itself.

Protection, therefore, against the tyranny of the magistrate is not enough: there needs protection also against the tyranny of the prevailing opinion and feeling; against the tendency of society to impose, by other means than civil penalties, its own ideas and practices as rules of conduct on those who dissent from them.

The object of this Essay is to assert one very simple principle, as entitled to govern absolutely the dealings of society with the individual in the way of compulsion and control.`,
      isAI: false,
      source: 'John Stuart Mill, On Liberty, 1859',
      hint: `Mill isolates a specific and non-obvious problem — "social tyranny" by prevailing opinion — and argues it is worse than legal coercion for a named reason: it penetrates deeper and "leaves fewer means of escape." He then announces the brief will rest on "one very simple principle" governing compulsion, committing to a single decidable rule rather than hedging. The distinction between magistrate and majority is a real analytic move, not a rhetorical flourish.`,
    },
    {
      id: 'policy-briefs-r4',
      text: `The circulation of confidence is better than the circulation of money. Money can never do the business of the country in that state of universal distrust to which these two banks have brought it, and thence to a universal prostration of credit and confidence.

I trust, therefore, that the practice of the Bank, in loaning out money on interest, and thereby increasing the mass of circulating medium, will be seen to be a fraud upon the community, and will be discontinued. But if it be persisted in, the remedy is in the hands of the State: to tax the paper of the banks out of circulation, and to substitute a metallic medium, or a paper issued directly by the public, and receivable in all public dues.`,
      isAI: false,
      source: 'Thomas Jefferson, Letter to John Wayles Eppes, 1813',
      hint: `Jefferson names a concrete policy instrument — "tax the paper of the banks out of circulation" and substitute either metal or state-issued paper "receivable in all public dues." That is a specific, checkable mechanism with a stated fallback if the banks refuse. The aphorism ("circulation of confidence is better than the circulation of money") is deployed to support a recommendation with teeth, not to close a paragraph decoratively.`,
    },
    {
      id: 'policy-briefs-r5',
      text: `Society is produced by our wants, and government by our wickedness; the former promotes our happiness positively by uniting our affections, the latter negatively by restraining our vices. The one encourages intercourse, the other creates distinctions. The first is a patron, the last a punisher.

Here then is the origin and rise of government; namely, a mode rendered necessary by the inability of moral virtue to govern the world; here too is the design and end of government, viz. freedom and security. And however our eyes may be dazzled with show, or our ears deceived by sound; however prejudice may warp our wills, or interest darken our understanding, the simple voice of nature and of reason will say, it is right.`,
      isAI: false,
      source: 'Thomas Paine, Common Sense, 1776',
      hint: `Paine builds a tight definitional argument: society and government have distinct origins (wants vs. wickedness) and distinct functions (uniting affections vs. restraining vice). From that distinction he derives the single "design and end of government" — "freedom and security" — a testable claim you could hold a policy against. The parallel antitheses ("patron... punisher") do analytic work, sorting two things readers routinely confuse.`,
    },
    {
      id: 'policy-briefs-ai1',
      text: `This brief examines the multifaceted challenge of urban housing affordability, a complex and evolving issue that touches virtually every segment of the community. It is important to note that housing sits at the intersection of numerous interrelated factors, and any meaningful response must account for the full spectrum of stakeholder perspectives.

On one hand, expanding supply may help ease pressure on prices over time. On the other hand, growth must be balanced against the legitimate concerns of existing residents and the broader goals of sustainable development. Both considerations carry weight, and neither should be dismissed.

Ultimately, addressing affordability will require a collaborative, holistic approach that brings together policymakers, developers, community advocates, and residents in an ongoing dialogue. By fostering engagement and leveraging synergies across sectors, decision-makers can work toward solutions that are both equitable and forward-looking, ensuring that the needs of all stakeholders are thoughtfully considered as we navigate this important conversation together.`,
      isAI: true,
      hint: `Every hallmark of AI policy prose: "multifaceted challenge," "complex and evolving," "it is important to note," and a textbook "on one hand / on the other hand" that assigns no weight to either side. It recommends "a collaborative, holistic approach" and "ongoing dialogue" — process words that commit to no mechanism, no number, and no tradeoff actually chosen. Stakeholders are listed but nothing is decided.`,
    },
    {
      id: 'policy-briefs-ai2',
      text: `The question of regulating emerging technologies presents both significant opportunities and important challenges for governments around the world. As innovation continues to accelerate, it is essential that regulatory frameworks remain both robust and adaptable to the changing landscape.

There are, of course, valid arguments on multiple sides of this debate. Proponents of lighter-touch approaches emphasize the value of flexibility and innovation, while advocates for stronger oversight highlight the importance of accountability and public trust. Each of these perspectives offers meaningful insights that merit careful consideration.

Moving forward, the most prudent path is likely one that strikes an appropriate balance between competing priorities. By engaging a diverse array of stakeholders and remaining responsive to emerging trends, policymakers can help ensure that regulation keeps pace with innovation while safeguarding the interests of the public. A measured, principle-based approach will be key to achieving outcomes that serve everyone effectively.`,
      isAI: true,
      hint: `The giveaway is that it never names a policy. "Robust and adaptable," "an appropriate balance," "measured, principle-based approach" — the recommendation is to be balanced, which recommends nothing. Both sides are summarized with perfect symmetry and no criterion for choosing. There is not one number, threshold, mechanism, or named tradeoff in the entire piece; the prose performs even-handedness in place of analysis.`,
    },
    {
      id: 'policy-briefs-ai3',
      text: `Improving public health outcomes remains a critical priority that requires sustained attention from leaders across every level of government. This brief seeks to highlight some of the key considerations that should inform the ongoing conversation around this vital issue.

It is worth noting that public health is inherently complex, shaped by a wide range of social, economic, and environmental determinants. As such, no single intervention can be expected to address the full scope of the challenge. Rather, progress will depend on a comprehensive strategy that reflects the diverse needs of the populations we serve.

To that end, we encourage decision-makers to prioritize collaboration, invest in evidence-based practices, and foster an environment of continuous improvement. By working together across sectors and remaining attentive to the voices of affected communities, we can build a healthier, more resilient future for all. The path forward will not be simple, but with commitment and cooperation, meaningful progress is well within reach.`,
      isAI: true,
      hint: `"Evidence-based practices" appears with no evidence and no named practice. The recommendations — "prioritize collaboration," "foster continuous improvement," "work together across sectors" — are content-free verbs of good intention. It leans on "it is worth noting" and "inherently complex," gestures at "social, economic, and environmental determinants" without picking one, and closes with an uplift ("well within reach") that no real brief facing tradeoffs would offer.`,
    },
    {
      id: 'policy-briefs-ai4',
      text: `As governments consider reforms to the education system, it is important to approach the issue with both ambition and humility. Education is a cornerstone of opportunity, and the decisions made today will shape outcomes for generations to come.

Stakeholders across the spectrum — including educators, parents, students, administrators, and community partners — each bring valuable and unique perspectives to the table. It is essential that any reform effort meaningfully incorporates this rich diversity of viewpoints, ensuring that no voice is left unheard in the process.

While there is broad agreement on the importance of quality education, there remain differing views on how best to achieve it. A thoughtful, inclusive process that balances innovation with proven approaches will be instrumental in charting a path forward. By centering equity, embracing collaboration, and remaining open to new ideas, we can create an education system that empowers every learner to thrive in an increasingly interconnected world.`,
      isAI: true,
      hint: `A parade of stakeholders "at the table" and a promise that "no voice is left unheard" substitute for any actual choice among reforms. It concedes "differing views on how best to achieve it" and then declines to adjudicate them, recommending only a "thoughtful, inclusive process." Phrases like "centering equity," "embracing collaboration," and "increasingly interconnected world" are affect without policy — no funding, no metric, no tradeoff named.`,
    },
  ],
};

export default domain;
