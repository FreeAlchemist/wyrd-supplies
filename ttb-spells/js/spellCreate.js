
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
		+' x'+magiacount+'<br>('+
		spellgenus[genus].name
		+' x'+genuscount+')<br>('+
		spellelemental[elemental].name
		+' x'+elementalcount+')<br>('+
		spellalteration[alteration].name
		+' x'+alterationcount+')<br>('+
		spellaugmentation[augmentation].name
		+' x'+augmentationcount+')'
	// var story = 
	var aspect = spellmagia[magia].aspect



	var ap = parseInt(spellmagia[magia].AP)*parseInt(magiacount)
	+
	parseInt(spellgenus[genus].AP)*parseInt(genuscount)
	+
	parseInt(spellelemental[elemental].AP)*parseInt(elementalcount)
	+
	parseInt(spellalteration[alteration].AP)*parseInt(alterationcount)
	+
	parseInt(spellaugmentation[augmentation].AP)*parseInt(augmentationcount)

	console.log(parseInt(spellmagia[magia].AP)*parseInt(magiacount)+' + '+parseInt(spellgenus[genus].AP)*parseInt(genuscount)+' + '+parseInt(spellelemental[elemental].AP)*parseInt(elementalcount)+' + '+parseInt(spellalteration[alteration].AP)*parseInt(alterationcount)+' + '+parseInt(spellaugmentation[augmentation].AP)*parseInt(augmentationcount))
	console.log('total AP: '+ap)



	var tn = parseInt(spellmagia[magia].TN)*parseInt(magiacount)
	+
	parseInt(spellgenus[genus].TN)*parseInt(genuscount)
	+
	parseInt(spellelemental[elemental].TN)*parseInt(elementalcount)
	+
	parseInt(spellalteration[alteration].TN)*parseInt(alterationcount)
	+
	parseInt(spellaugmentation[augmentation].TN)*parseInt(augmentationcount)

	console.log(parseInt(spellmagia[magia].TN)*parseInt(magiacount)+' + '+parseInt(spellgenus[genus].TN)*parseInt(genuscount)+' + '+parseInt(spellelemental[elemental].TN)*parseInt(elementalcount)+' + '+parseInt(spellalteration[alteration].TN)*parseInt(alterationcount)+' + '+parseInt(spellaugmentation[augmentation].TN)*parseInt(augmentationcount))
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
	$('#total-info-aspect').html('<div class="info-title">АСПЕКТ</div>'+aspect)
	$('#total-info-ap').html('<div class="info-title">ОД (AP)</div>'+ap)
	$('#total-info-tn').html('<div class="info-title">ЦН (TN)</div>'+tn+tnsuit)
	$('#total-info-resist').html('<div class="info-title">СОПРОТИВЛЕНИЕ</div>'+resist)
	$('#total-info-range').html('<div class="info-title">ДАЛЬНОСТЬ</div>'+range)
	$('#total-info-text').html('<b>Эффект</b>: '+text)
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
	$('#'+type+'-count-max').html('Макс.'+$('#'+type+'-count').attr('max'))
	$('#'+type+'-count-val').html(' Количество:'+$('#'+type+'-count').val())
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
				count:'1',
			},

		2 : {
				name:'Волшебство: Элементальный снаряд',
				story:'The Caster hurls a bolt of magical power at a target, much like a bullet.',
				text:'Цель получает 1/2/3 урона.',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'3',
				tnsuit:'t',
				resist:'Df',
				range:'5',
				rangetype:'projectile',
				requirement:'Эта магия должна содержать как минимум одно элементальное иммуто.',
				count:'1',
			},
		3 : {
				name:'Волшебство: Элементальный удар',
				story:'The Caster strikes his opponent with a melee attack infused with elemental energy.',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'3',
				tnsuit:'t',
				resist:'Df',
				range:'2',
				rangetype:'melee',
				text:'Цель получает 1/2/3 урона.',
				requirement:'Эта магия должна содержать как минимум одно элементальное иммуто.',
				count:'1',
			},
		4 : {
				name:'Волшебство: Телекинетичесое перемещение',
				story:'The Caster moves a target with his mind, as if it were grasped by unseen hands.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'1',
				TN:'7',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				rangetype:'',
				text:'Заклинатель может перемещать целевой объект как если бы тот был поднят и носим персонажем с Силой (Might) равной Стойкости (Tenacity) заклинателя, и Скоростью (Speed) равной Хитрости (Cunning) заклинателя. Если цель неподвижна, она не сопротивляется этому Действию и заклинателю нужно просто пройти проверку требуемой сложности (TN) для перемещения объекта. Если заклинатель пытается переместить объект несомый другим персонажем, то персонаж держащий объект может сопротивляться заклинанию. Заклинатель может решить поддерживать данное заклинание, перемещая объект от хода к ходу. В таком случае заклинание не требуется исполнять снова (оно уже успешно исполнено). Заклинатель не может исполнять другие заклинания при поддержании телекинеза, и перемещение объекта требует (1) ОД Действие (AP Action), как если бы заклинание исполнялось снова. Заклинатель может выполнять атаки удерживаемым таким образом объектом, выполняя стандартную атаку ближнего боя используя навык подходящий к предмету (например Ближний бой (Melee) для меча), но заменяя соответствующий аспект на Интеллект.',
				requirement:'0',
				count:'1',
			},
		5 : {
				name:'Волшебство: Телекинетический толчок',
				story:'The Caster unleashes a blast or wave of force at a target,shoving it with his mind',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'7',
				tnsuit:'m',
				resist:'Df',
				range:'5',
				rangetype:'',
				text:'Цель толкается на расстояние в ярдах равное Стойкости заклинателя, по прямой от заклинателя.',
				requirement:'0',
				count:'1',
			},
		6 : {
				name:'Волшебство: Сон',
				story:'The caster causes the target to lose consciousness.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'2',
				TN:'10',
				tnsuit:'m',
				resist:'-',
				range:'3',
				rangetype:'',
				text:'If the target is Living, it must make a TN 10 Unconsciousness Challenge. The TN of the Challenge is increased by 2 for each Margin of Success achieved by the caster. Note that this Spell is not resisted by the target, they must pass the Unconsciousness challenge instead, if the Spell is successful. This will create a set TN for many Fatemaster characters (as their Flip value is not random).',
				requirement:'0',
				count:'1',
			},
		7 : {
				name:'Волшебство: Выкручивание',
				story:'The caster reaches into the target with telekinetic force, wrenching internal organs about.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'2',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'3',
				rangetype:'',
				text:'If the target is living, it must make a TN 10 Toughness + Resilience Challenge. The TN of the Challenge is increased by 2 for each Margin of Success achieved by the Caster. Note that this Spell is not resisted by the target, they must pass the challenge instead, if the Spell is successful. This will create a set TN for many Fatemaster characters (as their Flip value is not random). If the target fails the challenge it suffers a Moderate Critical Effect, with normal adjustments for damage and other factors, as normal for a Critical Effect.',
				requirement:'0',
				count:'1',
			},
		8 : {
				name:'Зачарование: Анимировать конструкта',
				story:'The caster imbues a prepared construct body with life so that it might obey his commands.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'1',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'Target inanimate construct comes to life as a construct under the caster\'s control for 1 hour. At the end of the Spell, the construct returns to its inanimate form, and may be later reanimated. A caster may only control one construct at a time.',
				requirement:'0',
				count:'1',
			},
		9 : {
				name:'Зачарование: Анимировать конечность',
				story:'The caster causes an artificial limb to come to life under the control of the character the limb is attached to.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'1',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'The target limb comes to life for a number of weeks equal to the Charm + Enchanting of the caster (or less if the caster wishes). The limb is under the control of the character attached to it, which is not necessarily the caster. The limb must have been crafted to perform as a limb, although it need not be shaped or otherwise created in the form of a natural limb. Pneumatic limbs are detailed on page 178. If a character has a non-Pneumatic replacement (such a stitched together arm from the flesh of dead men) then the TN requires a C instead of a t.',
				requirement:'0',
				count:'1',
			},
		10 : {
				name:'Зачарование: Лечение',
				story:'The caster channels raw magical energy into a target, causing it to return to its proper form.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'1',
				TN:'7',
				tnsuit:'r',
				resist:'Wp',
				range:'1',
				rangetype:'melee',
				text:'Цель лечит 1/2/3 урона, если она Живая. Цель может решить не сопротивляться, делая заклинание простой проверкой. Each additional time a character is targeted by this Spell within an hour the TN is increased by 3 or requires an additional a R (выбирает заклинатель). If this Spell fails to heal a target, the target may not receive magical healing from this Magia until the next sunrise.',
				requirement:'0',
				count:'1',
			},
		11 : {
				name:'Зачарование: Залатать',
				story:'The caster focuses magical energy into the target, repairing the worst of its damage.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'0-2',
				TN:'10',
				tnsuit:'r',
				resist:'Wp',
				range:'1',
				rangetype:'melee',
				text:'Remove a single condition from the target, if it is living. The target may choose to not resist, making this Spell a Simple Duel instead. The removed condition must be a Critical condition or a condition placed on the target by a non-magical effect. This is a 0 AP Action unless the condition being removed is a Moderate or Severe Critical condition. If it is Moderate this is a 1 AP Action and if it is Severe this is a 2 AP Action.',
				requirement:'0',
				count:'1',
			},
		12 : {
				name:'Зачарование: Физическое усиление',
				story:'The caster enhances the target\'s physical prowess, invigorating the target.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'1',
				TN:'7',
				tnsuit:'r',
				resist:'Df',
				range:'1',
				rangetype:'melee',
				text:'The target gains the following condition for one hour: "Физически усиленный +1: This character adds +1 to his Physical Aspects, to a maximum of 5."',
				requirement:'0',
				count:'1',
			},
		13 : {
				name:'Зачарование: Элементальное оружие',
				story:'The caster enhances a weapon, or a person\'s body, with an elemental effect.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'2',
				TN:'8',
				tnsuit:'t',
				resist:'Special',
				range:'1',
				rangetype:'melee',
				text:'Целевое оружие получает эффекты Элементального Иммуто, рассматривая оружие как если бы оно было Магией, которую изменял Иммуто. Эффект длится 1 минуту. Владелец оружия может сопротивляться, при этом, заклинание немедленно проваливается. Эта Магия может быть направлена на персонажа, позволяя его безоружным атакам получить преимущества Элементального Иммуто. Цель заклинания не получает урона от его эффекта (например не загорается от своих горящих кулаков). This Spell must choose a single Elemental Immuto to be cast.',
				requirement:'Эта магия должна обязательно выбрать одно элементальное иммуто',
				count:'1',
			},
		14 : {
				name:'Зачарование: Перевоплощение',
				story:'The Caster takes on the physical form of an animal.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'1',
				TN:'*',
				tnsuit:'t',
				resist:'Wp',
				range:'0',
				rangetype:'',
				text:'Тело заклинателя превращается в  Зверя на 1 Ход. Заклинатель получает характеристику Зверь пока перевоплощен, как и все физические качества Зверя (например ядовитые когти или способность летать). The TN for this Magia is 10t, plus the difference between the Beast\'s highest Physical Aspect and the caster\'s lowest Physical Aspect. For instance, a caster with a Speed of -2 (his lowest Aspect) shifting into a creature with a Might of +4 (its highest Aspect) would have a TN of 16t (10, plus the difference of 6).',
				requirement:'0',
				count:'1',
			},
		15 : {
				name:'Некромантия: Зов',
				story:'The caster lures a target towards himself.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'2',
				TN:'10',
				tnsuit:'m',
				resist:'Wp',
				range:'10',
				rangetype:'',
				text:'Целевой персонаж должен переместиться на свой аспект Движение по прямой к заклинателю и должен закончить движение насколько возможно близко к заклинателю.',
				requirement:'0',
				count:'1',
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
				rangetype:'',
				text:'Цель исчезает из реального мира. Она вернется в реальный мир в конце хода, появившись в безопасном месте в 1 ярде от заклинателя, не ощущая, что прошло время.',
				requirement:'0',
				count:'1',
			},
		17 : {
				name:'Некромантия: Трупная маска',
				story:'The caster removes the face of a corpse and wears the dead man\'s visage for a while.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'2',
				TN:'10',
				tnsuit:'m',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'The character removes the face of the corpse and takes on the appearance and voice that the corpse had in life. The character gains a ++ to all attempts to impersonate the person. This effect lasts until the next Sunrise or Sunset.',
				requirement:'0',
				count:'1',
			},
		18 : {
				name:'Некромантия: Допрос',
				story:'The caster sifts through the target\'s mind, looking for answers to questions.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'1',
				TN:'12',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				rangetype:'',
				text:'The caster may ask a single yes-or-no question of the living target, plus an additional question for each Margin of Success. The character will receive a truthful yes, no, or "I don\'t know" answer from the target, to the best of the target\'s ability.',
				requirement:'0',
				count:'1',
			},
		19 : {
				name:'Некромантия: Контроль разума',
				story:'The caster takes momentary command over the target\'s mind and body, forcing them to take an Action against their will.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'1',
				TN:'10',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				rangetype:'',
				text:'The target takes a 1 AP Action that it could normally take under this character\'s control. This Action may not force the target to sacrifice itself directly, but can cause him to take Actions against his own nature (such as attacking his friends). A caster may not affect themselves with Mind Control.',
				requirement:'0',
				count:'1',
			},
		20 : {
				name:'Некромантия: Подъем немертвых',
				story:'The caster brings a corpse to life to serve him.',
				aspect:'Charm',
				aspect:'Обаяние',
				AP:'1',
				TN:'5',
				tnsuit:'c',
				resist:'-',
				range:'5',
				rangetype:'',
				text:'arget corpse becomes an undead under the caster\'s control for 10 minutes. The undead undergoes the following alterations from the original form:<ul><li>The undead\'s Tenacity is increased to 3 and all of its other Mental Aspects are lowered to -5.<li>The undead loses the Living Characteristic (if it has it) and gains the Undead Characteristic.<li>The undead loses any mental skills it had in life, and the physical skill ratings are halved (rounding up).</ul>Alternatively, this Spell may be used to take control of an uncontrolled and non-sentient undead creature. The new undead may need physical repairs (as critical damage may physically render the body less useful). Otherwise, the corpse is raised with half of its Wounds remaining. At the end of the Spell, the undead becomes uncontrolled (and usually violent).',
				requirement:'0',
				count:'1',
			},
		21 : {
				name:'Некромантия: Поглощение трупа',
				story:'The caster causes a corpse to disintegrate, restoring his own body in the process.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'1',
				TN:'5',
				tnsuit:'c',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'Target corpse is turned into dust. The caster then heals 1/2/3 damage, plus an additional number of Wounds equal to the corpse\'s Resilience (if the Resilience is positive).',
				requirement:'0',
				count:'1',
			},
		22 : {
				name:'Некромантия: Ужасающая аура',
				story:'The caster emanates a powerful aura that causes terror in the living.',
				aspect:'Tenacity',
				aspect:'Стойкость',
				AP:'1',
				TN:'12',
				tnsuit:'m',
				resist:'Wp',
				range:'5',
				rangetype:'',
				text:'The target gains a powerful Terrifying Aura for 1 minute. If a Living character ends a movement within a1 of the target, or attacks the target, it must succeed on a TN 10 Horror Duel. See page 219 for rules regarding Fated characters causing Horror Duels.',
				requirement:'0',
				count:'1',
			},
		23 : {
				name:'Изменение: Прорицание',
				story:'The caster throws his sense to a target location, seeing and hearing as if he were in that location.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'2',
				TN:'10',
				tnsuit:'t',
				resist:'-',
				range:'100',
				rangetype:'',
				text:'The caster enters a divination trance, his body going limp. While in the trance the caster can see and hear as if his sense were located at the target location. The target location must obey all of the normal targeting restrictions for a Spell (range, Line of Sight, etc.). The effects of this Spell last for one hour, or until the caster wishes the Spell to end. The caster may not take any other Actions while in a divination trance.',
				requirement:'0',
				count:'1',
			},
		24 : {
				name:'Изменение: Телепорт',
				story:'The caster teleports the target causing it to vanish and then reappear in a new location.',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'10',
				tnsuit:'t',
				resist:'Wp',
				range:'30',
				rangetype:'',
				text:'A target within range of this Spell is teleported to a safe location within range of this Spell. The target may choose to relent to the teleportation, in which case the caster must make a Simple Challenge Duel instead. Objects may also be teleported, but if the object is in the possession of someone, they may resist the Spell.',
				requirement:'0',
				count:'1',
			},
		25 : {
				name:'Изменение: Вызов (Conjuring)',
				story:'The caster summons an object from nothing in an instant.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'2',
				TN:'10*',
				tnsuit:'t',
				resist:'-',
				range:'*',
				rangetype:'',
				text:'The Caster summons an object that was previously prepared for summoning. The object appears in his hands, and must be an object that the character can hold in both hands. A character may prepare an object for summoning by touching the object briefly and mentally concentrating on it. A character may have a number of objects prepared for summoning equal to his Cunning Aspect, with a minimum of 1. The range of this Spell is equal to the user\'s Cunning Aspect in miles.',
				requirement:'0',
				count:'1',
			},
		26 : {
				name:'Изменение: Невидимость',
				story:'The caster obscures a target\'s appearance, blending in with the background or becoming completely transparent.',
				aspect:'Cunning',
				aspect:'Хитрость',
				AP:'2',
				TN:'7',
				tnsuit:'m',
				resist:'-',
				range:'1',
				rangetype:'melee',
				text:'The target becomes invisible for 1 round. The invisibility immediately breaks if the character interacts with the world in a meaningful way, such as by attacking, moving an object, or opening doors. Any attempts to spot the character suffer --- to the Flip if the spotter is relying on sight at all while the character is invisible. Even a guard who hears footsteps, for instance, will believe his eyes when he turns to see nobody there. The character can otherwise be registered by other senses, but not by magical "sight" based sense (such as seeing spirits). Any attacks made against an invisible character suffer --- to their attack Flip. If the attack succeeds, however, the invisibility ends as well.',
				requirement:'0',
				count:'1',
			},
		27 : {
				name:'Изменение: Дешевые трюки',
				story:'The caster produces one of a variety of minor and obviously magical effects.',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'5',
				tnsuit:'m',
				resist:'-',
				range:'*',
				rangetype:'',
				text:'The caster may choose one of the following effects to produce. These effects may never be used to directly harm a target physically, and any situation that would warrant a Resist Duel is automatically won by the Defender, if he wishes.<ul><li>Мгновенно почистить и починить the clothes of a target.<li>Create a short and simple sound, such as soft bells or a single word, audible to all in the room.<li>Whisper a short sentence into the ear of someone you can see that is only heard by that person.<li>Make a light object (such as a key or handkerchief) dance about within a small area (such as the top of a coffee table).<li>Change the flavor of a food or drink, such as making water taste like cherry juice.<li>Light a candle, lantern, or other object designed to be lit, that is within sight.<li>Create a translucent and still image visible to all in the room.<li>Summon a small orb of light, about the brightness of a lantern, that moves about the room erratically, or hovers near a person.<li>Open an unlocked door, window, or container that could be easily opened with one hand and that is within sight.<li>Cause soft music to be audible within the room.</ul>',
				requirement:'0',
				count:'1',
			},
		28 : {
				name:'Изменение: Фантазм',
				story:'The caster conjures a complex illusion that can appear real.',
				aspect:'Intellect',
				aspect:'Интеллект',
				AP:'1',
				TN:'5',
				tnsuit:'m',
				resist:'-',
				range:'*',
				rangetype:'',
				text:'The caster creates an animated illusion that appears real to observers for 1 minute. When created, the caster must declare all of the details of the illusion, such as what it will do, and how it will be sensed. The illusion does not react to external stimulus unless controlled by the caster (see below). The phantasm can be seen, heard, and smelled, but not touched or tasted. If touched, the illusion may be passed through, but is otherwise unharmed. As long as a creature sensing the phantasm has no reason to call it into question, it automatically fools the observer. A character who has never been in a particular room, for instance, would not notice the illusion of a wall hiding a door that he never knew was there in the first place. If a character has a reason to disbelieve an illusion, such as the image of a dead friend sitting in a chair, then he must succeed on a Wp 10 Duel to disbelieve the illusion. Otherwise, he believes the illusion is real. If the character comes into physical contact with the illusion, then he automatically disbelieves it. The caster may take control of the illusions Actions with a 1 AP Action. The illusion will act as the caster wishes, and may even change its form, within the bounds of the effect. In addition, the caster may banish an illusion he created at any time without using an Action.',
				requirement:'0',
				count:'1',
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
				count:'1',
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
				count:'1',
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
				count:'1',
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
				count:'1',
			},
		4 : {
				name:'Местонахождение (Location)',
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
				count:'1',
			},
		5 : {
				name:'Неподвижный',
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
				count:'1',
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
				count:'1',
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
				count:'1',
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
				count:'1',
			},
		1 : {
				name:'Тьма (Darkness)',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'1',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Персонаж получающий урон от Магии также получает состояние "Ослеплен"  на 1 ход. Эта Магия может быть использована несколько раз, увеличивая длительность состояния "Ослеплен" на 1 хож каждый раз.',
				requirement:'0',
				count:'1',
			},

		2 : {
				name:'Разложение (Decay)',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'1',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Любой Немертвый персонаж получающий урон от Магии вместо этого вылечивает 1 рану. This Magia may be taken multiple times, increasing the amount of damage healed by undead by 1 each time.',
				requirement:'0',
				count:'1',
			},
		3 : {
				name:'Электричество (Electric)',
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
				count:'1',
			},
		4 : {
				name:'Огонь (Fire)',
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
				count:'1',
			},
		5 : {
				name:'Лёд (Ice)',
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
				count:'1',
			},
		6 : {
				name:'Природа (Natural)',
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
				count:'1',
			},
		7 : {
				name:'Яд (Poison)',
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
				count:'1',
			},
		8 : {
				name:'Дух (Spirit)',
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
				count:'1',
			},
		9 : {
				name:'Ужас (Terror)',
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
				count:'1',
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
				name:'Альтернативное сопротивление',
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
				name:'Взрыв',
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
				name:'Совмещенное заклинание',
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
				name:'Задержка [Special] (TN Variable)',
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
				name:'Игнорировать заклинателя',
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
				name:'Объект фокусировки (TN Varies)',
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
				count:'1',
			},
		1 : {
				name:'Дополнительная масть',
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
				count:'1',
			},
		2 : {
				name:'Изменение дальности (TN Varies)',
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
melee 1
melee 2
melee 3
projectile 5
projectile 10
projectile 15
projectile 30
projectile 50
Anywhere in Sight
				*/
				text:'<ul><li>melee 1<li>melee 2<li>melee 3<li>projectile 5<li>projectile 10<li>projectile 15<li>projectile 30<li>projectile 50<li>Anywhere in Sight</ul>This Immuto may be placed on a Spell multiple times. Each time it is taken the Spell moves up or down the Range Step table one step. Moving up the table (lowering the range) reduces the TN of the Spell Action by -2. Moving down the table (increasing the range) increases the TN of the Spell by 2. Some Spells do not have a y or z symbol in their range. If this is the case, they move up and down the range table as normal, but they do not gain the Close or Projectile (yor z) attached to range. A y Magia may never increase its range beyond y3, and a z Magia may never reduce its range below z5.',
				requirement:'0',
				count:'9',
			},
		3 : {
				name:'Увеличение ОД (AP)',
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
				name:'Увеличение урона',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'2',
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
				text:'This Immuto may be placed on a Spell multiple times. Each time this Immuto is taken, improve the Magia\'s Damage Flip one step on the damage Step table.<ul><li>0/0/1<li>0/1/2<li>1/2/3<li>2/3/4<li>3/4/5</ul>',
				requirement:'0',
				count:'5',
			},
		5 : {
				name:'Увеличение длительности',
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
				text:'This Immuto may be placed on a Spell multiple times. Each time it is taken move the Spell duration down the Duration Step table one step.<ul>1 Turn<li>2 Turn<li>3 Turn<li>1 Minute<li>10 Minutes<li>1 Hour<li>Sunrise or Sunset<li>1 Day<li>1 Week<li>1 Month<li>6 Months<li>1 Year<li></ul>Any part of the Spell with a set duration (for instance the time a target remains buried by a Bury Spell) will be increased 1 step. Spells with a duration that sit between two steps (for instance, Animate Limb) are assumed to sit on the lower step of the two they are between. For instance, an Animate Limb Spell cast by a character with a Charm + Enchanting of 5 would be considered a "1 Month" Spell. By raising the TN by 2 he can increase the duration to 6 months.',
				requirement:'0',
				count:'12',
			},
		6 : {
				name:'Увеличение Пульса',
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
				name:'Пульс',
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
				count:'1',
			},
		10 : {
				name:'Снижение ОД (AP)',
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
				name:'Снижение урона',
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
				text:'This Immuto may be placed on a Spell multiple times. Each time this Immuto is taken, decrease the Magia\'s Damage Flip one step on the damage Step table.<ul><li>0/0/1<li>0/1/2<li>1/2/3<li>2/3/4<li>3/4/5</ul>',
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
				count:'10',
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
				count:'1',
			},
		14 : {
				name:'Выбор целей',
				story:'',
				aspect:'0',
				AP:'0',
				TN:'4',
				tnsuit:'',
				resist:'0',
				range:'0',
				rangetype:'',
				text:'Заклинание не оказывает эффекта на персонажей в которых заклинатель не хочет целиться (хотя вспомогательные эффекты все еще могут на них влиять).',
				requirement:'0',
				count:'1',
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

	var p1 = $('<p/>')
	var p2 = $('<p/>')
	var counter = ($('<input />',{type:'range',id:'2-count',min:'1',max:'1',value:'1',step:'1'}))
	var countermin = $('<span/>')
	var countermax = $('<span/>')
	var counterval = $('<span/>')
	/*
	<p>
		<span id="genus-count-min"/>
		<input type="range" id="genus-count" min="1" max="1" value="1" step="1">
		<span id="genus-count-max"/>
	</p>
	<p>
		<span id="genus-count-val"/>
	</p>
	*/
	if(part == spellmagia){
		counter.attr('id','magia-count')
		countermin.attr('id','magia-count-min')
		countermax.attr('id','magia-count-max')
		counterval.attr('id','magia-count-val')
		$('#magia').after(p2.append(counterval)).after(p1.append(countermin).append(counter).append(countermax))
	}
	else if(part == spellgenus){
		counter.attr('id','genus-count')
		countermin.attr('id','genus-count-min')
		countermax.attr('id','genus-count-max')
		counterval.attr('id','genus-count-val')
		$('#genus').after(p2.append(counterval)).after(p1.append(countermin).append(counter).append(countermax))
	}
	else if(part == spellelemental){
		counter.attr('id','elemental-count')
		countermin.attr('id','elemental-count-min')
		countermax.attr('id','elemental-count-max')
		counterval.attr('id','elemental-count-val')
		$('#elemental').after(p2.append(counterval)).after(p1.append(countermin).append(counter).append(countermax))
	}
	else if(part == spellalteration){
		counter.attr('id','alteration-count')
		countermin.attr('id','alteration-count-min')
		countermax.attr('id','alteration-count-max')
		counterval.attr('id','alteration-count-val')
		$('#alteration').after(p2.append(counterval)).after(p1.append(countermin).append(counter).append(countermax))
	}
	else if(part == spellaugmentation){
		counter.attr('id','augmentation-count')
		countermin.attr('id','augmentation-count-min')
		countermax.attr('id','augmentation-count-max')
		counterval.attr('id','augmentation-count-val')
		$('#augmentation').after(p2.append(counterval)).after(p1.append(countermin).append(counter).append(countermax))
	}

}

spellParts(spellmagia)
spellParts(spellgenus)
spellParts(spellelemental)
spellParts(spellalteration)
spellParts(spellaugmentation)
createspell()