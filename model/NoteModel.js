Guidebook.service("NoteModel", function(){
  this.getNotesForChapter = function(chapterId){
  	var chapter = JSON.parse(window.localStorage.getItem(chapterId));
  	if(!chapter || !chapter.notes){
  		 return [];
  	}
    return chapter.notes;
  };
  this.addNote = function(chapterId, noteContent){
    var chapter = JSON.parse(window.localStorage.getItem(chapterId));
    if(!chapter){
    	return;
    }
    var now = new Date();
    var note = {
    	id: now,
    	contentl: noteContent
    };
    chapter
  };
  this.deleteNote = function(chapterId, noteId){
    //delete note associated with specific chapter
    var chapter = JSON.parse(window.localStorage.getItem(chapterId));
    if(!chapter || !chapter.notes){
    	return;
    }
    chapter.notes.splice(noteId, 1);
    window.localStorage.setItem(chapterId, JSON.stringify(chapter));
  };
});