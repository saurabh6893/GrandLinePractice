import React, { useMemo, useState } from "react";

const pirates = [
  { id: 1, name: "Monkey D. Luffy", bounty: 3000000000 },
  { id: 2, name: "Roronoa Zoro", bounty: 1111000000 },
  { id: 3, name: "Nami", bounty: 366000000 },
  { id: 4, name: "Usopp", bounty: 500000000 },
  { id: 5, name: "Sanji", bounty: 1032000000 },
  { id: 6, name: "Chopper", bounty: 1000 },
  { id: 7, name: "Robin", bounty: 930000000 },
  { id: 8, name: "Franky", bounty: 394000000 },
  { id: 9, name: "Brook", bounty: 383000000 },
  { id: 10, name: "Jinbe", bounty: 1100000000 },
  { id: 11, name: "Portgas D. Ace", bounty: 550000000 },
  { id: 12, name: "Trafalgar Law", bounty: 3000000000 },
  { id: 13, name: "Eustass Kid", bounty: 3000000000 },
  { id: 14, name: "Killer", bounty: 200000000 },
  { id: 15, name: "Dracule Mihawk", bounty: 3600000000 },
  { id: 16, name: "Buggy", bounty: 3189000000 },
  { id: 17, name: "Boa Hancock", bounty: 1659000000 },
  { id: 18, name: "Crocodile", bounty: 1950000000 },
  { id: 19, name: "Donquixote Doflamingo", bounty: 340000000 },
  { id: 20, name: "Bartholomew Kuma", bounty: 296000000 },
  { id: 21, name: "Gecko Moria", bounty: 320000000 },
  { id: 22, name: "Sabo", bounty: 602000000 },
  { id: 23, name: "X Drake", bounty: 222000000 },
  { id: 24, name: "Jewelry Bonney", bounty: 320000000 },
  { id: 25, name: "Capone Bege", bounty: 350000000 },
  { id: 26, name: "Basil Hawkins", bounty: 320000000 },
  { id: 27, name: "Scratchmen Apoo", bounty: 350000000 },
  { id: 28, name: "Urouge", bounty: 108000000 },
  { id: 29, name: "Benn Beckman", bounty: 650000000 },
  { id: 30, name: "Lucky Roux", bounty: 400000000 },
  { id: 31, name: "Yasopp", bounty: 380000000 },
  { id: 32, name: "Shanks", bounty: 4048900000 },
  { id: 33, name: "Edward Newgate", bounty: 5046000000 },
  { id: 34, name: "Marco", bounty: 1374000000 },
  { id: 35, name: "Vista", bounty: 450000000 },
  { id: 36, name: "Jozu", bounty: 420000000 },
  { id: 37, name: "Kaido", bounty: 4611100000 },
  { id: 38, name: "Charlotte Linlin", bounty: 4388000000 },
  { id: 39, name: "Katakuri", bounty: 1057000000 },
  { id: 40, name: "Smoothie", bounty: 932000000 },
  { id: 41, name: "Cracker", bounty: 860000000 },
  { id: 42, name: "Perospero", bounty: 700000000 },
  { id: 43, name: "Jack", bounty: 1000000000 },
  { id: 44, name: "Queen", bounty: 1320000000 },
  { id: 45, name: "King", bounty: 1390000000 },
  { id: 46, name: "Arlong", bounty: 20000000 },
  { id: 47, name: "Kuro", bounty: 16000000 },
  { id: 48, name: "Krieg", bounty: 17000000 },
  { id: 49, name: "Alvida", bounty: 5000000 },
  { id: 50, name: "Bellamy", bounty: 195000000 },
  { id: 51, name: "Cavendish", bounty: 330000000 },
  { id: 52, name: "Bartolomeo", bounty: 200000000 },
  { id: 53, name: "Enel", bounty: 200000000 }, // Estimated; no official bounty
  { id: 54, name: "Rob Lucci", bounty: 250000000 }, // Estimated; former CP9, now CP0
  { id: 55, name: "Kaku", bounty: 100000000 }, // Estimated; former CP9, now CP0
  { id: 56, name: "Hatchan", bounty: 8000000 }, // Per wiki
  { id: 57, name: "Kuroobi", bounty: 9000000 }, // Estimated; Arlong Pirates
  { id: 58, name: "Chew", bounty: 5500000 }, // Estimated; Arlong Pirates
  { id: 59, name: "Mr. 1 (Daz Bonez)", bounty: 75000000 }, // Per wiki
  { id: 60, name: "Mr. 2 Bon Clay", bounty: 32000000 }, // Per wiki
  { id: 61, name: "Mr. 3 (Galdino)", bounty: 24000000 }, // Per wiki
  { id: 62, name: "Miss Doublefinger", bounty: 35000000 }, // Per wiki
  { id: 63, name: "Foxy", bounty: 24000000 }, // Per wiki
  { id: 64, name: "Wapol", bounty: 10000000 }, // Estimated; former king, pirate
  { id: 65, name: "Hody Jones", bounty: 60000000 }, // Estimated; Fish-Man Island
  { id: 66, name: "Vander Decken IX", bounty: 45000000 }, // Estimated; Fish-Man Island
  { id: 67, name: "Caesar Clown", bounty: 300000000 }, // Per wiki
  { id: 68, name: "Pica", bounty: 99000000 }, // Per wiki
  { id: 69, name: "Trebol", bounty: 99000000 }, // Per wiki
  { id: 70, name: "Diamante", bounty: 99000000 }, // Per wiki
  { id: 71, name: "Vergo", bounty: 150000000 }, // Estimated; Donquixote Pirates
  { id: 72, name: "Monet", bounty: 70000000 }, // Estimated; Donquixote Pirates
  { id: 73, name: "Sai", bounty: 210000000 }, // Per wiki
  { id: 74, name: "Hajrudin", bounty: 100000000 }, // Estimated; Giant Warrior Pirates
  { id: 75, name: "Ideo", bounty: 120000000 }, // Estimated; Straw Hat Grand Fleet
  { id: 76, name: "Leo", bounty: 80000000 }, // Estimated; Tontatta Pirates
  { id: 77, name: "Dorry", bounty: 100000000 }, // Per wiki
  { id: 78, name: "Brogy", bounty: 100000000 }, // Per wiki
  { id: 79, name: "Oars Jr.", bounty: 550000000 }, // Per wiki
  { id: 80, name: "Pell", bounty: 50000000 }, // Estimated; Alabasta guard, assumed bounty
  { id: 81, name: "Chaka", bounty: 45000000 }, // Estimated; Alabasta guard, assumed bounty
  { id: 82, name: "Kozuki Momonosuke", bounty: 50000000 }, // Estimated; Wano leader
  { id: 83, name: "Kin'emon", bounty: 150000000 }, // Estimated; Wano samurai
  { id: 84, name: "Kanjuro", bounty: 100000000 }, // Estimated; Wano samurai
  { id: 85, name: "Raizo", bounty: 120000000 }, // Estimated; Wano ninja
  { id: 86, name: "Inuarashi", bounty: 300000000 }, // Estimated; Mink Tribe
  { id: 87, name: "Nekomamushi", bounty: 300000000 }, // Estimated; Mink Tribe
  { id: 88, name: "Pedro", bounty: 382000000 }, // Per wiki
  { id: 89, name: "Carrot", bounty: 100000000 }, // Estimated; Mink Tribe
  { id: 90, name: "Gaimon", bounty: 5000000 }, // Estimated; minor pirate
  { id: 91, name: "Zeff", bounty: 60000000 }, // Estimated; former pirate
  { id: 92, name: "Gin", bounty: 12000000 }, // Estimated; Krieg Pirates
  { id: 93, name: "Pearl", bounty: 10000000 }, // Estimated; Krieg Pirates
  { id: 94, name: "Cabaji", bounty: 7000000 }, // Estimated; Buggy Pirates
  { id: 95, name: "Mohji", bounty: 6000000 }, // Estimated; Buggy Pirates
  { id: 96, name: "Richie", bounty: 5000000 }, // Estimated; Buggy Pirates
  { id: 97, name: "Aladine", bounty: 80000000 }, // Estimated; Sun Pirates
  { id: 98, name: "Fisher Tiger", bounty: 230000000 }, // Per wiki
  { id: 99, name: "Dellinger", bounty: 15000000 }, // Per wiki
  { id: 100, name: "Senor Pink", bounty: 58000000 }, // Per wiki
  { id: 101, name: "Machvise", bounty: 11000000 }, // Per wiki
  { id: 102, name: "Gladius", bounty: 31000000 }, // Per wiki
  { id: 103, name: "Baby 5", bounty: 8800000 }, // Per wiki
  { id: 104, name: "Buffalo", bounty: 20000000 }, // Estimated; Donquixote Pirates
  { id: 105, name: "Absalom", bounty: 30000000 }, // Estimated; Thriller Bark
  { id: 106, name: "Perona", bounty: 50000000 }, // Estimated; Thriller Bark
  { id: 107, name: "Hogback", bounty: 25000000 }, // Estimated; Thriller Bark
  { id: 108, name: "Buchi", bounty: 7000000 }, // Estimated; Black Cat Pirates
  { id: 109, name: "Sham", bounty: 6000000 }, // Estimated; Black Cat Pirates
  { id: 110, name: "Kurozumi Orochi", bounty: 200000000 }, // Estimated; Wano shogun
  { id: 111, name: "Denjiro", bounty: 180000000 }, // Estimated; Wano samurai
  { id: 112, name: "Ashura Doji", bounty: 170000000 }, // Estimated; Wano samurai
  { id: 113, name: "Kawamatsu", bounty: 160000000 }, // Estimated; Wano samurai
  { id: 114, name: "Pudding", bounty: 500000000 }, // Estimated; Big Mom Pirates
  { id: 115, name: "Daifuku", bounty: 300000000 }, // Per wiki
  { id: 116, name: "Oven", bounty: 300000000 }, // Per wiki
  { id: 117, name: "Compote", bounty: 600000000 }, // Estimated; Big Mom Pirates
  { id: 118, name: "Snack", bounty: 600000000 }, // Per wiki
  { id: 119, name: "Tamago", bounty: 429000000 }, // Per wiki
  { id: 120, name: "Pekoms", bounty: 330000000 }, // Per wiki
  { id: 121, name: "Bobbin", bounty: 105500000 }, // Per wiki
  { id: 122, name: "Who's-Who", bounty: 546000000 }, // Per wiki
  { id: 123, name: "Black Maria", bounty: 480000000 }, // Per wiki
  { id: 124, name: "Sasaki", bounty: 472000000 }, // Per wiki
  { id: 125, name: "Ulti", bounty: 400000000 }, // Per wiki
  { id: 126, name: "Page One", bounty: 290000000 }, // Per wiki
  { id: 127, name: "Wire", bounty: 100000000 }, // Estimated; Kid Pirates
  { id: 128, name: "Heat", bounty: 90000000 }, // Estimated; Kid Pirates
  { id: 129, name: "Bepo", bounty: 500 }, // Per wiki
  { id: 130, name: "Shachi", bounty: 35000000 }, // Estimated; Heart Pirates
  { id: 131, name: "Penguin", bounty: 35000000 }, // Estimated; Heart Pirates
  { id: 132, name: "Jean Bart", bounty: 60000000 }, // Estimated; Heart Pirates
  { id: 133, name: "Orlumbus", bounty: 148000000 }, // Per wiki
  { id: 134, name: "Gotti", bounty: 90000000 }, // Estimated; Fire Tank Pirates
  { id: 135, name: "Vito", bounty: 71000000 }, // Per wiki
  { id: 136, name: "Chinjao", bounty: 542000000 }, // Per wiki
  { id: 137, name: "Shiryu", bounty: 800000000 }, // Estimated; Blackbeard Pirates
  { id: 138, name: "Jesus Burgess", bounty: 600000000 }, // Estimated; Blackbeard Pirates
  { id: 139, name: "Van Augur", bounty: 400000000 }, // Estimated; Blackbeard Pirates
  { id: 140, name: "Laffitte", bounty: 422000000 }, // Per wiki
  { id: 141, name: "Doc Q", bounty: 72000000 }, // Per wiki
];

function formatBounty(num) {
  if (num >= 1_000_000_000_000) {
    return (
      (num / 1_000_000_000_000).toFixed(2).replace(/\.00$/, "") + " Trillion"
    );
  }
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2).replace(/\.00$/, "") + " Billion";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2).replace(/\.00$/, "") + " Million";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(0).replace(/\.00$/, "") + " Thousand";
  }
  return num;
}

export default function Pirates() {
  const [search, setSearch] = useState("");
  const [darkMode, setMode] = useState(false);

  const filteredPirates = useMemo(() => {
    console.log("%c[useMemo] Filtering pirates...", "color: orange");

    return pirates.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

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
            mb-5 font-semibold text-base flex items-center
            ${darkMode ? "text-purple-100" : "text-indigo-700"}
          `}>
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
                <span className="font-semibold text-base">{p.name}</span>
                <span
                  className={`
                  font-bold rounded-lg px-3 py-1 min-w-[105px] text-center text-sm shadow
                  ${
                    darkMode
                      ? "bg-yellow-200 text-yellow-900"
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
