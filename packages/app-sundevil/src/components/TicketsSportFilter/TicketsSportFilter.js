import PropTypes from "prop-types";
import React, { useState, useMemo } from "react";
import SportCard from "./TicketsSportFilterCard";
import { trackGAEvent } from "../../track-ga/track-ga-event";
import "./style.css";
import { InputSportTypeSelect } from "../GameTableSection/GameTableForm/Inputs/InputSportTypeSelect";

export const TicketsSportFilter = ({ cards, title, filterOptions, description, sectionName }) => {
  const [selectedSport, setSelectedSport] = useState("All");

  const filteredSports = useMemo(() => {
    if (selectedSport === "All") return cards;
    return cards.filter((s) => s.category === selectedSport);
  }, [selectedSport, cards]);

  const handleFilterChange = (value) => {
    setSelectedSport(value);

    // ✅ Analytics tracking (aligned with SidebarAccordion)
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

  return (
    <div className="tickets-by-sport min-h-screen relative overflow-hidden">


      {/* Content */}
      <div className="relative z-10 container py-24 d-flex flex-column">

        {/* Header */}
        <div className="header">
          <h2 className="title mb-3 mt-0">{title}</h2>
          <p className="description mb-6">
            {/* Learn about more ways you can purchase tickets to any ASU Sun Devils game. */}
            {description}
          </p>
        </div>

        {/* Filter Section */}
        <div className="filter-section d-flex flex-column">

          <h4 className="filter-title mt-0">Filter by sport</h4>

          <div className="filter-dropdown pb-6 d-flex align-items-center">

            <div className="icon-left">
              {/* <RefreshCw /> */}
            </div>

            <select
              value={selectedSport}
              onChange={(e) => handleFilterChange(e.target.value)}
              aria-label="Filter sports by category"
              className="tckets-sports-category"
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <InputSportTypeSelect />

            <div className="icon-right">
              {/* <ChevronDown /> */}
            </div>
          </div>

          {/* Grid */}
          <div
            className="sports-grid row"
            role="list"
            aria-live="polite"
          >
            {filteredSports.length > 0 ? (
              filteredSports.map((sport) => (
                <div role="listitem" className="col-lg-4 col-md-6 col-12 mb-3" key={sport.id}>
                  <SportCard sport={sport} />
                </div>
              ))
            ) : (
              <p>No sports found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

TicketsSportFilter.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  sectionName: PropTypes.string,
};

export default TicketsSportFilter;
