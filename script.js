const form = document.getElementById("form");
const title = document.getElementById("title");
let output = "";
// This function takes a ROT13 encoded string as input and returns a decoded string.
function rot13(str) {
  str = str.toUpperCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((c) => c.toUpperCase());
  let cypher = "";
  let solution = [];
  let letter = "";
  let position = 0;

  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    // Check if it's a letter
    if (letter.match(/[a-z]/i)) {
      position = alphabet.indexOf(letter);
      position += 13;
      // Get rollover values
      if (position >= 26) {
        position = position - 26;
      }
      cypher = alphabet[position];
      solution.push(cypher);
      //   console.log(solution);
    } else {
      solution.push(str[i]);
    }
  }

  str = solution.join("");
  console.log(str);
  return str;
}

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isNaN(title.value)) {
    output = rot13(title.value);
  } else {
    output = `${title.value} must contains only letters.`;
  }

  document.getElementById("output").innerHTML = `${output}`;
  console.log(output);
});
