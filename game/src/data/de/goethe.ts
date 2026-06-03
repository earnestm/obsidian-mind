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
      text: `Am 18. Juni. — Heute war ich wieder bei Lotte, und ich muss Dir gestehen, bester Freund, dass ich mich in einem Zustand befinde, den ich kaum zu beschreiben weiß. Sie ist gut zu mir — das ist alles, was ich sagen kann, und doch ist es alles. Wenn ich neben ihr sitze und sie sprechen höre, vergesse ich die Zeit und vergesse mich selbst, und wenn ich dann gehe, trage ich das Bild ihres Lächelns mit mir fort wie ein goldenes Licht, das noch lange nachleuchtet. Ist das Liebe? Ich weiß es nicht. Ich weiß nur, dass ich ohne diese Stunden nicht leben könnte.`,
      isAI: true,
      hint: '"Wie ein goldenes Licht, das noch lange nachleuchtet" is a clichéd radiance image; Goethe\'s Werther uses nature metaphors that have specific seasonal texture, not generic glow. "Ist das Liebe? Ich weiß es nicht" poses the question as a neat rhetorical pair — Werther never asks whether his feeling is love; he drowns in it without naming it that way. The self-questioning is too tidy, and the answer too composed.',
    },
    {
      id: 'goethe-ai2',
      text: `Am 24. August. — Der Abend bei dem Grafen war angenehm, und ich muss gestehen, ich habe mich gut unterhalten. Man sprach über Literatur und Reisen, und es gab unter den Gästen einige, die wirklich zu denken verstehen. Lotte war zugegen und war, wie immer, die Liebenswürdigste im Raum. Albert saß ihr zur Seite. Er ist ein braver Mensch — das sage ich aufrichtig — aber er hat jene Ruhe, die mich innerlich ungeduldig macht, obwohl ich weiß, daß es mir nicht zusteht, ungeduldig zu sein. Ein seltsames Gefühl, Bester, das ich Dir kaum zu erklären vermag.`,
      isAI: true,
      hint: 'Werther\'s social reports come in waves of agitation and self-contradiction; this version is too measured and too socially observant — "die Liebenswürdigste im Raum" is a party-guest verdict, not Werther\'s ecstatic register. The Albert observation ends with "das ich Dir kaum zu erklären vermag" — a polite deferrral where Werther would erupt. The inner conflict is acknowledged then neatly set aside, which is the opposite of what Werther does.',
    },
    {
      id: 'goethe-ai3',
      text: `Am 3. September. — Es gibt Momente, in denen man mit unerwarteter Klarheit sieht, wie die Dinge stehen. Heute Morgen, als ich allein durch die Felder ging und die Sonne über dem Wald aufging, wurde mir auf einmal bewusst, dass mein Schicksal entschieden ist. Lotte gehört einem anderen — das ist die Wahrheit, und ich habe sie immer gewusst, nur nie wirklich geglaubt. Nun glaube ich sie. Es ist kein Schmerz mehr, den ich empfinde, sondern etwas Ruhigeres, Schwereres — das Gewicht der Tatsachen, die man nicht mehr wegdenken kann.`,
      isAI: true,
      hint: '"Das Gewicht der Tatsachen, die man nicht mehr wegdenken kann" is a philosophical calm that Goethe specifically denies Werther. Werther never reaches acceptance — his tragedy is that he cannot convert knowledge into resignation. The "sunrise over the forest" moment is a neat epiphany scene; Goethe\'s letters never stage revelations so cleanly. Werther rages, circles, contradicts himself — he does not have quiet mornings of clear-eyed reckoning.',
    },
    {
      id: 'goethe-ai4',
      text: `Am 12. Oktober. — Ich habe heute Albert getroffen und mit ihm gesprochen, länger als sonst. Er ist ein vernünftiger Mensch, das muss ich zugeben, und ich verstehe, warum Lotte ihn schätzt. Er liebt sie auf seine Art — ordentlich, beständig, verlässlich. Ich liebe sie auf meine Art — heftig, unvernünftig, hoffnungslos. Vielleicht ist seine Art die bessere. Vielleicht ist das, was ich Liebe nenne, nur eine Form des Egoismus, ein Verlangen, das mehr mit mir zu tun hat als mit ihr. Diese Frage beschäftigt mich.`,
      isAI: true,
      hint: '"Vielleicht ist seine Art die bessere" — Werther entertaining the possibility that Albert\'s stable love surpasses his own passion is the one thought he cannot sustain in Goethe\'s novel. The parallel structure "ordentlich, beständig, verlässlich" vs. "heftig, unvernünftig, hoffnungslos" is a tidy antithesis that packages the contrast too neatly. The closing self-diagnosis — love as egoism — is the reflective distance Goethe never allows his hero.',
    },
  ],
};

export default author;
