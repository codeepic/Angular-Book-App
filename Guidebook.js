var guideBookConfig = function($routeProvider){
  $routeProvider
	  .when("/", {
	  	templateUrl: "view/chapter.html",
	  	controller: 'ChapterController'
	  })
	  .when("/chapter/:chapterId", {
	  	templateUrl: "view/chapter.html",
	  	controller: 'ChapterController'
	  })
	  .when("/addNote/:chapterId", {
	  	templateUrl: "view/addNote.html",
	  	controller: 'AddNoteController' 
	  })    
	  .when("/deleteNote/:chapterId/:noteId", {
	  	templateUrl: "view/addNote.html",
	  	controller: 'DeleteNoteController'
	  })
	  .otherwise({
	  	redirectTo: "/" 
	  });
};
var Guidebook = angular.module("Guidebook", ["ngRoute"])
  .config(guideBookConfig);