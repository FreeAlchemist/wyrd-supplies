
window.addEventListener("keyup",function(){
	key =event.keyCode;
if(key==13) {
	createspell()
}
});

magia = $("select[name='magia'] > option:checked").val()
genus = $("select[name='genus'] > option:checked").val()
elemental = $("select[name='elemental'] > option:checked").val()
alteration = $("select[name='alteration'] > option:checked").val()
augmentation = $("select[name='augmentation'] > option:checked").val()

var typearr =['magia','genus','elemental','alteration','augmentation']

function createspell(){
	checkVal()

	
	for(i=0;i<typearr.length;i++){
		checkVal()

		$('#'+typearr[i]+'-info').html($('<div />',{class:'cardpart cardpart-name',id:typearr[i]+'-info-name'}))
		$('#'+typearr[i]+'-info').append($('<div />',{class:'cardpart cardpart-story',id:typearr[i]+'-info-story'}))
		$('#'+typearr[i]+'-info').append($('<div />',{class:'cardpart cardpart-aspect',id:typearr[i]+'-info-aspect'}))
		$('#'+typearr[i]+'-info').append($('<div />',{class:'cardpart cardpart-ap',id:typearr[i]+'-info-ap'}))
		$('#'+typearr[i]+'-info').append($('<div />',{class:'cardpart cardpart-tn',id:typearr[i]+'-info-tn'}))
		$('#'+typearr[i]+'-info').append($('<div />',{class:'cardpart cardpart-resist',id:typearr[i]+'-info-resist'}))
		$('#'+typearr[i]+'-info').append($('<div />',{class:'cardpart cardpart-range',id:typearr[i]+'-info-range'}))
		$('#'+typearr[i]+'-info').append($('<div />',{class:'cardpart cardpart-text',id:typearr[i]+'-info-text'}))
		$('#'+typearr[i]+'-info').append($('<div />',{class:'cardpart cardpart-requirement',id:typearr[i]+'-info-requirement'}))

		if(typearr[i] == 'magia'){
			checkVal()
			var count = 1
			$('#magia-count-div').hide()
			if(spellmagia[magia].count){
				var count = spellmagia[magia].count
				$('#magia-count-div').show()
			}
			var name = spellmagia[magia].name
			// console.log(name)
			var story = spellmagia[magia].story
			var aspect = spellmagia[magia].aspect
			var ap = spellmagia[magia].AP
			var tn = spellmagia[magia].TN
			var tn = spellmagia[magia].TN+spellmagia[magia].tnsuit
			var resist = spellmagia[magia].resist
			var range = spellmagia[magia].range
			var text = spellmagia[magia].text
			var requirement = spellmagia[magia].requirement
		}
		else if(typearr[i] == 'genus'){
			checkVal()
			var count = 1
			$('#genus-count-div').hide()
			if(spellgenus[genus].count){
				var count = spellgenus[genus].count
				$('#genus-count-div').show()
			}
			var name = spellgenus[genus].name
			var story = spellgenus[genus].story
			var aspect = spellgenus[genus].aspect
			var ap = spellgenus[genus].AP
			var tn = spellgenus[genus].TN
			var tn = spellgenus[genus].TN+spellgenus[genus].tnsuit
			var resist = spellgenus[genus].resist
			var range = spellgenus[genus].range
			var text = spellgenus[genus].text
			var requirement = spellgenus[genus].requirement
		}
		else if(typearr[i] == 'elemental'){
			checkVal()
			var count = 1
			$('#elemental-count-div').hide()
			if(spellelemental[elemental].count){
				var count = spellelemental[elemental].count
				$('#elemental-count-div').show()
			}
			var name = spellelemental[elemental].name
			var story = spellelemental[elemental].story
			var aspect = spellelemental[elemental].aspect
			var ap = spellelemental[elemental].AP
			var tn = spellelemental[elemental].TN
			var tn = spellelemental[elemental].TN+spellelemental[elemental].tnsuit
			var resist = spellelemental[elemental].resist
			var range = spellelemental[elemental].range
			var text = spellelemental[elemental].text
			var requirement = spellelemental[elemental].requirement
		}
		else if(typearr[i] == 'alteration'){
			checkVal()
			var count = 1
			$('#alteration-count-div').hide()
			if(spellalteration[alteration].count){
				var count = spellalteration[alteration].count
				$('#alteration-count-div').show()
			}
			var name = spellalteration[alteration].name
			var story = spellalteration[alteration].story
			var aspect = spellalteration[alteration].aspect
			var ap = spellalteration[alteration].AP
			var tn = spellalteration[alteration].TN
			var tn = spellalteration[alteration].TN+spellalteration[alteration].tnsuit
			var resist = spellalteration[alteration].resist
			var range = spellalteration[alteration].range
			var text = spellalteration[alteration].text
			var requirement = spellalteration[alteration].requirement
		}
		else if(typearr[i] == 'augmentation'){
			checkVal()
			var count = 1
			$('#augmentation-count-div').hide()
			if(spellaugmentation[augmentation].count){
				var count = spellaugmentation[augmentation].count
				$('#augmentation-count-div').show()
			}
			var name = spellaugmentation[augmentation].name
			var story = spellaugmentation[augmentation].story
			var aspect = spellaugmentation[augmentation].aspect
			var ap = spellaugmentation[augmentation].AP
			var tn = spellaugmentation[augmentation].TN
			var tn = spellaugmentation[augmentation].TN+spellaugmentation[augmentation].tnsuit
			var resist = spellaugmentation[augmentation].resist
			var range = spellaugmentation[augmentation].range
			var text = spellaugmentation[augmentation].text
			var requirement = spellaugmentation[augmentation].requirement
		}

		writeVal(typearr[i],name,story,aspect,ap,tn,resist,range,text,requirement,count)
	}

	$('#total-info').html($('<div />',{class:'cardpart cardpart-name',id:'total-info-name'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-story',id:'total-info-story'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-aspect',id:'total-info-aspect'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-ap',id:'total-info-ap'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-tn',id:'total-info-tn'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-resist',id:'total-info-resist'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-range',id:'total-info-range'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-damage',id:'total-info-damage'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-duration',id:'total-info-duration'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-text',id:'total-info-text'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-requirement',id:'total-info-requirement'}))

//NAME
	var name = ''
	if(spellmagia[magia].name){name +=spellmagia[magia].name}
	if(spellgenus[genus].name){name +='<br>Genus: '+spellgenus[genus].name+' x'+genuscount}
	if(spellelemental[elemental].name){name +='<br>Elemental: '+spellelemental[elemental].name+' x'+elementalcount}
	if(spellalteration[alteration].name){name +='<br>Alteration: '+spellalteration[alteration].name+' x'+alterationcount}
	if(spellaugmentation[augmentation].name){name +='<br>Augmentation: '+spellaugmentation[augmentation].name+' x'+augmentationcount}
//STORY
	var story = ''
		if(spellmagia[magia].story){
			story += spellmagia[magia].story
		}
		if(spellgenus[genus].story){
			story += '<br>'+spellgenus[genus].story
		}
		if(spellelemental[elemental].story){
			story += '<br>'+spellelemental[elemental].story
		}
		if(spellalteration[alteration].story){
			story += '<br>'+spellalteration[alteration].story
		}
		if(spellaugmentation[augmentation].story){
			story += '<br>'+spellaugmentation[augmentation].story
		}
		console.log('story '+story)
//ASPECT
	var aspect = spellmagia[magia].aspect
//AP
	var ap = 0
	if(spellmagia[magia].AP){
		ap += parseInt(spellmagia[magia].AP)
	}
	if(spellgenus[genus].AP){
		ap += parseInt(spellgenus[genus].AP)
	}
	if(spellelemental[elemental].AP){
		ap += parseInt(spellelemental[elemental].AP)
	}
	if(spellalteration[alteration].AP){
		ap += parseInt(spellalteration[alteration].AP)
	}
	if(spellaugmentation[augmentation].AP){
		ap += parseInt(spellaugmentation[augmentation].AP)*parseInt(augmentationcount)
	}
	if(ap < 0){ap = 0}
	console.log(parseInt(spellmagia[magia].AP)*parseInt(magiacount)+' + '+parseInt(spellgenus[genus].AP)*parseInt(genuscount)+' + '+parseInt(spellelemental[elemental].AP)*parseInt(elementalcount)+' + '+parseInt(spellalteration[alteration].AP)*parseInt(alterationcount)+' + '+parseInt(spellaugmentation[augmentation].AP)*parseInt(augmentationcount))
	console.log('total AP: '+ap)
//TN
	var tn = 0
	if(spellmagia[magia].TN){tn += parseInt(spellmagia[magia].TN)*parseInt(magiacount)}
	if(spellgenus[genus].TN){tn += parseInt(spellgenus[genus].TN)*parseInt(genuscount)}
	if(spellelemental[elemental].TN){tn += parseInt(spellelemental[elemental].TN)*parseInt(elementalcount)}
	if(spellalteration[alteration].TN){tn += parseInt(spellalteration[alteration].TN)*parseInt(alterationcount)}
	if(spellaugmentation[augmentation].TN){tn += parseInt(spellaugmentation[augmentation].TN)*parseInt(augmentationcount)}

	console.log('total TN: '+tn)

	var tnsuit = ''
	if(spellmagia[magia].tnsuit){tnsuit += spellmagia[magia].tnsuit}
	if(spellgenus[genus].tnsuit){tnsuit += spellgenus[genus].tnsuit}
	if(spellelemental[elemental].tnsuit){tnsuit += spellelemental[elemental].tnsuit}
	if(spellalteration[alteration].tnsuit){tnsuit += spellalteration[alteration].tnsuit}
	if(spellaugmentation[augmentation].tnsuit){tnsuit += spellaugmentation[augmentation].tnsuit}

	console.log(spellmagia[magia].tnsuit+' + '+spellgenus[genus].tnsuit+' + '+spellelemental[elemental].tnsuit+' + '+spellalteration[alteration].tnsuit+' + '+spellaugmentation[augmentation].tnsuit)
	console.log('total tnsuit: '+tnsuit)

	if(spellalteration[alteration].portability){
		console.log('portability'+$("input[name=portability]:checked").val())
		var portability = $("input[name=portability]:checked").val()
		// $("input[name=portability]").click(function(){
		// 	var portability = $("input[name=portability]:checked").val()
		// 	if(portability){tn+=parseInt(portability)}
		// 	$('#total-info-tn').html('<div class="info-title">ЦН (TN)</div>'+tn+tnsuit)
		// })
	}
	if(portability){tn+=parseInt(portability)}
	if(spellalteration[alteration].commonality){
		console.log('commonality '+$("input[name=commonality]:checked").val())
		var commonality = $("input[name=commonality]:checked").val()
		// $("input[name=commonality]").click(function(){
		// 	var commonality = $("input[name=commonality]:checked").val()
		// 	if(commonality){tn+=parseInt(commonality)}
		// 	$('#total-info-tn').html('<div class="info-title">ЦН (TN)</div>'+tn+tnsuit)
		// })
	}
	if(commonality){tn+=parseInt(commonality)}
//RESIST
	var resist = spellmagia[magia].resist
	if(spellalteration[alteration].resist == 'switch'){
		if(resist == 'DF'){resist = 'WP'}
		else if(resist == 'WP'){resist = 'DF'}
	}

	var extraresist = 0
	if(spellgenus[genus].resist){extraresist += parseInt(spellgenus[genus].resist)*parseInt(genuscount)}
	if(spellelemental[elemental].resist){extraresist += parseInt(spellelemental[elemental].resist)*parseInt(elementalcount)}
	if(spellalteration[alteration].resist){extraresist += parseInt(spellalteration[alteration].resist)*parseInt(alterationcount)}
	if(spellaugmentation[augmentation].resist){extraresist += parseInt(spellaugmentation[augmentation].resist)*parseInt(augmentationcount)}
	if(extraresist != 0){resist = resist+extraresist}
	if(spellmagia[magia].resist == '-'){resist = '-'}

//RANGE
	var rangetype = ''
	if(spellmagia[magia].rangetype){rangetype += spellmagia[magia].rangetype}
	if(spellgenus[genus].rangetype){rangetype += '<br>'+spellgenus[genus].rangetype}
	if(spellelemental[elemental].rangetype){rangetype += '<br>'+spellelemental[elemental].rangetype}
	if(spellalteration[alteration].rangetype){rangetype += '<br>'+spellalteration[alteration].rangetype}
	if(spellaugmentation[augmentation].rangetype){rangetype += '<br>'+spellaugmentation[augmentation].rangetype}
	console.log('rangetype '+rangetype)

	var range = 0
	if(spellmagia[magia].range){range += parseInt(spellmagia[magia].range)}
	if(spellgenus[genus].range){range += parseInt(spellgenus[genus].range)}
	if(spellelemental[elemental].range){range += parseInt(spellelemental[elemental].range)}
	if(spellalteration[alteration].range){range += parseInt(spellalteration[alteration].range)}
	if(spellaugmentation[augmentation].range){range += parseInt(spellaugmentation[augmentation].range)*parseInt(augmentationcount)}
	if(spellaugmentation[augmentation].rangestep){
		var rngarr = []
		for(p in spellaugmentation[augmentation].rangestep){
			rngarr.push(p)
		}
		for (var i = 0; i < rngarr.length; i++) {
			if(parseInt(range) == parseInt(spellaugmentation[augmentation].rangestep[rngarr[i]])){
				if(spellaugmentation[augmentation].rangesteptype == 'increase'){
					var altrange = parseInt(spellaugmentation[augmentation].rangestep[rngarr[i+parseInt(augmentationcount)]])
					$('#augmentation-count').attr('max',(rngarr.length-i-1))
				}
				else if(spellaugmentation[augmentation].rangesteptype == 'decrease'){
					var altrange = parseInt(spellaugmentation[augmentation].rangestep[rngarr[i-parseInt(augmentationcount)]])
					$('#augmentation-count').attr('max',((rngarr.length)-(rngarr.length-i)))
				}
				else{
					var altrange = 9999
				}
				$('#augmentation-count-max').html('Макс.'+$('#augmentation-count').attr('max'))
			}
		};
		if(altrange){range = altrange}
	}
	if(rangetype){
		if(rangetype == 'melee'){
			if(range > 3){range = 3}
		}
		if(rangetype == 'projectile'){
			if(range < 5){range = 5}
		}
		if(range < 1){range = 1	}
		if(range == 999){range = 'Anywhere in Sight'}
		range = rangetype+': '+range
	}
	if(range == 999){range = 'Anywhere in Sight'}
	console.log('total range: '+range)
//DAMAGE	
	var damage = ''
	console.log(parseInt(alterationcount))
	if(spellmagia[magia].damagesmall && spellaugmentation[augmentation].damagestep && spellaugmentation[augmentation].damagesteptype){
		if(spellaugmentation[augmentation].damagesteptype == 'increase'){
			var damagesmall = parseInt(spellmagia[magia].damagesmall)+parseInt(spellaugmentation[augmentation].damagestep[augmentationcount][0])
			var damagemoderate = parseInt(spellmagia[magia].damagemoderate)+parseInt(spellaugmentation[augmentation].damagestep[augmentationcount][1])
			var damagesevere = parseInt(spellmagia[magia].damagesevere)+parseInt(spellaugmentation[augmentation].damagestep[augmentationcount][2])

			if(spellalteration[alteration].blaststep){
				damage = 
				damagesmall
				+spellalteration[alteration].blaststep[alterationcount][0]
				+' / '+
				damagemoderate
				+spellalteration[alteration].blaststep[alterationcount][1]
				+' / '+
				damagesevere
				+spellalteration[alteration].blaststep[alterationcount][2]
			}
			else{damage = damagesmall+' / '+damagemoderate+' / '+damagesevere}
		}
		else if(spellaugmentation[augmentation].damagesteptype == 'decrease'){
			var damagesmall = parseInt(spellmagia[magia].damagesmall)-parseInt(spellaugmentation[augmentation].damagestep[augmentationcount][0])
			var damagemoderate = parseInt(spellmagia[magia].damagemoderate)-parseInt(spellaugmentation[augmentation].damagestep[augmentationcount][1])
			var damagesevere = parseInt(spellmagia[magia].damagesevere)-parseInt(spellaugmentation[augmentation].damagestep[augmentationcount][2])

			if(damagesmall < 0){damagesmall = 0}
			if(damagemoderate < 0){damagemoderate = 0}
			if(damagesevere < 0){damagesevere = 0}

			if(spellalteration[alteration].blaststep){
				damage = 
				damagesmall+spellalteration[alteration].blaststep[alterationcount][0]
				+' / '+
				damagemoderate+spellalteration[alteration].blaststep[alterationcount][1]
				+' / '+
				damagesevere+spellalteration[alteration].blaststep[alterationcount][2]
			}
			else{damage = damagesmall+' / '+damagemoderate+' / '+damagesevere}
		}
		else{damage = parseInt(spellmagia[magia].damagesmall)+' / '+parseInt(spellmagia[magia].damagemoderate)+' / '+parseInt(spellmagia[magia].damagesevere)}
	}
	else if(spellmagia[magia].damagesmall){
		if(spellalteration[alteration].blaststep){
			damage = 
			parseInt(spellmagia[magia].damagesmall)+spellalteration[alteration].blaststep[alterationcount][0]
			+' / '+
			parseInt(spellmagia[magia].damagemoderate)+spellalteration[alteration].blaststep[alterationcount][1]
			+' / '+
			parseInt(spellmagia[magia].damagesevere)+spellalteration[alteration].blaststep[alterationcount][2]
		}
		else{damage = parseInt(spellmagia[magia].damagesmall)+' / '+parseInt(spellmagia[magia].damagemoderate)+' / '+parseInt(spellmagia[magia].damagesevere)}
	}
//DURATION
	var duration = ''
	if(spellmagia[magia].duration){duration = spellmagia[magia].duration}
	if(spellaugmentation[augmentation].durationstep){
		var durarr = []
		for(p in spellaugmentation[augmentation].durationstep){
			durarr.push(p)
		}
		for (var i = 0; i < durarr.length; i++) {
			if(spellmagia[magia].duration == spellaugmentation[augmentation].durationstep[durarr[i]]){
				duration = spellaugmentation[augmentation].durationstep[durarr[i+parseInt(augmentationcount)]]
				$('#augmentation-count').attr('max',(durarr.length-i-1))
				$('#augmentation-count-max').html('Макс.'+$('#augmentation-count').attr('max'))
			}
		};
	}
	console.log('duration '+duration)
//TEXT	
	var text = ''
	if(spellmagia[magia].text){text += spellmagia[magia].text}
	if(spellgenus[genus].text){
		if(spellgenus[genus].name){text += '<br>'+'<b>'+spellgenus[genus].name+': </b>'+spellgenus[genus].text}
		else{text += '<br>'+spellgenus[genus].text}
	}
	if(spellelemental[elemental].text){
		if(spellelemental[elemental].name){text += '<br>'+'<b>'+spellelemental[elemental].name+': </b>'+spellelemental[elemental].text		}
		else{text += '<br>'+spellelemental[elemental].text}
	}
	if(spellalteration[alteration].text){
		if(spellalteration[alteration].name){text += '<br>'+'<b>'+spellalteration[alteration].name+': </b>'+spellalteration[alteration].text}
		else{text += '<br>'+spellalteration[alteration].text}
	}
	if(spellaugmentation[augmentation].text){
		if(spellaugmentation[augmentation].name){text += '<br>'+'<b>'+spellaugmentation[augmentation].name+': </b>'+spellaugmentation[augmentation].text}
		else{text += '<br>'+spellaugmentation[augmentation].text}
	}

//REQUIREMENT
	var requirement = ''
	if(spellmagia[magia].requirement){requirement += spellmagia[magia].requirement}
	if(spellgenus[genus].requirement){requirement += '<br>'+spellgenus[genus].requirement}
	if(spellelemental[elemental].requirement){requirement += '<br>'+spellelemental[elemental].requirement}
	if(spellalteration[alteration].requirement){requirement += '<br>'+spellalteration[alteration].requirement}
	if(spellaugmentation[augmentation].requirement){requirement += '<br>'+spellaugmentation[augmentation].requirement}
	console.log('requirement '+requirement)

	$('#total-info-name').html(name)
	if(story){$('#total-info-story').html(story)}
	$('#total-info-aspect').html('<div class="info-title">АСПЕКТ</div>'+aspect)
	$('#total-info-ap').html('<div class="info-title">ОД (AP)</div>'+ap)
	$('#total-info-tn').html('<div class="info-title">ЦН (TN)</div>'+tn+tnsuit)
	$('#total-info-resist').html('<div class="info-title">СОПРОТИВЛЕНИЕ</div>'+resist)
	if(range){$('#total-info-range').html('<div class="info-title">ДАЛЬНОСТЬ</div>'+range)}
	if(damage){$('#total-info-damage').html('<div class="info-title">УРОН</div>'+damage)}
	if(duration){$('#total-info-duration').html('<div class="info-title">ДЛИТЕЛЬНОСТЬ</div>'+duration)}
	$('#total-info-text').html('<b>Эффект</b>: '+text)
	if(requirement){$('#total-info-requirement').html('<b>Требования:</b><br>'+requirement)}
}

function writeVal(type,name,story,aspect,ap,tn,resist,range,text,requirement,count){
	$('#'+type+'-info-name').html(name)
	$('#'+type+'-info-story').html(story)
	$('#'+type+'-info-aspect').html('<div class="info-title">ASPECT</div>'+aspect)
	$('#'+type+'-info-ap').html('<div class="info-title">AP</div>'+ap)
	$('#'+type+'-info-tn').html('<div class="info-title">TN</div>'+tn)
	$('#'+type+'-info-resist').html('<div class="info-title">RESIST</div>'+resist)
	$('#'+type+'-info-range').html('<div class="info-title">RANGE</div>'+range)
	$('#'+type+'-info-text').html('<b>Effect</b>: '+text)
	$('#'+type+'-info-requirement').html('<b>Requirements:</b><br>'+requirement)
	if(count){
		$('#'+type+'-count').attr('max',count)
		// $('#count-div').show()
	}
	$('#'+type+'-count').change(function(){createspell()})
	$('#'+type+'-count-min').html($('#'+type+'-count').attr('min'))
	$('#'+type+'-count-max').html('Макс.'+$('#'+type+'-count').attr('max'))
	$('#'+type+'-count-val').html(' Количество:'+$('#'+type+'-count').val())
}

function checkVal(){
	magia = $("select[name='magia'] > option:checked").val()
	magiacount = $('#magia-count').val()
	genus = $("select[name='genus'] > option:checked").val()
	genuscount = $('#genus-count').val()
	elemental = $("select[name='elemental'] > option:checked").val()
	elementalcount = $('#elemental-count').val()
	alteration = $("select[name='alteration'] > option:checked").val()
	alterationcount = $('#alteration-count').val()
	augmentation = $("select[name='augmentation'] > option:checked").val()
	augmentationcount = $('#augmentation-count').val()
}

$("#magia").change(function(){createspell()})
$("#genus").change(function(){createspell()})
$("#elemental").change(function(){createspell()})
$("#alteration").change(function(){createspell()})
$("#augmentation").change(function(){createspell()})

$("#log").click(function(){
	$(".log").toggle()
})


var spellmagia = {
		1 : {
				name:'Волшебство: Элементальный хлыст',
				story:'Заклинатель окружает цель опасной элементальной энергией.',
				text:'Цель получает 1/2/3 урона.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'1',
				TN:'5',
				tnsuit:'t',
				resist:'WP',
				range:'5',
				damagesmall:'1',
				damagemoderate:'2',
				damagesevere:'3',
				damagesmalltext:'',
				damagemoderatetext:'',
				damageseveretext:'',
				requirement:'Эта магия должна содержать как минимум одно элементальное иммуто.',
			},

		2 : {
				name:'Волшебство: Элементальный снаряд',
				story:'Заклинатель направляет разряд магической энергии в цель, подобно встрелу.',
				text:'Цель получает 1/2/3 урона.',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'3',
				tnsuit:'t',
				resist:'Df',
				range:'5',
				rangetype:'projectile',
				damagesmall:'1',
				damagemoderate:'2',
				damagesevere:'3',
				requirement:'Эта магия должна содержать как минимум одно элементальное иммуто.',
			},
		3 : {
				name:'Волшебство: Элементальный удар',
				story:'Заклинатель ударяет противника атакой ближнего боя наполненной элементальной энергией.',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'3',
				tnsuit:'t',
				resist:'Df',
				range:'2',
				rangetype:'melee',
				damagesmall:'1',
				damagemoderate:'2',
				damagesevere:'3',
				text:'Цель получает 1/2/3 урона.',
				requirement:'Эта магия должна содержать как минимум одно элементальное иммуто.',
			},
		4 : {
				name:'Волшебство: Телекинетичесое перемещение',
				story:'Заклинатель передвигает цель силой разума, как если бы ее несли невидимые руки.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'1',
				TN:'7',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				text:'Заклинатель может перемещать целевой объект как если бы тот был поднят и носим персонажем с Силой (Might) равной Стойкости (Tenacity) заклинателя, и Скоростью (Speed) равной Хитрости (Cunning) заклинателя. Если цель неподвижна, она не сопротивляется этому Действию и заклинателю нужно просто пройти проверку требуемой сложности (TN) для перемещения объекта. Если заклинатель пытается переместить объект несомый другим персонажем, то персонаж держащий объект может сопротивляться заклинанию. Заклинатель может решить поддерживать данное заклинание, перемещая объект от хода к ходу. В таком случае заклинание не требуется исполнять снова (оно уже успешно исполнено). Заклинатель не может исполнять другие заклинания при поддержании телекинеза, и перемещение объекта требует (1) ОД Действие (AP Action), как если бы заклинание исполнялось снова. Заклинатель может выполнять атаки удерживаемым таким образом объектом, выполняя стандартную атаку ближнего боя используя навык подходящий к предмету (например Ближний бой (Melee) для меча), но заменяя соответствующий аспект на Интеллект.',
			},
		5 : {
				name:'Волшебство: Телекинетический толчок',
				story:'Заклинатель высвобождает взрыв или волну энергии в цель, направляя ее своим разумом',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'7',
				tnsuit:'m',
				resist:'Df',
				range:'5',
				text:'Цель толкается на расстояние в ярдах равное Стойкости заклинателя, по прямой от заклинателя.',
			},
		6 : {
				name:'Волшебство: Сон',
				story:'Заклинатель заставляет цель потерять сознание.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'2',
				TN:'10',
				tnsuit:'m',
				resist:'-',
				range:'3',
				text:'Если цель Живая, она должна пройти проверку Бессознательности (Unconsciousness Challenge) сложностью (TN) 10. Сложность (TN) проверки увеличивается на 2 за каждый Margin of Success полученный заклинателем. Цель не сопротивляется этому заклинанию, она должна пройти проверку Бессознательности, если заклинание успешно. Это задает фиксированный набор сложности для многих персонажей Мастера Судьбы (поскольку значение проверки для них не случайно).',
			},
		7 : {
				name:'Волшебство: Выкручивание',
				story:'Заклинатель воздействует на цель телекинетической силой, выкручивая внутренние органы.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'2',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'3',
				text:'Если цель Живая, она должна пройти проверку Выносливости(Toughness) + Стойкости(Resilience) сложностью(TN) 10. Сложность (TN) проверки увеличивается на 2 за каждый Margin of Success полученный заклинателем. Цель не сопротивляется этому заклинанию, она должна пройти проверку, если заклинание успешно. Это задает фиксированный набор сложности для многих персонажей Мастера Судьбы (поскольку значение проверки для них не случайно). Если цель проваливает проверку она получает Средний Критический Эффект, с обычными для критических эффектов модификаторами урона и другими факторами.',
			},
		8 : {
				name:'Зачарование: Анимировать конструкта',
				story:'Заклинатель наполняет подготовленное тело конструкта жизнью, так чтобы тот подчинялся его приказам.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'1',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'1',
				rangetype:'melee',
				duration:'1 Час',
				text:'Целевой неподвижный конструктоживает под контролем заклинателя на 1 час. По окончании заклинания, конструкт возвращается в неподвижную форму, и может быть оживлен позже. Заклинатель может контролировать только одного конструкта за раз.',
			},
		9 : {
				name:'Зачарование: Анимировать конечность',
				story:'Заклинатель пробуждает искуственную конечность к жизни под контролем персонажа к которому она присоединена.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'1',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'Целевая конечность оживает на число недель равное Обаянию (Charm) + Зачарованию (Enchanting) заклинателя (или меньше если пожелает заклинатель). Конечность под контролем персонажа к которому присоединена, это не обязательно заклинатель. Конечность должна была быть создана чтобы действовать как конечность, хотя она не обязана иметь форму или быть создана в форме природной конечности. Пневматические конечности описаны на стр. 178. Если персонаж владеет не-Пневматической заменой (такой как сшитая (stitched together) рука из плоти мертвецов) тогда TN требует C вместо t.',
			},
		10 : {
				name:'Зачарование: Лечение',
				story:'Заклинатель направляет чистую магическую энергию в цель, возвращая ее в форму.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'1',
				TN:'7',
				tnsuit:'r',
				resist:'Wp',
				range:'1',
				rangetype:'melee',
				text:'Цель лечит 1/2/3 урона, если она Живая. Цель может решить не сопротивляться, делая заклинание простой проверкой. Каждый дополнительный раз когда персонаж является целью этого заклинания в течении часа, Сложность (TN) повышается на 3 либо требует дополнительно R (выбирает заклинатель). Если заклинание провалилось при лечении цели, цель не может получать магическое лечение от этой Магии до следующего восхода.',
			},
		11 : {
				name:'Зачарование: Залатать',
				story:'Заклинатель фокусирует магическую энергию на цели, исправляя самый сильный урон.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'012',
				TN:'10',
				tnsuit:'r',
				resist:'Wp',
				range:'1',
				rangetype:'melee',
				text:'Снимите одно состояние с цели, если она Живая. Цель может решить не сопротивляться, делая заклинание простой проверкой. Снимаемое состояние должно быть Критическим состоянием или состоянием помещенным на цель не магическим эффектом. Это 0 AP Действие если снимаемое состояние не Среднее или Тяжелое Критическое состояние. Если Среднее, то 1 AP Действие и если Тяжелое, то 2 AP Действие.',
			},
		12 : {
				name:'Зачарование: Физическое усиление',
				story:'Заклинатель усиливает физические возможности цели, укрепляя ее.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'1',
				TN:'7',
				tnsuit:'r',
				resist:'Df',
				range:'1',
				rangetype:'melee',
				duration:'1 Час',
				text:'Цель получает следующее состояние на 1 час: "Физически усиленный +1: Этот персонаж добавляет +1 к своим Физическим Аспектам, до максимума в 5."',
			},
		13 : {
				name:'Зачарование: Элементальное оружие',
				story:'Заклинатель наполняет оружие, или тело цели, элементальной силой.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'2',
				TN:'8',
				tnsuit:'t',
				resist:'Special',
				range:'1',
				rangetype:'melee',
				text:'Целевое оружие получает эффекты Элементального Иммуто, рассматривая оружие как если бы оно было Магией, которую изменял Иммуто. Эффект длится 1 минуту. Владелец оружия может сопротивляться, при этом, заклинание немедленно проваливается. Эта Магия может быть направлена на персонажа, позволяя его безоружным атакам получить преимущества Элементального Иммуто. Цель заклинания не получает урона от его эффекта (например не загорается от своих горящих кулаков).',
				requirement:'Эта магия должна обязательно выбрать одно элементальное иммуто',
			},
		14 : {
				name:'Зачарование: Перевоплощение',
				story:'Заклинатель принимает физическую форму животного.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'1',
				TN:'*',
				tnsuit:'t',
				resist:'Wp',
				duration:'1 Ход',
				text:'Тело заклинателя превращается в  Зверя на 1 Ход. Заклинатель получает характеристику Зверь пока перевоплощен, как и все физические качества Зверя (например ядовитые когти или способность летать). Сложность этой Магии 10t, плюс разница между наивысшим физическим аспектом Зверя и наименьшим физическим аспектом заклинателя. Например, колдун со Скоростью(Speed) -2 (его низший аспект) превращается в существо с Силой(Might) +4 (его наивысший аспект), сложность(TN) будет 16t (10, плюс разница в 6).',
			},
		15 : {
				name:'Некромантия: Зов',
				story:'Заклинатель влечет цель к себе.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'2',
				TN:'10',
				tnsuit:'m',
				resist:'Wp',
				range:'10',
				text:'Целевой персонаж должен переместиться на свой аспект Движения по прямой к заклинателю и должен закончить движение насколько возможно близко к заклинателю.',
			},
		16 : {
				name:'Некромантия: Погребение',
				story:'Заклинатель заточает цель внутри "другого измерения" где время не течет.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'1',
				TN:'10',
				tnsuit:'c',
				resist:'Wp',
				range:'5',
				text:'Цель исчезает из реального мира. Она вернется в реальный мир в конце хода, появившись в безопасном месте в 1 ярде от заклинателя, не ощущая, что прошло время.',
			},
		17 : {
				name:'Некромантия: Трупная маска',
				story:'Заклинатель снимает лицо с трупа и какое-то время носит личину покойника.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'2',
				TN:'10',
				tnsuit:'m',
				resist:'-',
				range:'1',
				rangetype:'melee',
				duration:'Восход или Закат',
				text:'Персонаж снимает лицо с трупа и принимает внешность и голос, которыми тот обладал при жизни. Персонаж получает [+][+] ко всем попыткам выдать себя за личность. Этот эффект длится до следующего Восхода или Заката.',
			},
		18 : {
				name:'Некромантия: Допрос',
				story:'Заклинатель проверяет сознание цели, ища ответы на вопросы.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'1',
				TN:'12',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				text:'Заклинатель может задать один Да-Нет вопрос живой цели, плюс дополнительный вопрос за каждый Margin of Success. Персонаж получит правдивый ответ "Да", "Нет", или "Я не знаю" от цели, в меру возможностей цели.',
			},
		19 : {
				name:'Некромантия: Контроль разума',
				story:'Заклинатель отдает мгновенный приказ сознанию и телу цели, заставляя ее действовать против воли.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'1',
				TN:'10',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				text:'Цель выполняет 1 AP Действие которое могла бы выполнить под контролем данного персонажа. Это Действие не может заставить цель принести себя в жертву напрямую, но может заставить выполнять действия противные его природе (например атаковать друзей). Заклинатель не может воздействовать на себя Контролем разума.',
			},
		20 : {
				name:'Некромантия: Подъем немертвых',
				story:'Заклинатель оживляет труп для служения.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'1',
				TN:'5',
				tnsuit:'c',
				resist:'-',
				range:'5',
				duration:'10 Минут',
				text:'Целевой труп становится немертвым под контролем заклинателя на 10 минут. Немертвый претерпевает следующие изменения изначальной формы:<ul><li>Стойкость (Tenacity) немертвого повышается до 3 и все другие его Ментальные аспекты понижаются до -5.<li>Немертвый теряет характеристику Живой (если имел) и получает характеристику Немертвый.<li>Немертвый теряет любые ментальные навыки, которыми владел при жизни, а рейтинги физических навыков становятся в половину меньше (округляя вверх).</ul>Также, это заклинание может быть использовано для получения контроля над безконтрольным и не разумным немертвым созданием. Новому немертвому может потребоваться физическая починка (поскольку критический урон может сделать тело менее полезным). Иначе, труп поднят с половиной его Ран. По окончании заклинания, немертвый становится безконтрольным (и обычно агрессивным).',
			},
		21 : {
				name:'Некромантия: Поглощение трупа',
				story:'Заклинатель вызывает распад трупа, восстанавливая собственное тело в процессе.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'1',
				TN:'5',
				tnsuit:'c',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'Целевой труп обращается в прах. Заклинатель лечит 1/2/3 урона, плюс дополнительное число Ран равное Выносливости (Resilience) трупа  (если Выносливость положительная).',
			},
		22 : {
				name:'Некромантия: Ужасающая аура',
				story:'Заклинатель излучает мощную ауру вселяющую ужас в живых.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'1',
				TN:'12',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				duration:'1 Минута',
				text:'Цель получает сильную Ужасающую ауру на 1 минуту. Если Живой персонаж заканчивает движение в ауре 1 от цели, или атакует цель, он должен пройти Дуэль Ужаса (Horror Duel) сложностью TN 10. Смотрите стр. 219 для правил касательно Обреченных персонажей вызывающих дуэли Ужаса.',
			},
		23 : {
				name:'Изменение: Прорицание',
				story:'Заклинатель направляет свои чувства в нужное место, видя и слыша как если бы сам был там.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'2',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'100',
				duration:'1 Час',
				text:'Заклинатель входит в трнс, его тело обмякает. Находясь в трансе заклинатель может видеть и слышать как если бы находился в целевом местонахождении. Целевое местонахождение должно соответствовать всем обычным ограничениям на прицеливание заклинанием (дальность, Линия Видимости, прочее...). Эффект заклинания длится 1 час, либо когда заклинатель захочет прекратить. Заклинатель не может выполнять никаких действий находясь в трансе.',
			},
		24 : {
				name:'Изменение: Телепорт',
				story:'Заклинатель телепортирует цель заставляя ее исчезнуть и появиться в новом месте.',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'10',
				tnsuit:'t',
				resist:'Wp',
				range:'30',
				text:'Цель в пределах дальности заклинания телепортируется в безопасное место в пределах дальности заклинания. Цель может решить поддаться телепортации, тогда заклинатель должен выполнить простую проверку. Объекты также можно телепортировать, но если объектом кто-то владеет, он может сопротивляться заклинанию.',
			},
		25 : {
				name:'Изменение: Вызов (Conjuring)',
				story:'Заклинатель мгновенно призывает объект из ничего.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'2',
				TN:'10*',
				tnsuit:'t',
				resist:'-',
				range:'*',
				rangetype:'*',
				text:'Заклинатель призывает объект который предварительно был подготовлен к призыву. Объект появляется в его руках, и должен быть таким, который он может удержать двумя руками. Персонаж может подготовить объект к призыву легко коснувшись его или ментально сосредоточившись на нем. Персонаж может подготовить к призыву некоторое количество объектов, равное его аспекту Хитрости (Cunning), с минимумом в 1. Дальность этого заклинания равна аспекту Хитрости заклинателя в милях.',
			},
		26 : {
				name:'Изменение: Невидимость',
				story:'Заклинатель скрывает внешность цели, сливая ее с землей или делая полностью прозрачной.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'2',
				TN:'7',
				tnsuit:'m',
				resist:'-',
				range:'1',
				rangetype:'melee',
				duration:'1 Раунд',
				text:'Цель становится невидимой на 1 раунд. Невидимость немедленно спадает если персонаж взаимодействует с миром значительным образом,например атакуя, перемещая объект, или открывая двери. Любые попытки заметить персонажа получают [-][-][-] к проверке если ищущий полагается только на зрение пока персонаж невидим. Даже гвардеец услышавший шаги, например, поверит своим глазам когда повернувшись никого не увидит. Персонаж может быть замечен другими органами чувств, но не чувствами основанными на магическом "зрении" (способность видеть духов). Любые атаки против невидимого персонажа получают [-][-][-] к проверкам атаки(попадания). Если атака успешна, невидимость спадает.',
			},
		27 : {
				name:'Изменение: Дешевые трюки',
				story:'Заклинатель исполняет один из множества незначительных и откровенно магических эффектов.',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'5',
				tnsuit:'m',
				resist:'-',
				range:'*',
				rangetype:'*',
				text:'Заклинатель может выбрать один из следующих эффектов. Эти эффекты не могут быть использованы для прямого нанесения физического вреда цели, и любая ситуация приводящая к дуэли Сопротивления (Resist Duel) автоматически выигрывается Защитником, если он пожелает.<ul><li>Мгновенно почистить и починить одежду цели.<li>Создать короткий и простой звук, такой как слабый колокольчик или одно слово, слышимый всем в комнате.<li>Шепнуть короткое предложение в ухо кому-то кого вы можете видеть и которое услышит только эта личность.<li>Заставить легкий объект (как ключ или носовой платок) танцевать внутри маленькой площади (такой как поверхность кофейного столика).<li>Изменить вкус еды или напитка, например сделать воду на вкус как вишневый сок.<li>Зажечь свечу, фонарь, или иной объект предназначенный для зажигания, в пределах видимости.<li>Создать прозрачное и неподвижное изображение видимое всем в комнате.<li>Призвать маленькую сферу света, по яркости как фонарь, которая беспорядочно перемещается по комнате, или парит рядом с личностью.<li>Открыть незапертую дверь, окно, или ящик которые было бы легко открыть одной рукой и в пределах видимости.<li>Заставить приглушенную музыку звучать в комнате.</ul>',
			},
		28 : {
				name:'Изменение: Фантазм',
				story:'Заклинатель вызывает сложную иллюзию, которая может казаться настоящей.',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'5',
				tnsuit:'m',
				resist:'-',
				range:'*',
				rangetype:'*',
				duration:'1 Минута',
				text:'Заклинатель создает подвижную иллюзию, которая кажется настоящей наблюдателям, на 1 минуту.<br>При создании, заклинатель должен заявить все детали иллюзии, как то, что она будет делать, и как будет восприниматься.<br>Иллюзия не реагирует на внешнее воздействие unless controlled by Заклинатель (see below).<br>Фантазм может быть увиден, услышан, и учуян, но не потроган и не попробован на вкус. При прикосновении, сквози иллюзию можно безвредно пройти. Покуда существо наблюдающее Фантазм не имеет причин сомневаться в нем, он автоматом обманывает наблюдателя.<br>Например персонаж никогда не бывшый в конкретной комнате, не заметит иллюзию стены скрывающую дверь о которой он не знал. Если у персонажа есть причина разуверится в иллюзии, как например видение умершего друга сидящего на стуле, он должен преуспеть в проверке Силы Воли (Wp) сложностью 10 чтобы перестать верить в иллюзию. Иначе он верит, что иллюзия реальна. Если персонаж вступает в физический контакт с иллюзией, он автоматом перестает верить в нее. Заклинатель может контролировать действия иллюзии с помощью 1 AP Действия. Иллюзия будет действовать согласно желанию заклинателя, и может даже изменить свою форму, в рамках эффекта. Также, заклинатель может развеять созданную им иллюзию в любой момент без затрат Действия.',
			},
		}
var spellgenus = {
		0 : {},
		1 : {
				name:'Зверь',
				TN:'2',
				text:'Заклинание действует на цели с характеристикой Зверь (Beast).',
			},

		2 : {
				name:'Конструкт',
				TN:'2',
				text:'Заклинание действует на цели с характеристикой Конструкт (Construct).',
			},
		3 : {
				name:'Живой',
				TN:'1',
				text:'Заклинание действует на цели с характеристикой Живой (Living).',
			},
		4 : {
				name:'Местонахождение (Location)',
				TN:'3',
				text:'Заклинание действует на Местонахождение в пределах дальности. Любые цели в области которые обычно сопротивлялись бы заклинанию считаются автоматически прошедшими проверку сопротивления.',
			},
		5 : {
				name:'Неподвижный',
				TN:'3',
				text:'Заклинание действует на объекты, которые не могут перемещаться по собственному желанию (Inanimate).',
			},
		6 : {
				name:'Дух',
				TN:'2',
				text:'Заклинание действует на цели с характеристикой Дух (Spirits).',
			},
		7 : {
				name:'Немертвый',
				TN:'2',
				text:'Заклинание действует на цели с характеристикой Немертвый (Undead).',
			},
		}
var spellelemental = {
		0 : {},
		1 : {
				name:'Тьма (Darkness)',
				TN:'1',
				text:'Персонаж получающий урон от Магии также получает состояние "Ослеплен" на 1 ход.<br>Эта Магия может быть использована несколько раз, увеличивая длительность состояния "Ослеплен" на 1 хож каждый раз.',
			},

		2 : {
				name:'Разложение (Decay)',
				TN:'1',
				text:'Любой Немертвый персонаж получающий урон от Магии вместо этого вылечивает 1 рану.<br>Эта магия может быть использована несколько раз, увеличивая количество лечимого немертвым урона на 1 каждый раз.',
			},
		3 : {
				name:'Электричество (Electric)',
				TN:'3',
				text:'Урон наносимый этой магией игнорирует броню. Также, атака не определяет цель случайным образом если цель связана боем.',
			},
		4 : {
				name:'Огонь (Fire)',
				TN:'2',
				text:'Любой персонаж получающий урон от магии также получает состояние "Горение" +1.<br>Эта магия может быть использована несколько раз, увеличивая значение состояния "Горение" нп 1 каждый раз.',
			},
		5 : {
				name:'Лёд (Ice)',
				TN:'3',
				text:'Любой персонаж получающий урон от магии также получает состояние "Замедлен".<br>Эта магия может быть использована дважды, и во второй раз, цель получает состояние "Паралич" вместо "Замедлен".',
			},
		6 : {
				name:'Природа (Natural)',
				TN:'2',
				text:'Любой персонаж получающий урон от магии также получает состояние: "Укоренен: Этот персонаж не может заявлять Движение (Walk) или Нападение (Charge). Если этого персонажа толкают (pushed), снимите это состояние и персонаж получает 3 урона."',
			},
		7 : {
				name:'Яд (Poison)',
				TN:'1',
				text:'Любой персонаж получающий урон от магии также получает состояние "Яд" +1.<br>Эта магия может быть использована несколько раз, увеличивая значение состояния "Яд" на 1 каждый раз.',
			},
		8 : {
				name:'Дух (Spirit)',
				TN:'4',
				tnsuit:'',
				text:'Урон наносимый этой магией игнорирует броню и способность "Тяжело ранить" (Hard to Wound).',
			},
		9 : {
				name:'Ужас (Terror)',
				TN:'1',
				text:'Любой персонаж получающий урон от магии должен пройти дуэль Ужаса сложностью TN 6.<br>Эта магия может быть использована несколько раз, увеличивая сложность TN дуэли Ужаса на 1 каждый раз.',
			},
		}
var spellalteration = {
		0 : {},
		1 : {
				name:'Альтернативное сопротивление',
				TN:'2',
				resist:'switch',
				text:'Если этому действию сопротивляются по Силе Воли (Wp), вместо этого ему сопротивляются по Защите (Df). Если этому действию сопротивляются Защите (Df) , вместо этого ему сопротивляются по Силе Воли (Wp).',
			},
		2 : {
				name:'Взрыв',
				TN:'2',
				blaststep:{
					1:['','','b'],
					2:['','b','b'],
					3:['','b','bb'],
				},
				text:'Это Иммуто может быть взято до 3 раз. Проверка урона получает 0/0/b в первый раз, 0/b/b во второй раз, и 0/b/bb в третий раз. Эти эффекты добавляются к урону наносимому магией.',
				count:'3',
			},
		3 : {
				name:'Совмещенное заклинание',
				TN:'5',
				text:'This Spell combines the effects of two Spells. Choose a second Magia and add its effects to this Spell. The Spell must follow these requirements: •The second Magia must have a Base TN equal to or lower than the Base TN of the primary Magia. •The resist of the Magia must be the same. •The Primary Magia may only have Immuto that can be applied to both Magia. •The Magia must be different. 240 Chapter 8: Magic',
			},
		4 : {
				name:'Задержка [Special] (TN Variable)',
				TN:'0',
				text:'The Spell is delayed, waiting for a set time to be released. When an Action with the Delay Immuto is taken the character spends the AP to cast the Spell and declares all targets as normal, but no other Spell effects are resolved and no Duels are made. Instead, when the Delay condition is met, the Spell takes effect and is resolved as normal, with no additional AP spent.<br>The caster may choose to not have the Spell take effect at the prescribed time, allowing the Spell to instead dissipate. There are two situations that can be chosen to resolve a delayed Spell:<ul><li>Turns (TN +2): The character chooses a number of turns (up to 10) of Dramatic Time that the Spell will be delayed. After that many turns have passed, the Spell takes effect. <li>Defined (TN +5): The character may define a situation in which the Spell will be cast, such as when an enemy walks through a location, or a key word is spoken. Unless made permanent through Harness Soulstone, this effect will dissipate, without resolving the Spell, at sunrise or sunset (whichever comes first). The defined situation must be an external event, it cannot be something that the Caster has control over (such as, "when I say the magic word"). The defined condition must be an event that the character cannot absolutely predict. For instance, he could set a Spell to cast when a door is opened, however, it would simply dissipate if the character then opened the door himself, or had a knowledgeable friend do it.<ul>',
			},
		5 : {
				name:'Игнорировать заклинателя',
				TN:'2',
				text:'Заклинание не оказывает эффекта на заклинателя, он не получает урона, а только вторичные эффекты. Например, заклинатель имеет иммунитет к заклинанию Огненного Шара, но, если он подожжет дом, ему придется поостеречься.',
			},
		6 : {
				name:'Объект фокусировки (TN Varies)',
				TN:'0',
				range:'0',
				text:'Это заклинание требует фокусировку для исполнения, позволяя заклинателю снизить сложность заклинания используя Объект Фокусировки (Focus Object). <br>При изучении данного Иммуто, выбирается Объект Фокусировки, который не может быть изменен позже. Однако персонаж может выучить несколько версий данного Иммуто.<br>Любые попытки исполнить заклинание с Иммуто Объект Фокусировки без Объекта Фокусировки, немедленно проваливаются.<br>Объект должен быть продемонстрирован для исполнения заклинания. Персонаж которому, например, для заклинания требуется волшебная палочка должен держать палочку в руке видимую всем. В случае не компактных объектов, он прросто должен быть виден всем и заклинатель должен его касаться (хотя многие заклинатели добавят чуточку шаманства в качестве проявления профессионализма). <br>Снижение сложности основано на портативности и обычности объекта (объедините оба параметра для финальной настройки). <br>Портативность: <ul><li><input type="radio" name="portability" checked="checked" value="0">-0 TN: Легкий объект который поместиться в небольшой карман, например монета или горсть бобов. <li><input type="radio" name="portability" value="-1">-1 TN: Объект который можно удерживать одной рукой и переносить в чехле/кобуре, например волшебная палочка или пистолет. <li><input type="radio" name="portability" value="-2">-2 TN: Объект который можно удерживать двумя руками, например посох или ружье. <li><input type="radio" name="portability" value="-3">-3 TN: Объекты которые не переместить без значительных усилий, например выгравированный круг призыва или большой железный котел. </ul>Обычность: <ul><li><input type="radio" name="commonality" checked="checked" value="0">-0 TN: Абсолютно обычный предмет который легко купить менее чем за 10§, например моток веревки или пистолет. <li><input type="radio" name="commonality" value="-1">-1 TN: Объект с некоторыми требованиями но разумно доступный, например пистолет конкретного производителя/модели или волшебная палочка сделанная из дуба. <li><input type="radio" name="commonality" value="-2">-2 TN: Объект который должен быть специально создан заклинателем или для него (требуя как минимум 2 часа работы), но который может быть заменен, например особый посох, или кастомизированное оружие/пневматическая конечность.<li><input type="radio" name="commonality" value="-3">-3 TN: Незаменимые объекты. Если объект потерян или уничтожен, - персонаж неудачник!</ul>',
				portability:{
					1:'0',
					2:'-1',
					3:'-2',
					4:'-3',
				},
				commonality:{
					1:'0',
					2:'-1',
					3:'-2',
					4:'-3',
				},
			},
		}
var spellaugmentation = {
		0 : {},
		1 : {
				name:'Дополнительная масть',
				TN:'-2',
				tnsuit:'*',
				text:'Сложность (TN) заклинания получает дополнительную масть по выбору заклинателя.',
			},
		2 : {
				name:'Изменение дальности (Увеличение)',
				TN:'2',
				rangesteptype:'increase',
				rangestep:{
					1:'1',
					2:'2',
					3:'3',
					4:'5',
					5:'10',
					6:'15',
					7:'30',
					8:'50',
					9:'999Anywhere in Sight',
				},
				text:'<ul><li>melee 1<li>melee 2<li>melee 3<li>projectile 5<li>projectile 10<li>projectile 15<li>projectile 30<li>projectile 50<li>Anywhere in Sight</ul>Это Иммуто может быть добавлено в заклинание несколько раз. Каждый раз Дальность заклинания двигается вверх или вниз по тблице Шагов Дальности на один шаг. Движение вверх по таблице (снижение дальности) снижает сложность(TN) заклинания на -2. Движение вниз по таблице (увеличение дальности) повышает сложность(TN) заклинания на 2. Некоторые заклинания не имеют символа Ближний(y) или Дальний(z) в их дальности. В таком случае, движение по таблице идет как обычно, но они не получают Ближний или Дальний (y or z) к дальности. Ближняя(y) Магия не может повысить дальность выше чем y3, а Дпльняя(z) Магия не может понизить дальность ниже чем z5.',
				requirement:'0',
				count:'9',
			},
		3 : {
				name:'Изменение дальности (Уменьшение)',
				TN:'-2',
				rangesteptype:'decrease',
				rangestep:{
					1:'1',
					2:'2',
					3:'3',
					4:'5',
					5:'10',
					6:'15',
					7:'30',
					8:'50',
					9:'999Anywhere in Sight',
				},
				text:'<ul><li>melee 1<li>melee 2<li>melee 3<li>projectile 5<li>projectile 10<li>projectile 15<li>projectile 30<li>projectile 50<li>Anywhere in Sight</ul>Это Иммуто может быть добавлено в заклинание несколько раз. Каждый раз Дальность заклинания двигается вверх или вниз по тблице Шагов Дальности на один шаг. Движение вверх по таблице (снижение дальности) снижает сложность(TN) заклинания на -2. Движение вниз по таблице (увеличение дальности) повышает сложность(TN) заклинания на 2. Некоторые заклинания не имеют символа Ближний(y) или Дальний(z) в их дальности. В таком случае, движение по таблице идет как обычно, но они не получают Ближний или Дальний (y or z) к дальности. Ближняя(y) Магия не может повысить дальность выше чем y3, а Дпльняя(z) Магия не может понизить дальность ниже чем z5.',
				requirement:'0',
				count:'9',
			},
		4 : {
				name:'Увеличение ОД (AP)',
				AP:'1',
				TN:'-3',
				text:'Заклинание требует 1 дополнительное ОД (AP) для исполнения.<br>Это Иммуто может быть взято несколько раз, но персонаж не может расходовать ОД в несколько ходов для исполнения данного заклинания. Это Иммуто может быть добавлено к Заклинаниям только во время Dramatic Time.',
				count:'10',
			},
		5 : {
				name:'Увеличение урона',
				TN:'2',
				damagestep:{
					1:[0,0,1],
					2:[0,1,2],
					3:[1,2,3],
					4:[2,3,4],
					5:[3,4,5],
				},
				damagesteptype:'increase',
				text:'Это Иммуто может быть добавлено к заклинанию несколько раз. За каждый раз, увеличьте урон заклинания на один шаг Таблицы Урона.<ul><li>0/0/1<li>0/1/2<li>1/2/3<li>2/3/4<li>3/4/5</ul>',
				count:'5',
			},
		6 : {
				name:'Увеличение длительности',
				TN:'2',
				durationstep:{
					1:'1 Ход',
					2:'2 Хода',
					3:'3 Хода',
					4:'1 Минута',
					5:'10 Минут',
					6:'1 Час',
					7:'Восход или Закат',
					8:'1 День',
					9:'1 Неделя',
					10:'1 Месяц',
					11:'6 Месяцев',
					12:'1 Год',
				},
				text:'Это Иммуто может быть добавлено к заклинанию несколько раз. Each time it is taken move the Spell duration down the Duration Step table one step.<ul><li>1 Ход<li>2 Ход<li>3 Ход<li>1 Минута<li>10 Минут<li>1 Час<li>Восход или Закат<li>1 День<li>1 Неделя<li>1 Месяц<li>6 Месяцев<li>1 Год</ul>Any part of the Spell with a set duration (for instance the time a target remains buried by a Bury Spell) will be increased 1 step. Spells with a duration that sit between two steps (for instance, Animate Limb) are assumed to sit on the lower step of the two they are between. For instance, an Animate Limb Spell cast by a character with a Charm + Enchanting of 5 would be considered a "1 Month" Spell. By raising the TN by 2 he can increase the duration to 6 months.',
				count:'12',
			},
		7 : {
				name:'Увеличение Пульса',
				TN:'2',
				resist:'-1',
				range:'1',
				text:'Это Иммуто может быть добавлено к заклинанию несколько раз. Любая дальность Пульса в заклинании увеличивается на 1, и сложность (TN) сопротивления Пульсу возрастает на 1.',
				count:'10',
			},
		8 : {
				name:'Increase Resistance',
				TN:'2',
				resist:'-1',
				text:'Это Иммуто может быть добавлено к заклинанию несколько раз. Any Duel made by characters affected by the Spell (such as Horror Duels) has the TN of the Duel increased by 1.',
				count:'10',
			},
		9 : {
				name:'Increased Severity',
				TN:'1',
				text:'Increase the Severe value of the Damage Flip by 1. A Magia may have this Immuto multiple times, increasing the Severe damage of its Damage Flip by 1 each time. Magia that do not have a damage flip, but instead deal a set amount of damage, may take this Immuto as well, increasing the damage by 1 each time this Immuto is taken. However, those Magia must increase the TN by +2, instead of +1.',
				count:'10',
			},
		10 : {
				name:'Пульс',
				TN:'4',
				text:'The Spell affects every legal target within an area around the initial target. If the target of the Spell is hit, then every character within 1 yard that could be affected by the Spell must succeed on a TN 10 Duel, using the same defense as the initial target. Any character that fails the Duel also suffers the results of the pulse. If damage is dealt they automatically suffer Weak damage.',
			},
		11 : {
				name:'Снижение ОД (AP)',
				AP:'-1',
				TN:'5',
				text:'Заклинание требует на 1 AP меньше. This Immuto may be taken multiple times, reducing the AP required by 1 each time (to a minimum of 0).',
				count:'10',
			},
		12 : {
				name:'Снижение урона',
				TN:'-1',
				damagestep:{
					1:[0,0,1],
					2:[0,1,2],
					3:[1,2,3],
					4:[2,3,4],
					5:[3,4,5],
				},
				damagesteptype:'decrease',
				text:'Это Иммуто может быть добавлено к заклинанию несколько раз. За каждый раз, уменьшите урон заклинания на один шаг Таблицы Урона.<ul><li>0/0/1<li>0/1/2<li>1/2/3<li>2/3/4<li>3/4/5</ul>',
				count:'5',
			},
		13 : {
				name:'Reduce Resistance',
				TN:'-2',
				resist:'-1',
				text:'Это Иммуто может быть добавлено к заклинанию несколько раз. Any Resistance Duel made by the target (such as Horror Duels) has the TN of the Duel decreased by 1.',
				count:'10',
			},
		14 : {
				name:'Reduce Severity',
				TN:'-3',
				text:'Если заклинание наносит фиксированное количество урона, вместо проверки Урона, Магия не наносит урон. Все другие эффекты Магии остаются прежними. Цели что получили бы эффект только при получении урона все еще получают эффект от Магии.',
			},
		15 : {
				name:'Выбор целей',
				TN:'4',
				text:'Заклинание не оказывает эффекта на персонажей в которых заклинатель не хочет целиться (хотя вспомогательные эффекты все еще могут на них влиять).',
			},
		}

function spellParts(part){
	var arr = []
	for (p in part){
		arr.push(p)
	}
	for(var i = 0; i < arr.length; i++){
		if(part[arr[i]]){
			var option = $('<option />')
			option.attr('value',arr[i])
			if(i == 0){
				option.attr('selected','selected')
			}
			option.attr('label',part[arr[i]].name)

			if(part == spellmagia){
				$('#magia').append(option)
				$('#magia').attr('size',arr.length)
			}
			else if(part == spellgenus){
				$('#genus').append(option)
				$('#genus').attr('size',arr.length)
			}
			else if(part == spellelemental){
				$('#elemental').append(option)
				$('#elemental').attr('size',arr.length)
			}
			else if(part == spellalteration){
				$('#alteration').append(option)
				$('#alteration').attr('size',arr.length)
				
			}
			else if(part == spellaugmentation){
				$('#augmentation').append(option)
				$('#augmentation').attr('size',arr.length)
			}
		}
	}

	var div = $('<div/>',{class:'count-div'})
	var counter = ($('<input />',{type:'range',id:'2-count',min:'1',max:'1',value:'1',step:'1'}))
	var countermin = $('<div/>',{class:'count-min'})
	var countermax = $('<div/>',{class:'count-max'})
	var counterval = $('<div/>')

	if(part == spellmagia){
		div.attr('id','magia-count-div')
		counter.attr('id','magia-count')
		countermin.attr('id','magia-count-min')
		countermax.attr('id','magia-count-max')
		counterval.attr('id','magia-count-val')
		$('#magia').after(div.append(counter).append(countermin).append(countermax).append(counterval))
	}
	else if(part == spellgenus){
		div.attr('id','genus-count-div')
		counter.attr('id','genus-count')
		countermin.attr('id','genus-count-min')
		countermax.attr('id','genus-count-max')
		counterval.attr('id','genus-count-val')
		$('#genus').after(div.append(counter).append(countermin).append(countermax).append(counterval))
	}
	else if(part == spellelemental){
		div.attr('id','elemental-count-div')
		counter.attr('id','elemental-count')
		countermin.attr('id','elemental-count-min')
		countermax.attr('id','elemental-count-max')
		counterval.attr('id','elemental-count-val')
		$('#elemental').after(div.append(counter).append(countermin).append(countermax).append(counterval))
	}
	else if(part == spellalteration){
		div.attr('id','alteration-count-div')
		counter.attr('id','alteration-count')
		countermin.attr('id','alteration-count-min')
		countermax.attr('id','alteration-count-max')
		counterval.attr('id','alteration-count-val')
		$('#alteration').after(div.append(counter).append(countermin).append(countermax).append(counterval))
	}
	else if(part == spellaugmentation){
		div.attr('id','augmentation-count-div')
		counter.attr('id','augmentation-count')
		countermin.attr('id','augmentation-count-min')
		countermax.attr('id','augmentation-count-max')
		counterval.attr('id','augmentation-count-val')
		$('#augmentation').after(div.append(counter).append(countermin).append(countermax).append(counterval))
	}
}

spellParts(spellmagia)
spellParts(spellgenus)
spellParts(spellelemental)
spellParts(spellalteration)
spellParts(spellaugmentation)
createspell()