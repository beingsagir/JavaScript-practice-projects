var status=0;

function clicker() {
	var button1= document.getElementById('dynamicButton');
	console.log('clicked');
	if(status == 0){
  		status = 1;
  		button1.value = "go to Image1";
      document.getElementById('image').src = "testImage2.jpg";
  	}else{
  		button1.value = "go to Image2";
      document.getElementById('image').src = "testImage.jpg";
  		status = 0;
  	}
}