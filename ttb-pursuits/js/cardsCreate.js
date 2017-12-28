/*Menu*/
	$('body').prepend($('<div />',{id:'page'}))
	$('body').append($('<div />',{id:'menu'}))
	$('#menu').append($('<a />',{href:'../index.html',text:'Главное меню',class:'btn btn-main'}))
	$('#menu').append($('<div />',{class:'row'}))
	$('#menu').append($('<a />',{href:'pursuits-basic.html',text:'Fated Almanac',class:'btn btn-book'}))
	$('#menu').append($('<a />',{href:'pursuits-advanced.html',text:'Advanced',class:'btn btn-book'}))
	$('#menu').append($('<a />',{href:'pursuits-into-the-steam.html',text:'Into the Steam',class:'btn btn-book'}))
	$('#menu').append($('<a />',{href:'pursuits-under-quarantine.html',text:'Under Quarantine',class:'btn btn-book'}))
	$('#menu').append($('<a />',{href:'pursuits-into-the-bayou.html',text:'Into the Bayou',class:'btn btn-book'}))
	$('#menu').append($('<a />',{href:'pursuits-above-the-law.html',text:'Above the Law',class:'btn btn-book'}))
	$('#menu').append($('<a />',{href:'pursuits-from-nightmares.html',text:'From Nightmares',class:'btn btn-book'}))
	$('#menu').append($('<a />',{href:'pursuits-beyond-fate.html',text:'Beyond Fate',class:'btn btn-book'}))
	$('#menu').append($('<div />',{class:'row'}))
	$('#menu').append($('<div />',{id:'copyright',class:'copyright'}))
	var copyright = '<p>Web part, translation to russian<a href="http://www.github.com/freealchemist">FreeAlchemist</a></p><image src="img/FA_logo.svg" height="100px" href="http://www.github.com/freealchemist"><p>Contents copyright ©, <a href="http://www.wyrd-games.net/home">Wyrd Miniatures</a>, LLC.</p>'
	$('#copyright').html(copyright)

/*activeBtn*/
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


													console.log(pursuit)
	var quantity = pursuit.length;

/*front*/
	for (var i = 0; i < quantity; i++) {
													// console.log('PURSUIT #'+i+': ')
													// console.log(pursuit[arr[i]])
													// console.log(pursuit[i])

		// var cardid = arr[i];
		var cardid = pursuit[i];
		if(getInfo('glossary',cardid,'name')){
			var pursuitname = getInfo('glossary',cardid,'name')
		}
		else{
			var pursuitname = cardid
		}

			
		var cardfrontid = cardid+'-front';
		var cardbackid = cardid+'-back';
													// console.log(cardid)
		$('#page').append($('<div />',{class:'card card-front '+faction,id:cardfrontid}))
		$('#'+cardfrontid).append($('<div />',{class:'front1',id:cardfrontid+'-bg1'}))
		$('#'+cardfrontid).append($('<div />',{class:'front2',id:cardfrontid+'-bg2','click':function(){showElem(this.id,'t')}}))

													console.log('NAME '+pursuitname)

		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'pursuit-title',text:pursuitname}))

		if(getInfo('talents',cardid,'gear')){
			var gear = getInfo('talents',cardid,'gear')
		}
		else{
			var gear = cardid+'-talent-gear'
		}
													console.log(gear)

		if(gear){
			$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-name',text:'вещи:'}))
			$('#'+cardfrontid+'-bg1').append($('<div />',{class:'gear-text',text:gear}))

			$('#'+cardid+'-talentstable-gear').append($('<div />',{class:'gear-name',text:'вещи:'}))
			$('#'+cardid+'-talentstable-gear').append($('<div />',{class:'gear-text',text:gear}))
		}

		if(getInfo('talents',cardid,'name','main')){
			var name = getInfo('talents',cardid,'name','main')
		}
		else{
			var name = cardid+'-talent-name'
		}

		if(getInfo('talents',cardid,'text','main')){
			var talent = getInfo('talents',cardid,'text','main')
		}
		else{
			var talent = cardid+'-talent-text'
		}

		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'talent-name',text:name}))
		$('#'+cardfrontid+'-bg1').append($('<div />',{class:'talent-text',text:talent}))

		var stepid = cardfrontid+'-bg2'+'-step'

		$('#'+cardfrontid+'-bg2').append($('<ol />',{class:'step-ol',id:stepid,start:'0'}))
		$('#'+stepid).append($('<b />',{text:'Развитие талантов'}))

		if(talents[cardid].step){
			var steparr = [];
			for (var c in talents[cardid].step) {
				steparr.push(c);
			}
			var stepquantity = steparr.length;
			for (var s = 0; s <= stepquantity-1; s++) {
				$('#'+stepid).append($('<li />',{text:talents[cardid].step[s]}))
			};
		}

		$('#'+stepid).clone().appendTo($('#'+cardid+'-talentstable-options'))

		$('#menu').append($('<input />',{type:'button',class:'btn btn-pursuit',id:cardid+'-btn-pursuit',value:pursuitname,'click':function(){showElem(this.id,'c')}}))
	}

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
		var cardid = pursuit[i];

		if(getInfo('glossary',cardid,'name')){
			var pursuitname = getInfo('glossary',cardid,'name')
		}
		else{
			var pursuitname = cardid
		}

		if(getInfo('glossary',cardid,'text')){
			var pursuittext = getInfo('glossary',cardid,'text')
		}
		else{
			var pursuittext = cardid+'-text'
		}

		var cardbackid = cardid+'-back';
		$('#page').append($('<div />',{class:'card card-back '+faction,id:cardbackid}))
		$('#'+cardbackid).append($('<div />',{class:'back '+cardid,id:cardbackid+'-bg'}))
		$('#'+cardbackid+'-bg').clone().appendTo($('#'+cardid+'-talentstable-img'))
		$('#'+cardid+'-talentstable-summary').append(pursuittext)
													// console.log(pursuitname+' | '+pursuitname.length)
		if(pursuitname.length >= 17){$('#'+cardbackid+'-bg').append($('<div />',{class:'title-back',text:pursuitname,style:'font-size:10pt;'}))}
		else{$('#'+cardbackid+'-bg').append($('<div />',{class:'title-back',text:pursuitname}))}
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
			$('.'+value+'-text').css('font-size','7pt').css('color','red')
		}
		var hname = parseInt($('.'+value+'-name').css('height'))
		var htext = parseInt($('.'+value+'-text').css('height'))
		if(hname <= himage){
			$('.'+value+'-name').css('color','black')
		}
		if(htext <= hplace){
			$('.'+value+'-text').css('color','black')
		}