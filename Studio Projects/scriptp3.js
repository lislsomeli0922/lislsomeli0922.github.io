function myFunction() {
	var txt;
		if (confirm("For this project I wanted to explore the relationship between the internet and cats! Why are cats such a meme? Is it their facial expressions or how their bodies look that make them so funny?? Through this website you are able to create your own meme and see if it works for you or not, your sense of humor dictates how the cat is seen and how a meme is finalized. Have fun :) Designed by Lissette Lomeli")) {
			txt = "Ok";
		} else {
			txt = "Cancel";
		}
		document.getElementById("demo").innerHTML = txt;
	}


const allboxes = document.querySelectorAll(".box");
const button2 = document.getElementById("button2");
button2.addEventListener('click', showRandomBox)
function showRandomBox() {
  let randomNumber = Math.floor(Math.random() * allboxes.length); 
  allboxes[randomNumber].classList.add('show');
}

const allcaptions = document.querySelectorAll(".caption");
const button1 = document.getElementById("button1");
button1.addEventListener('click', showRandomCaption)
function showRandomCaption() {
  let randomNumber = Math.floor(Math.random() * allcaptions.length); 
  allcaptions[randomNumber].classList.add('show');
}




