// $('#popup').toggle()
// $('#page').toggle()
$('body').append($('<div />',{id:'menu'}))
$('#menu').append($('<a />',{href:'../index.html',text:'WYRD SUPPLIES'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-basic.html',text:'Pursuits: Basic'}))
$('#menu').append($('<a />',{href:'pursuits-basic-rus.html',text:'Занятия: Basic'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-advanced.html',text:'Pursuits: Advanced'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-into-the-steam.html',text:'Pursuits: Into the Steam'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-under-quarantine.html',text:'Pursuits: Under Quarantine'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-into-the-bayou.html',text:'Pursuits: Into the Bayou'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-from-nightmares.html',text:'Pursuits: From Nightmares'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-guild-wars.html',text:'Pursuits: Guild Wars'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<a />',{href:'pursuits-beyond-fate.html',text:'Pursuits: Beyond Fate'}))
$('#menu').append($('<div />',{class:'row'}))
$('#menu').append($('<input />',{type:'button',id:'btn-talents-pursuit',value:'Pursuit talents','click':function(){
	$('#popup').toggle()
	$('#page').toggle()
}}))

console.log('Language: '+lang)

var arr = [];

for (var p in pursuit) {
	arr.push(p);
}


console.log(arr)
console.log(arr.length)
// console.log(arr[0])

var quantity = arr.length;

/*front*/
for (var i = 0; i < quantity; i++) {
	console.log('PURSUIT #'+i+': ')
	console.log(pursuit[arr[i]])
	// console.log(pursuit[i].text)
	// console.log(pursuit[i].gear)
	// console.log(pursuit[i].talent['name'])
	// console.log(pursuit[i].talent['text'])

	var cardid = arr[i];
	var cardfrontid = cardid+'-front';
	var cardbackid = cardid+'-back';
	console.log(cardid)
	$('#page').append($('<div />',{class:'card card-front '+faction,id:cardfrontid}))
	$('#'+cardfrontid).append($('<div />',{class:'front1',id:cardfrontid+'-bg1'}))
	$('#'+cardfrontid).append($('<div />',{class:'front2',id:cardfrontid+'-bg2'}))
	
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'pursuit-title',text:pursuit[cardid].name}))
	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'pursuit-text',text:pursuit[cardid].text}))

	if(pursuit[cardid].gear){
		if(lang == 'rus'){
		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-name',text:'вещи:'}))
		}
		else{
			$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-name',text:'GEAR:'}))
		}
		
		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-text',text:pursuit[cardid].gear}))
	}

	var talentsarr = [];
	for (var t in pursuit[cardid].talents) {
		talentsarr.push(t);
	}
	// console.log(talentsarr)
	var talentsquantity = talentsarr.length;
	console.log(talentsquantity)
	var table = $('<table />');
	table.attr('cellpadding',"0px");
	table.attr('cellspacing','0px');
	table.attr('width','100%');
	table.attr('class','talentstable');
	table.attr('id',' talents-'+cardid);
	var tr = $('<tr />');
	// var td0 = $('<td />',{class:'talentstable-pursuit',text:cardid});
	var td0 = $('<td />',{class:'talentstable-pursuit',text:pursuit[cardid].name+' ('+cardid+')'});
	td0.attr('colspan',"2");
	table.append(tr.append(td0))
	
	for (var ts = 1; ts <= talentsquantity; ts++) {
		console.log('Talent #'+ts+': ')
		var talentsstep = pursuit[cardid].talents[ts]
		console.log(talentsstep)
		// console.log(talentsstep['name'])
		// console.log(talentsstep['text'])
		// $('#'+stepid).append($('<li />',{text:pursuit[cardid].talents[ts]}))
		if(ts == '1'){
			$('#'+cardfrontid+'-bg1').append($('<div />',{class:'talent-name',text:talentsstep['name']}))
			$('#'+cardfrontid+'-bg1').append($('<div />',{class:'talent-text',text:talentsstep['text']}))
			}
		var tr = $('<tr />');
		// var td0 = $('<td />',{class:'talentstable-pursuit'});
		var td1 = $('<td />',{class:'talentstable-name'});
		var td2 = $('<td />',{class:'talentstable-text'});
		// td0.append(pursuit[cardid].name)
		td1.append(talentsstep['name'])
		td2.append(talentsstep['text'])

		table.append(tr.append(td1).append(td2))
	};
	$('#popup').append(table)



	// if(pursuit[cardid].talent['name']){
	// 	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'talent-name',text:pursuit[cardid].talent['name']}))
	// 	$('#'+cardfrontid+'-bg1').append($('<div />',{class:'talent-text',text:pursuit[cardid].talent['text']}))
	// 	}

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
	// console.log(stepquantity)
	for (var s = 1; s <= stepquantity; s++) {
		// console.log('STEP #'+s+': ')
		// console.log(pursuit[arr[i]].step[s])
		$('#'+stepid).append($('<li />',{text:pursuit[cardid].step[s]}))

	};
};

/*separator*/
$('#page').append($('<div />',{class:'row'}))

// for (var i = 1; i <= 35; i++) {
// 	console.log('i: '+i+' i % 3 = '+ i % 3)
// }

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
	$('#'+cardbackid).append($('<div />',{class:'title-back type '+faction,text:'\"'+set+'\"'}))
	// $('#'+cardbackid+'-bg').append($('<div />',{class:'title-back type '+faction,text:'\"'+set+'\"'}))
	// $('#'+cardbackid+'-bg').append($('<div />',{class:'title-back type '+faction,text:pursuit[cardid].text}))
}
