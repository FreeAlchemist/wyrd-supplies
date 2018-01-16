var set = 'gaining grounds 2018';
var type = 'strategy';
var cards = {
	'rams' : {
		name: 'Ply for Information',
		text:'Knowing your opponent is half the battle.',
		setup:'On any Turn after the first, non-Peon models may take a (1) Interact Action targeting an enemy model they are engaged with that does not have the <b>Gathered Intel</b> Condition to gain the following Condition until the end of the game: <b>Gathered Intel</b>: This Condition is removed if this model suffers Severe damage. This Condition cannot be gained in any way other than as is stated in this Strategy.',
		special:'',
		vp:'At the end of every Turn after the first, if a Crew has more models in play with the <b>Gathered Intel</b> Condition than the opposing crew, that Crew earns 1 <b>VP</b>. Then remove the <b>Gathered Intel</b> Condition from every model in play.',
	},
	'crows' : {
		name: 'Ours',
		text:'"A victor gives no quarter!"',
		setup:'Divide the table into four 18" by 18" table Quarters.',
		special:'',
		vp:'At the end of every Turn after the first, add up the Soulstone cost of all friendly non-Peon models in each table Quarter, not counting any models that: were summoned this game, are within any other table Quarters, or are within 6" of the Center of the table. The Crew with the highest Soulstone cost within each table Quarter controls it. For this Strategy, Masters and non-Master models with a cost of 0 count as having a cost of 10. If a Crew controls at least two table Quarters, that Crew earns 1 <b>VP</b>.',
	},
	'masks' : {
		name: 'Symbols of Authority',
		text:'"Leave behind the symbols that will be remembered for years to come."',
		setup:'Before either player deploys models, starting with the second player, each player places three 50mm, Ht 5, Blocking, Impassable, Hard Cover Strategy Markers fully on their side of the table, not in their deployment zone, and at least 10" from another Strategy Marker on their side of the table. These markers cannot be placed in base contact with impassable terrain.',
		special:'On any Turn after the first, non-Peon models may take a (1) Interact Action targeting a Strategy Marker within 1" on their opponent\'s side of the board to remove it from play.',
		vp:'At the end of every Turn after the first, a Crew earns 1 <b>VP</b> if it removed one or more Strategy Markers this Turn. At the end of the game, a Crew earns 1 <b>VP</b> if they have any Strategy Markers on their side of the table.',
	},
	'tomes' : {
		name: 'Public Executions',
		text:'"Make them bleed, and watch the look of horror on your enemy\'s face."',
		setup:'On any Turn after the first, whenever a non-Peon model kills or sacrifices a non-Peon model it considers an enemy, it gains the following Condition until the end of the game: <b>Shed Blood</b>: At the end of this model\'s Activation, remove this condition if no enemy models have line of sight to this model. This Condition cannot be gained in any way other than as is stated in this Strategy.',
		special:'',
		vp:'At the end of every Turn after the first, if a Crew has more models in play with the <b>Shed Blood</b> Condition than the opposing crew, that Crew earns 1 <b>VP</b>. Then remove the <b>Shed Blood</b> Condition from every model in play.',
	},
	'jockers' : {
		name: 'Supply Wagons',
		text:'"Who doesn\'t love a good escort mission?"',
		setup:'Before deploing models, starting with the 2nd player, each places 1 50mm, Ht 3, Blocking, Impassable, Hard Cover friendly Supply Wagon Marker, in their deployment zone and not in terrain.',
		special:'Non-Peon models in base contact: (1) Interact Action to push the Supply Wagon Marker in any direction, ignoring intervening models. If it would come into base contact with impassable terrain, it stops in base contact, if that terrain was a Terrain Marker, remove it and then continue the push as normal. Markers cannot end a push on a models base. The distance of the push:<ul><li>30mm: Up to 2"</li><li>40mm: Up to 3"</li><li>50mm: Up to 4"</li></ul>',
		vp:'At the end of every Turn after the first, a Crew earns 1 <b>VP</b> if they have a friendly Supply Wagon at least partially on their opponent\'s side of the board.',
	},
}