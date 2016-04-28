$('body').append($('<div />',{id:'menu'}))
$('#menu').append($('<a />',{href:'../index.html',text:'Wyrd Supplies'}))
$('#menu').append($('<a />',{href:'strategy-basic.html',text:'Strategy: Basic'}))
$('#menu').append($('<a />',{href:'scheme-basic.html',text:'Scheme: Basic'}))

var arr = [];

for (var p in cards) {
	arr.push(p);
}


console.log(arr)
console.log(arr.length)
// console.log(arr[0])

var quantity = arr.length;

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
				$('#'+cardid+'-text').append($('<p />',{text:'Setup: '+cards[cardid].setup}))
				$('#'+cardid+'-text').append($('<p />',{text:'Victory points'+cards[cardid].vp}))

			$('#'+cardid+'-front').append($('<div />',{class:'bottom',id:cardid+'-bottom'}))
				$('#'+cardid+'-bottom').append($('<div />',{class:'label',text:cards[cardid].type}))

};

// $('#page').append($('<div />',{class:'row'}))

// <div class="card">
// 	<div class="back">
// 		<div class="top_label">scheme</div>
// 		<div class="logo"></div>
// 		<div class="bottom_label">scheme</div>
// 		</div>
// </div>

// for (var i = quantity-1; i >= 0; i--) {
// 	var cardid = arr[i];
// 	$('#page').append($('<div />',{class:'card',id:cardid+'-card'}))
// 		$('#'+cardid+'-card').append($('<div />',{class:'back',id:cardid+'-back'}))
// 			$('#'+cardid+'-back').append($('<div />',{class:'top_label',text:cards[cardid].type}))
// 			$('#'+cardid+'-back').append($('<div />',{class:'logo'}))
// 			$('#'+cardid+'-back').append($('<div />',{class:'bottom_label',text:cards[cardid].type}))
// }
