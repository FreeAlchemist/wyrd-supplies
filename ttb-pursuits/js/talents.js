var talents = {
	general :{
		book:'Fated Almanac',
		'Armor Training' : {
				requirement:'req1',
				story:'',
				text:'gen1',
			},
		'Better Part of Valor' : {
				requirement:'req2',
				story:'',
				text:'gen2',
			},
	},
	academic : {
		book:'Fated Almanac',
		'Avid Student' : {
				story:'',
				text:'Whenever failed an Academic duel, may draw a card. Epilogue: may advance in any Academic skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Student of Knowledge' : {
				story:'This character has frequent flashes of brilliant insight.',
				text:'He gains the following Trigger on all Academics skill Duels:',
				trigger:'♣ Insight: After resolving, draw a card.'
			},
		'Eureka Moment' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Great Thinker' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Rational Mind' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Applied Learning' : {
				story:'',
				text:'Choose an Academic skill as well as a secondary skill. Whenever the character makes a skill Challenge with the secondary skill, he may exchange the chosen Academic skill rating for the Aspect rating used. A character may have the Applied Learning Talent multiple times, but each time a new combination of Academic skill and secondary skill must be chosen. Note: The combination of skills selected must be approved by the Fatemaster, as some Fatemasters may not feel that certain combinations (such as Literacy and Dodge) make logical sense in their campaign.',
				trigger:'',
			},
		'Sum of All Knowledge' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	criminal : {
		book:'Fated Almanac',
		'Opportunist' : {
				story:'',
				text:'Whenever failed an Expertise duel, may draw a card. Epilogue: may advance in any Expertise skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Competitive Edge' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Improvise' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Quick Work' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Nimble' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Surprise Assault' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Master of Misdirection' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	dabbler : {
		book:'Fated Almanac',
		'Epiphany' : {
				story:'',
				text:'When failed a Magic duel during dramatic time, may draw a card. Epilogue: may advance in any Magical skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Arcane Musings' : {
				story:'',
				text:'This character removes a single ♣ from the TN of any Spell he casts.',
				trigger:'',
			},
		'Empowered Channeling' : {
				story:'',
				text:'When casting a spell, the character increases the value of his Focus condition by 1. This Talent only applies if the character has the Focus condition (he does not gain it if he does not have it).',
				trigger:'',
			},
	},
	drudge : {
		book:'Fated Almanac',
		'Hard days night' : {
				story:'',
				text:'Whenever failed a Training duel, may draw a card. Epilogue: may advance in any Training skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Long Days' : {
				story:'',
				text:'The character may discard a Twist Card to automatically pass any Unconsiosness Challenge. In addition, he gains the following Trigger on all Resilence and Tenacity Duels (but not Defence or Willpower Duels):',
				trigger:'♥ Recuperate: After resolving, heal 1 damage.',
			},
		'Steady Pace' : {
				story:'',
				text:'During an Ongoing Challenge, if the character succeeds at a Challenge Flip he gains a + to the next Challenge Flip. A character may have this Talent up to three times, and the effects stack.',
				trigger:'',
			},
		'Team Work' : {
				story:'',
				text:'When assisting another character or being assisted, this character adds an additional + to the Challenge Flip. A character may have this Talent up two times, and the effects stack.',
				trigger:'',
			},
		'Slow To Die' : {
				story:'',
				text:'Critical Effect Flips against this character gain -. A character may have this Talent up to three times, and the effects stack.',
				trigger:'',
			},
		'Long Suffering' : {
				story:'',
				text:'The character may use Resilence instead of Tenacity, or vice versa, when calculating the Initial Acting value of any Challenge Flip that uses one of those two Aspects.',
				trigger:'',
			},
		'Cant\'t Keep Me Down' : {
				story:'',
				text:'The character may discard a card from his Control Hand to ignore the negative effects of all Critical Effects until the end of his turn. This does not heal the effects, the character just powers through the pain, or pushes his damaged body beyond normal limits.',
				trigger:'',
			},
	},
	graverobber : {
		book:'Fated Almanac',
		'Black soul' : {
				story:'',
				text:'When failed a Magic duel during dramatic time, may draw a card. Epilogue: may advance in any Magical skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Morbid Thoughts' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Deathly Pallor' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Macabre Infusions' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Unholy Beacon' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	guard : {
		book:'Fated Almanac',
		'Now you are pissing me off' : {
				story:'',
				text:'When failed a Close Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Close Combat skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Stoic Defender' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Inevitable Defence' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Take The Hit' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Hard To Wound' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Flurry' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Unyielding' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	gunfighter : {
		book:'Fated Almanac',
		'Finger on the trigger' : {
				story:'',
				text:'When failed a Ranged Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Ranged Combat skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Quick Draw' : {
				story:'',
				text:'The character gains following Trigger on any Challenge Flip (including Initiative Flips). In addition, the character treats (1) Ready Weapon Actions as if they were (0) Ready Weapon Actions.',
				trigger:'♥ Quick Draw: Take a Ready Weapon Action immediately after this Challenge Flip is resolved.',
			},
		'Call Out' : {
				story:'',
				text:'This character may discard a card from his Control Hand to give a target character a -3 penalty on any attack Action that does not target this character.',
				trigger:'',
			},
		'Gunfighter' : {
				story:'',
				text:'Choose a Ranged skill; this character may choose to use the weapon as if its Range were melee-2 yards. A character may have this Talent multiple times, choosing a different Ranged skill each time.',
				trigger:'',
			},
		'No Time For This' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Rapid Fire' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Ranged Expert' : {
				story:'',
				text:'This character generates an additional AP on its turn, which must be used to make a strike with a Ranged weapon.',
				trigger:'',
			},
	},
	mercenary : {
		book:'Fated Almanac',
		'Deadset' : {
				story:'',
				text:'When failed a Ranged Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Ranged Combat skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Speed Loading' : {
				story:'',
				text:'Choose a type of firearm skill (Long Arms, Pistols, Shotguns, or Heavy Weapons). The character gains the following Trigger on any attack Action with that type of weapon.',
				trigger:'♥: Reload this weapon if its Reload AP cost is 2 or lower.',
			},
		'Gruesome Attack' : {
				story:'',
				text:'Choose a single Melee or Ranged skill. All Critical Effect Flips generated by attacks using the chosen skill gain +. A character may have this ability multiple times (even with the same skill) and the effects stack.',
				trigger:'',
			},
		'Tricky Shot' : {
				story:'',
				text:'Choose a Ranged Combat skill. While making a Ranged attack Challenge Flip with the chosen skill, the character may choose to ignore one negative Fate Modifier source.',
				trigger:'',
			},
		'Coin For Kills' : {
				story:'',
				text:'The character gains + to the Damage Flip of any attack against a target he was paid to fight (or kill). It falls to Fatemaster’s discretion what counts as “paid to fight,” but for the most part, if the character was hired to commit violence, he should have access to this ability in pursuit of that contract.',
				trigger:'',
			},
		'Relentless' : {
				story:'',
				text:'The character doesn\'t believe that life is scared, not even his own. This character is immune to the effects of Horror.',
				trigger:'',
			},
		'Endless Pursuit' : {
				story:'',
				text:'This character gains + to any Defense Flips against attacks made by targets he was paid to fight. Furthermore, the character may choose to declare anyone with a bounty on their head as someone he was paid to fight (or kill).',
				trigger:'',
			},
	},
	overseer : {
		book:'Fated Almanac',
		'Oversight' : {
				story:'',
				text:'Whenever failed an Social duel, may draw a card. Epilogue: may advance in any Social skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Converted Effort' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Time Is Money' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Work Smarter' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Delegate' : {
				story:'',
				text:'',
				trigger:'',
			},
		'You Lazy So & So' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Now Men!' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	performer : {
		book:'Fated Almanac',
		'Flare for the dramatic' : {
				story:'',
				text:'Whenever failed an Social duel, may draw a card. Epilogue: may advance in any Social skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Powerful Impression' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Grace Under Fire' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Helluva Entrance' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Classically Trained' : {
				story:'',
				text:'',
				trigger:'',
			},
		'Graceful Exit' : {
				story:'',
				text:'',
				trigger:'',
			},
		'That\'s Showbiz' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	pioneer : {
		book:'Fated Almanac',
		'Rugged individual' : {
				story:'',
				text:'Whenever failed an Training duel, may draw a card. Epilogue: may advance in any Training skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Born Under A Wandering Star' : {
				story:'',
				text:'The character never suffers negative Fate Modifiers to his Navigation or Wilderness tests.',
				trigger:'',
			},
		'Circle The Wagons' : {
				story:'',
				text:'The character can discard a card from his Control Hand to make all friendly characters that can hear him treat all cover as Hard cover.',
				trigger:'',
			},
		'Tougth as Nails' : {
				story:'',
				text:'When attacking this character with a Ranged or Melee strike, the Attacker cannot declare any Triggers.',
				trigger:'',
			},
		'Ornery' : {
				story:'',
				text:'When the character suffers a Critical Effect the effect suffers a -3 penalty to the Flip. A character may have this Talent more than once, and the effects stack.',
				trigger:'',
			},
		'Soldier On' : {
				story:'',
				text:'At the beginning of Dramatic Time this character may heal 2/3/5 damage, if he has 1 or more Wound remaining. In addition, he may choose to have any friendly character that can hear him also heal 2/3/5 damage, if the character has 1 or more Wounds remaining.',
				trigger:'',
			},
		'Relentless' : {
				story:'',
				text:'The character doesn\'t believe that life is scared, not even his own. This character is immune to the effects of Horror.',
				trigger:'',
			},
	},
	scrapper : {
		book:'Fated Almanac',
		'Bloody minded' : {
				story:'',
				text:'When failed a Close Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Close Combat skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Close the Gap' : {
				story:'',
				text:'When this character declares a Charge Action he may draw a Twist card.',
				trigger:'',
			},
		'Flurry' : {
				story:'',
				text:'Choose a Close Combat skill. This character has access to the following attack Action with the chosen skill: (2) Flurry: The character may discard a Twist Card to take three 1 AP strikes with a Melee weapon using the chosen skill against a single target. A character may have this Talent multiple times, each time he must choose a different Close Combat skill.',
				trigger:'',
			},
		'Recovery' : {
				story:'',
				text:'This character gains + to all Healing Flips he makes. A character may take this Talent more than once, and its effects stack.',
				trigger:'',
			},
		'Watch Them All' : {
				story:'',
				text:'This character gains + to any attempt to resist intimidation or deception. In addition, this character gains a + to all Initiative Flips.',
				trigger:'',
			},
		'Wicked' : {
				story:'',
				text:'When this character makes a disengaging strike, he deals damage with his weapon, in addition to stopping the target’s movement.',
				trigger:'',
			},
		'Melee Expert' : {
				story:'',
				text:'This character generates an additional AP on its turn, which must be used to make a strike with a Melee weapon.',
				trigger:'',
			},
	},
	tinkerer : {
		book:'Fated Almanac',
		'Gear head' : {
				story:'',
				text:'When failed a Magic duel during dramatic time, may draw a card. Epilogue: may advance in any Magic skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Push the Limits' : {
				story:'',
				text:'Character may cause a construct under his control to suffer 1 damage that may not be reduced. If he does so, the construct gains a + to its next Action. The character may use this ability on himself if he has at least one pneumatic limb and that limb is used in the Action.',
				trigger:'',
			},
		'Combat Construct' : {
				story:'',
				text:'Whenever the character uses Artefacting to create or repair a construct, he may choose to give it a pneumatic skill equal to his Artefacting skill.',
				trigger:'',
			},
		'Percussive Maintenance' : {
				story:'',
				text:'All Artefacting Challenges made to repair contraptions or constructs gain the following Trigger:',
				trigger:'♣ Advantage: Gain 1 additional Margin of Success.',
			},
		'Unrealistic Expectations' : {
				story:'',
				text:'This character’s Pneumatic limbs improve one Physical Aspect by 1 (as a group), and the character can change which Aspect is improved with one hour of tinkering. In addition, the TN of repairs to the limbs made by this character is reduced by 5, to a minimum of 1.',
				trigger:'',
			},
		'Multi-Tasker' : {
				story:'',
				text:'Whenever this character takes a (1) Order Action he may give orders to two construct subordinates instead of one, and the orders may be different. A character may have this ability multiple times, and the effects stack (increasing the number of ordered constructs by 1 each time).',
				trigger:'',
			},
		'Over Pressure' : {
				story:'',
				text:'The character gains the following Trigger on all pneumatic attacks:',
				trigger:'♣: At the end of this turn the character may make a single extra attack with a pneumatic weapon. This additional attack may not activate any Triggers. This Trigger may only be activated once per turn.',
			},
	},
	wastrel : {
		book:'Fated Almanac',
		'Educated' : {
				story:'',
				text:'Whenever failed an Expertise duel, may draw a card. Epilogue: may advance in any Expertise skill in addition to skill Advancement options.',
				trigger:'',
			},
		'Luck of the Draw' : {
				story:'',
				text:'This character draws 2 cards when the Fatemaster shuffles the deck, instead of 1.',
				trigger:'',
			},
		'Cards Up A Sleeve' : {
				story:'',
				text:'The character may place one card from his Control Hand face up on the table in front of him. Any player may discard a card from their Control Hand to Cheat Fate with the face up card. Afterwards, the face up card is discarded into the appropriate discard pile.',
				trigger:'',
			},
		'Trump Card' : {
				story:'',
				text:'During Dramatic Time, this character can discard a card from his Control Hand after he has taken his turn. If he does so, he may look at the top 3 cards of the Fate Deck and replace them in any order. He may not tell anyone what cards are there, but he may hint that they are good or bad.',
				trigger:'',
			},
		'All In' : {
				story:'',
				text:'This character gains + to all Duels when he has no Twist Cards in his hand.',
				trigger:'',
			},
		'Play For Blood' : {
				story:'',
				text:'When this character is suffering from one or more Critical Effects, all of his Challenges gain the following Trigger: A character may have this Talent multiple times, increasing the Margins of Success gained by 1 each additional time.',
				trigger:'♠ Advantage: Gain 1 additional Margin of Success.',
			},
		'Fifty-Fifty Chance' : {
				story:'',
				text:'Once per Dramatic Time, this character may “stack the deck.” To stack the deck, the player goes through the discard pile and Fate Deck to find both Jokers. The Fatemaster then randomly shuffles one into the deck (along with the discard pile) and then places the other on top of the deck. Nobody looks at which is actually on top.',
				trigger:'',
			},
	},
	deathmarshal : {
		book:'Advanced (Fated Almanac)',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	animator : {
		book:'Into the Steam',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	augmented : {
		book:'Into the Steam',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	collaborator : {
		book:'Into the Steam',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	engineer : {
		book:'Into the Steam',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	illusionist : {
		book:'Into the Steam',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	infiltrator : {
		book:'Into the Steam',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	mage : {
		book:'Into the Steam',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	primal : {
		book:'Into the Steam',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	shapeshifter : {
		book:'Advanced (Into the Steam)',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	decemberacolyte : {
		book:'Advanced (Into the Steam)',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	silentone : {
		book:'Advanced (Into the Steam)',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	demolitionist : {
		book:'Advanced (Into the Steam)',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	bully : {
		book:'Under Quarantine',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	chemist : {
		book:'Under Quarantine',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	forgotten : {
		book:'Under Quarantine',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	ghosteater : {
		book:'Under Quarantine',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	ghoul : {
		book:'Under Quarantine',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	medium : {
		book:'Under Quarantine',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	necromancer : {
		book:'Under Quarantine',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
	sawbones : {
		book:'Under Quarantine',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
		abettorofobliteration : {
		book:'Advanced (Under Quarantine)',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
		exorcist : {
		book:'Advanced (Under Quarantine)',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
		revenant : {
		book:'Advanced (Under Quarantine)',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
		revivalist : {
		book:'Advanced (Under Quarantine)',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
		studentoftransmortis : {
		book:'Advanced (Under Quarantine)',
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
		'' : {
				story:'',
				text:'',
				trigger:'',
			},
	},
}


function TalentsTable(){
	var arr = [];

	for (var p in talents) {
		arr.push(p);
	}
	// console.log(arr)
	// console.log(arr.length)
	for(var t = 0; t < arr.length; t++){
		console.log(arr[t])
		// console.log(talents[arr[t]])

		var table = $('<table />');
		table.attr('cellpadding',"0px");
		table.attr('cellspacing','0px');
		table.attr('width','100%');
		table.attr('class','talentstable');
		table.attr('id',' talents-'+arr[t]);
		var tr = $('<tr />');
		var td0 = $('<td />',{class:'talentstable-pursuit',text:arr[t]});
		td0.attr('colspan',"2");
		table.append(tr.append(td0))
		// $('#popup').append(table)
		var arr1 = [];

		for (var p in talents[arr[t]]) {
			// console.log(talents[arr[t]])
			arr1.push(p);
		}
		// console.log(arr1)
		// console.log('ARR1: '+arr1)
		// console.log(arr1.length)
		for(var i = 0; i < arr1.length; i++){
			console.log(arr1[i])
			if(arr1[i] == 'book'){
				var book = talents[arr[t]].book
				console.log(book)
				td0.prepend(book+': ')
			}
			else{
				var tr = $('<tr />');
				var td1 = $('<td />',{class:'talentstable-name'});
				var td2 = $('<td />',{class:'talentstable-text'});
				td1.append(arr1[i])
				// console.log(talents[arr[t]][arr1[i]])
				var story = talents[arr[t]][arr1[i]].story
				if(story){
					console.log('Story: '+story)
					td2.append('<span class="talent-story">'+story+'</span><br>')
				}
				var requirement = talents[arr[t]][arr1[i]].requirement
				if(requirement){
					console.log('Requirement: '+requirement)
					td2.append('Requirement: '+requirement+'<br>')
				}
				var text = talents[arr[t]][arr1[i]].text
				if(text){
					console.log('Text: '+text)
					td2.append(text+'<br>')
				}
				var trigger = talents[arr[t]][arr1[i]].trigger
				if(trigger){
					console.log('Trigger : '+trigger)
					td2.append('Trigger : '+trigger)
				}
				console.log('-----------')
				
				table.append(tr.append(td1).append(td2))
			}
		}
		$('#popup').append(table)
	}
}

TalentsTable()

function getTalent(card,type){
	var arr2 = [];
	var cardtalent = talents[card]
	for (var p in cardtalent) {
			// console.log(talents[arr[t]])
			arr2.push(p);
		}
		if(type == 'n'){
			return arr2[1]
		}
			else if(type == 't'){
				return cardtalent[arr2[1]].text
			}
				else{
					'none'
				}
		
		
}

// $('#popup').toggle()
// $('#page').toggle()