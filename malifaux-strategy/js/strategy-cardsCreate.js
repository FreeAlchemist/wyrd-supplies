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

			$('#'+cardid+'-front').append($('<div />',{class:'header',id:cardid+'-header'}))
				if(isNaN(cardid) == true && cardid != 'always' && cardid != 'doubles'){
					$('#'+cardid+'-header').append($('<div />',{class:'seal '+cardid,id:cardid+'-seal'}))
				}
				else if(cardid == 'always'){
					$('#'+cardid+'-header').append($('<div />',{class:'seal',id:cardid+'-seal',text:'A'}))
				}
				else if(cardid == 'doubles'){
					$('#'+cardid+'-header').append($('<div />',{class:'seal',id:cardid+'-seal',text:'D'}))
				}
				else{
					$('#'+cardid+'-header').append($('<div />',{class:'seal',id:cardid+'-seal',text:cardid}))
				}
			$('#'+cardid+'-header').append($('<div />',{class:'title',id:cardid+'-title',text:cards[cardid].name}))

			$('#'+cardid+'-front').append($('<div />',{class:'block',id:cardid+'-block'}))
				$('#'+cardid+'-block').append($('<div />',{class:'flavor',id:cardid+'-flavor',text:cards[cardid].text}))

			$('#'+cardid+'-front').append($('<div />',{class:'text',id:cardid+'-text'}))
				if(lang == 'rus'){
					$('#'+cardid+'-text').append($('<p />',{text:'Расстановка: '+cards[cardid].setup}))
					$('#'+cardid+'-text').append($('<p />',{text:'Победные очки: '+cards[cardid].vp}))
				}
					else{
						$('#'+cardid+'-text').append($('<p />',{text:'Setup: '+cards[cardid].setup}))
						$('#'+cardid+'-text').append($('<p />',{text:'Victory points: '+cards[cardid].vp}))
					}

			$('#'+cardid+'-front').append($('<div />',{class:'bottom',id:cardid+'-bottom'}))
				$('#'+cardid+'-bottom').append($('<div />',{class:'label',text:type}))
				$('#'+cardid+'-bottom').append($('<div />',{class:'label label-type',text:set}))

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
}