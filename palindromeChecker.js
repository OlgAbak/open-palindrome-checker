const button = document.querySelector("#check-btn");
let textInput = document.getElementById('text-input');

function cleanInputString(str) {
    const regex = /[+,\.\:\`\[\]\{\}\(\)\?\!\/\"<>\s%\$#@_]/g;
    return str.replace(regex, "").replace(/\s+/g, "").toLowerCase();
  }

function palindromeChecker(str) {
  const inputText = textInput.value.trim();
  if (inputText === "") {
    alert(`Please input a value`);
} else {
    const cleanedText = cleanInputString(inputText);
    const reversedText = cleanedText.split('').reverse().join('');
    if (cleanedText === reversedText) {
        document.querySelector("#result").innerHTML = `<strong>${textInput.value}</strong> is a palindrome.`;
        }   else {
        document.querySelector("#result").innerHTML = `<strong>${textInput.value}</strong> is not a palindrome.`;
        }
    }
}
button.addEventListener('click', palindromeChecker);