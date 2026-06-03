import type { Author } from '@/types/game';

const author: Author = {
  id: 'sekulic',
  name: 'Isidora Sekulić',
  years: '1877–1958',
  nationality: 'Srpska',
  knownFor: 'Saputnici',
  snippets: [
    {
      id: 'sekulic-r1',
      text: `Putovao je sam, kao što putuju oni koji su naučili da ne čekaju. Pruga je bila duga i ravna, i prozor kupea bio je pun sive svetlosti onog zimskog prepodneva koje ne obećava ništa osim sebe samog. Posmatrao je polja što prolaze, ne videći ih zapravo, jer um mu je bio zauzet onim što je ostavio iza sebe, a ne onim što mu je dolazilo u susret. Tako je uvek — mi se uvek vraćamo, nikad ne idemo napred zapravo, i ono što zovemo putovanjem jeste samo promena mesta a ne promena nas samih.`,
      isAI: false,
      source: 'Saputnici, I',
      hint: 'Sekulić\'s essayistic voice delivers its aphorism (we always return, never truly go forward) as the narrator\'s generalisation emerging from the observed detail of the traveller\'s distracted gaze. The winter light that "promises nothing but itself" is a precise phenomenological observation, not atmospheric decoration. The abstract conclusion is earned by the concrete sensory setup.',
    },
    {
      id: 'sekulic-r2',
      text: `Ona je bila jedna od onih žena koje ne možeš odmah da definišeš, i koje ti ostaju u mislima baš zbog toga. Nije bila lepa na onaj način koji se pamti odmah, ali je imala nešto — možda u načinu na koji je slušala, sa celim telom, sa celom pažnjom, a da nije ništa govorila — što je ostavljalo utisak dubine. Razgovor sa njom bio je kao ulazak u sobu gde se upravo ugasilo svetlo: znaš da si bio negde, ali ne možeš da odrediš tačno gde.`,
      isAI: false,
      source: 'Saputnici, III',
      hint: 'The portrait proceeds through negation and approximation — not conventionally beautiful, "something" in her listening, an impression of depth that resists definition. The room-where-the-light-just-went-out simile captures the precise phenomenology of an encounter that leaves a trace without explanation. Sekulić thinks in epistemological images: how do we know what we know about another person.',
    },
    {
      id: 'sekulic-r3',
      text: `Grad je imao onu posebnu tišinu koja dolazi posle kiše, kada kaldrmisane ulice sjaje a prolaznici idu brže nego inače, kao da im ta vlažna svetlucavost daje neku vrstu hitnosti. Sedeo je na terasi kafane i pio kafu koja se hladila, i gledao ljude. Nije ih gledao s radoznalošću, nego s onom tihom pažnjom koja ne traži ništa osim da registruje: ovaj prolazi, ona staje, onaj gleda u izlog. Takvo posmatranje je forma odmora uma koji je previše dugo gledao unutra i sad se odmara gledajući spolja.`,
      isAI: false,
      source: 'Saputnici, V',
      hint: 'The post-rain city description is precise and specific (cobblestones, people walking faster) before moving to the phenomenological observation about inward vs. outward looking. Sekulić distinguishes between curiosity and quiet registering attention — a philosophical distinction embedded in observed behaviour. The cooling coffee is a temporal anchor, not a symbol.',
    },
    {
      id: 'sekulic-r4',
      text: `Pisati je teško ne zato što su reči teške, nego zato što je istina teška. Reči uvek nađu put, savitljive su i uslužne i pune volje da pomognu. Ali istina se opire, sklanja se, menja oblik čim misliš da si je uhvatio. Pisac koji piše lako ili nije još ozbiljno pokušao, ili je odustao od istine i zadovoljio se nečim lepšim i lakšim — verzijom sebe samog koja se može podneti i koja se čita glatko. Ja nisam nikad bila zadovoljna takvim pisanjem, i zbog toga sam pisala sporo i nikada previše.`,
      isAI: false,
      source: 'Iz pisama, 1934',
      hint: 'Sekulić\'s essayistic voice at its most direct: the argument is built through a precise distinction (words are easy; truth is difficult), then the claim about writers who write easily. The concession — "either hasn\'t tried seriously yet, or has given up on truth" — is intellectually generous in form but uncompromising in substance. The autobiographical application ("I have never been satisfied") is stated without pathos.',
    },
    {
      id: 'sekulic-r5',
      text: `More je taj dan bilo mirno do nerealnosti, gotovo uljeno, i Vesna je stajala na obali i gledala u daljinu sa onim izrazom koji dolazi kada mozak ne radi već samo prima. Setila se majke, ne jasno, nego onako kako se sećaju mrtvi — kao osećaj, kao nešto što ostaje u prostoru a ne u pamćenju. Majka je bila žena koja je verovala u lepotu kao u moralnu kategoriju: ružno je loše, lepo je dobro, i to nije bilo estetsko nego etičko uverenje. Vesna nikad nije bila sigurna da li je to mudrost ili zabluda, i nije prestajala da se pita.`,
      isAI: false,
      source: 'Đakon Bogorodičine crkve, II',
      hint: 'The dead are remembered as feeling rather than image — "as something that remains in space rather than memory" — is a phenomenologically exact description of grief, not a poetic formula. The mother\'s aesthetic-as-ethical conviction is stated as a characterising belief that Vesna cannot resolve (wisdom or delusion?) — Sekulić holds the question open rather than answering through the narrative. The oil-calm sea is precise meteorological observation, not mood-setting.',
    },
    {
      id: 'sekulic-r6',
      text: `Čitao je tu knjigu treći put, i treći put je osećao isto: da razume svaku rečenicu posebno, ali da mu celina izmiče. To je odlika nekih knjiga — daju se čitati a ne daju se razumeti, i ni posle trećeg čitanja nisi bliži nego posle prvog. Ali ne odustaješ, jer osećaš da je tu nešto, da je pisac znao nešto što nije umeo ili hteo da kaže direktno. Možda je to i jedina prava literatura: ona koja nosi više nego što pokazuje, i koja te uvek ostavlja sa utiscima a ne sa zaključcima.`,
      isAI: false,
      source: 'Iz pisama, 1939',
      hint: 'Sekulić formulates a theory of literature from an observed reading experience: understood sentence by sentence, inaccessible as a whole. The distinction between impressions and conclusions as the mark of real literature is delivered as a hypothesis the narrator holds, not as authorial pronouncement. Re-reading three times and remaining at the same distance is presented as a positive quality, not a failure.',
    },
    {
      id: 'sekulic-ai1',
      text: `Jesen je pala na grad kao zavesa, i sa njom je došla ona melanholija koja prati kraj svake stvari lepe. Lišće je padalo sa drveća na Kalemegdanu i Marta je gledala taj pad sa balkona, zamišljena i daleka, sa onim izrazom na licu koji dolazi kada su misli negde daleko od tela. Razmišljala je o ljubavi, o tome kako uvek dolazi i odlazi kao plima, i kako se nikad ne možeš zaštititi od njenog odlaska, ma koliko da se čuvaš. Tuga je bila lepa na taj tihi, podnošljiv način koji čini da čovek zaželi da tuga nikad ne prođe.`,
      isAI: true,
      hint: 'The autumn-as-curtain metaphor and the woman gazing from a balcony "thinking of love" is generic late-Romantic Serbian melancholy. Sekulić\'s women think in arguments and epistemological puzzles, not in love-as-tide metaphors. "Tuga koja je lepa na tihi podnošljiv način" is aestheticised sentiment; Sekulić would examine the cognitive structure of sadness rather than linger in its pleasantness.',
    },
    {
      id: 'sekulic-ai2',
      text: `Stefan je bio čovek protivrečnosti — hladan spolja, vatren iznutra, ćutljiv u društvu a rečit u samoći, ravnodušan prema malim stvarima a dubok osećaj skrivao ispod sve te površine mirnoće. Ona ga je razumela od prvog susreta, onim nepogrešivim instinktom koji neke žene imaju za muškarce koji pate u tišini. Nije ga pitala ništa, jer je znala da pitanja samo zaplaše takve ljude, kao što glasovi plaše ptice. Čekala je strpljivo, kao što se čeka proleće — znajući da će doći, ne znajući kada.`,
      isAI: true,
      hint: 'The man-of-contradictions formula (cold outside, burning inside; silent in company, eloquent alone) is a stock character type. Sekulić characterises through specific observed behaviour and essayistic reflection on what has been observed, not through symmetrical paradox lists. "Nepogrešivim instinktom koji neke žene imaju" is exactly the kind of gender generalisation Sekulić\'s analytical mind resists. The spring-waiting simile is decorative closure, not thought.',
    },
    {
      id: 'sekulic-ai3',
      text: `Beograd je bio grad koji nikad nije spavao zapravo, i u tom nesnu bilo je nešto i veselo i tužno istovremeno, kao sva mesta koja su previše živela i previše patila da bi se predala spokoju. Hodala je ulicama noću, sama, bez straha, jer strah od spoljnog nikad nije bio njen strah — njen strah je bio unutrašnji, od sopstvenih misli, od onih tamnih uglova u sebi gde razum ne dopire lako. Grad je razumela, sebe manje.`,
      isAI: true,
      hint: 'The "city that never truly sleeps" and the contrast between fearlessness in external space vs. inner darkness is a familiar urban-literary trope. Sekulić\'s Belgrade essays are precise in their urban observations — specific streets, specific kinds of people, specific times of day — not metaphysical pronouncements about the city\'s historical suffering. The closing epigram ("understood the city, myself less") is neatly constructed but achieves its effect through rhetorical balance rather than thought.',
    },
    {
      id: 'sekulic-ai4',
      text: `Knjige su bile njen jedini pravi dom. Ne kuća u kojoj je živela, ne zemlja iz koje je potekla, ne jezik koji je govorila svaki dan, nego knjige — te tihe, nepomerljive stvari koje su uvek tu gde si ih ostavio i koje te nikad ne izdaju. Otvarala je stare, mirisne sveske i osećala kako vreme prestaje da postoji, kako granica između nje i pisca nestaje, kako postaje deo neke velike reke misli koja teče od uvek i teći će zauvek. U tim trenucima je bila najsrećnija, i najsamlja, i to joj je odgovaralo.`,
      isAI: true,
      hint: 'Books as "only true home" and the dissolution of the boundary between reader and writer are topoi of the literary reader\'s self-portrait. Sekulić writes about reading with philosophical precision — what does reading do cognitively, what is the relationship between text and reader — not with this kind of sentimental merger fantasy. "Velika reka misli koja teče od uvek i teći će zauvek" is the grand-river-of-thought cliché Sekulić\'s analytic style punctures.',
    },
    {
      id: 'sekulic-ai5',
      text: `Razgovor je bio kratak i dubok, kao što bivaju razgovori između dva čoveka koji se dobro razumeju i koji znaju da reči nisu uvek najvažniji deo razgovora. Rekla je malo, on je rekao manje, ali ono što nije rečeno ispunjavalo je prostor između njih kao toplota koja dolazi od dobrog ognjišta. Posle je sedela sama i mislila na taj razgovar, pokušavajući da odredi šta je tačno bilo toliko važno u njemu, ali nije mogla. Neke stvari se ne mogu objasniti, samo osetiti, i to je ponekad bolje.`,
      isAI: true,
      hint: 'Sekulić would not be satisfied with "some things can only be felt, not explained" — that is the position she argues against throughout her essayistic work. Her intellectual project is precisely to articulate the inarticulate, to find language for what seems to resist language. The "warmth of a good hearth" filling the silence is sentimental register; Sekulić would analyse the cognitive content of silences in conversation, not aestheticise them.',
    },
  ],
};

export default author;
