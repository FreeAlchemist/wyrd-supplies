type = $("select[name='tokentype'] > option:checked").val()
form = $("input[name='tokenform']:checked").val()
size = $("input[name='tokensize']:checked").val()
quantity = $("input[name='tokenquantity']:checked").val()
isrow = $("input[name='isrow']:checked").val()
$("#preview").html($('<div />',{class:'condition '+type+' '+form+" "+size}))

function createtokens(){
	console.log("Created "+quantity+" "+form+" "+size+" "+type+" tokens")

	for (var i = quantity; i > 0; i--) {
			// if(size == "size-10" && (type == "poison" || type == "burning" || type == "focus" || type == "defensive" || type == "armor")){
			// 	$("#page").append($('<div />',{class:'condition '+type+' '+form+" "+size,text:i}))
			// }
			// else{
			// 	$("#page").append($('<div />',{class:'condition '+type+' '+form+" "+size}))
			// }
			if(size == "size-10"){
			var token = $('<div />',{class:'condition '+type+' '+form+" "+size})
			}
			if(size == "size-40"){
				var token = $('<div />',{class:'condition '+form+" "+size})
				token.append($('<div />',{class:type+' condition-image'}))
				token.append($('<div />',{class:'condition-name',text:type}))
				var text = 'condition-text'
				token.append($('<div />',{class:type+'-text condition-text',text:text}))
			}
			else{
			var token = $('<div />',{class:'condition '+type+' '+form+" "+size,text:type})
			token.css('background-image','none')
			}
			console.log(size)
			$("#page").append(token)
	}
				var br = $('<br>')
				if(type == "armor"){
					$('.'+type+'-text').html('<input type="radio">Armor + 1<br><input type="radio">Armor + 2<br><input type="radio">Armor + 3<br>armor-text')
				}
				if(type == "blind"){
					$('.'+type+'-text').html('blind-text1')
				}
				if(type == "bleedimg"){
					$('.'+type+'-text').html('bleedimg-text')
				}
				if(type == "burning"){
					$('.'+type+'-text').html('<input type="radio">Burning + 1<br><input type="radio">Burning + 2<br><input type="radio">Burning + 3<br>burning-text')
				}
				if(type == "dazed"){
					$('.'+type+'-text').html('dazed-text')
				}
				if(type == "defensive"){
					$('.'+type+'-text').html('<input type="radio">Defensive + 1<br><input type="radio">Defensive + 2<br><input type="radio">Defensive + 3<br>armor-text')
				}
				if(type == "fast"){
					$('.'+type+'-text').html('fast-text')
				}
				if(type == "focus"){
					$('.'+type+'-text').html('<input type="radio">Focus + 1<br><input type="radio">Focus + 2<br><input type="radio">Focus + 3<br>A character with the Focused condition gains + to its next (non-Focus) Action and any resulting Damage Flip for each value of the condition.')
				}
				if(type == "intoxicated"){
					$('.'+type+'-text').html('intoxicated-text')
				}
				if(type == "paralyzed"){
					$('.'+type+'-text').html('paralyzed-text')
				}
				if(type == "poison"){
					$('.'+type+'-text').html('<input type="radio">Poisoned + 1<br><input type="radio">Poisoned + 2<br><input type="radio">Poisoned + 3<br>armor-text')
				}
				if(type == "slow"){
					$('.'+type+'-text').html('slow-text')
				}
				if(type == "suffocating"){
					$('.'+type+'-text').html('suffocating-text')
				}
				if(type == "reactivate"){
					$('.'+type+'-text').html('reactivate-text')
				}
				if(type == "useless-limb"){
					$('.'+type+'-text').html('useless-limb-text')
				}

	if(isrow){
		$("#page").append($('<div />',{class:isrow}))
	}
}

function alltokens(){
var typearr = $("select[name='tokentype']").children()
	for (var i = 0; i < typearr.length; i++) {
		var type = typearr[i].value
		console.log(type)
		if(size == "size-10"){
		var token = $('<div />',{class:'condition '+type+' '+form+" "+size})
		}
		if(size == "size-40"){
			var token = $('<div />',{class:'condition '+form+" "+size})
			token.append($('<div />',{class:type+' condition-image'}))
			token.append($('<div />',{class:'condition-name',text:type}))
			var text = 'condition-text'
			if(type == "blind"){
				var text = 'blind-text'
			}
			token.append($('<div />',{class:'condition-text',text:text}))
		}
		else{
		var token = $('<div />',{class:'condition '+type+' '+form+" "+size,text:type})	
		}
		$("#page").append(token)
		if(isrow){
			$("#page").append($('<div />',{class:isrow}))
		}
	}
}

function cleartokens(){
	console.log("Cleared page")
	$("#page").html("")
}


$("#tokentype").change(function(){
	type = $("select[name='tokentype'] > option:checked").val()
	form = $("input[name='tokenform']:checked").val()
	size = $("input[name='tokensize']:checked").val()
	quantity = $("input[name='tokenquantity']:checked").val()
	isrow = $("input[name='isrow']:checked").val()
	$("#preview").html($('<div />',{class:'condition '+type+' '+form+" "+size}))
	console.log($("input:checked").val())
})

// $("#menu").css("color","red")
// $("#menu").fadeOut(3000)
// $("#menu").fadeIn(1000)
// $("#menu").slideDown(2000)
