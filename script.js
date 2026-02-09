const morseCode = {
  "A": ".-", "B": "-...", "C": "-.-.", "D": "-..",
  "E": ".", "F": "..-.", "G": "--.", "H": "....",
  "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
  "M": "--", "N": "-.", "O": "---", "P": ".--.",
  "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
  "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
  "Y": "-.--", "Z": "--..",
  "1": ".----", "2": "..---", "3": "...--",
  "4": "....-", "5": ".....", "6": "-....",
  "7": "--...", "8": "---..", "9": "----.",
  "0": "-----",
  " ": "/"
};

const reverseMorseCode = {};

for (const key in morseCode) {
  if (morseCode.hasOwnProperty(key)) {
    const value = morseCode[key];
    reverseMorseCode[value] = key;
  }
}

const inputField = document.getElementById("input");
const translateButton = document.getElementById("translate");
const outputField = document.getElementById("output");

translateButton.addEventListener("click", () => {
  const inputText = inputField.value.trim().toUpperCase();

  if (inputText === "") {
    outputField.textContent = "No Input Provided";
    return;
  }

  if (inputText.includes(".") || inputText.includes("-")) {
    const morseWords = inputText.split(" / ");
    const translatedWords = morseWords.map(word => {
      const letters = word.split(" ");
      const translatedLetters = letters.map(letter => {
        return reverseMorseCode[letter] || "?";
      });
      return translatedLetters.join("");
    });

    outputField.textContent = translatedWords.join(" ");
  } 

  else {
    const chars = inputText.split("");
    const translated = chars.map(char => {
      return morseCode[char] || char;
    });

    outputField.textContent = translated.join(" ");
  }
});
