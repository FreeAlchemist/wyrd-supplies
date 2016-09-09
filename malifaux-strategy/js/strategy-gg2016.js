var set = 'gaining grounds 2016';
var type = 'strategy';
var cards = {
	'rams' : {
		name: 'Extraction',
		name: 'Извлечение',
		text:'Rumor was he discovered something valuable during his last excavation, something that anyone would kill for. It\'s our job to make sure we\'re the only ones who hear what he has to say.',
		setup:'Поместите Маркер Информатора в центре стола.',
		special:'В конце каждого хода после первого, после получения <b>VP</b>, игрок с наибольшим количеством не-Peon моделей в 6" от Маркера Информатора может переместить Маркер на расстояние до 3" от его текущего положения, но не в элемент ландшафта или базовый контакт с моделью.',
		vp:'В конце каждого хода после первого, Отряд зарабатывает 1 VP если имеет две или больше не-Peon модели в 6" от Маркера Информатора.',
	},
	'crows' : {
		name: 'Guard the Stash',
		name: 'Охрана Заначки',
		text:'"I told you we shouldn\'t pick such a central location to hide the Soulstones!" "Well, it must have been a good choice if they\'re hiding theirs there too!"',
		setup:'Поместите два 50мм Маркера Заначки (Высота 5, Блокирующий, непроходимый, твердое укрытие) на Центральной линии каждый в 5" от центра стола (10" друг от друга).',
		special:'',
		vp:'В конце каждого хода после первого, Отряд зарабатывает 1 VP если имеет как минимум одну не-Peon модель в 2" от каждого из Маркеров Заначки.',
	},
	'masks' : {
		name: 'Interference',
		name: 'Вмешательство',
		text:'"What do you think they\'re doing?" the Handler asked, looking over the stationary Gamin spread out across the field. "No idea, but let\'s stop them just in case."',
		setup:'Разделите стол на четыре 18" на 18" четверти.',
		special:'',
		vp:'В конце каждого хода после первого, Отряд зарабатывает 1 VP если контролирует две и более четвертей стола. <p>Для контроля четверти, Отряд должен иметь большинство не связаных боем не-Peon моделей в четверти.<br>Эти модели не должны быть в 6" от центра стола, или частично в другой четверти.</p>',
	},
	'tomes' : {
		name: 'Headhunter',
		name: 'Охотник за головами',
		text:'"Maybe this time they\'ll believe me when I say I killed 5 men" he muttered to himself as he cut off the next fellow\'s scalp. It was gruesome work, but this time he was going to get paid.',
		setup:'',
		special:'Когда модель убивает или приносит в жертву не-Peon модель которую считает врагом, модель совершившая убийство должна поместить 30мм Маркер Головы в 3" и LoS от убитой или принесенной в жертву модели перед тем как убрать ее из игры.<p>Этот Маркер не может быть помещен в базовом контакте с любой моделью; если нет легального места для размещения, пропустите размещение Маркера.</p><p>Любая модель в базовом контакте с Маркером Головы может выполнить (1) Interact Action чтобы убрать его из игры.</p>',
		vp:'В конце каждого хода после первого, Отряд зарабатывает 1 VP если убрал как минимум один Маркер Головы из игры в этот ход.',
	},
	'jockers' : {
		name: 'Collect the Bounty',
		name: 'Сбор вознаграждения',
		text:'"You\'re telling me that thing is only worth 10 Scrip?" he whined. "That\'s what I\'m telling you." "It\'s one of those Hanged! No WAY that\'s only worth 10 Scrip!" "I don\'t make the rules, bud. Take it or leave it"',
		setup:'',
		special:'Когда раны модели снижены до 0 не-Peon моделью, Отряд который снизил ее раны до 0 получает Очки Вознаграждения в зависимости от ее типа, если считает эту модель врагом.<div><div class="text-float"><b>PEONS</b>:0<br><b>MINIONS</b>:1<br><b>ENFORSERS</b>:2<br><b>HENCHMEN</b>:3<br><b>MASTERS</b>:4</div><div class="text-float">В конце каждого хода, после подсчета VP, сбросьте Очки Вознаграждения каждого игрока до 0.</div></div>',
		vp:'В конце каждого хода после первого, игрок с наибольшим количеством Очков Вознаграждения получает 1 VP. Каждый игрок может также получить  1 VP если у противника не осталось моделей в игре. Только 1 VP может быть получено за ход. Если оба игрока имеют модели в игре и равны по Очкам Вознаграждения, никто не получает VP.',
	},
}