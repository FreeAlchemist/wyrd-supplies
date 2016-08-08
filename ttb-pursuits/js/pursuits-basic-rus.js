var set = 'Базовые';
var faction = 'basic';
var lang = 'rus';
var pursuit = {
	'academic' : {
		name:'академик',
		text:'Academics are valued for the knowledge they possess and can contribute. They tend to have heightened familiarity with Malifaux culture and architecture, providing essential information to help navigate those lost constructs and find both information and items of value and power.',
		gear:'не магический инструментарий (стр 179)',
		talents:{
			'1' : {
				name:'Avid Student',
				text:'Whenever failed an Academic duel, may draw a card. Epilogue: may advance in any Academic skill in addition to skill Advancement options.'
			},
			'2' : {
				name:'Student of Knowledge',
				text:''
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
				text:''
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
				text:''
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
				text:''
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
				text:''
			},
			'3' : {
				name:'Gruesome Attack',
				text:''
			},
			'4' : {
				name:'Tricky Shot',
				text:''
			},
			'5' : {
				name:'Coin For Kills',
				text:''
			},
			'6' : {
				name:'Relentless',
				text:'The character doesn\'t believe that life is scared, not even his own. This character is immune to the effects of Horror.'
			},
			'7' : {
				name:'Endless Pursuit',
				text:''
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
				text:''
			},
			'3' : {
				name:'Circle The Wagons',
				text:''
			},
			'4' : {
				name:'Tougth as Nails',
				text:''
			},
			'5' : {
				name:'Ornery',
				text:''
			},
			'6' : {
				name:'Soldier On',
				text:''
			},
			'7' : {
				name:'Relentless',
				text:''
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
				text:''
			},
			'3' : {
				name:'Flurry',
				text:''
			},
			'4' : {
				name:'Recovery',
				text:''
			},
			'5' : {
				name:'Watch Them All',
				text:''
			},
			'6' : {
				name:'Wicked',
				text:''
			},
			'7' : {
				name:'Melee Expert',
				text:''
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
				text:''
			},
			'3' : {
				name:'Combat Construct',
				text:''
			},
			'4' : {
				name:'Percussive Maintenance',
				text:''
			},
			'5' : {
				name:'Unrealistic Expectations',
				text:''
			},
			'6' : {
				name:'Multi-Tasker',
				text:''
			},
			'7' : {
				name:'Over Pressure',
				text:''
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
				text:''
			},
			'3' : {
				name:'Cards Up A Sleeve',
				text:''
			},
			'4' : {
				name:'Trump Card',
				text:''
			},
			'5' : {
				name:'All In',
				text:'This character knows that sometimes you have tj risk it all and hope luck is on your side. This character gains + to all Duels when he has no Twist Cards in his hand/'
			},
			'6' : {
				name:'Play For Blood',
				text:''
			},
			'7' : {
				name:'Fifty-Fifty Chance',
				text:''
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
