function myFunction() {
	var txt;
		if (confirm("For this project I wanted to explore the relationship between the internet and cats! Why are cats such a meme? Is it their facial expressions or how their bodies look that make them so funny?? Through this website you are able to create your own meme and see if it works for you or not, your sense of humor dictates how the cat is seen and how a meme is finalized. Have fun :) Designed by Lissette Lomeli")) {
			txt = "Ok";
		} else {
			txt = "Cancel";
		}
		document.getElementById("demo").innerHTML = txt;
	}

//calls all imgs or name of that element to use later 
const allboxes = document.querySelectorAll(".box");
//calls button element
const button2 = document.getElementById("button2");
//add an eventlistener to make sure button when clicked pulls up a random box/img
button2.addEventListener('click', showRandomBox)
//create a function that will show a random box/img when button is clicked
function showRandomBox() {
	// create variable that will make show a random img, uses a math function to apply to all the box elements
  let randomNumber = Math.floor(Math.random() * allboxes.length);
  // use a for each function so each img only shows up if called by showrandombox function all others are hidden 
  allboxes.forEach(function(box){
  	box.style.display = "none";
  })
  //when random box/img is shown it will display as "block"
  allboxes[randomNumber].style.display = "block";
  
}
//creates a const that has all elements with the class name caption from html file
const allcaptions = document.querySelectorAll(".caption");
//creates a const from element that has class name button1 in html file
const button1 = document.getElementById("button1");
//adds an eventlistener to the button so that when clicked will show a random caption
button1.addEventListener('click', showRandomCaption)
//creates a function that will show a random caption when button is clicked essentially linking the two actions
function showRandomCaption() {
	//creates a variable that needs math applied to const all captions to ensure it is a random caption that will show
  let randomNumber = Math.floor(Math.random() * allcaptions.length);
  //use for each to ensure each caption is getting the function applied to it
  allcaptions.forEach(function(caption){
  	//caption is hidden unless the function is applied to it
  	caption.style.display = "none";
  })

  //if applied and chosen at random the caption will display past the card and display as "block"
  allcaptions[randomNumber].style.display = "block";
  

}




