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
			// if(size == "size-40"){

			// 	// var token = $('<div />',{class:'condition '+form+" "+size})
			// 	// token.append($('<div />',{class:type+' condition-image'}))
			// 	// token.append($('<div />',{class:type+'-name condition-name',text:type}))
			// 	// var text = 'condition-text'
			// 	// token.append($('<div />',{class:type+'-text condition-text',text:text}))

			// }
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
			if(size == "table"){
				// var token = $('<div />',{class:'condition '+form+" "+size})
				// token.append($('<div />',{class:type+' '+type+'-image condition-image'}))
				// token.append($('<div />',{class:type+'-name condition-name',text:type}))
				// var text = 'condition-text'
				// token.append($('<div />',{class:type+'-text condition-text',text:text}))
				var table = $('<table />')
				table.attr('cellpadding',"0px")
				table.attr('cellspacing','0px')
				table.attr('class','tokentable')
				var tr = $('<tr />');
				var td0 = $('<td />',{class:'td-name'});
				var td1 = $('<td />',{class:'td-text'});
				td0.append($('<div />',{class:type+' condition-image'}))
				td0.append($('<div />',{class:type+'-name condition-name',text:type}))
				var text = 'condition-text'
				td1.append($('<div />',{class:type+'-text condition-text',text:text}))
				table.append(tr.append(td0).append(td1))
			}
		else{
		// var token = $('<div />',{class:'condition '+type+' '+form+" "+size,text:type})
		var token = $('<div />',{class:'condition '+type+' '+form+" "+size})
		}
		$("#page").append(token)
		$("#page").append(table)
		
		if(isrow){
			$("#page").append($('<div />',{class:isrow}))
		}
		changeName(type)
	}
	// $(".valtable").css('display','none')
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
	var valtable3 = '<div><table class="valtable" cellspacing="0"><tr><td>+1</td><td>+2</td><td>+3</td><tr><td></td><td></td><td></td></table></div>'
	var valtable6 = '<div><table class="valtable" cellspacing="0"><tr><td>+1</td><td>+2</td><td>+3</td><td>+4</td><td>+5</td><td>+6</td><tr><td/><td/><td/><td/><td/><td/></table></div>'
	if(value == "armor"){
		$('.'+value+'-name').html('Броня'+valtable3)
		$('.'+value+'-text').html('armor-text')
	}
	if(value == "blind"){
		$('.'+value+'-name').html('Слепота')
		$('.'+value+'-text').html('Персонажи с этим состоянием получают "--" на любое действие обычно требующее видеть цель, как большинство атакующих действий.')
	}
	if(value == "bleeding"){
		$('.'+value+'-name').html('Кровотечение')
		$('.'+value+'-text').html('Персонаж умрет за 10 раундов (или 1 минуту).<br>Это состояние не исчезает в конце хода персонажа.<br>Оно может быть снято (2) Use Doctoring Action со сложностью TN 15. ')
	}
	if(value == "burning"){
		$('.'+value+'-name').html('Горение'+valtable6)
		$('.'+value+'-text').html('В конце каждого раунда, Горящий получает урон равный значению состояния.<br>Эффект снимается в конце раунда (после нанесения урона).<br>Персонаж в 1" (включая себя) может выполнить (1) Действие чтобы убрать 1 из значения состояния, при 0 эффект снимается.')
	}
	if(value == "dazed"){
		$('.'+value+'-name').html('Ошеломление')
		$('.'+value+'-text').html('Все действия персонажа получают +2 к сложности (TN).')
	}
	if(value == "defensive"){
		$('.'+value+'-name').html('Защита'+valtable3)
		$('.'+value+'-text').html('Чаще всего это состояние получают, через действие Защитная Стойка (Defensive Stance).<br>Персонаж с этим состоянием получает "+" на свои проверки Защиты (Defense) за каждое значение состояния.')
	}
	if(value == "fast"){
		$('.'+value+'-name').html('Ускорение')
		$('.'+value+'-text').html('Персонаж с этим состоянием получает 1 дополнительное очко действия (AP).<br>Это состояние снимается в конце хода персонажа. Ускорение и Замедление отменяют друг друга, снимите оба с персонажа если они присутствуют одновременно.')
	}
	if(value == "focus"){
		$('.'+value+'-name').html('Фокусировка'+valtable3)
		$('.'+value+'-text').html('Чаще всего это состояние получают, через действие Фокус (Focus) (стр. 202).<br>Сфокусированный персонаж получает "+" на свое следующее (не-Фокус) Действие и любую сопутствующую проверку Урона (Damage) за каждое значение состояния. ')
	}
	if(value == "intoxicated"){
		$('.'+value+'-name').html('Опьянение')
		$('.'+value+'-text').html('Персонаж получает "-" ко всем проверкам Силы Воли (Willpower).')
	}
	if(value == "paralyzed"){
		$('.'+value+'-name').html('Паралич')
		$('.'+value+'-text').html('Персонаж с этим состоянием не получает очков действия (AP) и не может заявлять действия во время своей активации (даже (0) Действия).<br>Это состояние снимается в конце хода персонажа.<br>Паралич и Повторная активация отменяют друг друга, снимите оба с персонажа если они присутствуют одновременно.')
	}
	if(value == "poison"){
		$('.'+value+'-name').html('Отравление'+valtable6)
		$('.'+value+'-text').html('Эффект накапливается.<br>В конце каждого раунда Отравленный получает 1 урона, который не может быть снижен или отменен.<br>После получения урона, снизьте значение Отравления на 1. Отравление снимается с персонажа когда его значение достигнет 0.')
	}
	if(value == "slow"){
		$('.'+value+'-name').html('Замедление')
		$('.'+value+'-text').html('Персонаж с этим состоянием получает на 1 меньше очков действия (AP).<br>Это состояние снимается в конце хода персонажа. Ускорение и Замедление отменяют друг друга, снимите оба с персонажа если они присутствуют одновременно.')
	}
	if(value == "suffocating"){
		$('.'+value+'-name').html('Удушье')
		$('.'+value+'-text').html('Каждый ход эффект растет.<br>В конце активации: проверка Силы Воли (Willpower), сложность = значение состояния.<br>При провале, потеря сознания (Unconscious), если уже без сознания получить 3/4/5 урона который нельзя предотвратить, если при этом раны (wounds) снижаются до 0 или меньше, персонаж умирает.')
	}
	if(value == "reactivate"){
		$('.'+value+'-name').html('Повторная активация')
		$('.'+value+'-text').html('В конце раунда, любой персонаж с этим состоянием может сделать еще один ход.<br>Если несколько персонажей обладают таким состоянием, они делают ходы в порядке их инициативы.<br>Паралич и Повторная активация отменяют друг друга, снимите оба с персонажа если они присутствуют одновременно.')
	}
	if(value == "useless-limb"){
		$('.'+value+'-name').html('Бесполезная конечность')
		$('.'+value+'-text').html('Рука: персонаж получает "--" на любое действие требующее двух рук, включая многие Физические (Physical) проверки.<p>Нога: персонаж снижает свое движение (Walk) на 1, и получает "--" на все Физические (Physical) проверки требующие движения.</p>')
	}

	// TEXT HEIGHT CONTROL
		var hcard = parseInt($('.condition').css('height'))
		var himage = parseInt($('.'+value+'-image').css('height'))
		var hname = parseInt($('.'+value+'-name').css('height'))
		var htext = parseInt($('.'+value+'-text').css('height'))
		var hplace = hcard - hname
		console.log(hplace)

		var hnplace = 37
		var htplace = 175
		if(hname > himage){
			$('.'+value+'-name').css('font-size','8pt').css('color','red')
		}
		if(htext > hplace){
			// $('.'+value+'-text').css('font-size','7pt').css('color','red')
		}
		var hname = parseInt($('.'+value+'-name').css('height'))
		var htext = parseInt($('.'+value+'-text').css('height'))
		if(hname <= himage){
			$('.'+value+'-name').css('color','black')
		}
		if(htext <= hplace){
			$('.'+value+'-text').css('color','black')
		}
}