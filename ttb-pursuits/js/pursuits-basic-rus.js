var set = 'Basic';
var faction = 'basic';
var lang = 'rus';
var pursuit = {
	'academic' : {
		name:'академик',
		text:'Academics are valued for the knowledge they possess and can contribute. They tend to have heightened familiarity with Malifaux culture and architecture, providing essential information to help navigate those lost constructs and find both information and items of value and power.',
		gear:'non-magical skill toolkit (pg 179)',
		talent:{
			name:'Заядлый студент',
			text:'Whenever failed an Academic duel, may draw a card. Epilogue: may advance in any Academic skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Student of Knowledge',
			'2' : 'General Talent',
			'3' : 'Eureka Moment or Rational Mind',
			'4' : 'General Talent',
			'5' : 'Great Thinker or Rational Mind',
			'6' : 'General Talent',
			'7' : 'Applied Learning or Eureka Moment',
			'8' : 'General Talent',
			'9' : 'Applied Learning or Great Thinker',
			'10' : 'Sum of All Knowledge',
		}
	},
	'criminal' : {
		name: 'преступник',
		text:'criminal text',
		gear:'non-magical skill toolkit (pg 179)',
		talent:{
			name:'оппортунист',
			text:'Whenever failed an Expertise duel, may draw a card. Epilogue: may advance in any Expertise skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Competitive Edge',
			'2' : 'General Talent',
			'3' : 'Improvise or Quick Work',
			'4' : 'General Talent',
			'5' : 'Improvise or Nimble',
			'6' : 'General Talent',
			'7' : 'Quick Work or Surprise Assault',
			'8' : 'General Talent',
			'9' : 'Surprise Assault or Nimble',
			'10' : 'Master of Misdirection',
		}
	},
	'dabbler' : {
		name: 'дилетант',
		text:'dabbler text',
		gear:'Grimoire: 1 Sorcery Magia, 1 Prestidigitation Magia, 3 Immuto. Magical Theory',
		talent:{
			name:'прозрение',
			text:'When failed a Magic duel during dramatic time, may draw a card. Epilogue: may advance in any Magical skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Arcane Musings',
			'2' : 'General Talent',
			'3' : 'Mastered Immuto or Spell Affinity',
			'4' : 'General Talent',
			'5' : 'Mastered Magia or Spell Affinity',
			'6' : 'General Talent',
			'7' : 'Mastered Immuto or Mastered Magia',
			'8' : 'General Talent',
			'9' : 'Mastered Magia or Spell Affinity',
			'10' : 'Empowered Channeling',
		}
	},
	'drudge' : {
		name: 'чернорабочий',
		text:'drudge text',
		gear:'1 pneumatic limb + steam augments (total value up to 25§)',
		talent:{
			name:'hard days night',
			text:'Whenever failed a Training duel, may draw a card. Epilogue: may advance in any Training skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Long Days',
			'2' : 'General Talent',
			'3' : 'Steady Pace or Team Work',
			'4' : 'General Talent',
			'5' : 'Team Work or Slow To Die',
			'6' : 'General Talent',
			'7' : 'Long Suffering or Steady Pace',
			'8' : 'General Talent',
			'9' : 'Long Suffering or Slow To Die',
			'10' : 'Cant\'t Keep Me Down',
		}
	},
	'graverobber' : {
		name: 'гробокопатель',
		text:'graverobber text',
		gear:'Grimoire: 1 Necromancy Magia, 1 Enchanting Magia, 3 Immuto. Magical Theory',
		talent:{
			name:'черная душа',
			text:'When failed a Magic duel during dramatic time, may draw a card. Epilogue: may advance in any Magical skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Morbid Thoughts',
			'2' : 'General Talent',
			'3' : 'Deathly Pallor or Mastered Immuto',
			'4' : 'General Talent',
			'5' : 'Deathly Pallor or Mastered Magia',
			'6' : 'General Talent',
			'7' : 'Macabre Infusions or Mastered Immuto',
			'8' : 'General Talent',
			'9' : 'Macabre Infusions or Mastered Magia',
			'10' : 'Unholy Beacon',
		}
	},
	'guard' : {
		name: 'гвардеец',
		text:'guard text',
		gear:'melee weapon, armor (pg 172,176) of a combined value up to 25§',
		talent:{
			name:'теперь ты меня бесишь',
			text:'When failed a Close Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Close Combat skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Stoic Defender',
			'2' : 'General Talent',
			'3' : 'Inevitable Defence or Take The Hit',
			'4' : 'General Talent',
			'5' : 'Inevitable Defence or Hard To Wound',
			'6' : 'General Talent',
			'7' : 'Hard To Wound or Flurry',
			'8' : 'General Talent',
			'9' : 'Flurry or Take The Hit',
			'10' : 'Unyielding',
		}
	},
	'gunfighter' : {
		name: 'стрелок',
		text:'gunfighter text',
		gear:'pistol or shotgun of a value up to 20§. This weapon gets 1 customization (pg 150) at no additional cost',
		talent:{
			name:'палец на курке',
			text:'When failed a Ranged Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Ranged Combat skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Quick Draw',
			'2' : 'General Talent',
			'3' : 'Call Out or Gunfighter',
			'4' : 'General Talent',
			'5' : 'Call Out or No Time For This',
			'6' : 'General Talent',
			'7' : 'No Time For This or Rapid Fire',
			'8' : 'General Talent',
			'9' : 'Gunfighter or Rapid Fire',
			'10' : 'Ranged Expert',
		}
	},
	'mercenary' : {
		name: 'наемник',
		text:'mercenary text',
		gear:'carabine or rifle of a value up to 20§. This weapon gets 1 customization (pg 150) at no additional cost',
		talent:{
			name:'deadset',
			text:'When failed a Ranged Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Ranged Combat skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Speed Loading',
			'2' : 'General Talent',
			'3' : 'Gruesome Attack or Tricky Shot',
			'4' : 'General Talent',
			'5' : 'Coin For Kills',
			'6' : 'General Talent',
			'7' : 'Relentless or Tricky Shot',
			'8' : 'General Talent',
			'9' : 'Relentless or Gruesome Attack',
			'10' : 'Endless Pursuit',
		}
	},
	'overseer' : {
		name: 'смотритель',
		text:'overseer text',
		gear:'non-magical skill toolkit (pg 179)',
		talent:{
			name:'надзор',
			text:'Whenever failed an Social duel, may draw a card. Epilogue: may advance in any Social skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Converted Effort',
			'2' : 'General Talent',
			'3' : 'Time Is Money or Work Smarter',
			'4' : 'General Talent',
			'5' : 'Delegate or Work Smarter',
			'6' : 'General Talent',
			'7' : 'Time Is Money or You Lazy So & So',
			'8' : 'General Talent',
			'9' : 'Delegate or You Lazy So & So',
			'10' : 'Now Men!',
		}
	},
	'performer' : {
		name: 'исполнитель',
		text:'performer text',
		gear:'non-magical skill toolkit (pg 179)',
		talent:{
			name:'flare for the dramatic',
			text:'Whenever failed an Social duel, may draw a card. Epilogue: may advance in any Social skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Powerful Impression',
			'2' : 'General Talent',
			'3' : 'Grace Under Fire or Helluva Entrance',
			'4' : 'General Talent',
			'5' : 'Classically Trained or Grace Under Fire',
			'6' : 'General Talent',
			'7' : 'Graceful Exit or Helluva Entrance',
			'8' : 'General Talent',
			'9' : 'Classically Trained or Graceful Exit',
			'10' : 'That\'s Showbiz',
		}
	},
	'pioneer' : {
		name: 'первопроходец',
		text:'pioneer text',
		gear:'non-magical skill toolkit (pg 179)',
		talent:{
			name:'стойкая личность',
			text:'Whenever failed an Training duel, may draw a card. Epilogue: may advance in any Training skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'Born Under A Wandering Star',
			'2' : 'General Talent',
			'3' : 'Circle The Wagons or Tougth as Nails',
			'4' : 'General Talent',
			'5' : 'Circle The Wagons or Ornery',
			'6' : 'General Talent',
			'7' : 'Soldier On or Tougth as Nails',
			'8' : 'General Talent',
			'9' : 'Ornery',
			'10' : 'Relentless',
		}
	},
	'scrapper' : {
		name: 'боец',
		text:'scrapper text',
		gear:'melee weapon, armor (pg 172,176) of a combined value up to 25§',
		talent:{
			name:'bloody minded',
			text:'When failed a Close Combat duel during dramatic time, may draw a card. Epilogue: may advance in any Close Combat skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'scrapper step1',
			'2' : 'General Talent',
			'3' : 'scrapper step3',
			'4' : 'General Talent',
			'5' : 'scrapper step5',
			'6' : 'General Talent',
			'7' : 'scrapper step7',
			'8' : 'General Talent',
			'9' : 'scrapper step9',
			'10' : 'scrapper step10',
		}
	},
	'tinkerer' : {
		name: 'жестянщик',
		text:'tinkerer text',
		gear:'Grimoire: 1 Enchanting Magia, 1 Sorcery Magia, 3 Immuto. Magical Theory',
		talent:{
			name:'gear head',
			text:'When failed a Magic duel during dramatic time, may draw a card. Epilogue: may advance in any Magic skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'tinkerer step1',
			'2' : 'General Talent',
			'3' : 'tinkerer step3',
			'4' : 'General Talent',
			'5' : 'tinkerer step5',
			'6' : 'General Talent',
			'7' : 'tinkerer step7',
			'8' : 'General Talent',
			'9' : 'tinkerer step9',
			'10' : 'tinkerer step10',
		}
	},
	'wastrel' : {
		name: 'расточитель',
		text:'wastrel text',
		gear:'non-magical skill toolkit (pg 179)',
		talent:{
			name:'образованный',
			text:'Whenever failed an Expertise duel, may draw a card. Epilogue: may advance in any Expertise skill in addition to skill Advancement options.'
		},
		step:{
			'1' : 'wastrel step1',
			'2' : 'General Talent',
			'3' : 'wastrel step3',
			'4' : 'General Talent',
			'5' : 'wastrel step5',
			'6' : 'General Talent',
			'7' : 'wastrel step7',
			'8' : 'General Talent',
			'9' : 'wastrel step9',
			'10' : 'wastrel step10',
		}
	},
}
