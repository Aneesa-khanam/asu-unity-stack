import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import { SportIcon } from "../../../../app-sundevil/src/components/SportIcon";
import { stringToClosestSportName } from "../../../../app-sundevil/src/components/SportIcon/sport-name";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 282px;
  min-height: 412px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 128 / 91;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
`;

const SportLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 24px 24px;
  color: white;
  svg{
    font-size: 16px;
  }
  img{
  width: 16px;
  height: 16px;
  }
`;

const LinksWrapper = styled.div`
  border: 1px solid #d0d0d0;
  background: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;

  .card-hyperlinks{
    &:first-child {
    font-weight:bold;
  }
}
`;

const StyledLink = styled.a`
  color: #8c1d40;
  font-size: 14px;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const iconTypeMap = {
  football: "football",
  "m-basketball": "basketball",
  "w-basketball": "basketball",
  "ice-hockey": "hockey",
  baseball: "baseball",
  softball: "softball",
  volleyball: "volleyball",
  wrestling: "wrestling",
  gymnastics: "gymnastics",
  soccer: "soccer",
  lacrosse: "lacrosse",
};

const cardLinkRows = [
  {
    linkLabel: "Single game tickets",
    linkUrl: "linkUrl1"
  },
  {
    linkLabel: "Group tickets",
    linkUrl: "linkUrl2"
  },
  {
    linkLabel: "Season tickets",
    linkUrl: "linkUrl3"
  },
  {
    linkLabel: "Premium",
    linkUrl: "linkUrl4"
  },
  {
    linkLabel: "My account",
    linkUrl: "linkUrl5"
  },
  {
    linkLabel: "Parking",
    linkUrl: "linkUrl6"
  },
  {
    linkLabel: "Seating chart",
    linkUrl: "linkUrl7"
  },
  {
    linkLabel: "Policies",
    linkUrl: "linkUrl8"
  },
];

const SportIconSvg = ({ type }) => {
  return (
    <svg width="16" height="16">
      <circle cx="8" cy="8" r="6" fill="white" />
    </svg>
  );
};

// fallback links (used if sport.cardLinkRows is missing)
const defaultCardLinks = [
  { linkLabel: "Single game tickets", linkUrl: "#" },
  { linkLabel: "Group tickets", linkUrl: "#" },
  { linkLabel: "Season tickets", linkUrl: "#" },
  { linkLabel: "Premium", linkUrl: "#" },
  { linkLabel: "My account", linkUrl: "#" },
  { linkLabel: "Parking", linkUrl: "#" },
  { linkLabel: "Seating chart", linkUrl: "#" },
  { linkLabel: "Policies", linkUrl: "#" },
];

export const TicketsSportFilterCard = ({
  sport,
  skeleton = false,
  empty = false,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  if (!sport) return null;

  const links = sport.cardLinkRows || defaultCardLinks;

  return (
    <div
      aria-hidden={skeleton || empty}
      style={
        empty ? { pointerEvents: "none", opacity: 0, userSelect: "none" } : {}
      }
    >
      <Root>
        {/* Image Section */}
        <ImageWrapper>
          {!isImageLoaded && (
            <div style={{ background: "#eee", width: "100%", height: "100%" }} />
          )}

          <BackgroundImage
            src={sport.image}
            alt={sport.name}
            loading="lazy"
            onLoad={() => setIsImageLoaded(true)}
          />

          <Overlay />

          <SportLabel>
            <SportIcon
              sportName={stringToClosestSportName(sport.name)}
            />
            <span>
              {sport.name
                ?.replace(/^M\.\s*/i, "Men's ")
                ?.replace(/^W\.\s*/i, "Women's ")}
            </span>
          </SportLabel>
        </ImageWrapper>

        {/* Links Section */}
        <LinksWrapper>
          <LinkRow >
            {links.map((item, index) => (
              <StyledLink
                key={index}
                href={item.linkUrl || "#"}
                className="card-hyperlinks"
              >
                {item.linkLabel}
              </StyledLink>
            ))}
          </LinkRow>
        </LinksWrapper>
      </Root>
    </div>
  );
};

TicketsSportFilterCard.propTypes = {
  sport: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    cardLinkRows: PropTypes.arrayOf(
      PropTypes.shape({
        linkLabel: PropTypes.string,
        linkUrl: PropTypes.string,
      })
    ),
  }),
  skeleton: PropTypes.bool,
  empty: PropTypes.bool,
};

export default TicketsSportFilterCard;
