import type { Author } from '@/types/game';

const author: Author = {
  id: 'kafka',
  name: 'Franz Kafka',
  years: '1883–1924',
  nationality: 'Österreichisch',
  knownFor: 'Die Verwandlung',
  snippets: [
    {
      id: 'kafka-r1',
      text: `Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt. Er lag auf seinem panzerartig harten Rücken und sah, wenn er den Kopf ein wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnen Beine flimmerten ihm hilflos vor den Augen.`,
      isAI: false,
      source: 'Die Verwandlung, Abschnitt I',
      hint: 'The transformation is stated in the opening sentence with complete grammatical normality — "fand er sich... verwandelt" — and Kafka immediately proceeds to physical inventory (armoured back, curved brown belly, pathetically thin legs). The horror is enacted by the prose\'s refusal to be horrified. "Kläglich dünnen" (piteously thin) is the only evaluative word, and it belongs to Gregor\'s own self-assessment.',
    },
    {
      id: 'kafka-r2',
      text: `Es war eine der Anstalten, in denen man, dem Gebrauch des vorvorigen Jahrhunderts entsprechend, Leute, die an die Behörde selbst schreiben wollten, abzuhalten und möglichst zu entmutigen suchte. Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. "Wie ein Hund!" sagte er, es war als sollte die Scham ihn überleben. Man öffnete den Laden eines Bäckers, der um diese frühe Stunde noch nicht aufgemacht hatte, man holte einen Schlüssel.`,
      isAI: false,
      source: 'Der Proceß, Kapitel 1',
      hint: '"Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet" — the conditional structure (slander → arrest, but no wrongdoing) is stated as causal fact. The bakery key detail is pure Kafka: a concrete, mundane action (fetching a key) inserted into an arrest scene without explanation, adding administrative absurdity to legal absurdity.',
    },
    {
      id: 'kafka-r3',
      text: `K. hatte die Pflicht, auf alle Fragen zu antworten. Er würde das auch getan haben. Es fehlte ihm nicht an Mut. Er war nicht damit einverstanden, mit Beamten auf dem Gange zu sprechen, und er hatte die Gewohnheit, auf den verschiedenen Stellen seinen Anspruch auf gute Behandlung zu betonen. Hier, im Bureau des Untersuchungsrichters, war es wieder einmal so weit. K. überlegte, ob er klagen solle, ob er es nicht vorziehen solle, einfach sein Recht zu nehmen, wie er es gewohnt war, unter normalen Verhältnissen.`,
      isAI: false,
      source: 'Der Proceß, Kapitel 2',
      hint: '"Unter normalen Verhältnissen" — "under normal circumstances" — is the key phrase. K. keeps appealing to a normality that the novel has already invalidated. The flat declarative sentences ("Er hatte die Gewohnheit...") render bureaucratic self-assertion as a kind of automatism. Kafka\'s sentences never raise their voice; the bureaucratic register is maintained through the most unjust conditions.',
    },
    {
      id: 'kafka-r4',
      text: `Der Beamte sah lange in das Gesicht des Mannes, der stand, geduldig wartend, als sei er dieser Prüfung gewöhnt. Es war ein graues, ruhiges Gesicht. Der Mann hatte von einer Türhüterstelle gehört und war hierher gekommen, um sie anzutreten. Man hatte ihm gesagt, die Stelle sei noch nicht besetzt. Der Beamte notierte sich den Namen und wies ihn an, zu warten. Wann genau er drankomme, könne man nicht sagen. Der Mann nickte, fand einen freien Platz und setzte sich. Er wartete.`,
      isAI: false,
      source: 'Das Schloss, Kapitel 2',
      hint: 'The final three sentences — "Der Mann nickte, fand einen freien Platz und setzte sich. Er wartete." — are Kafka\'s signature: waiting rendered as action, bureaucratic limbo as narrative endpoint. The accumulation of short declarative sentences strips the waiting of drama; the prose refuses to make the man\'s predicament interesting, which is the predicament itself.',
    },
    {
      id: 'kafka-ai1',
      text: `Als K. das Büro des Untersuchungsrichters betrat, bemerkte er zunächst den Geruch — altes Papier und feuchte Wände — und dann die Stille, die seltsam vollständig war für einen Raum, in dem so viele Menschen saßen. An langen Tischen arbeiteten Beamte, jeder über seine Unterlagen gebeugt, als existiere K. nicht. Er stellte sich vor den nächsten Tisch. Der Beamte blätterte weiter. K. räusperte sich. Der Beamte legte einen Stempel auf einen Bogen, hob ihn wieder ab, betrachtete das Ergebnis. Erst nach einer Weile sah er hoch, mit dem Ausdruck eines Mannes, der durch eine Unterbrechung in seiner Arbeit nichts Ungewöhnliches erblickt, weil alle Arbeit Unterbrechung ist.`,
      isAI: true,
      hint: 'The smells at the opening — old paper and damp walls — are atmospheric scene-setting that a real Kafka narrator skips entirely. The final clause, "weil alle Arbeit Unterbrechung ist," is the kind of neat philosophical summary that Kafka embeds in action, not in the narrator\'s voice. The bureaucratic indifference is here explained; Kafka just shows it without comment.',
    },
    {
      id: 'kafka-ai2',
      text: `Gregor erwachte und wusste sofort, dass etwas nicht stimmte. Sein Körper fühlte sich fremd an, schwer und unbeweglich auf eine Weise, die er nicht kannte. Er versuchte sich aufzurichten, aber seine Glieder gehorchten ihm nicht in der gewohnten Weise. Langsam wurde ihm bewusst, dass sich grundlegend etwas verändert hatte — nicht nur an ihm selbst, sondern an der Welt, in der er sich befand, die plötzlich ganz anders war, bedrohlich und fremd zugleich. Er dachte an seine Familie, an die Sorgen, die er ihnen nun bereiten würde. Das Gewicht dieser Erkenntnis war fast unerträglich.`,
      isAI: true,
      hint: 'The original Verwandlung states the metamorphosis in the first sentence with complete grammatical calm; this version delays and softens the event into a "gradual realisation." "Bedrohlich und fremd zugleich" names the atmosphere rather than constructing it through physical fact. The final sentence — "das Gewicht dieser Erkenntnis war fast unerträglich" — is the kind of emotional summary Kafka replaces with Gregor worrying about catching the 5 a.m. train.',
    },
    {
      id: 'kafka-ai3',
      text: `K. hatte gelernt, dass man mit Behörden nicht verhandeln konnte — man konnte nur warten, und warten, und noch einmal warten, bis die Behörde selbst entschied, dass es Zeit war, sich zu äußern. Diese Erkenntnis hatte er teuer bezahlt. Er hatte Anträge gestellt, Beschwerden eingereicht, Gespräche gesucht — alles ohne Ergebnis. Nun saß er hier, in dem schlecht beleuchteten Flur des Gerichts, und wartete. Es war ein Warten ohne Aussicht, aber K. hatte aufgehört, dagegen anzukämpfen. Es war einfacher so. Es war auch sinnloser, aber das war vielleicht dasselbe.`,
      isAI: true,
      hint: '"Es war einfacher so. Es war auch sinnloser, aber das war vielleicht dasselbe" is a tidy antithesis — easier / more pointless / perhaps the same — which delivers the Kafka thesis as an epigram. Josef K. never achieves this philosophical distance; he keeps fighting with the logic available to him. The passage summarises his situation as learned helplessness; Kafka renders the same condition through K.\'s continued futile attempts to engage the system on its own terms.',
    },
    {
      id: 'kafka-ai4',
      text: `Die Vorladung trug das Datum des vergangenen Donnerstags. Herr B. las sie zweimal durch, dann ein drittes Mal, langsamer. Der Behördenname im Briefkopf war ihm unbekannt. Die Formularnummer am oberen Rand verwies auf eine andere Formularnummer, die ihrerseits auf das ursprüngliche Dokument verwies. In welcher Angelegenheit er vorgeladen werde, war nicht angegeben. Der Termin — Zimmer 14, dritter Stock, Dienstag zwischen neun und elf — war bereits vergangen. Herr B. legte die Vorladung auf den Stapel mit den anderen Briefen, von denen er nicht wusste, ob er sie beantworten sollte oder ob die Nichtbeantwortung selbst eine Antwort war.`,
      isAI: true,
      hint: 'The circular cross-referencing form numbers are a nice Kafka imitation, but the final sentence wraps the bureaucratic trap into a clean reflection — "ob die Nichtbeantwortung selbst eine Antwort war." Kafka\'s characters don\'t achieve this neat paradox-awareness; they keep trying to determine the correct procedure. Also: a missed appointment is far too decisive an event — Kafka\'s bureaucracy never actually schedules anything that clearly.',
    },
  ],
};

export default author;
