import type { Author } from '@/types/game';

const author: Author = {
  id: 'austen',
  name: 'Jane Austen',
  years: '1775–1817',
  nationality: 'British',
  knownFor: 'Pride and Prejudice',
  snippets: [
    {
      id: 'austen-r1',
      text: `"My dear Jane," exclaimed Elizabeth, "you are too good. Your sweetness and disinterestedness are really angelic; I do not know what to say to you. I feel as if I had never done you justice, or loved you as you deserve." Miss Bingley saw, or suspected enough to be jealous; and her great anxiety for the recovery of her dear friend Jane received some assistance from her desire of getting rid of Elizabeth. She often tried to provoke Darcy into disliking her guest, by talking of their supposed marriage, and planning his happiness in such an alliance. "I hope," said she, as they were walking in the shrubbery the next day, "you will give your mother-in-law a few hints, when this desirable event takes place, as to the advantage of holding her tongue."`,
      isAI: false,
      source: 'Pride and Prejudice, Ch. 8',
      hint: 'The authorial intrusion — "Miss Bingley saw, or suspected enough to be jealous" — is free indirect discourse at its sharpest. Austen slides from Elizabeth\'s speech into Miss Bingley\'s interior calculus without ever naming the transition. Miss Bingley\'s final line ("as to the advantage of holding her tongue") delivers the social cut in Miss Bingley\'s own idiom, not the narrator\'s — Austen never explains the cruelty.',
    },
    {
      id: 'austen-r2',
      text: `Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her. She was the youngest of the two daughters of a most affectionate, indulgent father, and had, in consequence of her sister's marriage, been mistress of his house from a very early period. Her mother had died too long ago for her to have more than an indistinct remembrance of her caresses, and her place had been supplied by an excellent woman as governess, who had fallen little short of a mother in affection.`,
      isAI: false,
      source: 'Emma, Ch. 1',
      hint: 'The syntactic pressure of "seemed to unite some of the best blessings of existence" does enormous work — "seemed" undermines the entire sentence before the reader has turned the page. The governess detail ("fallen little short of a mother in affection") is Austen\'s exact subdued phrasing: high praise offered at arm\'s length, which is its own qualification.',
    },
    {
      id: 'austen-r3',
      text: `She had been forced into prudence in her youth, she learned romance as she grew older — the natural sequence of an unnatural beginning. There she had learnt to seek in the vicissitudes of external circumstances, and to call herself happy. It was a long walk, and the weather was not inviting; but just as it began to rain, they were turning into the gravel walk. Captain Benwick had talked of poetry to Anne till they had no more to say on the subject. He repeated, with such tremulous feeling, the various lines which imaged a broken heart, or a mind destroyed by wretchedness, and looked so entirely as if he meant to be understood, that she ventured to hope he did not always read only poetry.`,
      isAI: false,
      source: 'Persuasion, Ch. 11',
      hint: 'The opening inversion — "forced into prudence in her youth, she learned romance as she grew older" — is Austen\'s compressed biographical irony at full power. The Benwick scene\'s final clause, "she ventured to hope he did not always read only poetry," is pure Austenian understatement: a charitable observation that is also a mild clinical verdict on a man performing grief.',
    },
    {
      id: 'austen-r4',
      text: `Elinor saw, with great uneasiness, the low spirits of her friend. His visit afforded her but a very partial satisfaction, while his own enjoyment in it appeared so imperfect. It was evident that he was unhappy; she wished it were equally evident that he still distinguished her by the same affection which once she had felt no doubt of inspiring; but hitherto the continuance of his preference seemed very uncertain; and the reservedness of his manner towards her contradicted one moment what a more animated look had intimated the preceding. She watched and fancied she could perceive that his partiality for Marianne was not so transient as it had appeared.`,
      isAI: false,
      source: 'Sense and Sensibility, Ch. 17',
      hint: 'The surveillance structure — Elinor watching, interpreting, revising — is Austen\'s psychological realism in miniature. "She watched and fancied she could perceive" is the exact epistemic hedge Austen uses to render uncertain consciousness: both too tentative and too precise to be AI-generated. The revision of the final clause ("not so transient as it had appeared") corrects Elinor\'s previous read mid-paragraph.',
    },
    {
      id: 'austen-r5',
      text: `It was, perhaps, one of those cases in which advice is good or bad only as the event decides; and for myself, I certainly never should, in any circumstance of tolerable similarity, give such advice. But I meant well. I thought I was right in proposing to her, and in stating my reasons, and believing them to be solid; but I was wrong in thinking that she ought not to have refused me. I was unreasonable in persuading myself that she would. I have now learnt to think of her in that degree of composure which I ought to have possessed before.`,
      isAI: false,
      source: 'Persuasion, Ch. 23',
      hint: 'Captain Wentworth\'s retrospective self-correction accumulates through a sequence of "I thought... I was wrong... I was unreasonable... I have now learnt" — each clause revising the previous. The final "degree of composure which I ought to have possessed before" names the failure and the remedy simultaneously, which is Austen\'s way of showing moral growth through syntax rather than declaration.',
    },
    {
      id: 'austen-ai1',
      text: `Miss Hartley was, by every measure that polite society cared to apply, a young woman of considerable promise. She was pretty without being beautiful, clever without being learned, and possessed of a warmth of manner that those who met her invariably found charming. Her mother, a woman of strong opinions and stronger ambitions, had long since determined that these qualities, properly managed, would secure an excellent match; and Miss Hartley, who had inherited more of her mother's practicality than either of them acknowledged, was not entirely opposed to being managed. Indeed, as she sat by the window that morning watching the rain, she felt, with quiet certainty, that something significant was about to change — though what form that change might take, she could not yet say.`,
      isAI: true,
      hint: 'The character introduction lists traits in sequence — pretty, clever, warm — without dramatising any of them. "Those who met her invariably found charming" tells us the effect instead of showing it in a scene. The final sentence reaches for mystery ("something significant was about to change") but it\'s vague anticipation, not Austen\'s ironic precision. A real Austen opener would have already cut somebody with a subordinate clause.',
    },
    {
      id: 'austen-ai2',
      text: `Mr. Darcy stood apart from the general merriment of the room, observing its occupants with an expression that Miss Elizabeth Bennet, had she been watching him — which she was not — might have described as contemplative. He was, in truth, a man of deep feeling, though he had long since learned to conceal this beneath an exterior of cool reserve. He was aware, in some corner of his mind, that the events of recent weeks had unsettled him in ways he did not entirely welcome; and he was aware, too, that the source of this unsettling was, in large part, a pair of very fine eyes and a readiness of wit that he had not expected to admire as much as he did. For such, he reflected, was the nature of attachment — arriving always at the most inconvenient possible moment.`,
      isAI: true,
      hint: '"He was a man of deep feeling, though he had long since learned to conceal this" states Darcy\'s psychology outright — Austen never does this, especially not with Darcy, whose interiority she withholds almost entirely. "A pair of very fine eyes" is lifted from the novel but lands wrong: Darcy says it to Bingley as a provocation, not in private reflection. The closing moral ("For such was the nature of attachment") is the LLM wrapping everything up neatly.',
    },
    {
      id: 'austen-ai3',
      text: `The evening at Netherfield had been pronounced a great success by all those whose opinion Mrs. Bennet considered worth having, and a great success it therefore was. Her daughters had danced beautifully, Jane above all, whose loveliness that evening had drawn the attention of exactly the person whose attention Mrs. Bennet most wished it to draw. Mr. Bennet, applied to for his own assessment during the return journey, offered the observation that he had found the supper adequate and the music tolerable, which his wife received with the mixture of exasperation and affection that had characterised their marriage for twenty years. "You are impossible," she told him. "Indeed," said he, "it is one of my more reliable qualities."`,
      isAI: true,
      hint: 'The exchange between Mr and Mrs Bennet has the right surface flavour but the wrong mechanism: "Indeed, it is one of my more reliable qualities" is a witticism rather than a deflection. Austen\'s Mr Bennet is dry because he refuses to engage; this version engages cleverly, which is different. "Whose loveliness that evening had drawn the attention of exactly the person whose attention Mrs. Bennet most wished" is over-smooth — Austen would name Bingley and let the irony do the work.',
    },
    {
      id: 'austen-ai4',
      text: `Anne Elliot was not, she told herself, a woman given to self-pity. She had made her choice eight years ago, guided by counsel she had trusted and considerations she had believed to be sound; and if the consequences of that choice had proved, in the event, more painful than she had anticipated, she was prepared to bear them with the quiet dignity that had always been her most reliable resource. Captain Wentworth had returned. She had heard this announced in Lady Russell's drawing-room with a composure that surprised even herself — surprised her, and perhaps pleased her a little, for it seemed to suggest that she was, finally, truly recovered. She was not entirely certain that she believed this. But it was, she felt, important to try.`,
      isAI: true,
      hint: '"Quiet dignity that had always been her most reliable resource" names Anne\'s character as if ticking a box. Austen\'s Anne is never this self-aware about her own composure as a managed quality — the whole drama of Persuasion is that Anne\'s feelings break through despite her discipline. "Surprised even herself" and "she was not entirely certain that she believed this" are the kind of double-qualifier hedges that LLMs use to seem nuanced but which actually just say the same thing twice.',
    },
    {
      id: 'austen-ai5',
      text: `That Emma Woodhouse was capable of error was a truth her father had never seriously entertained, and which even Mr. Knightley, her most consistent critic, was obliged to acknowledge she had demonstrated with some originality. The matter of Miss Smith was, in retrospect, precisely the kind of scheme that Emma's particular combination of intelligence and overconfidence was likely to produce — clever in conception, sincere in intention, and almost entirely mistaken in execution. Emma herself, surveying the wreckage of her matchmaking with the honest eye she could sometimes bring to bear on her own conduct, felt something she was reluctant to name as embarrassment, though it was very close to it. Indeed, it was precisely that. However, she was resolved to do better — and with Emma, resolution was, at least, never the difficulty.`,
      isAI: true,
      hint: 'The paragraph opens with a generalisation, explains Emma\'s flaw in three parallel adjectives ("clever in conception, sincere in intention, entirely mistaken in execution"), and closes with "However, she was resolved to do better." This is a summary of Emma\'s character arc, not a scene. Austen never steps back to explain Emma\'s personality type — she lets Emma make the mistake in front of you. "Indeed, it was precisely that" is a false Austenian briskness that actually just repeats the previous clause.',
    },
  ],
};

export default author;
