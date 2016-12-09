var gears = {
	armor:{
		'1':{
			type:'Защита головы',
			name:'Кольчужный капюшон',
			effect:'Легкая: Предоставляемое значение брони Описано на странице 212. Персонаж носящий эту броню В хотя бы одном месте считается легко бронированным (Броня +1)',
			text:'Броня +1',
			penalty:'Защита -1',
			cost:'3',
		}
		'2':{
			type:'Защита головы',
			name:'Шахтерская каска',
			effect:'Защита (<span class="symbol tome"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'5',
		},
		'3':{
			type:'Защита головы',
			name:'Круглый шлем',
			effect:'Легкая: Предоставляемое значение брони Описано на странице 212. Персонаж носящий эту броню В хотя бы одном месте считается легко бронированным (Броня +1)<br>Защита (<span class="symbol tome"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'6',
		},
		'4':{
			type:'Защита ног',
			name:'Мокасины',
			effect:'Защита (<span class="symbol tome"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'2',
		},
		'5':{
			type:'Защита ног',
			name:'Поножи',
			effect:'Легкая: Предоставляемое значение брони Описано на странице 212. Персонаж носящий эту броню В хотя бы одном месте считается легко бронированным (Броня +1)<br>Защита (<span class="symbol tome"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'5',
		},
		'6':{
			type:'Защита груди',
			name:'Нагрудник',
			effect:'Защита (<span class="symbol ram"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'19',
		},
		'7':{
			type:'Защита груди',
			name:'Кольчуга',
			effect:'Легкая: Предоставляемое значение брони Описано на странице 212. Персонаж носящий эту броню В хотя бы одном месте считается легко бронированным (Броня +1)<br>Защита (<span class="symbol ram"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'7',
		},
		'8':{
			type:'Защита груди',
			name:'Дублет / Дастер',
			effect:'Защита (<span class="symbol ram"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'5',
		},
		'9':{
			type:'Защита рук',
			name:'Перчатки',
			effect:'Защита (<span class="symbol crow"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'2',
		},
		'10':{
			type:'Защита рук',
			name:'Латные руковицы',
			effect:'Легкая: Предоставляемое значение брони Описано на странице 212. Персонаж носящий эту броню В хотя бы одном месте считается легко бронированным (Броня +1)<br>Защита (<span class="symbol crow"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'4',
		},
		'11':{
			type:'Защита рук',
			name:'Наручи',
			effect:'Защита (<span class="symbol mask"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'19',
		},
		'12':{
			type:'Щит',
			name:'Кулачный щит',
			effect:'Щит + 1: Когда персонаж принимает Защитную стойку он увеличивает значение получаемого состояния Защищен на значение Щита.',
			text:'',
			penalty:'',
			cost:'§',
		},
		'13':{
			type:'Щит',
			name:'Heater Shield',
			effect:'Отклоняющая: Когда персонаж принимает Защитную стойку он также получает броню со значением равным количеству ОД потраченных на Защитную стойку.<br>Щит + 1: Когда персонаж принимает Защитную стойку он увеличивает значение получаемого состояния Защищен на значение Щита.',
			text:'',
			penalty:'',
			cost:'15',
		},
		'14':{
			type:'Щит',
			name:'Каплевидный щит',
			effect:'Отклоняющая: Когда персонаж принимает Защитную стойку он также получает броню со значением равным количеству ОД потраченных на Защитную стойку.<br>Щит + 2: Когда персонаж принимает Защитную стойку он увеличивает значение получаемого состояния Защищен на значение Щита.',
			text:'',
			penalty:'',
			cost:'25',
		},
		'15':{
			type:'Защита груди',
			name:'Герцоги Йорка',
			effect:'Легкая: Предоставляемое значение брони Описано на странице 212. Персонаж носящий эту броню В хотя бы одном месте считается легко бронированным (Броня +1)<br>Защита (<span class="symbol ram"/>,<span class="symbol crow"/>,<span class="symbol mask"/>): Персонаж игнорирует Первый Критический Эффект (Но не урон) Создаваемый указанной мастью во время каждого Dramatic Time.',
			text:'',
			penalty:'',
			cost:'50',
		},
	}
	weapon:{
		'A&T Drakon':{
			type:'Старинные Пистолеты',
			name:'A&T Дракон',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 6',
			damage:'1/2<span class="symbol blast"/>/4<span class="symbol blast"/>',
			capacity:'1',
			reload:'2',
			special:'<b>Мушкетон</b>: Это оружие получает <span class="symbol plus"/> к урону на коротких дистанциях и <span class="symbol minus"/> на длинных дистанциях.',
			cost:'5',
		},
		'Axton & Co. Model 1842':{
			type:'Старинные Пистолеты',
			name:'Экстон & Ко. Модель 1842',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 10',
			damage:'2/3/4',
			capacity:'1',
			reload:'2',
			special:'',
			cost:'2',
		},
		'Liegn U.S. Navy Cutlass':{
			type:'Старинные Пистолеты',
			name:'Льен С.Ш. Военно-морской кортик',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 6',
			damage:'2/3/4',
			capacity:'1',
			reload:'2',
			special:'Bayonet (Pistol)',
			cost:'2',
		},
		'Maucher Three-Barrel':{
			type:'Старинные Пистолеты',
			name:'Маушер Трех-ствольник',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 6',
			damage:'2/2/5',
			capacity:'3',
			reload:'4',
			special:'<b>Трехствольное</b>:Это оружие может выстрелить на всю свою вместимость одним действием для получения <span class="symbol plus"/> на урон.',
			cost:'4',
		},
		'Volyer Patent Revolving':{
			type:'Старинные Пистолеты',
			name:'Револьверный Патент Волье',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 10',
			damage:'2/3/4',
			capacity:'7',
			reload:'4',
			special:'',
			cost:'4',
		},
		'A&T Model 10':{
			type:'Старинные Длинноствольные орудия',
			name:'А&Т Модель 10',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 12',
			damage:'1/2<span class="symbol blast"/>/4<span class="symbol blast"/>',
			capacity:'1',
			reload:'2',
			special:'<b>Мушкетон</b>: Это оружие получает <span class="symbol plus"/> к урону на коротких дистанциях и <span class="symbol minus"/> на длинных дистанциях.',
			cost:'3',
		},
		'Volyer’s Revolving Shotgun':{
			type:'Старинные Длинноствольные орудия',
			name:'Револьверный Дробовик Волье',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 6',
			damage:'2/2<span class="symbol blast"/>/4<span class="symbol blast"/>',
			capacity:'7',
			reload:'4',
			special:'',
			cost:'6',
		},
		'Hawken Rifle':{
			type:'Старинные Длинноствольные орудия',
			name:'Ружье Хокена',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 16',
			damage:'2/3/5',
			capacity:'1',
			reload:'3',
			special:'<b>Ружье</b>: Дистанция этого оружия увеличивается на 10 за каждый <span class="symbol plus"/> который оно получает от состояния Сфокусирован.',
			cost:'5',
		},
		'Enfield Musketoon':{
			type:'Старинные Длинноствольные орудия',
			name:'Мушкет Энфилд',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 16',
			damage:'2/3/4',
			capacity:'1',
			reload:'2',
			special:'<b>Ружье</b>: Дистанция этого оружия увеличивается на 10 за каждый <span class="symbol plus"/> который оно получает от состояния Сфокусирован.',
			cost:'5',
		},
		'Nock Volley Gun':{
			type:'Старинные Длинноствольные орудия',
			name:'Залповое орудие Нока',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 12',
			damage:'2/3/4<br>(5/6/7)',
			capacity:'7',
			reload:'4',
			special:'<b>Семиствольное</b>:Это оружие может выстрелить на всю свою вместимость одним действием для получения <span class="symbol plus"/> на урон и +3 к урону.',
			cost:'20',
		},
		'B&D Pocket':{
			type:'Револьверы',
			name:'Б&Д Карманный',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 6',
			damage:'2/3/3',
			capacity:'4',
			reload:'2',
			special:'<b>Скрытное</b>: Получает <span class="symbol plus"/> на любые попытки спрятать его.',
			cost:'7',
		},
		'B&D Gatling Derringer':{
			type:'Револьверы',
			name:'Б&Д Пистолет Гатлинга',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 6',
			damage:'2/3/3',
			capacity:'9',
			reload:'2',
			special:'<b>Взрывной огонь<>: Можно выстрелить очередью из 3 патронов одним действием:<ul><li>Добавьте<span class="symbol blast"/>к среднему и сильному урону<li></ul>Добавьте <span class="symbol plus"/> к атаке и урону.',
			cost:'29',
		},
		'Collier “Rough Rider”':{
			type:'Револьверы',
			name:'Шахтерский “Грубый наездник”',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 10',
			damage:'2/3/4',
			capacity:'7',
			reload:'2',
			special:'Этот пистолет хорошо подходит для стрельбы очередями.<br>Выполняя действие Стрельба Очередью (Rapid Fire стр.114) добавьте +2 к атаке',
			cost:'19',
		},
		'Collier Single action Army':{
			type:'Револьверы',
			name:'Шахтерский Армейский одного действия',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 12',
			damage:'2/3/4',
			capacity:'6',
			reload:'2',
			special:'<b>Угрожающее</b>: Репутация данного оружия может добавить <span class="symbol plus"/> к проверке Допроса.',
			cost:'19',
		},
		'Collier Navy':{
			type:'Револьверы',
			name:'Шахтерский Военно-морской',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 12',
			damage:'2/3/4',
			capacity:'6',
			reload:'2',
			special:'',
			cost:'9',
		},
		'LeBlanc Grapeshot':{
			type:'Револьверы',
			name:'Картечь ЛеБланк',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 10',
			damage:'2/3/3',
			capacity:'9',
			reload:'3',
			special:'<b>Картечь</b>: Оружие имеет второй ствол с одним зарядом картечи, который можно использовать<span class="symbol projectile"/> 5; 1/2<span class="symbol blast"/>/4<span class="symbol blast"/>',
			cost:'19',
		},
		'Ganten M1895':{
			type:'Револьверы',
			name:'Гантэн М1895',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 10',
			damage:'2/3/5',
			capacity:'7',
			reload:'3',
			special:'',
			cost:'9',
		},
		'Weshorn & Smitte #3':{
			type:'Револьверы',
			name:'Вэшорн & Смиттэ #3',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 12',
			damage:'2/3/4',
			capacity:'6',
			reload:'1',
			special:'',
			cost:'19',
		},
		'Peacebringer':{
			type:'Револьверы',
			name:'Миротворец',
			skill:'Пистолеты',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 10',
			damage:'2/3/5',
			capacity:'6',
			reload:'1',
			special:'<b>Угрожающее</b>: Репутация данного оружия может добавить <span class="symbol plus"/> к проверке Допроса<br><b>Штык: (Пистолет)</b>: <span class="symbol melee"/>1; 1/3/4',
			cost:'30',
		},
		'Collier Hammerless':{
			type:'Дробовики',
			name:'Шахтерский Безударный',
			skill:'Дробовики',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 12',
			damage:'2/3<span class="symbol blast"/>/4<span class="symbol blast"/>',
			capacity:'2',
			reload:'1',
			special:'<b>Двустволка</b>: Это оружие может стрелять на всю вместимость одним действием, получая <span class="symbol plus"/> к урону.<br><b>Выстрел</b>: Если тип патронов дробовика = Снаряд, теряет Взрыв из урона, но получает <span class="symbol plus"/> на урон.',
			cost:'8',
		},
		'Solberg Inertia':{
			type:'Дробовики',
			name:'Инерция Сольберг',
			skill:'Дробовики',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 12',
			damage:'2/3<span class="symbol blast"/>/4<span class="symbol blast"/>',
			capacity:'5',
			reload:'3',
			special:'<b>Выстрел</b>: Если тип патронов дробовика = Снаряд, теряет Взрыв из урона, но получает <span class="symbol plus"/> на урон.',
			cost:'9',
		},
		'Chesterfield Model 1887/01':{
			type:'Дробовики',
			name:'Честерфилд Модель 1887/01',
			skill:'Дробовики',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 12',
			damage:'2/3<span class="symbol blast"/>/4<span class="symbol blast"/>',
			capacity:'5',
			reload:'3',
			special:'<b>Угрожающее</b>: Репутация данного оружия может добавить <span class="symbol plus"/> к проверке Допроса<br><b>Выстрел</b>: Если тип патронов дробовика = Снаряд, теряет Взрыв из урона, но получает <span class="symbol plus"/> на урон.',
			cost:'19',
		},
		'Chesterfield Model 1897':{
			type:'Дробовики',
			name:'Честерфилд Модель 1897',
			skill:'Дробовики',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 12',
			damage:'3/4<span class="symbol blast"/>/5<span class="symbol blast"/>',
			capacity:'5',
			reload:'3',
			special:'<b>Выстрел</b>: Если тип патронов дробовика = Снаряд, теряет Взрыв из урона, но получает <span class="symbol plus"/> на урон.',
			cost:'29',
		},
		'Yamisaka Type 30':{
			type:'Ружья',
			name:'Ямисака Тип 30',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 18',
			damage:'3/4/5',
			capacity:'5',
			reload:'2',
			special:'<b>Ружье</b>: Дистанция этого оружия увеличивается на 10 за каждый <span class="symbol plus"/> который оно получает от состояния Сфокусирован.',
			cost:'8',
		},
		'Perier Model 1886/M93':{
			type:'Ружья',
			name:'Перье Модель 1886/М93',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 18',
			damage:'3/4/5',
			capacity:'8',
			reload:'2',
			special:'<b>Ружье</b>: Дистанция этого оружия увеличивается на 10 за каждый <span class="symbol plus"/> который оно получает от состояния Сфокусирован.<br>Штык: (Ружье): <span class="symbol melee"/>2; 1/3/4',
			cost:'19',
		},
		'Howles Pattern 1874':{
			type:'Ружья',
			name:'Хоулес Образец 1874',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 24',
			damage:'3/5/6',
			capacity:'1',
			reload:'1',
			special:'<b>Ружье</b>: Дистанция этого оружия увеличивается на 10 за каждый <span class="symbol plus"/> который оно получает от состояния Сфокусирован.',
			cost:'18',
		},
		'Chesterfield 1895 Repeating':{
			type:'Ружья',
			name:'Честерфилд 1895 Повторный',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 18',
			damage:'3/4/5',
			capacity:'5',
			reload:'2',
			special:'<b>Ружье</b>: Дистанция этого оружия увеличивается на 10 за каждый <span class="symbol plus"/> который оно получает от состояния Сфокусирован.',
			cost:'29',
		},
		'Collier Lightning':{
			type:'Карабины',
			name:'Шахтерская Молния',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 18',
			damage:'3/3/4',
			capacity:'12',
			reload:'2',
			special:'<b>Седловое оружие</b>: Может быть использовано одной рукой без штрафов. При использовании двумя руками получает <span class="symbol plus"/> на атаку. Можно использовать Грацию вместо Интеллекта при определении Итогового значения (AV).',
			cost:'9',
		},
		'Collier Revolving':{
			type:'Карабины',
			name:'Шахтерский Револьверный',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 18',
			damage:'3/4/5',
			capacity:'6',
			reload:'2',
			special:'<b>Седловое оружие</b>: Может быть использовано одной рукой без штрафов. При использовании двумя руками получает <span class="symbol plus"/> на атаку. Можно использовать Грацию вместо Интеллекта при определении Итогового значения (AV).',
			cost:'19',
		},
		'Chesterfield 1873':{
			type:'Карабины',
			name:'Честерфилд 1873',
			skill:'Длинноствольные орудия',
			aspect:'Интеллект',
			range:'<span class="symbol projectile"/> 18',
			damage:'2/3/5',
			capacity:'10',
			reload:'3',
			special:'<b>Седловое оружие</b>: Может быть использовано одной рукой без штрафов. При использовании двумя руками получает <span class="symbol plus"/> на атаку. Можно использовать Грацию вместо Интеллекта при определении Итогового значения (AV).',
			cost:'24',
		},
		'Longbow':{
			type:'Луки & Арбалеты',
			name:'Длинный лук',
			skill:'Archery',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 12',
			damage:'2/2/4',
			capacity:'-',
			reload:'-',
			special:'<b>Лук</b>: Зарядка производится как часть стрельбы.<br><b>Стрела</b>: Может использовать особые стрелы:<ul><li>Зазубренные<li>Полые</ul>',
			cost:'5',
		},
		'Horn Bow':{
			type:'Луки & Арбалеты',
			name:'Композитный Лук',
			skill:'Archery',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 12',
			damage:'3/3/4',
			capacity:'-',
			reload:'-',
			special:'<b>Лук</b>: Зарядка производится как часть стрельбы.<br><b>Стрела</b>: Может использовать особые стрелы:<ul><li>Зазубренные<li>Полые</ul>',
			cost:'9',
		},
		'Crossbow':{
			type:'Луки & Арбалеты',
			name:'Арбалет',
			skill:'Archery',
			aspect:'Грация',
			range:'<span class="symbol projectile"/> 18',
			damage:'2/4/6',
			capacity:'1',
			reload:'2',
			special:'<b>Стрела</b>: Может использовать особые стрелы:<ul><li>Зазубренные<li>Полые</ul>',
			cost:'15',
		},
		'One-Pounder Swivel Gun':{
			type:'Heavy Weapons, Artillery, and Ordnance',
			name:'Одно-фунтовое Поворотное орудие',
			skill:'Heavy Guns',
			aspect:'Сила',
			range:'<span class="symbol projectile"/> 18',
			damage:'5/7/9<span class="symbol blast"/><span class="symbol blast"/>',
			capacity:'1',
			reload:'6',
			special:'<b>Тяжелое</b>: атака этим оружием требует 2 ОД.Также оружие должно быть установлено на орудийную платформу.<br>Загрузка: До 3 персонажей могут совместно перезаряжать это оружие, тратя свои ОД.',
			cost:'100',
		},
		'Model 1866 Six Pounder':{
			type:'Heavy Weapons, Artillery, and Ordnance',
			name:'Модель 1866 Шести-фунтовик',
			skill:'Heavy Guns',
			aspect:'Сила',
			range:'<span class="symbol projectile"/> 50',
			damage:'5/7<span class="symbol blast"/>/9<span class="symbol blast"/>',
			capacity:'1',
			reload:'6',
			special:'<b>Тяжелое</b>: атака этим оружием требует 2 ОД.Также оружие должно быть установлено на орудийную платформу.<br>Загрузка: До 3 персонажей могут совместно перезаряжать это оружие, тратя свои ОД.',
			cost:'500',
		},
		'Mobile Gatling Gun':{
			type:'Heavy Weapons, Artillery, and Ordnance',
			name:'Мобильное орудие Гатлинга',
			skill:'Heavy Guns',
			aspect:'Сила',
			range:'<span class="symbol projectile"/> 25',
			damage:'<ul><li>2/4<span class="symbol blast"/><span class="symbol blast"/>/6<span class="symbol blast"/><span class="symbol blast"/><li>6/12/18</ul>',
			capacity:'200',
			reload:'4',
			special:'<b>Гатлинг</b>: При атаке, стреляет очередями по 20 патронов.<br>При стрельбе выберите:<ul><li><span class="symbol blast"/><span class="symbol blast"/>к Сильному и Среднему урону<li>Утроить урон по одной цели</ul>',
			cost:'1000',
		},
		'Bayonet (Pistol)':{
			type:'Melee',
			name:'Штык: (Пистолет)',
			skill:'Melee',
			aspect:'Сила',
			range:'<span class="symbol melee"/> 1',
			damage:'1/3/4',
			capacity:'',
			reload:'',
			special:'',
			cost:'3',
		},
		'Bayonet (Rifle)':{
			type:'Melee',
			name:'Штык: (Ружье)',
			skill:'Melee',
			aspect:'Сила',
			range:'<span class="symbol melee"/> 2',
			damage:'1/3/4',
			capacity:'',
			reload:'',
			special:'',
			cost:'4',
		},
		'Bowie Knife':{
			type:'Melee',
			name:'Охотничий нож',
			skill:'Melee',
			aspect:'Сила',
			range:'<span class="symbol melee"/> ',
			damage:'1/3/4',
			capacity:'',
			reload:'',
			special:'',
			cost:'2',
		},
		'Boarding Axe':{
			type:'Melee',
			name:'Абордажный топор',
			skill:'Melee',
			aspect:'Сила',
			range:'<span class="symbol melee"/> 2',
			damage:'1/3/5',
			capacity:'',
			reload:'',
			special:'',
			cost:'2',
		},
		'Cavalry Saber':{
			type:'Melee',
			name:'Кавалерийская сабля',
			skill:'Melee',
			aspect:'Сила',
			range:'<span class="symbol melee"/> 2',
			damage:'2/3/4',
			capacity:'',
			reload:'',
			special:'',
			cost:'7',
		},
		'Rail Hammer':{
			type:'Melee',
			name:'Железнодорожный молот',
			skill:'Melee',
			aspect:'Сила',
			range:'<span class="symbol melee"/> 2',
			damage:'2/4/6',
			capacity:'',
			reload:'',
			special:'',
			cost:'4',
		},
		'Driving Whip':{
			type:'Melee',
			name:'Хлыст',
			skill:'Flexible',
			aspect:'Грация',
			range:'<span class="symbol melee"/> 2',
			damage:'1/2/3',
			capacity:'',
			reload:'',
			special:'<b>Оглушающее</b>: Когда это оружие наносит Сильный урон, Цель получает Слабый Критический Эффект, К любому другому Критическому Эффекту',
			cost:'14',
		},
		'Gate-Spear':{
			type:'Melee',
			name:'Копье',
			skill:'Melee/Thrown',
			aspect:'Сила/Грация',
			range:'<span class="symbol melee"/> 3',
			damage:'2/3/4',
			capacity:'',
			reload:'',
			special:'При метании имеет дистанцию равную 3 + навык Метательное оружие.',
			cost:'3',
		},
		'Truncheon':{
			type:'Melee',
			name:'Дубинка',
			skill:'Melee',
			aspect:'Сила',
			range:'<span class="symbol melee"/> 2',
			damage:'1/3/4',
			capacity:'',
			reload:'',
			special:'<b>Оглушающее</b>: Когда это оружие наносит Сильный урон, Цель получает Слабый Критический Эффект, К любому другому Критическому Эффекту',
			cost:'3',
		},
		'Knuckleduster':{
			type:'Melee',
			name:'Кастет',
			skill:'',
			aspect:'',
			range:'<span class="symbol melee"/> 1',
			damage:'Спец.',
			capacity:'',
			reload:'',
			special:'Pugilism и Martial Arts атаки с этим оружием в руке получают <span class="symbol plus"/> На урон.<br><b>Скрытное</b>: Получает <span class="symbol plus"/> на любые попытки спрятать его.',
			cost:'1',
		},
	}
}

console.log(gears)
/*
Armor
head
leg
chest
arm
shield
Type
Armor
effect
text
cost
Weapon
Range
Damage
Capacity
Reload
Special
Skill
Aspect
Cost
customization
	name
	text
	cost
Ammunition
	name
	text
	cost
'Sidearms'
	'Старинные Пистолеты'
		'A&T Drakon'
		'Axton & Co. Model 1842'
		'Liegn U.S. Navy Cutlass'
		'Maucher Three-Barrel'
		'Volyer Patent Revolving'
	'Револьверы'
		'B&D Pocket'
		'B&D Gatling Derringer'
		'Collier “Rough Rider”'
		'Collier Single action Army'
		'Collier Navy'
		'LeBlanc Grapeshot'
		'Ganten M1895'
		'Weshorn & Smitte #3'
		'Peacebringer'
'Длинноствольные орудия'
	'Старинные Длинноствольные орудия'
		'A&T Model 10'
		'Volyer’s Revolving Shotgun'
		'Hawken Rifle'
		'Enfield Musketoon'
		'Nock Volley Gun'
	'Ружья'
		'Yamisaka Type 30'
		'Perier Model 1886/M93'
		'Howles Pattern 1874'
		'Chesterfield 1895 Repeating'
	'Carbines'
		'Collier Lightning'
		'Collier Revolving'
		'Chesterfield 1873'
	'Дробовики'
		'Collier Hammerless'
		'Solberg Inertia'
		'Chesterfield Model 1887/01'
		'Chesterfield Model 1897'
'Heavy Weapons, Artillery, and Ordnance'
	'One-Pounder Swivel Gun'
	'Model 1866 Six Pounder'
	'Mobile Gatling Gun'
'Луки & Арбалеты'
	'Longbow'
	'Horn Bow'
	'Crossbow'
'Melee Arms'
Weapon
Range
Damage
Special
Cost
Bayonet (Pistol)
Bayonet (Rifle)
Bowie Knife
Boarding Axe
Cavalry Saber
Driving Whip
Gate-Spear
Truncheon
Rail Hammer
Knuckleduster
customization
	name
	effect
	text
	cost
pneumatic limbs
pneumatic
effect
text
cost
augments
*/