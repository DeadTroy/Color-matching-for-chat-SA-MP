function changeBG(elem){
	document.getElementById("picture").src = (elem.checked) ? "1.png" : "0.png";
}

$(document).on("mouseup", ".chatbox__line", function() {styliString();});

function styliString() {
	if (window.getSelection() == '' || !document.getElementById("input__set_color").checked) {
		return false;
	}
	var range = window.getSelection().getRangeAt(0);
	var selectionContents = range.extractContents();
	var span = document.createElement("span");
	span.appendChild(selectionContents);
	span.setAttribute("class", "selected");
	span.style.color = document.getElementById("input__get_color").value;
	range.insertNode(span);
}