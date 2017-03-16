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
      displayPeople(people);
    break;
    case 'no':
      searchByTraits(people);
    break;
    default:
    app(people); // restart app
    break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */



  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      info(person, people);
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
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
  var firstName = promptFor("What is the person's first name?", chars).toLowerCase();
  var lastName = promptFor("What is the person's last name?", chars).toLowerCase();
   var result = [];
   result.push(firstName);
   result.push(lastName);
   console.log(result);
   return result;
}

// Find by name - actually checking the data
var firstName;
var lastName;
function findByName(people, firstName, lastName){
  var personResult = people.filter(filterByName);
  console.log(personResult);
  return personResult;
}
function filterByName(person){
  return person.firstName.toLowerCase() === firstName && person.lastName.toLowerCase() === lastName;
}


function displayInfo(people, person, id, firstName, lastName, gender, dob, height, weight, eyeColor, occupation){
  var personInfo = [];
  personInfo.push(id);
  personInfo.push(firstName);
  personInfo.push(lastName);
  personInfo.push(gender);
  personInfo.push(dob);
  personInfo.push(height);
  personInfo.push(weight);
  personInfo.push(eyeColor);
  personInfo.push(occupation);
  personInfo.push(parents);
  personInfo.push(currentSpouse);
  return personInfo;
}

function info(person, people){
  var personInfo = displayInfo(person, personInfo[0], personInfo[1], personInfo[2], personInfo[3], personInfo[4],personInfo[5], personInfo[6], personInfo[7], personInfo[8], personInfo[9], personInfo[10]);
  return personInfo;
}



//search by Traits -- grabbing the variables
function searchByTraits(people){
  var gender = promptFor("What is the person's gender?", chars);
  var dob = promptFor("What is the person's date of birth?", chars);
  var height = promptFor("What is the person's height?", chars);
  var weight = promptFor("What is the person's weight?", chars);
  var eyeColor = promptFor("What is the person's eye color?", chars);
  var occupation = promptFor("What is the person's occupation?", chars);
  var traits = [];
  traits.push(gender);
  traits.push(dob);
  traits.push(height);
  traits.push(weight);
  traits.push(eyeColor);
  traits.push(occupation);
  return traits;
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

// checking family

function checkFamily(people, parents, currentSpouse){
  for (var i = 0; i < people.length; i++) {
    if (people[9] == personInfo[0] || people[9] == personInfo[0]) {
      break;
    }
  }
}
//checking descendents
function checkDescendents(people, parents){
  if (people.parents == person[0]) {
    return;
  }
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
