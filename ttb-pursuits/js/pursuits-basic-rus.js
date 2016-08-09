var set = 'Базовые';
var faction = 'basic';
var lang = 'rus';
var pursuit = {
	'academic' : {
		name:'академик',
		text:'Академики ценятся за знания, которыми они владеют и вклад который вносят. Они как правило обладают высокой осведомленностью о культуре и архитектуре Малифо, предоставляя существенную информацию помогающую управлять заброшенными констрактами и находить не только новый знания, но и предметы обладающие силой и ценностью.',
		gear:'не магический инструментарий (стр 179)',
		talents:{
			'1' : {
				name:'Avid Student',
				text:'Whenever failed an Academic duel, may draw a card. Epilogue: may advance in any Academic skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Student of Knowledge',
				text:'This character has frequent flashes of brilliant insight. He gains the following Trigger on all Academics skill Duels:♣ Insight: After resolving, draw a card.'
			},
			'3' : {
				name:'Eureka Moment',
				text:''
			},
			'4' : {
				name:'Great Thinker',
				text:''
			},
			'5' : {
				name:'Rational Mind',
				text:''
			},
			'6' : {
				name:'Applied Learning',
				text:'Choose an Academic skill as well as a secondary skill. Whenever the character makes a skill Challenge with the secondary skill, he may exchange the chosen Academic skill rating for the Aspect rating used. A character may have the Applied Learning Talent multiple times, but each time a new combination of Academic skill and secondary skill must be chosen. Note: The combination of skills selected must be approved by the Fatemaster, as some Fatemasters may not feel that certain combinations (such as Literacy and Dodge) make logical sense in their campaign.'
			},
			'7' : {
				name:'Sum of All Knowledge',
				text:''
			},
		},
		step:{
			'1' : 'Student of Knowledge',
			'2' : 'General Talent',
			'3' : 'Eureka Moment либо Rational Mind',
			'4' : 'General Talent',
			'5' : 'Great Thinker либо Rational Mind',
			'6' : 'General Talent',
			'7' : 'Applied Learning либо Eureka Moment',
			'8' : 'General Talent',
			'9' : 'Applied Learning либо Great Thinker',
			'10' : 'Sum of All Knowledge',
		}
	},
	'criminal' : {
		name: 'преступник',
		text:'criminal text',
		gear:'не магический инструментарий (стр 179)',
		talents:{
			'1' : {
				name:'Opportunist',
				text:'Whenever failed an Expertise duel, may draw a card. Epilogue: may advance in any Expertise skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Competitive Edge',
				text:''
			},
			'3' : {
				name:'Improvise',
				text:''
			},
			'4' : {
				name:'Quick Work',
				text:''
			},
			'5' : {
				name:'Nimble',
				text:''
			},
			'6' : {
				name:'Surprise Assault',
				text:''
			},
			'7' : {
				name:'Master of Misdirection',
				text:''
			},
		},
		step:{
			'1' : 'Competitive Edge',
			'2' : 'General Talent',
			'3' : 'Improvise либо Quick Work',
			'4' : 'General Talent',
			'5' : 'Improvise либо Nimble',
			'6' : 'General Talent',
			'7' : 'Quick Work либо Surprise Assault',
			'8' : 'General Talent',
			'9' : 'Surprise Assault либо Nimble',
			'10' : 'Master of Misdirection',
		}
	},
	'dabbler' : {
		name: 'дилетант',
		text:'dabbler text',
		gear:'Гримуар: 1 Sorcery Magia, 1 Prestidigitation Magia, 3 Immuto. Магическая Теория',
		talents:{
			'1' : {
				name:'Epiphany',
				text:'When failed a Magic duel during dramatic time, may draw a card. Epilogue: may advance in any Magical skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Arcane Musings',
				text:'This character removes a single ♣ from the TN of any Spell he casts.'
			},
			'3' : {
				name:'Empowered Channeling',
				text:''
			},
		},
		step:{
			'1' : 'Arcane Musings',
			'2' : 'General Talent',
			'3' : 'Mastered Immuto либо Spell Affinity',
			'4' : 'General Talent',
			'5' : 'Mastered Magia либо Spell Affinity',
			'6' : 'General Talent',
			'7' : 'Mastered Immuto либо Mastered Magia',
			'8' : 'General Talent',
			'9' : 'Mastered Magia либо Spell Affinity',
			'10' : 'Empowered Channeling',
		}
	},
	'drudge' : {
		name: 'трудяга',
		text:'drudge text',
		gear:'1 пневматическая конечность + паровые улучшения (общая стоимость до 25§)',
		talents:{
			'1' : {
				name:'Hard days night',
				text:'Whenever failed a Training duel, may draw a card. Epilogue: may advance in any Training skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Long Days',
				text:''
			},
			'3' : {
				name:'Steady Pace',
				text:''
			},
			'4' : {
				name:'Team Work',
				text:''
			},
			'5' : {
				name:'Slow To Die',
				text:''
			},
			'6' : {
				name:'Long Suffering',
				text:''
			},
			'7' : {
				name:'Cant\'t Keep Me Down',
				text:'The character may discard a card from his Control Hand to ignore the negative effects of all Critical Effects until the end of his turn. This does not heal the effects, the character just powers through the pain, or pushes his damaged body beyond normal limits.'
			},
		},
		step:{
			'1' : 'Long Days',
			'2' : 'General Talent',
			'3' : 'Steady Pace либо Team Work',
			'4' : 'General Talent',
			'5' : 'Team Work либо Slow To Die',
			'6' : 'General Talent',
			'7' : 'Long Suffering либо Steady Pace',
			'8' : 'General Talent',
			'9' : 'Long Suffering либо Slow To Die',
			'10' : 'Cant\'t Keep Me Down',
		}
	},
	'graverobber' : {
		name: 'гробокопатель',
		text:'graverobber text',
		gear:'Гримуар: 1 Necromancy Magia, 1 Enchanting Magia, 3 Immuto. Магическая Теория',
		talents:{
			'1' : {
				name:'Black soul',
				text:'When failed a Magic duel during dramatic time, may draw a card. Epilogue: may advance in any Magical skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Morbid Thoughts',
				text:''
			},
			'3' : {
				name:'Deathly Pallor',
				text:''
			},
			'4' : {
				name:'Macabre Infusions',
				text:''
			},
			'5' : {
				name:'Unholy Beacon',
				text:''
			},
		},
		step:{
			'1' : 'Morbid Thoughts',
			'2' : 'General Talent',
			'3' : 'Deathly Pallor либо Mastered Immuto',
			'4' : 'General Talent',
			'5' : 'Deathly Pallor либо Mastered Magia',
			'6' : 'General Talent',
			'7' : 'Macabre Infusions либо Mastered Immuto',
			'8' : 'General Talent',
			'9' : 'Macabre Infusions либо Mastered Magia',
			'10' : 'Unholy Beacon',
		}
	},
	'guard' : {
		name: 'гвардеец',
		text:'guard text',
		gear:'рукопашное оружие, броня (стр 172,176) общей стоимостью до 25§',
		talents:{
			'1' : {
				name:'Now you are pissing me off',
				text:'When failed a Close Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Close Combat skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Stoic Defender',
				text:''
			},
			'3' : {
				name:'Inevitable Defence',
				text:''
			},
			'4' : {
				name:'Take The Hit',
				text:''
			},
			'5' : {
				name:'Hard To Wound',
				text:''
			},
			'6' : {
				name:'Flurry',
				text:''
			},
			'7' : {
				name:'Unyielding',
				text:''
			},
		},
		step:{
			'1' : 'Stoic Defender',
			'2' : 'General Talent',
			'3' : 'Inevitable Defence либо Take The Hit',
			'4' : 'General Talent',
			'5' : 'Inevitable Defence либо Hard To Wound',
			'6' : 'General Talent',
			'7' : 'Hard To Wound либо Flurry',
			'8' : 'General Talent',
			'9' : 'Flurry либо Take The Hit',
			'10' : 'Unyielding',
		}
	},
	'gunfighter' : {
		name: 'стрелок',
		text:'gunfighter text',
		gear:'пистолет либо дробовик стоимостью до 20§ + 1 кастомизация (стр 150) без дополнительных затрат',
		talents:{
			'1' : {
				name:'Finger on the trigger',
			text:'When failed a Ranged Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Ranged Combat skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Quick Draw',
				text:''
			},
			'3' : {
				name:'Call Out',
				text:'This character may discard a card from his Control Hand to give a target character a -3 penalty on any attack Action that does not target this character.'
			},
			'4' : {
				name:'Gunfighter',
				text:''
			},
			'5' : {
				name:'No Time For This',
				text:''
			},
			'6' : {
				name:'Rapid Fire',
				text:''
			},
			'7' : {
				name:'Ranged Expert',
				text:''
			},
		},
		step:{
			'1' : 'Quick Draw',
			'2' : 'General Talent',
			'3' : 'Call Out либо Gunfighter',
			'4' : 'General Talent',
			'5' : 'Call Out либо No Time For This',
			'6' : 'General Talent',
			'7' : 'No Time For This либо Rapid Fire',
			'8' : 'General Talent',
			'9' : 'Gunfighter либо Rapid Fire',
			'10' : 'Ranged Expert',
		}
	},
	'mercenary' : {
		name: 'наемник',
		text:'mercenary text',
		gear:'карабин либо ружье стоимостью до 20§ + 1 кастомизация (стр 150) без дополнительных затрат',
		talents:{
			'1' : {
				name:'Deadset',
				text:'When failed a Ranged Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Ranged Combat skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Speed Loading',
				text:'Choose a type of firearm skill (Long Arms, Pistols, Shotguns, or Heavy Weapons). The character gains the following Trigger on any attack Action with that type of weapon. ♥: Reload this weapon if its Reload AP cost is 2 or lower. '
			},
			'3' : {
				name:'Gruesome Attack',
				text:'Choose a single Melee or Ranged skill. All Critical Effect Flips generated by attacks using the chosen skill gain +. A character may have this ability multiple times (even with the same skill) and the effects stack. '
			},
			'4' : {
				name:'Tricky Shot',
				text:'Choose a Ranged Combat skill. While making a Ranged attack Challenge Flip with the chosen skill, the character may choose to ignore one negative Fate Modifier source.'
			},
			'5' : {
				name:'Coin For Kills',
				text:'The character gains + to the Damage Flip of any attack against a target he was paid to fight (or kill). It falls to Fatemaster’s discretion what counts as “paid to fight,” but for the most part, if the character was hired to commit violence, he should have access to this ability in pursuit of that contract.'
			},
			'6' : {
				name:'Relentless',
				text:'The character doesn\'t believe that life is scared, not even his own. This character is immune to the effects of Horror.'
			},
			'7' : {
				name:'Endless Pursuit',
				text:'This character gains + to any Defense Flips against attacks made by targets he was paid to fight. Furthermore, the character may choose to declare anyone with a bounty on their head as someone he was paid to fight (or kill).'
			},
		},
		step:{
			'1' : 'Speed Loading',
			'2' : 'General Talent',
			'3' : 'Gruesome Attack либо Tricky Shot',
			'4' : 'General Talent',
			'5' : 'Coin For Kills',
			'6' : 'General Talent',
			'7' : 'Relentless либо Tricky Shot',
			'8' : 'General Talent',
			'9' : 'Relentless либо Gruesome Attack',
			'10' : 'Endless Pursuit',
		}
	},
	'overseer' : {
		name: 'смотритель',
		text:'overseer text',
		gear:'не магический инструментарий (стр 179)',
		talents:{
			'1' : {
				name:'Oversight',
				text:'Whenever failed an Social duel, may draw a card. Epilogue: may advance in any Social skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Converted Effort',
				text:''
			},
			'3' : {
				name:'Time Is Money',
				text:''
			},
			'4' : {
				name:'Work Smarter',
				text:''
			},
			'5' : {
				name:'Delegate',
				text:''
			},
			'6' : {
				name:'You Lazy So & So',
				text:''
			},
			'7' : {
				name:'Now Men!',
				text:''
			},
		},
		step:{
			'1' : 'Converted Effort',
			'2' : 'General Talent',
			'3' : 'Time Is Money либо Work Smarter',
			'4' : 'General Talent',
			'5' : 'Delegate либо Work Smarter',
			'6' : 'General Talent',
			'7' : 'Time Is Money либо You Lazy So & So',
			'8' : 'General Talent',
			'9' : 'Delegate либо You Lazy So & So',
			'10' : 'Now Men!',
		}
	},
	'performer' : {
		name: 'исполнитель',
		text:'performer text',
		gear:'не магический инструментарий (стр 179)',
		talents:{
			'1' : {
				name:'Flare for the dramatic',
				text:'Whenever failed an Social duel, may draw a card. Epilogue: may advance in any Social skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Powerful Impression',
				text:''
			},
			'3' : {
				name:'Grace Under Fire',
				text:''
			},
			'4' : {
				name:'Helluva Entrance',
				text:''
			},
			'5' : {
				name:'Classically Trained',
				text:''
			},
			'6' : {
				name:'Graceful Exit',
				text:''
			},
			'7' : {
				name:'That\'s Showbiz',
				text:''
			},
		},
		step:{
			'1' : 'Powerful Impression',
			'2' : 'General Talent',
			'3' : 'Grace Under Fire либо Helluva Entrance',
			'4' : 'General Talent',
			'5' : 'Classically Trained либо Grace Under Fire',
			'6' : 'General Talent',
			'7' : 'Graceful Exit либо Helluva Entrance',
			'8' : 'General Talent',
			'9' : 'Classically Trained либо Graceful Exit',
			'10' : 'That\'s Showbiz',
		}
	},
	'pioneer' : {
		name: 'первопроходец',
		text:'pioneer text',
		gear:'не магический инструментарий (стр 179)',
		talents:{
			'1' : {
				name:'Rugged individual',
				text:'Whenever failed an Training duel, may draw a card. Epilogue: may advance in any Training skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Born Under A Wandering Star',
				text:'The character never suffers negative Fate Modifiers to his Navigation or Wilderness tests.'
			},
			'3' : {
				name:'Circle The Wagons',
				text:'The character can discard a card from his Control Hand to make all friendly characters that can hear him treat all cover as Hard cover.'
			},
			'4' : {
				name:'Tougth as Nails',
				text:'When attacking this character with a Ranged or Melee strike, the Attacker cannot declare any Triggers.'
			},
			'5' : {
				name:'Ornery',
				text:'When the character suffers a Critical Effect the effect suffers a -3 penalty to the Flip. A character may have this Talent more than once, and the effects stack.'
			},
			'6' : {
				name:'Soldier On',
				text:'At the beginning of Dramatic Time this character may heal 2/3/5 damage, if he has 1 or more Wound remaining. In addition, he may choose to have any friendly character that can hear him also heal 2/3/5 damage, if the character has 1 or more Wounds remaining.'
			},
			'7' : {
				name:'Relentless',
				text:'The character doesn\'t believe that life is scared, not even his own. This character is immune to the effects of Horror.'
			},
		},
		step:{
			'1' : 'Born Under A Wandering Star',
			'2' : 'General Talent',
			'3' : 'Circle The Wagons либо Tougth as Nails',
			'4' : 'General Talent',
			'5' : 'Circle The Wagons либо Ornery',
			'6' : 'General Talent',
			'7' : 'Soldier On либо Tougth as Nails',
			'8' : 'General Talent',
			'9' : 'Ornery',
			'10' : 'Relentless',
		}
	},
	'scrapper' : {
		name: 'задира',
		text:'scrapper text',
		gear:'рукопашное оружие, броня (стр 172,176) общей стоимостью до 25§',
		talents:{
			'1' : {
				name:'Bloody minded',
				text:'When failed a Close Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Close Combat skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Close the Gap',
				text:'When this character declares a Charge Action he may draw a Twist card.'
			},
			'3' : {
				name:'Flurry',
				text:'Choose a Close Combat skill. This character has access to the following attack Action with the chosen skill: (2) Flurry: The character may discard a Twist Card to take three 1 AP strikes with a Melee weapon using the chosen skill against a single target. A character may have this Talent multiple times, each time he must choose a different Close Combat skill.'
			},
			'4' : {
				name:'Recovery',
				text:'This character gains + to all Healing Flips he makes. A character may take this Talent more than once, and its effects stack.'
			},
			'5' : {
				name:'Watch Them All',
				text:'This character gains + to any attempt to resist intimidation or deception. In addition, this character gains a + to all Initiative Flips.'
			},
			'6' : {
				name:'Wicked',
				text:'When this character makes a disengaging strike, he deals damage with his weapon, in addition to stopping the target’s movement. '
			},
			'7' : {
				name:'Melee Expert',
				text:'This character generates an additional AP on its turn, which must be used to make a strike with a Melee weapon.'
			},
		},
		step:{
			'1' : 'Close the Gap',
			'2' : 'General Talent',
			'3' : 'Flurry либо Recovery',
			'4' : 'General Talent',
			'5' : 'Flurry либо Watch Them All',
			'6' : 'General Talent',
			'7' : 'Wicked либо Recovery',
			'8' : 'General Talent',
			'9' : 'Wicked либо Watch Them All',
			'10' : 'Melee Expert',
		}
	},
	'tinkerer' : {
		name: 'жестянщик',
		text:'tinkerer text',
		gear:'Гримуар: 1 Enchanting Magia, 1 Sorcery Magia, 3 Immuto. Магическая Теория',
		talents:{
			'1' : {
				name:'Gear head',
				text:'When failed a Magic duel during dramatic time, may draw a card. Epilogue: may advance in any Magic skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Push the Limits',
				text:'character may cause a construct under his control to suffer 1 damage that may not be reduced. If he does so, the construct gains a + to its next Action. The character may use this ability on himself if he has at least one pneumatic limb and that limb is used in the Action.'
			},
			'3' : {
				name:'Combat Construct',
				text:'Whenever the character uses Artefacting to create or repair a construct, he may choose to give it a pneumatic skill equal to his Artefacting skill.'
			},
			'4' : {
				name:'Percussive Maintenance',
				text:'All Artefacting Challenges made to repair contraptions or constructs gain the following Trigger: ♣ Advantage: Gain 1 additional Margin of Success.'
			},
			'5' : {
				name:'Unrealistic Expectations',
				text:'This character’s Pneumatic limbs improve one Physical Aspect by 1 (as a group), and the character can change which Aspect is improved with one hour of tinkering. In addition, the TN of repairs to the limbs made by this character is reduced by 5, to a minimum of 1.'
			},
			'6' : {
				name:'Multi-Tasker',
				text:'Whenever this character takes a (1) Order Action he may give orders to two construct subordinates instead of one, and the orders may be different. A character may have this ability multiple times, and the effects stack (increasing the number of ordered constructs by 1 each time).'
			},
			'7' : {
				name:'Over Pressure',
				text:'The character gains the following Trigger on all pneumatic attacks: ♣: At the end of this turn the character may make a single extra attack with a pneumatic weapon. This additional attack may not activate any Triggers. This Trigger may only be activated once per turn.'
			},
		},
		step:{
			'1' : 'Push the Limits',
			'2' : 'General Talent',
			'3' : 'Combat Construct либо Percussive Maintenance',
			'4' : 'General Talent',
			'5' : 'Combat Construct либо Unrealistic Expectations',
			'6' : 'General Talent',
			'7' : 'Multi-Tasker либо Percussive Maintenance',
			'8' : 'General Talent',
			'9' : 'Multi-Tasker либо Unrealistic Expectations',
			'10' : 'Over Pressure',
		}
	},
	'wastrel' : {
		name: 'кутила',
		text:'wastrel text',
		gear:'не магический инструментарий (стр 179)',
		talents:{
			'1' : {
				name:'Educated',
				text:'Whenever failed an Expertise duel, may draw a card. Epilogue: may advance in any Expertise skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Luck of the Draw',
				text:'This character draws 2 cards when the Fatemaster shuffles the deck, instead of 1.'
			},
			'3' : {
				name:'Cards Up A Sleeve',
				text:'The character may place one card from his Control Hand face up on the table in front of him. Any player may discard a card from their Control Hand to Cheat Fate with the face up card. Afterwards, the face up card is discarded into the appropriate discard pile.'
			},
			'4' : {
				name:'Trump Card',
				text:'During Dramatic Time, this character can discard a card from his Control Hand after he has taken his turn. If he does so, he may look at the top 3 cards of the Fate Deck and replace them in any order. He may not tell anyone what cards are there, but he may hint that they are good or bad.'
			},
			'5' : {
				name:'All In',
				text:'This character gains + to all Duels when he has no Twist Cards in his hand.'
			},
			'6' : {
				name:'Play For Blood',
				text:'When this character is suffering from one or more Critical Effects, all of his Challenges gain the following Trigger: ♠ Advantage: Gain 1 additional Margin of Success. A character may have this Talent multiple times, increasing the Margins of Success gained by 1 each additional time.'
			},
			'7' : {
				name:'Fifty-Fifty Chance',
				text:'Once per Dramatic Time, this character may “stack the deck.” To stack the deck, the player goes through the discard pile and Fate Deck to find both Jokers. The Fatemaster then randomly shuffles one into the deck (along with the discard pile) and then places the other on top of the deck. Nobody looks at which is actually on top.'
			},
		},
		step:{
			'1' : 'Luck of the Draw',
			'2' : 'General Talent',
			'3' : 'Cards Up A Sleeve либо Trump Card',
			'4' : 'General Talent',
			'5' : 'Cards Up A Sleeve либо All In',
			'6' : 'General Talent',
			'7' : 'Play For Blood либо Trump Card',
			'8' : 'General Talent',
			'9' : 'All In либо Play For Blood',
			'10' : 'Fifty-Fifty Chance',
		}
	},
}