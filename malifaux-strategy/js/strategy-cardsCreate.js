$('body').append($('<div />',{id:'menu'}))
$('#menu').append($('<a />',{href:'../index.html',text:'Главное меню',class:'btn btn-main'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'strategy-basic.html',text:'Стратегии: Базовые',class:'btn btn-strategy'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'scheme-basic.html',text:'Схемы: Базовые',class:'btn btn-strategy'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'strategy-gg.html',text:'Стратегии: Турнирные',class:'btn btn-strategy'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'scheme-gg.html',text:'Схемы: Турнирные',class:'btn btn-strategy'}))

// console.log('Language: '+lang)

var arr = [];

for (var p in cards) {
	arr.push(p);
}

var quantity = arr.length;

// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])

// console.log('TYPE: '+type)

/*front*/
for (var i = 0; i < quantity; i++) {
	var cardid = arr[i];
	// console.log('cards #'+i+': ')
	// console.log(cardid)
	// console.log(cardid+' is not a number:'+isNaN(cardid))
	// console.log(cards[cardid].name)
	// console.log(cards[cardid].text)
	// console.log(cards[cardid].setup)
	// console.log(cards[cardid].special)
	// console.log(cards[cardid].vp)


	if(type == 'strategy'){
		$('#page').append($('<div />',{class:'card strategy',id:cardid+'-card'}))
	}

	if(type == 'scheme'){
		$('#page').append($('<div />',{class:'card scheme',id:cardid+'-card'}))
	}

		$('#'+cardid+'-card').append($('<div />',{class:'front',id:cardid+'-front'}))

// FRONT

			$('#'+cardid+'-front').append($('<div />',{class:'header',id:cardid+'-header',text:cards[cardid].name}))

			$('#'+cardid+'-front').append($('<div />',{class:'text',id:cardid+'-text'}))
			// $('#'+cardid+'-text').append($('<div />',{class:'flavor',id:cardid+'-flavor',text:cards[cardid].text}))
			if(cards[cardid].setup){
				$('#'+cardid+'-text').append($('<div />',{class:'text-title',text:'Расстановка:'}))
				$('#'+cardid+'-text').append($('<div />',{html:cards[cardid].setup}))
			}

			if(cards[cardid].special){
				$('#'+cardid+'-text').append($('<div />',{class:'text-title',text:'Специальные правила:'}))
				$('#'+cardid+'-text').append($('<div />',{html:cards[cardid].special}))
			}

			if(cards[cardid].vp){
				$('#'+cardid+'-text').append($('<div />',{class:'text-title',text:'Победные очки:'}))
				$('#'+cardid+'-text').append($('<div />',{html:cards[cardid].vp}))
			}


// BOTTOM
				$('#'+cardid+'-front').append($('<div />',{class:'bottom',id:cardid+'-bottom'}))
				if(type == 'strategy'){
					$('#'+cardid+'-bottom').append($('<div />',{class:'label',text:'стратегия [_] [_] [_] [_]'}))
				}
				else if(type == 'scheme'){
					$('#'+cardid+'-bottom').append($('<div />',{class:'label',text:'схема [_] [_] [_]'}))
				}
				else{
					$('#'+cardid+'-bottom').append($('<div />',{class:'label',text:type}))
				}
					$('#'+cardid+'-bottom').append($('<div />',{class:'label label-type',text:set}))

			if(isNaN(cardid) == true && cardid != 'always' && cardid != 'doubles'){
			// if(isNaN(cardid) == true && cardid != 'always' && cardid != 'doubles' && cardid != 'masks'){
				$('#'+cardid+'-bottom').append($('<div />',{class:'seal '+cardid,id:cardid+'-seal'}))
			}
			else if(cardid == 'always'){
				$('#'+cardid+'-bottom').append($('<div />',{class:'seal',id:cardid+'-seal',text:'A'}))
			}
			else if(cardid == 'doubles'){
				$('#'+cardid+'-bottom').append($('<div />',{class:'seal',id:cardid+'-seal',text:'D'}))
			}
			// else if(cardid == 'masks'){
			// 	$('#'+cardid+'-bottom').append($('<div />',{class:'seal '+cardid,id:cardid+'-seal',text:'M'}))
			// }
			else{
				$('#'+cardid+'-bottom').append($('<div />',{class:'seal',id:cardid+'-seal',text:cardid}))
			}
	

// TEXT HEIGHT CONTROL

		var hfront = parseInt($('#'+cardid+'-front').css('height'))
		var hheader = parseInt($('#'+cardid+'-header').css('height'))
		var htext = parseInt($('#'+cardid+'-text').css('height'))
		var hbottom = parseInt($('#'+cardid+'-bottom').css('height'))
		var hplace = hfront-hheader-hbottom

		// console.log('#'+cardid+'-front height: '+hfront)
		// console.log('#'+cardid+'-header height: '+hheader)
		console.log('#'+cardid+'-text height: '+htext)
		// console.log('#'+cardid+'-bottom height: '+hbottom)
		// console.log('hplace: '+hplace)

		if(htext > hplace){
			console.log('; htext: '+htext+' > hplace: '+hplace)
			// $('#'+cardid+'-text').css('color','blue')
			$('#'+cardid+'-flavor').css('display','none')
			$('#'+cardid+'-text > div.text-title').css('display','none')
		}

		var htext = parseInt($('#'+cardid+'-text').css('height'))
		console.log('#'+cardid+'-text height: '+htext)
		if(htext > hplace){
			// $('#'+cardid+'-text').css('color','red')
			$('#'+cardid+'-text').css('font-size','7pt')
		}
};

/*separator*/
$('#page').append($('<div />',{class:'row'}))

/*filler*/
if(quantity > 3 && (quantity % 3) != 0){
	if((quantity % 3) == 2){
		$('#page').append($('<div />',{class:'card filler'}))
	}
	if((quantity % 3) == 1){
		$('#page').append($('<div />',{class:'card filler'}))
		$('#page').append($('<div />',{class:'card filler'}))
	}
}

/*back*/
// for (var i = quantity-1; i >= 0; i--) {
// 	var cardid = arr[i];
// $('#page').append($('<div />',{class:'card',id:cardid+'-card2'}))
// 		$('#'+cardid+'-card2').append($('<div />',{class:'back',id:cardid+'-back'}))
// 			$('#'+cardid+'-back').append($('<div />',{class:'top_label',text:type}))
// 			$('#'+cardid+'-back').append($('<div />',{class:'logo '+cardid}))
// 			$('#'+cardid+'-back').append($('<div />',{class:'bottom_label',text:set}))
// 			$('#'+cardid+'-back').append($('<div />',{class:'bottom_label',text:'Contents copyright ©, http://www.wyrd-games.net/home Wyrd Miniatures, LLC.'}))
// }