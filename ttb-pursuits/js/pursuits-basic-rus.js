var pursuit = {
	type:'Basic',
	faction:'basic',
	'academic' : {
		name:'академик',
		text:'Academics are valued for the knowledge they possess and can contribute. They tend to have heightened familiarity with Malifaux culture and architecture, providing essential information to help navigate those lost constructs and find both information and items of value and power.',
		gear:'non-magical skill toolkit (pg 179)',
		talent:{
			name:'Заядлый студент',
			text:'Whenever this character fails an Academic duel he may draw a card. During the Epilogue, a character on this Pursuit may advance in any Academic skill in addition to those skill Advancement options predented by the Fatemaster.'
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
			text:'Whenever this character...criminal'
		},
		step:{
			'1' : 'criminal step1',
			'2' : 'General Talent',
			'3' : 'criminal step3',
			'4' : 'General Talent',
			'5' : 'criminal step5',
			'6' : 'General Talent',
			'7' : 'criminal step7',
			'8' : 'General Talent',
			'9' : 'criminal step9',
			'10' : 'criminal step10',
		}
	},
	'dabbler' : {
		name: 'дилетант',
		text:'dabbler text',
		gear:'Grimoire: 1 Sorcery Magia, 1 Prestidigitation Magia, 3 Immuto. Magical Theory',
		talent:{
			name:'прозрение',
			text:'Whenever this character...dabbler'
		},
		step:{
			'1' : 'dabbler step1',
			'2' : 'General Talent',
			'3' : 'dabbler step3',
			'4' : 'General Talent',
			'5' : 'dabbler step5',
			'6' : 'General Talent',
			'7' : 'dabbler step7',
			'8' : 'General Talent',
			'9' : 'dabbler step9',
			'10' : 'dabbler step10',
		}
	},
	'drudge' : {
		name: 'чернорабочий',
		text:'drudge text',
		gear:'1 pneumatic limb + steam augments (total value up to 25§)',
		talent:{
			name:'hard days night',
			text:'Whenever this character...drudge'
		},
		step:{
			'1' : 'drudge step1',
			'2' : 'General Talent',
			'3' : 'drudge step3',
			'4' : 'General Talent',
			'5' : 'drudge step5',
			'6' : 'General Talent',
			'7' : 'drudge step7',
			'8' : 'General Talent',
			'9' : 'drudge step9',
			'10' : 'drudge step10',
		}
	},
	'graverobber' : {
		name: 'гробокопатель',
		text:'graverobber text',
		gear:'Grimoire: 1 Necromancy Magia, 1 Enchanting Magia, 3 Immuto. Magical Theory',
		talent:{
			name:'черная душа',
			text:'Whenever this character...graverobber'
		},
		step:{
			'1' : 'graverobber step1',
			'2' : 'General Talent',
			'3' : 'graverobber step3',
			'4' : 'General Talent',
			'5' : 'graverobber step5',
			'6' : 'General Talent',
			'7' : 'graverobber step7',
			'8' : 'General Talent',
			'9' : 'graverobber step9',
			'10' : 'graverobber step10',
		}
	},
	'guard' : {
		name: 'гвардеец',
		text:'guard text',
		gear:'melee weapon, armor (pg 172,176) of a combined value up to 25§',
		talent:{
			name:'теперь ты меня бесишь',
			text:'Whenever this character...guard'
		},
		step:{
			'1' : 'guard step1',
			'2' : 'General Talent',
			'3' : 'guard step3',
			'4' : 'General Talent',
			'5' : 'guard step5',
			'6' : 'General Talent',
			'7' : 'guard step7',
			'8' : 'General Talent',
			'9' : 'guard step9',
			'10' : 'guard step10',
		}
	},
	'gunfighter' : {
		name: 'стрелок',
		text:'gunfighter text',
		gear:'pistol or shotgun of a value up to 20§. This weapon gets 1 customization (pg 150) at no additional cost',
		talent:{
			name:'палец на курке',
			text:'Whenever this character...gunfighter'
		},
		step:{
			'1' : 'gunfighter step1',
			'2' : 'General Talent',
			'3' : 'gunfighter step3',
			'4' : 'General Talent',
			'5' : 'gunfighter step5',
			'6' : 'General Talent',
			'7' : 'gunfighter step7',
			'8' : 'General Talent',
			'9' : 'gunfighter step9',
			'10' : 'gunfighter step10',
		}
	},
	'mercenary' : {
		name: 'наемник',
		text:'mercenary text',
		gear:'carabine or rifle of a value up to 20§. This weapon gets 1 customization (pg 150) at no additional cost',
		talent:{
			name:'deadset',
			text:'Whenever this character...mercenary'
		},
		step:{
			'1' : 'mercenary step1',
			'2' : 'General Talent',
			'3' : 'mercenary step3',
			'4' : 'General Talent',
			'5' : 'mercenary step5',
			'6' : 'General Talent',
			'7' : 'mercenary step7',
			'8' : 'General Talent',
			'9' : 'mercenary step9',
			'10' : 'mercenary step10',
		}
	},
	'overseer' : {
		name: 'смотритель',
		text:'overseer text',
		gear:'non-magical skill toolkit (pg 179)',
		talent:{
			name:'надзор',
			text:'Whenever this character...overseer'
		},
		step:{
			'1' : 'overseer step1',
			'2' : 'General Talent',
			'3' : 'overseer step3',
			'4' : 'General Talent',
			'5' : 'overseer step5',
			'6' : 'General Talent',
			'7' : 'overseer step7',
			'8' : 'General Talent',
			'9' : 'overseer step9',
			'10' : 'overseer step10',
		}
	},
	'performer' : {
		name: 'исполнитель',
		text:'performer text',
		gear:'non-magical skill toolkit (pg 179)',
		talent:{
			name:'flare for the dramatic',
			text:'Whenever this character...performer'
		},
		step:{
			'1' : 'performer step1',
			'2' : 'General Talent',
			'3' : 'performer step3',
			'4' : 'General Talent',
			'5' : 'performer step5',
			'6' : 'General Talent',
			'7' : 'performer step7',
			'8' : 'General Talent',
			'9' : 'performer step9',
			'10' : 'performer step10',
		}
	},
	'pioneer' : {
		name: 'первопроходец',
		text:'pioneer text',
		gear:'non-magical skill toolkit (pg 179)',
		talent:{
			name:'стойкая личность',
			text:'Whenever this character...pioneer'
		},
		step:{
			'1' : 'pioneer step1',
			'2' : 'General Talent',
			'3' : 'pioneer step3',
			'4' : 'General Talent',
			'5' : 'pioneer step5',
			'6' : 'General Talent',
			'7' : 'pioneer step7',
			'8' : 'General Talent',
			'9' : 'pioneer step9',
			'10' : 'pioneer step10',
		}
	},
	'scrapper' : {
		name: 'боец',
		text:'scrapper text',
		gear:'melee weapon, armor (pg 172,176) of a combined value up to 25§',
		talent:{
			name:'bloody minded',
			text:'Whenever this character...scrapper'
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
			text:'Whenever this character...tinkerer'
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
			text:'Whenever this character...wastrel'
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
