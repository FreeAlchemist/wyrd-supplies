type = $("select[name='tokentype'] > option:checked").val()
form = $("input[name='tokenform']:checked").val()
size = $("input[name='tokensize']:checked").val()
quantity = $("input[name='tokenquantity']:checked").val()
isrow = $("input[name='isrow']:checked").val()
$("#preview").html($('<div />',{class:'condition '+type+' '+form+" "+size}))
	
function preview(){
type = $("select[name='tokentype'] > option:checked").val()
form = $("input[name='tokenform']:checked").val()
size = $("input[name='tokensize']:checked").val()
quantity = $("input[name='tokenquantity']:checked").val()
isrow = $("input[name='isrow']:checked").val()
if(size == "size-10"){
	form = "square"
}
$("#preview").html($('<div />',{class:'condition '+type+' '+form+" "+size}))
}


function createtokens(){
	console.log("Created "+quantity+" "+form+" "+size+" "+type+" tokens")

	for (var i = quantity; i > 0; i--) {
			if(size == "size-10" && (type == "poison" || type == "burning" || type == "focus" || type == "defencive" || type == "armor")){
				$("#page").append($('<div />',{class:'condition '+type+' '+form+" "+size,text:i}))
			}
			else{
				$("#page").append($('<div />',{class:'condition '+type+' '+form+" "+size}))
			}
			// $("#page").append($('<div />',{class:'condition '+type+' '+form+" "+size}))
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
		$("#page").append($('<div />',{class:'condition '+type+' '+form+" "+size}))
		if(isrow){
			$("#page").append($('<div />',{class:isrow}))
		}
	}
}


function cleartokens(){
	console.log("Cleared page")
	$("#page").html("")
}

