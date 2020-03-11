document.getElementById("homeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = document.getElementById("hours").value;
  const emissions = (formData * 3.2).toFixed(2);
  const miles = (emissions * 7.8).toFixed(2);
  document.getElementById("output1").innerHTML = `<h1>You emiT ${emissions} kg CO2 every week from sTreaming videos alone.</h1><p>*keep scrolling</p>`;
  document.getElementById("output2").innerHTML = `<h4>ThaT’s equivalenT To driving ${miles} miles in a car.</h4>`;
  window.scrollBy(0, window.innerHeight);
});

document.getElementById("googleForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const searches = document.getElementById("searches").value;
  const searches7 = searches * 7;
  const searchEmissions = (searches7 * 0.2).toFixed(2);
  //console.log(searchEmissions);
  document.getElementById("output3").innerHTML = `<h5>You make ${searches7} Google searches a week!<br> That means you release ${searchEmissions} grams of CO2 from Google searches a week. <br> Over one year, 1.3 trillion Google searches are made, releasing 260,000,000 kilograms of carbon dioxide.</h5>`;
  window.scrollBy(0, window.innerHeight);
});

function swap() {
  if (document.getElementById("mail").src.endsWith('images/email-01.png') != -1) //==:Comparison
  {
    document.getElementById("mail").src = "images/email-02.png"; //=:assignment
  }
}
