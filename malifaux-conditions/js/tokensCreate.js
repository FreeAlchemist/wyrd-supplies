window.addEventListener("keyup",function(){
	key =event.keyCode;
if(key==13) {
	createtokens()
}
});

type = $("select[name='tokentype'] > option:checked").val()
form = $("input[name='tokenform']:checked").val()
size = $("input[name='tokensize']:checked").val()
quantity = $("input[name='tokenquantity']:checked").val()
isrow = $("input[name='isrow']:checked").val()
$("#preview").html($('<div />',{class:'condition '+type+' '+form+" "+size}))

function createtokens(){
	console.log("Created "+quantity+" "+form+" "+size+" "+type+" tokens")

	for (var i = quantity; i > 0; i--) {
			if(size == "size-10"){
			var token = $('<div />',{class:'condition '+type+' '+form+" "+size})
			}
			if(size == "size-40"){
				var token = $('<div />',{class:'condition '+form+" "+size})
				token.append($('<div />',{class:type+' condition-image'}))
				token.append($('<div />',{class:type+'-name condition-name',text:type}))
				var text = 'condition-text'
				token.append($('<div />',{class:type+'-text condition-text',text:text}))
			}
			else{
			var token = $('<div />',{class:'condition '+type+' '+form+" "+size,text:type})
			token.css('background-image','none')
			}
			console.log(size)
			$("#page").append(token)
	}
	changeName(type)
	if(isrow){
		$("#page").append($('<div />',{class:isrow}))
	}
}

function alltokens(){
var typearr = $("select[name='tokentype']").children()
	for (var i = 0; i < typearr.length; i++) {
		var type = typearr[i].value
		console.log(type)
		if(size == "size-10"){
		var token = $('<div />',{class:'condition '+type+' '+form+" "+size})
		}
			if(size == "size-10"){
			var token = $('<div />',{class:'condition '+type+' '+form+" "+size})
			}
			if(size == "size-40"){
				var token = $('<div />',{class:'condition '+form+" "+size})
				token.append($('<div />',{class:type+' condition-image'}))
				token.append($('<div />',{class:type+'-name condition-name',text:type}))
				var text = 'condition-text'
				token.append($('<div />',{class:type+'-text condition-text',text:text}))
			}
		else{
		// var token = $('<div />',{class:'condition '+type+' '+form+" "+size,text:type})
		var token = $('<div />',{class:'condition '+type+' '+form+" "+size})
		}
		$("#page").append(token)
		if(isrow){
			$("#page").append($('<div />',{class:isrow}))
		}
		changeName(type)
	}
}

function cleartokens(){
	console.log("Cleared page")
	$("#page").html("")
}


$("#tokentype").change(function(){
	type = $("select[name='tokentype'] > option:checked").val()
	form = $("input[name='tokenform']:checked").val()
	size = $("input[name='tokensize']:checked").val()
	quantity = $("input[name='tokenquantity']:checked").val()
	isrow = $("input[name='isrow']:checked").val()
	$("#preview").html($('<div />',{class:'condition '+type+' '+form+" "+size}))
	console.log($("input:checked").val())
})

// $("#menu").css("color","red")
// $("#menu").fadeOut(3000)
// $("#menu").fadeIn(1000)
// $("#menu").slideDown(2000)

function changeName(value){
	console.log(value)
	var br = $('<br>')
	var valtable = '<table class="valtable" cellpadding="0" cellspacing="0"><tr><td>+1</td><td>+2</td><td>+3</td><tr><td></td><td></td><td></td></table>'
	if(value == "armor"){
		$('.'+value+'-name').html('Броня')
		$('.'+value+'-text').html(valtable+'armor-text')
	}
	if(value == "blind"){
		$('.'+value+'-name').html('Слепота')
		$('.'+value+'-text').html('Персонажи с этим состоянием получают "--" на любое действие обычно требующее видеть цель, как большинство атакующих действий.')
	}
	if(value == "bleeding"){
		$('.'+value+'-name').html('Кровотечение')
		$('.'+value+'-text').html('Персонаж умрет за 10 раундов (или 1 минуту). Это состояние не исчезает в конце хода персонажа. Оно может быть снято (2) Use Doctoring Action со сложностью TN 15. ')
	}
	if(value == "burning"){
		$('.'+value+'-name').html('Горение')
		$('.'+value+'-text').html(valtable+'В конце каждого раунда, Горящий получает урон равный значению состояния. Эффект снимается в конце раунда (после нанесения урона). Персонаж в 1" (включая себя) может выполнить (1) Действие чтобы убрать 1 из значения состояния, при 0 эффект снимается.')
	}
	if(value == "dazed"){
		$('.'+value+'-name').html('Ошеломление')
		$('.'+value+'-text').html('Все действия персонажа получают +2 к сложности (TN).')
	}
	if(value == "defensive"){
		$('.'+value+'-name').html('Защита')
		$('.'+value+'-text').html(valtable+'Чаще всего это состояние получают, через действие Защитная Стойка (Defensive Stance). Персонаж с этим состоянием получает "+" на свои проверки Защиты (Defense) за каждое значение состояния.')
	}
	if(value == "fast"){
		$('.'+value+'-name').html('Ускорение')
		$('.'+value+'-text').html('Персонаж с этим состоянием получает 1 дополнительное очко действия (AP). Это состояние снимается в конце хода персонажа. Ускорение и Замедление отменяют друг друга, снимите оба с персонажа если они присутствуют одновременно.')
	}
	if(value == "focus"){
		$('.'+value+'-name').html('Фокусировка')
		$('.'+value+'-text').html(valtable+'Чаще всего это состояние получают, через действие Фокус (Focus) (стр. 202). Сфокусированный персонаж получает "+" на свое следующее (не-Фокус) Действие и любую сопутствующую проверку Урона (Damage) за каждое значение состояния. ')
	}
	if(value == "intoxicated"){
		$('.'+value+'-name').html('Опьянение')
		$('.'+value+'-text').html('Персонаж получает "-" ко всем проверкам Силы Воли (Willpower).')
	}
	if(value == "paralyzed"){
		$('.'+value+'-name').html('Паралич')
		$('.'+value+'-text').html('Персонаж с этим состоянием не получает очков действия (AP) и не может заявлять действия во время своей активации (даже (0) Действия). Это состояние снимается в конце хода персонажа. Паралич и Повторная активация отменяют друг друга, снимите оба с персонажа если они присутствуют одновременно.')
	}
	if(value == "poison"){
		$('.'+value+'-name').html('Отравление')
		$('.'+value+'-text').html(valtable+'Эффект накапливается. В конце каждого раунда Отравленный получает 1 урона, который не может быть снижен или отменен. После получения урона, снизьте значение Отравления на 1. Отравление снимается с персонажа когда его значение достигнет 0.')
	}
	if(value == "slow"){
		$('.'+value+'-name').html('Замедление')
		$('.'+value+'-text').html('Персонаж с этим состоянием получает на 1 меньше очков действия (AP). Это состояние снимается в конце хода персонажа. Ускорение и Замедление отменяют друг друга, снимите оба с персонажа если они присутствуют одновременно.')
	}
	if(value == "suffocating"){
		$('.'+value+'-name').html('Удушье')
		$('.'+value+'-text').html('Каждый ход эффект растет. В конце активации: проверка Силы Воли (Willpower), сложность = значение состояния. При провале, потеря сознания (Unconscious), если уже без сознания получить 3/4/5 урона который нельзя предотвратить, если при этом раны (wounds) снижаются до 0 или меньше, персонаж умирает.')
	}
	if(value == "reactivate"){
		$('.'+value+'-name').html('Повторная активация')
		$('.'+value+'-text').html('В конце раунда, любой персонаж с этим состоянием может сделать еще один ход. Если несколько персонажей обладают таким состоянием, они делают ходы в порядке их инициативы. Паралич и Повторная активация отменяют друг друга, снимите оба с персонажа если они присутствуют одновременно.')
	}
	if(value == "useless-limb"){
		$('.'+value+'-name').html('Бесполезная конечность')
		$('.'+value+'-text').html('Рука: персонаж получает "--" на любое действие требующее двух рук, включая многие Физические (Physical) проверки. Нога: персонаж снижает свое движение (Walk) на 1, и получает "--" на все Физические (Physical) проверки требующие движения.')
	}

	// TEXT HEIGHT CONTROL
		var hname = parseInt($('.'+value+'-name').css('height'))
		var htext = parseInt($('.'+value+'-text').css('height'))
		var hnplace = 37
		var htplace = 175
		if(hname > hnplace){
			$('.'+value+'-name').css('font-size','7pt').css('color','red')
		}
		if(htext > htplace){
			$('.'+value+'-text').css('font-size','7pt').css('color','red')
		}
		var hname = parseInt($('.'+value+'-name').css('height'))
		var htext = parseInt($('.'+value+'-text').css('height'))
		if(hname <= hnplace){
			$('.'+value+'-name').css('color','black')
		}
		if(htext <= htplace){
			$('.'+value+'-text').css('color','black')
		}
}