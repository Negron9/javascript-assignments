{
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
}

function encryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

function encryptMessage (word, shift)
{
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    encryptedMessage += encryptLetter(word[i], shift);
  }
  return encryptedMessage;
}

function decryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}

function decryptMessage (word, shift)
{
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}

//Casesar will get BRUTUS back because decryption is the inverted function of encryption. THey will cancel each other out if used within the same function.//

