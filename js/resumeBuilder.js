
// WORK
var work = 	{
    "jobs": [
		{
        "employer": "Rabinec Sabinec",
        "title": "Interstellar Overdriver aka The Grand Razorbeam",
        "location": "Amsterdam, The Netherlands",
        "dates": 2001,
        "description": "Lungo froth siphon in, cultivar single shotfrappuccino steamed frappuccino. Siphon, crema aromatic et extra, medium, whipped cup cappuccino latte lungo to go. Acerbic beans foam, arabica, grinder java wings breve java. Caramelization mug white aromatic extraction arabica milk percolator."
        },
        {   
        "employer": "The Old Oak Tree",
        "title": "Cork sniffer",
        "location": "Beijing",
        "dates": 2015,
        "description": "Hodor, hodor... Hodor hodor hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor hodor hodor hodor?! Hodor hodor HODOR! Hodor hodor - hodor?! Hodor hodor - hodor - HODOR hodor, hodor hodor - hodor. Hodor, hodor... Hodor hodor hodor... Hodor hodor HODOR hodor, hodor hodor; hodor hodor hodor! Hodor, hodor hodor. Hodor hodor - hodor. Hodor. Hodor, hodor - hodor - hodor hodor... Hodor hodor hodor hodor!"
        }
    ]
};

work.display = function() {
	for(job in work.jobs) {
		if(work["jobs"].hasOwnProperty(job)){
		$("#workExperience").append(HTMLworkStart);
		
		var e = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var	t = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var et = e + t;
		$(".work-entry:last").append(et);
		
		var d = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(d);
		
		var l = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(l);
		
		
		var des = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(des);

		}
	}
}

work.display();	


// PROJECTS
var projects = {
	"projects" : [
		{
        "title": "Hanginround",
        "dates": 2010,
        "description": "Hanging in a round way",
        "images": [
            "images/treehouse1.png",
		]
		},
        {
	    "title": "How to boil an Egg Sideways",
        "dates": 2011,
        "description": "How to boil an egg sideways",
        "images": [
            "images/udacity1.png",
		]
		}
	]
};
    	
projects.display = function(){
	for(project in projects.projects) {
		if(projects["projects"].hasOwnProperty(project))
		{
			$("#projects").append(HTMLprojectStart);
				
			var t = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(t);
			
			var d = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(d);
			
			var des = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(des);
			
			for(image in projects.projects[project].images) {
				var img = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(img);}
		}
	}
}

projects.display();


// BIO
var bio = { 
	"name" : "Jaap Abrahams",
	"role" : "Web Development",
	"contacts" : {
		"mobile" : "0176-20209080",
		"email" : "jaap7013@gmail.com",
		"location" : "Berlin",
		"github" : "smaharba",
		"twitter" : "@smaharba"
	},
	"skills" : ["Web Development", "Photography", "Copy Writing"],
	"biopic" : "images/2014Jaap2.jpg",
	"welcome" : "Welcome to my resume.<br><span class = 'welcome-description'>This is part of Udacity\'s Front-end Webdeveloper course.<br>&nbsp;&nbsp;&nbsp;This project is about JavaScript, not design :-)!</span>"
};
			
bio.display = function() {

	var nameRole = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role);
	$(nameRole).prependTo("#header");
	
	var mob = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	var email = HTMLemail.replace("%data%", bio.contacts["email"]);
	var loc = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var gh = HTMLgithub.replace("%data%", bio.contacts["github"]);
	var twit = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
	var nsa = mob + email + loc + gh + twit;
	$(nsa).appendTo("#topContacts");
	$(nsa).appendTo("#footerContacts");

	var biopic = HTMLbioPic.replace("%data%", bio.biopic);
	var message = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	var bm = biopic + message;
	$(bm).appendTo("#welcome");

	if(bio["skills"].length > 0){
		$("#welcome").append(HTMLskillsStart);
		}
		 
	for(skill in bio["skills"]) {
		if(bio.skills.hasOwnProperty(skill)) {
			var s = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(s);
		}
	}
}
	
bio.display();

			
// EDUCATION
var education = {
	"schools" : [
		{	
		"name" : "JP Coen School",
		"location" : "Jakarta",
		"degree" : ["Hodor"],
		"dates" : [1970],
		},
		{	"name" : "HPA",
			"location" : "New York",
			"degree" : ["Hodor"],
			"dates" : [1981],
		}
	]
};

education.display = function() {
			
	$("#education").append(HTMLschoolStart);
	for(school in education.schools) {
		if(education["schools"].hasOwnProperty(school)){
	
			var nameDegree = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);	
			$(nameDegree).appendTo(".education-entry");
		}
		
			var date = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(date).appendTo(".education-entry");
			
			var loc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(loc).appendTo(".education-entry");
	}
}

education.display();


// ONLINE CLASSES
var online = 	{
    "courses" : [
		{	
		"title" : "php",
		"school" : "Sitepoint",
		"dates" : 2010,
		"url" : "https://sitepoint.com"},
		{	
		"title" : "css",
		"school" : "Sitepoint",
		"dates" : 2010,
		"url" : "https://sitepoint.com"},
		{	
		"title" : "html5",
		"school" : "Sitepoint",
		"dates" : 2010,
		"url" : "https://sitepoint.com"},
		{	
		"title" : "Python for Everybody",
		"school" : "University of Michigan",
		"dates" : 2013,
		"url" : "https://umich.edu"} 
	]
};
		
online.display = function() {
	if(online["courses"].length > 0){
		
		$(HTMLonlineClasses).appendTo(".education-entry");
	
		for(course in online.courses) {
			if(online["courses"].hasOwnProperty(course)) {
				
				var titleSchool = HTMLonlineTitle.replace("%data%", online.courses[course].title) + HTMLonlineSchool.replace("%data%", online.courses[course].school);
				$(".education-entry").append(titleSchool);
				
				var date = HTMLonlineDates.replace("%data%", online.courses[course].dates);
				$(".education-entry").append(date);
				
				var url = HTMLonlineURL.replace("%data%", online.courses[course].url);
				$(".education-entry").append(url);
			}
		}
	}
}

online.display();

$("#mapDiv").append(googleMap);