Guidebook.controller("ChapterController",
	function($scope, $location, $routeParams, ChapterModel, NoteModel){
    var chapters = ChapterModel.getChapters();
    for(var i = 0; i < chapters.length; i++){
    	chapters[i].notes = NoteModel.getNotesForChapter(chapters[i].id);
    }
  }
  $scope.chapters = chapters;
  $scope.selectedChapterId = $routeParams.chapterId;
  $scope.onDelete = function(noteId){
  	///NoteModel.deleteNote($routeParams.chapterId, noteId);
  	var confirmDelete = confirm("Do you really want to remove this note");
  	if(confirmDelete){
  		$location.path("/deleteNote/" + $routeParams.chapterId + "/" + noteId);
  	}
  }
);