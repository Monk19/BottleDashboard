import React from "react";
import "./DashBoard.modules.css";
function DashBoard() {
  return (
    <div>
      <div className="filter-board">
        <div className="filter-by-date">
          <label htmlFor="From">
            From
            <input type="date"></input>
          </label>
          <label htmlFor="From">
            From
            <input type="date"></input>
          </label>
          <button>Go</button>
        </div>
        <div className="bottle-type">
          <button>All</button>
          <button>Bottle-1</button>
          <button>Bottle-2</button>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
