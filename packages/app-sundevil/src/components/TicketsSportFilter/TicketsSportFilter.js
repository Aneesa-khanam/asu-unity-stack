import PropTypes from "prop-types";
import styled from "styled-components";
import React, { useState, useMemo } from "react";
import SportCard from "./TicketsSportFilterCard";
import { trackGAEvent } from "../../track-ga/track-ga-event";
import "./style.css";
import Select from "../Select/Select";
import { Icon } from "../../../../app-sundevil/src/components/Icon_";




const SelectWrapper = styled.select`
  border: 1px solid rgb(204, 204, 204);
  padding: 0.75rem;
  margin-bottom:48px;
  width: 100%;
  max-width: 486px;
  height: 53px;
  opacity: 1;
  border-width: 1px;
  padding: 16px;
`;

export const TicketsSportFilter = ({
  cards = [],
  title,
  filterOptions = [],
  description,
  sectionName
}) => {
  const [selectedSport, setSelectedSport] = useState("All");
  // console.log(cards, 'cards');
  // ✅ Correct filtering
  const filteredSports = useMemo(() => {
    if (selectedSport === "All") return cards;

    return cards.filter(
      (s) => s.category === selectedSport
    );
  }, [selectedSport, cards]);

  const handleFilterChange = (value) => {
    setSelectedSport(value);

    trackGAEvent({
      event: "filter",
      action: "change",
      name: "onclick",
      type: "dropdown",
      region: "main content",
      section: sectionName ?? "tickets by sport",
      text: value.toLowerCase(),
      component: "sports filter",
    });
  };

  // console.log(filterOptions, 'filterOptions');
  return (
    <div className="tickets-by-sport">
      <div className="container">

        {/* Header */}
        <div className="header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        {/* Filter */}
        <div className="filter-section">
          <h4>Filter by sport</h4>

          {/* <SelectWrapper
            value={selectedSport}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
          <Icon icon={option.icon} />
                {option?.icon && (
                  <Icon icon={option.icon} style={{ paddingRight: "0.5rem" }} />
                )}
                {option?.icon && <Icon key={JSON.stringify(option.icon)} icon={option.icon} />}
                {option.label}
              </option>
            ))}
          </SelectWrapper> */}

          <SelectWrapper
            value={selectedSport}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="tckets-sports-category"
          >
            {[...filterOptions].filter((option) => option.label !== "General")
              .sort((a, b) => {
                if (a.label === "All") return -1;
                if (b.label === "All") return 1;

                return a.label.localeCompare(b.label);
              })
              .map((option) => (
                <option key={option.value} value={option.value}>
                  {/* {option.label}    */}
                  {option.label
                    ?.replace(/^M\.\s*/i, "Men's ")
                    ?.replace(/^W\.\s*/i, "Women's ")}
                </option>
              ))}
          </SelectWrapper>
        </div>

        {/* Grid */}
        <div className="sports-grid row">
          {filteredSports.length > 0 ? (
            filteredSports.map((sport) => (
              <div className="col-lg-4 col-md-6 col-12 mb-3" key={sport.id}>
                <SportCard sport={sport} />
              </div>
            ))
          ) : (
            <p>No sports found.</p>
          )}
        </div>

      </div>
    </div>
  );
};

TicketsSportFilter.propTypes = {
  cards: PropTypes.array,
  description: PropTypes.string,
  title: PropTypes.string,
  filterOptions: PropTypes.array,
  sectionName: PropTypes.string,
};

export default TicketsSportFilter;
