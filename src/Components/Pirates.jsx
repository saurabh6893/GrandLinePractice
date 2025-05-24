import React, { useMemo, useState } from "react";

const pirates = [
  {
    id: 1,
    name: "Monkey D. Luffy",
    alias: "Straw Hat",
    bounty: 3000000000,
    status: "alive",
  },
  {
    id: 2,
    name: "Roronoa Zoro",
    alias: "Pirate Hunter",
    bounty: 1111000000,
    status: "alive",
  },
  {
    id: 3,
    name: "Nami",
    alias: "Cat Burglar",
    bounty: 366000000,
    status: "alive",
  },
  {
    id: 4,
    name: "Usopp",
    alias: "Sogeking",
    bounty: 500000000,
    status: "alive",
  },
  {
    id: 5,
    name: "Sanji",
    alias: "Black Leg",
    bounty: 1032000000,
    status: "alive",
  },
  {
    id: 6,
    name: "Chopper",
    alias: "Cotton Candy Lover",
    bounty: 1000,
    status: "alive",
  },
  {
    id: 7,
    name: "Robin",
    alias: "Devil Child",
    bounty: 930000000,
    status: "alive",
  },
  {
    id: 8,
    name: "Franky",
    alias: "Cyborg",
    bounty: 394000000,
    status: "alive",
  },
  {
    id: 9,
    name: "Brook",
    alias: "Soul King",
    bounty: 383000000,
    status: "alive",
  },
  {
    id: 10,
    name: "Jinbe",
    alias: "Knight of the Sea",
    bounty: 1100000000,
    status: "alive",
  },
  {
    id: 11,
    name: "Portgas D. Ace",
    alias: "Fire Fist",
    bounty: 550000000,
    status: "dead",
  },
  {
    id: 12,
    name: "Trafalgar Law",
    alias: "Surgeon of Death",
    bounty: 3000000000,
    status: "alive",
  },
  {
    id: 13,
    name: "Eustass Kid",
    alias: "Captain Kid",
    bounty: 3000000000,
    status: "alive",
  },
  {
    id: 14,
    name: "Killer",
    alias: "Massacre Soldier",
    bounty: 200000000,
    status: "alive",
  },
  {
    id: 15,
    name: "Dracule Mihawk",
    alias: "Hawk-Eyes",
    bounty: 3600000000,
    status: "alive",
  },
  {
    id: 16,
    name: "Buggy",
    alias: "The Clown",
    bounty: 3189000000,
    status: "alive",
  },
  {
    id: 17,
    name: "Boa Hancock",
    alias: "Pirate Empress",
    bounty: 1659000000,
    status: "alive",
  },
  {
    id: 18,
    name: "Crocodile",
    alias: "Sir Crocodile",
    bounty: 1950000000,
    status: "alive",
  },
  {
    id: 19,
    name: "Donquixote Doflamingo",
    alias: "Heavenly Demon",
    bounty: 340000000,
    status: "alive",
  },
  {
    id: 20,
    name: "Bartholomew Kuma",
    alias: "Tyrant",
    bounty: 296000000,
    status: "alive",
  },
  {
    id: 21,
    name: "Gecko Moria",
    alias: "Shadow Master",
    bounty: 320000000,
    status: "alive",
  },
  {
    id: 22,
    name: "Sabo",
    alias: "Flame Emperor",
    bounty: 602000000,
    status: "alive",
  },
  {
    id: 23,
    name: "X Drake",
    alias: "Red Flag",
    bounty: 222000000,
    status: "alive",
  },
  {
    id: 24,
    name: "Jewelry Bonney",
    alias: "Big Eater",
    bounty: 320000000,
    status: "alive",
  },
  {
    id: 25,
    name: "Capone Bege",
    alias: "Gang Bege",
    bounty: 350000000,
    status: "alive",
  },
  {
    id: 26,
    name: "Basil Hawkins",
    alias: "The Magician",
    bounty: 320000000,
    status: "alive",
  },
  {
    id: 27,
    name: "Scratchmen Apoo",
    alias: "Roar of the Sea",
    bounty: 350000000,
    status: "alive",
  },
  {
    id: 28,
    name: "Urouge",
    alias: "Mad Monk",
    bounty: 108000000,
    status: "alive",
  },
  {
    id: 29,
    name: "Benn Beckman",
    alias: null,
    bounty: 650000000,
    status: "alive",
  },
  {
    id: 30,
    name: "Lucky Roux",
    alias: null,
    bounty: 400000000,
    status: "alive",
  },
  {
    id: 31,
    name: "Yasopp",
    alias: "Chaser",
    bounty: 380000000,
    status: "alive",
  },
  {
    id: 32,
    name: "Shanks",
    alias: "Red-Haired",
    bounty: 4048900000,
    status: "alive",
  },
  {
    id: 33,
    name: "Edward Newgate",
    alias: "Whitebeard",
    bounty: 5046000000,
    status: "dead",
  },
  {
    id: 34,
    name: "Marco",
    alias: "The Phoenix",
    bounty: 1374000000,
    status: "alive",
  },
  {
    id: 35,
    name: "Vista",
    alias: "Flower Sword",
    bounty: 450000000,
    status: "alive",
  },
  {
    id: 36,
    name: "Jozu",
    alias: "Diamond Jozu",
    bounty: 420000000,
    status: "alive",
  },
  {
    id: 37,
    name: "Kaido",
    alias: "King of the Beasts",
    bounty: 4611100000,
    status: "dead",
  },
  {
    id: 38,
    name: "Charlotte Linlin",
    alias: "Big Mom",
    bounty: 4388000000,
    status: "dead",
  },
  {
    id: 39,
    name: "Katakuri",
    alias: "Sweet Commander",
    bounty: 1057000000,
    status: "alive",
  },
  {
    id: 40,
    name: "Smoothie",
    alias: "Sweet Commander",
    bounty: 932000000,
    status: "alive",
  },
  {
    id: 41,
    name: "Cracker",
    alias: "Thousand Arms",
    bounty: 860000000,
    status: "alive",
  },
  {
    id: 42,
    name: "Perospero",
    alias: "Candy Man",
    bounty: 700000000,
    status: "alive",
  },
  {
    id: 43,
    name: "Jack",
    alias: "The Drought",
    bounty: 1000000000,
    status: "alive",
  },
  {
    id: 44,
    name: "Queen",
    alias: "The Plague",
    bounty: 1320000000,
    status: "alive",
  },
  {
    id: 45,
    name: "King",
    alias: "The Wildfire",
    bounty: 1390000000,
    status: "alive",
  },
  {
    id: 46,
    name: "Arlong",
    alias: "Saw-Tooth",
    bounty: 20000000,
    status: "alive",
  },
  {
    id: 47,
    name: "Kuro",
    alias: "Klahadore",
    bounty: 16000000,
    status: "alive",
  },
  {
    id: 48,
    name: "Krieg",
    alias: "Don Krieg",
    bounty: 17000000,
    status: "alive",
  },
  {
    id: 49,
    name: "Alvida",
    alias: "Iron Mace",
    bounty: 5000000,
    status: "alive",
  },
  {
    id: 50,
    name: "Bellamy",
    alias: "The Hyena",
    bounty: 195000000,
    status: "alive",
  },
  {
    id: 51,
    name: "Cavendish",
    alias: "Pirate Prince",
    bounty: 330000000,
    status: "alive",
  },
  {
    id: 52,
    name: "Bartolomeo",
    alias: "The Cannibal",
    bounty: 200000000,
    status: "alive",
  },
  {
    id: 53,
    name: "Enel",
    alias: "God Enel",
    bounty: 200000000,
    status: "alive",
  }, // Estimated
  {
    id: 54,
    name: "Rob Lucci",
    alias: "Massacre Weapon",
    bounty: 250000000,
    status: "alive",
  }, // Estimated
  { id: 55, name: "Kaku", alias: null, bounty: 100000000, status: "alive" }, // Estimated
  { id: 56, name: "Hatchan", alias: "Hachi", bounty: 8000000, status: "alive" },
  { id: 57, name: "Kuroobi", alias: null, bounty: 9000000, status: "alive" }, // Estimated
  { id: 58, name: "Chew", alias: null, bounty: 5500000, status: "alive" }, // Estimated
  {
    id: 59,
    name: "Mr. 1 (Daz Bonez)",
    alias: "The Killer",
    bounty: 75000000,
    status: "alive",
  },
  {
    id: 60,
    name: "Mr. 2 Bon Clay",
    alias: "Bentham",
    bounty: 32000000,
    status: "alive",
  },
  {
    id: 61,
    name: "Mr. 3 (Galdino)",
    alias: "Loan Shark",
    bounty: 24000000,
    status: "alive",
  },
  {
    id: 62,
    name: "Miss Doublefinger",
    alias: "Paula",
    bounty: 35000000,
    status: "alive",
  },
  {
    id: 63,
    name: "Foxy",
    alias: "Silver Fox",
    bounty: 24000000,
    status: "alive",
  },
  {
    id: 64,
    name: "Wapol",
    alias: "Tin-Plate",
    bounty: 10000000,
    status: "alive",
  }, // Estimated
  {
    id: 65,
    name: "Hody Jones",
    alias: "New Fish-Man",
    bounty: 60000000,
    status: "alive",
  }, // Estimated
  {
    id: 66,
    name: "Vander Decken IX",
    alias: "Cursed Captain",
    bounty: 45000000,
    status: "alive",
  }, // Estimated
  {
    id: 67,
    name: "Caesar Clown",
    alias: "Gangster Gastino",
    bounty: 300000000,
    status: "alive",
  },
  { id: 68, name: "Pica", alias: null, bounty: 99000000, status: "alive" },
  { id: 69, name: "Trebol", alias: null, bounty: 99000000, status: "alive" },
  {
    id: 70,
    name: "Diamante",
    alias: "Hero of the Colosseum",
    bounty: 99000000,
    status: "alive",
  },
  {
    id: 71,
    name: "Vergo",
    alias: "Demon Bamboo",
    bounty: 150000000,
    status: "dead",
  }, // Estimated
  {
    id: 72,
    name: "Monet",
    alias: "Snow Woman",
    bounty: 70000000,
    status: "dead",
  }, // Estimated
  { id: 73, name: "Sai", alias: "Don Sai", bounty: 210000000, status: "alive" },
  {
    id: 74,
    name: "Hajrudin",
    alias: "Pirate Mercenary",
    bounty: 100000000,
    status: "alive",
  }, // Estimated
  {
    id: 75,
    name: "Ideo",
    alias: "Destruction Cannon",
    bounty: 120000000,
    status: "alive",
  }, // Estimated
  {
    id: 76,
    name: "Leo",
    alias: "Warrior of Tontatta",
    bounty: 80000000,
    status: "alive",
  }, // Estimated
  {
    id: 77,
    name: "Dorry",
    alias: "The Blue Ogre",
    bounty: 100000000,
    status: "alive",
  },
  {
    id: 78,
    name: "Brogy",
    alias: "The Red Ogre",
    bounty: 100000000,
    status: "alive",
  },
  {
    id: 79,
    name: "Oars Jr.",
    alias: "Little Oars",
    bounty: 550000000,
    status: "alive",
  },
  {
    id: 80,
    name: "Pell",
    alias: "The Falcon",
    bounty: 50000000,
    status: "alive",
  }, // Estimated
  {
    id: 81,
    name: "Chaka",
    alias: "The Jackal",
    bounty: 45000000,
    status: "alive",
  }, // Estimated
  {
    id: 82,
    name: "Kozuki Momonosuke",
    alias: null,
    bounty: 50000000,
    status: "alive",
  }, // Estimated
  {
    id: 83,
    name: "Kin'emon",
    alias: "Foxfire",
    bounty: 150000000,
    status: "alive",
  }, // Estimated
  {
    id: 84,
    name: "Kanjuro",
    alias: "Evening Shower",
    bounty: 100000000,
    status: "dead",
  }, // Estimated
  {
    id: 85,
    name: "Raizo",
    alias: "Raizo of the Mist",
    bounty: 120000000,
    status: "alive",
  }, // Estimated
  {
    id: 86,
    name: "Inuarashi",
    alias: "Duke Inuarashi",
    bounty: 300000000,
    status: "alive",
  }, // Estimated
  {
    id: 87,
    name: "Nekomamushi",
    alias: "Master Nekomamushi",
    bounty: 300000000,
    status: "alive",
  }, // Estimated
  {
    id: 88,
    name: "Pedro",
    alias: "Tree Jaguar",
    bounty: 382000000,
    status: "dead",
  },
  { id: 89, name: "Carrot", alias: null, bounty: 100000000, status: "alive" }, // Estimated
  { id: 90, name: "Gaimon", alias: null, bounty: 5000000, status: "alive" }, // Estimated
  { id: 91, name: "Zeff", alias: "Red-Leg", bounty: 60000000, status: "alive" }, // Estimated
  {
    id: 92,
    name: "Gin",
    alias: "Man-Demon",
    bounty: 12000000,
    status: "alive",
  }, // Estimated
  {
    id: 93,
    name: "Pearl",
    alias: "Fire Pearl",
    bounty: 10000000,
    status: "alive",
  }, // Estimated
  {
    id: 94,
    name: "Cabaji",
    alias: "The Acrobat",
    bounty: 7000000,
    status: "alive",
  }, // Estimated
  {
    id: 95,
    name: "Mohji",
    alias: "Beast Tamer",
    bounty: 6000000,
    status: "alive",
  }, // Estimated
  {
    id: 96,
    name: "Richie",
    alias: "Richie the Lion",
    bounty: 5000000,
    status: "alive",
  }, // Estimated
  { id: 97, name: "Aladine", alias: null, bounty: 80000000, status: "alive" }, // Estimated
  {
    id: 98,
    name: "Fisher Tiger",
    alias: "Adventurer",
    bounty: 230000000,
    status: "dead",
  },
  {
    id: 99,
    name: "Dellinger",
    alias: "Fighting Fish",
    bounty: 15000000,
    status: "alive",
  },
  {
    id: 100,
    name: "Senor Pink",
    alias: "Hard-Head",
    bounty: 58000000,
    status: "alive",
  },
  {
    id: 101,
    name: "Machvise",
    alias: "Super-Weight",
    bounty: 11000000,
    status: "alive",
  },
  {
    id: 102,
    name: "Gladius",
    alias: "Punc Punc",
    bounty: 31000000,
    status: "alive",
  },
  {
    id: 103,
    name: "Baby 5",
    alias: "Maid of Destruction",
    bounty: 8800000,
    status: "alive",
  },
  { id: 104, name: "Buffalo", alias: null, bounty: 20000000, status: "alive" }, // Estimated
  {
    id: 105,
    name: "Absalom",
    alias: "Graveyard Absalom",
    bounty: 30000000,
    status: "dead",
  }, // Estimated
  {
    id: 106,
    name: "Perona",
    alias: "Ghost Princess",
    bounty: 50000000,
    status: "alive",
  }, // Estimated
  {
    id: 107,
    name: "Hogback",
    alias: "Genius Surgeon",
    bounty: 25000000,
    status: "alive",
  }, // Estimated
  { id: 108, name: "Buchi", alias: null, bounty: 7000000, status: "alive" }, // Estimated
  { id: 109, name: "Sham", alias: null, bounty: 6000000, status: "alive" }, // Estimated
  {
    id: 110,
    name: "Kurozumi Orochi",
    alias: null,
    bounty: 200000000,
    status: "dead",
  }, // Estimated
  {
    id: 111,
    name: "Denjiro",
    alias: "Drowsy Denjiro",
    bounty: 180000000,
    status: "alive",
  }, // Estimated
  {
    id: 112,
    name: "Ashura Doji",
    alias: "Shutenmaru",
    bounty: 170000000,
    status: "dead",
  }, // Estimated
  {
    id: 113,
    name: "Kawamatsu",
    alias: "Kappa",
    bounty: 160000000,
    status: "alive",
  }, // Estimated
  { id: 114, name: "Pudding", alias: null, bounty: 500000000, status: "alive" }, // Estimated
  {
    id: 115,
    name: "Daifuku",
    alias: "Genie Minister",
    bounty: 300000000,
    status: "alive",
  },
  {
    id: 116,
    name: "Oven",
    alias: "Heat Minister",
    bounty: 300000000,
    status: "alive",
  },
  { id: 117, name: "Compote", alias: null, bounty: 600000000, status: "alive" }, // Estimated
  { id: 118, name: "Snack", alias: null, bounty: 600000000, status: "alive" },
  {
    id: 119,
    name: "Tamago",
    alias: "Baron Tamago",
    bounty: 429000000,
    status: "alive",
  },
  { id: 120, name: "Pekoms", alias: null, bounty: 330000000, status: "alive" },
  {
    id: 121,
    name: "Bobbin",
    alias: "The Sweeper",
    bounty: 105500000,
    status: "alive",
  },
  {
    id: 122,
    name: "Who's-Who",
    alias: "The Droplet",
    bounty: 546000000,
    status: "alive",
  },
  {
    id: 123,
    name: "Black Maria",
    alias: null,
    bounty: 480000000,
    status: "alive",
  },
  { id: 124, name: "Sasaki", alias: null, bounty: 472000000, status: "alive" },
  { id: 125, name: "Ulti", alias: null, bounty: 400000000, status: "alive" },
  {
    id: 126,
    name: "Page One",
    alias: null,
    bounty: 290000000,
    status: "alive",
  },
  { id: 127, name: "Wire", alias: null, bounty: 100000000, status: "alive" }, // Estimated
  { id: 128, name: "Heat", alias: null, bounty: 90000000, status: "alive" }, // Estimated
  { id: 129, name: "Bepo", alias: "Polar Bear", bounty: 500, status: "alive" },
  { id: 130, name: "Shachi", alias: null, bounty: 35000000, status: "alive" }, // Estimated
  { id: 131, name: "Penguin", alias: null, bounty: 35000000, status: "alive" }, // Estimated
  {
    id: 132,
    name: "Jean Bart",
    alias: null,
    bounty: 60000000,
    status: "alive",
  }, // Estimated
  {
    id: 133,
    name: "Orlumbus",
    alias: "Massacre Ruler",
    bounty: 148000000,
    status: "alive",
  },
  { id: 134, name: "Gotti", alias: null, bounty: 90000000, status: "alive" }, // Estimated
  { id: 135, name: "Vito", alias: null, bounty: 71000000, status: "alive" },
  {
    id: 136,
    name: "Chinjao",
    alias: "The Drill",
    bounty: 542000000,
    status: "alive",
  },
  {
    id: 137,
    name: "Shiryu",
    alias: "Of the Rain",
    bounty: 800000000,
    status: "alive",
  }, // Estimated
  {
    id: 138,
    name: "Jesus Burgess",
    alias: "The Champion",
    bounty: 600000000,
    status: "alive",
  }, // Estimated
  {
    id: 139,
    name: "Van Augur",
    alias: "The Supersonic",
    bounty: 400000000,
    status: "alive",
  }, // Estimated
  {
    id: 140,
    name: "Laffitte",
    alias: "Demon Sheriff",
    bounty: 422000000,
    status: "alive",
  },
  {
    id: 141,
    name: "Doc Q",
    alias: "Death God",
    bounty: 72000000,
    status: "alive",
  },
  {
    id: 142,
    name: "Marshall D. Teach",
    alias: "Blackbeard",
    bounty: 3996000000,
    status: "alive",
  },
  {
    id: 143,
    name: "Avalo Pizarro",
    alias: "Corrupt King",
    bounty: 400000000,
    status: "alive",
  }, // Estimated
  {
    id: 144,
    name: "Kuzan",
    alias: "Aokiji",
    bounty: 3000000000,
    status: "alive",
  }, // Estimated
  {
    id: 145,
    name: "Catarina Devon",
    alias: "Crescent Moon Hunter",
    bounty: 400000000,
    status: "alive",
  }, // Estimated
  {
    id: 146,
    name: "Sanjuan Wolf",
    alias: "Colossal Battleship",
    bounty: 400000000,
    status: "alive",
  }, // Estimated
  {
    id: 147,
    name: "Vasco Shot",
    alias: "Heavy Drinker",
    bounty: 400000000,
    status: "alive",
  }, // Estimated
  {
    id: 148,
    name: "Kikunojo",
    alias: "Lingering Snow",
    bounty: 150000000,
    status: "alive",
  }, // Estimated
  {
    id: 149,
    name: "Izo",
    alias: "Whitebeard Pirate",
    bounty: 510000000,
    status: "dead",
  },
  {
    id: 150,
    name: "Gol D. Roger",
    alias: "Pirate King",
    bounty: 5564800000,
    status: "dead",
  },
  {
    id: 151,
    name: "Rocks D. Xebec",
    alias: "Captain Rocks",
    bounty: 4000000000,
    status: "dead",
  }, // Estimated
  {
    id: 152,
    name: "Caribou",
    alias: "Wet-Haired",
    bounty: 210000000,
    status: "alive",
  },
  { id: 153, name: "Coribou", alias: null, bounty: 190000000, status: "alive" },
  {
    id: 154,
    name: "Demaro Black",
    alias: "Fake Straw Hat",
    bounty: 92000000,
    status: "alive",
  },
  {
    id: 155,
    name: "Drip",
    alias: "Fake Sanji",
    bounty: 1000000,
    status: "alive",
  },
  {
    id: 156,
    name: "Mounblutain",
    alias: "Fake Sogeking",
    bounty: 500000,
    status: "alive",
  },
  {
    id: 157,
    name: "Turco",
    alias: "Fake Franky",
    bounty: 400000,
    status: "alive",
  },
  {
    id: 158,
    name: "Kozuki Oden",
    alias: "Fool of a Lord",
    bounty: 500000000,
    status: "dead",
  }, // Estimated
  { id: 159, name: "Toko", alias: null, bounty: 50000000, status: "alive" }, // Estimated
  {
    id: 160,
    name: "Hyougoro",
    alias: "Old Man Hyou",
    bounty: 100000000,
    status: "alive",
  },
];
function formatBounty(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(3).replace(/\.?0+$/, "") + " Billion";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2).replace(/\.?0+$/, "") + " Million";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(0) + " Thousand";
  }
  return num;
}

function createBountyFilter(minBounty) {
  return function (pirate) {
    return pirate.bounty >= minBounty;
  };
}

function statusFilter(alive, dead) {
  // SO GUYS THIS IS A CLOSEURE
  return function (pirate) {
    if (alive && dead) return true;
    if (alive) return pirate.status === "alive";
    if (dead) return pirate.status === "dead";
    return true;
  };
}

export default function Pirates() {
  const [search, setSearch] = useState("");
  const [darkMode, setMode] = useState(false);
  const [checkboxAlive, setCheckboxAlive] = useState(false);
  const [checkboxDead, setCheckboxDead] = useState(false);
  const [minBounty, setMinBounty] = useState(0);

  const filteredPirates = useMemo(() => {
    const searchLower = search.toLowerCase();

    return pirates
      .filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(searchLower);
        const aliasMatch = p.alias
          ? p.alias.toLowerCase().includes(searchLower)
          : false;
        const bountyMatch = p.bounty.toString().includes(searchLower);
        return nameMatch || aliasMatch || bountyMatch;
      })
      .filter(createBountyFilter(minBounty))
      .filter(statusFilter(checkboxAlive, checkboxDead));
  }, [search, minBounty, checkboxDead, checkboxAlive]);

  const pirateCount = filteredPirates.length;

  return (
    <div
      className={`min-h-screen transition-all duration-300 font-sans pt-12 
      ${
        darkMode
          ? "bg-gradient-to-br from-[#20202c] to-[#313149]"
          : "bg-gradient-to-br from-indigo-50 to-indigo-100"
      }
      `}>
      <div
        className={`
        max-w-lg mx-auto
        rounded-3xl p-8
        shadow-2xl
        transition-all
        duration-300
        ${
          darkMode
            ? "bg-[#252942]/80 backdrop-blur-md"
            : "bg-white/70 backdrop-blur-sm"
        }
      `}>
        <div className="flex items-center gap-3 mb-6">
          <h2
            className={`
            flex-1 font-extrabold text-2xl tracking-tight m-0
            ${darkMode ? "text-blue-100 drop-shadow" : "text-indigo-900"}
          `}>
            ☠️ GrandLine DB
          </h2>
          <button
            onClick={() => setMode(!darkMode)}
            className={`
              border-0 h-11 w-11 rounded-xl
              transition-transform duration-100
              cursor-pointer font-bold text-xl
              active:scale-95
              shadow
              ${
                darkMode
                  ? "bg-[#292942] text-blue-50 hover:bg-[#393968]"
                  : "bg-indigo-100 text-[#292942] hover:bg-indigo-300"
              }
            `}
            title="Toggle dark mode"
            aria-label="toggle theme"
            type="button">
            {darkMode ? "🌙" : "🌞"}
          </button>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          <label className="font-semibold">
            Minimum Bounty:{" "}
            <span className="text-indigo-600 dark:text-indigo-300">
              {formatBounty(minBounty)}
            </span>
          </label>
          <input
            type="range"
            min="0"
            max="6000000000"
            step="1000000"
            value={minBounty}
            onChange={(e) => setMinBounty(Number(e.target.value))}
            className="w-full"
          />
          <input
            type="number"
            min={0}
            max={6000000000}
            step={1000000}
            value={minBounty}
            onChange={(e) => setMinBounty(Number(e.target.value))}
            className="border rounded p-1 w-36 mt-1"
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            value={search}
            placeholder="🔎 Type a pirate's name..."
            onChange={(e) => setSearch(e.target.value)}
            className={`
              w-full py-3 px-5 text-base rounded-xl outline-none border-0
              shadow-sm mb-0
              focus:ring-2 focus:ring-indigo-200
              ${
                darkMode
                  ? "bg-[#282c45]/80 text-blue-100 placeholder:opacity-75"
                  : "bg-white/80 text-slate-800"
              }
            `}
          />
        </div>

        <div
          className={`
            mb-5 font-semibold text-base flex items-center justify-between
            ${darkMode ? "text-purple-100" : "text-indigo-700"}
          `}>
          <div className="flex items-center">
            <span
              className={`
              font-extrabold rounded-lg px-3 py-[2px] mr-2
              text-base
              ${
                darkMode
                  ? "bg-blue-900 text-pink-100"
                  : "bg-indigo-100 text-indigo-700"
              }
            `}>
              {pirateCount}
            </span>
            pirate{pirateCount !== 1 ? "s" : ""} found
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={checkboxAlive}
              onChange={() => setCheckboxAlive((v) => !v)}
            />
            <span>Alive</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={checkboxDead}
              onChange={() => setCheckboxDead((v) => !v)}
            />
            <span>Dead</span>
          </label>
        </div>

        <ul className="p-0 m-0 list-none space-y-3">
          {filteredPirates.length === 0 ? (
            <li
              className={`
                italic text-center py-6
                ${darkMode ? "text-red-200" : "text-red-700"}
              `}>
              No pirates found!
            </li>
          ) : (
            filteredPirates.map((p) => (
              <li
                key={p.id}
                className={`
                  flex items-center justify-between
                  rounded-2xl px-5 py-4 shadow
                  ${
                    darkMode
                      ? "bg-[#2c3153]/90 text-blue-100"
                      : "bg-indigo-50 text-indigo-900"
                  }
                `}>
                <span
                  className={`font-semibold text-base ${
                    p.status === "dead" && "text-gray-400"
                  }`}>
                  {p.name}
                </span>
                <span
                  className={`
                  font-bold rounded-lg px-3 py-1 min-w-[105px] text-center text-sm shadow
                  ${
                    darkMode
                      ? p.status === "dead"
                        ? " text-gray-500"
                        : "bg-yellow-200 text-yellow-900"
                      : p.status === "dead"
                      ? " text-gray-500"
                      : "bg-yellow-100 text-yellow-800"
                  }
                `}>
                  {formatBounty(p.bounty)} Berries
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
