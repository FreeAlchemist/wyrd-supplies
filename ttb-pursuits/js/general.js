$('body').prepend($('<script />',{type:'text/javascript',src:'js/gear.js'}))
$('body').prepend($('<script />',{type:'text/javascript',src:'js/talents.js'}))
$('body').prepend($('<script />',{type:'text/javascript',src:'js/glossary.js'}))

function getInfo(dir,name,type,mode){
	if(dir == 'glossary'){
		if(type == 'name'){
			if(glossary[name]){
				if(glossary[name].name){
					return glossary[name].name
				}
				else{
					return name
				}	
			}
		}
		else if(type == 'text'){
			if(glossary[name]){
				if(glossary[name].text){
					return glossary[name].text
				}
				else{
					return name+'-text'
				}	
			}
		}
	}
	else if(dir == 'talents'){
		var arr = [];
		var cardtalent = talents[name]
		for (var p in cardtalent) {
				arr.push(p);
			}
			if(mode&&mode == 'main'){
				if(type == 'name'){
					// if(talents[name].gear){
						// if(cardtalent[arr[2]].name){
						// 	return cardtalent[arr[2]].name
						// }
						// else{
						// 	return arr[2]
						// }
					// }
					// else{
						if(cardtalent[arr[3]].name){
							return cardtalent[arr[3]].name
						}
						else{
							return arr[3]
						}
					// }

				}
				else if(type == 'text'){
					// if(talents[name].gear){
					// 	return cardtalent[arr[2]].text
					// }
					// else{
						return cardtalent[arr[3]].text
					// }
				}
				else{
					return 'none'
				}
			}
			else if(mode&&mode != 'main'){
				if(type == 'name'){
					if(talents[name][mode]&&talents[name][mode].name){

						return talents[name][mode].name
					}
					else{
						return mode
					}
				}
				if(type == 'text'){
					return talents[name][mode].text
				}
			}
			else if(type == 'gear'){
				console.log(talents[name].gear)
					if(talents[name].gear){
						return talents[name].gear
					}
				}
			else{
				return 'No mode'
			}
	}
	else if(dir == 'gear'){
		if(gear.armor){
			return gear.armor
		}
	}
}

/*
getName(cardid,'n')
getName(cardid,'t')
getName(pursuit,'n')
getTalent(cardid,'n')
getTalent(cardid,'t')
getInfo('glossary',pursuit,'name')
getInfo('glossary',cardid,'name')
getInfo('glossary',cardid,'text')
getInfo('talents',cardid,'name')
getInfo('talents',cardid,'text')
*/