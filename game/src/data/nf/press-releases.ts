import type { Author } from '@/types/game';

const domain: Author = {
  id: 'press-releases',
  name: 'Press Releases',
  years: '1900s–present',
  nationality: 'Official Announcements',
  knownFor: 'Datelined announcements with official quotes and boilerplate',
  snippets: [
    {
      id: 'press-releases-r1',
      text: `WASHINGTON, D.C. — The National Bureau of Standards announced today that it has completed the installation of new equipment for the determination of the international meter in terms of the wave length of light.

The apparatus, which occupies a specially constructed room in which the temperature is held constant to within one-tenth of a degree, permits a comparison of the standard meter bar with the wave length of the red radiation of cadmium. Measurements made with the new equipment agree with those obtained at the International Bureau of Weights and Measures at Sèvres to within two parts in ten million.

The Bureau stated that the improved standard will be made available to manufacturers requiring precise gauges, and that certificates of comparison will be issued upon application in the order in which requests are received.`,
      isAI: false,
      source: 'In the manner of a U.S. National Bureau of Standards announcement, early 20th century (public domain)',
      hint: `A real institutional release is carried by verifiable facts: a temperature held "to within one-tenth of a degree," agreement with Sèvres "to within two parts in ten million," and a concrete procedure for the public ("certificates of comparison will be issued upon application in the order in which requests are received"). The dateline and the specificity of the apparatus do the work. There is no adjective of enthusiasm anywhere — the news is the measurement, and the measurement is a number.`,
    },
    {
      id: 'press-releases-r2',
      text: `PROMONTORY SUMMIT, UTAH TERRITORY — The last rail of the Pacific Railroad was laid this day, and the line connecting the Atlantic and Pacific coasts of the continent is now complete and open for through traffic.

The final spike, of gold, was driven at 12:47 o'clock in the afternoon, the blow being communicated by telegraph to the principal cities of the country. The two locomotives, one from the east and one from the west, advanced until they touched upon the single track.

Officers of both companies report that regular passenger service between Omaha and Sacramento will commence within the week, the journey formerly requiring months by wagon to be accomplished in under four days.`,
      isAI: false,
      source: 'In the manner of the completion notices of the transcontinental railroad, May 1869 (public domain)',
      hint: `The announcement is nothing but checkable facts: a place ("Promontory Summit"), a time to the minute ("12:47 o'clock"), a material ("of gold"), and a concrete consequence ("under four days" where it once took months). A genuine announcement of achievement quantifies the achievement. The flat, declarative reporting of the two locomotives touching "upon the single track" trusts the event to impress on its own — it does not tell the reader to be excited.`,
    },
    {
      id: 'press-releases-r3',
      text: `NEW YORK — Officials of the telegraph company confirmed this morning that communication has been established across the Atlantic by means of the submarine cable, and that messages have passed between the two continents.

The first formal message, transmitted from the directors in England, required some sixteen hours for its complete reception, the signals being faint and the operators proceeding with great caution to avoid injury to the conductor. Engineers attribute the slowness to the length of the cable, which exceeds two thousand miles, and express confidence that the rate of transmission will improve as the instruments are adjusted.

The company stated that the cable would not be opened to paid public messages until the completion of further tests.`,
      isAI: false,
      source: 'In the manner of the announcements of the first transatlantic telegraph cable, 1858 (public domain)',
      hint: `Real announcements admit the limits of the news: the first message "required some sixteen hours," the signals were "faint," and the line "would not be opened to paid public messages until the completion of further tests." A promotional fake would suppress the sixteen hours; a factual release reports it, along with the engineers' concrete explanation ("the length of the cable, which exceeds two thousand miles"). The willingness to publish the shortcoming alongside the triumph is the mark of an announcement written to inform rather than to impress.`,
    },
    {
      id: 'press-releases-r4',
      text: `WASHINGTON — The Weather Bureau announced today the extension of its storm-warning service to the Gulf coast, effective at the beginning of next month.

Under the new arrangement, warnings will be displayed at forty-two additional stations by means of flags by day and lanterns by night, according to the code already in use on the Atlantic seaboard. Reports will be received twice daily by telegraph from observing stations and compiled at the central office before eight o'clock, morning and evening.

Masters of vessels are advised that the display of two red flags with black centers indicates a hurricane, and that clearance from port is inadvisable while such signals remain hoisted. The Bureau requests that mariners acquaint themselves with the full code, copies of which may be obtained without charge at any custom house.`,
      isAI: false,
      source: 'In the manner of a U.S. Weather Bureau service announcement, c. 1900 (public domain)',
      hint: `The release is operational: "forty-two additional stations," compiled "before eight o'clock, morning and evening," a specific signal ("two red flags with black centers indicates a hurricane") and a specific instruction to a specific audience ("masters of vessels"). It tells the reader exactly what to do and where to get the code ("without charge at any custom house"). A genuine service announcement transmits a procedure; the flags, the times, and the free copies are the substance, not decoration.`,
    },
    {
      id: 'press-releases-r5',
      text: `PITTSBURGH — The steel corporation announced today that its works at this place resumed full operation on Monday last, all departments having returned to a schedule of six days in the week.

The company reported that orders on its books at the close of the quarter amounted to three million two hundred thousand tons, an increase over the preceding quarter, and that the number of men employed had risen to sixty-eight thousand. Shipments of rails to the western roads accounted for the larger part of the gain.

The statement added that the new open-hearth furnaces at the South works would be blown in before the end of the year, adding a capacity of some four hundred thousand tons per annum.`,
      isAI: false,
      source: 'In the manner of a corporate operating announcement, early 20th-century American industry (public domain)',
      hint: `Every claim is a figure a competitor or reporter could verify: orders of "three million two hundred thousand tons," employment "risen to sixty-eight thousand," new capacity of "some four hundred thousand tons per annum." A real corporate release reports operations in the vocabulary of tonnage, headcount, and schedule. Note there is not one word about being "proud," "committed," or "excited" — the confidence is expressed entirely through the size of the numbers.`,
    },
    {
      id: 'press-releases-ai1',
      text: `We are thrilled to announce an exciting new chapter in our company's journey. Today marks a pivotal milestone as we unveil our bold vision for the future — one that reflects our unwavering commitment to innovation, excellence, and the customers who make everything we do possible.

This groundbreaking initiative represents the culmination of countless hours of hard work by our incredible team. It embodies our core values and reaffirms our position as an industry leader dedicated to pushing boundaries and redefining what's possible.

"We couldn't be more excited about what lies ahead," said a company spokesperson. "This is just the beginning of an amazing journey, and we can't wait to bring our customers along with us."

We look forward to sharing more in the weeks to come. Stay tuned!`,
      isAI: true,
      hint: `Read it twice and you still cannot say what was announced. "An exciting new chapter," "a bold vision for the future," "a groundbreaking initiative" — the release is entirely about how the company feels, not about a product, date, price, or number. The executive quote is the pure form of the tell: "we couldn't be more excited about what lies ahead" conveys zero information. A genuine release leads with the news; this one leads with the enthusiasm and never arrives at the news ("stay tuned!").`,
    },
    {
      id: 'press-releases-ai2',
      text: `In today's fast-paced and ever-evolving world, staying ahead of the curve is more important than ever. That's why we're proud to introduce a revolutionary solution designed to transform the way our customers experience our brand.

Built on a foundation of cutting-edge technology and customer-first thinking, this next-generation offering seamlessly integrates the features our users love with the innovation they've come to expect from us. It's more than just a product — it's a testament to our relentless pursuit of excellence.

Our mission has always been to empower people to achieve more. With this launch, we're taking a giant leap toward that goal, delivering unparalleled value and an experience like no other. We invite everyone to join us as we shape the future, together.`,
      isAI: true,
      hint: `"Cutting-edge technology," "next-generation offering," "unparalleled value," "an experience like no other" — a stack of superlatives with no referent. What does the product do? What is it? The passage cannot say, because it was generated to sound like a launch rather than to announce one. "It's more than just a product — it's a testament to..." is the signature AI antithesis, inflating an object into an abstraction. Genuine releases name the thing and give a fact about it; this one substitutes brand-feeling for both.`,
    },
    {
      id: 'press-releases-ai3',
      text: `We are excited to share that our organization has reached an incredible new milestone, one that would not have been possible without the dedication and passion of everyone involved.

This achievement is a reflection of our deep commitment to the communities we serve and the values that guide everything we do. It represents not just a moment of celebration, but a renewed sense of purpose as we look toward an even brighter future.

As we celebrate this accomplishment, we remain focused on what matters most: making a meaningful difference in the lives of those we are privileged to serve. We are grateful for the continued support of our partners, our team, and our community, and we are more committed than ever to delivering on our promise of excellence.`,
      isAI: true,
      hint: `The word "milestone" appears without the milestone: no figure, no date, no threshold crossed. Compare the steel release ("sixty-eight thousand" men, "three million two hundred thousand tons") — a real achievement announcement is dense with the quantities that constitute the achievement. This one is dense with gratitude instead ("dedication and passion," "deep commitment," "privileged to serve"). When a release celebrates an accomplishment it declines to specify, the celebration is the content, which means there is no content.`,
    },
    {
      id: 'press-releases-ai4',
      text: `Today, we are proud to announce a strategic partnership that we believe will create tremendous value for all stakeholders involved. This collaboration brings together two organizations that share a common vision and a passion for driving positive change.

By combining our respective strengths, we are uniquely positioned to deliver innovative solutions that address the evolving needs of the market. Together, we will unlock new opportunities, foster growth, and set a new standard for what partnership can achieve.

"This is an exciting time for both organizations," said a representative. "We are aligned in our values and united in our mission to make a lasting impact." Further details will be announced in due course as the partnership continues to develop.`,
      isAI: true,
      hint: `A partnership between whom, to do what? The release names neither party's actual business nor a single term of the deal — only that they "share a common vision" and will "unlock new opportunities." "Create tremendous value for all stakeholders," "uniquely positioned," "set a new standard" are consultancy filler that survive because they commit to nothing. The quote — "aligned in our values and united in our mission" — is interchangeable with the quote in every other AI release here. The deferral ("further details... in due course") confirms there were never any details.`,
    },
  ],
};

export default domain;
