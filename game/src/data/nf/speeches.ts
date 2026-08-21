import type { Author } from '@/types/game';

const domain: Author = {
  id: 'speeches',
  name: 'Speeches',
  years: '2024–2026',
  nationality: 'Heads of Government & Public Life',
  knownFor: 'Political addresses and public statements',
  snippets: [
    {
      id: 'speeches-r1',
      text: `Solidarity, social friendship, and gratuitous love can open up new horizons in politics, economics, and civil life. We live in times of wicked wars, growing inequality, while very small oligarchies amass power superior to that of many sovereign states. It is from the humanity of women and men that we can draw the energy to reject conformity, passivity, hatred, and aversion to diversity and foreigners, and to educate for peace. I hope the Meeting, and all those who will participate in the Rimini days, will continue to generously build horizons of humanity.`,
      isAI: false,
      source: 'President Sergio Mattarella, message to the Rimini Meeting (via ANSA), Italy, 21 August 2026 — ansa.it (short excerpt)',
      hint: `A real address carries the speaker's idiosyncratic register — "gratuitous love," "wicked wars," "horizons of humanity" — phrasing translated from a specific person's Italian, not smoothed into international boilerplate. And it names a concrete target: "very small oligarchies amass power superior to that of many sovereign states." AI speechwriting reaches for "shared values" and "a brighter future"; a human speaker reaches for an unusual word and a pointed claim.`,
    },
    {
      id: 'speeches-r2',
      text: `Almost 70 years ago, in April 1956, this room was the setting of a major Cold War summit. Where Nikita Khrushchev came, after Stalin's death, with a delegation from the USSR. On the way here he stopped by Claridge's. Clearly nothing is too good for the workers. Before coming for dinner here, with Clement Attlee and Anthony Eden. Mansion House was done up, looking its finest. The Lord Mayor gave a speech. And the team put on a delicious spread, as always. It was a huge effort. But we know now, looking back at history…the charm offensive didn't really work.`,
      isAI: false,
      source: 'Peter Kyle MP, Mansion House Speech (gov.uk, Open Government Licence), United Kingdom, 3 September 2025 — gov.uk',
      hint: `The dry aside is the giveaway of a human writer: "On the way here he stopped by Claridge's. Clearly nothing is too good for the workers." That's a joke a person makes, timed with sentence fragments and a trailing "…the charm offensive didn't really work." It's anchored to specific history (April 1956, Khrushchev, Attlee, Eden). AI speeches don't risk irony or a specific dated anecdote; they stay earnest and general.`,
    },
    {
      id: 'speeches-r3',
      text: `Take the Drive Partnership. Now, this is a fantastic initiative led by a coalition of civil society organisations. They've worked with the police to tackle the drivers of domestic abuse – a really serious issue, hard to deal with, and it is integral to the work we're doing in government in our Safer Streets mission.

So today, working together in the spirit of partnership, we're announcing a £53 million investment to roll out the Drive Project nationally across England and Wales.

Delivering together in partnership, taking forward the initiative that you've brought forward to us and recognising your power to reach into places government can't.`,
      isAI: false,
      source: 'Prime Minister Keir Starmer, Civil Society Summit (gov.uk, Open Government Licence), United Kingdom, 17 July 2025 — gov.uk',
      hint: `A real policy speech names the specific programme (the Drive Partnership), the specific sum (£53 million), and the specific scope (England and Wales). The slightly halting delivery — "a really serious issue, hard to deal with" — reads as a person talking, not a script. AI-written political speech announces "significant investment" in "vital initiatives" without ever landing on the programme's name or the number of pounds.`,
    },
    {
      id: 'speeches-r4',
      text: `We will honour the commitment made by the previous government… to provide £11.6 billion in of climate finance between April 2021 and March 2026…. But we must use public finance as a multiplier… To unlock much more private investment… And reform our international financial institutions. Today we launch the new CIF Capital Market Mechanism, listed on the London Stock Exchange… With the potential to mobilise up to $75 billion… in additional climate capital for developing countries over the next decade.`,
      isAI: false,
      source: 'Prime Minister Keir Starmer, National Statement at COP29 (gov.uk, Open Government Licence), United Kingdom / Baku, 12 November 2024 — gov.uk',
      hint: `The passage is specific to the point of naming a financial instrument — "the new CIF Capital Market Mechanism, listed on the London Stock Exchange" — with exact figures (£11.6 billion, "$75 billion," dated to "April 2021 and March 2026"). Even a small transcription artefact ("£11.6 billion in of climate finance") betrays a real human transcript. AI climate rhetoric offers "ambitious commitments" and "bold action"; this offers a listed vehicle and a decade.`,
    },
    {
      id: 'speeches-ai1',
      text: `My friends, we gather here today at a pivotal moment in our shared journey. The challenges before us are real, but so too is our capacity to meet them — together, with courage, with unity, and with an unwavering belief in a better tomorrow.

Let me be clear: the road ahead will not be easy. But history has shown us, time and again, that when we stand together, there is nothing we cannot achieve. We owe it to ourselves, and to future generations, to rise to this moment.

So let us move forward — not with fear, but with hope. Not divided, but united. For the future is ours to shape, and the time to act is now.`,
      isAI: true,
      hint: `This could be delivered by anyone, anywhere, about anything — which is exactly the problem. There is no programme, no figure, no place, no dated fact, no person. It runs on rally-cadence tricolons ("with courage, with unity, and with an unwavering belief") and stock uplift ("a better tomorrow," "the time to act is now," "Let me be clear"). A real speech commits to a specific thing it will do; this commits only to a mood.`,
    },
    {
      id: 'speeches-ai2',
      text: `Today, we stand at a crossroads. The decisions we make now will shape the world our children inherit. That is why we must come together — across borders, across divides — to build a future rooted in fairness, opportunity, and dignity for all.

We know the challenges are complex and the stakes are high. But we also know that progress is possible when we choose collaboration over conflict, and hope over despair.

Let us seize this opportunity with both hands. Let us prove that, even in uncertain times, humanity is capable of extraordinary things. Together, we can and we will build a brighter, more inclusive world for generations to come.`,
      isAI: true,
      hint: `"We stand at a crossroads," "the world our children inherit," "a future rooted in fairness, opportunity, and dignity" — every phrase is a prefabricated module. The passage names no policy and no number because it was generated to sound statesmanlike rather than to announce anything. The repeated "Let us…" and "Together, we can and we will" are rhythm standing in for content. Compare a real speech, which would tell you the sum and the scheme.`,
    },
    {
      id: 'speeches-ai3',
      text: `It is a profound honour to be here with you all today. As I look out across this room, I am reminded of the incredible power of community — of what we can accomplish when we come together in pursuit of a common goal.

Over the past year, we have faced our share of challenges. But through it all, we have remained resilient, guided by our values and our shared commitment to doing what is right.

As we look to the future, let us carry that spirit forward. Let us continue to lift one another up, to champion those who need it most, and to never lose sight of the values that unite us. Thank you, and may we go forward together.`,
      isAI: true,
      hint: `A real "thank you" speech is full of particular people, a specific achievement, a named year's events. This one gestures at "our share of challenges" and "the values that unite us" without ever naming a challenge or a value. "The incredible power of community," "lift one another up," "champion those who need it most" are warm, weightless, and interchangeable. The absence of a single concrete referent is the fingerprint.`,
    },
    {
      id: 'speeches-ai4',
      text: `Ladies and gentlemen, we live in a time of unprecedented change. The pace of transformation touches every aspect of our lives, presenting both remarkable opportunities and significant challenges.

Now, more than ever, we must embrace innovation while never losing sight of our core principles. We must ensure that progress serves everyone — leaving no one behind — and that the benefits of this new era are shared by all.

This is not a task for government alone, nor for any one sector. It is a shared responsibility, one that calls on each of us to play our part. Together, let us shape a future defined not by division, but by our common humanity and our boundless potential.`,
      isAI: true,
      hint: `"A time of unprecedented change," "remarkable opportunities and significant challenges," "leaving no one behind," "our boundless potential" — a full house of AI speech clichés. It even performs even-handedness ("not a task for government alone, nor for any one sector") to avoid committing to who does what. Real speeches on change name the technology, the law, or the pound figure; this one names nothing and lets the abstractions carry the applause.`,
    },
  ],
};

export default domain;
