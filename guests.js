const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  },
  BRUTUS: {
    title: "Senetor",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Daggger", "Marble Bust"]
  }
};
guests.CICERO.pastGifts.push("Golden Lyre");

const antonyRegion = guests.ANTONY.region;

delete guests.CICERO;

const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

//The region of ANTONY in the original guests object will be "Egypt". This is because objects in JavaScript are reference types. When we assign the object to a new variable, we're not creating a new copy of the object. Instead, both variables point to the same object in memory. Thus, changes made through one variable are reflected in the other.//


