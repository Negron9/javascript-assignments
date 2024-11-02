const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

let locationStart = "";

if (emblemClue1 === "Eagle")
{
  locationStart = "Forum";
}
else if (emblemClue1 === "Lion")
{
  locationStart = "Colosseum";
}
else
{
  locationStart = "Villa";
}

switch (emblemClue3)
{
  case 7:
    locationStart += " North";
    break;
  case 3:
    locationStart += " South";
    break;
  case 9:
    locationStart += " East";
    break;
  case 4:
    locationStart += " West";
    break;
}
