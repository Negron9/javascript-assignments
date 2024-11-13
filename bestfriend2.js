const alphabet = "abcdefghijklmnopqrstuvwxyz";

let encryptedName = "BRUTUS";

for (let i = 0; i < friend.length; i++)
{
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}
//Using a loop ensures consistent encryption and can easily adapt to names of any length.//