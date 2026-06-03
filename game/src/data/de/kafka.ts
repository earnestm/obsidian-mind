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
      text: `Als K. das Büro des Untersuchungsrichters betrat, empfand er sofort eine diffuse Beklemmung, die er sich nicht vollständig erklären konnte. Der Raum war groß und schlecht beleuchtet, mit hohen Fenstern, die wenig Licht hereinließen. Hinter einem langen Tisch saßen mehrere Beamte in dunklen Anzügen und schrieben, ohne von ihrer Arbeit aufzusehen. K. räusperte sich. Niemand reagierte. Er trat näher an den Tisch heran. Erst dann hob einer der Beamten den Kopf und betrachtete ihn mit einem Ausdruck, der schwer zu deuten war — zwischen Misstrauen und Gleichgültigkeit.`,
      isAI: true,
      hint: '"Eine diffuse Beklemmung, die er sich nicht vollständig erklären konnte" — Kafka\'s characters never say they feel "diffuse anxiety they can\'t explain"; they try to explain it through procedural logic and fail. The bureaucratic atmosphere here is rendered through visual mood (poorly lit room, dark suits) rather than through the mechanics of procedure. The officials\' ambiguous expression is summarised rather than enacted.',
    },
    {
      id: 'kafka-ai2',
      text: `Gregor lag auf dem Rücken und versuchte, sich an die Ereignisse des gestrigen Tages zu erinnern. Es war ihm klar, dass sich etwas Außerordentliches ereignet hatte, obwohl er noch nicht genau wusste, was. Er spürte, dass sein Körper sich verändert hatte — schwerer, steifer, fremder. Mit großer Anstrengung drehte er sich zur Seite. Es war ungewöhnlich schwierig, und er konnte die Ursache nicht sofort benennen. Langsam wurde ihm bewusst, dass die Welt, wie er sie kannte, nicht mehr dieselbe sein würde.`,
      isAI: true,
      hint: 'The original Verwandlung states the metamorphosis in the first sentence; this AI version makes Gregor "slowly become aware" of his condition over a paragraph, with phrases like "the world as he knew it would no longer be the same" — a reflective melancholy Kafka never allows. Kafka\'s Gregor immediately thinks about work and trains, not about existential loss. The horror is in the normality, not in the dawning awareness.',
    },
    {
      id: 'kafka-ai3',
      text: `Die Behörde, das wusste K. nun, war kein einfacher Gegner. Sie war überall und nirgends, gegenwärtig in jeder Verzögerung, in jeder schlecht ausgefüllten Formularnummer, in jeder unklaren Zuständigkeit. Man kämpfte nicht gegen Personen, sondern gegen Systeme — gegen eine Logik, die sich jeder direkten Konfrontation entzog, die immer schon einen Schritt weiter war als man selbst. K. hatte das verstanden, spät vielleicht, aber er hatte es verstanden.`,
      isAI: true,
      hint: '"Die Behörde war überall und nirgends" and "man kämpfte nicht gegen Personen, sondern gegen Systeme" are abstract formulations of what Kafka dramatises concretely. Josef K. never achieves this philosophical clarity — his tragedy is that he cannot understand the system even as it processes him. "K. hatte das verstanden" would be the end of a Kafka novel, not an insight inside one.',
    },
    {
      id: 'kafka-ai4',
      text: `Eines Tages erhielt Herr Bendemann eine Vorladung. Sie war kurz und auf einem amtlichen Formular gedruckt, ohne persönliche Ansprache. Der Stempel war klar leserlich, der Behördenname dagegen beinahe unverständlich durch eine schlecht eingefärbte Drucktype. Er solle sich am Donnerstag, um neun Uhr morgens, in Zimmer 17 des Stadtamts einfinden. Der Grund der Vorladung war nicht angegeben. Herr Bendemann starrte lange auf das Dokument. Dann legte er es sorgfältig auf seinen Schreibtisch, trank seinen Kaffee aus und machte sich auf den Weg.`,
      isAI: true,
      hint: 'The summons with no stated reason and the character\'s matter-of-fact compliance are recognisably Kafkaesque, but the execution is too neat: the smudged print, the illegible name, the careful placement of the document are physical details in the right mode. What\'s missing is the bureaucratic language itself — Kafka\'s documents quote their own procedures, use subordinate clauses that qualify the qualifications. The coffee-drinking exit is too decisive for Kafka\'s paralysed protagonists.',
    },
  ],
};

export default author;
