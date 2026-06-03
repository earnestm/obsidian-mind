import type { Author } from '@/types/game';

const author: Author = {
  id: 'doyle',
  name: 'Arthur Conan Doyle',
  years: '1859–1930',
  nationality: 'British',
  knownFor: 'The Adventures of Sherlock Holmes',
  snippets: [
    {
      id: 'doyle-r1',
      text: `I had neither kith nor kin in England, and was therefore as free as air — or as free as an income of eleven shillings and sixpence a day will permit a man to be. Under such circumstances I naturally gravitated to London, that great cesspool into which all the loungers and idlers of the Empire are irresistibly drained. There I stayed for some time at a private hotel in the Strand, leading a comfortless, meaningless existence, and spending such money as I had, considerably more freely than I ought. So alarming did my expenditure seem to me that I soon realized that I must either leave London and rusticate somewhere in the country, or that I must make a complete alteration in my style of living.`,
      isAI: false,
      source: 'A Study in Scarlet, Ch. 1',
      hint: '"That great cesspool into which all the loungers and idlers of the Empire are irresistibly drained" — Watson\'s London is seen from a particular angle of bitter colonial experience. The precision of "eleven shillings and sixpence" grounds the adventure story in actual Afghani-campaign pension rates. No AI pastiche generates a specific economic number like this unprompted.',
    },
    {
      id: 'doyle-r2',
      text: `"Excellent!" I cried. "Elementary," said he. "Dear me, Watson, dear me!" said he, stuffing his handkerchief into his pocket. "Well, well, I suppose I should not have expected you to have perceived that. Come now, come now! Do drop that tiresome pose of pretended ignorance. A man goes abroad, returns to London in a cab — in a cab, mind you — and loses his luggage. Luggage, Watson! Without his luggage. Can you not read the story in three separate details? The mud on the left boot. The weeping willow in his button-hole. The return half of a Dover-Calais ticket in his waistcoat pocket. There it all is, Watson. Stripped bare for the meanest intelligence."`,
      isAI: false,
      source: 'The Adventure of the Creeping Man',
      hint: 'Holmes\'s speech here builds through interruption and repetition ("in a cab, mind you — in a cab") in a way that renders his impatience kinetically. "Stripped bare for the meanest intelligence" is an authentic Holmesian barb — contemptuous but not cruel. AI versions tend to make Holmes\'s deductions systematic lists rather than performed impotence at Watson\'s slowness.',
    },
    {
      id: 'doyle-r3',
      text: `It was a wild, tempestuous night towards the close of November. Holmes and I sat together in silence all the evening, he engaged with a powerful lens deciphering the remains of the original inscription upon a palimpsest, I deep in a recent treatise upon surgery. Outside the wind howled down Baker Street while the rain beat fiercely against the windows. It was strange there in the very depths of the town, with ten miles of man's handiwork on every side of us, to feel the iron grip of Nature, and to be conscious that to the huge elemental forces all London was no more significant than the surrounding fields.`,
      isAI: false,
      source: 'The Adventure of the Golden Pince-Nez',
      hint: 'Doyle uses the domestic Baker Street scene — Holmes with his lens, Watson with his surgery treatise — to anchor the Gothic weather. "Ten miles of man\'s handiwork on every side of us" is a specifically Doylean urbanist perspective that feels Victorian without being archaic. The elemental force observation is philosophical without leaving the armchair.',
    },
    {
      id: 'doyle-r4',
      text: `The horse was standing at the door of the house, and it was brought away from the stables as though for a morning exercise. He had, I suppose, half-an-hour before that the matter was serious, though even then it was not until he had reached the corner of the lane that he saw the horse-tracks on the road, and the second set of tracks where a man had followed the horse. These were all the circumstances, and when I put them together, they seemed to me to be susceptible of only one explanation. The horse was found half-way between the wood and the stables. He had not been ridden, but he had been used for some other purpose.`,
      isAI: false,
      source: 'Silver Blaze',
      hint: 'The reasoning is presented in retrospect, from evidence to explanation, without theatrical build-up. "Susceptible of only one explanation" is Holmes\'s exact phrase from this story. The observation that the horse had not been ridden "but had been used for some other purpose" withholds the conclusion in exactly Doyle\'s manner — the reader is meant to reason ahead of Watson.',
    },
    {
      id: 'doyle-r5',
      text: `I was compelled, however, to forego all further speculation upon the subject, for the Inspector called me over to examine the body. The face was turned sideways upon the grass, and one temple was crushed in by a tremendous blow, which must assuredly have been struck by some heavy and blunt weapon. The features, though horribly discoloured, presented a strangely peaceful and even joyous expression, which I have more than once observed in cases of sudden and violent death. No weapon of any sort was to be discovered, and there was no sign of a struggle.`,
      isAI: false,
      source: 'The Boscombe Valley Mystery',
      hint: 'Watson\'s medical eye — "crushed in by a tremendous blow, which must assuredly have been struck by some heavy and blunt weapon" — applies clinical precision to horror. The observation about "peaceful and even joyous expression" in violent deaths is Watson speaking as a doctor who has seen battlefield wounds; it\'s a professional note, not a Gothic flourish.',
    },
    {
      id: 'doyle-ai1',
      text: `Holmes leaned back in his chair and pressed his fingertips together in the manner I had come to associate with his deepest concentration. For a long moment he said nothing, his grey eyes fixed upon some distant point above the mantelpiece. Then, quite suddenly, he sat forward and fixed me with a look of such penetrating intelligence that I felt, not for the first time, as though he could see directly into whatever thoughts I had chosen not to voice. "You are wondering," he said at last, "whether I have yet formed a theory. The answer is that I have formed several, and rejected all but one. The difficulty lies not in finding explanations, Watson, but in finding the correct one."`,
      isAI: true,
      hint: 'Holmes is performing the detective here, not doing detection. "Such penetrating intelligence that I felt he could see directly into whatever thoughts I had chosen not to voice" is Watson narrating Holmes\'s mystique rather than recording specific observations. The closing epigram — "The difficulty lies not in finding explanations, but in finding the correct one" — sounds like Holmes but says nothing particular about any actual case.',
    },
    {
      id: 'doyle-ai2',
      text: `It was a curious affair from beginning to end, and I do not think that I have ever encountered a case which so thoroughly illustrated Holmes's remarkable gift for perceiving what others could not see. From the moment we arrived at the scene, he moved through the room with his characteristic swift, precise movements, examining objects that seemed to me entirely unremarkable and passing over those that I might have considered significant. He said nothing for fully ten minutes, during which time Inspector Lestrade and I exchanged several glances of bewildered patience.`,
      isAI: true,
      hint: '"Examining objects that seemed to me entirely unremarkable and passing over those that I might have considered significant" — Watson describes Holmes\'s method in the abstract but gives us no actual objects, no specific detail. Doyle\'s Watson almost always names what Holmes looks at: the mud, the ash, the thread. The pacing here is summary, not scene.',
    },
    {
      id: 'doyle-ai3',
      text: `London in autumn has a character all its own, and Baker Street at dusk was no exception. As I made my way along the familiar pavement, my thoughts turned, as they often did at such hours, to the extraordinary man who had become, in the years since our first meeting, the central figure in so many adventures that had shaken me from the complacency of ordinary professional life. I had known physicians, soldiers, and men of affairs, but I had never met anyone who combined, in equal measure, the ruthless intellectual precision of a scientist with the dramatic instincts of an artist.`,
      isAI: true,
      hint: 'Watson reflecting on Holmes\'s character in the abstract — "ruthless intellectual precision of a scientist with the dramatic instincts of an artist" — is a summary of the character for a reader who doesn\'t know him, not Watson\'s voice. Doyle\'s Watson uses admiring remarks on the fly, embedded in action. This passage has no case, no problem — it\'s a character sketch masquerading as narration.',
    },
    {
      id: 'doyle-ai4',
      text: `"The matter is simple enough, if you know where to look," said Holmes, rising from his armchair with the sudden energy that always signalled the transition from thought to action. "The woman is lying, of course — not maliciously, but from a misguided sense of loyalty to someone she believes she is protecting. The letter, however, tells a different story. You will note the postmark, the quality of the paper, and the deliberate irregularity of the handwriting, each of which, taken individually, means very little, but taken together, they point unmistakeably to a single conclusion." He moved to the window and gazed down at the street below.`,
      isAI: true,
      hint: 'The deduction is packaged neatly — three items listed, then dismissed individually, then asserted in combination. Doyle\'s Holmes typically builds from one specific detail to one specific inference (the famous "You have been in Afghanistan, I perceive"). The phrase "point unmistakeably to a single conclusion" announces a conclusion without stating it, which is not Holmes\'s method — he states the conclusion directly.',
    },
    {
      id: 'doyle-ai5',
      text: `Inspector Lestrade arrived at a quarter past nine, looking as smug and self-satisfied as I had ever seen him. He had, as we later learned, already reported to his superiors that the case was as good as solved, and the credit, in his view, belonged entirely to the official force. Holmes received him with perfect cordiality, betraying not the slightest irritation at the Inspector's manner, though I, who knew him well, could see from the slight compression of his lips that he was amused rather than annoyed — amused, and perhaps a little impatient with the predictability of men who could not see past the obvious to the truth that lay beneath it.`,
      isAI: true,
      hint: 'Watson explicates Holmes\'s inner state through elaborate qualification — "amused rather than annoyed — amused, and perhaps a little impatient with the predictability of men." Doyle\'s Watson reads Holmes\'s expression and reports what he sees, not what it means; meaning arrives through action. "The truth that lay beneath it" is the kind of vague abstraction Doyle never uses to close a paragraph.',
    },
  ],
};

export default author;
