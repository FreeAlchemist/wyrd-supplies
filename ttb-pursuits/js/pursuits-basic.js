var set = 'Basic';
var faction = 'basic';
var lang = 'eng';
var pursuit = {
	'academic' : {
		name:'academic',
		text:'Academics are valued for the knowledge they possess and can contribute. They tend to have heightened familiarity with Malifaux culture and architecture, providing essential information to help navigate those lost constructs and find both information and items of value and power.',
		gear:'non-magical skill toolkit (pg 179)',
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
				text:''
			},
			'7' : {
				name:'Sum of All Knowledge',
				text:''
			},
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
		name: 'criminal',
		text:'criminal text',
		gear:'non-magical skill toolkit (pg 179)',
		talents:{
			'1' : {
				name:'opportunist',
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
		name: 'dabbler',
		text:'dabbler text',
		gear:'Grimoire: 1 Sorcery Magia, 1 Prestidigitation Magia, 3 Immuto. Magical Theory',
		talents:{
			'1' : {
				name:'epiphany',
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
		name: 'drudge',
		text:'drudge text',
		gear:'1 pneumatic limb + steam augments (total value up to 25§)',
		talents:{
			'1' : {
				name:'hard days night',
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
		name: 'graverobber',
		text:'graverobber text',
		gear:'Grimoire: 1 Necromancy Magia, 1 Enchanting Magia, 3 Immuto. Magical Theory',
		talents:{
			'1' : {
				name:'black soul',
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
		name: 'guard',
		text:'guard text',
		gear:'melee weapon, armor (pg 172,176) of a combined value up to 25§',
		talents:{
			'1' : {
				name:'now you are pissing me off',
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
		name: 'gunfighter',
		text:'gunfighter text',
		gear:'pistol or shotgun (20§). This weapon gets 1 customization (pg 150) at no additional cost',
		talents:{
			'1' : {
				name:'finger on the trigger',
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
		name: 'mercenary',
		text:'mercenary text',
		gear:'carabine or rifle of a value up to 20§. This weapon gets 1 customization (pg 150) at no additional cost',
		talents:{
			'1' : {
				name:'deadset',
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
		name: 'overseer',
		text:'overseer text',
		gear:'non-magical skill toolkit (pg 179)',
		talents:{
			'1' : {
				name:'oversight',
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
		name: 'performer',
		text:'performer text',
		gear:'non-magical skill toolkit (pg 179)',
		talents:{
			'1' : {
				name:'flare for the dramatic',
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
		name: 'pioneer',
		text:'pioneer text',
		gear:'non-magical skill toolkit (pg 179)',
		talents:{
			'1' : {
				name:'rugged individual',
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
		name: 'scrapper',
		text:'scrapper text',
		gear:'melee weapon, armor (pg 172,176) of a combined value up to 25§',
		talents:{
			'1' : {
				name:'bloody minded',
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
			'3' : 'Flurry or Recovery',
			'4' : 'General Talent',
			'5' : 'Flurry or Watch Them All',
			'6' : 'General Talent',
			'7' : 'Wicked or Recovery',
			'8' : 'General Talent',
			'9' : 'Wicked or Watch Them All',
			'10' : 'Melee Expert',
		}
	},
	'tinkerer' : {
		name: 'tinkerer',
		text:'tinkerer text',
		gear:'Grimoire: 1 Enchanting Magia, 1 Sorcery Magia, 3 Immuto. Magical Theory',
		talents:{
			'1' : {
				name:'gear head',
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
			'3' : 'Combat Construct or Percussive Maintenance',
			'4' : 'General Talent',
			'5' : 'Combat Construct or Unrealistic Expectations',
			'6' : 'General Talent',
			'7' : 'Multi-Tasker or Percussive Maintenance',
			'8' : 'General Talent',
			'9' : 'Multi-Tasker or Unrealistic Expectations',
			'10' : 'Over Pressure',
		}
	},
	'wastrel' : {
		name: 'wastrel',
		text:'wastrel text',
		gear:'non-magical skill toolkit (pg 179)',
		talents:{
			'1' : {
				name:'educated',
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
			'3' : 'Cards Up A Sleeve or Trump Card',
			'4' : 'General Talent',
			'5' : 'Cards Up A Sleeve or All In',
			'6' : 'General Talent',
			'7' : 'Play For Blood or Trump Card',
			'8' : 'General Talent',
			'9' : 'All In or Play For Blood',
			'10' : 'Fifty-Fifty Chance',
		}
	},
}