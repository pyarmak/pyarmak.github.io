// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// When the user clicks on the button, open the modal 
btn.onclick = function() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    document.getElementById("cv-modal-content").innerHTML = '<span class="close"><h3>x</h3></span>' + this.responseText;

	    // Get the <span> element that closes the modal
	    var span = document.getElementsByClassName("close")[0];

	    // When the user clicks on <span> (x), close the modal
	    span.onclick = function() {
		    modal.style.display = "none";
	    }
	  }
	};
	xhttp.open("GET", SiteParameters.theme_directory + "/cv.html", true);
	xhttp.send();
    modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

