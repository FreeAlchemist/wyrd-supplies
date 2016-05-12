$('body').append($('<div />',{id:'menu'}))
$('#menu').append($('<a />',{href:'../index.html',text:'WYRD SUPPLIES'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'index.html',text:'Crossroads Tarot'}))
$('#menu').append($('<a />',{href:'index-rus.html',text:'Таро перекрёстка'}))

function checkLang(language){
	var lang = language
	console.log(lang)
	if(lang == 'ENG'){
		$('#lang-eng').addClass('lang-active')
	}
	if(lang == 'RUS'){
		$('#lang-rus').addClass('lang-active')
	}
}

var objs = {};
	var arr = [];
	for (var l in interpretation) {
		var key = '' + l;
		for (var v in interpretation[l]) {
			var keyv = key+'_'+v;
			objs[keyv] = interpretation[l][v]
			arr.push(keyv);
		}
	}
/* POPUP */
var $body = $('body');
var $popupWrapper = $('<div />', {class:'popupWrapper notdisplay', click:function(){$(this).addClass('notdisplay')}});
var $popupClose = $('<div />', {class:'popupClose notdisplay', text:'X'});
var $popup = $('<div />', {class:'popup'});
$body.append($popupWrapper);
$popupWrapper.append($popup);
var popupSelectedCard = {
	'crossroad-south' : null,
	'crossroad-east' : null,
	'crossroad-north' : null,
	'crossroad-west' : null,
	'crossroad-station' : null,
}
var popupSelectedDirection = null;
for (var l in interpretation) {
	var key = '' + l;
	var $line =  $('<div />', {class:'popupLine'});
	$popup.append($line);
	for (var v in interpretation[l]) {
		var keyv = key+'_'+v;
		var $obj = $('<div />', {class:'popupCard '+l+'_'+v+' color-'+l,'data-id':keyv, text:objs[keyv].name, click:clickCard})
		$line.append($obj);
	}
}
$('#crossroad-north').click(function(){
	openCards(this);
})
$('#crossroad-west').click(function(){
	openCards(this);
})
$('#crossroad-station').click(function(){
	openCards(this);
})
$('#crossroad-east').click(function(){
	openCards(this);
})
$('#crossroad-south').click(function(){
	openCards(this);
})
function openCards(direction) {
	popupSelectedDirection = $(direction).attr('id');
	$popupWrapper.removeClass('notdisplay');
}
var func = function(){
		var obj = {
			station : {
				cardId : '#card-station',
				crossroadClass : '.crossroad-station',
				historyId : '#history-station',
				text1 : 'Station',
				fateId : '#fate-station',
				text2 : 'Station Fate',
			},
			west : {
				cardId : '#card-west',
				crossroadClass : '.crossroad-west',
				historyId : '#history-west',
				text1 : 'West (Physical aspects)',
				fateId : '#fate-west',
				text2 : 'West Fate',
			},
			north : {
				cardId : '#card-north',
				crossroadClass : '.crossroad-north',
				historyId : '#history-north',
				text1 : 'North (Main Skills)',
				fateId : '#fate-north',
				text2 : 'North Fate',
			},
			east : {
				cardId : '#card-east',
				crossroadClass : '.crossroad-east',
				historyId : '#history-east',
				text1 : 'East (Mental aspects)',
				fateId : '#fate-east',
				text2 : 'East Fate',
			},
			south : {
				cardId : '#card-south',
				crossroadClass : '.crossroad-south',
				historyId : '#history-south',
				text1 : 'South (Endeavour Skills)',
				fateId : '#fate-south',
				text2 : 'South Fate',
			} 
		}
		return function(dir,classfinish,suit,T0,T1,T2,S1,B1) {

			// console.log("obj[dir].cardId: "+obj[dir].cardId);
			// console.log('dir: '+dir)
			// console.log('classfinish: '+classfinish)
			// console.log('T0: '+T0)
			// console.log('T1: '+T1)
			// console.log('T2: '+T2)
			// console.log('S1: '+S1)
			// console.log('B1: '+B1)

			var element = $(obj[dir].cardId)

			function cardflip(){
				element.css('transform','rotateY(90deg)');
				setTimeout(cardflip2,250);
			}

			function cardflip2(){
				if(element.hasClass('card-back')){
					element.removeClass('card-back').addClass(classfinish).html(T0);
					setTimeout(cardflip3,500);
				}
				else{
					element.attr( "class", "crossroad-card card-back" );
					cardflip2();
				}
			}

			function cardflip3(){
				element.css('transform','rotateY(0deg)');
			}

			cardflip()

			// console.log("obj[dir].historyId "+obj[dir].historyId);

			if(dir=='station'){
				$(obj[dir].historyId)
					.html($('<div />',{class:'skill',id:'skill'+dir+'B1'}))
					$('#skill'+dir+'B1')
					.html($('<div />',{class:'skill-title',text:obj[dir].text1+':'}))
					.append($('<div />',{class:'skill-text',text:B1}))
				$(obj[dir].historyId)
					.append($('<div />',{class:'skill-desc',text:T1}))

				if(S1){
				$(obj[dir].historyId)
				.append($('<div />',{class:'skill',id:'skill'+dir+'S1'}))
				$('#skill'+dir+'S1')
				.html($('<div />',{class:'skill-title',text:'Station skill: '}))
				.append($('<div />',{class:'skill-text',text:S1}))
				}
			}
			else{
				$(obj[dir].historyId)
				.html($('<div />',{class:'skill',id:'skill'+dir}))
				$('#skill'+dir)
				.html($('<div />',{class:'skill-title',text:obj[dir].text1+':'}))
				.append($('<div />',{class:'skill-text',text:T1}))
			}

			$(obj[dir].fateId)
			.html($('<div />',{class:'skill-fate',id:'skill'+dir+'fate'}))
			$('#skill'+dir+'fate')
			.html($('<div />',{class:'skill-fate-title',text:obj[dir].text2+' ('+suit+' '+T0+'):'}))
			.append($('<div />',{class:'skill-fate-text',text:T2}))
		}
	}()
function clickCard(o) {
	// console.log($(this).attr('data-id'))
	var $this = $(this);
	if ($this.hasClass('catched')) {
		return;
	}
	var card = $(this).attr('data-id');
	// var cardcolor = $(this[class*='color']);
	var cardcolor = $(this).attr('class');
	// console.log(cardcolor);
	var classstart = cardcolor.indexOf('color');
	if(classstart != -1){
		// console.log("something: "+cardcolor)
		// console.log(cardcolor.substr(classstart))
		var classfinish = cardcolor.substr(classstart)+' '+card
	}
	if (popupSelectedCard[popupSelectedDirection]) {
		$(popupSelectedCard[popupSelectedDirection]).removeClass('catched')
	}
	popupSelectedCard[popupSelectedDirection] = this;
	$(this).addClass('catched');
	$popupWrapper.addClass('notdisplay');
	// console.log(card + ' -> ' + popupSelectedDirection)
	// console.log(objs[card])
	if(popupSelectedDirection == "crossroad-station"){
		func('station',classfinish, objs[card].suit, objs[card].name,objs[card].station.text,objs[card].station.fate,objs[card].station.skill,objs[card].station.birth)
	}
	if(popupSelectedDirection == "crossroad-west"){
		func('west',classfinish, objs[card].suit, objs[card].name,objs[card].west.text,objs[card].west.fate )
	}
	if(popupSelectedDirection == "crossroad-north"){
		func('north',classfinish, objs[card].suit, objs[card].name,objs[card].north.text,objs[card].north.fate )
	}
	if(popupSelectedDirection == "crossroad-east"){
		func('east',classfinish, objs[card].suit, objs[card].name,objs[card].east.text,objs[card].east.fate )
	}
	if(popupSelectedDirection == "crossroad-south"){
		func('south',classfinish, objs[card].suit, objs[card].name,objs[card].south.text,objs[card].south.fate )
	}
}
/*Random*/
function randomize(){
	arr.sort(function (a, b) {
	  return Math.random() - 0.5;
	});
	var classarr = []
	// console.log(classarr)
	for (var i = 4; i >= 0; i--) {
		if(arr[i].indexOf('hearts') != -1){classarr[i] = 'color-hearts '+arr[i]}
		if(arr[i].indexOf('clubs') != -1){classarr[i] = 'color-clubs '+arr[i]}
		if(arr[i].indexOf('spades') != -1){classarr[i] = 'color-spades '+arr[i]}
		if(arr[i].indexOf('diamonds') != -1){classarr[i] = 'color-diamonds '+arr[i]}
		if(arr[i].indexOf('jockers') != -1){classarr[i] = arr[i]}
	};
	// console.log(classarr)
	func('station',classarr[0], objs[arr[0]].suit, objs[arr[0]].name,objs[arr[0]].station.text,objs[arr[0]].station.fate,objs[arr[0]].station.skill,objs[arr[0]].station.birth)
	func('west',classarr[1], objs[arr[1]].suit, objs[arr[1]].name,objs[arr[1]].west.text,objs[arr[1]].west.fate)
	func('north',classarr[2], objs[arr[2]].suit, objs[arr[2]].name,objs[arr[2]].north.text,objs[arr[2]].north.fate)
	func('east',classarr[3], objs[arr[3]].suit, objs[arr[3]].name,objs[arr[3]].east.text,objs[arr[3]].east.fate)
	func('south',classarr[4], objs[arr[4]].suit, objs[arr[4]].name,objs[arr[4]].south.text,objs[arr[4]].south.fate)
}
/*Print*/
function print(){
	$('body').addClass('bodyprint')
}