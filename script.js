// ******************************* // START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// ... (omitted assignment instructions for brevity) ...
//

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the entire contents of script.js inside of an IIFE
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Loop over the names array and say either 'Hello' or "Good Bye"
for (var i = 0; i < names.length; i++) {

  // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Retrieve the first letter and convert to lower case
  var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Compare the 'firstLetter' to lower case 'j'
  if (firstLetter === 'j') {
    // Calls the function defined in SpeakGoodBye.js
    byeSpeaker.speak(names[i]);
  } else {
    // Calls the function defined in SpeakHello.js
    helloSpeaker.speak(names[i]);
  }
}

})();