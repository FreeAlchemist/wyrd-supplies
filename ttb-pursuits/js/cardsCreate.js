$('body').prepend($('<div />',{id:'page'}))
$('body').append($('<div />',{id:'menu'}))
$('#menu').append($('<a />',{href:'../index.html',text:'Главное меню',class:'btn btn-main'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-basic.html',text:'Basic',class:'btn btn-book'}))
// $('#menu').append($('<a />',{href:'pursuits-advanced.html',text:'Advanced',class:'btn btn-book'}))
$('#menu').append($('<a />',{href:'pursuits-into-the-steam.html',text:'Into the Steam',class:'btn btn-book'}))
$('#menu').append($('<a />',{href:'pursuits-under-quarantine.html',text:'Under Quarantine',class:'btn btn-book'}))
// $('#menu').append($('<a />',{href:'pursuits-into-the-bayou.html',text:'Into the Bayou',class:'btn btn-book'}))
// $('#menu').append($('<a />',{href:'pursuits-from-nightmares.html',text:'From Nightmares',class:'btn btn-book'}))
// $('#menu').append($('<a />',{href:'pursuits-guild-wars.html',text:'Guild Wars',class:'btn btn-book'}))
// $('#menu').append($('<a />',{href:'pursuits-beyond-fate.html',text:'Beyond Fate',class:'btn btn-book'}))
$('#menu').append($('<div />',{class:'row'}))

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


$('#menu').append($('<input />',{type:'button',class:'btn btn-talents-pursuit',value:'Таланты (таблица)','click':function(){
	var active = activeBtn(this)
	console.log(active)
	if(active == '0'){
		$('#popup-talents').hide()
		$('#talents-general').hide()
		$('#popup-cards').hide()
		$('#page').show()
	}
		else{
			$('#popup-talents').show()
			$('#talents-general').show()
			$('#popup-cards').hide()
			$('#page').hide()
		}
}}))
$('#menu').append($('<input />',{type:'button',class:'btn btn-talents-pursuit',value:'Таланты (карточки)','click':function(){
	var active = activeBtn(this)
	console.log(active)
	if(active == '0'){
		$('#popup-talents').hide()
		$('#popup-cards').hide()
		$('#page').show()
	}
		else{
			$('#popup-talents').hide()
			$('#popup-cards').show()
			$('#page').hide()
		}
}}))
$('#menu').append($('<div />',{class:'row'}))

// $('#menu').append($('<input />',{type:'button',class:'btn',id:'btn-pursuit-text',value:'Описания занятий (обложка)','click':function(){
// 	$('.pursuit-text').toggle()
// 	activeBtn(this)
// }}))

// $('#menu').append($('<p />',{text:'Чтобы увидеть таланты занятия, нажмите на блок "Развитие талантов" карточки.'}))

var arr = [];

for (var p in pursuit) {
	arr.push(p);
}

var quantity = arr.length;

/*front*/
for (var i = 0; i < quantity; i++) {
	// console.log('PURSUIT #'+i+': ')
	// console.log(pursuit[arr[i]])

	var cardid = arr[i];
	var cardfrontid = cardid+'-front';
	var cardbackid = cardid+'-back';
	// console.log(cardid)
	$('#page').append($('<div />',{class:'card card-front '+faction,id:cardfrontid}))
	$('#'+cardfrontid).append($('<div />',{class:'front1',id:cardfrontid+'-bg1'}))
	$('#'+cardfrontid).append($('<div />',{class:'front2',id:cardfrontid+'-bg2','click':function(){showElem(this.id,'t')}}))
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'pursuit-title',text:pursuit[cardid].name}))

	if(pursuit[cardid].gear){
		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-name',text:'вещи:'}))
		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-text',text:pursuit[cardid].gear}))

		$('#'+cardid+'-talentstable-gear').append($('<div />',{class:'gear-name',text:'вещи:'}))
		$('#'+cardid+'-talentstable-gear').append($('<div />',{class:'gear-text',text:pursuit[cardid].gear}))
	}

	var name = getTalent(cardid,'n')
	var talent = getTalent(cardid,'t')
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'talent-name',text:name}))
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'talent-text',text:talent}))

	var stepid = cardfrontid+'-bg2'+'-step'

	$('#'+cardfrontid+'-bg2').append($('<ol />',{class:'step-ol',id:stepid}))
	$('#'+stepid).append($('<b />',{text:'Развитие талантов'}))
	//#popup-talents #talents-scrapper

	var steparr = [];
	for (var c in pursuit[cardid].step) {
		steparr.push(c);
	}
	var stepquantity = steparr.length;
	for (var s = 1; s <= stepquantity; s++) {
		$('#'+stepid).append($('<li />',{text:pursuit[cardid].step[s]}))

	};

	$('#'+stepid).clone().appendTo($('#'+cardid+'-talentstable-options'))

	$('#menu').append($('<input />',{type:'button',class:'btn btn-pursuit',id:cardid+'-btn-pursuit',value:pursuit[cardid].name,'click':function(){showElem(this.id,'c')}}))
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
	$('#'+cardbackid+'-bg').clone().appendTo($('#'+cardid+'-talentstable-img'))
	$('#'+cardid+'-talentstable-summary').append(pursuit[cardid].text)
	$('#'+cardbackid+'-bg').append($('<div />',{class:'title-back',text:pursuit[cardid].name}))
	$('#'+cardbackid+'-bg').append($('<div />',{class:'pursuit-text',text:pursuit[cardid].text}))
	$('#'+cardbackid).append($('<div />',{class:'title-back type '+faction,text:'\"'+set+'\"'}))

}

// $('.card-back').toggle()

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