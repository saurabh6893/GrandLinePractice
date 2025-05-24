import React, { useMemo, useState } from "react";
import pirates from "../Pirates";

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
