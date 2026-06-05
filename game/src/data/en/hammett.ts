import type { Author } from '@/types/game';

const author: Author = {
  id: 'hammett',
  name: 'Dashiell Hammett',
  years: '1894–1961',
  nationality: 'American',
  knownFor: 'The Maltese Falcon',
  snippets: [
    {
      id: 'hammett-r1',
      text: `Samuel Spade's jaw was long and bony, his chin a jutting v under the more flexible v of his mouth. His nostrils curved back to make another, smaller, v. His yellow-grey eyes were horizontal. The v motif was picked up again by thickish brows rising outward from twin creases above a hooked nose, and his pale brown hair grew down — from high flat temples — in a point on his forehead. He looked rather pleasantly like a blond satan.`,
      isAI: false,
      source: 'The Maltese Falcon, Ch. 1',
      hint: 'Hammett builds Spade\'s face as pure geometry — five separate V-shapes catalogued without a trace of atmosphere. "He looked rather pleasantly like a blond satan" lands as conclusion, not as literary flourish; it follows the inventory the way a Pinkerton report follows a subject description. The word "rather" does all the tonal work. No AI imitation produces a face by counting its angles.',
    },
    {
      id: 'hammett-r2',
      text: `The girl said: "I don't know exactly what it is I want to tell you."
      Spade's face was patient as he waited.
      She looked at her hands, then out the window, then at the desk-top, and finally at Spade again. "My sister," she began. "I haven't seen her for six months. She went to San Francisco and I didn't hear from her until last week. She telephoned me. She was frightened — terribly frightened. She said she was in the most awful trouble but she wouldn't say what it was, only that she had to have help — money — and couldn't go to our family or anyone at home."
      Spade listened with polite interest. His face showed no more than that.`,
      isAI: false,
      source: 'The Maltese Falcon, Ch. 1',
      hint: 'What is not in this passage is as important as what is. Hammett gives us Spade\'s face twice — "patient," then "polite interest" — and both descriptions are functional rather than evaluative. The reader is not told whether Spade believes the story. "His face showed no more than that" is a Hammett signature: the narrator observes surfaces and stops. The girl\'s evasiveness is rendered through her eyes moving to hands, window, desk — a sequence, not an interpretation.',
    },
    {
      id: 'hammett-r3',
      text: `Spade shut his office door behind him and went to his desk. He sat down and lighted a cigarette. He smoked it to the end without moving. Then he got up and got his hat from the hook on the coat-rack and left the office. He went to a cigar store on Kearny Street and used a telephone.
      He said: "Yes, give me Lieutenant Dundy." He waited. Then: "Dundy? This is Spade. Miles Archer was shot last night on Bush Street just below Stockton. I just heard about it." He listened a moment, said "Right," and hung up.`,
      isAI: false,
      source: 'The Maltese Falcon, Ch. 2',
      hint: 'Archer is his partner and Spade\'s response is to sit, smoke a cigarette to its end, and make a businesslike phone call. There is no grief, no surprise registered, no interiority at all — we get the cigarette burned down and one word of acknowledgment on the phone. Hammett\'s refusal to editorialize here is total. The reader must supply everything the prose withholds: that Spade is processing something, deciding something. The narration stays on the surface like a surveillance report.',
    },
    {
      id: 'hammett-r4',
      text: `The first thing I did in Personville was get rid of a headache that had been riding me all the way from Ogden. A few shots of decent bourbon did the work. Then I ate, and then I went up to the Pacific Hotel and registered.
      When I had washed up and changed my clothes I telephoned the chief of police, Noonan, and he said he could see me at four o'clock.
      It was then a little after three. I went out and killed time by walking around looking at the city. What I could see of it didn't impress me. It was an ugly city of forty thousand people, set in an ugly notch between two ugly mountains that had been all dirtied up by mining.`,
      isAI: false,
      source: 'Red Harvest, Ch. 1',
      hint: 'The Op reports his movements like a case file: arrive, treat headache, eat, hotel, phone call, walk. "An ugly city of forty thousand people, set in an ugly notch between two ugly mountains that had been all dirtied up by mining" — three uses of ugly, zero elaboration. The phrase "dirtied up" is colloquial and dismissive rather than atmospheric. Hammett wrote from Pinkerton fieldwork; this reads like a progress report to the home office, not a description designed to make you feel anything about Personville.',
    },
    {
      id: 'hammett-r5',
      text: `Gutman leaned forward and said earnestly: "I'll tell you right out, sir, that I'm a man who likes to talk to a man that likes to talk."
      "Swell. Will we talk about the black bird?"
      The fat man laughed and his bulges jiggled. "You're the man for me, sir, a man cut to my pattern." He held out a pudgy hand. "Let's drink to that."
      They drank. Gutman refilled their glasses.
      "Come, sir," he said jovially, "let's not be tiresome. What's your price? I pay liberally, you can see that. Am I right?"
      "You're right," Spade said. "Only I don't know what you want to buy."`,
      isAI: false,
      source: 'The Maltese Falcon, Ch. 13',
      hint: 'Gutman\'s rhetoric is florid and self-congratulatory — "a man cut to my pattern" — but Spade\'s replies are minimal: "Swell." "You\'re right." The dialogue is a power negotiation conducted entirely through indirection. Neither man names the actual subject until Spade forces the issue with "I don\'t know what you want to buy." The fat man\'s bulges "jiggling" when he laughs is pure Hammett — physical and precise without being comic or cruel. Every descriptive detail earns its place by telling us something about the character\'s body in that moment.',
    },
    {
      id: 'hammett-ai1',
      text: `The woman who came through the door was trouble, and Spade recognized it the instant he saw her — the kind of trouble that starts reasonable and ends badly, that makes you regret every decision that led up to the moment of meeting. He studied her while she settled into the chair across from him: the careful composure, the slight tension around the eyes, the hands arranged too deliberately in her lap. He had seen that combination before. It meant she was frightened and trying not to show it, and that whatever she was frightened of was real enough to make the effort necessary. He reached for his makings and began to build a cigarette. He would hear her out. He always heard them out.`,
      isAI: true,
      hint: 'The tell is in the first sentence and the last. "Trouble, and Spade recognized it the instant he saw her — the kind of trouble that starts reasonable and ends badly" gives us Spade\'s interpretation of the woman before she opens her mouth. Real Hammett never enters Spade\'s predictive judgments. He writes "Miss Wonderly was a young woman of about twenty-two" and catalogs her appearance; Spade\'s opinion is inferred by the reader. The closing generalization — "He always heard them out" — is a character summary, a statement about Spade\'s nature as a type. Hammett does not write that kind of sentence. He writes what Spade did next.',
    },
    {
      id: 'hammett-ai2',
      text: `"You're going to tell me where Thursby went," Spade said.
      "Am I?" Cairo smiled thinly. "And what makes you so certain of that?"
      "Because you're smart enough to know what happens to people who don't."
      "Threats, Mr. Spade. How tiresome."
      "Call it whatever you want."
      Cairo set down his glass with a precise click. "You know, I rather think you're bluffing. You need me more than you're willing to admit."
      "Maybe. But you need me more than either of us is comfortable with." Spade lit a cigarette and let the silence work. "So. Thursby."
      Cairo looked at him for a long moment, then at the window, then back. "Thursby," he said, "went to the man who sent me."`,
      isAI: true,
      hint: 'Each exchange here tops the previous one — threat, riposte, counter-riposte, psychological reversal, strategic pause, then the climactic admission. The dialogue has the shape of a well-written scene, each beat landing cleanly. Real Hammett dialogue is faster and less satisfying. His characters evade, stall, change the subject, or say things the other character ignores. "You need me more than either of us is comfortable with" is a polished aphorism; Hammett\'s characters don\'t manufacture epigrams under pressure. The tell is in the tidiness — every line advances toward the confession in a way that feels like dramatic construction rather than how people actually fence.',
    },
    {
      id: 'hammett-ai3',
      text: `The docks at night had a quality of menace that went beyond the merely physical. The warehouses hulked along the waterfront like patient animals, their dark faces turned to the bay where the lights of ships moved slowly in the fog. The fog itself was a presence, softening outlines, muffling sound, giving the whole district the feeling of a place that operated according to different rules than the rest of the city — rules that had more to do with the movements of money and fear than with anything written down in a code. The man in the doorway had been watching Spade for three minutes. Spade had been watching him for five.`,
      isAI: true,
      hint: 'Hammett describes locations the way a Pinkerton operative writes up a surveillance site: number of exits, sightlines, who was where. "The docks at night had a quality of menace that went beyond the merely physical" is the opposite of that — it is a literary judgment, an atmospheric overlay, a narrator telling you how to feel about a place. "Patient animals," "a presence," "different rules than the rest of the city" — each image reaches for mood. The one Hammett touch is the final two sentences, which give observable facts. The rest is what an AI writer adds when trying to make a location feel dangerous, instead of placing a man in a doorway and letting that do it.',
    },
    {
      id: 'hammett-ai4',
      text: `Spade looked at the body for a long moment. In his years of work he had seen men killed in many ways — some quickly, some not — and he had long since made his peace with the fact of violent death. What stayed with you wasn't the violence itself, he had found, but the particular stillness afterward: the way a man who had been moving and talking and wanting things became, in an instant, simply an object among other objects. He noted the angle of entry, the position of the hands, the absence of any sign of struggle. Then he straightened up and took out his cigarette makings and built a smoke. There was work to do.`,
      isAI: true,
      hint: 'The second, third, and fourth sentences are the problem. Spade reflects on his "years of work," tells us he has "made his peace with violent death," then produces a philosophy of corpses: "a man who had been moving and talking and wanting things became, in an instant, simply an object among other objects." This is a literary meditation on mortality, written in the language of existential observation. Hammett\'s Continental Op and Sam Spade do not meditate. They note the angle of entry, take out cigarette makings, and get on with it — which is exactly what this passage does in its final two sentences. The AI surrounds the Hammett moment with the reflection Hammett refused to write.',
    },
  ],
};

export default author;
