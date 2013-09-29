// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

showNotes = function(title,message,lastX,lastY){
	var note = document.createElement("DIV");
	var noteTitle = document.createElement("h4");
	var contentDiv = document.createElement("DIV");
	var noteText = document.createElement("TEXTAREA");
	var closeButton = document.createElement("BUTTON");
	var newButton = document.createElement("BUTTON");
	var saveButton = document.createElement("BUTTON");
	var	mainBody = document.getElementById('mainThing');

	$(note).addClass("note");
	$(noteTitle).addClass("noteTitle");
	$(noteText).addClass("noteText");
	$(contentDiv).addClass("noteContent")
	$(closeButton).addClass("noteButton noteClose");
	$(newButton).addClass("noteButton noteNew");
	$(saveButton).addClass("noteButton noteSave");


	mainBody.appendChild(note);
	contentDiv.appendChild(noteTitle);
	contentDiv.appendChild(closeButton);
	contentDiv.appendChild(noteText);
	contentDiv.appendChild(saveButton);
	contentDiv.appendChild(newButton);
	note.appendChild(contentDiv);

	noteTitle.innerText = title;
	noteText.val = message;
	closeButton.innerText = 'x';
	newButton.innerText = '+';
	saveButton.innerText = 'save';
	

}