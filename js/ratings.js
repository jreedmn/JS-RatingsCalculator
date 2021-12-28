function collect_ratings() {
  let ratings = {
    count: 0,
    sum: 0,
    average: 0,
  };
  let rating = 0;
}
const elements = document.querySelectorAll(".rating");

// Pass an anonymous or arrow function to the forEach loop.
// The function should accept a single argument called element.

// In the forEach loop function, call the replace() function on the element.id.
// To replace(), pass the correct arguments that replace the word star with nothing.
// Pass this statement to parseInt() to convert the remaining string to a number.
// All of this should be assigned to the existing rating variable.

elements.forEach((element) => {
  let ratingnum = element.id.replace("star", "");
  rating = parseInt(ratingnum);
});
