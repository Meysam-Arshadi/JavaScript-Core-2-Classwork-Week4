/*

Exercise 2
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

// function changeBG() {
//   const mainBG = document.getElementById("main");
//   mainBG.style.backgroundColor = "red";
// }

// setInterval(changeBG, 1000);

function changeBG() {
  const randomColor = Math.floor(Math.random() * 12345678).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

setInterval(changeBG, 5000);
