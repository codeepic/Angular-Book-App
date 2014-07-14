Guidebook.controller("ChapterController",
	function($scope, $location, $routeParams, ChapterModel, NoteModel){
    var chapters = ChapterModel.getChapters();
    for(var i = 0; i < chapters.length; i++){
    	chapters[i].notes = NoteModel.getNotesForChapter(chapters[i].id);
    }
  }
);