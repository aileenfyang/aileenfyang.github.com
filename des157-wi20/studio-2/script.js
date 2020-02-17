(function(){
  "use strict"
  const coffee = document.getElementById('coffeebtn');
  const airpods = document.getElementById('airpodsbtn');
  const backpack = document.getElementById('backpackbtn');
  const text = document.getElementById('answer');
  text.setAttribute("class", "invisible");
  coffee.addEventListener("click", function(event) {
    event.preventDefault();
    text.innerHTML = `<p>South CoHo Caramel Macchiato:<br> -
      Spent $4 .50 on a shot of espresso, some milk, and caramel <br>
      -Why are things at UCD so expensive <br>
      -I only did this because my roommate works at the CoHo <br>
      -You’ re welcome, Rachel<p>`;
    text.setAttribute("class", "visible");
  });
  airpods.addEventListener("click", function(event) {
    event.preventDefault();
    text.innerHTML = `<p>Apple Airpods: <br>
    -Why did I spent $130 on a pair of earbuds <br>
    -I mean I got the employee discount but still <br>
    -This hurted man... <br>
    -Love listening to music though<p>`;
    text.setAttribute("class", "visible");
  });
  backpack.addEventListener("click", function(event) {
    event.preventDefault();
    text.innerHTML = `<p>Fjallraven Kanken Backpack: <br>
    -$110 for a sack of canvas <br>
    -I like that its square and 17” but still... <br>
    -It only has one big pocket and still costs so much<p>`;
    text.setAttribute("class", "visible");
  });
}());
