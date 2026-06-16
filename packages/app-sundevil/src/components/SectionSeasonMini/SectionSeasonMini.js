import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import "./style.css";

import { Icon } from "../Icon_";
import { APP_CONFIG } from "../../config"; // adjust if needed
import { useBreakpoint } from "../../utils/use-breakpoint"; // adjust path
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";
import { trackGAEvent } from "../../track-ga/track-ga-event";

const propTypes = {
  backgroundImage: PropTypes.string,
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      iconList: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          icon: PropTypes.string,
        })
      ),
      cta: PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
      }),
      currentLinksTitle: PropTypes.string,
      currentLinks: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          url: PropTypes.string,
        })
      ),
      footerText: PropTypes.string,
    })
  ),
  minis: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    cta: PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
};

export const SectionSeasonMini = ({
  seasons = [],
  backgroundImage,
  minis = {},
}) => {

  const firstColumn = seasons.iconList?.slice(
    0,
    Math.ceil(seasons.iconList.length / 2)
  );

  const secondColumn = seasons.iconList?.slice(
    Math.ceil(seasons.iconList.length / 2)
  );

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  return (
    <>
      {!isMobile && (
        <section
          style={{
            backgroundImage: `linear-gradient(
            90deg,
            rgba(25, 25, 25, 0.95) 32%,
            rgba(25, 25, 25, 0.7) 35%,
            rgba(25, 25, 25, 0.3) 70%,
            rgba(25, 25, 25, 0.05) 100%
          ), url('${backgroundImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: "96px",
            paddingBottom: "32px",
          }}
        >
          <div className="container season-minis">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-12 pr-3 text-white section-seasons">
                {seasons?.title && (
                  <h2 className="mb-6">{seasons.title}</h2>
                )}

                {seasons?.body && (
                  <p
                    className="mb-6"
                    dangerouslySetInnerHTML={{
                      __html: seasons.body,
                    }}
                  />
                )}

                <div className="row mb-6">
                  <div className="col-md-6">
                    <ul className="pl-0 list-section">
                      {firstColumn?.map((list, index) => (
                        <li
                          className="my-2 d-flex list-item align-items-start"
                          key={index}
                        >
                          {list.text && (
                            <>
                              {list?.icon && (
                                <Icon
                                  icon={list.icon}
                                  className="season-mini-icon"
                                />
                              )}

                              <div
                                className="mb-0"
                                dangerouslySetInnerHTML={{
                                  __html: list.text,
                                }}
                              />
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <ul className="pl-0 list-section">
                      {secondColumn?.map((list, index) => (
                        <li
                          className="my-2 d-flex list-item align-items-start"
                          key={index}
                        >
                          {list.text && (
                            <>
                              {list?.icon && (
                                <Icon
                                  icon={list.icon}
                                  className="season-mini-icon"
                                />
                              )}

                              <div
                                className="mb-0"
                                dangerouslySetInnerHTML={{
                                  __html: list.text,
                                }}
                              />
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {seasons?.cta && (
                  <a
                    href={seasons.cta.url}
                    target="_self"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-md mb-3 seasons-cta"
                    onClick={() => {
                      trackGAEvent({
                        event: "link",
                        action: "click",
                        name: "onclick",
                        type: "internal link",
                        region: "main content",
                        section: seasons.title.toLowerCase(),
                        text: seasons.cta.text.toLowerCase(),
                      });
                    }}
                  >
                    <svg class="svg-inline--fa fa-ticket" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ticket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"></path></svg>
                    {seasons.cta.text}
                  </a>
                )}

                {Array.isArray(seasons?.currentLinks) &&
                  seasons.currentLinks.length > 0 && (
                    <div className="d-flex align-items-center flex-wrap">
                      {seasons.currentLinksTitle && (
                        <p className="mr-4 mb-0">
                          {seasons.currentLinksTitle}
                        </p>
                      )}

                      {seasons.currentLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_self"
                          rel="noopener noreferrer"
                          className="mr-4 text-white"
                          onClick={() => {
                            trackGAEvent({
                              event: "link",
                              action: "click",
                              name: "onclick",
                              type: "internal link",
                              region: "main content",
                              section: seasons.title.toLowerCase(),
                              text: link.text.toLowerCase(),
                            });
                          }}
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  )}

                {seasons?.footerText && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: seasons.footerText,
                    }}
                  />
                )}
              </div>

              <div className="col-lg-4 col-md-4 col-12 pl-3">
                <div className="section-minis">
                  {minis?.title && (
                    <h2 className="text-white mt-0 mb-4">
                      {minis.title}
                    </h2>
                  )}

                  {minis?.body && (
                    <p
                      className="text-white mt-0 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: minis.body,
                      }}
                    />
                  )}

                  {minis?.cta && (
                    <a
                      href={minis.cta.url}
                      target="_self"
                      rel="noopener noreferrer"
                      className="btn btn-gold btn-sm"
                      onClick={() => {
                        trackGAEvent({
                          event: "link",
                          action: "click",
                          name: "onclick",
                          type: "internal link",
                          region: "main content",
                          section: seasons.title.toLowerCase(),
                          text: minis.cta.text.toLowerCase(),
                        });
                      }}
                    >
                      {minis.cta.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {isMobile && (
        <section>
          <div className="season-minis season-minis-mobile">
            <div className="row">
              <div className="col-12 px-0 text-white section-seasons">
                <div className="container">
                  {seasons?.title && (
                    <h2 className="mb-3">{seasons.title}</h2>
                  )}

                  {seasons?.body && (
                    <p
                      className="mb-3"
                      dangerouslySetInnerHTML={{
                        __html: seasons.body,
                      }}
                    />
                  )}
                </div>

                <div style={{
                  backgroundImage: `linear-gradient(0deg, rgba(25, 25, 25, 0.95) 14%, rgba(25, 25, 25, 0.7) 35%, rgba(25, 25, 25, 0.3) 70%, rgba(25, 25, 25, 0.05) 100%), url('${backgroundImage}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "345px",
                  paddingTop: "96px",
                  paddingBottom: "32px",
                }}></div>

                <div className="container">
                  <div className="row mb-3">
                    <div className="col-12 px-0">
                      <ul className="pl-0 list-section">
                        {firstColumn?.map((list, index) => (
                          <li
                            className="my-2 d-flex list-item align-items-start"
                            key={index}
                          >
                            {list.text && (
                              <>
                                {list?.icon && (
                                  <Icon
                                    icon={list.icon}
                                    className="season-mini-icon"
                                  />
                                )}

                                <div
                                  className="mb-0"
                                  dangerouslySetInnerHTML={{
                                    __html: list.text,
                                  }}
                                />
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-12 px-0">
                      <ul className="pl-0 list-section">
                        {secondColumn?.map((list, index) => (
                          <li
                            className="my-2 d-flex list-item align-items-start"
                            key={index}
                          >
                            {list.text && (
                              <>
                                {list?.icon && (
                                  <Icon
                                    icon={list.icon}
                                    className="season-mini-icon"
                                  />
                                )}

                                <div
                                  className="mb-0"
                                  dangerouslySetInnerHTML={{
                                    __html: list.text,
                                  }}
                                />
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {seasons?.cta && (
                    <a
                      href={seasons.cta.url}
                      target="_self"
                      rel="noopener noreferrer"
                      className="btn btn-gold btn-md mb-3 seasons-cta"
                      onClick={() => {
                        trackGAEvent({
                          event: "link",
                          action: "click",
                          name: "onclick",
                          type: "internal link",
                          region: "main content",
                          section: seasons.title.toLowerCase(),
                          text: seasons.cta.text.toLowerCase(),
                        });
                      }}
                    >
                      {seasons.cta.text}
                    </a>
                  )}

                  {Array.isArray(seasons?.currentLinks) &&
                    seasons.currentLinks.length > 0 && (
                      <div className="d-flex text-white align-items-left mb-9 flex-column">

                        {seasons.currentLinksTitle && (
                          <p className="mr-4 mb-0">
                            {seasons.currentLinksTitle}
                          </p>
                        )}
                        <div>
                          {seasons.currentLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target="_self"
                              rel="noopener noreferrer"
                              className="mr-4 text-white"
                              onClick={() => {
                                trackGAEvent({
                                  event: "link",
                                  action: "click",
                                  name: "onclick",
                                  type: "internal link",
                                  region: "main content",
                                  section: seasons.title.toLowerCase(),
                                  text: link.text.toLowerCase(),
                                });
                              }}
                            >
                              {link.text}
                            </a>
                          ))}</div>
                      </div>
                    )}
                </div>
              </div>

              <div className="col-12 px-0">
                <div className="container">
                  <div className="section-minis mb-9">
                    {minis?.title && (
                      <h2 className="text-white mt-0 mb-4">
                        {minis.title}
                      </h2>
                    )}

                    {minis?.body && (
                      <p
                        className="text-white mt-0 mb-4"
                        dangerouslySetInnerHTML={{
                          __html: minis.body,
                        }}
                      />
                    )}

                    {minis?.cta && (
                      <a
                        href={minis.cta.url}
                        target="_self"
                        rel="noopener noreferrer"
                        className="btn btn-gold btn-sm"
                        onClick={() => {
                          trackGAEvent({
                            event: "link",
                            action: "click",
                            name: "onclick",
                            type: "internal link",
                            region: "main content",
                            section: seasons.title.toLowerCase(),
                            text: minis.cta.text.toLowerCase(),
                          });
                        }}
                      >
                        {minis.cta.text}
                      </a>
                    )}
                  </div>
                  {seasons?.footerText && (
                    <p className="text-white"
                      dangerouslySetInnerHTML={{
                        __html: seasons.footerText,
                      }}
                    />
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}
    </>
  );
};

SectionSeasonMini.propTypes = propTypes;

export default SectionSeasonMini;
