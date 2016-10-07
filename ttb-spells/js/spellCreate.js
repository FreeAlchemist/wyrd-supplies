
window.addEventListener("keyup",function(){
	key =event.keyCode;
if(key==13) {
	createspell()
}
// $("select").change(createspell())
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

		/*
	if .count make input counter with max=count and multiply result according to selected value
		*/
		
		// console.log($('#'+typearr[i]+'-info'))

		if(typearr[i] == 'magia'){
			checkVal()
			var count = 1
						if(spellmagia[magia].count){
				var count = spellmagia[magia].count
				// console.log(count)
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
						if(spellgenus[genus].count){
				var count = spellgenus[genus].count
				// console.log(count)
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
						if(spellelemental[elemental].count){
				var count = spellelemental[elemental].count
				// console.log(count)
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
			if(spellalteration[alteration].count){
				var count = spellalteration[alteration].count
				// console.log(count)
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
			if(spellaugmentation[augmentation].count){
				var count = spellaugmentation[augmentation].count
				// console.log(count)
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
	

	// console.log(spellmagia[magia].name)
	// $('#magia-info').html(spellmagia[magia].name+'<br>'+spellmagia[magia].text+'<br>TN: '+spellmagia[magia].TN)


	// console.log(spellmagia[magia].name)

	$('#total-info').html($('<div />',{class:'cardpart cardpart-name',id:'total-info-name'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-story',id:'total-info-story'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-aspect',id:'total-info-aspect'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-ap',id:'total-info-ap'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-tn',id:'total-info-tn'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-resist',id:'total-info-resist'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-range',id:'total-info-range'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-text',id:'total-info-text'}))
	$('#total-info').append($('<div />',{class:'cardpart cardpart-requirement',id:'total-info-requirement'}))

	var name = spellmagia[magia].name
		+'<br>('+
		spellgenus[genus].name
		+')<br>('+
		spellelemental[elemental].name
		+')<br>('+
		spellalteration[alteration].name
		+' x'+alterationcount+')<br>('+
		spellaugmentation[augmentation].name
		+' x'+augmentationcount+')'
	// var story = 
	var aspect = spellmagia[magia].aspect



	var ap = parseInt(spellmagia[magia].AP)
	+
	parseInt(spellgenus[genus].AP)
	+
	parseInt(spellelemental[elemental].AP)
	+
	parseInt(spellalteration[alteration].AP)*parseInt(alterationcount)
	+
	parseInt(spellaugmentation[augmentation].AP)*parseInt(augmentationcount)

	console.log(parseInt(spellmagia[magia].AP)+' + '+parseInt(spellgenus[genus].AP)+' + '+parseInt(spellelemental[elemental].AP)+' + '+parseInt(spellalteration[alteration].AP)*parseInt(alterationcount)+' + '+parseInt(spellaugmentation[augmentation].AP)*parseInt(augmentationcount))
	console.log('total AP: '+ap)



	var tn = parseInt(spellmagia[magia].TN)
	+
	parseInt(spellgenus[genus].TN)
	+
	parseInt(spellelemental[elemental].TN)
	+
	parseInt(spellalteration[alteration].TN)*parseInt(alterationcount)
	+
	parseInt(spellaugmentation[augmentation].TN)*parseInt(augmentationcount)

	console.log(parseInt(spellmagia[magia].TN)+' + '+parseInt(spellgenus[genus].TN)+' + '+parseInt(spellelemental[elemental].TN)+' + '+parseInt(spellalteration[alteration].TN)*parseInt(alterationcount)+' + '+parseInt(spellaugmentation[augmentation].TN)*parseInt(augmentationcount))
	console.log('total TN: '+tn)


	
	var tnsuit = spellmagia[magia].tnsuit
	+
	spellgenus[genus].tnsuit
	+
	spellelemental[elemental].tnsuit
	+
	spellalteration[alteration].tnsuit
	+
	spellaugmentation[augmentation].tnsuit

	console.log(spellmagia[magia].tnsuit+' + '+spellgenus[genus].tnsuit+' + '+spellelemental[elemental].tnsuit+' + '+spellalteration[alteration].tnsuit+' + '+spellaugmentation[augmentation].tnsuit)
	console.log('total tnsui: '+tnsuit)
	


	var resist = spellmagia[magia].resist
	if(spellalteration[alteration].resist == 'switch'){
		if(resist == 'DF'){
			resist = 'WP'
		}
		else if(resist == 'WP'){
			resist = 'DF'
		}
	}
	if(spellaugmentation[augmentation].resist){
		var extraresist = parseInt(spellaugmentation[augmentation].resist)*parseInt(augmentationcount)
		resist = resist+extraresist
	}
	
	var range = parseInt(spellmagia[magia].range)
	+
	parseInt(spellgenus[genus].range)
	+
	parseInt(spellelemental[elemental].range)
	+
	parseInt(spellalteration[alteration].range)*parseInt(alterationcount)
	+
	parseInt(spellaugmentation[augmentation].range)*parseInt(augmentationcount)

	console.log(parseInt(spellmagia[magia].range)+' + '+parseInt(spellgenus[genus].range)+' + '+parseInt(spellelemental[elemental].range)+' + '+parseInt(spellalteration[alteration].range)*parseInt(alterationcount)+' + '+parseInt(spellaugmentation[augmentation].range)*parseInt(augmentationcount))
	console.log('total range: '+range)
	


	var text = spellmagia[magia].text
		+'<br>(<b>'+spellgenus[genus].name+'</b>: '+
		spellgenus[genus].text
		+')<br>('+
		spellelemental[elemental].text
		+')<br>('+
		spellalteration[alteration].text
		+')<br>('+
		spellaugmentation[augmentation].text
		+')'
	// var requirement = 

	$('#total-info-name').html(name)
	// $('#total-info-story').html(story)
	$('#total-info-aspect').html('<div class="info-title">ASPECT</div>'+aspect)
	$('#total-info-ap').html('<div class="info-title">AP</div>'+ap)
	$('#total-info-tn').html('<div class="info-title">TN</div>'+tn+tnsuit)
	$('#total-info-resist').html('<div class="info-title">RESIST</div>'+resist)
	$('#total-info-range').html('<div class="info-title">RANGE</div>'+range)
	$('#total-info-text').html('<b>Effect</b>: '+text)
	// $('#total-info-requirement').html('<b>Requirements:</b><br>'+requirement)


	// $('#spellText').html(
	// 	spellmagia[magia].name
	// 	+' ('+
	// 	spellgenus[genus].name
	// 	+') ('+
	// 	spellelemental[elemental].name
	// 	+') ('+
	// 	spellalteration[alteration].name
	// 	+' x'+alterationcount+') ('+
	// 	spellaugmentation[augmentation].name
	// 	+' x'+augmentationcount+')'
	// 	)
	
	// $('#spellTNnum').html(
	// parseInt(spellmagia[magia].TN)
	// +
	// parseInt(spellgenus[genus].TN)
	// +
	// parseInt(spellelemental[elemental].TN)
	// +
	// parseInt(spellalteration[alteration].TN)
	// +
	// parseInt(spellaugmentation[augmentation].TN)
	// )
	// $('#spellTNnum').append(spellmagia[magia].tnsuit+spellmagia[genus].tnsuit+spellmagia[elemental].tnsuit+spellmagia[alteration].tnsuit+spellmagia[augmentation].tnsuit)
// console.log('total ap')
	// $('#spellAPnum').html(
	// 	// spellmagia[magia].AP)
	// parseInt(spellmagia[magia].AP)
	// +
	// parseInt(spellgenus[genus].AP)
	// +
	// parseInt(spellelemental[elemental].AP)
	// +
	// parseInt(spellalteration[alteration].AP)
	// +
	// parseInt(spellaugmentation[augmentation].AP)
	// )
}

function writeVal(type,name,story,aspect,ap,tn,resist,range,text,requirement,count){
	// console.log(type)
	// console.log(name)
	// console.log(story)
	// console.log(aspect)
	// console.log(ap)
	// console.log(tn)
	// console.log(resist)
	// console.log(range)
	// console.log(text)
	// console.log(requirement)
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
		// console.log(count)
		// console.log($('#'+type+'-count').attr('max'))
		$('#'+type+'-count').attr('max',count)
		// console.log($('#'+type+'-count').attr('max'))
	}
	$('#'+type+'-count').change(function(){createspell()})
	$('#'+type+'-count-min').html($('#'+type+'-count').attr('min'))
	$('#'+type+'-count-max').html($('#'+type+'-count').attr('max'))
	$('#'+type+'-count-val').html(' Value:'+$('#'+type+'-count').val())
}



function checkVal(){
	magia = $("select[name='magia'] > option:checked").val()
	magiacount = $('#magia-count').val()
	// magiacountmin = $('#magia-count').attr('min')
	// magiacountmax = $('#magia-count').attr('max')
	// magia = $("select[name='magia'] > "$('option:selected', this).closest('optgroup').attr('label')).val()
	/*
$('option:selected', this).closest('optgroup').attr('label')
	*/
	genus = $("select[name='genus'] > option:checked").val()
	genuscount = $('#genus-count').val()
	// genuscountmin = $('#genus-count').attr('min')
	// genuscountmax = $('#genus-count').attr('max')

	elemental = $("select[name='elemental'] > option:checked").val()
	elementalcount = $('#elemental-count').val()
	// elementalcountmin = $('#elemental-count').attr('min')
	// elementalcountmax = $('#elemental-count').attr('max')

	alteration = $("select[name='alteration'] > option:checked").val()
	alterationcount = $('#alteration-count').val()
	// alterationcountmin = $('#alteration-count').attr('min')
	// alterationcountmax = $('#alteration-count').attr('max')
	/*
	$('#multiple :selected').each(function(i, sel){ 
	    alert( $(sel).val()); 
	});
	*/
	augmentation = $("select[name='augmentation'] > option:checked").val()
	augmentationcount = $('#augmentation-count').val()
	// augmentationcountmin = $('#augmentation-count').attr('min')
	// augmentationcountmax = $('#augmentation-count').attr('max')
		// console.log('magia: '+magia)
		// console.log('genus: '+genus)
		// console.log('elemental: '+elemental)
		// console.log('alteration: '+alteration)
		// console.log('augmentation: '+augmentation)
}

$("#magia").change(function(){createspell()})
$("#genus").change(function(){createspell()})
$("#elemental").change(function(){createspell()})
$("#alteration").change(function(){createspell()})
$("#augmentation").change(function(){createspell()})


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
				rangetype:'',
				requirement:'Эта магия должна содержать как минимум одно элементальное иммуто.',
			},

		2 : {
				name:'Волшебство: Элементальный снаряд',
				story:'',
				text:'',
				aspect:'Intellect',
				AP:'1',
				TN:'3',
				tnsuit:'t',
				resist:'Df',
				range:'5',
				rangetype:'projectile',
				requirement:'This Magia must have at least one Elemental Immuto.',
			},
		3 : {
				name:'Волшебство: Элементальный удар',
				story:'',
				aspect:'Intellect',
				AP:'1',
				TN:'3',
				tnsuit:'t',
				resist:'Df',
				range:'2',
				rangetype:'melee',
				text:'',
				requirement:'0',
			},
		4 : {
				name:'Волшебство: Telekinetic Movement',
				story:'',
				aspect:'Tenacity',
				AP:'1',
				TN:'7',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		5 : {
				name:'Волшебство: Telekinetic push',
				story:'The Caster unleashes a blast or wave of force at a target,shoving it with his mind',
				aspect:'Intellect',
				AP:'1',
				TN:'7',
				tnsuit:'m',
				resist:'Df',
				range:'5',
				rangetype:'',
				text:'The target is pushed a number of yards equal to the caster\'s Tenacity directly away from the caster',
				requirement:'0',
			},
		6 : {
				name:'Волшебство: Сон',
				story:'',
				aspect:'Tenacity',
				AP:'2',
				TN:'10',
				tnsuit:'m',
				resist:'-',
				range:'3',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		7 : {
				name:'Волшебство: Wrench',
				story:'',
				aspect:'Tenacity',
				AP:'2',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'3',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		8 : {
				name:'Зачарование: Анимировать конструкта',
				story:'',
				aspect:'Charm',
				AP:'1',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'',
				requirement:'0',
			},
		9 : {
				name:'Зачарование: Анимировать конечность',
				story:'',
				aspect:'Charm',
				AP:'1',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'',
				requirement:'0',
			},
		10 : {
				name:'Зачарование: Лечение',
				story:'',
				aspect:'Cunning',
				AP:'1',
				TN:'7',
				tnsuit:'r',
				resist:'Wp',
				range:'1',
				rangetype:'melee',
				text:'',
				requirement:'0',
			},
			102 : {
				name:'Mend Critical',
				story:'',
				aspect:'Cunning',
				AP:'0-2',
				TN:'10',
				tnsuit:'r',
				resist:'Wp',
				range:'1',
				rangetype:'melee',
				text:'',
				requirement:'0',
			},
		11 : {
				name:'Зачарование: Physical Enhancement',
				story:'',
				aspect:'Charm',
				AP:'1',
				TN:'7',
				tnsuit:'r',
				resist:'Df',
				range:'1',
				rangetype:'melee',
				text:'',
				requirement:'0',
			},
		12 : {
				name:'Зачарование: Элементальное оружие',
				story:'',
				aspect:'Cunning',
				AP:'2',
				TN:'8',
				tnsuit:'t',
				resist:'Special',
				range:'1',
				rangetype:'melee',
				text:'',
				requirement:'0',
			},
		13 : {
				name:'Зачарование: Перевоплощение',
				story:'',
				aspect:'Cunning',
				AP:'1',
				TN:'*',
				tnsuit:'',
				resist:'Wp',
				range:'0',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		14 : {
				name:'Некромантия: Beckon',
				story:'',
				aspect:'Charm',
				AP:'2',
				TN:'10',
				tnsuit:'m',
				resist:'Wp',
				range:'10',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		15 : {
				name:'Некромантия: Погребение',
				story:'Заклинатель заточает цель внутри "другого измерения" где время не течет.',
				aspect:'Tenacity',
				AP:'1',
				TN:'10',
				tnsuit:'c',
				resist:'Wp',
				range:'5',
				rangetype:'',
				text:'Цель исчезает из реального мира. Она вернется в реальный мир в конце хода, появившись в безопасном месте в 1 ярде от заклинателя, не ощущая, что прошло время.',
				requirement:'0',
			},
		16 : {
				name:'Некромантия: Трупная маска',
				story:'',
				aspect:'Charm',
				AP:'2',
				TN:'10',
				tnsuit:'m',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'',
				requirement:'0',
			},
		17 : {
				name:'Некромантия: Допросить',
				story:'',
				aspect:'Tenacity',
				AP:'1',
				TN:'12',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		18 : {
				name:'Некромантия: Контроль разума',
				story:'',
				aspect:'Charm',
				AP:'1',
				TN:'10',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		19 : {
				name:'Некромантия: Подъем немертвых',
				story:'',
				aspect:'Charm',
				AP:'1',
				TN:'5',
				tnsuit:'c',
				resist:'-',
				range:'5',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		20 : {
				name:'Некромантия: Subsume Corpse',
				story:'',
				aspect:'Tenacity',
				AP:'1',
				TN:'5',
				tnsuit:'c',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'',
				requirement:'0',
			},
		21 : {
				name:'Некромантия: Ужасающая аура',
				story:'',
				aspect:'Tenacity',
				AP:'1',
				TN:'12',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		22 : {
				name:'Изменение: Divination',
				story:'',
				aspect:'Cunning',
				AP:'2',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'100',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		23 : {
				name:'Изменение: Телепорт',
				story:'',
				aspect:'Intellect',
				AP:'1',
				TN:'10',
				tnsuit:'t',
				resist:'Wp',
				range:'30',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		24 : {
				name:'Изменение: Conjuring',
				story:'',
				aspect:'Cunning',
				AP:'2',
				TN:'10*',
				tnsuit:'t',
				resist:'-',
				range:'*',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		25 : {
				name:'Изменение: Невидимость',
				story:'',
				aspect:'Cunning',
				AP:'2',
				TN:'7',
				tnsuit:'m',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'',
				requirement:'0',
			},
		26 : {
				name:'Изменение: Parlor Tricks',
				story:'',
				aspect:'Intellect',
				AP:'1',
				TN:'5',
				tnsuit:'m',
				resist:'-',
				range:'*',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		27 : {
				name:'Изменение: Фантазм',
				story:'',
				aspect:'Intellect',
				AP:'1',
				TN:'5',
				tnsuit:'m',
				resist:'-',
				range:'*',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		}
var spellgenus = {
		0 : {
				name:'',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'0',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		1 : {
				name:'Зверь',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Заклинание действует на цели с характеристикой Зверь (Beast).',
				requirement:'0',
			},

		2 : {
				name:'Конструкт',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Заклинание действует на цели с характеристикой Конструкт (Construct).',
				requirement:'0',
			},
		3 : {
				name:'Живой',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'1',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Заклинание действует на цели с характеристикой Живой (Living).',
				requirement:'0',
			},
		4 : {
				name:'(Location)',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'3',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'The Spell affects a location within range. Any targets in the area that could normally resist the Spell are assumed to automatically succeed in their Resistance Duel.',
				requirement:'0',
			},
		5 : {
				name:'Неподаижный',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'3',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Заклинание действует на объекты, которые не могут перемещаться по собственному желанию (Inanimate).',
				requirement:'0',
			},
		6 : {
				name:'Дух',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Заклинание действует на цели с характеристикой Дух (Spirits).',
				requirement:'0',
			},
		7 : {
				name:'Немертвый',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Заклинание действует на цели с характеристикой Немертвый (Undead).',
				requirement:'0',
			},
		}
var spellelemental = {
		0 : {
				name:'none',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'0',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		1 : {
				name:'Darkness',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'1',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Any character that suffers damage from the Magia also gains the Blind condition for 1 turn. This Magia may be taken multiple times, increasing the duration of the Blind condition by 1 turn each time.',
				requirement:'0',
			},

		2 : {
				name:'Decay',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'1',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Any undead character that suffers damage from the Magia suffers no damage and heals 1 damage instead. This Magia may be taken multiple times, increasing the amount of damage healed by undead by 1 each time.',
				requirement:'0',
			},
		3 : {
				name:'Electric',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'3',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Damage dealt by this Magia ignores armor. In addition, the attack does not randomly determine its target if it is used on a target that is engaged.',
				requirement:'0',
			},
		4 : {
				name:'Fire',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Any character that suffers damage from the Magia also gains the Burning +1 condition. This Magia may be taken multiple times, increasing the value of the Burning condition given by 1 each time.',
				requirement:'0',
			},
		5 : {
				name:'Ice',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'3',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Any character that suffers damage from the Magia also gains the Slow condition. This Magia may be taken twice, and, if it is taken a second time, the target gains the Paralyzed condition instead of Slow.',
				requirement:'0',
			},
		6 : {
				name:'Natural',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Any character that suffers damage from the Magia also gains the following condition: "Rooted: This character may not take Walk or Charge Actions. If this character is pushed, remove this condition and the character suffers 3 damage."',
				requirement:'0',
			},
		7 : {
				name:'Poison',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'1',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Any character that suffers damage from the Magia also gains the Poison +1 condition. This Magia may be taken multiple times, increasing the value of the Poison condition given by 1 each time.',
				requirement:'0',
			},
		8 : {
				name:'Spirit',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'4',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Damage dealt by this Magia ignores armor and the Hard to Wound ability.',
				requirement:'0',
			},
		9 : {
				name:'Terror',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'1',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Any character that suffers damage from the Magia must make a TN 6 Horror Duel. This Magia may be taken multiple times, increasing the TN of the Horror Duel by 1 each time.',
				requirement:'0',
			},
		}
var spellalteration = {
		0 : {
				name:'none',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'0',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		1 : {
				name:'Alternate Resistance',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'switch',
				range:'0',
				rangetype:'',
				text:'If this Action is resisted by Wp, it is resisted by Df instead. If it is resisted by Df it is resisted by Wp instead.',
				requirement:'0',
			},
		2 : {
				name:'Blast',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'This Immuto may be taken up to three times. The Action\'s Damage Flip gains 0/0/b the first time it is taken, 0/b/b the second time, and 0/b/bb the third time. These effects are added to the damage the Magia deals.',
				requirement:'0',
				count:'3',
			},
		3 : {
				name:'Combined Spell',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'5',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'This Spell combines the effects of two Spells. Choose a second Magia and add its effects to this Spell. The Spell must follow these requirements: •The second Magia must have a Base TN equal to or lower than the Base TN of the primary Magia. •The resist of the Magia must be the same. •The Primary Magia may only have Immuto that can be applied to both Magia. •The Magia must be different. 240 Chapter 8: Magic',
				requirement:'0',
			},
		4 : {
				name:'Delay [Special] (TN Variable)',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'0',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		5 : {
				name:'Ignore Caster',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'This Spell has no effect on the caster of the Spell, he suffers no damage and is only subject to secondary effects. For instance, the caster is immune to the fireball Spell itself, but, if he sets the building on fire, he still has cause for concern.',
				requirement:'0',
			},
		6 : {
				name:'Focus Object (TN Varies)',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'0',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		}
var spellaugmentation = {
		0 : {
				name:'none',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'0',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'',
				requirement:'0',
			},
		1 : {
				name:'Additional Suit',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'-2',
				tnsuit:'*',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'The TN for the Spell gains an additional required Suit of the caster\'s choice.',
				requirement:'0',
			},
		2 : {
				name:'Alter Range (TN Varies)',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'0',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				/*
				Range Steps
melee y1 Yard
y2 Yards
y3 Yards
projectile z5 Yards
z10 Yards
z15 Yards
z30 Yards
z50 Yards
Anywhere in Sight
				*/
				text:'',
				requirement:'0',
			},
		3 : {
				name:'Increase AP',
				story:'',
				aspect:'0',
				AP:'1',
				TN:'-3',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'The Spell requires 1 additional AP to cast. This Immuto may be taken multiple times, but a character may not spend AP over multiple turns to cast this Spell. This Immuto may only be placed on Spells cast during Dramatic Time.',
				requirement:'0',
				count:'10',
			},
		4 : {
				name:'Increased damage',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				count:'5',
				/*
Damage Steps
0/0/1
0/1/2
1/2/3
2/3/4
3/4/5
				*/
				text:'This Immuto may be placed on a Spell multiple times. Each time this Immuto is taken, improve the Magia\'s Damage Flip one step on the damage Step table.',
				requirement:'0',
			},
		5 : {
				name:'Increased Duration',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				
				/*
Duration Steps
1 Turn
2 Turn
3 Turn
1 Minute
10 Minutes
1 Hour
Sunrise or Sunset
1 Day
1 Week
1 Month
6 Months
1 Year
				*/
				text:'This Immuto may be placed on a Spell multiple times. Each time it is taken move the Spell duration down the Duration Step table one step. Any part of the Spell with a set duration (for instance the time a target remains buried by a Bury Spell) will be increased 1 step. Spells with a duration that sit between two steps (for instance, Animate Limb) are assumed to sit on the lower step of the two they are between. For instance, an Animate Limb Spell cast by a character with a Charm + Enchanting of 5 would be considered a "1 Month" Spell. By raising the TN by 2 he can increase the duration to 6 months.',
				requirement:'0',
				count:'12',
			},
		6 : {
				name:'Increase Pulse',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'-1',
				range:'1',
				rangetype:'',
				text:'This Immuto may be placed on a Spell multiple times. Any pulse range in the Spell is increased by 1, and the TN to resist the pulse is increased by 1.',
				requirement:'0',
				count:'10',
			},
		7 : {
				name:'Increase Resistance',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
				tnsuit:'',
				resist:'-1',
				range:'0',
				rangetype:'',
				text:'This Immuto may be placed on a Spell multiple times. Any Duel made by characters affected by the Spell (such as Horror Duels) has the TN of the Duel increased by 1.',
				requirement:'0',
				count:'10',
			},
		8 : {
				name:'Increased Severity',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'1',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Increase the Severe value of the Damage Flip by 1. A Magia may have this Immuto multiple times, increasing the Severe damage of its Damage Flip by 1 each time. Magia that do not have a damage flip, but instead deal a set amount of damage, may take this Immuto as well, increasing the damage by 1 each time this Immuto is taken. However, those Magia must increase the TN by +2, instead of +1.',
				requirement:'0',
				count:'10',
			},
		9 : {
				name:'Pulse',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'4',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'The Spell affects every legal target within an area around the initial target. If the target of the Spell is hit, then every character within 1 yard that could be affected by the Spell must succeed on a TN 10 Duel, using the same defense as the initial target. Any character that fails the Duel also suffers the results of the pulse. If damage is dealt they automatically suffer Weak damage.',
				requirement:'0',
			},
		10 : {
				name:'Reduce AP',
				story:'',
				aspect:'0',
				AP:'-1',
				TN:'5',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'The Spell requires 1 less AP to cast. This Immuto may be taken multiple times, reducing the AP required by 1 each time (to a minimum of 0).',
				requirement:'0',
				count:'10',
			},
		11 : {
				name:'Reduce damage',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'-1',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				/*
Damage Steps
0/0/1
0/1/2
1/2/3
2/3/4
3/4/5
				*/
				text:'This Immuto may be placed on a Spell multiple times. Each time this Immuto is taken, decrease the Magia\'s Damage Flip one step on the damage Step table.',
				requirement:'0',
				count:'5',
			},
		12 : {
				name:'Reduce Resistance',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'-2',
				tnsuit:'',
				resist:'-1',
				range:'0',
				rangetype:'',
				text:'This Immuto may be placed on a Spell multiple times. Any Resistance Duel made by the target (such as Horror Duels) has the TN of the Duel decreased by 1.',
				requirement:'0',
			},
		13 : {
				name:'Reduce Severity',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'-3',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'If the Spell deals a set amount of damage, instead of a Damage Flip, the Magia instead deals no damage. All other effects of the Magia remain the same. Targets that would suffer effects only if they suffered damage still suffer the effects of the Magia.',
				requirement:'0',
			},
		14 : {
				name:'Selective Targeting',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'4',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'This Spell has no effect on characters the caster does not wish to target (although secondary effects may still affect them).',
				requirement:'0',
			},
		}

function spellParts(part){
	// console.log(part)
	var arr = []
	for (p in part){
		arr.push(p)
	}
	// console.log(arr)
	// console.log(arr.length)

	for(var i = 0; i < arr.length; i++){
		// console.log(i+' '+arr[i])
		// console.log(part[arr[i]])

		if(part[arr[i]]){
			var option = $('<option />')
			option.attr('value',arr[i])
			if(i == 0){
				option.attr('selected','selected')
			}
				option.attr('label',part[arr[i]].name)

			// console.log(option)

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
}

spellParts(spellmagia)
spellParts(spellgenus)
spellParts(spellelemental)
spellParts(spellalteration)
spellParts(spellaugmentation)
createspell()