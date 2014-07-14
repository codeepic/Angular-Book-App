var guideBookConfig = function($routeProvider){//$locationProvider
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
	//$locationProvider.HTML5Mode(true);  
};
var Guidebook = angular.module("Guidebook", ["ngRoute"])
  .config(guideBookConfig);