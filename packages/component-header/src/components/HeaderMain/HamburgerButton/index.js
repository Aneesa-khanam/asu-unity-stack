// @ts-check
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import mobileMenuSearchIcon from "../../../assets/img/menu-search-icon.png?inline";

import { useAppContext } from "../../../core/context/app-context";

export const HamburgerButton = ({ open, onClick, hidden }) => {
  const { mobile } = useAppContext();

  if (typeof mobile?.hamburger?.render === "function") {
    return mobile.hamburger.render({ open, onClick, hidden });
  }

  const openIcon =
    typeof mobile?.hamburger?.renderOpen === "function" ? (
      mobile.hamburger.renderOpen()
    ) : (
      // <FontAwesomeIcon
      //   icon={faBars}
      //   // @ts-ignore
      //   alt=" "
      // />
         <img
                  src={mobileMenuSearchIcon}
                  alt="Menu and Search Icon"
                 className="uds-hdr-menu-search-icon"
                />
    );

  const closeIcon =
    typeof mobile?.hamburger?.renderClose === "function" ? (
      mobile.hamburger.renderClose()
    ) : (
      <FontAwesomeIcon
        icon={faTimes}
        // @ts-ignore
        alt=" "
      />
    );

  const icon = open ? closeIcon : openIcon;

  return (
    <button
      className={`navbar-toggler${open ? "" : " collapsed"}`}
      type="button"
      onClick={onClick}
      aria-label="Toggle navigation"
      style={mobile?.hamburger?.getStyle?.({ open })}
    >
      {icon}
    </button>
  );
};

HamburgerButton.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};
