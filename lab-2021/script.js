function myFunction() {
	var txt;
		if (confirm("I helped my parents with naming her! Originally Mia's name was going to be Anabelle!")) {
			txt = "Ok";
		} else {
			txt = "Cancel";
		}
		document.getElementById("demo").innerHTML = txt;
	}

function myFunctionTwo() {
  		var popup = document.getElementById("myPopup");
  		popup.classList.toggle("show");
	}
