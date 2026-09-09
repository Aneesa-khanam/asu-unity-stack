import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import "./style.css";

import { Icon } from "../Icon_";
import { APP_CONFIG } from "../../config"; // adjust if needed
import { useBreakpoint } from "../../utils/use-breakpoint"; // adjust path
import { ArrowButtons } from "../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../Carousel";
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";
import { trackGAEvent } from "../../track-ga/track-ga-event";

const propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      backgroundUrl: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  ctas: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  iconList: PropTypes.shape({
    subTitle: PropTypes.string,
    iconList: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.object,
      })
    ),
  }),
  loop: PropTypes.bool,
  arrowAlignment: PropTypes.string,
  slidesOffsetBefore: PropTypes.number,
  initialSlide: PropTypes.number,
  sectionName: PropTypes.string,
  pageUrl: PropTypes.string,
};



const CardContainer = styled.div`
    background: #fff 0 0 no-repeat padding-box;
    border: 1px solid #d0d0d0;
    height: 100%;
`;

const ArrowButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 52px;

  .arrow-buttons button {
    border: 2px solid black !important;
    background-color: transparent !important;
    color: white !important;
    border-radius: 50%;
    padding: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrow-buttons button svg {
    fill: black !important;
    color: black !important;
    transition: fill 0.3s ease, color 0.3s ease;
  }

  .arrow-buttons button:hover {
    background-color: black !important;
    color: white !important;
    border-color: black !important;
  }

  .arrow-buttons button:hover svg {
    fill: white !important;
    color: white !important;
  }
`;

export const PremiumCards = ({
  images = [],
  loop = false,
  title,
  body,
  arrowAlignment,
  slidesOffsetBefore = 0,
  initialSlide = 0,
  sectionName,
  ctas = [],
  iconList = [],
  className = "",
}) => {
  const [carouselController] = useState(() => new CarouselController());
  const [index, setIndex] = useState(initialSlide);
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const carouselRef = useRef(null);

  // console.log(iconList, 'iconList in premium');

  return (
    <section className={`premium-cards-carousel container ${className || ""}`}>
      <div className="row card-carousel-content-container">
        <div className="col-lg-7 col-12 px-0 left-content">
          <Carousel
            slidesPerView="1"
            loop={loop}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
            centeredSlides={false}
            cardWidth={630}
            initialSlide={0}
            controller={carouselController}
            index={index}
            onIndexChanged={setIndex}
            ref={carouselRef}
            className="mt-3"
          >

            {images?.map((image, index) => (
              <CarouselItem key={index}>
                <CardContainer>
                  <div className="uds-image-text-block-image-container">
                    <img
                      loading="lazy"
                      src={image.url}
                      width="auto"
                      height="max-content"
                      alt={image.alt || ""}
                      className="img-fluid"
                    />
                  </div>
                </CardContainer>
              </CarouselItem>
            ))}
          </Carousel>
        </div>

        <div className="col-lg-5 col-12 right-content">

          <div className="d-lg-none d-md-none d-block">
            {images?.length > 1 && (
              <ArrowButtonsWrapper className="container py-3 px-0">
                <div className="arrow-buttons">
                  <ArrowButtons
                    onLeft={() => carouselController.slidePrev()}
                    onRight={() => carouselController.slideNext()}
                    sectionName={title.trim()}
                  />
                </div>
              </ArrowButtonsWrapper>
            )}
          </div>
          {title && (<h2 className="mt-0 mb-2">
            {title}
          </h2>)}

          {body && (<p dangerouslySetInnerHTML={{
            __html: body,
          }}>
          </p>)}

          {ctas?.map((cta, index) => (
            cta.url ? (
              <a
                href={cta.url}
                target="_self"
                rel="noopener noreferrer"
                role="button"
                ariaLabel={cta.title}
                className={`cta-button mr-2 btn-md mb-2 btn ${index === 0 ? "btn-gold" : "btn-dark"
                  }`}
                onClick={() => {
                  trackGAEvent({
                    event: "link",
                    action: "click",
                    name: "onclick",
                    type: "internal link",
                    region: "main content",
                    section: title.toLowerCase().trim(),
                    text: cta.title.toLowerCase(),
                  });
                }}
              >
                {index === 0 && (
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ticket" className="svg-inline--fa fa-ticket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ marginTop: "-2px", marginRight: "4px", fontSize: "12px", width: "16px", height: "12px" }}>
                    <path fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z">
                    </path>
                  </svg>
                )}
                {cta.title}
              </a>
            ) : (
              cta.title
            )
          ))}

          {iconList?.length > 0 && (
            <div className="premium-icon-groups">

              {iconList.map((group, groupIndex) => (

                <div
                  key={groupIndex}
                  className="premium-icon-group"
                >
                  {group.title && (
                    <h4 className="premium-group-title">
                      {group.title}
                    </h4>
                  )}

                  {Array.isArray(group.iconList) &&
                    group.iconList.length > 0 && (
                      <ul className="mt-1 pl-0 list-section">

                        {group.iconList.map((list, index) => (
                          list?.text ? (
                            <li
                              className="my-2 d-flex list-item align-items-start"
                              key={index}
                            >
                              {list?.icon && (
                                <Icon
                                  icon={list.icon}
                                  className="premium-icon"
                                />
                              )}

                              {list.text && (
                                <div
                                  className="mb-0"
                                  dangerouslySetInnerHTML={{
                                    __html: list.text,
                                  }}
                                />
                              )}
                            </li>) : null
                        ))}
                      </ul>
                    )}
                </div>
              ))}
            </div>
          )}

          <div className="d-lg-block d-md-block d-none">
            {images.length > 1 && (
              <ArrowButtonsWrapper className="container pt-5 px-0">
                <div className="arrow-buttons">
                  <ArrowButtons
                    onLeft={() => carouselController.slidePrev()}
                    onRight={() => carouselController.slideNext()}
                    sectionName={title.trim()}
                  />
                </div>
              </ArrowButtonsWrapper>
            )}
          </div>
        </div>
      </div>

    </section>
  );
};

PremiumCards.propTypes = propTypes;

export default PremiumCards;
