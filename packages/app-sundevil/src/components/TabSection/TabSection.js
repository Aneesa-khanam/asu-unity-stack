import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./style.css";

import { PremiumCards } from "../PremiumCards/PremiumCards";
import { APP_CONFIG } from "../../config"; // adjust if needed
import { useBreakpoint } from "../../utils/use-breakpoint"; // adjust path
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";
import { DropDown, DropDownSurface } from "../DropDown";
import { DropDownItem } from "../DropDown/DropDownItem";
import { CollapseIcon } from "../CollapseIcon/CollapseIcon";
import { SportIcon } from "../../../../app-sundevil/src/components/SportIcon";
import { stringToClosestSportName } from "../../../../app-sundevil/src/components/SportIcon/sport-name";
import { trackGAEvent } from "../../track-ga/track-ga-event";

export const TabSection = ({
  title,
  heroTopImage,
  heroBottomImage,
  tabs = [],
}) => {
  const [activeTab, setActiveTab] = useState(
    tabs?.[0]?.tabTitle || ""
  );

  const activeTabData = tabs.find(
    (tab) => tab.tabTitle === activeTab
  );

  // console.log(activeTabData);

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  const comparisonOptions = activeTabData?.cellContent || [];

  const [selectedCompare1, setSelectedCompare1] = useState(
    tabs?.[0]?.cellContent?.[0]?.cell1?.title || ""
  );

  const [selectedCompare2, setSelectedCompare2] = useState(
    tabs?.[0]?.cellContent?.[1]?.cell1?.title || ""
  );

  const compareData1 = comparisonOptions.find(
    (item) => item.cell1?.title === selectedCompare1
  );

  const compareData2 = comparisonOptions.find(
    (item) => item.cell1?.title === selectedCompare2
  );

  const [open, setOpen] = useState(false);

  const isMobileImage = window.innerWidth < 768;

  useEffect(() => {
    const currentOptions = activeTabData?.cellContent || [];

    if (currentOptions.length > 0) {
      setSelectedCompare1(
        currentOptions?.[0]?.cell1?.title || ""
      );

      setSelectedCompare2(
        currentOptions?.[1]?.cell1?.title ||
        currentOptions?.[0]?.cell1?.title ||
        ""
      );
    } else {
      setSelectedCompare1("");
      setSelectedCompare2("");
    }
  }, [activeTab]);

  return (
    <section
      className="tabs-section"
      style={{
        paddingTop: "226px",
      }}
    >
      <div className="body-section">
        <div className="header-section container">
          <h2 className="text-white tabs-section-title mt-0">{title}</h2>
        </div>

        {!isMobile && (<div className="container">
          <ul className="nav-tabs">
            {tabs.map((tab) => (
              <li
                key={tab.tabTitle}
                className={activeTab === tab.tabTitle ? "active" : ""}
                onClick={() => {
                  setActiveTab(tab.tabTitle);
                  trackGAEvent({
                    event: "link",
                    action: "click",
                    name: "onclick",
                    type: "internal link",
                    region: "main content",
                    section: title,
                    text: tab.tabTitle.toLowerCase(),
                  });
                }}
              >
                <SportIcon
                  sportName={stringToClosestSportName(tab.tabTitle)}
                />
                {tab.tabTitle}
              </li>
            ))}
          </ul>

          <div className="tab-content">
            {activeTabData && (
              <div className="row">

                {/* Left Section */}
                <div className="">
                  {activeTabData.tabContentTitle && (
                    <h2 className="mt-0 mb-3 text-white">{activeTabData.tabContentTitle}</h2>
                  )}

                  {activeTabData.tabContentBody && (
                    <p className="mb-3 text-white"
                      dangerouslySetInnerHTML={{
                        __html: activeTabData.tabContentBody,
                      }}
                    >
                    </p>
                  )}

                  {/* CTA Buttons */}
                  {activeTabData.tabContentCta?.length > 0 && (
                    <div style={{ paddingLeft: "4px" }} className="cta-wrapper mb-6">
                      {activeTabData.tabContentCta.map((cta, index) => (
                        <a
                          key={index}
                          href={cta.url}
                          className={`cta-button mr-3 mb-lg-0 mb-md-0 mb-2 btn-md btn ${index === 0 ? "btn-gold" : "btn-maroon"
                            }`}
                          target="_self"
                          rel="noopener noreferrer"
                          role="button"
                          onClick={() => {
                            trackGAEvent({
                              event: "link",
                              action: "click",
                              name: "onclick",
                              type: "internal link",
                              region: "main content",
                              section: activeTabData.tabContentTitle.toLowerCase(),
                              text: cta.title.toLowerCase(),
                            });
                          }}
                        >
                          {cta.title}
                        </a>
                      ))}
                    </div>
                  )}

                </div>

                {Array.isArray(activeTabData.carousels) &&
                  activeTabData.carousels.length > 0 && (
                    <div className="carousel-section">
                      {activeTabData.carousels.map((row, index) => (
                        <PremiumCards
                          key={`${activeTab}-${index}`}
                          className={`pb-5 mt-8 ${index === activeTabData.carousels.length - 1
                            ? "premium-carousel-last"
                            : ""
                            }`}
                          title={row.title}
                          body={row.body}
                          ctas={row.ctas || []}
                          images={row.images || []}
                          iconList={row.iconList || []}
                        />
                      ))}
                    </div>
                  )}

                {activeTabData.tabContentText && (
                  <h2 id={activeTabData.tabTitle.toLowerCase().replace(/\s+/g, '-') + "-" + activeTabData.tabContentTitle.toLowerCase().replace(/\s+/g, '-')} className="mt-0 mb-6 text-white">{activeTabData.tabContentText}</h2>
                )}

                {/* Right Section */}
                {activeTabData.cellContent?.length > 0 && (
                  <div className="table-section">
                    <div className="table-wrapper">
                      <table className="w-100">
                        <thead className="table-header">
                          <tr>
                            <th>Experience</th>
                            <th>Capacity</th>
                            <th>Seating</th>
                            <th>Food and beverage</th>
                            <th>Parking</th>
                            <th>Key amenity</th>
                          </tr>
                        </thead>
                        <tbody className="table-body">
                          {activeTabData.cellContent?.map((row, index) => (
                            <tr key={index}
                              className={index % 2 === 0 ? "even-row" : "odd-row"}>
                              <td className="cell1">
                                {row.cell1?.href ? (
                                  <div>
                                    <a
                                      href={row.cell1.href}
                                      target="_self"
                                      rel="noopener noreferrer"
                                      className="cell1-link"
                                      onClick={() => {
                                        trackGAEvent({
                                          event: "link",
                                          action: "click",
                                          name: "onclick",
                                          type: "internal link",
                                          region: "main content",
                                          section: "experience",
                                          text: row.cell1?.title.toLowerCase(),
                                        });
                                      }}
                                    >
                                      {row.cell1.title}
                                    </a><i class="fa fa-external-link ml-2" aria-hidden="true"></i></div>
                                ) : (
                                  row.cell1?.title
                                )}
                              </td>
                              <td className="cell2">{row.cell2}</td>
                              <td className="cell3">{row.cell3}</td>
                              <td className="cell4">{row.cell4}</td>
                              <td className={`cell5 ${row.cell5 === "correct" ? "text-center" : "text-left"
                                }`}>
                                {
                                  (row.cell5 == 'correct') ? <svg class="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                                    : row.cell5
                                }
                              </td>
                              <td className="cell6">{row.cell6}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>)}

              </div>
            )}
          </div>
        </div>)}

        {isMobile && (
          <div>
            <DropDown
              className="dropdown-wrapper"
              open={open}
              onClose={() => setOpen(false)}
              style={{ height: "100%" }}
              position="bottom-end"
              renderReference={({ ref, open: isOpen }) => (
                <button
                  ref={ref}
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => setOpen(prev => !prev)}
                >
                  {activeTab || "Select Tab"}

                  <span style={{ marginLeft: "8px" }}>
                    {isOpen ? (
                      <i
                        className="fas fa-chevron-up"
                        style={{ fontSize: "12px" }}
                        aria-hidden="true"
                      />
                    ) : (
                      <i
                        className="fas fa-chevron-down"
                        style={{ fontSize: "12px" }}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>
              )}
              renderContent={() => (
                <DropDownSurface>
                  {tabs?.map((tab, index) => {
                    const label =
                      typeof tab.tabTitle === "string"
                        ? tab.tabTitle.trim()
                        : `Tab ${index + 1}`;

                    return (
                      <DropDownItem
                        as="button"
                        key={label}
                        label={label}
                        active={activeTab === label}
                        onClick={() => {
                          setActiveTab(label);
                          setOpen(false);
                          trackGAEvent({
                            event: "select",
                            action: "click",
                            name: "onclick",
                            type: "internal link",
                            region: "main content",
                            section: title.toLowerCase(),
                            text: label ?? " ",
                            component: "text",
                          });
                        }}
                      />
                    );
                  })}
                </DropDownSurface>
              )}
            />

            {activeTabData && (
              <div>
                <div className="mobile-comparison-section container">
                  {/* Left Section */}
                  <div className="">
                    {activeTabData.tabContentTitle && (
                      <h2 className="mt-0 mb-3 text-white">{activeTabData.tabContentTitle}</h2>
                    )}

                    {activeTabData.tabContentBody && (
                      <p className="mb-3 text-white"
                        dangerouslySetInnerHTML={{
                          __html: activeTabData.tabContentBody,
                        }}
                      >
                      </p>
                    )}

                    {/* CTA Buttons */}
                    {activeTabData.tabContentCta?.length > 0 && (
                      <div className="cta-wrapper mb-3">
                        {activeTabData.tabContentCta.map((cta, index) => (
                          <a
                            key={index}
                            href={cta.url}
                            className={`cta-button mr-3 btn-md btn ${index === 0 ? "btn-gold" : "btn-maroon"
                              }`}
                            target="_self"
                            rel="noopener noreferrer"
                            role="button"
                            onClick={() => {
                              trackGAEvent({
                                event: "link",
                                action: "click",
                                name: "onclick",
                                type: "internal link",
                                region: "main content",
                                section: activeTabData.tabContentTitle.toLowerCase(),
                                text: cta.title.toLowerCase(),
                              });
                            }}
                          >
                            {cta.title}
                          </a>
                        ))}
                      </div>
                    )}

                    {activeTabData.tabContentText && (
                      <h4 className="mt-0 mb-3 text-white">{activeTabData.tabContentText}</h4>
                    )}
                  </div>
                  {/* Dropdowns */}
                  {compareData1 && compareData2 && (
                    <div className="comparison-dropdowns mb-4">
                      <div>
                        <p className="mobile-select-lable">Select one:</p>
                        <select
                          value={selectedCompare1}
                          onChange={(e) => {
                            setSelectedCompare1(e.target.value);
                            trackGAEvent({
                              event: "link",
                              action: "select",
                              name: "comparison dropdown",
                              type: "dropdown",
                              region: "main content",
                              section: activeTab?.toLowerCase(),
                              text: e.target.value.toLowerCase(),
                              component: "select",
                            });
                          }}
                          className="comparison-select"
                        >
                          {comparisonOptions
                            .filter((row) => row.cell1?.title !== selectedCompare2)
                            .map((row, index) => (
                              <option
                                key={index}
                                value={row.cell1?.title}
                              >
                                {row.cell1?.title}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div>
                        <p className="mobile-select-lable">Select one:</p>
                        <select
                          value={selectedCompare2}
                          onChange={(e) => {
                            setSelectedCompare2(e.target.value);
                            trackGAEvent({
                              event: "link",
                              action: "select",
                              name: "comparison dropdown",
                              type: "dropdown",
                              region: "main content",
                              section: activeTab?.toLowerCase(),
                              text: e.target.value.toLowerCase(),
                              component: "select",
                            });
                          }}
                          className="comparison-select"
                        >
                          {comparisonOptions
                            .filter((row) => row.cell1?.title !== selectedCompare1)
                            .map((row, index) => (
                              <option
                                key={index}
                                value={row.cell1?.title}
                              >
                                {row.cell1?.title}
                              </option>
                            ))}
                        </select>
                      </div>

                    </div>
                  )}
                  {/* Comparison Table */}
                  {compareData1 && compareData2 && (

                    <div className="comparison-table">
                      <table>
                        <tr className="comparison-row">
                          <td>
                            {compareData1.cell1?.href ? (
                              <div> <a
                                href={compareData1.cell1.href}
                                target="_self"
                                rel="noopener noreferrer"
                                className="text-white cell1-link font-weight-bold"
                                onClick={() => {
                                  trackGAEvent({
                                    event: "link",
                                    action: "click",
                                    name: "onclick",
                                    type: "internal link",
                                    region: "main content",
                                    section: "experience",
                                    text: compareData1.cell1?.title.toLowerCase(),
                                  });
                                }}
                              >
                                {compareData1.cell1.title}
                              </a><i class="fa fa-external-link ml-2" aria-hidden="true"></i></div>
                            ) : (
                              compareData1.cell1?.title
                            )}
                          </td>

                          <td>
                            {compareData2.cell1?.href ? (
                              <div><a
                                href={compareData2.cell1.href}
                                target="_self"
                                rel="noopener noreferrer"
                                className="text-white cell1-link font-weight-bold"
                                onClick={() => {
                                  trackGAEvent({
                                    event: "link",
                                    action: "click",
                                    name: "onclick",
                                    type: "internal link",
                                    region: "main content",
                                    section: "experience",
                                    text: compareData2.cell1?.title.toLowerCase(),
                                  });
                                }}
                              >
                                {compareData2.cell1.title}
                              </a><i class="fa fa-external-link ml-2" aria-hidden="true"></i></div>
                            ) : (
                              compareData2.cell1?.title
                            )}
                          </td>
                        </tr>

                        <tr className="table-subtitle"><td>Capacity</td></tr>
                        <tr className="comparison-row">
                          <td>{compareData1.cell2}</td>
                          <td>{compareData2.cell2}</td>
                        </tr>

                        <tr className="table-subtitle"><td>Seating</td></tr>
                        <tr className="comparison-row">
                          <td>{compareData1.cell3}</td>
                          <td>{compareData2.cell3}</td>
                        </tr>

                        <tr className="table-subtitle food-row-title"><td>Food and beverage</td></tr>
                        <tr className="comparison-row">
                          <td>{compareData1.cell4}</td>
                          <td>{compareData2.cell4}</td>
                        </tr>

                        <tr className="table-subtitle parking-row-title"><td>Parking passes</td></tr>
                        <tr className="comparison-row">
                          <td className={` ${compareData1.cell5 === "correct" ? "text-center" : "text-left"
                            }`}>

                            {
                              (compareData1.cell5 == 'correct') ? <svg class="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                                : compareData1.cell5
                            }
                          </td>
                          <td className={` ${compareData2.cell5 === "correct" ? "text-center" : "text-left"
                            }`}>

                            {
                              (compareData2.cell5 == 'correct') ? <svg class="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                                : compareData2.cell5
                            }
                          </td>
                        </tr>

                        <tr className="table-subtitle"><td>Key amenity</td></tr>
                        <tr className="comparison-row">
                          <td>{compareData1.cell6}</td>
                          <td>{compareData2.cell6}</td>
                        </tr>


                      </table>

                    </div>
                  )}
                </div>
                {Array.isArray(activeTabData.carousels) &&
                  activeTabData.carousels.length > 0 && (
                    <div className="carousel-section">
                      {activeTabData.carousels.map((row, index) => (
                        <PremiumCards
                          key={`${activeTab}-${index}`}
                          className={`pb-5 mt-8 ${index === activeTabData.carousels.length - 1
                            ? "premium-carousel-last"
                            : ""
                            }`}
                          title={row.title}
                          body={row.body}
                          ctas={row.ctas || []}
                          images={row.images || []}
                          iconList={row.iconList || []}
                        />
                      ))}
                    </div>
                  )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TabSection;
