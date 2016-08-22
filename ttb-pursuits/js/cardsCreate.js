$('body').append($('<div />',{id:'menu'}))
$('#menu').append($('<a />',{href:'../index.html',text:'WYRD SUPPLIES'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-basic.html',text:'Занятия: Basic'}))
$('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-advanced.html',text:'Занятия: Advanced'}))
// $('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-into-the-steam.html',text:'Занятия: Into the Steam'}))
// $('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-under-quarantine.html',text:'Занятия: Under Quarantine'}))
// $('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-into-the-bayou.html',text:'Занятия: Into the Bayou'}))
// $('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-from-nightmares.html',text:'Занятия: From Nightmares'}))
// $('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-guild-wars.html',text:'Занятия: Guild Wars'}))
// $('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-beyond-fate.html',text:'Занятия: Beyond Fate'}))
// $('#menu').append($('<div />',{class:'row'}))

function activeBtn(elem){
	console.log(elem)
	var active = 0
	if($(elem).hasClass('btnactive')){
			$(elem).removeClass('btnactive')
			active = 0
		}
		else{
			$(elem).addClass('btnactive')
			active = 1
		}
		return active
}


$('#menu').append($('<input />',{type:'button',class:'btn',id:'btn-talents-pursuit',value:'Общие Таланты','click':function(){
	var active = activeBtn(this)
	console.log(active)
	if(active == '0'){
		$('#popup').hide()
		$('#talents-general').hide()
		$('#page').show()
	}
		else{
			$('#popup').show()
			$('#talents-general').show()
			$('#page').hide()
		}
}}))

$('#menu').append($('<input />',{type:'button',class:'btn',id:'btn-pursuit-text',value:'Описания занятий (обложка)','click':function(){
	$('.pursuit-text').toggle()
	activeBtn(this)
}}))

$('#menu').append($('<p />',{text:'Чтобы увидеть таланты занятия, нажмите на блок "Развитие талантов" карточки.'}))

var arr = [];

for (var p in pursuit) {
	arr.push(p);
}

var quantity = arr.length;

/*front*/
for (var i = 0; i < quantity; i++) {
	console.log('PURSUIT #'+i+': ')
	console.log(pursuit[arr[i]])

	var cardid = arr[i];
	var cardfrontid = cardid+'-front';
	var cardbackid = cardid+'-back';
	console.log(cardid)
	$('#page').append($('<div />',{class:'card card-front '+faction,id:cardfrontid}))
	$('#'+cardfrontid).append($('<div />',{class:'front1',id:cardfrontid+'-bg1'}))
	$('#'+cardfrontid).append($('<div />',{class:'front2',id:cardfrontid+'-bg2','click':function(){showElem(this.id)}}))
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'pursuit-title',text:pursuit[cardid].name}))

	if(pursuit[cardid].gear){
		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-name',text:'вещи:'}))
		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-text',text:pursuit[cardid].gear}))
	}

	var name = getTalent(cardid,'n')
	var talent = getTalent(cardid,'t')
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'talent-name',text:name}))
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'talent-text',text:talent}))

	var stepid = cardfrontid+'-bg2'+'-step'

	$('#'+cardfrontid+'-bg2').append($('<ol />',{class:'step-ol',id:stepid}))
	$('#'+stepid).append($('<b />',{text:'Развитие талантов'}))
	//#popup #talents-scrapper

	var steparr = [];
	for (var c in pursuit[cardid].step) {
		steparr.push(c);
	}
	var stepquantity = steparr.length;
	for (var s = 1; s <= stepquantity; s++) {
		$('#'+stepid).append($('<li />',{text:pursuit[cardid].step[s]}))

	};
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
	var cardbackid = cardid+'-back';
	$('#page').append($('<div />',{class:'card card-back '+faction,id:cardbackid}))
	$('#'+cardbackid).append($('<div />',{class:'back '+cardid,id:cardbackid+'-bg'}))
	$('#'+cardbackid+'-bg').append($('<div />',{class:'title-back',text:pursuit[cardid].name}))
	$('#'+cardbackid+'-bg').append($('<div />',{class:'pursuit-text',text:pursuit[cardid].text}))
	$('#'+cardbackid).append($('<div />',{class:'title-back type '+faction,text:'\"'+set+'\"'}))
}

// $('.card-back').toggle()