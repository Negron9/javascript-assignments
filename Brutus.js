const friend = "BRUTUS"
const shiftValue = 3;

const alphabet = "abcdefghjiklmnopqrstuvwxyz" // Latin Alphabet//

const firstLetter = friend[1]; //find the letter of caesar's friend's name//
const index = alphabet.indexOf(firstLetter.toLowerCase(1)); //should stay the same//
// Java uses a 0-based index system.//

const newIndex = index + shiftValue;

//const encryptedFirstLetter = alphabet[newIndex];//
//const alphabetLength = alphabet.length;//

//const newIndex = (index + shiftValue) % alphabetLength;//

const encryptedFirstLetter = alphabet[newIndex];

const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);






