//physical representation for the note 
Note = function(title,message,tableId, lastX,lastY, lastZ) {
	this._TITLE = "Example Title";
	this._MESSAGE = "Example message";
	this._closeText = "x";
	this._saveText = "save";
	this._newText = "+";
	this._top = 192;
	this._left = 221;
	this._depth = 1;
	this._noteId = "TestNote";
	this._tableId = undefined;
	if(typeof tableId !== "undefined") {
		this._noteId = "Note" + tableId;
		this._tableId = tableId;
	}

	if(typeof lastX !== "undefined") {
		this._left = lastX;
	}

	if(typeof lastY !== "undefined") {
		this._top = lastY;
	}

	if(typeof lastZ !== "undefined") {
		console.log(lastZ);
		this._depth = lastZ;
	}


	this._note = document.createElement("DIV");
	this._noteTitle = document.createElement("INPUT");
	this._contentDiv = document.createElement("DIV");
	this._noteText = document.createElement("TEXTAREA");
	this._closeButton = document.createElement("BUTTON");
	this._newButton = document.createElement("BUTTON");
	this._saveButton = document.createElement("BUTTON");
	this._mainBody = document.getElementById('mainThing');
	var that = this;

	$(this._note).addClass("note");
	$(this._noteTitle).addClass("noteTitle");
	$(this._noteText).addClass("noteText");
	$(this._contentDiv).addClass("noteContent")
	$(this._closeButton).addClass("noteButton noteClose");
	$(this._newButton).addClass("noteButton noteNew");
	$(this._saveButton).addClass("noteButton noteSave");

	this._note.id = this._noteId;

	$(this._note).css({"top": that._top, "left": that._left, "z-index":that._depth});

	this._mainBody.appendChild(this._note);
	this._contentDiv.appendChild(this._noteTitle);
	this._contentDiv.appendChild(this._closeButton);
	this._contentDiv.appendChild(this._noteText);
	this._contentDiv.appendChild(this._saveButton);
	this._contentDiv.appendChild(this._newButton);
	this._note.appendChild(this._contentDiv);
	this._noteTitle.value = title;
	this._noteText.value = message;
	this._closeButton.innerText = this._closeText;
	this._newButton.innerText = this._newText;
	this._saveButton.innerText = this._saveText;
	this._newButton.id = 'NEWBUTTON';

	this._saveNoteInfo = function() {
						//Updates post object to represent what is in title and message
				var urlLink = "/posts/"+that._tableId;
				var typeLink = 'PUT';
				$.ajax({
					url:urlLink, 
					type:typeLink,
					data: { post:{'title': that._noteTitle.value, 'content': that._noteText.value, 'lastX': that._left, 'lastY': that._top, 'lastZ': that._depth}},
					success: function(data){
					}
				});
	};
	//sets all the ajax requests to create delete and update notes
	this._setOnClicks = function() {
		that._newButton.onclick = function () {
			that._depth = $(that._note).css('z-index');
			var urlLink = "/posts/";
			var typeLink = 'POST';
			$.ajax({
				url:urlLink, 
				type:typeLink,
				data: { post:{'title': that._TITLE, 'content': that._MESSAGE, 'lastX': that._left + 10, 'lastY': that._top + 10, 'lastZ': that._depth}},
				datatype: 'json',
				success: function(data){
					that._depth = $(that._note).css('z-index');
					new Note(that._TITLE,that._MESSAGE, data['id'],that._left + 10,that._top + 10, that._depth);
				}
			});
		};

		if(that._noteId !== 'TestNote') {
			//deletes post from page
			that._closeButton.onclick = function() {
				var urlLink = "/posts/"+that._tableId;
				$.ajax({
					url: urlLink,
					type:'DELETE',
				});

				$('#'+that._noteId).remove();
			};
			that._saveButton.onclick = function () {
				that._saveNoteInfo();
			};
		}
	};

	this._setOnClicks();
	if(that._noteId !== 'TestNote') {
	$(that._note).draggable ( {
		containment: "parent",
		cursor: "move",
		stack:"div",
		stop: function(){
			that._top = $(that._note).offset().top;
			that._left = $(that._note).offset().left;
			console.log(that._depth+ " "+$(that._note).css("z-index") );
			that._depth = parseInt($(that._note).css("z-index"));
			that._saveNoteInfo();
		}
	} );
	}	
}