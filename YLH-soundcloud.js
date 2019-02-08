function injext(){
	//Loop time offset in miliseconds
	var intervalOffset = 10000;
	
	//Add Id to b tag where username is. Used to store gateway id
	document.getElementsByTagName("b")[0].id = "userName";
	
	//get inintial vidId and gateway
	var vidIdint = document.getElementsByClassName("followbutton")[0].outerHTML.split("(")[2].split(")")[0].split(",")[0];
	var Gatewayint = document.getElementsByClassName("followbutton")[0].outerHTML.split("(")[2].split(")")[0].split(",")[3].split("'")[1];
	//initial ajax call to setup stored values for loop
	$.ajax({
				type: "GET",
				url: "soundcloudplaysplay.php",
				data: "id="+vidIdint+"&step=points&x="+Gatewayint+"&rand="+Math.random(),
				success: function(msg){
					var ajaxCall = msg.substring(msg.lastIndexOf("$.ajax"), msg.lastIndexOf("});") +3);
					var modAjax = ajaxCall.replace('$("#listall").html(msg)', 'document.getElementById("currentpoints").innerHTML= msg.substring(msg.lastIndexOf("imageWin"), msg.lastIndexOf("class")).replace("imageWin", "").replace("(", "").replace(")", "").replace(";", "").substring(0, msg.substring(msg.lastIndexOf("imageWin"), msg.lastIndexOf("class")).replace("imageWin", "").replace("(", "").replace(")", "").replace(";", "").length -2).split(",")[0];document.getElementById("userName").innerHTML= msg.substring(msg.lastIndexOf("imageWin"), msg.lastIndexOf("class")).replace("imageWin", "").replace("(", "").replace(")", "").replace(";", "").substring(0, msg.substring(msg.lastIndexOf("imageWin"), msg.lastIndexOf("class")).replace("imageWin", "").replace("(", "").replace(")", "").replace(";", "").length -2).split(",")[3].toString().slice(1, -1)');
					console.log(ajaxCall);
					console.log(modAjax);
					eval('url = "soundcloudplays.php";' + modAjax);
				}
			});
	//Loop ajax call
	var interval = setInterval(function inject(){
		var vidId = document.getElementById("currentpoints").innerHTML;
		var Gateway = document.getElementById("userName").innerHTML;
		$.ajax({
					type: "GET",
					url: "soundcloudplaysplay.php",
					data: "id="+vidId+"&step=points&x="+Gateway+"&rand="+Math.random(),
					success: function(msg){
						var ajaxCall = msg.substring(msg.lastIndexOf("$.ajax"), msg.lastIndexOf("});") +3);
						var modAjax = ajaxCall.replace('$("#listall").html(msg)', 'document.getElementById("currentpoints").innerHTML= msg.substring(msg.lastIndexOf("imageWin"), msg.lastIndexOf("class")).replace("imageWin", "").replace("(", "").replace(")", "").replace(";", "").substring(0, msg.substring(msg.lastIndexOf("imageWin"), msg.lastIndexOf("class")).replace("imageWin", "").replace("(", "").replace(")", "").replace(";", "").length -2).split(",")[0];document.getElementById("userName").innerHTML= msg.substring(msg.lastIndexOf("imageWin"), msg.lastIndexOf("class")).replace("imageWin", "").replace("(", "").replace(")", "").replace(";", "").substring(0, msg.substring(msg.lastIndexOf("imageWin"), msg.lastIndexOf("class")).replace("imageWin", "").replace("(", "").replace(")", "").replace(";", "").length -2).split(",")[3].toString().slice(1, -1)');
						console.log(ajaxCall);
						console.log(modAjax);
						eval('url = "soundcloudplays.php";' + modAjax);
					}
				});
	}, intervalOffset);
}
	
	
	
	
	
	
	
	
	
	
	