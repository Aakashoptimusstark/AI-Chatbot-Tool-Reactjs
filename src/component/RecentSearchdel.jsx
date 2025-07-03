import { useState } from 'react';

function RecentSearch({ recentHistory, setRecentHistory, setSelectedHistory }) {
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);

  const clearSingleItem = (indexToDelete) => {
    const updated = recentHistory.filter((_, i) => i !== indexToDelete);
    setRecentHistory(updated);
    localStorage.setItem("history", JSON.stringify(updated));
  };

  const clearAllHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };

  return (
    <div className="col-span-1 dark:bg-zinc-700 bg-red-100 pt-5 overflow-auto h-screen">
      <h1 className="text-xl dark:text-white text-zinc-800 flex justify-center items-center gap-2">
        <span>Recent Search</span>
        <button onClick={clearAllHistory} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f4f4f5">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </button>
      </h1>

      <ul className="text-left px-5 mt-2 space-y-1">
        {recentHistory &&
          recentHistory.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setVisibleMenuIndex(index)}
              onMouseLeave={() => setVisibleMenuIndex(null)}
              className="relative group p-2 pl-4 pr-10 dark:text-zinc-300 text-zinc-700 cursor-pointer truncate rounded-lg dark:hover:bg-zinc-600 hover:bg-red-200 flex justify-between items-center"
            >
              <span onClick={() => setSelectedHistory(item)} className="w-full truncate">
                {item}
              </span>

              {/* Horizontal 3 Dots Icon (⋯) */}
              <span className="text-xl ml-2 cursor-pointer">⋯</span>

              {/* Hover dropdown menu */}
              {visibleMenuIndex === index && (
                <div className="absolute right-8 top-6 bg-white text-black rounded shadow z-20">
                  <button onClick={(e) => { e.stopPropagation(); clearSingleItem(index);}}
                    className="px-3 py-1 text-sm hover:bg-red-500 hover:text-white w-full">
                    Clear</button>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RecentSearch;