var set = 'basic';
var type = 'strategy';
var cards = {
	
	'rams' : {
		name: 'Turf War',
		name: 'Земельная война',
		text:'“Don’t you dare,” Nicodem squinted his eyes at the coroner. “If you say it, there will be death. If it slips from that cobweb of thoughts and delusions you call a mind, and pushes past your tongue to rush past your lips, I’ll end this. I won’t hesitate, blood’s bad enough here. This is my cemetery, these are my bodies. MINE !” McMourning couldn’t control himself. He choked back the words at first, but his wide grin overcame him. “This graveyard ain’t big enough for the bot h of us.” Dark will guided the bones of Nicodem’s zombies as they struck from the shadows. Dark will and fury.',
		setup:'Поместите один Маркер Земли в центре стола.',
		special:'',
		vp:'В конце каждого хода после первого, Отряд получает 1 VP если имеет две или больше не-Peon модели в 6” от Маркера Земли.',
	},
	'crows' : {
		name: 'Reckoning',
		name: 'Расплата',
		text:'Reckoning text',
		setup:'',
		special:'',
		vp:'В конце каждого хода после первого, Отряд получает 1 VP если убил или принес в жертву две или более вражеские модели в этот ход.<p> В конце каждого хода после первого, если у игрока не осталось моделей в игре (погребенные (buried) модели не рассматриваются как находящиеся “в игре”) его противник получает 1 VP. Игрок не может получить больше чем 1 VP за эту Стратегию в ход.</p>',
	},
	'masks' : {
		name: 'Reconnoiter',
		name: 'Разведка',
		text:'Reconnoiter text',
		setup:'Разделите стол на четверти 18” x 18”.',
		special:'',
		vp:'В конце каждого хода после первого, Отряд получает 1 VP если контролирует две или больше четверти стола.<p>Для контроля четверти стола, у отряда должно быть больше не-Peon моделей в этой четверти. Эти модели не должны находиться в 6” от центра стола, или частично в другой четверти стола.</p>',
	},
	'tomes' : {
		name: 'Squatter\'s Rights',
		name: 'Жилищные права',
		text:'Squatter\'s Rights text',
		setup:'Поместите пять 30мм Маркеров Построек вдоль центральной линии. Один помещается в центре стола. Потом, Еще два помещаются на центральной линии в 6” от центра стола (по одному с каждой стороны). Наконец, еще два помещаются на центральной линии в 6” от края стола (по одному с каждой стороны).',
		special:'Маркер Постройки начинает игру незанятым ни одним из отрядов.<p>Модель может выполнить (1) Interact Action чтобы занять любой Маркер Постройки в базовом контакте с собой. Маркер Постройки всегда занят последним взаимодействовавшим с ним отрядом, все предыдущие заявки снимаются.</p>',
		vp:'В конце каждого хода после первого, Отряд получает 1 VP если занял как минимум два Маркера Построек.',
	},
	'jockers' : {
		name: 'Stake A Claim',
		name: 'Застолбить',
		text:'Stake A Claim text',
		setup:'',
		special:'Модель может выполнить (2) Interact Action чтобы сбросить все Маркеры Требования в 6” от себя, и затем поместить Маркер Требования в базовом контакте с собой.',
		vp:'В конце каждого хода после первого, Отряд получает 1 VP если на половине стола противника больше Маркеров Требования чем на его.',
	},
}