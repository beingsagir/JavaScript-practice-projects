var status=0;

function clicker() {
	var button1= document.getElementById('dynamicButton');
	console.log('clicked');
	if(status == 0){
  		status = 1;
  		button1.value = "show";
  		document.getElementById('image1').style.visibility = 'hidden';
  	}else{
  		button1.value = "hide";
  		document.getElementById('image1').style.visibility = 'visible';
  		status = 0;
  	}
}