var images = new Array("images/1.jpg", "images/2.jpg", "images/3.jpg");
var i = 0;
var sliderImg = document.getElementById("sliderImg");



function slides(x)
{
	i += x;
	if (i<0) {i*= -1;}
	showSlide(i%images.length);
	console.log(i);
}

function showSlide(indx)
{
	sliderImg.setAttribute("src", images[indx]);
	sliderImg.setAttribute("class", "invisible");
	setTimeout(function (){sliderImg.setAttribute("class", "visible");}, 100);
}

function nextSlide()
{
	slides(1);
}

showSlide(0);
setInterval(function slides()
{
	i += 1;
	showSlide(i%images.length);
	console.log(i);
}, 6000);
