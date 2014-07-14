Guidebook
  .controller("AddNoteController",
	  function($scope, $location, $routeParams, NoteModel){
 		  //$scope.message = "I am inside AddNote";
 		  var chapterId = $routeParams.chapterId;
 		  $scope.cancel = function(){
 		  	$location.path("/chapter/" + chapterId);
 		  };
 		  $scope.createNote = function(){
 		  	NoteModel.addNote(chapterId, $scope.note.content)
 		  	$location.path("/addNote/" + chapterId);
 		  }
    }
  )
  .controller("DeleteNoteController",
  	function($scope, $location, $routeParams, NoteModel){
  		var chapterId = $routeParams.chapterId;
  		NoteModel.deleteNote(chapterId, $routeParams.noteId);
  		$location.path("/chapter/" + chapterId);
    }
  )
;