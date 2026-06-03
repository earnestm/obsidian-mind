import type { Author } from '@/types/game';

const author: Author = {
  id: 'goethe',
  name: 'Johann Wolfgang von Goethe',
  years: '1749–1832',
  nationality: 'Deutsch',
  knownFor: 'Die Leiden des jungen Werthers',
  snippets: [
    {
      id: 'goethe-r1',
      text: `Am 4. Mai 1771. — Wie froh bin ich, daß ich weg bin! Bester Freund, was ist das Herz des Menschen! Dich zu verlassen, den ich so liebe, von dem ich unzertrennlich war, und froh zu sein! Ich weiß, du verzeihst mir's. Waren nicht meine übrigen Verbindungen eigentlich ausgesucht vom Schicksal, um ein Herz wie meines zu ängstigen? Die arme Leonore! und doch war ich unschuldig. Konnt' ich dafür, daß, während die eigenwilligen Reize ihrer Schwester mir eine angenehme Unterhaltung verschafften, eine Leidenschaft in dem armen Herzen sich bildete?`,
      isAI: false,
      source: 'Die Leiden des jungen Werthers, Erstes Buch, 4. Mai',
      hint: 'The epistolary "Bester Freund" (dearest friend) establishes Werther\'s confessional register immediately, but the content is the first contradiction: he says he is glad to leave the person he loves, and the letter tries to resolve this through a cascade of rhetorical questions. "Konnt\' ich dafür" (could I help it) is Werther\'s characteristic evasion — passion as fatality, not agency.',
    },
    {
      id: 'goethe-r2',
      text: `Am 10. Mai. — Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin so allein und freue mich so meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie meine. Ich bin so glücklich, mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet. Ich könnte jetzt nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen Augenblicken.`,
      isAI: false,
      source: 'Die Leiden des jungen Werthers, Erstes Buch, 10. Mai',
      hint: 'The paradox — greatest artist when unable to draw — is Werther\'s key self-contradiction: the peak of feeling prevents its own representation. The double movement of the final sentence (cannot draw a stroke / never been a greater painter) enacts Sturm und Drang\'s central problem in miniature. The phrase "für solche Seelen geschaffen wie meine" (made for souls like mine) reveals Werther\'s solipsism at the moment of apparent openness to nature.',
    },
    {
      id: 'goethe-r3',
      text: `Ich habe mancherlei nachgedacht über die Begier im Menschen, sich auszubreiten, neue Entdeckungen zu machen, herumzuschweifen; und dann wieder über den innern Trieb, sich willig in die Einschränkung zu geben, in dem Gleise der Gewohnheit so hinzufahren und sich weder um Rechts noch Links zu bekümmern. Es ist sonderbar, wie ich, da ich hier hinkam und vom Hügel in das schöne Tal schaute, wie mich alles das anzog. Dort das Wäldchen! Ach, könntest du dich in seine Kühle mischen! Dort die Spitze des Berges! Ach, könntest du von da die weite Gegend überschauen!`,
      isAI: false,
      source: 'Die Leiden des jungen Werthers, Erstes Buch, 22. Mai',
      hint: 'The philosophical opening (expansion vs. contraction as competing drives) gives way to specific sensory exclamation ("Dort das Wäldchen!"). This pivot — abstract reflection → sudden apostrophe to landscape — is Werther\'s characteristic movement. The second-person "du" addresses both Wilhelm and, ambiguously, Werther himself, enacting the desired fusion with nature through grammar.',
    },
    {
      id: 'goethe-r4',
      text: `Es ist ein einförmiges Ding um das Menschengeschlecht. Die meisten verlebten den größten Teil der Zeit, um zu leben, und das bißchen, das ihnen von Freiheit übrig bleibt, ängstigt sie so, daß sie alle Mittel aufsuchen, es loszuwerden. O Bestimmung des Menschen! Aber ich bin zu sehr in meine Träume gewechselt, und Phantastereien, und mehr als eine lange Weile hab' ich mir damit gemacht; manchmal hielt ich mich ab davon, aber dann kam ich immer wieder dahin.`,
      isAI: false,
      source: 'Die Leiden des jungen Werthers, Erstes Buch, 24. Juli',
      hint: 'The existential generalization ("O Bestimmung des Menschen!") followed immediately by self-correction ("aber ich bin zu sehr in meine Träume gewechselt") shows Werther\'s inability to sustain philosophical distance. He reaches for universality and falls back into autobiography — the structure of his consciousness is the structure of the letter. "Mehr als eine lange Weile hab\' ich mir damit gemacht" is the colloquial register breaking through the high style.',
    },
    {
      id: 'goethe-ai1',
      text: `Am 18. Juni. — Ich habe heute wieder den ganzen Nachmittag mit Lotte verbracht und bin in einem Zustand, den ich kaum zu beschreiben vermag. Sie ist so vollkommen, so natürlich in allem, was sie tut, daß ich jedesmal aufs Neue überwältigt bin, wenn ich bei ihr bin. Ich frage mich manchmal, ob es Liebe ist, was ich empfinde, oder nur Bewunderung, oder vielleicht beides zugleich. Gewiß ist nur, daß ich ohne sie nicht denken kann, und daß die Stunden, die ich in ihrer Nähe verbringe, die einzigen sind, in denen ich mich wirklich lebendig fühle.`,
      isAI: true,
      hint: '"Ich frage mich manchmal, ob es Liebe ist... oder nur Bewunderung" — Werther never distinguishes between love and admiration; his letters describe the feeling in excess, not analyse it by category. The phrase "wirklich lebendig fühle" is a modern psychological formulation. Goethe\'s Werther expresses himself through nature metaphors and classical allusions, not through emotional self-taxonomy.',
    },
    {
      id: 'goethe-ai2',
      text: `Die Gesellschaft war gestern Abend sehr angenehm, und ich muss gestehen, dass ich mich besser als erwartet amüsierte. Der Graf hatte einige interessante Gäste eingeladen, Männer mit Bildung und Geschmack, mit denen man wirklich sprechen konnte. Auch Lotte war dabei und war so liebenswürdig und natürlich wie immer. Nur Albert bemerkte ich kaum — er ist höflich, er ist gut, aber er interessiert mich nicht. Es ist sonderbar, wie wenig Eindruck ein Mensch von echtem Charakter manchmal macht, wenn man ihn so oft gesehen hat.`,
      isAI: true,
      hint: 'Werther\'s social letters are agitated, not coolly observational. "Ich muss gestehen, dass ich mich besser als erwartet amüsierte" is the measured tone of a social novelist, not of a man who experiences everything as either rapture or despair. Albert\'s dismissal ("er interessiert mich nicht") is too composed; in the original, Albert torments Werther precisely because he cannot dismiss him.',
    },
    {
      id: 'goethe-ai3',
      text: `Am 3. September. — Es gibt Momente, in denen man klar sieht, wie das eigene Schicksal sich entschieden hat. Ich hatte einen solchen Moment heute Morgen, als ich allein auf dem Hügel stand und über das Tal blickte. Die Welt lag still und schön vor mir, und ich dachte an Lotte und an Albert, und mir wurde mit einem Male bewusst, dass mein Weg hier zu Ende war. Nicht mit Schmerz erkannte ich es, eher mit einer seltsamen Ruhe — die Ruhe dessen, der aufgehört hat zu kämpfen, weil er endlich weiß, was er will.`,
      isAI: true,
      hint: 'Werther\'s recognition of his fate is anguished and recursive in the original; this version grants him a clarity and composure ("eine seltsame Ruhe") that Goethe specifically withholds. "Weil er endlich weiß, was er will" would be resolution — Werther is defined by not-knowing, by the mismatch between desire and its object. The "hilltop vision" is too neat a stage direction for Goethe\'s chaotic epistolary structure.',
    },
    {
      id: 'goethe-ai4',
      text: `Ich saß gestern Abend bei Frau von S. in ihrer kleinen Gesellschaft und unterhielt mich recht angenehm. Die Conversation war geistvoll ohne Anstrengung, und ich merkte, wie mir diese Art von Gesellschaft doch fehlt, seitdem ich hier auf dem Lande lebe. Lotte war nicht dabei — sie hatte eine Verpflichtung bei ihrer Familie. Ich vermisste sie, natürlich, aber mit einer gewissen ruhigen Trauer, nicht mit dem stürmischen Schmerz, der mich früher befiel. Vielleicht verändere ich mich doch.`,
      isAI: true,
      hint: '"Vielleicht verändere ich mich doch" (perhaps I am changing after all) is the language of therapy, not of Sturm und Drang. Werther\'s character is constituted by his inability to change; that\'s the tragic structure. "Mit einer gewissen ruhigen Trauer" opposes the entire register of the novel. Goethe\'s letters never modulate toward calm self-observation — they accelerate toward dissolution.',
    },
  ],
};

export default author;
