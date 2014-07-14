Guidebook.service("NoteModel", function(){
  this.getNotesForChapter = function(chapterId){
  	var chapter = JSON.parse(window.localStorage.getItem(chapterId));
  	if(!chapter || !chapter.notes){
  		 return [];
  	}
    return chapter.notes;
  }
});