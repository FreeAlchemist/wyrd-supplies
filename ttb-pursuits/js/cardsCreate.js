// $('#popup').toggle()
// $('#page').toggle()
$('body').append($('<div />',{id:'menu'}))
$('#menu').append($('<a />',{href:'../index.html',text:'WYRD SUPPLIES'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-basic.html',text:'Pursuits: Basic'}))
$('#menu').append($('<a />',{href:'pursuits-basic-rus.html',text:'Занятия: Basic'}))
$('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-advanced.html',text:'Pursuits: Advanced'}))
// $('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-into-the-steam.html',text:'Pursuits: Into the Steam'}))
$('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-under-quarantine.html',text:'Pursuits: Under Quarantine'}))
// $('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-into-the-bayou.html',text:'Pursuits: Into the Bayou'}))
// $('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-from-nightmares.html',text:'Pursuits: From Nightmares'}))
// $('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-guild-wars.html',text:'Pursuits: Guild Wars'}))
// $('#menu').append($('<div />',{class:'row'}))
// $('#menu').append($('<a />',{href:'pursuits-beyond-fate.html',text:'Pursuits: Beyond Fate'}))
// $('#menu').append($('<div />',{class:'row'}))
if(lang == 'rus'){
	$('#menu').append($('<input />',{type:'button',id:'btn-talents-pursuit',value:'Таланты занятий','click':function(){
		$('#popup').toggle()
		$('#page').toggle()
	}}))
	$('#menu').append($('<input />',{type:'button',id:'btn-pursuit-text',value:'Описания занятий','click':function(){
		$('.pursuit-text').toggle()
	}}))
}
else{
	$('#menu').append($('<input />',{type:'button',id:'btn-talents-pursuit',value:'Pursuit talents','click':function(){
		$('#popup').toggle()
		$('#page').toggle()
	}}))
	$('#menu').append($('<input />',{type:'button',id:'btn-pursuit-text',value:'Pursuit description','click':function(){
		$('.pursuit-text').toggle()
	}}))	
}


console.log('Language: '+lang)

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
	$('#'+cardfrontid).append($('<div />',{class:'front2',id:cardfrontid+'-bg2'}))
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'pursuit-title',text:pursuit[cardid].name}))

	if(pursuit[cardid].gear){
		if(lang == 'rus'){
		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-name',text:'вещи:'}))
		}
		else{
			$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-name',text:'GEAR:'}))
		}
		
		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-text',text:pursuit[cardid].gear}))
	}

	var stepid = cardfrontid+'-bg2'+'-step'

	$('#'+cardfrontid+'-bg2').append($('<ol />',{class:'step-ol',id:stepid}))
	if(lang == 'rus'){
		$('#'+stepid).append($('<b />',{text:'Развитие талантов'}))
	}
		else{
			$('#'+stepid).append($('<b />',{text:'Talent advancement'}))
		}

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