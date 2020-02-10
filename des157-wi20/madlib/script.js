(function() {
  "use strict"
  // listen for the submission of the form
  document.getElementById("myform").addEventListener("submit", function(event) {
    // prevent the default behavior
    event.preventDefault();

    // get all the text fields from the form
    const formData = document.querySelectorAll("input[type=text]");
    // create an array to hold values from the form
    let words = [];

    //loop through the fields and add the words to the array, one at a time.
    for (let i = 0; i < formData.length; i++) {
      words.push(formData[i].value);
    }
    //You can see the array in the console, if you want...
    console.log(words);

    //run a function to put the words into the madlib... Function below...
    //Pass the array of words the user typed into the function
    makeMadLib(words);
    document.scrollBy(0, document.documentElement.innerHeight);

  });

  //This function takes an array input, then constructs the madlib, peppering
  //in the user's words where necessary.
  function makeMadLib(theWords) {
    const madlib = `Today, it started snowing! ${theWords[0]} went to ski while I went to ${theWords[1]}. While we were together, we saw a ${theWords[2]}. We fought it ${theWords[3]} and then decided to go home and drink a cup of ${theWords[4]}.`;

    //Get the madlib container
    const mlContainer = document.getElementById('madlib');

    //Change the guts of the container to your madlib
    mlContainer.innerHTML = `<p>${madlib}</p>`;

    //change the class on the madlib container so you can see it.
    mlContainer.setAttribute("class", "visible");
  }

  /*******************************
  TO DO:
  1. Add interesting graphics/fun madlib content/theme
  2. Change styling (add fonts from google fonts, colors, etc)
  3. Change the way the madlib appears (add a css animation?)
  4. Adjust JS to suit your madlib
  5. Refactor JS (put in external script file, put in enclosure,
  change var to const or let, etc.)
  6. Have fun!
  *********************************/
}());
