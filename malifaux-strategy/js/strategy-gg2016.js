var set = 'gaining grounds 2016';
var type = 'strategy';
var lang = 'eng';
var cards = {
	'rams' : {
		name: 'Extraction',
		text:'Rumor was he discovered something valuable during his last excavation, something that anyone would kill for. It\'s our job to make sure we\'re the only ones who hear what he has to say.',
		setup:'Place an Informant Marker at the Center of the table.',
		special:'At the end of every Turn after the first, after scoring <b>VP</b>, the player with the most non-Peon models within 6" of Informant Marker may place the Marker up to 3" from its current location, not into terrain or base contact with a model',
		vp:'At the end of each Turn after the first, a Crew earns 1 VP if it has two or more non-Peon models within 6" of the Informant Marker.',
	},
	'crows' : {
		name: 'Guard the Stash',
		text:'"I told you we shouldn\'t pick such a central location to hide the Soulstones!" "Well, it must have been a good choice if they\'re hiding theirs there too!"',
		setup:'Place two 50mm Stash Markers (Ht5, blocking, impassable, hard cover) on the Centerline each 5" on either side of the Center of thr board (10" apart from each other).',
		special:'',
		vp:'At the end of each Turn after the first, a Crew earns 1 VP if it has at least one non-Peon model within 2" of each Stash Marker.',
	},
	'masks' : {
		name: 'Interference',
		text:'"What do you think they\'re doing?" the Handler asked, looking over the stationary Gamin spread out across the field. "No idea, but let\'s stop them just in case."',
		setup:'Divide the table into four 18" by 18" table Quarters.',
		special:'',
		vp:'At the end of each Turn after the first, a Crew earns 1 VP if it controls two or more table Quarters. <p>To control a table Quarter, the Crew must have the most unengaged non-Peon models within the table Quarter. These models cannot be within 6" of the Center of the table, or partially within another table Quarter.</p>',
	},
	'tomes' : {
		name: 'Headhunter',
		text:'"Maybe this time they\'ll believe me when I say I killed 5 men" he muttered to himself as he cut off the next fellow\'s scalp. It was gruesome work, but this time he was going to get paid.',
		setup:'',
		special:'Whenever a model kills or sacrifices a non-Peon model which it considers an enemy, the model which made the kill must place a 30mm Head Marker within 3" and LoS of the killed or sacrificed model before removing it from play. This Marker may not be placed in base contact with any model; if there is nowhere it can legally be placed, then skip placing a Marker. Any model in base contact with a Head Marker may make a (1) Interact Action with it to remove it from play.',
		vp:'At the end of every Turn after the first, a Crew earns 1 VP if it removed at least one Head Marker from play that turn.',
	},
	'jockers' : {
		name: 'Collect the Bounty',
		text:'"You\'re telling me that thing is only worth 10 Scrip?" he whined. "That\'s what I\'m telling you." "It\'s one of those Hanged! No WAY that\'s only worth 10 Scrip!" "I don\'t make the rules, bud. Take it or leave it"',
		setup:'',
		special:'Whenever a model is reduced to 0 Wounds by a non-Peon model, the Crew which reduced it to 0 Wounds gains a number of Bounty Points depending on the type of model which was reduced to 0 Wounds, so long as the Crew considered the model an enemy. Models are worth the following number of Bounty Points:<div class="text-float"><b>PEONS</b>:0<br><b>MINIONS</b>:1<br><b>ENFORSERS</b>:2<br><b>HENCHMEN</b>:3<br><b>MASTERS</b>:4</div><div class="text-float">At the end of each Turn, after calculating VP, reset each player to 0 Bounty Points.</div>',
		vp:'At the end of every Turn after the first, the player with the most Bounty Points scores 1 VP. Either player may also score 1 VP if the opposing player has no models left in play. No more than 1 VP may be scored from this strategy per Turn. If both players still have models in play and they are tied for Bounty Points, neither will score any VP.',
	},
}