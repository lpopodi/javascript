/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var name = searchByName(people);
      var person = findByName(people, name[0], name[1]);
      mainMenu(person, people);
    break;
    case 'no':
      searchByTraits(people);
      displayPeople(people);
    break;
    default:
    app(people); // restart app
    break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  var person;

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    var personInfo = displayInfo(person);
    break;
    case "family":
    var personFamily = checkFamily(person);
    break;
    case "descendants":
    var personDescendants = checkDescendents(person);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

// search by Name - grabbing the variables
function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars).toLowerCase().trim();
  var lastName = promptFor("What is the person's last name?", chars).toLowerCase().trim();
   var result = [];
   result.push(firstName);
   result.push(lastName);
   console.log(result);
   return result;
}

// Find by name - actually checking the data
function findByName(people, firstName, lastName){
  var person = people.filter(function(personResult) {
    return personResult.firstName.toLowerCase().trim() === firstName && personResult.lastName.toLowerCase().trim() === lastName});
    return person;
}

function displayInfo(person){
var infoMessage = "";
infoMessage += "First Name " + person[0].firstName + "/n";
infoMessage += "Last Name " + person[0].lastName + "/n";
infoMessage += "Gender " + person[0].gender + "/n";
infoMessage += "Date of Birth " + person[0].dob + "/n";
infoMessage += "Height " + person[0].height + "/n";
infoMessage += "Weight " + person[0].weight + "/n";
infoMessage += "Eye Color " + person[0].eyeColor + "/n";
infoMessage += "Occupation " + person[0].occupation + "/n";
infoMessage += "Person ID " + person[0].id + "/n";
alert(infoMessage);
}

// checking family
  var familyMembers = [];
function checkFamily(person){
    for (var i = 0; i < people.length; i++) {
    if (person[0].parents === person.id || person.currentSpouse === person[0].id) {
      alert(familyMembers.tostring("\n"));
      break;
    }
  }
}


//checking descendents
function checkDescendents(person){
  if (person.parents === person[0].id) {
    return;
  }
}

//search by Traits -- grabbing the variables
function searchByTraits(people){
  var gender = promptFor("What is the person's gender?", chars).toLowerCase().trim();
  var dob = promptFor("What is the person's date of birth? Please enter as 3/25/2015", chars);
  var height = promptFor("What is the person's height? Please enter in inches", chars);
  var weight = promptFor("What is the person's weight?", chars);
  var eyeColor = promptFor("What is the person's eye color?", chars).toLowerCase().trim();
  var occupation = promptFor("What is the person's occupation?", chars).toLowerCase().trim();
/*  for (i = 0; i < people.length; i++) {
}*/
}


// Find by Traits - actually checking the data


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
