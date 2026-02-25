/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { Icon } from "../../../../Icon_";
import { Cell, isCleanString } from "./shared";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").CellComponent}
 */
export const CellIcon = props => {
  const { game, configLayout } = props;

  // const hasContent = game?.sportIcon || game?.sportName;
  // Transform sportName if it starts with "M." or "W."
  let displaySportName = game?.sportName;
  if (isCleanString(displaySportName)) {
    if (displaySportName.startsWith("M.")) {
      displaySportName = displaySportName.replace("M.", "Men's");
    } else if (displaySportName.startsWith("W.")) {
      displaySportName = displaySportName.replace("W.", "Women's");
    }
  }

  return configLayout?.includeCellIcon ? (
    <Cell
      className="section-icon-cell"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        width: "120px",
        height: "auto",
        flexDirection: "column",
        flexShrink: 0,
        padding: "12px",
      }}
    >
      {game?.sportIcon && (
        <Icon icon={game?.sportIcon} style={{ width: "18px" }} />
      )}
      {isCleanString(displaySportName) && (
        <div
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          {displaySportName}
        </div>
      )}
    </Cell>
  ) : null;
};
