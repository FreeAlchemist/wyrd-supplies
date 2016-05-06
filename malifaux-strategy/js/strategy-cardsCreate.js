$('body').append($('<div />',{id:'menu'}))
$('#menu').append($('<a />',{href:'../index.html',text:'WYRD SUPPLIES'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'strategy-basic.html',text:'Strategy: Basic'}))
$('#menu').append($('<a />',{href:'strategy-basic-rus.html',text:'Стратегии: Базовые'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'scheme-basic.html',text:'Scheme: Basic'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'strategy-gg.html',text:'Strategy: Gaining Grounds 2016'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'scheme-gg.html',text:'Scheme: Gaining Grounds 2016'}))

console.log('Language: '+lang)

var arr = [];

for (var p in cards) {
	arr.push(p);
}

var quantity = arr.length;

console.log(arr)
console.log(arr.length)
// console.log(arr[0])

// console.log('TYPE: '+type)

/*front*/
for (var i = 0; i < quantity; i++) {
	var cardid = arr[i];
	console.log('cards #'+i+': ')
	console.log(cardid)
	console.log(cardid+' is not a number:'+isNaN(cardid))
	console.log(cards[cardid].name)
	console.log(cards[cardid].text)
	console.log(cards[cardid].setup)
	console.log(cards[cardid].special)
	console.log(cards[cardid].vp)


	$('#page').append($('<div />',{class:'card',id:cardid+'-card'}))
		$('#'+cardid+'-card').append($('<div />',{class:'front',id:cardid+'-front'}))
			$('#'+cardid+'-front').append($('<div />',{class:'header',id:cardid+'-header',text:cards[cardid].name}))
			$('#'+cardid+'-front').append($('<div />',{class:'text',id:cardid+'-text'}))

			if(cards[cardid].setup){
				if(lang == 'rus'){
					$('#'+cardid+'-text').append($('<div />',{class:'text-title',text:'Расстановка:'}))
				}
				else{
					$('#'+cardid+'-text').append($('<div />',{class:'text-title',text:'Setup:'}))
				}
				$('#'+cardid+'-text').append($('<div />',{text:cards[cardid].setup}))
			}

			if(cards[cardid].special){
				if(lang == 'rus'){
					$('#'+cardid+'-text').append($('<div />',{class:'text-title',text:'Специальные правила:'}))
				}
				else{
					$('#'+cardid+'-text').append($('<div />',{class:'text-title',text:'Special rules:'}))
				}
				$('#'+cardid+'-text').append($('<div />',{text:cards[cardid].special}))
			}

			if(cards[cardid].vp){
				if(lang == 'rus'){
					$('#'+cardid+'-text').append($('<div />',{class:'text-title',text:'Победные очки:'}))
				}
				else{
					$('#'+cardid+'-text').append($('<div />',{class:'text-title',text:'Victory points:'}))
				}
				$('#'+cardid+'-text').append($('<div />',{text:cards[cardid].vp}))
			}

			$('#'+cardid+'-front').append($('<div />',{class:'bottom',id:cardid+'-bottom'}))
				$('#'+cardid+'-bottom').append($('<div />',{class:'label',text:type}))
				$('#'+cardid+'-bottom').append($('<div />',{class:'label label-type',text:set}))

		if(isNaN(cardid) == true && cardid != 'always' && cardid != 'doubles'){
			$('#'+cardid+'-bottom').append($('<div />',{class:'seal '+cardid,id:cardid+'-seal'}))
		}
		else if(cardid == 'always'){
			$('#'+cardid+'-bottom').append($('<div />',{class:'seal',id:cardid+'-seal',text:'A'}))
		}
		else if(cardid == 'doubles'){
			$('#'+cardid+'-bottom').append($('<div />',{class:'seal',id:cardid+'-seal',text:'D'}))
		}
		else{
			$('#'+cardid+'-bottom').append($('<div />',{class:'seal',id:cardid+'-seal',text:cardid}))
		}		


		var hfront = parseInt($('#'+cardid+'-front').css('height'))
		var hheader = parseInt($('#'+cardid+'-header').css('height'))
		var htext = parseInt($('#'+cardid+'-text').css('height'))
		var hbottom = parseInt($('#'+cardid+'-bottom').css('height'))
		var hplace = hfront-hheader-hbottom

		// console.log('#'+cardid+'-front height: '+hfront)
		// console.log('#'+cardid+'-header height: '+hheader)
		// console.log('#'+cardid+'-text height: '+htext)
		// console.log('#'+cardid+'-bottom height: '+hbottom)
		// console.log(hplace)

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
for (var i = quantity-1; i >= 0; i--) {
	var cardid = arr[i];
$('#page').append($('<div />',{class:'card',id:cardid+'-card2'}))
		$('#'+cardid+'-card2').append($('<div />',{class:'back',id:cardid+'-back'}))
			$('#'+cardid+'-back').append($('<div />',{class:'top_label',text:type}))
			$('#'+cardid+'-back').append($('<div />',{class:'logo '+cardid}))
			$('#'+cardid+'-back').append($('<div />',{class:'bottom_label',text:set}))
			// $('#'+cardid+'-back').append($('<div />',{class:'bottom_label',text:'Contents copyright ©, http://www.wyrd-games.net/home Wyrd Miniatures, LLC.'}))

			// Contents copyright ©, <a href="http://www.wyrd-games.net/home">Wyrd Miniatures</a>, LLC.
}