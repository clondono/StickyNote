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
Note = function(title,message,tableId, lastX,lastY) {
	this._TITLE = "Example Title";
	this._MESSAGE = "Example message";
	this._closeText = "x";
	this._saveText = "save";
	this._newText = "+";
	this._top = 0;
	this._left = 0;
	this.noteId = "TestNote";
	console.log(tableId);
	console.log(typeof tableId !== "undefined");
	if(typeof tableId !== "undefined") {
		this._noteId = "Note"+tableId;
		console.log(this._noteId);
	}

	if(typeof lastX !== "undefined") {
		this._left = lastX;
	}

	if(typeof lastY !== "undefined") {
		this._top=lastY;
	}



	this._note = document.createElement("DIV");
	this._noteTitle = document.createElement("h4");
	this._contentDiv = document.createElement("DIV");
	this._noteText = document.createElement("TEXTAREA");
	this._closeButton = document.createElement("BUTTON");
	this._newButton = document.createElement("BUTTON");
	this._saveButton = document.createElement("BUTTON");
	this._mainBody = document.getElementById('mainThing');
	that = this;

	$(this._note).addClass("note");
	$(this._noteTitle).addClass("noteTitle");
	$(this._noteText).addClass("noteText");
	$(this._contentDiv).addClass("noteContent")
	$(this._closeButton).addClass("noteButton noteClose");
	$(this._newButton).addClass("noteButton noteNew");
	$(this._saveButton).addClass("noteButton noteSave");

	this._note.id = this._noteId;

	this._mainBody.appendChild(this._note);
	this._contentDiv.appendChild(this._noteTitle);
	this._contentDiv.appendChild(this._closeButton);
	this._contentDiv.appendChild(this._noteText);
	this._contentDiv.appendChild(this._saveButton);
	this._contentDiv.appendChild(this._newButton);
	this._note.appendChild(this._contentDiv);
	this._noteTitle.innerText = title;
	this._noteText.innerText = message;
	this._closeButton.innerText = this._closeText;
	this._newButton.innerText = this._newText;
	this._saveButton.innerText = this._saveText;
	this._newButton.id = 'NEWBUTTON';
	$(this._note).draggable();

	this.saveNote = function() {

	}

	this._setOnClicks = function() {
		that._closeButton.onclick = function() {
			$('#'+that._noteId).remove();
			Ajax.Request('<%= tile_update_path %>');
		};

		$(that._newButton).click(function () {
			//TODO: create new post
			Note(that._TITLE,that._MESSAGE, that._top+10,that._left+10);
		});
		
		$(that._saveButton).click(function () {
			//SAVE
		});
	
	}

	this._setOnClicks();
}