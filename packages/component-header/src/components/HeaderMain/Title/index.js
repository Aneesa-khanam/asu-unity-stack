// @ts-check
import React, { useEffect, useState } from "react";

import { useAppContext } from "../../../core/context/app-context";
import { trackHeaderInternalLink } from "../../../core/data-layers";
import { TitlePropTypes } from "../../../core/models/app-prop-types";
import { checkFirstLoad } from "../../../core/utils/helpers/title";
import { TitleWrapper } from "./index.styles";

const renderTrademark = text => {
  if (!text || !text.includes("®")) {
    return text;
  }

  const [before, after] = text.split("®");

  return (
    <>
      {before}
      <span className="sda-trademark">®</span>
      {after}
    </>
  );
};

const Title = () => {
  const [active, setActive] = useState(false);

  const {
    title,
    parentOrg,
    parentOrgUrl,
    baseUrl,
    breakpoint,
    animateTitle,
  } = useAppContext();

  useEffect(() => {
    if (animateTitle !== false) {
      let root = baseUrl === "/" ? window.location.hostname : baseUrl;

      if (
        root &&
        !root.includes(window.location.hostname) &&
        root.indexOf("/") === 0
      ) {
        root = window.location.hostname + root;
      }

      if (root && checkFirstLoad(root)) {
        setActive(true);
      }
    }
  }, [active, animateTitle, baseUrl]);

  if (parentOrg) {
    return (
      <TitleWrapper
        // @ts-ignore
        breakpoint={breakpoint}
        className="title"
        data-testid="title"
      >
        <a
          className="unit-name"
          href={parentOrgUrl}
          onFocus={() => trackHeaderInternalLink({ text: parentOrg })}
          title={`${parentOrg} home page`}
        >
          {parentOrg}
        </a>

        <a
          className={`subunit-name ${active ? "active" : ""}`}
          href={baseUrl}
          onFocus={() => trackHeaderInternalLink({ text: title })}
          title={`${title} home page`}
        >
          {renderTrademark(title)}
        </a>
      </TitleWrapper>
    );
  }

  return (
    <TitleWrapper
      // @ts-ignore
      breakpoint={breakpoint}
      className="title"
      data-testid="title"
    >
      <a
        className={`title-subunit-name ${active ? "active" : ""}`}
        href={baseUrl}
        onFocus={() => trackHeaderInternalLink({ text: title })}
        title={`${title} home page`}
      >
        {renderTrademark(title)}
      </a>
    </TitleWrapper>
  );
};

Title.propTypes = { ...TitlePropTypes };

export { Title };
