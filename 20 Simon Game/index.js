
var gamePattern = [];

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  buttonColors = ["green", "red", "yellow", "blue"];
  randomChosenColor = buttonColors[randomNumber];
  return randomChosenColor;
}

var id = "#" + nextSequence();
$(id).on("click", function() {
  alert("you clicked button with id: " + id)
  console.log(id)
})

// $(".btn").on("click", function() {
//   const newColor = nextSequence();
//   console.log(newColor);
//   gamePattern.push(newColor)
//   console.log(gamePattern)
// })
