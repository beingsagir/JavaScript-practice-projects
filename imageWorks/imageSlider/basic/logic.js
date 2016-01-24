// images 
var image1 = "testImage0.jpg";
var image2 = "testImage1.jpg";
var image3 = "testImage2.jpg";

// time in mili seconds
var slidingTime = 3000;


function pageLoad(){
    var count = 0;
  {
    document.getElementById('image').src = image1;        
    setTimeout(callToChange, slidingTime);
  }

  function callToChange() {

    count = count + 1;
    if(count > 2){
      count = 0;
      changeImage(count);
    }else{
      changeImage(count);
    }
    
  }

  function changeImage(num){
    var valueOf = num;
    switch(valueOf){
      case 0: currentImage = image1; 
        break;
      case 1: currentImage = image2;
        break;
      case 2: currentImage = image3;
        break;
    }

    document.getElementById('image').src = currentImage;
    setTimeout(callToChange, slidingTime);
    var currentImage;
  
    
  }
}
  window.onload = pageLoad;





/*
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
*/