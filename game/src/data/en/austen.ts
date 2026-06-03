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
      text: `It is a truth universally acknowledged among persons of discernment that the position of a young woman in society is determined quite as much by her manners as by her fortune. Miss Hartley was indeed a young woman of considerable charm, and she was well aware that charm, while it might open many doors, could not of itself secure a comfortable establishment. She had, moreover, the additional advantage of being genuinely kind-hearted, which her mother frequently pointed out was perhaps more important than beauty in the long view of matrimony. "A beautiful face may fade," Mrs. Hartley observed one morning over breakfast, "but a good disposition is quite, quite permanent." Miss Hartley smiled at this observation, understanding its wisdom thoroughly.`,
      isAI: true,
      hint: 'The irony collapses entirely after the opening echo. "She was well aware" and "understanding its wisdom thoroughly" are declarations — Austen would never tell us the character grasps the lesson. "Quite, quite permanent" tries to mimic Austen\'s register but the repetition is mechanical rather than characterising. The breakfast-table scene exists only to deliver the moral; Austen\'s scenes always do at least two things at once.',
    },
    {
      id: 'austen-ai2',
      text: `Mr. Darcy was not, in truth, a man given to explaining himself, and yet he found, in that moment, that he wished very much to do so. He was conscious, as he had rarely been conscious before, of the injustice he had done to Miss Bennet — not merely in the matter of Bingley, which was indeed serious enough, but in the more fundamental sense of having thought poorly of a family that contained, quite evidently, at least one person of genuine intelligence and worth. He crossed the room with the deliberate care of a man who does not wish to betray his emotions, and stood at the window, gazing out at the park with an expression that was, to any careful observer, entirely unreadable.`,
      isAI: true,
      hint: 'Austen almost never gives us Darcy\'s interior directly in volumes I–II — his consciousness is withheld, filtered through Elizabeth\'s reading of him. This passage enters his thoughts with modern interiority ("He was conscious... of the injustice") and then immediately walks it back with "entirely unreadable," a contradiction that signals authorial uncertainty rather than deliberate technique. "Quite evidently" is the AI\'s habitual over-use of "quite."',
    },
    {
      id: 'austen-ai3',
      text: `The ball at Netherfield had been, by general agreement, a success — though what precisely constituted success at such an event was, Mrs. Bennet felt, quite impossible to explain to a man of Mr. Bennet's temperament. He would, she knew, find something to criticize. He generally did. The daughters had danced extremely well, particularly Jane, whose beauty that evening had indeed attracted considerable notice from a certain quarter, a fact which Mrs. Bennet did not hesitate to point out at length during the carriage ride home. Mr. Bennet listened to this recitation with an air of amused attention that was, in reality, nothing of the kind.`,
      isAI: true,
      hint: '"An air of amused attention that was, in reality, nothing of the kind" is a tell: Austen would never explain the gap between appearance and reality so directly. Free indirect discourse lets her show Mr. Bennet\'s detachment through syntax, not commentary. The phrase "quite impossible to explain" also overuses "quite" in the AI manner, and the entire passage summarises a scene rather than inhabiting one.',
    },
    {
      id: 'austen-ai4',
      text: `Anne Elliot had long since made her peace with the decision she had made at nineteen. It was not, she told herself, a matter of regret — or if it was, it was the kind of regret that one learns, in time, to live with comfortably. Captain Wentworth was returned from sea, handsomer than ever and evidently prosperous, and the society of Kellynch had made very little secret of the fact that he was considered an eligible and indeed desirable addition to the neighbourhood. Anne heard these observations with perfect composure, which she felt was, all things considered, a remarkable achievement on her part and one that spoke well of her strength of character.`,
      isAI: true,
      hint: 'The self-congratulatory final clause — "a remarkable achievement on her part and one that spoke well of her strength of character" — is unthinkable in Austen. Anne Elliot\'s emotional discipline is rendered through restraint of commentary, not admiration of it. "Made her peace with" is also an anachronistic idiom; and Austen\'s Anne never congratulates herself, even privately — she endures.',
    },
    {
      id: 'austen-ai5',
      text: `Miss Woodhouse was not, it must be said, a young woman without faults; and those who knew her best were quite aware that her principal fault was a tendency to arrange the lives of others with a confidence that was not, in every instance, warranted by her actual knowledge of those lives. She meant well, truly she did — and this, her father and her governess both agreed, was entirely to her credit. But meaning well and doing well are, as wiser heads than Emma's have observed, quite different things. It remained to be seen whether experience would temper her enthusiasm for match-making, or whether it would, on the contrary, only increase it.`,
      isAI: true,
      hint: 'The narrator\'s direct moral address — "as wiser heads than Emma\'s have observed" — tries to sound Fieldingesque but lands as condescension. Austen\'s Emma narrator is ironic and fond simultaneously; this voice lectures. "She meant well, truly she did" is sentimentally exculpatory in a way Austen never is, and "quite different things" reaches for the register while missing the wit.',
    },
  ],
};

export default author;
