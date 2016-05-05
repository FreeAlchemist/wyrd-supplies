var set = 'Базовые';
var faction = 'basic';
var lang = 'rus';
var pursuit = {
	'academic' : {
		name:'академик',
		text:'Academics are valued for the knowledge they possess and can contribute. They tend to have heightened familiarity with Malifaux culture and architecture, providing essential information to help navigate those lost constructs and find both information and items of value and power.',
		gear:'не магический инструментарий (стр 179)',
		talent:{
			name:'Заядлый студент',
			text:'При провале Academic дуэли, вытяните карту. Эпилог: продвинуться в любом Academic таланте помимо вариантов развития.'
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
		talent:{
			name:'оппортунист',
			text:'При провале Expertise дуэли, вытяните карту. Эпилог: продвинуться в любом Expertise таланте помимо вариантов развития.'
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
		talent:{
			name:'прозрение',
			text:'При провале Magic дуэли в dramatic time, вытяните карту. Эпилог: продвинуться в любом Magical таланте помимо вариантов развития.'
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
		talent:{
			name:'ночь после тяжелых дней',
			text:'При провале Training дуэли, вытяните карту. Эпилог: продвинуться в любом Training таланте помимо вариантов развития.'
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
		talent:{
			name:'черная душа',
			text:'При провале Magic дуэли в dramatic time, вытяните карту. Эпилог: продвинуться в любом Magical таланте помимо вариантов развития.'
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
		talent:{
			name:'теперь ты меня бесишь',
			text:'При провале Close Combat дуэли в dramatic time, вытяните карту. Эпилог: продвинуться в любом Close Combat таланте помимо вариантов развития.'
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
		talent:{
			name:'палец на курке',
			text:'При провале Ranged Combat дуэли в dramatic time, вытяните карту. Эпилог: продвинуться в любом Ranged Combat таланте помимо вариантов развития.'
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
		talent:{
			name:'категоричный',
			text:'При провале Ranged Combat дуэли в dramatic time, вытяните карту. Эпилог: продвинуться в любом Ranged Combat таланте помимо вариантов развития.'
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
		talent:{
			name:'надзор',
			text:'При провале Social дуэли, вытяните карту. Эпилог: продвинуться в любом Social таланте помимо вариантов развития.'
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
		talent:{
			name:'вспышка драматизма',
			text:'При провале Social дуэли, вытяните карту. Эпилог: продвинуться в любом Social таланте помимо вариантов развития.'
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
		talent:{
			name:'стойкая личность',
			text:'При провале Training дуэли, вытяните карту. Эпилог: продвинуться в любом Training таланте помимо вариантов развития.'
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
		talent:{
			name:'кроваво мыслящий',
			text:'При провале Close Combat дуэли в dramatic time, вытяните карту. Эпилог: продвинуться в любом Close Combat таланте помимо вариантов развития.'
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
		talent:{
			name:'шестеренки в голове',
			text:'При провале Magic дуэли в dramatic time, вытяните карту. Эпилог: продвинуться в любом Magical таланте помимо вариантов развития.'
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
		name: 'бродяга',
		text:'wastrel text',
		gear:'не магический инструментарий (стр 179)',
		talent:{
			name:'образованный',
			text:'При провале Expertise дуэли, вытяните карту. Эпилог: продвинуться в любом Expertise таланте помимо вариантов развития.'
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