import type { Author } from '@/types/game';

const domain: Author = {
  id: 'manuals',
  name: 'Instruction Manuals',
  years: '1896–present',
  nationality: 'Technical Writing',
  knownFor: 'How-to guides, field manuals, and operating instructions',
  snippets: [
    {
      id: 'manuals-r1',
      text: `MEASURING INGREDIENTS. Measures used are gill, cup, tablespoon, and teaspoon. The gill is one-half cup, and cup used is common kitchen cup holding one-half pint.

All measurements are level.

To measure a cupful, put in the ingredient by spoonfuls, or from a scoop, and level with a knife.

To measure a tablespoonful, fill the spoon, and level with a knife.

To measure one-half tablespoonful, divide with knife lengthwise of spoon.

To measure one-fourth tablespoonful, divide halves crosswise.

Dry ingredients, such as flour, meal, and powdered sugar, should be sifted before measuring. Mixtures like flour and baking powder, or flour, soda, and cream of tartar, should be thoroughly mixed by sifting, before measuring.

To measure butter, lard, and other solid fats, pack solidly into cup or spoon, being sure all cavities are filled, and level with a knife.`,
      isAI: false,
      source: 'Fannie Merritt Farmer, "The Boston Cooking-School Cook Book," 1896',
      hint: 'This is the passage that made level measurement standard. Note the exact equivalences ("gill is one-half cup," cup "holding one-half pint") and the branching procedure for fractions — divide lengthwise for a half, crosswise for a fourth. Every instruction ends with a physical action ("level with a knife") and names specific substances (meal, powdered sugar, cream of tartar). AI kitchen prose rounds toward "a cup of flour" and never bothers to tell you how to bisect a spoonful.',
    },
    {
      id: 'manuals-r2',
      text: `To crank the engine, first see that the spark and throttle levers on the steering column are in the position shown for cranking, that is, the throttle lever about one-third of the way down the quadrant, and the spark lever retarded, or well up toward the top of the quadrant.

Turn on the switch, either to "Bat" or "Mag." It is well to start the engine on the battery, if the car is so equipped, and after the engine is running switch over to the magneto by turning the switch to "Mag."

Now grasp the starting crank, pull up on it quickly, and let the compression of the engine be taken while the crank is on the up stroke. Never push down on the crank, always pull up, for should the engine kick back, the crank would fly downward and injury be avoided.

After the engine starts, advance the spark lever and adjust the throttle to give the desired speed.`,
      isAI: false,
      source: 'Ford Motor Company, "Ford Model T Owner\'s Manual," early 1910s',
      hint: 'A real hand-cranking procedure names the actual controls — spark and throttle levers, the quadrant, the "Bat"/"Mag" switch positions — because getting them wrong stalls the car. The safety instruction is mechanically specific: always pull UP on the up stroke so a kick-back throws the crank away from your arm. AI would write "be careful when starting the engine"; a period manual tells you which way the crank flies and why.',
    },
    {
      id: 'manuals-r3',
      text: `To make a square lashing: Make a clove hitch on the upright pole close to where the two poles cross. Take the free end of the rope and lead it over the crosspole and behind the upright, then over the upright and behind the crosspole, keeping outside the previous turns on one side and inside on the other.

Take three complete turns in this manner, drawing each turn tight. Then make two or three "frapping" turns between the poles, around the turns already made, and draw them very tight, as this binds the whole together.

Finish off with a clove hitch on the crosspole. When properly made, a square lashing will hold two poles firmly at right angles and will not slip.`,
      isAI: false,
      source: 'Boy Scouts of America, "Handbook for Boys," 1911',
      hint: 'Knot instructions live or die on exact sequence: clove hitch to start, over-and-behind in a named order, three turns, then "frapping" turns to cinch, clove hitch to finish. The vocabulary is trade-specific (frapping, clove hitch, at right angles) and the count is precise — three turns, not "a few." AI craft writing gestures at "wrap the rope securely several times" and omits the frapping turns that actually make the lashing hold.',
    },
    {
      id: 'manuals-r4',
      text: `The rifle is aimed by aligning the sights on the target. Close the left eye. Look through the notch of the rear sight, raise or lower the piece until the top of the front sight is on a level with the top of the rear sight, and in the middle of the notch. This is called the line of sight.

Then, without disturbing the alignment of the sights, bring them to bear on the target so that the top of the front sight is at the bottom of the bull's-eye. This point of aim, at the bottom of the bull's-eye, allows the bull to remain in view and gives the aiming eye a definite point on which to rest.

Hold the breath while aiming. Do not jerk the trigger; squeeze it steadily, increasing the pressure until the piece is discharged, and be careful not to disturb the aim as the trigger is pressed.`,
      isAI: false,
      source: 'War Department, U.S. Army, "Manual for Noncommissioned Officers and Privates of Infantry," 1917',
      hint: 'Marksmanship instruction is unforgiving about geometry: front sight level with the rear, centered in the notch, held at the bottom of the bull so the target stays visible. "Squeeze, do not jerk" is the canonical distinction, stated as a physical procedure — increase pressure steadily until it discharges. AI would say "aim carefully and fire when ready"; the real manual explains why the point of aim sits below the bull.',
    },
    {
      id: 'manuals-r5',
      text: `To can string beans by the cold-pack method: Select young, tender pods. Wash them, string, and cut or break into pieces about one inch long.

Blanch the beans by plunging them into boiling water for five minutes, then dip quickly into cold water. This blanching shrinks the beans and makes them pack more closely.

Pack the beans into hot jars to within one-half inch of the top. Add one level teaspoonful of salt to each quart jar. Fill the jar with boiling water, place the rubber and cap in position, but do not tighten.

Sterilize by processing the jars in a boiling-water bath for two hours. Remove the jars, tighten the covers, and set them upside down to cool, away from any draft. Test each jar for leaks before storing.`,
      isAI: false,
      source: 'U.S. Department of Agriculture, Farmers\' Bulletin No. 853, "Home Canning of Fruits and Vegetables," c. 1917',
      hint: 'Home-canning instructions are safety-critical, so they carry real numbers: blanch five minutes, pack to one-half inch of the top, one level teaspoon of salt per quart, process two hours in a boiling-water bath. The counter-intuitive step — cap but "do not tighten" before processing — is exactly the detail AI omits. The passage explains the reason for blanching (shrinks the beans to pack closer) rather than just asserting a step.',
    },
    {
      id: 'manuals-ai1',
      text: `Getting started with your new appliance is quick and easy! Before you begin, take a moment to familiarize yourself with the device and its various components to ensure a smooth and enjoyable experience.

First, carefully unbox the unit and make sure all parts are present. Next, find a suitable location that is clean, dry, and away from any potential hazards. Safety should always be your top priority, so please be sure to follow all recommended guidelines at all times.

Once you're all set up, simply power on the device and let it do the work for you. It's really that easy! With just a little bit of preparation, you'll be enjoying reliable performance and peace of mind in no time.

Remember, taking good care of your appliance will help ensure it continues to serve you well for years to come. If you ever have any questions, don't hesitate to consult this guide or reach out for assistance. Happy using!`,
      isAI: true,
      hint: 'A real setup section names the parts, the clearances in inches, and the voltage. This one says "various components," "a suitable location," and "away from any potential hazards" without a single measurement. The reassurance is the tell — "quick and easy," "it\'s really that easy," "peace of mind," "Happy using!" — filler that would never survive in a manual that has to prevent an actual malfunction.',
    },
    {
      id: 'manuals-ai2',
      text: `Assembling your new bookshelf is a rewarding and straightforward process. To begin, lay out all of the included components and hardware in a clear, open workspace so everything is within easy reach.

Start by connecting the main panels together, making sure they are properly aligned before securing them. Use the provided fasteners to hold the pieces firmly in place, being careful not to overtighten. Take your time and work methodically, as patience and attention to detail will ensure the best possible result.

Once the frame is assembled, add the shelves one by one, checking that each is level and stable as you go. When everything is in place, give the entire unit a gentle check to confirm it feels sturdy and secure.

And that's it — your beautiful new bookshelf is ready to be enjoyed. With a little care and effort, you've created something both functional and stylish that will brighten your space for years to come.`,
      isAI: true,
      hint: 'Flat-pack instructions turn on part numbers and counts: "attach panel A to panel B with four 15 mm cam bolts." This version has no letters, no bolt sizes, no counts — just "the provided fasteners" and "the main panels." "Being careful not to overtighten" appears without a torque figure or a stopping cue. The closing flourish about brightening your space "for years to come" is marketing copy, not assembly.',
    },
    {
      id: 'manuals-ai3',
      text: `Caring for your garden is a wonderful journey that rewards patience, attention, and a genuine love for the natural world. By following a few simple principles, you can help your plants thrive throughout every season.

First and foremost, remember that water is essential to healthy growth. Be sure to water your plants regularly, taking care not to overwater or underwater, as balance is key. Likewise, adequate sunlight plays a vital role, so position your plants where they can receive the light they need to flourish.

Soil quality is another important factor. Rich, well-nourished soil provides the foundation for strong, vibrant plants. Consider adding nutrients periodically to keep your garden happy and healthy.

Above all, be attentive and responsive to your plants' needs. Every garden is unique, and by observing closely and adjusting as needed, you'll cultivate a space that brings joy, beauty, and a sense of accomplishment for seasons to come.`,
      isAI: true,
      hint: 'A real garden guide gives inches of spacing, depth of planting, weeks to germination, and a specific NPK ratio. This one offers "water regularly," "adequate sunlight," and "adding nutrients periodically" — every quantity dissolved into vagueness. "Not to overwater or underwater, as balance is key" is a tricolon of non-information. Nothing here could be followed incorrectly because nothing here can be followed at all.',
    },
    {
      id: 'manuals-ai4',
      text: `Operating your new coffee maker is designed to be simple, convenient, and enjoyable from the very first cup. Before brewing, please ensure that the unit is placed on a stable, level surface and that all components are clean and properly in place.

To brew, simply add fresh water and your preferred amount of coffee, then select your desired settings. The machine will handle the rest, delivering a delicious, satisfying cup every time. It truly couldn't be easier!

For the best results, we recommend using fresh, high-quality ingredients and cleaning your machine regularly. A little routine maintenance goes a long way toward ensuring lasting performance and consistently great-tasting coffee.

Should you encounter any issues, rest assured that most concerns can be easily resolved by consulting the troubleshooting section. Enjoy your coffee, and savor the wonderful moments it brings!`,
      isAI: true,
      hint: 'Notice what a brewing procedure needs and this lacks: fill line in cups, grams or tablespoons of grounds, water temperature, cycle time. Instead "your preferred amount of coffee" and "your desired settings," with "the machine will handle the rest." The stacked reassurance — "simple, convenient, and enjoyable," "it truly couldn\'t be easier," "rest assured" — is doing the work that concrete numbers would do in a real manual.',
    },
  ],
};

export default domain;
